import debug from 'debug';
import fs from 'fs';

import { loadInfo, loadAllCards, loadCardBacks } from '../officialApiRequest';
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
    // loadInfo()
    //   .then(info => {
    //     loadCardBacks()
    //       .then(cardBacks => {
    //         loginfo('Card backs loaded');
    //         loadAllCards()
    //           .then(allCards => {
    //             loginfo('All Cards loaded');
    //             resolve({ ...ctx, info, cardBacks, allCards });
    //           })
    //           .catch(err => loginfoError(err));
    //       })
    //       .catch(err => loginfoError(err));
    //   })
    //   .catch(err => loginfoError(err));
  });

  return promise;
};

export default init;
