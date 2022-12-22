const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    entry: './src/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'   
    },
    module:{
        rules: [
            {
                   test: /\.ts$/,
                   use: [  
                   { 
                       loader: 'babel-loader',

                       options: {
                        //设置预定义的环境
                           presets: [
                            '@babel/preset-env', 
                          {
                            targets: {
                                "chrome": "58",
                                "ie": "11"

                            },
                            "corejs": "3",
                            "useBuiltIns": "usage"



                        }],
                       }
                   },

                    'ts-loader'],
                    exclude: /node_modules/

            }
         ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:'src/index.html'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}