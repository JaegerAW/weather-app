const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //required to run htmlwebpackplugin;

module.exports = {
  mode: "development", //required
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js", // if have multiple entries
    path: path.resolve(__dirname, "dist"),
    clean: true, //required
  },
  plugins: [
    new HtmlWebpackPlugin({
      //
      template: "./src/index.html",
      title: "Restaurant Page",
      filename: "index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, //so that we can process stylesheet .css
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", //so that we can process image files
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", //so that we can process font files
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
