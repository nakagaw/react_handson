module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader?modules&localIdentName=[folder]-[emoji]-[local]-[hash:base64:5]" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ // no need .[ext] for import
      '.ts', '.tsx', ".js", ".json"
    ]
  }
};

