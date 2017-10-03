
//配置文件最基本的东西是入口和出口
const webpack = require('webpack')
module.exports = {
    devtool: 'source-map',     //开发工具
    entry: {
        filename: './app.js'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        loaders: [    //加载
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
                // query: {
                //     presets: [
                //         ["es2015", { "modules": false}]
                //          //忽略掉commonjs的写法
                //     ]
                // }
            }
        ]
    },
    plugins: [    //插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {               //压缩
                warnings: false     //忽略警告
            },
            output: {
                comments: false    //忽略注释
            },
            sourceMap: true    //源文件的映射
        })
    ]
}
