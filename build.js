var stealTools = require("steal-tools");

stealTools.build({
  main: 'cc/main',
  config: "package.json!npm"
}, {
  removeDevelopmentCode: false,
  bundleSteal: false,
  bundleAssets: true,
  sourceMaps: false,
  minify: false,
  treeShaking: true
});