const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // 替换为你的图片域名
  },
  experimental: {
    optimizeCss: true, // 启用 CSS 优化
    scrollRestoration: true, // 启用滚动恢复
  },
}

module.exports = nextConfig

