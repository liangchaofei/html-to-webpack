const path = require('path')
const webpack = require('webpack')
const FooterPlugin = require('./plugin/FooterPlugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.curry$/,
                use: [path.resolve(__dirname,'./loader/curry-loader.js')]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('aaaa'),
        new FooterPlugin(({
            banner: 'curry出品'
        }))
    ]
}