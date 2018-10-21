export const ping = async (req, res) => {
  try {
    res.json({ ping: 'pong' });
  } catch (err) {
    req.Err('Failed to ping the server');
  }
};
export default ping;
