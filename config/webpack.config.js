const paths = require('./paths');
console.log('\x1b[32m%s\x1b[0m', 'Directorio raíz: ', paths.root);

module.exports = {
    mode: 'production',
    entry: paths.entryPoint,
    output: {
        library: {
            type: 'umd'
        }
    },
    optimization: {
        minimize: false,
    }
}