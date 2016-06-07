
// exports config object for webpack
// contains needed modules etc...
module.exports = {
  // specify where to start processing code
  entry: './public/app.jsx', // main property: entry = input
  output: {
    path: __dirname, // current directory
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // tell babel-loader to parse files through react and then es2015
  module: {
    loaders: [
      {
        // specify loader and required presets
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        // select every file with .jsx extension
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }
    ]
  }
};
