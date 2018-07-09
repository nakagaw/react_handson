module.exports = {
  module: {
    rules: [
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
    extensions: [ // 拡張子なしでも import できる
      '.ts', '.tsx', ".js", ".json"
    ]
  }
};

