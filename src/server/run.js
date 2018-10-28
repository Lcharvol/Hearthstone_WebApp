import initHttp from './http';
import initMongo from './mongo';
import initCards from './cards';
import manageCards from './cards/cardManager';
import { loadClassCards } from './cards/load';

const run = ctx =>
  initCards(ctx)
    .then(loadClassCards)
    .then(manageCards)
    .then(initHttp);

export default run;
