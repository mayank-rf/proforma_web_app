import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    devIndicators: false,
    webpack: (config) => {
        config.resolve.alias['@'] = require('path').resolve(__dirname, 'src');
        return config;
    },
};

export default nextConfig;
