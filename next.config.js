/** @type {import('next').NextConfig} */
const nextConfig = { 
    trailingSlash: true,
    async redirects() {
        return [
          {
            source: '/',
            destination: '/page.js',
            permanent: true,
          },
        ]
    },
}

module.exports = nextConfig
