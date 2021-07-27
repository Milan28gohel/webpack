const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    output:{
        path : path.join(__dirname, '/dist'),
        filename :   'index.bundle.js',
    },
    devServer:{
        port: 3010,
        watchContentBase : true,
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,    
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtraPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    plugins:[new MiniCssExtraPlugin()],
};