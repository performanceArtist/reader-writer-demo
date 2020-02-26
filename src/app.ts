import { combineContext, askReaderS, withEffects } from './lib';

type i18n = { lan: 'ru' | 'en' };
type User = { user: string };

const foo = combineContext(askReaderS<User>(), ({ user }) =>
  withEffects(user, ['User effect']),
);
const bar = combineContext(askReaderS<i18n>(), ({ lan }) => withEffects(lan, ['i18n effect']));
const foobar = combineContext(foo, bar, (user, lan) =>
  withEffects(`User ${user}, Language ${lan}`, []),
);

const resolved = foobar({ user: 'Test', lan: 'en' });
const [value, effects] = resolved();
console.log('RESULT', value, effects);
