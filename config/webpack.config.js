const paths = require('./paths');

console.log('\x1b[32m%s\x1b[0m', 'Directorio raíz: ', paths.root);

module.exports = {
    mode: 'production',
    entry: paths.entryPoint,
    devtool: false,
    output: {
        library: {
            type: 'umd',
        },
        filename: 'index.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /(.js|.jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader'],
            },
            {
                test: /(.ts|.tsx)$/,
                exclude: /node-modules/,
                use: ['ts-loader'],
            }
        ]
    },
}