/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	nextConfig,
	// ... rest of the configuration.
	output: 'standalone',
};
