const confirmEmailService = require('./service')
const buildToken = require('../../tools/token').buildToken

module.exports = (req, res, next) => {
  return confirmEmailService(req.user.id)
  .then(user => res.send({ token: buildToken(user.id) }))
  .catch(next)
}
