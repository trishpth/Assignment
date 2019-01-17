var app_root = 'app'; // the app root folder
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    app_root: app_root,
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        __dirname + '/' + app_root + '/index.js'
    ],
    output: {
        path: __dirname + '/public/js',
        publicPath: 'js/',
        filename: 'kontrol.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'react-hot', 'babel'
                ],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/public',
        disableHostCheck: true,
        historyApiFallback: true,
        inline: true,
    },
    resolve: {
        modulesDirectories: [
            "common", "node_modules", "bower_components"
        ],
        alias: {
            '~': path.resolve(__dirname, 'app/common/'),
            'Store': path.resolve(__dirname, 'app/store.js')
        },
        extensions: ['', '.js', '.json', 'scss']
    },
    plugins: [new CleanWebpackPlugin([
            'js/kontrol.js'
        ], {
            root: __dirname + '/public',
            verbose: true,
            dry: false, // true for simulation
        })
    //     ,new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // })
  ]
};