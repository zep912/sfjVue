const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    configureWebpack:{
        externals: {
            "BMap": "BMap"
        },
        plugins: [

            new webpack.ProvidePlugin({

                $:"jquery",

                jQuery:"jquery",

                "windows.jQuery":"jquery"

            })

        ]
    },
    publicPath: './',
    // publicPath: './',
    // publicPath: process.env.NODE_ENV === 'development' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {
                limit: 2048
            }));
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'));
    },
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/css/style.scss";`
            }
        }
    },
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.0.133:9001/jjkj/sfj/api/',
        //         // target: 'http://192.168.0.133:9001/jjkj/sfj/api/',
        //         pathRewrite: {
        //             '^/api': ''
        //         },
        //         changeOrigin: true,
        //         secure: false, // 接受 运行在 https 上的服务
        //     }
        // }, // 跨域代理
    },
    transpileDependencies: [
        'vue-echarts', 'resize-detector',
        /\/node_modules\/vue-echarts\//,
        /\/node_modules\/resize-detector\//
    ]
};
