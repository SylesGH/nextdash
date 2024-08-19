/** @type {import('next').NextConfig} */

const nextConfig = {
    devIndicators: {
        appIsrStatus: false,
      },
    experimental: {
      ppr: 'incremental',
    }
};

export default nextConfig;
