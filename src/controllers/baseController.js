export const baseController = async (req, res) => {
  return res.status(200).json({ message: 'OK' });
};
