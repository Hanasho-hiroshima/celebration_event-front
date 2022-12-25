loadEnv(process.env.BUILD_ENV)

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

function loadEnv(buildEnv = 'dev') {
  const env = {
    ...require(`./env/env.${buildEnv}.js`),
    NEXT_PUBLIC_APP_ENV: buildEnv,
  }

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value
  })
}
