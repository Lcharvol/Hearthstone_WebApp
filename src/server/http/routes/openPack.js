import debug from 'debug';
import { keys, times, map, length } from 'ramda';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

const statsByQuality = [
  {
    quality: 'Rare',
    dropRate: 23,
  },
  {
    quality: 'Epic',
    dropRate: 4.5,
  },
  {
    quality: 'Legendary',
    dropRate: 1,
  },
];

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const getNewCardQuality = (initialQuality = 'Common') => {
  const drop = getRandomNumber(0, 101);
  let cardquality = initialQuality;
  map(quality => {
    if (drop <= quality.dropRate) cardquality = quality.quality;
  }, statsByQuality);
  return cardquality;
};

export const getNewCardFromQuality = (quality, cards) => {
  const cardsByQuality = cards[quality];
  const drop = getRandomNumber(0, length(cardsByQuality.cards));
  return cardsByQuality.cards[drop];
};

export const openPack = async (req, res) => {
  const {
    cards: { byQuality },
  } = req.ctx;

  try {
    const firstCard = getNewCardFromQuality(
      getNewCardQuality('Rare'),
      byQuality,
    );
    let packCards = [firstCard];
    times(
      i =>
        (packCards = [
          ...packCards,
          getNewCardFromQuality(getNewCardQuality(), byQuality),
        ]),
      4,
    );
    loginfo(`openPack request is done`);
    res.json({ data: packCards });
  } catch (err) {
    loginfoError('openPack request fail');
    req.Err(`Failed to open pack`);
  }
};
export default openPack;
