const withSourceMaps = require("@zeit/next-source-maps");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
   enabled: process.env.ANALYZE_BUNDLE === "true"
});
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// Create Next JS config
const config = {
   target: process.env.IONIC_DEPLOYMENT ? "server" : "serverless",
   env: {}
};

module.exports = withPlugins([[withSourceMaps], [withBundleAnalyzer], [withImages]], config);
