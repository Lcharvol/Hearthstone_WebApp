import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const cardsByClass = async (req, res) => {
  try {
    loginfo(`${req.params.class} cards request done`);
    res.json(req.ctx.cards[req.params.class].cards);
  } catch (err) {
    loginfoError('cardsByClass request fail');
    req.Err(`Failed to get ${req.params.class} cards`);
  }
};
export default cardsByClass;
