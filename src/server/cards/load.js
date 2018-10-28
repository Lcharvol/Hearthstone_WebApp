import { map, indexBy, prop } from 'ramda';
import debug from 'debug';

import { loadCardsByClass } from '../officialApiRequest';

const loginfo = debug('app:cards:load');

const loginfoError = debug('app:cards:load:error');

export const loadClassCards = ctx => {
  const {
    info: { classes },
  } = ctx;
  const promiseTable = map(className => {
    const promise = new Promise(resolve => {
      loadCardsByClass(className)
        .then(cards => {
          loginfo(`Load ${className} cards`);
          return resolve({ className, cards });
        })
        .catch(err => {
          loginfoError(`Cant Load ${className} cards`);
          return resolve({});
        });
    });
    return promise;
  }, classes);

  return Promise.all(promiseTable).then(classesCards => ({
    ...ctx,
    cards: {
      ...ctx.cards,
      ...indexBy(prop('className'), classesCards),
    },
  }));
};
