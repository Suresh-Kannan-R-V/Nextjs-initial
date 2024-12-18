/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['@core/utils', '@core/ui'],
	experimental: {
		optimizePackageImports: ['@nextui-org/react'],
	},
	typescript: {
		// Set this to false if you want production builds to abort if there's type errors
		ignoreBuildErrors: true,
	},
	eslint: {
		/// Set this to false if you want production builds to abort if there's lint errors
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

module.exports = nextConfig;
