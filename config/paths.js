const path = require('path');

const rootPath = path.resolve(__dirname, '..');
const srcPath = path.join(rootPath, 'src');

module.exports = {
    root: rootPath,
    src: srcPath,
    entryPoint: path.join(srcPath, 'index.js'),
}