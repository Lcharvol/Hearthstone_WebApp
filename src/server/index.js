import debug from 'debug';
import config from '../../config/server/index';
import run from './run';

const logger = debug('app:');

run({ config })
  .then(ctx => logger('Server ready to use'))
  .catch(console.error); // eslint-disable-line no-console
