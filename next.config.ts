import type { NextConfig } from 'next';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgSite = repoName.endsWith('.github.io');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.GITHUB_ACTIONS && !isUserOrOrgSite ? `/${repoName}` : '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
