module.exports = {
    publicPath: './',
    
    // 配置 webpack-dev-server 行为。
    devServer: {
        host: '0.0.0.0',
        port: 9527,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://app.rmsdmedia.com",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}