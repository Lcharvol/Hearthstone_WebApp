import * as Axios from 'axios';
import { map, split, last, reject, propEq } from 'ramda';
import debug from 'debug';

import { officialApiKey } from '../../config/parameters';

const loginfo = debug('app:cards:error');

const axios = Axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com/',
  headers: { 'X-Mashape-Key': officialApiKey },
});

const ImgAxios = Axios.create({
  baseURL: '',
  headers: { 'X-Mashape-Key': officialApiKey },
});

export const testCardUrl = cardUrl =>
  axios({
    method: 'get',
    url: cardUrl,
  })
    .then(data => data)
    .catch(err => console.log('IMAGE DE MERDE'));

export const loadAllCards = () =>
  axios({
    method: 'get',
    url: 'cards',
  })
    .then(data => data.data)
    .catch(err => {
      throw 'Fail to load all cards';
    });

export const loadInfo = () =>
  axios({
    method: 'get',
    url: 'info',
  })
    .then(data => data.data)
    .catch(err => {
      throw 'Fail to load card info';
    });

export const loadCardBacks = () =>
  axios({
    method: 'get',
    url: 'cardbacks',
  })
    .then(data => data.data)
    .catch(err => {
      throw 'Fail to load card backs';
    });
