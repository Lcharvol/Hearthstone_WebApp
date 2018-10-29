import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://127.0.0.1:3004/',
  headers: {
    Authorization: 'Basic',
  },
});

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
    .then(data => data.data)
    .catch(err => console.log('err: ', err));

export const loadInfo = () =>
  axios({
    method: 'get',
    url: 'info',
  })
    .then(data => data.data)
    .catch(err => console.log('err: ', err));

export const getPing = () =>
  axios({
    method: 'get',
    url: 'ping',
  })
    .then(({ data, status }) => {
      if (status === 201) throw data;
      return data;
    })
    .catch(err => console.log('Ping  err: ', err));
