const HtmlWebPack = require('html-webpack-plugin');
 
 
module.exports = {
 
    mode: 'development',

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            }
        ]
    },

    optimization:{},

    plugins: [

        new HtmlWebPack({
            title: 'Mi Webpack App',
            filename: 'index.html',
            template: './src/index.html',
        }),
        
        // new HtmlWebPackPlugin({
        //     title: 'Mi webpack App',
        //     template: './src/index.html',
        //     filename: './index.html'
        // }),
        
    ]
 
 
}
