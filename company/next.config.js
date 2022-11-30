/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 外部のディレクトリがloaderエラー出ちゃう問題解消のため
  // https://github.com/vercel/next.js/issues/9474
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
