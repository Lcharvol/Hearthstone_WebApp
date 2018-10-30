import debug from 'debug';

const loginfo = debug('app:http');
const loginfoError = debug('app:http:error');

export const cardsByQuality = async (req, res) => {
  try {
    loginfo(`${req.params.quality} cards request done`);

    res.json(req.ctx.cards.byQuality[req.params.quality]);
  } catch (err) {
    loginfoError('cardsByQuality request fail');
    req.Err(`Failed to get ${req.params.class} cards`);
  }
};
export default cardsByQuality;
