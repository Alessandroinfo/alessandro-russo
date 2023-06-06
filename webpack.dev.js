const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const pathDev = 'dist-dev';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contentHash].css',
            chunkFilename: '[id].css'
        }),
        // new CopyPlugin([
        //     {
        //         from: path.resolve(__dirname, 'src', 'robots.txt'),
        //         to: path.resolve(__dirname, pathDev, 'robots.txt')
        //     }
        // ]),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, pathDev)
    },
    devServer: {
        writeToDisk: false,
        // hot: true,
        open: true,
        // inline: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: false,
            publicPath: false
        },
        // liveReload: true,
        // watchContentBase: true
    }
});
