import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const ping = async (req, res) => {
  try {
    loginfo('ping request done');
    res.json({ ping: 'pong' });
  } catch (err) {
    loginfoError('ping request fail');
    req.Err('Failed to ping the server');
  }
};
export default ping;
