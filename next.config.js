const { i18n } = require('./next-i18next.config');

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  // reactStrictMode: true,
  i18n,
};

module.exports = {
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
