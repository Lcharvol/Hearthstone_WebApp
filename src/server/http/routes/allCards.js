import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const allCards = async (req, res) => {
  try {
    loginfo('allCards request done');
    res.json({ data: req.ctx.allCards });
  } catch (err) {
    loginfoError('allCards request fail');
    req.Err('Failed to get all cards');
  }
};
export default allCards;
