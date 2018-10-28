import initHttp from './http';
import initMongo from './mongo';
import initCards from './cards';
import manageCards from './cards/cardManager';
import { loadClassCards } from './cards/load';

const run = ctx =>
  initHttp(ctx)
    .then(initCards)
    .then(loadClassCards)
    .then(manageCards);

export default run;
