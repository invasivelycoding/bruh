module.exports = {
  output: 'standalone',
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'user-images.githubusercontent.com',
      'imgur.com',
      'drive.google.com',
      'encrypted-tbn0.gstatic.com',
      'i.etsystatic.com',
      'thehoya.com',
    ],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  webpack(config, options) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });
    config.module.rules.push({ test: /\.yml$/, use: 'raw-loader' });
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
};
