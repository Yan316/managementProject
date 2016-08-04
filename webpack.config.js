module.exports = {
    entry: [
    "./entry.js",
    "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
