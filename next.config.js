// next config
module.exports = {
  serverRuntimeConfig: {
    async styles() {
      // Dynamic module import because nextjs-sync is ESM
      const { styles } = await import("@zesty-io/webengine-json");
      const data = await styles(
        process.env.ZESTY_PREVIEW_DOMAIN,
        process.env.ZESTY_PREVIEW_PASSWORD
      );
      return data;
    },
  },
  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Dynamic module import because nextjs-sync is ESM
    const zestyNext = await import("@zesty-io/nextjs-sync");
    const data = await zestyNext.fetchRedirects();
    return data;
  },
};
