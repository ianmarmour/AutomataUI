const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  plugins: [
    // ...
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, "./src/graphql/schema.graphql"), // or schema.json or a GraphQLSchema instance
      src: path.resolve(__dirname, "./src")
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".mjs"]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  }
};
