require('@babel/register');
const path = require('path');

module.exports = {
    entry: {
        share_header: path.resolve(__dirname, "src/share/header.jsx"),
        home_index: path.resolve(__dirname, "src/home/index.jsx"),
        shogi_index: path.resolve(__dirname, "src/shogi/index.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "../../public/js/react/") ,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js","jsx"],
    }
}