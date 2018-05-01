const path = require('path');

module.exports = {
    entry: ["./js/index.js"],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'mainBundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                    loader: "babel-loader"
            },
            {
                test: /\.hbs$/,
                    loader: "handlebars-loader"
            }

        ]
    }
}