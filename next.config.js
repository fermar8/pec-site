const basePath = process.env.NODE_ENV === "production" ? "" : "";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = {
  env: {
    basePath,
    POSTS_PRERENDER_COUNT: 5,
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
};
