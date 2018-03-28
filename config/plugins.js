const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin =require('clean-webpack-plugin')
module.exports = [
    new htmlWebpackPlugin({
        filename:"index.html",
        template: "src/index.html",
         chunks:"main"
    }),
    new CleanWebpackPlugin('../dist/*.*', {
        root: __dirname,
        verbose: true,
        dry: false
    })

]