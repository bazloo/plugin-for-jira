const path = require('path');


module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },

        ],
    },
    watch: (process.argv.indexOf('--no-watch') > -1) ? false : true,
    entry: {
        'main.page': path.resolve('./app.js'),

    },
    output: {
        filename: 'bundled.[name].js',
        path: path.resolve("../backend/public/dist")
    }
};