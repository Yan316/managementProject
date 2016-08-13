var webpack = require('webpack');

module.exports = {
    entry: [
    "./views/entry.js",
    "webpack-dev-server/client?http://localhost:3030",
    'webpack/hot/only-dev-server'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
         new webpack.NoErrorsPlugin()
    ]
};
