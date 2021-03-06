

const path = require('path')
// console.log(path.join(__dirname, 'public'))

module.exports = {
    entry: './src/app.js',
    output :{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
          
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },{
          test: /\.s?css$/,
          use:[
            { loader: "style-loader" },
          { loader: "css-loader" },
          {loader:"sass-loader"}
          ]
        }
      ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
      contentBase : path.join(__dirname, 'public')
    }

} 