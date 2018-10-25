import * as Axios from 'axios';
import { map, split, last, reject, propEq } from 'ramda';

const key = '0f1A2GOFPYmshjv5PqlS5gMR9I7lp1QCht6jsnzDUhLb0Ymgu5';

const axios = Axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com/',
  headers: { 'X-Mashape-Key': key },
});

const replaceCardsImgPath = cards => {
  const baseUrl =
    'http://media.services.zam.com/v1/media/byName/hs/cards/enus/';
  return map(card => {
    const path = split('/');
    const fileName = last(path(card.img || ''));
    const newImagePath = fileName === '' ? '' : `${baseUrl}${fileName}`;
    return {
      ...card,
      img: newImagePath,
    };
  }, cards);
};

const removeNoImgCard = cards => reject(propEq('img', ''))(cards);

export const loadCardBacks = () =>
  axios({
    method: 'get',
    url: 'cardbacks',
  })
    .then(data => data.data)
    .catch(err => console.log('err: ', err));

export const searchCard = name =>
  axios({
    method: 'get',
    url: `cards/search/${name}`,
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));

export const loadCardsByClass = className =>
  axios({
    method: 'get',
    url: `cards/classes/${className}`,
  })
    .then(data => removeNoImgCard(replaceCardsImgPath(data.data)))
    .catch(err => console.log('err: ', err));

export const loadCardsByQuality = quality =>
  axios({
    method: 'get',
    url: `cards/qualities/${quality}`,
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));

export const loadInfo = () =>
  axios({
    method: 'get',
    url: 'info',
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));
