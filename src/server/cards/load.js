import { map, indexBy, prop, replace } from 'ramda';
import fs from 'fs';
import debug from 'debug';

import { classNameFilePath, cardBacksFile } from '../constants/dataFiles';
import { removeNotCollectibleCards } from './utils';

const loginfo = debug('app:cards:load');

const loginfoError = debug('app:cards:load:error');

export const loadCardBacks = ctx => {
  const promise = new Promise(resolve => {
    fs.readFile(cardBacksFile, (err, cardBacks) => {
      if (err) {
        loginfoError(`Cant Load cardBacks`);
        return resolve([]);
      }
      loginfo(`Load cardBacks`);
      resolve({ ...ctx, cardBacks: JSON.parse(cardBacks).data });
    });
  });
  return promise;
};

export const loadClassCards = ctx => {
  const {
    info: { classes },
  } = ctx;
  const promiseTable = map(className => {
    const promise = new Promise(resolve => {
      fs.readFile(
        `${classNameFilePath}${replace(' ', '', className)}.json`,
        (err, cards) => {
          if (err) {
            loginfoError(`Cant Load ${className} cards`);
            return resolve({});
          }
          loginfo(`Load ${className} cards`);
          const filteredCars =
            className !== 'Death Knight'
              ? removeNotCollectibleCards(JSON.parse(cards).data)
              : JSON.parse(cards).data;
          return resolve({
            className: replace(' ', '', className),
            cards: filteredCars,
          });
        },
      );
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
