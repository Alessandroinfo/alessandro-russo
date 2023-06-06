const path = require('path');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
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
                            sourceMap: true,
                            config: {
                                path: `${__dirname}/postcss.config.js`,
                                ctx: {
                                    env: 'production'
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'string-replace-loader',
                options: {
                    search: 'src/conf/particle.json',
                    replace: 'assets/particle.json',
                    flags: 'g'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'src', 'robots.txt'),
                to: path.resolve(__dirname, 'dist', 'robots.txt')
            }
        ]),
        new MiniCssExtractPlugin({
            filename: 'style.[contentHash].css',
            chunkFilename: '[id].css'
        }),
        new CompressionPlugin({
            test: /\.(html|css|js)(\?.*)?$/i // only compressed html/css/js, skips compressing sourcemaps etc
        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            gifsicle: {
                // lossless gif compressor
                optimizationLevel: 9
            },
            pngquant: {
                // lossy png compressor, remove for default lossless
                quality: '75'
            },
            plugins: [
                imageminMozjpeg({
                    // lossy jpg compressor, remove for default lossless
                    quality: '75'
                })
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: './src/images/favicon.svg',
            favicons: {
                appName: 'Alessandro Russo | Front-End Architect',
                appDescription:
                    'Alessandro Russo | Front-End Architect',
                developerName: 'Alessandro Russo',
                developerURL: null, // prevent retrieving from the nearest package.json
                background: '#032a2e',
                theme_color: '#032a2e',
                icons: {
                    coast: false,
                    yandex: false
                }
            },
            icons: {
                twitter: true,
                windows: true
            }
        }),
        new OfflinePlugin({
            updateStrategy: "changed",
            version: "[hash]",
            AppCache: {
                events: true
            },
            ServiceWorker: {
                events: true
            }
        })
    ],
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    }
});
