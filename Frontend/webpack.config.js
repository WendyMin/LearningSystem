const path = require("path");

module.exports = {
  mainApiHost: "39.96.40.166",
  // mainApiHost: "39.106.175.128",
  // mainApiHost: "59.110.23.212",
  module: {
    rules: []
  },
  devServerProxy: {},
  plugins: [],
  prodOnlyPlugins: [],
  HtmlWebpackPluginConfig: {
    template: path.resolve( __dirname , "./public/static/html/template.html" )
  }
}
