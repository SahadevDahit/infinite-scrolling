/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "images.punkapi.com",
        }, ],
    },
    experimental: {
        serverActions: true,
    },
}
export default nextConfig;