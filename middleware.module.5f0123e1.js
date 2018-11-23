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
})({"pages/middleware/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/css-loader.js"}],"constants/middleware.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middlewareInfo = void 0;

var middlewareInfo = function middlewareInfo() {
  return [{
    h1: '中间件 及 其他开发',
    p: ['中间件是一个在 InDiv 挂载根模块（bootstrapModule(NvModule: Function): void;）之后初始化程序（init: () => void;）之前被调用的对象。', '中间件接收 InDiv 实例上的全部属性及方法，因此中间件可以修改 InDiv 的行为。', '插件可以是 InDiv模块（NvModule），也可以就是一个可以提供给providers的服务。'],
    info: [{
      title: '中间件',
      p: ['中间件应该是一个类型为 interface IMiddleware<InDiv> { bootstrap(vm: InDiv): void; } 的对象。', '中间件对象应有 bootstrap 方法，接收整个 InDiv 实例。', '可以通过修改 InDiv 实例上的全部属性及方法，改变整个应用的行为。', 'InDiv 实例会暴露如下方法及属性：'],
      pchild: ['1. modalList: IMiddleware<InDiv>[]; 中间件的列表', '2. rootDom: Element; 挂载在页面的元素', '3. $rootPath: string; 根地址，提供给路由器使用', '4. $canRenderModule: boolean; 可否渲染根模块提供的 bootstrap', '5. $routeDOMKey: string; 挂载路由的元素tagName', '6. $rootModule: INvModule; 根模块', '7. $components: Function[]; 根模块暴露出的组件类', '8. setRootPath: (rootPath: string) => void; 更改设置根地址', '9. bootstrapModule: (NvModule: Function) => void; 引导初始化根模块', '10. v1.2.1新增: render() => Promise<IComponent>; 组件初次异步渲染的方法，返回一个Promise<IComponent>', '11. v1.2.1新增: reRender() => Promise<IComponent>; 组件非初次异步渲染的方法，返回一个Promise<IComponent>']
    }, {
      title: '其他开发',
      pchild: ['可以提供模块（NvModule），在 exports: Function[] 中导出提供给开发者的组件，并像普通的模块一样使用。', '也可以提供服务，并像普通的服务一样使用。']
    }]
  }];
};

exports.middlewareInfo = middlewareInfo;
},{}],"pages/middleware/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.less");

var _src = require("../../../../InDiv/src");

var _middleware = require("../../constants/middleware");

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

var MiddlewareContainer =
/** @class */
function () {
  function MiddlewareContainer() {
    this.state = {
      infos: (0, _middleware.middlewareInfo)(),
      codeType: 'javascript'
    };
  }

  MiddlewareContainer = __decorate([(0, _src.Component)({
    selector: 'middleware-container',
    template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in infos\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n                <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n                    <h2>{{code.title}}</h2>\n                    <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n                    <div class=\"pchild\" nv-if=\"code.pchild\">\n                    <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n                    </div>\n                    <code-shower nv-if=\"code.code\" type=\"{codeType}\" codes=\"{code.code}\"></code-shower>\n                </div>\n            </div>\n        </div>\n    "
  }), __metadata("design:paramtypes", [])], MiddlewareContainer);
  return MiddlewareContainer;
}();

var _default = MiddlewareContainer;
exports.default = _default;
},{"./style.less":"pages/middleware/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/middleware":"constants/middleware.ts"}],"modules/middleware.module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../InDiv/src");

var _middleware = _interopRequireDefault(require("../pages/middleware"));

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


var MiddlewareModule =
/** @class */
function () {
  function MiddlewareModule() {}

  MiddlewareModule = __decorate([(0, _src.NvModule)({
    declarations: [_middleware.default],
    exports: [_middleware.default],
    bootstrap: _middleware.default
  })], MiddlewareModule);
  return MiddlewareModule;
}();

var _default = MiddlewareModule;
exports.default = _default;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/middleware":"pages/middleware/index.ts"}],"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51008" + '/');

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
//# sourceMappingURL=/middleware.module.5f0123e1.map