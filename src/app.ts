import { Subject, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';

import { combineContext, askReaderS, withEffects } from './lib';

type i18n = { lan: 'ru' | 'en' };
type User = { user: string };

const subject = new Subject<void>();
const effect$ = subject.asObservable();
const onAction = subject.next.bind(subject);
const send$ = effect$.pipe(tap(() => console.log('SEND')));

const foo = combineContext(
  askReaderS<User>(),
  ({ user }) => withEffects(user, send$),
);
const bar = combineContext(askReaderS<i18n>(), ({ lan }) =>
  withEffects(lan, EMPTY),
);

const foobar = combineContext(foo, bar, (user, lan) =>
  withEffects(`User ${user}, Language ${lan}`, EMPTY),
);

const resolved = foobar({ user: 'Test', lan: 'en' });
const [value, effects$] = resolved();
console.log('RESULT', value, effects$);
effects$.subscribe();
onAction();
