export const cardsByClass = async (req, res) => {
  try {
    res.json({ data: req.ctx.cards[req.params.class] });
  } catch (err) {
    req.Err(`Failed to get ${req.params.class} cards`);
  }
};
export default cardsByClass;
