/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true,
    },
    assetPrefix: "/WilliamsCollection/",
    output: 'export',
    eslint:{
        ignoreDuringBuilds: true,
    }
};

module.exports = nextConfig