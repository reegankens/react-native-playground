import "fast-text-encoding";
import "react-native-url-polyfill/auto";

//ReferenceError: Property 'MessageEvent' doesn't exist
//https://github.com/mswjs/mswjs.io/issues/453
function defineMockGlobal(name) {
  if (typeof global[name] === "undefined") {
    global[name] = class {
      constructor(type, eventInitDict) {
        this.type = type;
        Object.assign(this, eventInitDict);
      }
    };
  }
}

["MessageEvent", "Event", "EventTarget", "BroadcastChannel"].forEach(
  defineMockGlobal,
);
