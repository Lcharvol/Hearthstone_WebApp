import debug from 'debug';
import fs from 'fs';

import { infoFile, cardBacksFile } from '../constants/dataFiles';

const loginfo = debug('app:cards:init');

const loginfoError = debug('app:cards:loaderror');

const init = ctx => {
  const promise = new Promise(resolve => {
    fs.readFile(infoFile, (err, info) => {
      loginfo('Cards info loaded');
      if (err) throw err;
      fs.readFile(cardBacksFile, (err, cardBacks) => {
        loginfo('All Cards loaded');
        if (err) throw err;
        resolve({
          ...ctx,
          info: JSON.parse(info),
          cardsBacks: JSON.parse(cardBacks),
          allCards: [],
        });
      });
    });
  });

  return promise;
};

export default init;
