const basePath = process.env.NODE_ENV === "production" ? "/pec-site" : "";

module.exports = {
  images: {
    unoptimized: true
  },
  env: {
    basePath,
    POSTS_PRERENDER_COUNT: 5,
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },
};
