import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const loadCardBacks = async (req, res) => {
  try {
    loginfo('cardBacks request done');
    res.json(req.ctx.cardBacks);
  } catch (err) {
    loginfoError('cardBacks request fail');
    req.Err('Failed to load cardBacks');
  }
};
export default loadCardBacks;
