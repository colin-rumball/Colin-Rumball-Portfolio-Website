const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
   enabled: process.env.ANALYZE_BUNDLE === "true"
});
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const path = require("path");

// Create Next JS config
const config = {
   target: process.env.IONIC_DEPLOYMENT ? "server" : "serverless",
   webpack(config, options) {
      config.resolve.alias["public"] = path.join(__dirname, "public");
      return config;
   },
   env: {}
};

module.exports = withPlugins(
   [[withSourceMaps], [withBundleAnalyzer], [optimizedImages, { optimizeImagesInDev: true }]],
   config
);
