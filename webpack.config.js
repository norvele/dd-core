const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const scssData = '$dd-system-debug: ' + ((process.env.NODE_ENV === 'dev') ? 'true' : 'false') + ';';

module.exports = {
    entry: './src/example/index.js',
    resolve: {
        alias: {
            lib: path.resolve(__dirname, 'src/lib'),
            test: path.resolve(__dirname, 'test'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DivoDivnoe',
            filename: 'index.html',
            template: './src/example/template.html'
        }),
        new StyleLintPlugin({
            syntax: 'scss',
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: process.env.NODE_ENV === 'dev',
        }),
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'example'),
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './example'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                data: scssData,
                            },
                        },
                    ]
                }),
            },
        ],
    },
};