import debug from 'debug';
import { map, split, last, reject, propEq, compose } from 'ramda';

const loginfo = debug('app:cardManager');

const replaceCardsImgPath = allCards => {
  loginfo('Replace wrong img path');
  const baseUrl =
    'http://media.services.zam.com/v1/media/byName/hs/cards/enus/';
  const promise = new Promise(resolve => {
    resolve(
      map(card => {
        const path = split('/');
        const fileName = last(path(card.img || ''));
        const goldenFileName = last(path(card.imgGold || ''));
        const newImagePath = fileName === '' ? '' : `${baseUrl}${fileName}`;
        const newGoldenImagePath =
          goldenFileName === '' ? '' : `${baseUrl}${goldenFileName}`;
        return {
          ...card,
          img: newImagePath,
          imgGold: newGoldenImagePath,
        };
      }, allCards),
    );
  });
  return promise;
};

const removeNoImgCard = allCards =>
  map(categorie => reject(propEq('img', ''))(categorie), allCards);

const manageCards = ctx => {
  const { allCards } = ctx;
  const promise = new Promise(resolve => {
    replaceCardsImgPath(allCards)
      // .then(removeUntakableImg)
      .then(managedCards => resolve({ ...ctx, allCards: managedCards }));
  });

  return promise;
};

export default manageCards;
