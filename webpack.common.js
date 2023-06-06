const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        // vendor: './src/vendor.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WriteFilePlugin(),
        new CopyPlugin([ {
                from: 'src/conf/particle.json',
                to: 'assets/'
            }
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //   title: 'tris-404-page',
        //   filename: '404.html',
        //   template: './src/404.html',
        //   inject: 'head'
        // }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as(entry) {
                if (/\.(woff|woff2|ttf|otf)$/.test(entry)) return 'font';
            },
            fileWhitelist: [/\.(woff|woff2|ttf|otf)$/],
            include: 'allAssets'
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    externals: {
        $: 'jquery',
        jquery: 'jQuery',
        'window.$': 'jquery'
    },
    resolve: {
        alias: {
            'src/conf/particle.json': path.resolve(__dirname, 'assets/particle.json')
        }
    }
};
