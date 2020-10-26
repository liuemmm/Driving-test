module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://open.liupai.net/',
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false
}
