const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.unleashnfts.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v2/nft/wallet/analytics', // rewrite path
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
    })
  );

  app.use(
    '/telegram',
    createProxyMiddleware({
      target: 'https://api.telegram.org',
      changeOrigin: true,
      pathRewrite: {
        '^/telegram': '',
      },
    })
  );
}; 