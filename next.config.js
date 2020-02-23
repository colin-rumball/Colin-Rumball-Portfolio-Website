const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// Create Next JS config
const config = {
   target: process.env.PD_IONIC_DEPLOYMENT ? "server" : "serverless",
   env: {}
};

module.exports = withPlugins([[withSourceMaps], [withImages]], config);
