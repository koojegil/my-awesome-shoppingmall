/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repoName = 'my-awesome-shoppingmall';

const nextConfig = {
	output: 'export',
	images: { unoptimized: true },
	basePath: isGitHubPages ? `/${repoName}` : undefined,
	assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
