import { getMonad, censor, Writer } from 'fp-ts/lib/Writer';
import {
  asks,
  Reader,
  reader,
  chain as readerChain,
} from 'fp-ts/lib/Reader';
import { array } from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/pipeable';
import { identity } from 'fp-ts/lib/function';

import { CombineReaderS } from './combineReaderS';

const empty: string[] = [];
const writerS = getMonad({
  empty,
  concat: (a, b) => a.concat(b),
});
export type WriterS<A> = Writer<string[], A>;
export type ReaderS<E, A> = Reader<E, WriterS<A>>;

export const withEffects = <A>(value: A, log: string[]) =>
  censor((initial: string[]) => log.concat(initial))(writerS.of(value));

type ProjectMany<A, R> = (...args: A[]) => R;

export const combineContext: CombineReaderS = <E, A, R>(
  ...args: Array<ReaderS<E, A> | ProjectMany<A, WriterS<R>>>
) => {
  const fas: ReaderS<E, A>[] = args.slice(0, args.length - 1) as any;
  const project: ProjectMany<A, WriterS<R>> = args[args.length - 1] as any;
  const sequencedReaders = array.sequence(reader)(fas);

  return pipe(
    sequencedReaders,
    readerChain(writers => () => {
      const sequencedWriters = array.sequence(writerS)(writers);
      return writerS.chain(sequencedWriters, envs => project(...envs));
    }),
  );
};

export const asksReaderS = <E, A>(f: (e: E) => A): ReaderS<E, A> =>
  asks(e => writerS.of(f(e)));

export const askReaderS = <E>(): ReaderS<E, E> => asksReaderS(identity);
