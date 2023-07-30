/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
        unoptimized: true,
    },
    output: 'export'
};

module.exports = nextConfig