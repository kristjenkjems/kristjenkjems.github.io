var ARGON = module.exports = require('./common')

ARGON.version = VERSION
ARGON.semver = _parseVersion(ARGON.version)

function _parseVersion(version) {
  var tokens = version.split('.')
  return {
    major: tokens[0],
    minor: tokens[1],
    patch: tokens[2]
  }
}
