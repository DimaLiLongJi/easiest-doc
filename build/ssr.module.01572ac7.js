// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"pages/ssr/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/css-loader.js"}],"constants/ssr.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrInfo = void 0;

var ssrInfo = function ssrInfo() {
  return [{
    h1: '服务端渲染（SSR）',
    p: ['标准的 InDiv 应用会运行在浏览器中，', '当 JavaScript 脚本加载完毕后，它会在 DOM 中渲染页面，以响应用户的操作。', '但是在特殊场景，比如 SEO，需要提升在低性能设备上的渲染速度，需要迅速显示首屏时，', '可能服务端渲染更适合。', '它可以生成这些页面，并在浏览器请求时直接用它们给出响应。'],
    info: [{
      title: '工作原理',
      p: ['通过引入 @indiv/ssr-renderer v1.1.0+。', '@indiv/ssr-renderer 包提供了服务端的 DOM 实现，使得渲染 InDiv 应用不再依赖浏览器。', '通过 node 端，会把客户端对应用页面的请求传给 @indiv/ssr-renderer 中的 renderToString  函数，', '引入 indiv 实例和路由的配置对象，renderToString 会根据对应的路径，返回已经被渲染完的字符串模板。', '通过不同框架的渲染机制，将返回的字符串模板渲染到模板的 <div id="root"></div> 中。', '最后，服务器就会把渲染好的页面返回给客户端。'],
      pchild: ['1. 生命周期受到限制，服务端渲染中仅仅支持 constructor 和 OnInit 的调用。', '2. 因为 InDiv 的 nvHttp 对象是封装的 axios 库，因此支持在 node 环境中使用 http 请求。', '3. 通过 nv-on:eventName 方式绑定的方法暂时无法渲染。']
    }, {
      title: '环境及使用',
      p: ['Node.js: v6+', 'indiv: v1.2.0+', '@indiv/ssr-renderer: v1.1.0+', '本例子使用 express 及 ejs 模板，你也可以选择适合的 服务端框架 及 模板 。'],
      pchild: ['1. 创建 InDiv app', '2. 创建一个用于处理请求的 express Web 服务器', '3. 创建一个 ejs 模板', '4. 引入 @indiv/ssr-renderer 包 renderToString: (url: string, routes: TRouter[], indiv: InDiv) => string', '5. 将 request 的 url， indiv app路由配置对象，和 indiv实例 作为参数依次传入 renderToString', '6. 最后 renderToString 的返回值渲染至模板中'],
      code: "\n  // in index.ejs\n  <div id=\"root\">\n    <%- content %>\n  </div>\n\n  // in service side\n  const express = require('express');\n  const renderToString = require('@indiv/ssr-renderer');\n\n  const app = express();\n\n  app.use('/indiv-doc', (request, response, next) => {    \n    // import indiv app\n    const ssrData = require('./dist/main.js');\n    response.render('index.ejs', {\n      // use in ejs template\n      content: renderToString(request.url, ssrData.routes, ssrData.default.inDiv),\n    });\n  });\n    "
    }]
  }];
};

exports.ssrInfo = ssrInfo;
},{}],"pages/ssr/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.less");

var _src = require("../../../../InDiv/src");

var _ssr = require("../../constants/ssr");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SSRContainer =
/** @class */
function () {
  function SSRContainer() {
    this.state = {
      info: (0, _ssr.ssrInfo)(),
      codeType: 'javascript'
    };
  }

  SSRContainer = __decorate([(0, _src.Component)({
    selector: 'ssr-container',
    template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n                <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n                    <h2>{{code.title}}</h2>\n                    <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n                    <div class=\"pchild\" nv-if=\"code.pchild\">\n                    <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n                    </div>\n                    <code-shower nv-if=\"code.code\" type=\"{$.codeType}\" codes=\"{code.code}\"></code-shower>\n                </div>\n            </div>\n        </div>\n    "
  }), __metadata("design:paramtypes", [])], SSRContainer);
  return SSRContainer;
}();

var _default = SSRContainer;
exports.default = _default;
},{"./style.less":"pages/ssr/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/ssr":"constants/ssr.ts"}],"modules/ssr.module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../InDiv/src");

var _ssr = _interopRequireDefault(require("../pages/ssr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}; // import { NvModule } from 'indiv';


var SSRModule =
/** @class */
function () {
  function SSRModule() {}

  SSRModule = __decorate([(0, _src.NvModule)({
    components: [_ssr.default],
    exports: [_ssr.default],
    bootstrap: _ssr.default
  })], SSRModule);
  return SSRModule;
}();

var _default = SSRModule;
exports.default = _default;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/ssr":"pages/ssr/index.ts"}],"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50966" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/ssr.module.01572ac7.map