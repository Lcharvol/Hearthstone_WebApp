export const loadInfo = async (req, res) => {
  try {
    res.json({ data: req.ctx.info });
  } catch (err) {
    req.Err('Failed to load info');
  }
};
export default loadInfo;
