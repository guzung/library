const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // This is the path you want to proxy
    createProxyMiddleware({
      target:
        "https://5b25-2a02-908-2540-80e0-21b3-2fbc-fb2c-3b13.ngrok-free.app", // Target server (backend API)
      changeOrigin: true, // Needed for virtual hosted sites
      // pathRewrite: {
      //   "^/api": "", // Remove /api from the request path if needed
      // },
    })
  );
};
