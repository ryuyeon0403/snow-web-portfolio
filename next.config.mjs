/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/_assets",
        destination: "/app/_assets",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
