
module.exports = {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "env", "react"
                    ]
                }
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        },
        {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
}