var webpack = require('webpack')
var packageJSON = require('./package.json')

module.exports = {
  entry: {
    "argonManager": ["./src/argonManager"],
    "argon":   ["./src/argon"],
    "argon-three": "./src/argon-three",
    "argon-famous": "./src/argon-famous"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: "ARGON",
    libraryTarget: "umd"
  },
  externals: [
    {
      "argon": {
        root: "ARGON",
        commonjs2: "./argon",
        commonjs: ["./argon", "ARGON"],
        amd: "argon"
      }
    },
    {
      "external-three": {
        root: "THREE",
        commonjs2: "three"
      },
      "external-threestrap": {
        root: ["THREE","Bootstrap"],
        commonjs2: "threestrap"
      }
    }
  ],
  resolve: {
    root:  __dirname + "/src",
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // inject 6to5 runtime
    new webpack.ProvidePlugin({
      to5Runtime: "imports?global=>{}!exports-loader?global.to5Runtime!6to5/runtime"
    }),
    new webpack.DefinePlugin({
      VERSION: '"'+ packageJSON.version + '"'
    })
    // new webpack.BannerPlugin("'use strict'; // enable strict mode everywhere!!", {raw: true})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules|bower_components/, loader: '6to5-loader?runtime=true' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".js"],
  },
}
