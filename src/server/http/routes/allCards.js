export const allCards = async (req, res) => {
  try {
    res.json({ data: req.ctx.allCards });
  } catch (err) {
    req.Err('Failed to get all cards');
  }
};
export default allCards;
