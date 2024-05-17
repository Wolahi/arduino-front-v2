module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: 'dashes',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
