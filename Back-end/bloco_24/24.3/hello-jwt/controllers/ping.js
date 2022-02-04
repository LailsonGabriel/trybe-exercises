module.exports = (req, res) => {
  console.log(req.username);
  res.status(200).json({ message: 'Pong!' });
};
