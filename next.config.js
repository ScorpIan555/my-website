/** @type {import('next').NextConfig} */

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [];

const nextConfig = {
  reactStrictMode: true,
  // target: 'serverless' // deprecated, see: https://nextjs.org/docs/advanced-features/output-file-tracing
}

module.exports = nextConfig;
