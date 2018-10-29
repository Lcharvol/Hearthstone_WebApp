import initHttp from './http';
import initCards from './cards';
import manageCards from './cards/cardManager';
import { loadClassCards, loadCardBacks } from './cards/load';

const run = ctx =>
  initCards(ctx)
    .then(loadClassCards)
    .then(loadCardBacks)
    .then(manageCards)
    .then(initHttp);

export default run;
