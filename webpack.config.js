module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js'
  },
  devServer: {
    contentBase: "./dist",
    port: "8888"
  },
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
}