
    const HtmlWebpackPlugin              = require('html-webpack-plugin');
    const MiniCssExtractPlugin           = require('mini-css-extract-plugin');
    const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
    const CopyPlugin                     = require('copy-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    module.exports = {

        mode: 'development',
        optimization: {
            minimizer: [
                new OptimizeCssAssetsWebpackPlugin(),
            ]
        },
        module: {
            rules: [
                {
                    test: /styles\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.css$/,
                    exclude: /styles\.css$/,
                    use: [
                       'style-loader',
                       'css-loader'
                   ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        attributes: false,
                        minimize: false
                    }
                },
                {
                    test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                esModule: false
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
            }),
            new MiniCssExtractPlugin({
               filename: '[name].css',
               ignoreOrder: false
            }),
            new CopyPlugin({
                patterns: [
                    {from: 'src/assets', to: 'assets/'}
                ]
            }),
            new CleanWebpackPlugin(),
        ]


    }