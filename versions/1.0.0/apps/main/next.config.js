module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/projects',
        destination: `https://l-marcel-projects.vercel.app/`,
      },
      {
        source: '/projects',
        destination: `https://l-marcel-projects.vercel.app/:path*`,
      },
    ]
  },
}
