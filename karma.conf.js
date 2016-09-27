var path = require('path');

var webpackConfig = require('./webpack.config')
webpackConfig.devtool = 'inline-source-map'
webpackConfig.watch = true
webpackConfig.module.preLoaders = [{
    test: /\.jsx?$/,
    exclude: /(test|node_modules)\//,
    loader: 'isparta-loader'
}];

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'sinon'],
        files: [
            'test/test_index.js'
        ],

        preprocessors: {
            'test/test_index.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,



        webpackServer: {
            noInfo: true
        },

        plugins: [
            'karma-coverage',
            'karma-webpack',
            'karma-jasmine',
            'karma-sinon',
            'karma-sourcemap-loader',
            'karma-chrome-launcher'
        ],

        coverageReporter: {
            dir: 'coverage/',
            type:"text"
        },
        reporters: ['progress','coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
    })
};