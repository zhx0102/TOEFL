const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    VueLoaderPlugin
} = require('vue-loader')
module.exports = {

    // 模式: 生产环境
    // mode: 'production',

    // 入口
    entry: {
        app: './src/main.js'
    },

    // 出口(打包生成js)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash:8].js'
    },

    // 模块加载器
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?|.ttf|.woff$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: 'img/[name].[contenthash:8].[ext]' // 相对于output.path
                }
            }
        ]
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({                                 
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        open: true, // 自动打开浏览器  
        stats: 'errors-only', // 只显示错误日志信息
    },
    // devtool: 'source-map', //  生成单独的source-map文件, 打包慢
    devtool: 'cheap-module-eval-source-map', // 不生成单独的source-map, 打包快
    // 引入模块的解析
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 路径别名(简写方式)
            '@': path.resolve(__dirname, 'src')
        }
    },
}