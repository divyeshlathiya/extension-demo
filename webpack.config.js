// const path = require('path');

// module.exports = {
//     mode: 'development',
//     entry: {
//         popup: './src/popup/index.js',
//         background: './src/background/index.js',
//         content: './src/content/index.js'
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             }
//         ]
//     }
// };

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        popup: './src/popup/index.jsx',
        background: './src/background/index.js',
        content: './src/content/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '.' } // <-- ye pura public folder dist me copy karega
            ]
        })
    ]
};
