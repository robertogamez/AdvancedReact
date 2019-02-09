var path = require('path');

module.exports = {
    resolve: {
        modules: [
            path.resolve('./lib'),
            path.resolve('./node_modules')
        ]
    },
    // entry: {
    //     index: [
    //         'babel-polyfill',
    //         './lib/renderers/dom.js'
    //     ]
    // },
    entry: {
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'prop-types',
            'axios',
            'lodash.debounce',
            'lodash.pickby'
        ],
        app: ['./lib/renderers/dom.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};