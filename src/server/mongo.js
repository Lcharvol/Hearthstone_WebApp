import mongobless from 'mongobless';
import { merge } from 'ramda';
import debug from 'debug';

const loginfo = debug('app:mogobless');

const ensureIndexes = () => {
  const tasks = [
    //   Person.collection.ensureIndex({ email: 1 }, { unique: false, background: true }),
    //   Person.collection.ensureIndex({ company_id: 1 }, { background: true }),
    //   Person.collection.ensureIndex({ skills: 1 }, { background: true }),
    //   Person.collection.ensureIndex({ tags: 1 }, { background: true }),
    //   Note.collection.ensureIndex({ entityId: 1 }, { background: true }),
    //   Company.collection.ensureIndex({ 'address.city': 1 }, { background: true }),
    //   Company.collection.ensureIndex({ 'address.country': 1 }, { background: true }),
    //   Company.collection.ensureIndex({ tags: 1 }, { background: true }),
  ];

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
