/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    config: {
      MYSQL_HOST: "127.0.0.1",
      MYSQL_PORT: "3306",
      MYSQL_DATABASE: "the_mobile_hour",
      MYSQL_USER: "kiyo",
      MYSQL_PASSWORD: "a1b2c3d4e5A"
    }
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
