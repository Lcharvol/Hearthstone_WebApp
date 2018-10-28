import debug from 'debug';

import { loadInfo, loadAllCards, loadCardBacks } from '../officialApiRequest';

const loginfo = debug('app:cards:init');

const loginfoError = debug('app:cards:loaderror');

const init = ctx => {
  const {
    config: { db },
  } = ctx;
  const promise = new Promise(resolve => {
    loadInfo()
      .then(info => {
        loginfo('Cards info loaded');
        loadCardBacks()
          .then(cardBacks => {
            loginfo('Card backs loaded');
            loadAllCards()
              .then(allCards => {
                loginfo('All Cards loaded');
                resolve({ ...ctx, info, cardBacks, allCards });
              })
              .catch(err => loginfoError(err));
          })
          .catch(err => loginfoError(err));
      })
      .catch(err => loginfoError(err));
  });

  return promise;
};

export default init;
