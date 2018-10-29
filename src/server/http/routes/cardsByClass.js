import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const cardsByClass = async (req, res) => {
  try {
    loginfo('cardsByClass request done');
    res.json({ data: req.ctx.cards[req.params.class] });
  } catch (err) {
    loginfoError('cardsByClass request fail');
    req.Err(`Failed to get ${req.params.class} cards`);
  }
};
export default cardsByClass;
