module.exports = {
    entry: './app/scripts/app.ts',
    output: {
        path: './app/dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.scss', '.js', '.ts']
    },
    devtool: 'source-map', // if we want a source map
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }, {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    }
};