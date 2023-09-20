const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js') //start the bundle here
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', //gives a unique bundle name every time
        clean: true, //cleans up extra bundles in the dist folder
        assetModuleFilename: '[name][ext]' //keeps asset filenames the same
    },
    devtool: 'source-map', //creates js.map source file for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist') //files we're serving to the FE
        },
        port: 3000,
        open: true, //opens browser automatically
        hot: true, //hot reloading
        compress: true, //gzip compression?
        // historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/, //any .js extension
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] //backwards compatibility for older browsers
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i, //regex for any image file type, i means case insensitive
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]

}