/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "Frank",
    mongodb_password: "FrankSu1996",
    mongodb_clustername: "cluster0",
  },
};

module.exports = nextConfig;
