const webpack = require('webpack');
const path = require('path');
const entry = require('./config/entry');
const output = require('./config/output');
const plugins = require('./config/plugins');
const modules = require('./config/module');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin')
require("babel-polyfill");

module.exports ={
    entry:["babel-polyfill","./src"],
   // output:output,
    mode:"production",
    devtool:"eval-source-map",
    module:modules,
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        disableHostCheck: true,
        host:"127.0.0.1",
        port:"80",
        inline: true//实时刷新
     }, 
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template: "src/index.html",
            chunks:"main",
            minify: {    
                collapseWhitespace: false,    
                removeComments: true    
           }   
        }),
        new CleanWebpackPlugin('./dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunks: "main",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
}