/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.ASSET__PREFIX,
    basePath: process.env.BASE_PATH,
};

export default nextConfig;
