// removed TypeScript-only import for plain JavaScript file

const nextConfig = {
  // REMOVE "experimental.turbo" — not supported anymore

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.escuelajs.co",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
