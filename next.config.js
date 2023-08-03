/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true,
    },
    basePath: '/WilliamsCollection',
    output: 'export',
    eslint:{
        ignoreDuringBuilds: true,
    }
};

module.exports = nextConfig