const PROXY_CONFIG = {
  "/api": {
      "target": "http://localhost:8080",
      "secure": false,
      "bypass": function (req, res, proxyOptions) {
          req.headers["Authorization"] = "Basic YWRtaW46IA==";
      }
  }
}

module.exports = PROXY_CONFIG;