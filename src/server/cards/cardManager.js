import debug from 'debug';

const loginfo = debug('app:cardManager');

const manageCards = ctx => {
  const {} = ctx;
  const promise = new Promise(resolve => {
    loginfo('Init card manager');
    resolve({ ...ctx });
  });

  return promise;
};

export default manageCards;
