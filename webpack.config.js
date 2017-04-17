var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽取CSS文件插件
//html-webpack-plugin插件，重中之重，webpack中生成HTML的插件
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    login: './src/scripts/login.js',
    main: './src/scripts/main.js',
  },
  output: {
    path: path.join(__dirname, 'public'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    filename: 'js/[name]-bundle.js',            //每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
  },
  devtool: 'source-map',
  module: {
    rules: [ //加载器  
      { test: /\.less$/, loader: 'less-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },

  devServer: {
    contentBase: 'public', // Relative directory for base of server
    // devtool: 'eval',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 将公共模块提取，生成名为`vendor-bundle.js`
      minChunks: Infinity
    }),

    new ExtractTextPlugin('css/[name]-bundle.css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath 

    //根据模板插入css/js等生成最终HTML
    new HtmlWebpackPlugin({
      // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
      filename: './page/main.html', //生成的html存放路径，相对于path
      template: './src/page/main.html', //html模板路径
      inject: 'body', //js插入的位置，true/'head'/'body'/false 
      chunks: ['vendor', 'main'],//需要引入的chunk，不配置就会引入所有页面的资源
      minify: { //压缩HTML文件    
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      },
      hash: true, //为静态资源生成hash值
    }),

    //根据模板插入css/js等生成最终HTML
    new HtmlWebpackPlugin({
      // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
      filename: './page/login.html', //生成的html存放路径，相对于path
      template: './src/page/login.html', //html模板路径
      inject: 'body', //js插入的位置，true/'head'/'body'/false 
      chunks: ['vendor', 'login'],//需要引入的chunk，不配置就会引入所有页面的资源
      minify: { //压缩HTML文件    
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      },
      hash: true, //为静态资源生成hash值
    }),


    //复制资源文件
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ]),
    new webpack.HotModuleReplacementPlugin() //热加载
  ],
};