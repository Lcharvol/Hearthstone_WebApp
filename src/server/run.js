import initHttp from './http';
import initMongo from './mongo';

const run = ctx => initHttp(ctx);
// .then(initMongo);

export default run;
