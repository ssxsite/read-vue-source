const path = require('path');
const vueLoader = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
    mode: 'development',
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoader(isDev)
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}