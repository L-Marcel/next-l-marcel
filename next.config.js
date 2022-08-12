/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"]
  },
  i18n: {
    locales: ["pt-br", "en-us"],
    defaultLocale: "pt-br"
  }
};

module.exports = nextConfig;
