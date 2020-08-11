const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './banner',
    plugins: [
        new HtmlWebpackPlugin({
            template: './banner/index.html'
        })
    ],
    module: {
        rules: [{
                test: /.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /.(png|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }

            }
        ]
    },
    watch: true
}