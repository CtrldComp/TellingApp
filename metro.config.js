const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.sourceExts.push('mjs');
config.transformer.minifierConfig.compress.drop_console = false;

module.exports = config;
