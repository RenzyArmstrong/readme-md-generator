const { cleanSocialNetworkUsername } = require('../utils')

module.exports = () => ({
  type: 'input',
  message: '🐦  X username (use empty value to skip) — formerly Twitter',
  name: 'authorTwitterUsername',
  filter: cleanSocialNetworkUsername
})
