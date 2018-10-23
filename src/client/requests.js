import * as Axios from 'axios';

const key = '0f1A2GOFPYmshjv5PqlS5gMR9I7lp1QCht6jsnzDUhLb0Ymgu5';

const axios = Axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com/',
  headers: { 'X-Mashape-Key': key },
});

export const getCardBacks = () =>
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

export const getCardsByClass = className =>
  axios({
    method: 'get',
    url: `cards/classes/${className}`,
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));

export const getCardsByQuality = quality =>
  axios({
    method: 'get',
    url: `cards/qualities/${quality}`,
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));

export const getInfo = () =>
  axios({
    method: 'get',
    url: 'info',
  })
    .then(data => data)
    .catch(err => console.log('err: ', err));
