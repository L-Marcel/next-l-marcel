/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  i18n: {
    locales: ["pt-br", "en-us"],
    defaultLocale: "pt-br",
    localeDetection: false
  }
};

module.exports = nextConfig;
