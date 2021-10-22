const path = require('path');

const rootPath = path.resolve(__dirname, '..')

module.exports = {
    root: rootPath,
    entryPoint: path.join(rootPath, 'index.js'),
}