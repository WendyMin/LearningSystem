const path = require("path");

module.exports = {
  mainApiHost: "59.110.23.212",
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
