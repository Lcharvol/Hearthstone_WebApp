import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const loadInfo = async (req, res) => {
  try {
    loginfo('loadInfo request done');
    res.json({ data: req.ctx.info });
  } catch (err) {
    loginfoError('loadInfo request fail');
    req.Err('Failed to load info');
  }
};
export default loadInfo;
