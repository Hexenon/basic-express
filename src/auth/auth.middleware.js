module.exports = (req, res, next) => {
  if (!req.query.key) {
    return res.status(401).send('UnAuthorized')
  }
  if (req.query.key !== 'superkey') {
    return res.status(401).send('UnAuthorized')
  }
  next();
}