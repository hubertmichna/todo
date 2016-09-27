var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, "app"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./components/client.js",
    isparta: {
        embedSource: true,
        noAutoWrap: true,
        babel: {
            presets: ['es2015', 'stage-0', 'react']
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    plugins: [
                        "transform-class-properties",
                        'add-module-exports',
                        'transform-decorators-legacy'
                    ],
                    presets: ['react', 'es2015','stage-0']

                }
            }
        ]
    },
    output: {
        path: __dirname + "/app/",
        filename: "client.min.js"
    },
    externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
    ],
};