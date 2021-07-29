const path = require('path');
const loader = require('sass-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
        mode: 'development',
        output:{
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js',
        },
        devServer:{
            port: 3020,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                            'css-loader',
                            'sass-loader'
                    ],
                },
            ]
        },
        externals: {
            // global app config object
            config: JSON.stringify({
                apiUrl: 'http://localhost:3020'
            })
        },
        plugins: [new MiniCssExtractPlugin()],
       
};