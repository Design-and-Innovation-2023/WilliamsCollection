/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: '/WilliamsCollection/',
    output: 'export'
};

module.exports = nextConfig
