const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
   stats: { children: true },
  //   entry:{
  //    main:path.resolve(__dirname,'./src/main.js'),

  //   },
    output:{
        // filename: '[name].bundle.js',
        // path:path.resolve(__dirname,'dist'),
        // assetModuleFilename: 'images/[hash][ext][query]',
        clean:true,
    },
  resolve: {
   extensions: ['.css', '.js','.png','.jbg','.html'],
    alias: {
      '@scripts': path.join(__dirname, 'src/'),
      '@styles': path.join(__dirname, 'src/'),
      '@images': path.join(__dirname, 'src/images'),
    },
  },
    module:{
        
        rules:[
            {
                test:/\.css$/i,
                use:[
                //    MiniCssExtractPlugin.loader,                  
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              [
                                "autoprefixer",
                                {
                                  // Options
                                },
                              ],
                            ],
                          },
                        },
                      },
               
                ],
            },
            {

              test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //   dependency: { not: ['url'] },
              type: 'asset/resource',
              generator: {
                filename: './images/[name][ext]'
              } 
      
            },
        ],
    },
  
      optimization: {
        runtimeChunk: 'single',
      },
    plugins:[
      // new HtmlWebpackPlugin({
      //   title:'to Do App',
      //   template:path.resolve(__dirname,'./src/index.html'),
      // }),
      // new MiniCssExtractPlugin(),
      new HtmlBundlerPlugin({
        entry: {
          // define templates here
          index: path.resolve(__dirname,'src/index.html'), // any html templet in the path
        },
      //  outputPath: path.resolve(__dirname,'dist/index.html')
      })
  ]
};