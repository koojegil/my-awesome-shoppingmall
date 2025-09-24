/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'my-awesome-shoppingmall';

const nextConfig = {
	// Enable standalone output and static export
	output: 'export',
	images: { unoptimized: true },
	// Configure basePath/assetPrefix for GitHub Pages when building in Actions
	basePath: isGithubActions ? `/${repoName}` : undefined,
	assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
};

export default nextConfig;
