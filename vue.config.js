module.exports = {
    publicPath: './',
    outputDir: 'dist',

    // 配置 webpack-dev-server 行为。
    devServer: {
        host: 'localhost',
        port: 9527,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}