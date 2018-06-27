/**
 * Created by 87583 on 2018/6/27.
 */

const config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    }
};

module.exports = config;