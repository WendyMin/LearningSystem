var path = require( 'path' );
var webpack = require( 'webpack' );
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.lib');
var node_modules = path.resolve( __dirname ,  'node_modules' );
var pathToReact = path.resolve( node_modules , 'react/dist/react.min.js' );

module.exports = {
  entry : {
    bundle : path.resolve(__dirname, 'app/main.jsx')
  },
  output : {
    path : path.resolve( __dirname , 'build' ),
    filename : '[name].js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      loader: 'babel-loader' ,
      query : {
      	presets : ['es2015', 'react']
      }
    },
    {
      test : /\.css$/,
      loader : 'style-loader!css-loader'
    },
    {
      test : /\.(jpg|png)$/,
      loader: 'url-loader?limit=8192&name=img/[name].[ext]'
    }
    ],
    noParse : [pathToReact]
  },
  plugins : [
    commonsPlugin
  ]
};
