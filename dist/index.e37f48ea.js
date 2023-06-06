// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _weatherView = require("./Views/weatherView");
var _weatherViewDefault = parcelHelpers.interopDefault(_weatherView);
var _searchView = require("./Views/searchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
const controlGeolocationWeatherForecast = async function() {
    try {
        // 1. Render spinner
        (0, _weatherViewDefault.default)._renderSpinner();
        // 3. Loading current weather by geolocation
        await _model.loadGeolocationWeather();
        // 3. Rendering weather
        (0, _weatherViewDefault.default).render(_model.state.geolocationWeather);
    } catch (err) {
        (0, _weatherViewDefault.default)._renderError(`OOPS! Could not find your location: ${err.message.toLowerCase()}`);
    }
};
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewDefault.default).getQuery();
        if (!query) return;
        console.log(query);
        // 2. Loading weather by query
        await _model.loadSearchResults(query);
        // 3. Rendering weather
        (0, _weatherViewDefault.default).render(_model.state.searchWeather.result);
    } catch (err) {
        console.log(err);
        (0, _weatherViewDefault.default)._renderError("We could not find that city name. Please try another one!");
    }
};
const init = function() {
    (0, _weatherViewDefault.default).addHandlerRender(controlGeolocationWeatherForecast);
    (0, _searchViewDefault.default).addHandlerRender(controlSearchResults);
};
init();

},{"./model":"Y4A21","./Views/weatherView":"kZqOo","./Views/searchView":"1ldzZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
// // Model is stand for working with data - all the Ajax calls
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadGeolocationWeather", ()=>loadGeolocationWeather);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
var _config = require("./config");
var _helpers = require("./helpers");
const state = {
    geolocationWeather: {},
    searchWeather: {
        query: "",
        result: []
    }
};
// Getting current location
function getLocation() {
    return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
const createWeatherObject = function(data) {
    const weather = data;
    return {
        cityName: weather.name,
        description: weather.weather[0].description,
        temp: weather.main.temp,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        wind: weather.wind.speed,
        icon: weather.weather[0].icon
    };
};
const loadGeolocationWeather = async function() {
    try {
        const position = await getLocation();
        const { latitude , longitude  } = position.coords;
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}lat=${latitude}&lon=${longitude}&appid=${(0, _config.API_KEY)}`);
        state.geolocationWeather = createWeatherObject(data);
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        const data = await (0, _helpers.getJSON)(`${(0, _config.API_URL)}q=${query}&appid=${(0, _config.API_KEY)}`);
        state.searchWeather.result = createWeatherObject(data);
        console.log(state.searchWeather.result);
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","./helpers":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "API_URL_GEOreverse", ()=>API_URL_GEOreverse);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
const API_KEY = "63a7e2a14a9ec168471f7c2d8cd6e676";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&";
const API_URL_GEOreverse = "http://api.openweathermap.org/geo/1.0/reverse?";
const TIMEOUT_SEC = 10;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error();
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZqOo":[function(require,module,exports) {
// // View is stand for DOM changing
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _humiditySvg = require("url:../../img/humidity.svg");
var _humiditySvgDefault = parcelHelpers.interopDefault(_humiditySvg);
var _windSvg = require("url:../../img/wind.svg");
var _windSvgDefault = parcelHelpers.interopDefault(_windSvg);
var _barometerSvg = require("url:../../img/barometer.svg");
var _barometerSvgDefault = parcelHelpers.interopDefault(_barometerSvg);
var _spinnerSvg = require("url:../../img/spinner.svg");
var _spinnerSvgDefault = parcelHelpers.interopDefault(_spinnerSvg);
var _01DSvg = require("url:../../img/01d.svg");
var _01DSvgDefault = parcelHelpers.interopDefault(_01DSvg);
var _01NSvg = require("url:../../img/01n.svg");
var _01NSvgDefault = parcelHelpers.interopDefault(_01NSvg);
var _02DSvg = require("url:../../img/02d.svg");
var _02DSvgDefault = parcelHelpers.interopDefault(_02DSvg);
var _02NSvg = require("url:../../img/02n.svg");
var _02NSvgDefault = parcelHelpers.interopDefault(_02NSvg);
var _03DSvg = require("url:../../img/03d.svg");
var _03DSvgDefault = parcelHelpers.interopDefault(_03DSvg);
var _03NSvg = require("url:../../img/03n.svg");
var _03NSvgDefault = parcelHelpers.interopDefault(_03NSvg);
var _04DSvg = require("url:../../img/04d.svg");
var _04DSvgDefault = parcelHelpers.interopDefault(_04DSvg);
var _04NSvg = require("url:../../img/04n.svg");
var _04NSvgDefault = parcelHelpers.interopDefault(_04NSvg);
var _09DSvg = require("url:../../img/09d.svg");
var _09DSvgDefault = parcelHelpers.interopDefault(_09DSvg);
var _09NSvg = require("url:../../img/09n.svg");
var _09NSvgDefault = parcelHelpers.interopDefault(_09NSvg);
var _10DSvg = require("url:../../img/10d.svg");
var _10DSvgDefault = parcelHelpers.interopDefault(_10DSvg);
var _10NSvg = require("url:../../img/10n.svg");
var _10NSvgDefault = parcelHelpers.interopDefault(_10NSvg);
var _11DSvg = require("url:../../img/11d.svg");
var _11DSvgDefault = parcelHelpers.interopDefault(_11DSvg);
var _11NSvg = require("url:../../img/11n.svg");
var _11NSvgDefault = parcelHelpers.interopDefault(_11NSvg);
var _13DSvg = require("url:../../img/13d.svg");
var _13DSvgDefault = parcelHelpers.interopDefault(_13DSvg);
var _13NSvg = require("url:../../img/13n.svg");
var _13NSvgDefault = parcelHelpers.interopDefault(_13NSvg);
var _50DSvg = require("url:../../img/50d.svg");
var _50DSvgDefault = parcelHelpers.interopDefault(_50DSvg);
var _50NSvg = require("url:../../img/50n.svg");
var _50NSvgDefault = parcelHelpers.interopDefault(_50NSvg);
class WeatherView {
    #parentElement = document.querySelector(".weather");
    #cardElement = document.querySelector(".card");
    #data;
    render(data) {
        this.#data = data;
        const markup = this.#generateMarkup();
        this._clearUI();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _clearUI() {
        this.#parentElement.innerHTML = "";
    }
    _renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _spinnerSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
      `;
        this._clearUI();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _renderError(message) {
        const markup = `
      <div class="error">
        <p>${message}</p>
      </div>
    `;
        this._clearUI();
        this._clearClassList();
        this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clearClassList() {
        this.#cardElement.classList = "card";
    }
    #generateIcon() {
        if (this.#data.icon === "01d") {
            this._clearClassList();
            this.#cardElement.classList.add("sunny");
            return 0, _01DSvgDefault.default;
        }
        if (this.#data.icon === "01n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _01NSvgDefault.default;
        }
        if (this.#data.icon === "02d") {
            this._clearClassList();
            this.#cardElement.classList.add("partly-cloudy");
            return 0, _02DSvgDefault.default;
        }
        if (this.#data.icon === "02n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _02NSvgDefault.default;
        }
        if (this.#data.icon === "03d") {
            this._clearClassList();
            this.#cardElement.classList.add("cloudy");
            return 0, _03DSvgDefault.default;
        }
        if (this.#data.icon === "03n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _03NSvgDefault.default;
        }
        if (this.#data.icon === "04d") {
            this._clearClassList();
            this.#cardElement.classList.add("cloudy");
            return 0, _04DSvgDefault.default;
        }
        if (this.#data.icon === "04n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _04NSvgDefault.default;
        }
        if (this.#data.icon === "09d") {
            this._clearClassList();
            this.#cardElement.classList.add("rain");
            return 0, _09DSvgDefault.default;
        }
        if (this.#data.icon === "09n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _09NSvgDefault.default;
        }
        if (this.#data.icon === "10d") {
            this._clearClassList();
            this.#cardElement.classList.add("rain");
            return 0, _10DSvgDefault.default;
        }
        if (this.#data.icon === "10n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _10NSvgDefault.default;
        }
        if (this.#data.icon === "11d") {
            this._clearClassList();
            this.#cardElement.classList.add("rain");
            return 0, _11DSvgDefault.default;
        }
        if (this.#data.icon === "11n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _11NSvgDefault.default;
        }
        if (this.#data.icon === "13d") {
            this._clearClassList();
            this.#cardElement.classList.add("rain");
            return 0, _13DSvgDefault.default;
        }
        if (this.#data.icon === "13n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _13NSvgDefault.default;
        }
        if (this.#data.icon === "50d") {
            this._clearClassList();
            this.#cardElement.classList.add("partly-cloudy");
            return 0, _50DSvgDefault.default;
        }
        if (this.#data.icon === "50n") {
            this._clearClassList();
            this.#cardElement.classList.add("night");
            return 0, _50NSvgDefault.default;
        }
    }
    #generateMarkup() {
        return `
       <div class="weather-icon">
        <img src="${this.#generateIcon()}" alt="weather icon"/>
       </div>
       <div class="city"><span>${this.#data.cityName}</span></div>
       <div class="temp"><span>${Math.floor(this.#data.temp)}&#8451;</span></div>
       <div class="description"><span>${this.#data.description.charAt(0).toUpperCase() + this.#data.description.slice(1)}</span></div>
       <div class="details">
         <div class="col">
           <div class="col__icon"><img src="${0, _humiditySvgDefault.default}" alt="humidity icon"/></div>
           <div>
             <p class="humidity">${this.#data.humidity}&percnt;</p>
             <p>Humidity</p>
           </div>
         </div>
         <div class="col">
          <div class="col__icon"><img src="${0, _windSvgDefault.default}" alt="wind icon"/></div>
          <div>
             <p class="wind">${Math.floor(this.#data.wind)} m/s</p>
             <p>Wind speed</p>
           </div>
         </div>
         <div class="col">
          <div class="col__icon"><img src="${0, _barometerSvgDefault.default}" alt="wind icon"/></div>
          <div>
             <p class="wind">${Math.floor(this.#data.pressure)} hPa</p>
             <p>Pressure</p>
           </div>
         </div>
       </div> 
    `;
    }
}
exports.default = new WeatherView();

},{"url:../../img/humidity.svg":"3QBLe","url:../../img/wind.svg":"hEF6a","url:../../img/barometer.svg":"72zFc","url:../../img/spinner.svg":"ftjoM","url:../../img/01d.svg":"kUTmA","url:../../img/01n.svg":"c2Ysp","url:../../img/02d.svg":"gmRmE","url:../../img/02n.svg":"fhjCQ","url:../../img/03d.svg":"f3ccg","url:../../img/03n.svg":"i3lg0","url:../../img/04d.svg":"1x62b","url:../../img/04n.svg":"eBGaf","url:../../img/09d.svg":"d0bz5","url:../../img/09n.svg":"51jCr","url:../../img/10d.svg":"irnai","url:../../img/10n.svg":"3vQZl","url:../../img/11d.svg":"54UNs","url:../../img/11n.svg":"gosrk","url:../../img/13d.svg":"hg1fy","url:../../img/13n.svg":"6eNv3","url:../../img/50d.svg":"cIZLM","url:../../img/50n.svg":"9vImU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3QBLe":[function(require,module,exports) {
module.exports = require("586daf3e48f8b27e").getBundleURL("hWUTQ") + "humidity.5b846418.svg" + "?" + Date.now();

},{"586daf3e48f8b27e":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hEF6a":[function(require,module,exports) {
module.exports = require("fb2a7af023b20b29").getBundleURL("hWUTQ") + "wind.1d3858b8.svg" + "?" + Date.now();

},{"fb2a7af023b20b29":"lgJ39"}],"72zFc":[function(require,module,exports) {
module.exports = require("efbb2f2e3a257169").getBundleURL("hWUTQ") + "barometer.a54fa64e.svg" + "?" + Date.now();

},{"efbb2f2e3a257169":"lgJ39"}],"ftjoM":[function(require,module,exports) {
module.exports = require("f50a8037b9b9007e").getBundleURL("hWUTQ") + "spinner.e86c7dc0.svg" + "?" + Date.now();

},{"f50a8037b9b9007e":"lgJ39"}],"kUTmA":[function(require,module,exports) {
module.exports = require("311c98aeeefc7f27").getBundleURL("hWUTQ") + "01d.8baa893d.svg" + "?" + Date.now();

},{"311c98aeeefc7f27":"lgJ39"}],"c2Ysp":[function(require,module,exports) {
module.exports = require("c23ea5c9c3cda350").getBundleURL("hWUTQ") + "01n.8722c25c.svg" + "?" + Date.now();

},{"c23ea5c9c3cda350":"lgJ39"}],"gmRmE":[function(require,module,exports) {
module.exports = require("abfd87f9e255ed20").getBundleURL("hWUTQ") + "02d.ac224294.svg" + "?" + Date.now();

},{"abfd87f9e255ed20":"lgJ39"}],"fhjCQ":[function(require,module,exports) {
module.exports = require("94c411f7a30a378f").getBundleURL("hWUTQ") + "02n.641fe29a.svg" + "?" + Date.now();

},{"94c411f7a30a378f":"lgJ39"}],"f3ccg":[function(require,module,exports) {
module.exports = require("57fd0a3acd76409").getBundleURL("hWUTQ") + "03d.ad31dd94.svg" + "?" + Date.now();

},{"57fd0a3acd76409":"lgJ39"}],"i3lg0":[function(require,module,exports) {
module.exports = require("c6a26fd31ca63941").getBundleURL("hWUTQ") + "03n.1c3bf364.svg" + "?" + Date.now();

},{"c6a26fd31ca63941":"lgJ39"}],"1x62b":[function(require,module,exports) {
module.exports = require("8c4e76579d71d4d5").getBundleURL("hWUTQ") + "04d.fff1f2af.svg" + "?" + Date.now();

},{"8c4e76579d71d4d5":"lgJ39"}],"eBGaf":[function(require,module,exports) {
module.exports = require("c708c2df9c439e5").getBundleURL("hWUTQ") + "04n.be694a84.svg" + "?" + Date.now();

},{"c708c2df9c439e5":"lgJ39"}],"d0bz5":[function(require,module,exports) {
module.exports = require("9b8a424b41afad14").getBundleURL("hWUTQ") + "09d.9f80969e.svg" + "?" + Date.now();

},{"9b8a424b41afad14":"lgJ39"}],"51jCr":[function(require,module,exports) {
module.exports = require("9523a1107de40637").getBundleURL("hWUTQ") + "09n.4ffdcd59.svg" + "?" + Date.now();

},{"9523a1107de40637":"lgJ39"}],"irnai":[function(require,module,exports) {
module.exports = require("e037d555c6b92319").getBundleURL("hWUTQ") + "10d.2d73b86c.svg" + "?" + Date.now();

},{"e037d555c6b92319":"lgJ39"}],"3vQZl":[function(require,module,exports) {
module.exports = require("9d5b106e6c74c7cf").getBundleURL("hWUTQ") + "10n.4f581aee.svg" + "?" + Date.now();

},{"9d5b106e6c74c7cf":"lgJ39"}],"54UNs":[function(require,module,exports) {
module.exports = require("33f84facf464ae5c").getBundleURL("hWUTQ") + "11d.dccdf557.svg" + "?" + Date.now();

},{"33f84facf464ae5c":"lgJ39"}],"gosrk":[function(require,module,exports) {
module.exports = require("8cd64b14ba665d95").getBundleURL("hWUTQ") + "11n.917e27b6.svg" + "?" + Date.now();

},{"8cd64b14ba665d95":"lgJ39"}],"hg1fy":[function(require,module,exports) {
module.exports = require("3e8ae475c64c565b").getBundleURL("hWUTQ") + "13d.e07d76ba.svg" + "?" + Date.now();

},{"3e8ae475c64c565b":"lgJ39"}],"6eNv3":[function(require,module,exports) {
module.exports = require("c7cdd99cb4ffed7d").getBundleURL("hWUTQ") + "13n.b8476be2.svg" + "?" + Date.now();

},{"c7cdd99cb4ffed7d":"lgJ39"}],"cIZLM":[function(require,module,exports) {
module.exports = require("adc72d00c20f64e5").getBundleURL("hWUTQ") + "50d.0d0113ec.svg" + "?" + Date.now();

},{"adc72d00c20f64e5":"lgJ39"}],"9vImU":[function(require,module,exports) {
module.exports = require("da5c540fead82e0c").getBundleURL("hWUTQ") + "50n.7fe93def.svg" + "?" + Date.now();

},{"da5c540fead82e0c":"lgJ39"}],"1ldzZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    #parentElement = document.querySelector(".search");
    getQuery() {
        return this.#parentElement.querySelector("input").value;
    }
    addHandlerRender(handler) {
        this.#parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequirebbde")

//# sourceMappingURL=index.e37f48ea.js.map
