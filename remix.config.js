/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ["**/.*", "**/*.css", "**/*.test.{js,jsx,ts,tsx}"],
  // serverBuildTarget: "vercel",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  serverBuildPath: "api/index.js",
  cacheDirectory: "./node_modules/.cache/remix",
  serverDependenciesToBundle: ["axios"],
  future: {
    v2_routeConvention: true,
  },
  devServerPort: 8002,
};
