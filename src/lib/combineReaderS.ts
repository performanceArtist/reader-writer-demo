import { WriterS, ReaderS } from './index';

export interface CombineReaderS {
	<E, A, R>(a: ReaderS<E, A>, project: (a: A) => WriterS<R>): ReaderS<E, R>;
	<EA, A, EB, B, R>(a: ReaderS<EA, A>, b: ReaderS<EB, B>, project: (a: A, b: B) => WriterS<R>): ReaderS<EA & EB, R>;
	<EA, A, EB, B, EC, C, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		C: ReaderS<EC, C>,
		project: (a: A, b: B, c: C) => WriterS<R>,
	): ReaderS<EA & EB & EC, R>;
	<EA, A, EB, B, EC, C, ED, D, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		project: (a: A, b: B, c: C, d: D) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		project: (a: A, b: B, c: C, d: D, e: E) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		project: (a: A, b: B, c: C, d: D, e: E) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		h: ReaderS<EH, H>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG & EH, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		h: ReaderS<EH, H>,
		i: ReaderS<EI, I>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG & EH & EI, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		h: ReaderS<EH, H>,
		i: ReaderS<EI, I>,
		j: ReaderS<EJ, J>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG & EH & EI & EJ, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, EK, K, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		h: ReaderS<EH, H>,
		i: ReaderS<EI, I>,
		j: ReaderS<EJ, J>,
		k: ReaderS<EK, K>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J, k: K) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG & EH & EI & EJ & EK, R>;
	<EA, A, EB, B, EC, C, ED, D, EE, E, EG, G, EH, H, EI, I, EJ, J, EK, K, EL, L, R>(
		a: ReaderS<EA, A>,
		b: ReaderS<EB, B>,
		c: ReaderS<EC, C>,
		d: ReaderS<ED, D>,
		e: ReaderS<EE, E>,
		g: ReaderS<EG, G>,
		h: ReaderS<EH, H>,
		i: ReaderS<EI, I>,
		j: ReaderS<EJ, J>,
		k: ReaderS<EK, K>,
		l: ReaderS<EL, L>,
		project: (a: A, b: B, c: C, d: D, e: E, g: G, h: H, i: I, j: J, k: K, l: L) => WriterS<R>,
	): ReaderS<EA & EB & EC & ED & EE & EG & EH & EI & EJ & EK & EL, R>;
}