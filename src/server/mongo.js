import mongobless from 'mongobless';
import { merge } from 'ramda';
import debug from 'debug';

const loginfo = debug('app:mogobless');

const ensureIndexes = () => {
  const tasks = [];

  return Promise.all(tasks);
};

const init = ctx => {
  const {
    config: { db },
  } = ctx;
  return mongobless.connect(merge({ verbose: false }, db)).then(conx =>
    ensureIndexes().then(() => {
      loginfo('Mongo db ready to use.');
      return { ...ctx, db: conx };
    }),
  );
};

export default init;
