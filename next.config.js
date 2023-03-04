/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const nextTranslate = require('next-translate-plugin');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// module.exports = nextTranslate({
//   webpack: (config, { isServer, webpack }) => {
//     return config;
//   },
// });
