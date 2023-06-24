const basePath = process.env.NODE_ENV === "production" ? "" : "";

module.exports = {
  env: {
    basePath,
  },
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  swcMinify: true
};
