module.exports = {
    devServer: {
        proxy: {
            "/local": {
                target: "http://localhost:8888",
                pathRewrite: {
                    '^local/': ''
                }
            },
            "/sina": {
                target: "http://hq.sinajs.cn/",
                changeOrigin: true,
                pathRewrite: {
                    '^sina/': ''
                }
            }
        }
    }
};