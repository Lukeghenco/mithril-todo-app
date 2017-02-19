module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname,
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
};