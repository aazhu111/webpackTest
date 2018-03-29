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