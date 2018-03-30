const webpack = require('webpack');
const path = require('path');
const entry = require('./config/entry');
const output = require('./config/output');
const plugins = require('./config/plugins');
const modules = require('./config/module');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin')

module.exports ={
    entry:"./src",
   // output:output,
    mode:"development",
    devtool:"eval-source-map",
    module:modules,
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        disableHostCheck: true,
        host:"192.168.6.79",
        port:"4000",
        inline: true//实时刷新
     }, 
    plugins:[
        new htmlWebpackPlugin({
            filename:"index.html",
            template: "src/index.html",
             chunks:"main"
        }),
        new CleanWebpackPlugin('./dist/*.*', {
            root: __dirname,
            verbose: true,
            dry: false
        })
    
    ],
}