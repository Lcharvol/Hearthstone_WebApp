import initHttp from './http';
import initMongo from './mongo';
import initCards from './cards';
import manageCards from './cards/cardManager';

const run = ctx =>
  initHttp(ctx)
    .then(initCards)
    .then(manageCards);

export default run;
