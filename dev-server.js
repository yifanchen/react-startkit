var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(1030, 'localhost', function(err, result) {

  if(err) {
    return console.log(err);
  }

  console.log('Listening on port 1030');
});
