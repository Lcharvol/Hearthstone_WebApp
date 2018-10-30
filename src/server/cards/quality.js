import { keys, map, indexBy, prop } from 'ramda';
import debug from 'debug';

const loginfo = debug('app:cards:initQualities');

const getCardsByQuality = (quality, cards) => {
  let newCards = [];
  map(cardsByClass => {
    map(card => {
      if (card.rarity === quality) newCards = [...newCards, card];
    }, cardsByClass.cards || []);
  }, cards);
  return { quality, cards: newCards };
};

const initCardsByQuality = ctx => {
  const {
    cards,
    info: { qualities },
  } = ctx;
  const promiseTable = map(
    quality =>
      new Promise(resolve => resolve(getCardsByQuality(quality, cards))),
    qualities,
  );

  return Promise.all(promiseTable).then(cardsByQuality => {
    loginfo('Init cards by qualities');
    return {
      ...ctx,
      cards: {
        ...cards,
        byQuality: {
          ...indexBy(prop('quality'), cardsByQuality),
        },
      },
    };
  });
};

export default initCardsByQuality;
