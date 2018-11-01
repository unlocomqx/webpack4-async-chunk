const path = require('path');

module.exports = {
  mode: "development",
  context: __dirname,
  devtool: 'sourcemap',
  entry: {
    "entry1": "./src/entry1.ts"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          errorFormatter: function customErrorFormatter(error, colors) {
            const messageColor = error.severity === 'warning' ? colors.bold.yellow : colors.bold.red;
            const relative_path = path.relative(process.cwd(), error.file);
            return messageColor(`${error.content}\n @ ./${relative_path} ${error.line}:${error.character}-0`);
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".scss", ".css"],
    modules: [
      'node_modules',
      path.resolve('./src')
    ],
  }
};