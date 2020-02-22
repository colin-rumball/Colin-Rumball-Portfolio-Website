const withSourceMaps = require("@zeit/next-source-maps");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

// Create Next JS config
const config = {
   target: process.env.PD_IONIC_DEPLOYMENT ? "server" : "serverless",
   env: {}
};

for (const key in process.env) {
   if (key.substring(0, 10) !== "SECRET_PD_" && key.substring(0, 3) === "PD_") {
      config.env[key] = process.env[key];
   }
}

module.exports = withPlugins([[withSourceMaps], [withImages]], config);
