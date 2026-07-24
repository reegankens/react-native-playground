// Custom entry point: start MSW BEFORE expo-router registers the app.
// Synchronous on purpose — an async entry (top-level await) crashes RN on launch
// ("non-std C++ exception" / RCTFatal) because AppRegistry runs synchronously.
if (__DEV__) {
  require("./msw.polyfills");
  const { server } = require("./mocks/server");
  server.listen({ onUnhandledRequest: "warn" });
}

require("expo-router/entry");
