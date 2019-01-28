const path = require('path')

const setPublicPath = NODE_ENV => {
  switch (NODE_ENV) {
    case 'production':
      return '/'
    case 'development':
      return '/'
    default:
      return '/'
  }
}

const assetsPath = _path => path.posix.join('static', _path)

const setPath = filePath => path.resolve(__dirname, '../', filePath)

module.exports = {
  setPublicPath,
  assetsPath,
  setPath
}