const error = (err, _, res, _next) => {
  const [status, message] = err.message.split('|');
  if ((status && message && Number(status))) {
    return res.status(Number(status)).json({ message });
  }
  console.log(err);
  res.status(500).send();
};

module.exports = error;