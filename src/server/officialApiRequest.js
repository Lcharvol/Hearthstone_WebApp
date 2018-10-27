import * as Axios from 'axios';
import { map, split, last, reject, propEq } from 'ramda';
import debug from 'debug';

import { officialApiKey } from '../../config/parameters';

const loginfo = debug('app:cards:error');

const axios = Axios.create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.mashape.com/',
  headers: { 'X-Mashape-Key': officialApiKey },
  timeout: 4000,
});

const ImgAxios = Axios.create({
  baseURL: '',
  headers: { 'X-Mashape-Key': officialApiKey },
  timeout: 2000,
});

export const testCardUrl = cardUrl =>
  ImgAxios({
    method: 'get',
    url: cardUrl,
  })
    .then(data => data)
    .catch(err => {
      throw 'Cant load Img';
    });

export const loadAllCards = () =>
  axios({
    method: 'get',
    url: 'cards',
    collectible: 1,
  })
    .then(data => data.data.Basic)
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
