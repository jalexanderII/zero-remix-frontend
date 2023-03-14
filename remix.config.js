// module.exports = {
//   // serverBuildTarget: "vercel",
//   // When running locally in development mode, we use the built-in remix
//   // server. This does not understand the vercel lambda module format,
//   // so we default back to the standard build output.
//   server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
//   cacheDirectory: "./node_modules/.cache/remix",
//   ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
//   serverDependenciesToBundle: ["axios"],
//   future: {
//     v2_routeConvention: true,
//   },
//   appDirectory: "app",
//   assetsBuildDirectory: "public/build",
//   serverBuildPath: "build/index.js",
//   publicPath: "/build/",
//   devServerPort: 8002,
// };

const path = require("node:path");

const glob = require("glob");

const packages = glob
  .sync("packages/**/package.json", {
    cwd: path.join(__dirname, "..", ".."),
    ignore: ["**/node_modules/**"],
    absolute: true,
  })
  .map((pkg) => path.dirname(pkg));

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "vercel",
  appDirectory: "app",
  ignoredRouteFiles: [".*", "**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  assetsBuildDirectory: "public/build",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  cacheDirectory: "./node_modules/.cache/remix",
  serverDependenciesToBundle: [/.*/],
  watchPaths: packages,
  future: {
    v2_routeConvention: true,
  },
};
