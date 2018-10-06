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
})({"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/bundle-url.js"}],"styles/reset.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"styles/global.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_dom-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_ie8-dom-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js":[function(require,module,exports) {
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js":[function(require,module,exports) {
module.exports = false;

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_wks-ext":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_array-includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js","./_shared-key":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_object-dps":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js","./_enum-bug-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js","./_shared-key":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js","./_dom-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js","./_html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js":[function(require,module,exports) {
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_ie8-dom-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ie8-dom-define.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports) {

'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_shared":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_wks-ext":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-ext.js","./_wks-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js","./_enum-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_enum-keys.js","./_is-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_object-gopn-ext":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./_object-pie":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js","./_object-gops":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js","./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-dps":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dps.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js":[function(require,module,exports) {
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_shared-key":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared-key.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js","./_object-gopn-ext":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn-ext.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js":[function(require,module,exports) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-assign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_same-value":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_same-value.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js":[function(require,module,exports) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_set-proto":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js":[function(require,module,exports) {
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js":[function(require,module,exports) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js":[function(require,module,exports) {
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_invoke":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js":[function(require,module,exports) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_bind":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports) {
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js":[function(require,module,exports) {
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js":[function(require,module,exports) {
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js":[function(require,module,exports) {
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_string-ws":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js":[function(require,module,exports) {
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js","./_string-ws":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_parse-int":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js":[function(require,module,exports) {
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js","./_string-ws":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-ws.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_parse-float":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_set-proto":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js","./_inherit-if-required":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js":[function(require,module,exports) {
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js":[function(require,module,exports) {
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_a-number-value":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js","./_string-repeat":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_a-number-value":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-number-value.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_is-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_is-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-integer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_parse-float":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-float.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_parse-int":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_parse-int.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js":[function(require,module,exports) {
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-log1p":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-sign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-fround":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js":[function(require,module,exports) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js":[function(require,module,exports) {
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-log1p":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-log1p.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-sign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js":[function(require,module,exports) {
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js":[function(require,module,exports) {
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-expm1.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports) {
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports) {
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js":[function(require,module,exports) {
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_iter-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js","./_iter-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-at":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js":[function(require,module,exports) {
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_string-context":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-context":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports) {
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-repeat":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_string-context":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js":[function(require,module,exports) {
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js":[function(require,module,exports) {
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js":[function(require,module,exports) {
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js":[function(require,module,exports) {
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js":[function(require,module,exports) {
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js":[function(require,module,exports) {
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js":[function(require,module,exports) {
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js":[function(require,module,exports) {
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js":[function(require,module,exports) {
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js":[function(require,module,exports) {
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js":[function(require,module,exports) {
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js":[function(require,module,exports) {
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js":[function(require,module,exports) {
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js":[function(require,module,exports) {
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-html.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js":[function(require,module,exports) {
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js":[function(require,module,exports) {
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_date-to-iso-string":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-iso-string.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js":[function(require,module,exports) {
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js":[function(require,module,exports) {
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js":[function(require,module,exports) {
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_date-to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_date-to-primitive.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js":[function(require,module,exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_is-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js":[function(require,module,exports) {
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js":[function(require,module,exports) {
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js":[function(require,module,exports) {
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports) {
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_iter-call":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_create-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js","./core.get-iterator-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js","./_iter-detect":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_create-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js":[function(require,module,exports) {
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js":[function(require,module,exports) {
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_html.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_is-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-constructor.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js":[function(require,module,exports) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_array-species-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js":[function(require,module,exports) {
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iobject.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-reduce":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-reduce":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-reduce.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_strict-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_strict-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-copy-within":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-fill":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports) {
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports) {
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js":[function(require,module,exports) {
require('./_set-species')('Array');

},{"./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js","./_iter-step":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js","./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_iter-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js":[function(require,module,exports) {
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js":[function(require,module,exports) {

var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_inherit-if-required":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./_is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js","./_flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js":[function(require,module,exports) {

'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./es6.regexp.flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js":[function(require,module,exports) {
'use strict';
var hide = require('./_hide');
var redefine = require('./_redefine');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js":[function(require,module,exports) {
// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

},{"./_fix-re-wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js":[function(require,module,exports) {
// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

},{"./_fix-re-wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js":[function(require,module,exports) {
// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

},{"./_fix-re-wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js":[function(require,module,exports) {
// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = require('./_is-regexp');
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

},{"./_fix-re-wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fix-re-wks.js","./_is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js":[function(require,module,exports) {
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_iter-call":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./core.get-iterator-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_task.js":[function(require,module,exports) {


var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_invoke":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_invoke.js","./_html":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_html.js","./_dom-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_dom-create.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js":[function(require,module,exports) {


var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_task":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_task.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js":[function(require,module,exports) {
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js":[function(require,module,exports) {

var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_new-promise-capability":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js":[function(require,module,exports) {
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js":[function(require,module,exports) {


'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_classof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js","./_species-constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js","./_task":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_task.js","./_microtask":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js","./_new-promise-capability":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js","./_user-agent":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js","./_promise-resolve":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_iter-detect":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js":[function(require,module,exports) {
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js","./_iter-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-define.js","./_iter-step":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-step.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_iter-detect":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js","./_inherit-if-required":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_inherit-if-required.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection-strong":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection-strong":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js":[function(require,module,exports) {
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports) {
'use strict';
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var fails = require('./_fails');
var validate = require('./_validate-collection');
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_meta":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_meta.js","./_object-assign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-assign.js","./_collection-weak":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports) {
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection-weak":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-weak.js","./_validate-collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js":[function(require,module,exports) {
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_typed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_to-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_array-fill":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js","./_set-to-string-tag":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-to-string-tag.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_typed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_species-constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js":[function(require,module,exports) {
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_typed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_typed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-buffer.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_to-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-index.js","./_to-absolute-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-absolute-index.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_classof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_is-array-iter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array-iter.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./core.get-iterator-method":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.get-iterator-method.js","./_uid":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_uid.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_array-methods":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-methods.js","./_array-includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js","./_species-constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js","./es6.array.iterator":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js","./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_iter-detect":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-detect.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js","./_array-fill":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-fill.js","./_array-copy-within":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-copy-within.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js":[function(require,module,exports) {
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js":[function(require,module,exports) {
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js":[function(require,module,exports) {
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js":[function(require,module,exports) {
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js":[function(require,module,exports) {
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js":[function(require,module,exports) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js":[function(require,module,exports) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-create.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_bind":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_bind.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js":[function(require,module,exports) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js":[function(require,module,exports) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js":[function(require,module,exports) {
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_iter-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js":[function(require,module,exports) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js":[function(require,module,exports) {
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js":[function(require,module,exports) {
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_object-gopn":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopn.js","./_object-gops":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gops.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_own-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":[function(require,module,exports) {
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js":[function(require,module,exports) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_has.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_property-desc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_property-desc.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":[function(require,module,exports) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_set-proto":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_array-includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-includes.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_is-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-array.js","./_is-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-object.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_flatten-into-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_array-species-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_flatten-into-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_to-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-integer.js","./_array-species-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js":[function(require,module,exports) {
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-at":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-at.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_string-repeat":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-repeat.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-pad":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_string-pad":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_string-trim.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export = require('./_export');
var defined = require('./_defined');
var toLength = require('./_to-length');
var isRegExp = require('./_is-regexp');
var getFlags = require('./_flags');
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_defined":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_defined.js","./_to-length":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-length.js","./_is-regexp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_is-regexp.js","./_flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_flags.js","./_iter-create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iter-create.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js":[function(require,module,exports) {
require('./_wks-define')('asyncIterator');

},{"./_wks-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js":[function(require,module,exports) {
require('./_wks-define')('observable');

},{"./_wks-define":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks-define.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_own-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_own-keys.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_create-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_create-property.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js":[function(require,module,exports) {
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_to-iobject":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-iobject.js","./_object-pie":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-pie.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-to-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_object-to-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-to-array.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js":[function(require,module,exports) {
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_library":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_library.js","./_fails":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_fails.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_object-dp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-object.js","./_to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gopd.js","./_descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-forced-pam.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js":[function(require,module,exports) {
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_classof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_classof.js","./_array-from-iterable":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_collection-to-json":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_collection-to-json":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_collection-to-json.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require('./_set-collection-of')('WeakSet');

},{"./_set-collection-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_ctx":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_ctx.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require('./_set-collection-from')('WeakSet');

},{"./_set-collection-from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-collection-from.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js":[function(require,module,exports) {
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export');
var cof = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var scale = require('./_math-scale');
var fround = require('./_math-fround');

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-scale":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js","./_math-fround":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-fround.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { scale: require('./_math-scale') });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_math-scale":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_math-scale.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js":[function(require,module,exports) {
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require('./_export');

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js":[function(require,module,exports) {

// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_species-constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_species-constructor.js","./_promise-resolve":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_promise-resolve.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_new-promise-capability":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_perform.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js":[function(require,module,exports) {
var Map = require('./es6.map');
var $export = require('./_export');
var shared = require('./_shared')('metadata');
var store = shared.store || (shared.store = new (require('./es6.weak-map'))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

},{"./es6.map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_shared":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_shared.js","./es6.weak-map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":[function(require,module,exports) {
var Set = require('./es6.set');
var from = require('./_array-from-iterable');
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./es6.set":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js","./_array-from-iterable":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_array-from-iterable.js","./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_object-gpo":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-gpo.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js":[function(require,module,exports) {
var $metadata = require('./_metadata');
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });

},{"./_metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_metadata.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js":[function(require,module,exports) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require('./_export');
var microtask = require('./_microtask')();
var process = require('./_global').process;
var isNode = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_microtask":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_cof":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js":[function(require,module,exports) {

'use strict';
// https://github.com/zenparsing/es-observable
var $export = require('./_export');
var global = require('./_global');
var core = require('./_core');
var microtask = require('./_microtask')();
var OBSERVABLE = require('./_wks')('observable');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var anInstance = require('./_an-instance');
var redefineAll = require('./_redefine-all');
var hide = require('./_hide');
var forOf = require('./_for-of');
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

require('./_set-species')('Observable');

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js","./_microtask":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_microtask.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js","./_a-function":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_a-function.js","./_an-object":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-object.js","./_an-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_an-instance.js","./_redefine-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine-all.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_for-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_for-of.js","./_set-species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_set-species.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js":[function(require,module,exports) {

// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_user-agent":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js":[function(require,module,exports) {
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_task":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_task.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports) {

var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./es6.array.iterator":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js","./_object-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_object-keys.js","./_redefine":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_redefine.js","./_global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_hide.js","./_iterators":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_iterators.js","./_wks":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/shim.js":[function(require,module,exports) {
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.array.flat-map');
require('./modules/es7.array.flatten');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.map.of');
require('./modules/es7.set.of');
require('./modules/es7.weak-map.of');
require('./modules/es7.weak-set.of');
require('./modules/es7.map.from');
require('./modules/es7.set.from');
require('./modules/es7.weak-map.from');
require('./modules/es7.weak-set.from');
require('./modules/es7.global');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.clamp');
require('./modules/es7.math.deg-per-rad');
require('./modules/es7.math.degrees');
require('./modules/es7.math.fscale');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.rad-per-deg');
require('./modules/es7.math.radians');
require('./modules/es7.math.scale');
require('./modules/es7.math.umulh');
require('./modules/es7.math.signbit');
require('./modules/es7.promise.finally');
require('./modules/es7.promise.try');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');

},{"./modules/es6.symbol":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.symbol.js","./modules/es6.object.create":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.create.js","./modules/es6.object.define-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-property.js","./modules/es6.object.define-properties":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.define-properties.js","./modules/es6.object.get-own-property-descriptor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js","./modules/es6.object.get-prototype-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-prototype-of.js","./modules/es6.object.keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.keys.js","./modules/es6.object.get-own-property-names":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.get-own-property-names.js","./modules/es6.object.freeze":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.freeze.js","./modules/es6.object.seal":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.seal.js","./modules/es6.object.prevent-extensions":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.prevent-extensions.js","./modules/es6.object.is-frozen":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-frozen.js","./modules/es6.object.is-sealed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-sealed.js","./modules/es6.object.is-extensible":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is-extensible.js","./modules/es6.object.assign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.assign.js","./modules/es6.object.is":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.is.js","./modules/es6.object.set-prototype-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.set-prototype-of.js","./modules/es6.object.to-string":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.object.to-string.js","./modules/es6.function.bind":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.bind.js","./modules/es6.function.name":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.name.js","./modules/es6.function.has-instance":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.function.has-instance.js","./modules/es6.parse-int":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-int.js","./modules/es6.parse-float":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.parse-float.js","./modules/es6.number.constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.constructor.js","./modules/es6.number.to-fixed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-fixed.js","./modules/es6.number.to-precision":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.to-precision.js","./modules/es6.number.epsilon":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.epsilon.js","./modules/es6.number.is-finite":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-finite.js","./modules/es6.number.is-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-integer.js","./modules/es6.number.is-nan":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-nan.js","./modules/es6.number.is-safe-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.is-safe-integer.js","./modules/es6.number.max-safe-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.max-safe-integer.js","./modules/es6.number.min-safe-integer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.min-safe-integer.js","./modules/es6.number.parse-float":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-float.js","./modules/es6.number.parse-int":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.number.parse-int.js","./modules/es6.math.acosh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.acosh.js","./modules/es6.math.asinh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.asinh.js","./modules/es6.math.atanh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.atanh.js","./modules/es6.math.cbrt":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cbrt.js","./modules/es6.math.clz32":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.clz32.js","./modules/es6.math.cosh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.cosh.js","./modules/es6.math.expm1":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.expm1.js","./modules/es6.math.fround":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.fround.js","./modules/es6.math.hypot":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.hypot.js","./modules/es6.math.imul":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.imul.js","./modules/es6.math.log10":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log10.js","./modules/es6.math.log1p":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log1p.js","./modules/es6.math.log2":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.log2.js","./modules/es6.math.sign":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sign.js","./modules/es6.math.sinh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.sinh.js","./modules/es6.math.tanh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.tanh.js","./modules/es6.math.trunc":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.math.trunc.js","./modules/es6.string.from-code-point":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.from-code-point.js","./modules/es6.string.raw":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.raw.js","./modules/es6.string.trim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.trim.js","./modules/es6.string.iterator":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.iterator.js","./modules/es6.string.code-point-at":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.code-point-at.js","./modules/es6.string.ends-with":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.ends-with.js","./modules/es6.string.includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.includes.js","./modules/es6.string.repeat":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.repeat.js","./modules/es6.string.starts-with":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.starts-with.js","./modules/es6.string.anchor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.anchor.js","./modules/es6.string.big":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.big.js","./modules/es6.string.blink":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.blink.js","./modules/es6.string.bold":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.bold.js","./modules/es6.string.fixed":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fixed.js","./modules/es6.string.fontcolor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontcolor.js","./modules/es6.string.fontsize":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.fontsize.js","./modules/es6.string.italics":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.italics.js","./modules/es6.string.link":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.link.js","./modules/es6.string.small":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.small.js","./modules/es6.string.strike":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.strike.js","./modules/es6.string.sub":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sub.js","./modules/es6.string.sup":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.string.sup.js","./modules/es6.date.now":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.now.js","./modules/es6.date.to-json":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-json.js","./modules/es6.date.to-iso-string":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-iso-string.js","./modules/es6.date.to-string":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-string.js","./modules/es6.date.to-primitive":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.date.to-primitive.js","./modules/es6.array.is-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.is-array.js","./modules/es6.array.from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.from.js","./modules/es6.array.of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.of.js","./modules/es6.array.join":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.join.js","./modules/es6.array.slice":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.slice.js","./modules/es6.array.sort":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.sort.js","./modules/es6.array.for-each":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.for-each.js","./modules/es6.array.map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.map.js","./modules/es6.array.filter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.filter.js","./modules/es6.array.some":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.some.js","./modules/es6.array.every":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.every.js","./modules/es6.array.reduce":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce.js","./modules/es6.array.reduce-right":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.reduce-right.js","./modules/es6.array.index-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.index-of.js","./modules/es6.array.last-index-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.last-index-of.js","./modules/es6.array.copy-within":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.copy-within.js","./modules/es6.array.fill":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.fill.js","./modules/es6.array.find":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find.js","./modules/es6.array.find-index":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.find-index.js","./modules/es6.array.species":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.species.js","./modules/es6.array.iterator":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.array.iterator.js","./modules/es6.regexp.constructor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.constructor.js","./modules/es6.regexp.to-string":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.to-string.js","./modules/es6.regexp.flags":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.flags.js","./modules/es6.regexp.match":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.match.js","./modules/es6.regexp.replace":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.replace.js","./modules/es6.regexp.search":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.search.js","./modules/es6.regexp.split":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.regexp.split.js","./modules/es6.promise":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.promise.js","./modules/es6.map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.map.js","./modules/es6.set":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.set.js","./modules/es6.weak-map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-map.js","./modules/es6.weak-set":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.weak-set.js","./modules/es6.typed.array-buffer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.array-buffer.js","./modules/es6.typed.data-view":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.data-view.js","./modules/es6.typed.int8-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int8-array.js","./modules/es6.typed.uint8-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-array.js","./modules/es6.typed.uint8-clamped-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js","./modules/es6.typed.int16-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int16-array.js","./modules/es6.typed.uint16-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint16-array.js","./modules/es6.typed.int32-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.int32-array.js","./modules/es6.typed.uint32-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.uint32-array.js","./modules/es6.typed.float32-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float32-array.js","./modules/es6.typed.float64-array":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.typed.float64-array.js","./modules/es6.reflect.apply":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.apply.js","./modules/es6.reflect.construct":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.construct.js","./modules/es6.reflect.define-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.define-property.js","./modules/es6.reflect.delete-property":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.delete-property.js","./modules/es6.reflect.enumerate":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.enumerate.js","./modules/es6.reflect.get":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get.js","./modules/es6.reflect.get-own-property-descriptor":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js","./modules/es6.reflect.get-prototype-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.get-prototype-of.js","./modules/es6.reflect.has":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.has.js","./modules/es6.reflect.is-extensible":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.is-extensible.js","./modules/es6.reflect.own-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.own-keys.js","./modules/es6.reflect.prevent-extensions":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.prevent-extensions.js","./modules/es6.reflect.set":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set.js","./modules/es6.reflect.set-prototype-of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es6.reflect.set-prototype-of.js","./modules/es7.array.includes":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.includes.js","./modules/es7.array.flat-map":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flat-map.js","./modules/es7.array.flatten":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.array.flatten.js","./modules/es7.string.at":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.at.js","./modules/es7.string.pad-start":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-start.js","./modules/es7.string.pad-end":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.pad-end.js","./modules/es7.string.trim-left":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-left.js","./modules/es7.string.trim-right":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.trim-right.js","./modules/es7.string.match-all":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.string.match-all.js","./modules/es7.symbol.async-iterator":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.async-iterator.js","./modules/es7.symbol.observable":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.symbol.observable.js","./modules/es7.object.get-own-property-descriptors":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","./modules/es7.object.values":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.values.js","./modules/es7.object.entries":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.entries.js","./modules/es7.object.define-getter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-getter.js","./modules/es7.object.define-setter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.define-setter.js","./modules/es7.object.lookup-getter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-getter.js","./modules/es7.object.lookup-setter":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.object.lookup-setter.js","./modules/es7.map.to-json":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.to-json.js","./modules/es7.set.to-json":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.to-json.js","./modules/es7.map.of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.of.js","./modules/es7.set.of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.of.js","./modules/es7.weak-map.of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.of.js","./modules/es7.weak-set.of":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.of.js","./modules/es7.map.from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.map.from.js","./modules/es7.set.from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.set.from.js","./modules/es7.weak-map.from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-map.from.js","./modules/es7.weak-set.from":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.weak-set.from.js","./modules/es7.global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.global.js","./modules/es7.system.global":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.system.global.js","./modules/es7.error.is-error":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.error.is-error.js","./modules/es7.math.clamp":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.clamp.js","./modules/es7.math.deg-per-rad":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.deg-per-rad.js","./modules/es7.math.degrees":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.degrees.js","./modules/es7.math.fscale":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.fscale.js","./modules/es7.math.iaddh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.iaddh.js","./modules/es7.math.isubh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.isubh.js","./modules/es7.math.imulh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.imulh.js","./modules/es7.math.rad-per-deg":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.rad-per-deg.js","./modules/es7.math.radians":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.radians.js","./modules/es7.math.scale":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.scale.js","./modules/es7.math.umulh":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.umulh.js","./modules/es7.math.signbit":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.math.signbit.js","./modules/es7.promise.finally":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.finally.js","./modules/es7.promise.try":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.promise.try.js","./modules/es7.reflect.define-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.define-metadata.js","./modules/es7.reflect.delete-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.delete-metadata.js","./modules/es7.reflect.get-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata.js","./modules/es7.reflect.get-metadata-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-metadata-keys.js","./modules/es7.reflect.get-own-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata.js","./modules/es7.reflect.get-own-metadata-keys":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js","./modules/es7.reflect.has-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-metadata.js","./modules/es7.reflect.has-own-metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.has-own-metadata.js","./modules/es7.reflect.metadata":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.reflect.metadata.js","./modules/es7.asap":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.asap.js","./modules/es7.observable":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/es7.observable.js","./modules/web.timers":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.timers.js","./modules/web.immediate":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.immediate.js","./modules/web.dom.iterable":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/web.dom.iterable.js","./modules/_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js":[function(require,module,exports) {
module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

},{}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js":[function(require,module,exports) {
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export');
var $re = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

},{"./_export":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_export.js","./_replacer":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_replacer.js"}],"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js":[function(require,module,exports) {
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;

},{"../../modules/core.regexp.escape":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/core.regexp.escape.js","../../modules/_core":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/babel-polyfill/lib/index.js":[function(require,module,exports) {
var global = arguments[3];

"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
},{"core-js/shim":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/shim.js","regenerator-runtime/runtime":"../../InDiv/node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js","core-js/fn/regexp/escape":"../../InDiv/node_modules/babel-polyfill/node_modules/core-js/fn/regexp/escape.js"}],"../../InDiv/node_modules/easier-cookie/build/index.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={set:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="",n="",i="",c="";if(r.expires){var a=new Date;a.setDate(a.getDate()+r.expires),o=";expires="+a.toGMTString()}r.path&&(n=";path="+r.path),r.domain&&(i=";domain="+r.domain),c=t instanceof Object?encodeURI(JSON.stringify(t)):encodeURI(t),document.cookie=encodeURI(e)+"="+c+o+n+i},get:function(e){if(!e)return null;for(var t=document.cookie.split("; "),r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===decodeURI(e)){var n=void 0;try{n=JSON.parse(decodeURI(o[1]))}catch(e){n=decodeURI(o[1])}return""===n?null:n}}return null},remove:function(e){try{return this.set(e,"",-1),!0}catch(t){return console.error("remove cookie "+e+" failed:",t),!1}}};exports.default=e;
},{}]},{},[1], null)
},{}],"../../InDiv/src/Utils/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var easier_cookie_1 = __importDefault(require("easier-cookie"));
/**
 * utils for InDiv
 *
 * @class Utils
 */


var Utils =
/** @class */
function () {
  /**
   * Creates an instance of Utils.
   * @memberof Utils
   */
  function Utils() {
    this.toString = Object.prototype.toString;
  }
  /**
   * set Cookie with easier-cookie
   *
   * @param {string} name
   * @param {*} value
   * @param {*} [options]
   * @memberof Utils
   */


  Utils.prototype.setCookie = function (name, value, options) {
    easier_cookie_1.default.set(name, value, options);
  };
  /**
   * get Cookie with easier-cookie
   *
   * @param {string} name
   * @returns {*}
   * @memberof Utils
   */


  Utils.prototype.getCookie = function (name) {
    return easier_cookie_1.default.get(name);
  };
  /**
   * remove Cookie with easier-cookie
   *
   * @param {string} name
   * @returns {boolean}
   * @memberof Utils
   */


  Utils.prototype.removeCookie = function (name) {
    return easier_cookie_1.default.remove(name);
  };
  /**
   * build url query
   *
   * @param {*} object
   * @returns {string}
   * @memberof Utils
   */


  Utils.prototype.buildQuery = function (object) {
    if (!object || !(object instanceof Object)) return '';
    var query = '?';

    for (var key in object) {
      if (!(object[key] instanceof Object)) {
        query += key + "=" + object[key].toString() + "&";
      } else {
        query += key + "=" + JSON.stringify(object[key]) + "&";
      }
    }

    return query.slice(0, query.length - 1);
  };
  /**
   * get one url query
   *
   * @param {string} name
   * @returns {string}
   * @memberof Utils
   */


  Utils.prototype.getQuery = function (name) {
    var parts = window.location.search.replace('?', '').split('&');
    var params = {};

    for (var i = 0; i < parts.length; i++) {
      var pairs = parts[i].split('=');
      params[pairs[0]] = pairs[1];
    }

    if (params[name]) {
      return params[name];
    } else {
      return '';
    }
  };
  /**
   * judge something is Function or not
   *
   * @param {*} func
   * @returns {boolean}
   * @memberof Utils
   */


  Utils.prototype.isFunction = function (func) {
    return this.toString.call(func) === '[object Function]';
  };
  /**
   * judge two things are equal or not
   *
   * @param {*} a
   * @param {*} b
   * @param {any[]} [aStack]
   * @param {any[]} [bStack]
   * @returns {boolean}
   * @memberof Utils
   */


  Utils.prototype.isEqual = function (a, b, aStack, bStack) {
    // === 结果为 true 的区别出 +0 和 -0
    if (a === b) return a !== 0 || 1 / a === 1 / b; // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数

    if (a == null || b == null) return false; // 判断 NaN

    if (a !== a) return b !== b; // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false

    var type = _typeof(a);

    if (type !== 'function' && type !== 'object' && _typeof(b) !== 'object') return false; // 更复杂的对象使用 deepEq 函数进行深度比较

    return this.deepIsEqual(a, b, aStack, bStack);
  };
  /**
   * deep judge two things are equal or not
   *
   * @param {*} a
   * @param {*} b
   * @param {any[]} [aStack]
   * @param {any[]} [bStack]
   * @returns {boolean}
   * @memberof Utils
   */


  Utils.prototype.deepIsEqual = function (a, b, aStack, bStack) {
    // a 和 b 的内部属性 [[class]] 相同时 返回 true
    var className = this.toString.call(a);
    if (className !== this.toString.call(b)) return false;

    switch (className) {
      case '[object RegExp]':
      case '[object String]':
        return "" + a === "" + b;

      case '[object Number]':
        if (+a !== +a) return +b !== +b;
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;

      case '[object Date]':
      case '[object Boolean]':
        return +a === +b;
    }

    var areArrays = className === '[object Array]'; // 不是数组

    if (!areArrays) {
      // 过滤掉两个函数的情况
      if (_typeof(a) !== 'object' || _typeof(b) !== 'object') return false;
      var aCtor = a.constructor;
      var bCtor = b.constructor; // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦

      if (aCtor !== bCtor && !(this.isFunction(aCtor) && aCtor instanceof aCtor && this.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
        return false;
      }
    }

    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length; // 检查是否有循环引用的部分

    while (length--) {
      if (aStack[length] === a) {
        return bStack[length] === b;
      }
    }

    aStack.push(a);
    bStack.push(b); // 数组判断

    if (areArrays) {
      length = a.length;
      if (length !== b.length) return false;

      while (length--) {
        if (!this.isEqual(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      var keys = Object.keys(a);
      var key = void 0;
      length = keys.length;
      if (Object.keys(b).length !== length) return false;

      while (length--) {
        key = keys[length];
        if (!(b.hasOwnProperty(key) && this.isEqual(a[key], b[key], aStack, bStack))) return false;
      }
    }

    aStack.pop();
    bStack.pop();
    return true;
  };
  /**
   * format string for InnerHTML
   *
   * @param {string} inner
   * @returns {string}
   * @memberof Utils
   */


  Utils.prototype.formatInnerHTML = function (inner) {
    inner = inner.replace(/(\n\s*)/g, '');
    inner = inner.replace(/^[^\S\n]+/gm, '');
    return inner;
  };
  /**
   * judge evn is browser or node
   *
   * @returns {boolean}
   * @memberof Utils
   */


  Utils.prototype.isBrowser = function () {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
  };

  return Utils;
}();

exports.default = Utils;
},{"easier-cookie":"../../InDiv/node_modules/easier-cookie/build/index.js"}],"../../InDiv/src/Lifecycle/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/Watcher/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils_1 = __importDefault(require("../Utils"));

var utils = new Utils_1.default();
/**
 * Watcher for InDiv
 *
 * @class Watcher
 */

var Watcher =
/** @class */
function () {
  /**
   * Creates an instance of Watcher.
   *
   * data: watched data
   * watcher: function for data change
   * render: InDiv render
   *
   * @param {*} data
   * @param {TFnWatcher} [watcher]
   * @param {TFnRender} [render]
   * @memberof Watcher
   */
  function Watcher(data, watcher, render) {
    this.data = data;
    this.watcher = watcher;
    this.render = render;
    this.watchData(this.data);
  }

  Watcher.prototype.watchData = function (data) {
    if (!data || _typeof(data) !== 'object') return;
    var vm = this;

    var _loop_1 = function _loop_1(key) {
      var val = data[key];
      vm.watchData(val);
      Object.defineProperty(data, key, {
        configurable: true,
        enumerable: true,
        get: function get() {
          return val;
        },
        set: function set(newVal) {
          if (utils.isEqual(newVal, val)) return; // for watcher method

          var oldData;
          if (vm.watcher) oldData = JSON.parse(JSON.stringify(vm.data));
          val = newVal;
          vm.watchData(val);
          if (vm.watcher) vm.watcher(oldData);
          if (vm.render) vm.render();
        }
      });
    };

    for (var key in data) {
      _loop_1(key);
    }
  };

  return Watcher;
}();

exports.default = Watcher;
},{"../Utils":"../../InDiv/src/Utils/index.ts"}],"../../InDiv/src/KeyWatcher/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils_1 = __importDefault(require("../Utils"));

var utils = new Utils_1.default();
/**
 * watch a key of an Object
 *
 * @class KeyWatcher
 */

var KeyWatcher =
/** @class */
function () {
  function KeyWatcher(data, key, watcher) {
    this.data = data;
    this.key = key;
    this.watcher = watcher;
    this.watchData(this.data, this.key);
  }

  KeyWatcher.prototype.watchData = function (data, key) {
    if (!data || _typeof(data) !== 'object' || !data[key]) return;
    var vm = this;
    var val = data[key];
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function get() {
        return val;
      },
      set: function set(newVal) {
        if (utils.isEqual(newVal, val)) return;
        var oldData;

        if (vm.watcher) {
          if (_typeof(val) === 'object') oldData = JSON.parse(JSON.stringify(val));
          if (_typeof(val) !== 'object' && typeof val !== 'function') oldData = val;
        }

        val = newVal;
        if (vm.watcher) vm.watcher(oldData);
      }
    });
  };

  return KeyWatcher;
}();

exports.default = KeyWatcher;
},{"../Utils":"../../InDiv/src/Utils/index.ts"}],"../../InDiv/src/VirtualDOM/parse.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Vnode
 *
 * @class Vnode
 */

var Vnode =
/** @class */
function () {
  /**
   * Creates an instance of Vnode.
   * @param {IVnode} info
   * @memberof Vnode
   */
  function Vnode(info) {
    this.tagName = info.tagName;
    this.node = info.node;
    this.parentNode = info.parentNode;
    this.attributes = info.attributes;
    this.childNodes = info.childNodes;
    this.nodeValue = info.nodeValue;
    this.type = info.type;
    this.value = info.value;
    this.repeatData = info.repeatData;
    this.eventTypes = info.eventTypes;
    this.key = info.key;
    this.checked = false;
  }

  return Vnode;
}();
/**
 * bind nodeType and return type
 *
 * @param {Node} node
 * @returns {string}
 */


function bindNodeType(node) {
  if (node.nodeType === 1) return 'element';
  if (node.nodeType === 3) return 'text';
  if (node.nodeType === 11) return 'document-fragment';
  return '';
}
/**
 * bind node attributes and return TAttributes
 *
 * @param {(DocumentFragment | Element)} node
 * @returns {TAttributes[]}
 */


function bindAttributes(node) {
  var nodeAttrs = node.attributes;
  var attributes = [];

  if (nodeAttrs) {
    Array.from(nodeAttrs).forEach(function (attr) {
      attributes.push({
        name: attr.name,
        value: attr.value
      });
    });
  }

  return attributes;
}
/**
 * parse node to VNode
 *
 * @param {(DocumentFragment | Element)} node
 * @returns {IVnode}
 */


function parseToVnode(node) {
  var childNodes = [];

  if (node.childNodes) {
    Array.from(node.childNodes).forEach(function (child) {
      childNodes.push(parseToVnode(child));
    });
  }

  return new Vnode({
    tagName: node.tagName,
    node: node,
    parentNode: node.parentNode,
    attributes: bindAttributes(node),
    childNodes: childNodes,
    nodeValue: node.nodeValue,
    type: bindNodeType(node),
    value: node.value,
    repeatData: node.repeatData ? node.repeatData : null,
    eventTypes: node.eventTypes ? node.eventTypes : null,
    key: node.indiv_repeat_key ? node.indiv_repeat_key : null
  });
}

exports.default = parseToVnode;
},{}],"../../InDiv/src/VirtualDOM/diff.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * diff childNodes for diff VNode
 *
 * type: 0 removeChild
 * type: 1 change Child index
 *
 * @param {IVnode} newVnode
 * @param {IVnode} oldVnode
 * @param {IPatchList[]} patchList
 */

function diffChildNodes(oldVnode, newVnode, patchList) {
  if (oldVnode.childNodes.length > 0) {
    oldVnode.childNodes.forEach(function (oChild, index) {
      if (oChild.checked) return;
      var sameCode = newVnode.childNodes.find(function (nChild) {
        return nChild.node.isEqualNode(oChild.node) && nChild.key === oChild.key && !nChild.checked || nChild.tagName === oChild.tagName && nChild.key === oChild.key && !nChild.checked;
      });

      if (sameCode) {
        var sameCodeIndex = newVnode.childNodes.findIndex(function (nChild) {
          return nChild === sameCode;
        });

        if (sameCodeIndex !== index) {
          patchList.push({
            type: 1,
            newIndex: sameCodeIndex,
            oldVnode: oChild.node,
            parentNode: oldVnode.node
          });
        }

        diffVnode(oChild, sameCode, patchList);
        sameCode.checked = true;
      } else {
        patchList.push({
          type: 0,
          node: oChild.node,
          parentNode: oldVnode.node
        });
      }

      oChild.checked = true;
    });
  }

  if (newVnode.childNodes.length > 0) {
    newVnode.childNodes.forEach(function (nChild, index) {
      if (nChild.checked) return;
      patchList.push({
        type: 1,
        newIndex: index,
        oldVnode: nChild.node,
        parentNode: oldVnode.node
      });
      nChild.checked = true;
    });
  }
}
/**
 * diff attributes for diff VNode
 *
 * type: 2 setAttribute
 * type: 3 removeAttribute
 *
 * @param {IVnode} oldVnode
 * @param {IVnode} newVnode
 * @param {IPatchList[]} patchList
 */


function diffAttributes(oldVnode, newVnode, patchList) {
  newVnode.attributes.forEach(function (attr) {
    var oldVnodeAttr = oldVnode.attributes.find(function (at) {
      return at.name === attr.name;
    });

    if (!oldVnodeAttr || oldVnodeAttr.value !== attr.value) {
      patchList.push({
        type: 2,
        node: oldVnode.node,
        newValue: attr,
        oldValue: oldVnodeAttr
      });
    }
  });
  oldVnode.attributes.forEach(function (attr) {
    var newVnodeAttr = newVnode.attributes.find(function (at) {
      return at.name === attr.name;
    });

    if (!newVnodeAttr) {
      patchList.push({
        type: 3,
        node: oldVnode.node,
        oldValue: attr
      });
    }
  });
}
/**
 * diff nodeValue for diff VNode
 *
 * type: 4 change text for node
 *
 * @param {IVnode} oldVnode
 * @param {IVnode} newVnode
 * @param {IPatchList[]} patchList
 * @returns {void}
 */


function diffNodeValue(oldVnode, newVnode, patchList) {
  if (oldVnode.nodeValue !== newVnode.nodeValue) {
    patchList.push({
      type: 4,
      node: oldVnode.node,
      newValue: newVnode.nodeValue,
      oldValue: oldVnode.nodeValue
    });
  }
}
/**
 * diff value of input, textarea, select for diff VNode
 *
 * type: 5 change value of input
 *
 * @param {IVnode} newVnode
 * @param {IVnode} oldVnode
 * @param {IPatchList[]} patchList
 * @returns {void}
 */


function diffInputValue(oldVnode, newVnode, patchList) {
  if (oldVnode.value !== newVnode.value) {
    patchList.push({
      type: 5,
      node: oldVnode.node,
      newValue: newVnode.value,
      oldValue: oldVnode.value
    });
  }
}
/**
 * diff repeatData of repeat node
 *
 * type: 6 change repeatData of node
 *
 * @param {IVnode} newVnode
 * @param {IVnode} oldVnode
 * @param {IPatchList[]} patchList
 * @returns {void}
 */


function diffRepeatData(oldVnode, newVnode, patchList) {
  patchList.push({
    type: 6,
    node: oldVnode.node,
    newValue: newVnode.repeatData
  });
}
/**
 * diff event of node
 *
 * type: 7 change event of node
 * type: 8 change eventTypes of node
 *
 * @param {IVnode} oldVnode
 * @param {IVnode} newVnode
 * @param {IPatchList[]} patchList
 */


function diffEventTypes(oldVnode, newVnode, patchList) {
  var oEventTypes = JSON.parse(oldVnode.eventTypes);
  var nEventTypes = JSON.parse(newVnode.eventTypes); // 全部更新为新的事件

  if (nEventTypes && nEventTypes.length > 0) {
    nEventTypes.forEach(function (neventType) {
      patchList.push({
        type: 7,
        node: oldVnode.node,
        eventType: neventType,
        newValue: newVnode.node["event" + neventType]
      });
    });
  }

  if (oEventTypes && oEventTypes.length > 0) {
    // 如果新事件不存在，则删除事件
    // 如果新事件找不到旧事件中的事件，则把旧事件的事件删除
    oEventTypes.forEach(function (oeventType) {
      if (!nEventTypes || nEventTypes.length <= 0) {
        patchList.push({
          type: 7,
          node: oldVnode.node,
          eventType: oeventType,
          newValue: null
        });
      }

      if (nEventTypes && nEventTypes.length > 0 && !nEventTypes.find(function (neventType) {
        return neventType === oeventType;
      })) {
        patchList.push({
          type: 7,
          node: oldVnode.node,
          eventType: oeventType,
          newValue: null
        });
      }
    });
  } // 最后要更新下 eventTypes，否则下次 oldVnode.eventTypes 将为最开始的eventTypes


  patchList.push({
    type: 8,
    node: oldVnode.node,
    newValue: newVnode.eventTypes
  });
}
/**
 * diff two Vnode
 *
 * @param {IVnode} oldVnode
 * @param {IVnode} newVnode
 * @param {IPatchList[]} patchList
 * @returns {void}
 */


function diffVnode(oldVnode, newVnode, patchList) {
  if (!patchList) throw new Error('patchList can not be null, diffVnode must need an Array');

  if (newVnode.type === 'document-fragment') {
    diffChildNodes(oldVnode, newVnode, patchList);
    return;
  }

  diffAttributes(oldVnode, newVnode, patchList);
  diffNodeValue(oldVnode, newVnode, patchList);
  if (oldVnode.tagName === 'INPUT' || oldVnode.tagName === 'TEXTAREA textarea' || oldVnode.tagName === 'INPUT') diffInputValue(oldVnode, newVnode, patchList);
  diffRepeatData(oldVnode, newVnode, patchList);
  diffEventTypes(oldVnode, newVnode, patchList);
  diffChildNodes(oldVnode, newVnode, patchList);
}

exports.default = diffVnode;
},{}],"../../InDiv/src/VirtualDOM/render.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * renderVnode 对比完render node
 *
 * REMOVETAG: 0, 移除dom: 0
 * REMOVETAG: 1, 移动位置: 1
 * ADDATTRIBUTES: 2, 增加属性: 2
 * REPLACEATTRIBUTES: 3, 移除属性: 3
 * TEXT: 4, 更改文字: 4
 * value: 5, 更改 input textarea select value 的值: 5
 * value: 6, 更改 node 的 repeatData: 6, render过来的的被复制的值
 * value: 7, 更改 node 的 event: 7, 修改事件
 * value: 8, 更改 node 的 eventTypes: 8, 修改node的eventTypes
 *
 * @param [] patchList
 */

function renderVnode(patchList) {
  patchList.sort(function (a, b) {
    if (a.type === b.type && a.newIndex && b.newIndex) return a.newIndex - b.newIndex;
    return a.type - b.type;
  });
  patchList.forEach(function (patch) {
    switch (patch.type) {
      case 0:
        patch.parentNode.removeChild(patch.node);
        break;

      case 1:
        if (!(Array.from(patch.parentNode.children).indexOf(patch.oldVnode) === patch.newIndex)) {
          if (patch.parentNode.contains(patch.oldVnode)) patch.parentNode.removeChild(patch.oldVnode);

          if (patch.parentNode.childNodes[patch.newIndex]) {
            patch.parentNode.insertBefore(patch.oldVnode, patch.parentNode.childNodes[patch.newIndex]);
          } else {
            patch.parentNode.appendChild(patch.oldVnode);
          }
        }

        break;

      case 2:
        patch.node.setAttribute(patch.newValue.name, patch.newValue.value);
        break;

      case 3:
        patch.node.removeAttribute(patch.oldValue.name);
        break;

      case 4:
        patch.node.nodeValue = patch.newValue;
        break;

      case 5:
        patch.node.value = patch.newValue;
        break;

      case 6:
        patch.node.repeatData = patch.newValue;
        break;

      case 7:
        patch.node["on" + patch.eventType] = patch.newValue;
        break;

      case 8:
        patch.node.eventTypes = patch.newValue;
        break;
    }
  });
}

exports.default = renderVnode;
},{}],"../../InDiv/src/VirtualDOM/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var parse_1 = require("./parse");

exports.parseToVnode = parse_1.default;

var diff_1 = require("./diff");

exports.diffVnode = diff_1.default;

var render_1 = require("./render");

exports.renderVnode = render_1.default;
},{"./parse":"../../InDiv/src/VirtualDOM/parse.ts","./diff":"../../InDiv/src/VirtualDOM/diff.ts","./render":"../../InDiv/src/VirtualDOM/render.ts"}],"../../InDiv/src/CompileUtils/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * compile util for nv-repeat DOM
 *
 * @export
 * @class CompileUtilForRepeat
 */

var CompileUtilForRepeat =
/** @class */
function () {
  /**
   * Creates an instance of CompileUtilForRepeat.
   *
   * @param {(Element | DocumentFragment)} [fragment]
   * @memberof CompileUtilForRepeat
   */
  function CompileUtilForRepeat(fragment) {
    this.$fragment = fragment;
  }
  /**
   * get value by key and anthor value
   *
   * @param {*} vm
   * @param {string} exp
   * @param {string} key
   * @returns {*}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype._getValueByValue = function (vm, exp, key) {
    var valueList = exp.replace('()', '').split('.');
    var value = vm;
    valueList.forEach(function (v, index) {
      if (v === key && index === 0) return;
      value = value[v];
    });
    return value;
  };
  /**
   * set value by key and anthor value
   *
   * @param {*} vm
   * @param {string} exp
   * @param {string} key
   * @param {*} setValue
   * @returns {*}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype._setValueByValue = function (vm, exp, key, setValue) {
    var valueList = exp.replace('()', '').split('.');
    var value = vm;
    var lastKey;
    valueList.forEach(function (v, index) {
      if (v === key && index === 0) return lastKey = v;
      if (index < valueList.length) lastKey = v;
      if (index < valueList.length - 1) value = value[v];
    });
    if (lastKey) value[lastKey] = setValue;
  };
  /**
   * get value of VM
   *
   * @param {*} vm
   * @param {string} exp
   * @returns {*}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype._getVMVal = function (vm, exp) {
    var valueList = exp.replace('()', '').split('.');
    var value = vm;
    valueList.forEach(function (v) {
      value = value[v];
    });
    return value;
  };
  /**
   * get value by repeat value
   *
   * @param {*} val
   * @param {string} exp
   * @param {string} key
   * @returns {*}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype._getVMRepeatVal = function (val, exp, key) {
    var value;
    var valueList = exp.replace('()', '').split('.');
    valueList.forEach(function (v, index) {
      if (v === key && index === 0) {
        value = val;
        return;
      }

      value = value[v];
    });
    return value;
  };
  /**
   * get Function for vm
   *
   * @param {*} vm
   * @param {string} exp
   * @returns {Function}
   * @memberof CompileUtil
   */


  CompileUtilForRepeat.prototype._getVMFunction = function (vm, exp) {
    var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
    var fn = vm;
    fnList.forEach(function (f) {
      fn = fn[f];
    });
    return fn;
  };
  /**
   * get Function arguments for vm
   *
   * @param {*} vm
   * @param {string} exp
   * @param {Element} node
   * @param {string} key
   * @param {*} val
   * @returns {any[]}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype._getVMFunctionArguments = function (vm, exp, node, key, val) {
    var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
    var argsList = [];
    var utilVm = this;
    args.forEach(function (arg) {
      if (arg === '') return false;
      if (arg === '$element') return argsList.push(node);
      if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
      if (/(state.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
      if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
      if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
      if (arg.indexOf(key) === 0 || arg.indexOf(key + ".") === 0) return argsList.push(utilVm._getVMRepeatVal(val, arg, key));

      if (node.repeatData) {
        // $index in this
        Object.keys(node.repeatData).forEach(function (data) {
          if (arg.indexOf(data) === 0 || arg.indexOf(data + ".") === 0) return argsList.push(utilVm._getValueByValue(node.repeatData[data], arg, data));
        });
      }
    });
    return argsList;
  };
  /**
   * bind handler for nv irective
   *
   * @param {Element} node
   * @param {string} [key]
   * @param {string} [dir]
   * @param {string} [exp]
   * @param {number} [index]
   * @param {*} [vm]
   * @param {*} [watchValue]
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.bind = function (node, key, dir, exp, index, vm, watchValue, val) {
    var repeatValue = node.repeatData[key];
    var value;

    if (/^(\@)/.test(exp)) {
      if (dir === 'model') throw new Error("directive: nv-model can't use " + exp + " as value"); // if @Function need function return value

      var fn = this._getVMFunction(vm, exp);

      var argsList = this._getVMFunctionArguments(vm, exp, node, key, val);

      value = fn.apply(vm, argsList);
    } else if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
      // repeat value
      value = this._getVMRepeatVal(repeatValue, exp, key);
    } else if (/(state.).*/.test(exp)) {
      // normal value
      value = this._getVMVal(vm, exp);
    } else {
      throw new Error("directive: nv-" + dir + " can't use recognize this value " + exp);
    }

    if (!node.hasChildNodes()) this.templateUpdater(node, repeatValue, key, vm);
    var updaterFn = this[dir + "Updater"];

    switch (dir) {
      case 'model':
        var watchData = void 0;

        if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
          watchData = watchValue;
        } else {
          watchData = this._getVMVal(vm, exp);
        }

        if (updaterFn) updaterFn.call(this, node, value, exp, key, index, watchData, vm);
        break;

      case 'text':
        if (updaterFn) updaterFn.call(this, node, value);
        break;

      case 'html':
        if (updaterFn) updaterFn.call(this, node, value);
        break;

      case 'if':
        if (updaterFn) updaterFn.call(this, node, value);
        break;

      case 'class':
        if (updaterFn) updaterFn.call(this, node, value);
        break;

      case 'key':
        if (updaterFn) updaterFn.call(this, node, value);
        break;

      default:
        this.commonUpdater.call(this, node, value, dir);
    }
  };
  /**
   * update text for {{}}
   *
   * @param {Element} node
   * @param {*} [val]
   * @param {string} [key]
   * @param {*} [vm]
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.templateUpdater = function (node, val, key, vm) {
    var text = node.textContent;
    var reg = /\{\{(.*)\}\}/g;

    if (reg.test(text)) {
      var textList = text.match(/(\{\{[^\{\}]+?\}\})/g);

      if (textList && textList.length > 0) {
        for (var i = 0; i < textList.length; i++) {
          var exp = textList[i].replace('{{', '').replace('}}', '');
          var value = null;

          if (/^(\@)/.test(exp)) {
            var fn = this._getVMFunction(vm, exp);

            var argsList = this._getVMFunctionArguments(vm, exp, node, key, val);

            value = fn.apply(vm, argsList);
          } else if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
            value = this._getVMRepeatVal(val, exp, key);
          } else if (/(state.).*/.test(exp)) {
            value = this._getVMVal(vm, exp);
          } else {
            throw new Error("directive: {{.*}} can't use recognize " + exp);
          }

          node.textContent = node.textContent.replace(textList[i], value);
        }
      }
    }
  };
  /**
   * update value of input for nv-model
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} exp
   * @param {string} key
   * @param {number} index
   * @param {*} watchData
   * @param {*} vm
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.modelUpdater = function (node, value, exp, key, index, watchData, vm) {
    node.value = typeof value === 'undefined' ? '' : value;
    var utilVm = this;

    var func = function func(event) {
      event.preventDefault();

      if (/(state.).*/.test(exp)) {
        var val = exp.replace(/(state.)/, '');
        if (event.target.value === watchData) return;
        vm.state[val] = event.target.value;
      } else if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
        if (_typeof(watchData[index]) !== 'object') watchData[index] = event.target.value;

        if (_typeof(watchData[index]) === 'object') {
          var vals = utilVm._getValueByValue(watchData[index], exp, key);

          vals = event.target.value;

          utilVm._setValueByValue(watchData[index], exp, key, vals);
        }
      } else {
        throw new Error('directive: nv-model can\'t use recognize this value');
      }
    };

    node.oninput = func;
    node.eventinput = func;

    if (node.eventTypes) {
      var eventlist = JSON.parse(node.eventTypes);
      eventlist.push('input');
      node.eventTypes = JSON.stringify(eventlist);
    }

    if (!node.eventTypes) node.eventTypes = JSON.stringify(['input']);
  };
  /**
   * update text for nv-text
   *
   * @param {Element} node
   * @param {*} value
   * @returns {void}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.textUpdater = function (node, value) {
    if (node.tagName.toLocaleLowerCase() === 'input') return node.value = value;
    node.textContent = typeof value === 'undefined' ? '' : value;
  };
  /**
   * update html for nv-html
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.htmlUpdater = function (node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value;
  };
  /**
   * remove or show DOM for nv-if
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.ifUpdater = function (node, value) {
    if (!value && this.$fragment.contains(node)) this.$fragment.removeChild(node);
  };
  /**
   * update class for nv-class
   *
   * @param {Element} node
   * @param {*} value
   * @returns {void}
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.classUpdater = function (node, value) {
    if (!value) return;
    var className = node.className;
    className = className.replace(/\s$/, '');
    var space = className && String(value) ? ' ' : '';
    node.className = className + space + value;
  };
  /**
   * update value of repeat node for nv-key
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.keyUpdater = function (node, value) {
    node.indiv_repeat_key = value;
  };
  /**
   * commonUpdater for nv directive except repeat model text html if class
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} dir
   * @memberof CompileUtil
   */


  CompileUtilForRepeat.prototype.commonUpdater = function (node, value, dir) {
    if (value) node[dir] = value;
    if (!value && node[dir]) node[dir] = null;
  };
  /**
   * compile event and build eventType in DOM
   *
   * @param {Element} node
   * @param {*} vm
   * @param {string} exp
   * @param {string} eventName
   * @param {string} key
   * @param {*} val
   * @memberof CompileUtilForRepeat
   */


  CompileUtilForRepeat.prototype.eventHandler = function (node, vm, exp, eventName, key, val) {
    var eventType = eventName.split(':')[1];

    var fn = this._getVMFunction(vm, exp);

    var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/ /g, '').split(',');
    var utilVm = this;

    var func = function func(event) {
      var _this = this;

      var argsList = [];
      args.forEach(function (arg) {
        if (arg === '') return false;
        if (arg === '$event') return argsList.push(event);
        if (arg === '$element') return argsList.push(node);
        if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
        if (/(state.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
        if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
        if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
        if (arg.indexOf(key) === 0 || arg.indexOf(key + ".") === 0) return argsList.push(utilVm._getVMRepeatVal(val, arg, key));

        if (_this.repeatData) {
          // $index in this
          Object.keys(_this.repeatData).forEach(function (data) {
            if (arg.indexOf(data) === 0 || arg.indexOf(data + ".") === 0) return argsList.push(utilVm._getValueByValue(_this.repeatData[data], arg, data));
          });
        }
      });
      fn.apply(vm, argsList);
    };

    if (eventType && fn) {
      node["on" + eventType] = func;
      node["event" + eventType] = func;

      if (node.eventTypes) {
        var eventlist = JSON.parse(node.eventTypes);
        eventlist.push(eventType);
        node.eventTypes = JSON.stringify(eventlist);
      }

      if (!node.eventTypes) node.eventTypes = JSON.stringify([eventType]);
    }
  };

  return CompileUtilForRepeat;
}();

exports.CompileUtilForRepeat = CompileUtilForRepeat;
/**
 * compile util for Compiler
 *
 * @export
 * @class CompileUtil
 */

var CompileUtil =
/** @class */
function () {
  /**
   * Creates an instance of CompileUtil.
   *
   * @param {(Element | DocumentFragment)} [fragment]
   *  @memberof CompileUtil
   */
  function CompileUtil(fragment) {
    this.$fragment = fragment;
  }
  /**
   * get value by key and anthor value
   *
   * @param {*} vm
   * @param {string} exp
   * @param {string} key
   * @returns {*}
   * @memberof CompileUtil
   */


  CompileUtil.prototype._getValueByValue = function (vm, exp, key) {
    var valueList = exp.replace('()', '').split('.');
    var value = vm;
    valueList.forEach(function (v, index) {
      if (v === key && index === 0) return;
      value = value[v];
    });
    return value;
  };
  /**
   * get value of VM
   *
   * @param {*} vm
   * @param {string} exp
   * @returns {*}
   * @memberof CompileUtil
   */


  CompileUtil.prototype._getVMVal = function (vm, exp) {
    var valueList = exp.replace('()', '').split('.');
    var value = vm;
    valueList.forEach(function (v) {
      value = value[v];
    });
    return value;
  };
  /**
   * get value by repeat value
   *
   * @param {*} vm
   * @param {string} exp
   * @returns {void}
   * @memberof CompileUtil
   */


  CompileUtil.prototype._getVMRepeatVal = function (vm, exp) {
    var vlList = exp.split(' ');

    var value = this._getVMVal(vm, vlList[3]);

    return value;
  };
  /**
   * get Function for vm
   *
   * @param {*} vm
   * @param {string} exp
   * @returns {Function}
   * @memberof CompileUtil
   */


  CompileUtil.prototype._getVMFunction = function (vm, exp) {
    var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
    var fn = vm;
    fnList.forEach(function (f) {
      fn = fn[f];
    });
    return fn;
  };
  /**
   * get Function arguments for vm
   *
   * @param {*} vm
   * @param {string} exp
   * @param {Element} node
   * @returns {any[]}
   * @memberof CompileUtil
   */


  CompileUtil.prototype._getVMFunctionArguments = function (vm, exp, node) {
    var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
    var argsList = [];
    args.forEach(function (arg) {
      if (arg === '') return false;
      if (arg === '$element') return argsList.push(node);
      if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
      if (/(state.).*/g.test(arg)) return argsList.push(new CompileUtil()._getVMVal(vm, arg));
      if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
      if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
    });
    return argsList;
  };
  /**
   * bind handler for nv irective
   *
   * if node is repeat node and it will break compile and into CompileUtilForRepeat
   *
   * @param {Element} node
   * @param {*} vm
   * @param {string} exp
   * @param {string} dir
   * @memberof CompileUtil
   */


  CompileUtil.prototype.bind = function (node, vm, exp, dir) {
    var updaterFn = this[dir + "Updater"];
    var isRepeatNode = this.isRepeatNode(node);

    if (isRepeatNode) {
      // compile repeatNode's attributes
      switch (dir) {
        case 'repeat':
          if (updaterFn) updaterFn.call(this, node, this._getVMRepeatVal(vm, exp), exp, vm);
          break;
      }
    } else {
      var value = null; // for @Function(arg)

      if (/^(\@)/.test(exp)) {
        if (dir === 'model') throw new Error("directive: nv-model can't use " + exp + " as value"); // if @Function need function return value

        var fn = this._getVMFunction(vm, exp);

        var argsList = this._getVMFunctionArguments(vm, exp, node);

        value = fn.apply(vm, argsList);
      } else if (/(state.).*/.test(exp)) {
        // normal value
        value = this._getVMVal(vm, exp);
      } else {
        throw new Error("directive: nv-" + dir + " can't use recognize this value " + exp);
      } // compile unrepeatNode's attributes


      switch (dir) {
        case 'model':
          if (updaterFn) updaterFn.call(this, node, value, exp, vm);
          break;

        case 'text':
          if (updaterFn) updaterFn.call(this, node, value);
          break;

        case 'html':
          if (updaterFn) updaterFn.call(this, node, value);
          break;

        case 'if':
          if (updaterFn) updaterFn.call(this, node, value);
          break;

        case 'class':
          if (updaterFn) updaterFn.call(this, node, value);
          break;

        case 'key':
          if (updaterFn) updaterFn.call(this, node, value);
          break;

        default:
          this.commonUpdater.call(this, node, value, dir);
      }

      node.removeAttribute("nv-" + dir);
    }
  };
  /**
   * update text for {{}}
   *
   * @param {*} node
   * @param {*} vm
   * @param {string} exp
   * @memberof CompileUtil
   */


  CompileUtil.prototype.templateUpdater = function (node, vm, exp) {
    var _exp = exp.replace('{{', '').replace('}}', '');

    var value = null;

    if (/^(\@)/.test(_exp)) {
      var fn = this._getVMFunction(vm, _exp);

      var argsList = this._getVMFunctionArguments(vm, _exp, node);

      value = fn.apply(vm, argsList);
    } else if (/(state.).*/.test(exp)) {
      value = this._getVMVal(vm, _exp);
    } else {
      throw new Error('directive: {{.*}} can\'t use recognize this value');
    }

    node.textContent = node.textContent.replace(exp, value);
  };
  /**
   * update value of input for nv-model
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} exp
   * @param {*} vm
   * @memberof CompileUtil
   */


  CompileUtil.prototype.modelUpdater = function (node, value, exp, vm) {
    node.value = typeof value === 'undefined' ? '' : value;
    var val = exp.replace(/(state.)/, '');

    var func = function func(event) {
      event.preventDefault();
      if (/(state.).*/.test(exp)) vm.state[val] = event.target.value;
    };

    node.oninput = func;
    node.eventinput = func;

    if (node.eventTypes) {
      var eventlist = JSON.parse(node.eventTypes);
      eventlist.push('input');
      node.eventTypes = JSON.stringify(eventlist);
    }

    if (!node.eventTypes) node.eventTypes = JSON.stringify(['input']);
  };
  /**
   * update text for nv-text
   *
   * @param {Element} node
   * @param {*} value
   * @returns {void}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.textUpdater = function (node, value) {
    if (node.tagName.toLocaleLowerCase() === 'input') return node.value = value;
    node.textContent = typeof value === 'undefined' ? '' : value;
  };
  /**
   * update html for nv-html
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtil
   */


  CompileUtil.prototype.htmlUpdater = function (node, value) {
    node.innerHTML = typeof value === 'undefined' ? '' : value;
  };
  /**
   * remove or show DOM for nv-if
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtil
   */


  CompileUtil.prototype.ifUpdater = function (node, value) {
    if (!value && this.$fragment.contains(node)) this.$fragment.removeChild(node);
  };
  /**
   * update class for nv-class
   *
   * @param {Element} node
   * @param {*} value
   * @returns {void}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.classUpdater = function (node, value) {
    if (!value) return;
    var className = node.className;
    className = className.replace(/\s$/, '');
    var space = className && String(value) ? ' ' : '';
    node.className = className + space + value;
  };
  /**
   * update value of repeat node for nv-key
   *
   * @param {Element} node
   * @param {*} value
   * @memberof CompileUtilForRepeat
   */


  CompileUtil.prototype.keyUpdater = function (node, value) {
    node.indiv_repeat_key = value;
  };
  /**
   * commonUpdater for nv directive except repeat model text html if class
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} dir
   * @memberof CompileUtil
   */


  CompileUtil.prototype.commonUpdater = function (node, value, dir) {
    if (value) node[dir] = value;
    if (!value && node[dir]) node[dir] = null;
  };
  /**
   * update repeat DOM for nv-repeat
   *
   * if it has child and it will into repeatChildrenUpdater
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} expFather
   * @param {*} vm
   * @memberof CompileUtil
   */


  CompileUtil.prototype.repeatUpdater = function (node, value, expFather, vm) {
    var _this = this;

    if (!value) return;
    if (value && !(value instanceof Array)) throw new Error('compile error: nv-repeat need an Array!');
    var key = expFather.split(' ')[1];
    value.forEach(function (val, index) {
      var repeatData = {};
      repeatData[key] = val;
      repeatData.$index = index;

      var newElement = _this.cloneNode(node, repeatData);

      var nodeAttrs = newElement.attributes;
      var text = newElement.textContent;
      var reg = /\{\{(.*)\}\}/g;

      _this.$fragment.insertBefore(newElement, node);

      newElement.removeAttribute('nv-repeat');
      if (_this.isTextNode(newElement) && reg.test(text)) new CompileUtilForRepeat(_this.$fragment).templateUpdater(newElement, val, key, vm);

      if (nodeAttrs) {
        Array.from(nodeAttrs).forEach(function (attr) {
          var attrName = attr.name;

          if (_this.isDirective(attrName) && attrName !== 'nv-repeat') {
            var dir = attrName.substring(3);
            var exp = attr.value;

            if (_this.isEventDirective(dir)) {
              new CompileUtilForRepeat(_this.$fragment).eventHandler(newElement, vm, exp, dir, key, val);
            } else {
              new CompileUtilForRepeat(_this.$fragment).bind(newElement, key, dir, exp, index, vm, value, val);
            }

            newElement.removeAttribute(attrName);
          }
        });
      } // first insert node before repeatnode, and remove repeatnode in Compile


      if (newElement.hasChildNodes() && _this.$fragment.contains(newElement)) _this.repeatChildrenUpdater(newElement, val, expFather, index, vm, value);
    });
  };
  /**
   * update child of nv-repeat DOM
   *
   * if child is an nv-repeat DOM, it will into CompileUtil repeatUpdater
   *
   * @param {Element} node
   * @param {*} value
   * @param {string} expFather
   * @param {number} index
   * @param {*} vm
   * @param {*} watchValue
   * @memberof CompileUtil
   */


  CompileUtil.prototype.repeatChildrenUpdater = function (node, value, expFather, index, vm, watchValue) {
    var _this = this;

    var key = expFather.split(' ')[1];
    Array.from(node.childNodes).forEach(function (child) {
      child.repeatData = node.repeatData || {};
      child.repeatData[key] = value;
      child.repeatData.$index = index;
      if (_this.isRepeatProp(child)) child.setAttribute("_prop-" + key, JSON.stringify(value));
      var nodeAttrs = child.attributes;
      var text = child.textContent;
      var reg = /\{\{(.*)\}\}/g;
      if (_this.isTextNode(child) && reg.test(text)) new CompileUtilForRepeat(node).templateUpdater(child, value, key, vm);

      if (nodeAttrs) {
        Array.from(nodeAttrs).forEach(function (attr) {
          var attrName = attr.name;
          var exp = attr.value;
          var dir = attrName.substring(3);

          if (_this.isDirective(attrName) && attrName !== 'nv-repeat' && new RegExp("(^" + key + ")|(^state)|(^@)").test(exp)) {
            if (_this.isEventDirective(dir)) {
              new CompileUtilForRepeat(node).eventHandler(child, vm, exp, dir, key, value);
            } else {
              new CompileUtilForRepeat(node).bind(child, key, dir, exp, index, vm, watchValue, value);
            }

            child.removeAttribute(attrName);
          }
        });
      }

      if (child.hasChildNodes() && !_this.isRepeatNode(child) && node.contains(child)) _this.repeatChildrenUpdater(child, value, expFather, index, vm, watchValue);
      var newAttrs = child.attributes;

      if (newAttrs && node.contains(child)) {
        var restRepeat = Array.from(newAttrs).find(function (attr) {
          return _this.isDirective(attr.name) && attr.name === 'nv-repeat';
        });

        if (restRepeat) {
          var newWatchData = restRepeat.value.split(' ')[3]; // first compile and then remove repeatNode

          if (/^(state\.)/.test(newWatchData)) {
            new CompileUtil(node).bind(child, vm, restRepeat.value, restRepeat.name.substring(3));
            if (node.contains(child)) node.removeChild(child);
          }

          if (new RegExp("(^" + key + ")").test(newWatchData)) {
            new CompileUtil(node).repeatUpdater(child, _this._getValueByValue(value, newWatchData, key), restRepeat.value, vm);
            if (node.contains(child)) node.removeChild(child);
          }

          node.removeAttribute('nv-repeat');
        }
      }
    });
  };
  /**
   * compile event and build eventType in DOM
   *
   * @param {Element} node
   * @param {*} vm
   * @param {string} exp
   * @param {string} eventName
   * @memberof Compile
   */


  CompileUtil.prototype.eventHandler = function (node, vm, exp, eventName) {
    var eventType = eventName.split(':')[1];

    var fn = this._getVMFunction(vm, exp);

    var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');

    var func = function func(event) {
      var argsList = [];
      args.forEach(function (arg) {
        if (arg === '') return false;
        if (arg === '$event') return argsList.push(event);
        if (arg === '$element') return argsList.push(node);
        if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
        if (/(state.).*/g.test(arg)) return argsList.push(new CompileUtil()._getVMVal(vm, arg));
        if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
        if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
      });
      fn.apply(vm, argsList);
    };

    if (eventType && fn) {
      node["on" + eventType] = func;
      node["event" + eventType] = func;

      if (node.eventTypes) {
        var eventlist = JSON.parse(node.eventTypes);
        eventlist.push(eventType);
        node.eventTypes = JSON.stringify(eventlist);
      }

      if (!node.eventTypes) node.eventTypes = JSON.stringify([eventType]);
    }
  };
  /**
   * judge attribute is nv directive or not
   *
   * @param {string} attr
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isDirective = function (attr) {
    return attr.indexOf('nv-') === 0;
  };
  /**
   * judge attribute is nv event directive or not
   *
   * @param {string} event
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isEventDirective = function (event) {
    return event.indexOf('on') === 0;
  };
  /**
   * judge DOM is a element node or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isElementNode = function (node) {
    return node.nodeType === 1;
  };
  /**
   * judge DOM is nv-repeat DOM or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isRepeatNode = function (node) {
    var nodeAttrs = node.attributes;
    var result = false;

    if (nodeAttrs) {
      Array.from(nodeAttrs).forEach(function (attr) {
        var attrName = attr.name;
        if (attrName === 'nv-repeat') result = true;
      });
    }

    return result;
  };
  /**
   * judge DOM is a Component DOM in a repeat DOM or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isRepeatProp = function (node) {
    var nodeAttrs = node.attributes;
    var result = false;
    if (nodeAttrs) return !!Array.from(nodeAttrs).find(function (attr) {
      return /^\{(.+)\}$/.test(attr.value);
    });
    return result;
  };
  /**
   * judge DOM is text node or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.isTextNode = function (node) {
    return node.nodeType === 3;
  };
  /**
   * clone Node and clone it event
   *
   * event by attribute in DOM: eventTypes
   * repeat data by attribute in DOM: repeatData
   *
   * @param {Element} node
   * @param {*} [repeatData]
   * @returns {Node}
   * @memberof CompileUtil
   */


  CompileUtil.prototype.cloneNode = function (node, repeatData) {
    var newElement = node.cloneNode(true);

    if (node.eventTypes) {
      JSON.parse(node.eventTypes).forEach(function (eventType) {
        newElement["on" + eventType] = node["event" + eventType];
        newElement["event" + eventType] = node["event" + eventType];
      });
      newElement.eventTypes = node.eventTypes;
    }

    if (repeatData) newElement.repeatData = repeatData;
    return newElement;
  };

  return CompileUtil;
}();

exports.CompileUtil = CompileUtil;
},{}],"../../InDiv/src/Compile/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var VirtualDOM_1 = require("../VirtualDOM");

var Utils_1 = __importDefault(require("../Utils"));

var CompileUtils_1 = require("../CompileUtils");

var utils = new Utils_1.default();
/**
 * main compiler
 *
 * @class Compile
 */

var Compile =
/** @class */
function () {
  /**
   * Creates an instance of Compile.
   * @param {(string | Element)} el
   * @param {*} vm
   * @param {Element} [routerRenderDom]
   * @memberof Compile
   */
  function Compile(el, vm, routerRenderDom) {
    this.$vm = vm;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);

    if (this.$el) {
      this.$fragment = this.node2Fragment();
      this.init();

      if (routerRenderDom) {
        // replace routeDom
        var newRouterRenderDom = this.$fragment.querySelectorAll(this.$vm.$vm.$routeDOMKey)[0];
        newRouterRenderDom.parentNode.replaceChild(routerRenderDom, newRouterRenderDom);
      }

      var oldVnode = VirtualDOM_1.parseToVnode(this.$el);
      var newVnode = VirtualDOM_1.parseToVnode(this.$fragment);
      var patchList = [];
      VirtualDOM_1.diffVnode(oldVnode, newVnode, patchList);
      VirtualDOM_1.renderVnode(patchList);
      this.$fragment = null;
      oldVnode = null;
      newVnode = null;
      patchList = null;
    }
  }
  /**
   * init compile
   *
   * @memberof Compile
   */


  Compile.prototype.init = function () {
    this.compileElement(this.$fragment);
  };
  /**
   * compile element
   *
   * @param {DocumentFragment} fragment
   * @memberof Compile
   */


  Compile.prototype.compileElement = function (fragment) {
    var elementCreated = document.createElement('div');
    elementCreated.innerHTML = utils.formatInnerHTML(this.$vm.$template);
    var childNodes = elementCreated.childNodes;
    this.recursiveDOM(childNodes, fragment);
  };
  /**
   * recursive DOM for New State
   *
   * @param {(NodeListOf<Node & ChildNode>)} childNodes
   * @param {(DocumentFragment | Element)} fragment
   * @memberof Compile
   */


  Compile.prototype.recursiveDOM = function (childNodes, fragment) {
    var _this = this;

    Array.from(childNodes).forEach(function (node) {
      if (node.hasChildNodes() && !_this.isRepeatNode(node)) _this.recursiveDOM(node.childNodes, node);
      fragment.appendChild(node);
      var text = node.textContent;
      var reg = /\{\{(.*)\}\}/g;
      if (_this.isElementNode(node)) _this.compile(node, fragment);

      if (_this.isTextNode(node) && reg.test(text)) {
        var textList = text.match(/(\{\{[^\{\}]+?\}\})/g);

        if (textList && textList.length > 0) {
          for (var i = 0; i < textList.length; i++) {
            _this.compileText(node, textList[i]);
          }
        }
      } // after compile repeatNode, remove repeatNode


      if (_this.isRepeatNode(node) && fragment.contains(node)) fragment.removeChild(node);
    });
  };
  /**
   * compile string to DOM
   *
   * @param {Element} node
   * @param {(DocumentFragment | Element)} fragment
   * @memberof Compile
   */


  Compile.prototype.compile = function (node, fragment) {
    var _this = this;

    var nodeAttrs = node.attributes;

    if (nodeAttrs) {
      Array.from(nodeAttrs).forEach(function (attr) {
        var attrName = attr.name;

        if (_this.isDirective(attrName)) {
          var dir = attrName.substring(3);
          var exp = attr.value;
          var compileUtil = new CompileUtils_1.CompileUtil(fragment);

          if (_this.isEventDirective(dir)) {
            compileUtil.eventHandler(node, _this.$vm, exp, dir);
            node.removeAttribute(attrName);
          } else {
            compileUtil.bind(node, _this.$vm, exp, dir);
          }
        }
      });
    }
  };
  /**
   * create document fragment
   *
   * @returns {DocumentFragment}
   * @memberof Compile
   */


  Compile.prototype.node2Fragment = function () {
    return document.createDocumentFragment();
  };
  /**
   * compile text and use CompileUtil templateUpdater
   *
   * @param {Element} node
   * @param {string} exp
   * @memberof Compile
   */


  Compile.prototype.compileText = function (node, exp) {
    new CompileUtils_1.CompileUtil(this.$fragment).templateUpdater(node, this.$vm, exp);
  };
  /**
   * judge attribute is nv directive or not
   *
   * @param {string} attr
   * @returns {boolean}
   * @memberof Compile
   */


  Compile.prototype.isDirective = function (attr) {
    return attr.indexOf('nv-') === 0;
  };
  /**
   * judge attribute is nv event directive or not
   *
   * @param {string} eventName
   * @returns {boolean}
   * @memberof Compile
   */


  Compile.prototype.isEventDirective = function (eventName) {
    return eventName.indexOf('on') === 0;
  };
  /**
   * judge DOM is a element node or not
   *
   * @param {(Element | string)} node
   * @returns {boolean}
   * @memberof Compile
   */


  Compile.prototype.isElementNode = function (node) {
    if (typeof node === 'string') return false;
    return node.nodeType === 1;
  };
  /**
   * judge DOM is nv-repeat dom or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof Compile
   */


  Compile.prototype.isRepeatNode = function (node) {
    var nodeAttrs = node.attributes;
    var result = false;

    if (nodeAttrs) {
      Array.from(nodeAttrs).forEach(function (attr) {
        var attrName = attr.name;
        if (attrName === 'nv-repeat') result = true;
      });
    }

    return result;
  };
  /**
   * judge DOM is text node or not
   *
   * @param {Element} node
   * @returns {boolean}
   * @memberof Compile
   */


  Compile.prototype.isTextNode = function (node) {
    return node.nodeType === 3;
  };

  return Compile;
}();

exports.default = Compile;
},{"../VirtualDOM":"../../InDiv/src/VirtualDOM/index.ts","../Utils":"../../InDiv/src/Utils/index.ts","../CompileUtils":"../../InDiv/src/CompileUtils/index.ts"}],"../../InDiv/src/DI/injectable.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Decorator @Injectable
 *
 * to decorate an InDiv Service
 *
 * @param {TInjectableOptions} [options]
 * @returns {(_constructor: Function) => void}
 */

function Injectable(options) {
  return function (_constructor) {
    _constructor.isSingletonMode = true;
    if (options) _constructor.isSingletonMode = options.isSingletonMode;
  };
}

exports.default = Injectable;
},{}],"../node_modules/_process@0.11.10@process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../InDiv/node_modules/reflect-metadata/Reflect.js":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;

(function (Reflect) {
  // Metadata Proposal
  // https://rbuckton.github.io/reflect-metadata/
  (function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
    var exporter = makeExporter(Reflect);

    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect;
    } else {
      exporter = makeExporter(root.Reflect, exporter);
    }

    factory(exporter);

    function makeExporter(target, previous) {
      return function (key, value) {
        if (typeof target[key] !== "function") {
          Object.defineProperty(target, key, {
            configurable: true,
            writable: true,
            value: value
          });
        }

        if (previous) previous(key, value);
      };
    }
  })(function (exporter) {
    var hasOwn = Object.prototype.hasOwnProperty; // feature test for Symbol support

    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support

    var supportsProto = {
      __proto__: []
    } instanceof Array; // feature test for __proto__ support

    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: supportsCreate ? function () {
        return MakeDictionary(Object.create(null));
      } : supportsProto ? function () {
        return MakeDictionary({
          __proto__: null
        });
      } : function () {
        return MakeDictionary({});
      },
      has: downLevel ? function (map, key) {
        return hasOwn.call(map, key);
      } : function (map, key) {
        return key in map;
      },
      get: downLevel ? function (map, key) {
        return hasOwn.call(map, key) ? map[key] : undefined;
      } : function (map, key) {
        return map[key];
      }
    }; // Load global or shim versions of Map, Set, and WeakMap

    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && undefined === "true";

    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();

    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();

    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill(); // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots


    var Metadata = new _WeakMap();
    /**
     * Applies a set of decorators to a property of a target object.
     * @param decorators An array of decorators.
     * @param target The target object.
     * @param propertyKey (Optional) The property key to decorate.
     * @param attributes (Optional) The property descriptor for the target key.
     * @remarks Decorators are applied in reverse order.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     Example = Reflect.decorate(decoratorsArray, Example);
     *
     *     // property (on constructor)
     *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
     *
     *     // property (on prototype)
     *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
     *
     *     // method (on constructor)
     *     Object.defineProperty(Example, "staticMethod",
     *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
     *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
     *
     *     // method (on prototype)
     *     Object.defineProperty(Example.prototype, "method",
     *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
     *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
     *
     */

    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsObject(target)) throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
        if (IsNull(attributes)) attributes = undefined;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsConstructor(target)) throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }

    exporter("decorate", decorate); // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata

    /**
     * A default metadata decorator factory that can be used on a class, class member, or parameter.
     * @param metadataKey The key for the metadata entry.
     * @param metadataValue The value for the metadata entry.
     * @returns A decorator function.
     * @remarks
     * If `metadataKey` is already defined for the target and target key, the
     * metadataValue for that key will be overwritten.
     * @example
     *
     *     // constructor
     *     @Reflect.metadata(key, value)
     *     class Example {
     *     }
     *
     *     // property (on constructor, TypeScript only)
     *     class Example {
     *         @Reflect.metadata(key, value)
     *         static staticProperty;
     *     }
     *
     *     // property (on prototype, TypeScript only)
     *     class Example {
     *         @Reflect.metadata(key, value)
     *         property;
     *     }
     *
     *     // method (on constructor)
     *     class Example {
     *         @Reflect.metadata(key, value)
     *         static staticMethod() { }
     *     }
     *
     *     // method (on prototype)
     *     class Example {
     *         @Reflect.metadata(key, value)
     *         method() { }
     *     }
     *
     */

    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }

      return decorator;
    }

    exporter("metadata", metadata);
    /**
     * Define a unique metadata entry on the target.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param metadataValue A value that contains attached metadata.
     * @param target The target object on which to define metadata.
     * @param propertyKey (Optional) The property key for the target.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     Reflect.defineMetadata("custom:annotation", options, Example);
     *
     *     // property (on constructor)
     *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
     *
     *     // property (on prototype)
     *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
     *
     *     // method (on constructor)
     *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
     *
     *     // method (on prototype)
     *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
     *
     *     // decorator factory as metadata-producing annotation.
     *     function MyAnnotation(options): Decorator {
     *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
     *     }
     *
     */

    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }

    exporter("defineMetadata", defineMetadata);
    /**
     * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.hasMetadata("custom:annotation", Example);
     *
     *     // property (on constructor)
     *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
     *
     */

    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }

    exporter("hasMetadata", hasMetadata);
    /**
     * Gets a value indicating whether the target object has the provided metadata key defined.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
     *
     *     // property (on constructor)
     *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
     *
     */

    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }

    exporter("hasOwnMetadata", hasOwnMetadata);
    /**
     * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.getMetadata("custom:annotation", Example);
     *
     *     // property (on constructor)
     *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
     *
     */

    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }

    exporter("getMetadata", getMetadata);
    /**
     * Gets the metadata value for the provided metadata key on the target object.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.getOwnMetadata("custom:annotation", Example);
     *
     *     // property (on constructor)
     *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
     *
     */

    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }

    exporter("getOwnMetadata", getOwnMetadata);
    /**
     * Gets the metadata keys defined on the target object or its prototype chain.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns An array of unique metadata keys.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.getMetadataKeys(Example);
     *
     *     // property (on constructor)
     *     result = Reflect.getMetadataKeys(Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.getMetadataKeys(Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.getMetadataKeys(Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.getMetadataKeys(Example.prototype, "method");
     *
     */

    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }

    exporter("getMetadataKeys", getMetadataKeys);
    /**
     * Gets the unique metadata keys defined on the target object.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns An array of unique metadata keys.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.getOwnMetadataKeys(Example);
     *
     *     // property (on constructor)
     *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
     *
     */

    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }

    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    /**
     * Deletes the metadata entry from the target object with the provided key.
     * @param metadataKey A key used to store and retrieve metadata.
     * @param target The target object on which the metadata is defined.
     * @param propertyKey (Optional) The property key for the target.
     * @returns `true` if the metadata entry was found and deleted; otherwise, false.
     * @example
     *
     *     class Example {
     *         // property declarations are not part of ES6, though they are valid in TypeScript:
     *         // static staticProperty;
     *         // property;
     *
     *         constructor(p) { }
     *         static staticMethod(p) { }
     *         method(p) { }
     *     }
     *
     *     // constructor
     *     result = Reflect.deleteMetadata("custom:annotation", Example);
     *
     *     // property (on constructor)
     *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
     *
     *     // property (on prototype)
     *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
     *
     *     // method (on constructor)
     *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
     *
     *     // method (on prototype)
     *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
     *
     */

    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      var metadataMap = GetOrCreateMetadataMap(target, propertyKey,
      /*Create*/
      false);
      if (IsUndefined(metadataMap)) return false;
      if (!metadataMap.delete(metadataKey)) return false;
      if (metadataMap.size > 0) return true;
      var targetMetadata = Metadata.get(target);
      targetMetadata.delete(propertyKey);
      if (targetMetadata.size > 0) return true;
      Metadata.delete(target);
      return true;
    }

    exporter("deleteMetadata", deleteMetadata);

    function DecorateConstructor(decorators, target) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);

        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated)) throw new TypeError();
          target = decorated;
        }
      }

      return target;
    }

    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);

        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated)) throw new TypeError();
          descriptor = decorated;
        }
      }

      return descriptor;
    }

    function GetOrCreateMetadataMap(O, P, Create) {
      var targetMetadata = Metadata.get(O);

      if (IsUndefined(targetMetadata)) {
        if (!Create) return undefined;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
      }

      var metadataMap = targetMetadata.get(P);

      if (IsUndefined(metadataMap)) {
        if (!Create) return undefined;
        metadataMap = new _Map();
        targetMetadata.set(P, metadataMap);
      }

      return metadataMap;
    } // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata


    function OrdinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
      return false;
    } // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata


    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P,
      /*Create*/
      false);
      if (IsUndefined(metadataMap)) return false;
      return ToBoolean(metadataMap.has(MetadataKey));
    } // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata


    function OrdinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
      return undefined;
    } // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata


    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P,
      /*Create*/
      false);
      if (IsUndefined(metadataMap)) return undefined;
      return metadataMap.get(MetadataKey);
    } // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata


    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P,
      /*Create*/
      true);
      metadataMap.set(MetadataKey, MetadataValue);
    } // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys


    function OrdinaryMetadataKeys(O, P) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null) return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P);
      if (parentKeys.length <= 0) return ownKeys;
      if (ownKeys.length <= 0) return parentKeys;
      var set = new _Set();
      var keys = [];

      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);

        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }

      for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);

        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }

      return keys;
    } // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys


    function OrdinaryOwnMetadataKeys(O, P) {
      var keys = [];
      var metadataMap = GetOrCreateMetadataMap(O, P,
      /*Create*/
      false);
      if (IsUndefined(metadataMap)) return keys;
      var keysObj = metadataMap.keys();
      var iterator = GetIterator(keysObj);
      var k = 0;

      while (true) {
        var next = IteratorStep(iterator);

        if (!next) {
          keys.length = k;
          return keys;
        }

        var nextValue = IteratorValue(next);

        try {
          keys[k] = nextValue;
        } catch (e) {
          try {
            IteratorClose(iterator);
          } finally {
            throw e;
          }
        }

        k++;
      }
    } // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values


    function Type(x) {
      if (x === null) return 1
      /* Null */
      ;

      switch (typeof x) {
        case "undefined":
          return 0
          /* Undefined */
          ;

        case "boolean":
          return 2
          /* Boolean */
          ;

        case "string":
          return 3
          /* String */
          ;

        case "symbol":
          return 4
          /* Symbol */
          ;

        case "number":
          return 5
          /* Number */
          ;

        case "object":
          return x === null ? 1
          /* Null */
          : 6
          /* Object */
          ;

        default:
          return 6
          /* Object */
          ;
      }
    } // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type


    function IsUndefined(x) {
      return x === undefined;
    } // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type


    function IsNull(x) {
      return x === null;
    } // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type


    function IsSymbol(x) {
      return typeof x === "symbol";
    } // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type


    function IsObject(x) {
      return typeof x === "object" ? x !== null : typeof x === "function";
    } // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive


    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0
        /* Undefined */
        :
          return input;

        case 1
        /* Null */
        :
          return input;

        case 2
        /* Boolean */
        :
          return input;

        case 3
        /* String */
        :
          return input;

        case 4
        /* Symbol */
        :
          return input;

        case 5
        /* Number */
        :
          return input;
      }

      var hint = PreferredType === 3
      /* String */
      ? "string" : PreferredType === 5
      /* Number */
      ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);

      if (exoticToPrim !== undefined) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result)) throw new TypeError();
        return result;
      }

      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    } // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive


    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;

        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result)) return result;
        }

        var valueOf = O.valueOf;

        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }
      } else {
        var valueOf = O.valueOf;

        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }

        var toString_2 = O.toString;

        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result)) return result;
        }
      }

      throw new TypeError();
    } // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean


    function ToBoolean(argument) {
      return !!argument;
    } // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring


    function ToString(argument) {
      return "" + argument;
    } // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey


    function ToPropertyKey(argument) {
      var key = ToPrimitive(argument, 3
      /* String */
      );
      if (IsSymbol(key)) return key;
      return ToString(key);
    } // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray


    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    } // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable


    function IsCallable(argument) {
      // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
      return typeof argument === "function";
    } // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor


    function IsConstructor(argument) {
      // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
      return typeof argument === "function";
    } // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey


    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3
        /* String */
        :
          return true;

        case 4
        /* Symbol */
        :
          return true;

        default:
          return false;
      }
    } // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod


    function GetMethod(V, P) {
      var func = V[P];
      if (func === undefined || func === null) return undefined;
      if (!IsCallable(func)) throw new TypeError();
      return func;
    } // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects


    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method)) throw new TypeError(); // from Call

      var iterator = method.call(obj);
      if (!IsObject(iterator)) throw new TypeError();
      return iterator;
    } // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue


    function IteratorValue(iterResult) {
      return iterResult.value;
    } // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep


    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    } // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose


    function IteratorClose(iterator) {
      var f = iterator["return"];
      if (f) f.call(iterator);
    } // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof


    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype) return proto; // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
      // Try to determine the superclass constructor. Compatible implementations
      // must either set __proto__ on a subclass constructor to the superclass constructor,
      // or ensure each class has a valid `constructor` property on its prototype that
      // points back to the constructor.
      // If this is not the same as Function.[[Prototype]], then this is definately inherited.
      // This is the case when in ES6 or when using __proto__ in a compatible browser.

      if (proto !== functionPrototype) return proto; // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.

      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype) return proto; // If the constructor was not a function, then we cannot determine the heritage.

      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function") return proto; // If we have some kind of self-reference, then we cannot determine the heritage.

      if (constructor === O) return proto; // we have a pretty good guess at the heritage.

      return constructor;
    } // naive Map shim


    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];

      var MapIterator = function () {
        function MapIterator(keys, values, selector) {
          this._index = 0;
          this._keys = keys;
          this._values = values;
          this._selector = selector;
        }

        MapIterator.prototype["@@iterator"] = function () {
          return this;
        };

        MapIterator.prototype[iteratorSymbol] = function () {
          return this;
        };

        MapIterator.prototype.next = function () {
          var index = this._index;

          if (index >= 0 && index < this._keys.length) {
            var result = this._selector(this._keys[index], this._values[index]);

            if (index + 1 >= this._keys.length) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            } else {
              this._index++;
            }

            return {
              value: result,
              done: false
            };
          }

          return {
            value: undefined,
            done: true
          };
        };

        MapIterator.prototype.throw = function (error) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }

          throw error;
        };

        MapIterator.prototype.return = function (value) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }

          return {
            value: value,
            done: true
          };
        };

        return MapIterator;
      }();

      return function () {
        function Map() {
          this._keys = [];
          this._values = [];
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        }

        Object.defineProperty(Map.prototype, "size", {
          get: function () {
            return this._keys.length;
          },
          enumerable: true,
          configurable: true
        });

        Map.prototype.has = function (key) {
          return this._find(key,
          /*insert*/
          false) >= 0;
        };

        Map.prototype.get = function (key) {
          var index = this._find(key,
          /*insert*/
          false);

          return index >= 0 ? this._values[index] : undefined;
        };

        Map.prototype.set = function (key, value) {
          var index = this._find(key,
          /*insert*/
          true);

          this._values[index] = value;
          return this;
        };

        Map.prototype.delete = function (key) {
          var index = this._find(key,
          /*insert*/
          false);

          if (index >= 0) {
            var size = this._keys.length;

            for (var i = index + 1; i < size; i++) {
              this._keys[i - 1] = this._keys[i];
              this._values[i - 1] = this._values[i];
            }

            this._keys.length--;
            this._values.length--;

            if (key === this._cacheKey) {
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }

            return true;
          }

          return false;
        };

        Map.prototype.clear = function () {
          this._keys.length = 0;
          this._values.length = 0;
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        };

        Map.prototype.keys = function () {
          return new MapIterator(this._keys, this._values, getKey);
        };

        Map.prototype.values = function () {
          return new MapIterator(this._keys, this._values, getValue);
        };

        Map.prototype.entries = function () {
          return new MapIterator(this._keys, this._values, getEntry);
        };

        Map.prototype["@@iterator"] = function () {
          return this.entries();
        };

        Map.prototype[iteratorSymbol] = function () {
          return this.entries();
        };

        Map.prototype._find = function (key, insert) {
          if (this._cacheKey !== key) {
            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
          }

          if (this._cacheIndex < 0 && insert) {
            this._cacheIndex = this._keys.length;

            this._keys.push(key);

            this._values.push(undefined);
          }

          return this._cacheIndex;
        };

        return Map;
      }();

      function getKey(key, _) {
        return key;
      }

      function getValue(_, value) {
        return value;
      }

      function getEntry(key, value) {
        return [key, value];
      }
    } // naive Set shim


    function CreateSetPolyfill() {
      return function () {
        function Set() {
          this._map = new _Map();
        }

        Object.defineProperty(Set.prototype, "size", {
          get: function () {
            return this._map.size;
          },
          enumerable: true,
          configurable: true
        });

        Set.prototype.has = function (value) {
          return this._map.has(value);
        };

        Set.prototype.add = function (value) {
          return this._map.set(value, value), this;
        };

        Set.prototype.delete = function (value) {
          return this._map.delete(value);
        };

        Set.prototype.clear = function () {
          this._map.clear();
        };

        Set.prototype.keys = function () {
          return this._map.keys();
        };

        Set.prototype.values = function () {
          return this._map.values();
        };

        Set.prototype.entries = function () {
          return this._map.entries();
        };

        Set.prototype["@@iterator"] = function () {
          return this.keys();
        };

        Set.prototype[iteratorSymbol] = function () {
          return this.keys();
        };

        return Set;
      }();
    } // naive WeakMap shim


    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return function () {
        function WeakMap() {
          this._key = CreateUniqueKey();
        }

        WeakMap.prototype.has = function (target) {
          var table = GetOrCreateWeakMapTable(target,
          /*create*/
          false);
          return table !== undefined ? HashMap.has(table, this._key) : false;
        };

        WeakMap.prototype.get = function (target) {
          var table = GetOrCreateWeakMapTable(target,
          /*create*/
          false);
          return table !== undefined ? HashMap.get(table, this._key) : undefined;
        };

        WeakMap.prototype.set = function (target, value) {
          var table = GetOrCreateWeakMapTable(target,
          /*create*/
          true);
          table[this._key] = value;
          return this;
        };

        WeakMap.prototype.delete = function (target) {
          var table = GetOrCreateWeakMapTable(target,
          /*create*/
          false);
          return table !== undefined ? delete table[this._key] : false;
        };

        WeakMap.prototype.clear = function () {
          // NOTE: not a real clear, just makes the previous data unreachable
          this._key = CreateUniqueKey();
        };

        return WeakMap;
      }();

      function CreateUniqueKey() {
        var key;

        do key = "@@WeakMap@@" + CreateUUID(); while (HashMap.has(keys, key));

        keys[key] = true;
        return key;
      }

      function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create) return undefined;
          Object.defineProperty(target, rootKey, {
            value: HashMap.create()
          });
        }

        return target[rootKey];
      }

      function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 0xff | 0;

        return buffer;
      }

      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
          if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
          return FillRandomBytes(new Uint8Array(size), size);
        }

        return FillRandomBytes(new Array(size), size);
      }

      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE); // mark as random - RFC 4122 § 4.4

        data[6] = data[6] & 0x4f | 0x40;
        data[8] = data[8] & 0xbf | 0x80;
        var result = "";

        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8) result += "-";
          if (byte < 16) result += "0";
          result += byte.toString(16).toLowerCase();
        }

        return result;
      }
    } // uses a heuristic used by v8 and chakra to force an object into dictionary mode.


    function MakeDictionary(obj) {
      obj.__ = undefined;
      delete obj.__;
      return obj;
    }
  });
})(Reflect || (Reflect = {}));
},{"process":"../node_modules/_process@0.11.10@process/browser.js"}],"../../InDiv/src/DI/injected.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("reflect-metadata");
/**
 * Decorator @Injected
 * declare Class which need be injected
 *
 * @export
 * @param {Function} _constructor
 */


function Injected(_constructor) {
  // 通过反射机制，获取参数类型列表
  var paramsTypes = Reflect.getMetadata('design:paramtypes', _constructor);

  if (paramsTypes && paramsTypes.length) {
    paramsTypes.forEach(function (v) {
      if (v === _constructor) {
        throw new Error('不可以依赖自身');
      } else {
        if (_constructor._needInjectedClass) {
          _constructor._needInjectedClass.push(v);
        } else {
          _constructor._needInjectedClass = [v];
        }
      }
    });
  }
}

exports.default = Injected;
},{"reflect-metadata":"../../InDiv/node_modules/reflect-metadata/Reflect.js"}],"../../InDiv/src/DI/factory-creator.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * injector: build arguments for factoryCreator
 *
 * 1. provider Component's providers
 * 2. provider rootModule's providers
 *
 * first: check _constructor has Component providers or not
 * secend: find service is a singleton service or not
 * third: if service is a singleton service, find in rootModule's $providerInstances. If not use factoryCreator instance and return
 * last: if service is a singleton service, and can't be found in rootModule's $providerInstances, then factoryCreator instance and push in rootModule's $providerInstances
 *
 * @export
 * @param {Function} _constructor
 * @param {*} rootModule
 * @returns {any[]}
 */

function injector(_constructor, rootModule) {
  var args = []; // for ts Dependency Injection

  if (_constructor._needInjectedClass) {
    _constructor._needInjectedClass.forEach(function (key) {
      // component injector: find service Class in providerList in Component
      if (_constructor.prototype.$providerList) {
        var _componentService = _constructor.prototype.$providerList.get(key);

        if (_componentService && !_componentService.useClass && !_componentService.useValue) return args.push(factoryCreator(_componentService, rootModule));
        if (_componentService && _componentService.useClass) return args.push(factoryCreator(_componentService.useClass, rootModule));
        if (_componentService && _componentService.useValue) return args.push(_componentService.useValue);
      } // root injector: find service Class in _injectedProviders in rootModule


      var _service = _constructor._injectedProviders.has(key) ? _constructor._injectedProviders.get(key) : rootModule.$providers.find(function (service) {
        if (!service.provide && service === key) return true;
        if (service.provide && service.provide === key) return true;
        return false;
      });

      var findService = null;
      if (_service && !_service.useClass && !_service.useValue) findService = _service;
      if (_service && _service.useClass) findService = _service.useClass;
      if (_service && _service.useValue) return args.push(_service.useValue);
      if (!findService) throw new Error("injector injects service error: can't find provide: " + key.name + " in Component " + _constructor); // if service isn't a singleton service

      if (findService && !findService.isSingletonMode) args.push(factoryCreator(findService, rootModule)); // if service is a singleton service

      if (findService && findService.isSingletonMode) {
        // if root injector: $providerInstances has this key
        var findServiceInStance = rootModule.$providerInstances.has(key) ? rootModule.$providerInstances.get(key) : null;
        if (findServiceInStance) args.push(findServiceInStance);

        if (!findServiceInStance) {
          var serviceInStance = factoryCreator(findService, rootModule);
          rootModule.$providerInstances.set(key, serviceInStance);
          args.push(serviceInStance);
        }
      }
    });
  } // for js Dependency Injection


  if (_constructor.injectTokens) {
    _constructor.injectTokens.forEach(function (key) {
      // component injector: find service Class in providerList in Component
      if (_constructor.prototype.$providerList) {
        var _componentService = _constructor.prototype.$providerList.get(key);

        if (_componentService && !_componentService.useClass && !_componentService.useValue) throw new Error("injector injects service error: can't find provide: " + key + " in Component " + _constructor);
        if (_componentService && _componentService.useClass) return args.push(factoryCreator(_componentService.useClass, rootModule));
        if (_componentService && _componentService.useValue) return args.push(_componentService.useValue);
      } // root injector: find service Class in _injectedProviders in rootModule


      var _service = _constructor._injectedProviders.has(key) ? _constructor._injectedProviders.get(key) : rootModule.$providers.find(function (service) {
        if (service.provide && service.provide === key) return true;
        return false;
      });

      var findService = null;
      if (_service && !_service.useClass && !_service.useValue) throw new Error("injector injects service error: can't find provide: " + key + " in Component " + _constructor);
      if (_service && _service.useClass) findService = _service.useClass;
      if (_service && _service.useValue) return args.push(_service.useValue);
      if (!findService) throw new Error("injector injects service error: can't find provide: " + key + " in Component " + _constructor); // if service isn't a singleton service

      if (findService && !findService.isSingletonMode) args.push(factoryCreator(findService, rootModule)); // if service is a singleton service

      if (findService && findService.isSingletonMode) {
        var findServiceInStance = rootModule.$providerInstances.has(key) ? rootModule.$providerInstances.get(key) : null;
        if (findServiceInStance) args.push(findServiceInStance);

        if (!findServiceInStance) {
          var serviceInStance = factoryCreator(findService, rootModule);
          rootModule.$providerInstances.set(key, serviceInStance);
          args.push(serviceInStance);
        }
      }
    });
  }

  return args;
}

exports.injector = injector;
/**
 * create an instance with factory method
 *
 * @export
 * @param {Function} _constructor
 * @param {*} rootModule
 * @returns {*}
 */

function factoryCreator(_constructor, rootModule) {
  var args = injector(_constructor, rootModule);
  var factoryInstance = Reflect.construct(_constructor, args);
  return factoryInstance;
}

exports.factoryCreator = factoryCreator;
},{}],"../../InDiv/src/DI/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var injectable_1 = require("./injectable");

exports.Injectable = injectable_1.default;

var injected_1 = require("./injected");

exports.Injected = injected_1.default;

var factory_creator_1 = require("./factory-creator");

exports.injector = factory_creator_1.injector;
exports.factoryCreator = factory_creator_1.factoryCreator;
},{"./injectable":"../../InDiv/src/DI/injectable.ts","./injected":"../../InDiv/src/DI/injected.ts","./factory-creator":"../../InDiv/src/DI/factory-creator.ts"}],"../../InDiv/src/Component/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Compile_1 = __importDefault(require("../Compile"));

var Watcher_1 = __importDefault(require("../Watcher"));

var Utils_1 = __importDefault(require("../Utils"));

var CompileUtils_1 = require("../CompileUtils");

var DI_1 = require("../DI");

var utils = new Utils_1.default();
/**
 * Decorator @Component
 *
 * to decorate an InDiv component
 *
 * @template State
 * @template Props
 * @template Vm
 * @param {TComponentOptions} options
 * @returns {(_constructor: Function) => void}
 */

function Component(options) {
  return function (_constructor) {
    _constructor.$selector = options.selector;
    var vm = _constructor.prototype;
    vm.$template = options.template; // component $providerList for injector

    if (options.providers && options.providers.length > 0) {
      vm.$providerList = new Map();
      var length = options.providers.length;

      for (var i = 0; i < length; i++) {
        var service = options.providers[i];

        if (service.provide) {
          if (service.useClass || service.useValue) vm.$providerList.set(service.provide, service);
        } else {
          vm.$providerList.set(service, service);
        }
      }
    }

    vm.compileUtil = new CompileUtils_1.CompileUtil();
    vm.$components = [];
    vm.$componentList = [];

    vm.getLocation = function () {
      if (!utils.isBrowser()) return {};
      return {
        path: this.$vm.$esRouteObject.path,
        query: this.$vm.$esRouteObject.query,
        params: this.$vm.$esRouteParmasObject,
        data: this.$vm.$esRouteObject.data
      };
    };

    vm.setLocation = function (path, query, data, title) {
      if (!utils.isBrowser()) return;
      var rootPath = this.$vm.$rootPath === '/' ? '' : this.$vm.$rootPath;
      history.pushState({
        path: path,
        query: query,
        data: data
      }, title, "" + rootPath + path + utils.buildQuery(query));
      this.$vm.$esRouteObject = {
        path: path,
        query: query,
        data: data
      };
    };

    vm.watchData = function () {
      if (this.state) {
        if (this.nvWatchState) this.stateWatcher = new Watcher_1.default(this.state, this.nvWatchState.bind(this), this.reRender.bind(this));
        if (!this.nvWatchState) this.stateWatcher = new Watcher_1.default(this.state, null, this.reRender.bind(this));
      }
    };

    vm.render = function () {
      var dom = this.renderDom;
      var compile = new Compile_1.default(dom, this);
      this.mountComponent(dom);
      var length = this.$componentList.length;

      for (var i = 0; i < length; i++) {
        var component = this.$componentList[i];
        if (component.scope.render) component.scope.render();
        if (component.scope.nvAfterMount) component.scope.nvAfterMount();
      }

      if (this.nvHasRender) this.nvHasRender();
    };

    vm.reRender = function () {
      var dom = this.renderDom;
      var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
      var compile = new Compile_1.default(dom, this, routerRenderDom);
      this.mountComponent(dom);
      var length = this.$componentList.length;

      for (var i = 0; i < length; i++) {
        var component = this.$componentList[i];
        if (component.scope.render) component.scope.reRender();
        if (component.scope.nvAfterMount) component.scope.nvAfterMount();
      }

      if (this.nvHasRender) this.nvHasRender();
    };

    vm.mountComponent = function (dom) {
      var cacheStates = this.$componentList.slice();
      this.componentsConstructor(dom);
      var componentListLength = this.$componentList.length;

      var _loop_1 = function _loop_1(i) {
        var component = this_1.$componentList[i]; // find Component from cache

        var cacheComponentIndex = cacheStates.findIndex(function (cache) {
          return cache.dom === component.dom;
        });
        var cacheComponent = cacheStates[cacheComponentIndex]; // clear cache and the rest need to be destoried

        if (cacheComponentIndex !== -1) cacheStates.splice(cacheComponentIndex, 1);

        if (cacheComponent) {
          component.scope = cacheComponent.scope; // old props: component.scope.props
          // new props: component.props

          if (!utils.isEqual(component.scope.props, component.props)) {
            if (component.scope.nvReceiveProps) component.scope.nvReceiveProps(component.props);
            component.scope.props = component.props;
          }
        }

        component.scope.$vm = this_1.$vm;
        component.scope.$components = this_1.$components;
        if (component.scope.nvOnInit && !cacheComponent) component.scope.nvOnInit();
        if (component.scope.watchData) component.scope.watchData();
        if (component.scope.nvBeforeMount) component.scope.nvBeforeMount();
      };

      var this_1 = this;

      for (var i = 0; i < componentListLength; i++) {
        _loop_1(i);
      } // the rest should use nvOnDestory


      var cacheStatesLength = cacheStates.length;

      for (var i = 0; i < cacheStatesLength; i++) {
        var cache = cacheStates[i];
        if (cache.scope.nvOnDestory) cache.scope.nvOnDestory();
      }
    };

    vm.componentsConstructor = function (dom) {
      var _this = this;

      this.$componentList = [];
      var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
      var injectedComponentsLength = this.constructor._injectedComponents.length;

      var _loop_2 = function _loop_2(i) {
        var injectedComponent = this_2.constructor._injectedComponents[i];
        if (!this_2.$components.find(function (component) {
          return component.$selector === injectedComponent.$selector;
        })) this_2.$components.push(injectedComponent);
      };

      var this_2 = this;

      for (var i = 0; i < injectedComponentsLength; i++) {
        _loop_2(i);
      }

      var componentsLength = this.$components.length;

      var _loop_3 = function _loop_3(i) {
        var name = this_3.$components[i].$selector;
        var tags = dom.getElementsByTagName(name);
        Array.from(tags).forEach(function (node) {
          //  protect component in <router-render>
          if (routerRenderDom && routerRenderDom.contains(node)) return;
          var nodeAttrs = node.attributes;
          var props = {};

          if (nodeAttrs) {
            var attrList = Array.from(nodeAttrs);
            var _propsKeys_1 = {};
            attrList.forEach(function (attr) {
              if (/^\_prop\-(.+)/.test(attr.name)) {
                _propsKeys_1[attr.name.replace('_prop-', '')] = JSON.parse(attr.value);
                node.removeAttribute(attr.name);
              }
            });
            attrList.forEach(function (attr) {
              var attrName = attr.name;
              if (/^\_prop\-(.+)/.test(attr.name)) return;
              var prop = /^\{(.+)\}$/.exec(attr.value);

              if (prop) {
                var valueList = prop[1].split('.');
                var key = valueList[0];
                var _prop = null;

                if (/^(state.).*/g.test(prop[1])) {
                  _prop = _this.compileUtil._getVMVal(_this, prop[1]);
                  props[attrName] = _this.buildProps(_prop);
                  return;
                }

                if (/^(\@.).*\(.*\)$/g.test(prop[1])) {
                  var utilVm_1 = new CompileUtils_1.CompileUtilForRepeat();

                  var fn = utilVm_1._getVMFunction(vm, prop[1]);

                  var args = prop[1].replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
                  var argsList_1 = [];
                  args.forEach(function (arg) {
                    if (arg === '') return false;
                    if (arg === '$element') return argsList_1.push(node);
                    if (arg === 'true' || arg === 'false') return argsList_1.push(arg === 'true');
                    if (/(state.).*/g.test(arg)) return argsList_1.push(utilVm_1._getVMVal(vm, arg));
                    if (/\'.*\'/g.test(arg)) return argsList_1.push(arg.match(/\'(.*)\'/)[1]);
                    if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList_1.push(Number(arg));

                    if (node.repeatData) {
                      // $index in this
                      Object.keys(node.repeatData).forEach(function (data) {
                        if (arg.indexOf(data) === 0 || arg.indexOf(data + ".") === 0) return argsList_1.push(utilVm_1._getValueByValue(node.repeatData[data], arg, data));
                      });
                    }
                  });
                  var value = fn.apply(vm, argsList_1);
                  props[attrName] = value;
                  return;
                }

                if (/^(\@.).*[^\(.*\)]$/g.test(prop[1])) {
                  _prop = _this.compileUtil._getVMVal(_this, prop[1].replace(/^(\@)/, ''));
                  props[attrName] = _this.buildProps(_prop);
                  return;
                }

                if (_propsKeys_1.hasOwnProperty(key)) {
                  _prop = _this.getPropsValue(valueList, _propsKeys_1[key]);
                  props[attrName] = _this.buildProps(_prop);
                  return;
                }

                if (node.repeatData && node.repeatData[key] !== null) {
                  _prop = _this.compileUtil._getValueByValue(node.repeatData[key], prop[1], key);
                  props[attrName] = _this.buildProps(_prop);
                  return;
                }
              } // can't remove indiv_repeat_key


              if (attr.name !== 'indiv_repeat_key') node.removeAttribute(attrName);
            });
          }

          _this.$componentList.push({
            dom: node,
            props: props,
            scope: _this.buildComponentScope(_this.$components[i], props, node)
          });
        });
      };

      var this_3 = this;

      for (var i = 0; i < componentsLength; i++) {
        _loop_3(i);
      }
    };

    vm.setState = function (newState) {
      if (newState && utils.isFunction(newState)) {
        var _newState = newState();

        if (_newState && _newState instanceof Object) {
          for (var key in _newState) {
            if (this.state.hasOwnProperty(key) && this.state[key] !== _newState[key]) this.state[key] = _newState[key];
            if (!this.state.hasOwnProperty(key)) this.state[key] = _newState[key];
          }

          this.reRender();
        }
      }

      if (newState && newState instanceof Object) {
        for (var key in newState) {
          if (this.state.hasOwnProperty(key) && this.state[key] !== newState[key]) this.state[key] = newState[key];
          if (!this.state.hasOwnProperty(key)) this.state[key] = newState[key];
        }

        this.reRender();
      }
    };

    vm.getPropsValue = function (valueList, value) {
      var val = value;
      valueList.forEach(function (v, index) {
        if (index === 0) return;
        val = val[v];
      });
      return val;
    };

    vm.buildProps = function (prop) {
      if (utils.isFunction(prop)) {
        return prop.bind(this);
      } else {
        return prop;
      }
    };

    vm.buildComponentScope = function (ComponentClass, props, dom) {
      var _component = DI_1.factoryCreator(ComponentClass, this.$vm.$rootModule);

      _component.props = props;
      _component.renderDom = dom;
      _component.$components = this.$components;
      return _component;
    };
  };
}

exports.default = Component;
},{"../Compile":"../../InDiv/src/Compile/index.ts","../Watcher":"../../InDiv/src/Watcher/index.ts","../Utils":"../../InDiv/src/Utils/index.ts","../CompileUtils":"../../InDiv/src/CompileUtils/index.ts","../DI":"../../InDiv/src/DI/index.ts"}],"../../InDiv/src/types/compile.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/compileUtils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/component.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/indiv.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/nvModule.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/keyWatcher.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/router.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/virtualDOM.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/watcher.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../../InDiv/src/types/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var compile_1 = require("./compile");

exports.ICompile = compile_1.ICompile;

var compileUtils_1 = require("./compileUtils");

exports.ICompileUtilForRepeat = compileUtils_1.ICompileUtilForRepeat;
exports.ICompileUtil = compileUtils_1.ICompileUtil;

var component_1 = require("./component");

exports.ComponentList = component_1.ComponentList;
exports.IComponent = component_1.IComponent;

var indiv_1 = require("./indiv");

exports.IMiddleware = indiv_1.IMiddleware;
exports.EsRouteObject = indiv_1.EsRouteObject;
exports.IInDiv = indiv_1.IInDiv;

var nvModule_1 = require("./nvModule");

exports.INvModule = nvModule_1.INvModule;
exports.TInjectTokenProvider = nvModule_1.TInjectTokenProvider;
exports.TUseClassProvider = nvModule_1.TUseClassProvider;
exports.TuseValueProvider = nvModule_1.TuseValueProvider;

var keyWatcher_1 = require("./keyWatcher");

exports.IKeyWatcher = keyWatcher_1.IKeyWatcher;

var router_1 = require("./router");

exports.TRouter = router_1.TRouter;
exports.IRouter = router_1.IRouter;

var utils_1 = require("./utils");

exports.IUtil = utils_1.IUtil;

var virtualDOM_1 = require("./virtualDOM");

exports.IVnode = virtualDOM_1.IVnode;
exports.TAttributes = virtualDOM_1.TAttributes;
exports.IPatchList = virtualDOM_1.IPatchList;

var watcher_1 = require("./watcher");

exports.TFnWatcher = watcher_1.TFnWatcher;
exports.TFnRender = watcher_1.TFnRender;
exports.IWatcher = watcher_1.IWatcher;
},{"./compile":"../../InDiv/src/types/compile.ts","./compileUtils":"../../InDiv/src/types/compileUtils.ts","./component":"../../InDiv/src/types/component.ts","./indiv":"../../InDiv/src/types/indiv.ts","./nvModule":"../../InDiv/src/types/nvModule.ts","./keyWatcher":"../../InDiv/src/types/keyWatcher.ts","./router":"../../InDiv/src/types/router.ts","./utils":"../../InDiv/src/types/utils.ts","./virtualDOM":"../../InDiv/src/types/virtualDOM.ts","./watcher":"../../InDiv/src/types/watcher.ts"}],"../../InDiv/src/Router/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils_1 = __importDefault(require("../Utils"));

var KeyWatcher_1 = __importDefault(require("../KeyWatcher"));

var types_1 = require("../types");

exports.TRouter = types_1.TRouter;
var utils = new Utils_1.default();
/**
 * route for InDiv
 *
 * @export
 * @class Router
 */

var Router =
/** @class */
function () {
  function Router() {
    this.routes = [];
    this.routesList = [];
    this.currentUrl = '';
    this.lastRoute = null;
    this.rootDom = null;
    this.$rootPath = '/';
    this.hasRenderComponentList = [];
    this.needRedirectPath = null;
    this.$vm = null;
    this.watcher = null;
    this.renderRouteList = [];
  }
  /**
   * bootstrap and init watch $esRouteParmasObject in InDiv
   *
   * @param {IInDiv} vm
   * @returns {void}
   * @memberof Router
   */


  Router.prototype.bootstrap = function (vm) {
    var _this = this;

    this.$vm = vm;
    this.$vm.setRootPath(this.$rootPath);
    this.$vm.$canRenderModule = false;
    this.$vm.$routeDOMKey = 'router-render';
    if (!utils.isBrowser()) return;
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('popstate', function () {
      var path;

      if (_this.$rootPath === '/') {
        path = location.pathname || '/';
      } else {
        path = location.pathname.replace(_this.$rootPath, '') === '' ? '/' : location.pathname.replace(_this.$rootPath, '');
      }

      _this.$vm.$esRouteObject = {
        path: path,
        query: {},
        data: null
      };
      _this.$vm.$esRouteParmasObject = {};
    }, false);
  };
  /**
   * set rootDom
   *
   * @param {TRouter[]} arr
   * @returns {void}
   * @memberof Router
   */


  Router.prototype.init = function (arr) {
    if (!utils.isBrowser()) return;

    if (arr && arr instanceof Array) {
      var rootDom = document.querySelector('#root');
      this.rootDom = rootDom || null;
      this.routes = arr;
      this.routesList = [];
    } else {
      throw new Error("route error: no routes exit");
    }
  };

  Router.prototype.setRootPath = function (rootPath) {
    if (rootPath && typeof rootPath === 'string') {
      this.$rootPath = rootPath;
    } else {
      throw new Error('route error: rootPath is not defined or rootPath must be a String');
    }
  };
  /**
   * redirectTo a path
   *
   * @param {string} redirectTo
   * @memberof Router
   */


  Router.prototype.redirectTo = function (redirectTo) {
    var rootPath = this.$rootPath === '/' ? '' : this.$rootPath;
    history.replaceState(null, null, "" + rootPath + redirectTo);
    this.$vm.$esRouteObject = {
      path: redirectTo || '/',
      query: {},
      data: null
    };
    this.$vm.$esRouteParmasObject = {};
  };
  /**
   * refresh if not watch $esRouteObject
   *
   * @memberof Router
   */


  Router.prototype.refresh = function () {
    if (!this.$vm.$esRouteObject || !this.watcher) {
      var path = void 0;

      if (this.$rootPath === '/') {
        path = location.pathname || '/';
      } else {
        path = location.pathname.replace(this.$rootPath, '') === '' ? '/' : location.pathname.replace(this.$rootPath, '');
      }

      this.$vm.$esRouteObject = {
        path: path,
        query: {},
        data: null
      };
      this.$vm.$esRouteParmasObject = {};
      this.watcher = new KeyWatcher_1.default(this.$vm, '$esRouteObject', this.refresh.bind(this));
    }

    this.currentUrl = this.$vm.$esRouteObject.path || '/';
    this.routesList = [];
    this.renderRouteList = this.currentUrl === '/' ? ['/'] : this.currentUrl.split('/');
    this.renderRouteList[0] = '/';
    this.distributeRoutes();
  };
  /**
   * distribute routes and decide insert or general Routes
   *
   * @memberof Router
   */


  Router.prototype.distributeRoutes = function () {
    if (this.lastRoute && this.lastRoute !== this.currentUrl) {
      // has rendered
      this.$vm.$esRouteParmasObject = {};
      this.insertRenderRoutes();
    } else {
      // first render
      this.generalDistributeRoutes();
    }

    if (this.routeChange) this.routeChange(this.lastRoute, this.currentUrl);
    this.lastRoute = this.currentUrl;

    if (this.needRedirectPath) {
      this.redirectTo(this.needRedirectPath);
      this.needRedirectPath = null;
    }
  };
  /**
   * insert Routes and render
   *
   * if has rendered Routes, it will find which is different and render it
   *
   * @returns {void}
   * @memberof Router
   */


  Router.prototype.insertRenderRoutes = function () {
    var lastRouteList = this.lastRoute === '/' ? ['/'] : this.lastRoute.split('/');
    lastRouteList[0] = '/';

    var _loop_1 = function _loop_1(index) {
      var path = this_1.renderRouteList[index];

      if (index === 0) {
        var rootRoute = this_1.routes.find(function (route) {
          return route.path === "" + path || /^\/\:.+/.test(route.path);
        });
        if (!rootRoute) throw new Error("route error: wrong route instantiation in insertRenderRoutes: " + this_1.currentUrl);
        this_1.routesList.push(rootRoute);
      } else {
        var lastRoute = this_1.routesList[index - 1].children;
        if (!lastRoute || !(lastRoute instanceof Array)) throw new Error('route error: routes not exit or routes must be an array!');
        var route = lastRoute.find(function (r) {
          return r.path === "/" + path || /^\/\:.+/.test(r.path);
        });
        if (!route) throw new Error("route error: wrong route instantiation: " + this_1.currentUrl);
        this_1.routesList.push(route);
      }

      if (path !== lastRouteList[index]) {
        var needRenderRoute_1 = this_1.routesList[index];
        if (!needRenderRoute_1) throw new Error("route error: wrong route instantiation in insertRenderRoutes: " + this_1.currentUrl);
        var needRenderComponent = this_1.$vm.$components.find(function (component) {
          return component.$selector === needRenderRoute_1.component;
        });
        var renderDom = document.querySelectorAll('router-render')[index - 1];
        if (!needRenderRoute_1.component && !needRenderRoute_1.redirectTo) throw new Error("route error: path " + needRenderRoute_1.path + " need a component which has children path or need a  redirectTo which has't children path");

        if (/^\/\:.+/.test(needRenderRoute_1.path) && !needRenderRoute_1.redirectTo) {
          var key = needRenderRoute_1.path.split('/:')[1];
          this_1.$vm.$esRouteParmasObject[key] = path;
        }

        if (needRenderComponent) {
          var component = this_1.instantiateComponent(needRenderComponent, renderDom); // insert needRenderComponent on index in this.hasRenderComponentList,and remove other component which index >= index of needRenderComponent

          if (component) {
            if (this_1.hasRenderComponentList[index]) this_1.hasRenderComponentList.splice(index, 0, component);
            if (!this_1.hasRenderComponentList[index]) this_1.hasRenderComponentList[index] = component;
          } else {
            throw new Error("route error: path " + needRenderRoute_1.path + " need a component");
          }

          this_1.routerChangeEvent(index);
        }

        if (needRenderRoute_1.redirectTo && /^\/.*/.test(needRenderRoute_1.redirectTo) && index + 1 === this_1.renderRouteList.length) {
          this_1.needRedirectPath = needRenderRoute_1.redirectTo;
          return {
            value: void 0
          };
        }
      } // add parmas in $esRouteParmasObject


      if (path === lastRouteList[index]) {
        var needRenderRoute = this_1.routesList[index];

        if (/^\/\:.+/.test(needRenderRoute.path) && !needRenderRoute.redirectTo) {
          var key = needRenderRoute.path.split('/:')[1];
          this_1.$vm.$esRouteParmasObject[key] = path;
        }
      }

      if (index === this_1.renderRouteList.length - 1 && index < lastRouteList.length - 1) {
        var renderDom = document.querySelectorAll('router-render')[index];
        this_1.routerChangeEvent(index);
        if (renderDom && renderDom.hasChildNodes()) renderDom.removeChild(renderDom.childNodes[0]);
        var needRenderRoute = this_1.routesList[index];

        if (needRenderRoute.redirectTo && /^\/.*/.test(needRenderRoute.redirectTo) && index + 1 === this_1.renderRouteList.length) {
          this_1.needRedirectPath = needRenderRoute.redirectTo;
          return {
            value: void 0
          };
        }
      }
    };

    var this_1 = this;

    for (var index = 0; index < this.renderRouteList.length; index++) {
      var state_1 = _loop_1(index);

      if (_typeof(state_1) === "object") return state_1.value;
    }
  };
  /**
   * render Routes
   *
   * first render
   *
   * @returns {void}
   * @memberof Router
   */


  Router.prototype.generalDistributeRoutes = function () {
    var _loop_2 = function _loop_2(index) {
      var path = this_2.renderRouteList[index];

      if (index === 0) {
        var rootRoute_1 = this_2.routes.find(function (route) {
          return route.path === "" + path || /^\/\:.+/.test(route.path);
        });
        if (!rootRoute_1) throw new Error("route error: wrong route instantiation in generalDistributeRoutes: " + this_2.currentUrl);
        var FindComponent = null;

        if (this_2.$vm.$rootModule.$components.find(function (component) {
          return component.$selector === rootRoute_1.component;
        })) {
          FindComponent = this_2.$vm.$rootModule.$components.find(function (component) {
            return component.$selector === rootRoute_1.component;
          });
        } else {
          throw new Error("route error: path " + rootRoute_1.path + " is undefined");
        }

        if (/^\/\:.+/.test(rootRoute_1.path)) {
          var key = rootRoute_1.path.split('/:')[1];
          this_2.$vm.$esRouteParmasObject[key] = path;
        }

        if (!utils.isBrowser()) return {
          value: void 0
        };
        var rootDom = document.querySelector('#root');
        this_2.routesList.push(rootRoute_1);
        var component = this_2.instantiateComponent(FindComponent, rootDom); // 因为没有 所有要push进去

        if (component) this_2.hasRenderComponentList.push(component);
        if (index === this_2.renderRouteList.length - 1) this_2.routerChangeEvent(index);

        if (rootRoute_1.redirectTo && /^\/.*/.test(rootRoute_1.redirectTo) && index + 1 === this_2.renderRouteList.length) {
          this_2.needRedirectPath = rootRoute_1.redirectTo;
          this_2.renderRouteList.push(rootRoute_1.redirectTo);
          return {
            value: void 0
          };
        }
      } else {
        var lastRoute = this_2.routesList[index - 1].children;
        if (!lastRoute || !(lastRoute instanceof Array)) throw new Error('route error: routes not exit or routes must be an array!');
        var route_1 = lastRoute.find(function (r) {
          return r.path === "/" + path || /^\/\:.+/.test(r.path);
        });
        if (!route_1) throw new Error("route error: wrong route instantiation: " + this_2.currentUrl);
        var FindComponent = null;

        if (this_2.$vm.$rootModule.$components.find(function (component) {
          return component.$selector === route_1.component;
        })) {
          FindComponent = this_2.$vm.$rootModule.$components.find(function (component) {
            return component.$selector === route_1.component;
          });
        }

        if (!route_1.component && !route_1.redirectTo) throw new Error("route error: path " + route_1.path + " need a component which has children path or need a  redirectTo which has't children path");

        if (/^\/\:.+/.test(route_1.path)) {
          var key = route_1.path.split('/:')[1];
          this_2.$vm.$esRouteParmasObject[key] = path;
        }

        var renderDom = document.querySelectorAll('router-render')[index - 1];
        this_2.routesList.push(route_1);

        if (FindComponent) {
          var component = this_2.instantiateComponent(FindComponent, renderDom);
          if (component) this_2.hasRenderComponentList.push(component);
        }

        if (index === this_2.renderRouteList.length - 1) this_2.routerChangeEvent(index);

        if (route_1.redirectTo && /^\/.*/.test(route_1.redirectTo) && index + 1 === this_2.renderRouteList.length) {
          this_2.needRedirectPath = route_1.redirectTo;
          return {
            value: void 0
          };
        }
      }
    };

    var this_2 = this;

    for (var index = 0; index < this.renderRouteList.length; index++) {
      var state_2 = _loop_2(index);

      if (_typeof(state_2) === "object") return state_2.value;
    }
  };
  /**
   * emit nvRouteChange and nvOnDestory for Components
   *
   * @param {number} index
   * @memberof Router
   */


  Router.prototype.routerChangeEvent = function (index) {
    var _this = this;

    this.hasRenderComponentList.forEach(function (component, i) {
      if (component.nvRouteChange) component.nvRouteChange(_this.lastRoute, _this.currentUrl);

      _this.emitComponentEvent(component.$componentList, 'nvRouteChange');

      if (i >= index + 1) {
        if (component.nvOnDestory) component.nvOnDestory();

        _this.emitComponentEvent(component.$componentList, 'nvOnDestory');
      }
    });
    this.hasRenderComponentList.length = index + 1;
  };
  /**
   * emit nvRouteChange and nvOnDestory for Components with recursion
   *
   * @param {ComponentList<IComponent>[]} componentList
   * @param {string} event
   * @memberof Router
   */


  Router.prototype.emitComponentEvent = function (componentList, event) {
    var _this = this;

    if (event === 'nvRouteChange') {
      componentList.forEach(function (component) {
        if (component.scope.nvRouteChange) component.scope.nvRouteChange(_this.lastRoute, _this.currentUrl);

        _this.emitComponentEvent(component.scope.$componentList, event);
      });
    }

    if (event === 'nvOnDestory') {
      componentList.forEach(function (component) {
        if (component.scope.nvOnDestory) component.scope.nvOnDestory();

        _this.emitComponentEvent(component.scope.$componentList, event);
      });
    }
  };
  /**
   * instantiate Component
   *
   * use InDiv renderComponent
   *
   * @param {Function} FindComponent
   * @param {Element} renderDom
   * @returns {*}
   * @memberof Router
   */


  Router.prototype.instantiateComponent = function (FindComponent, renderDom) {
    return this.$vm.renderComponent(FindComponent, renderDom);
  };

  return Router;
}();

exports.Router = Router;
},{"../Utils":"../../InDiv/src/Utils/index.ts","../KeyWatcher":"../../InDiv/src/KeyWatcher/index.ts","../types":"../../InDiv/src/types/index.ts"}],"../../InDiv/src/NvModule/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Decorator @NvModule
 *
 * to decorate an InDiv NvModule
 *
 * @export
 * @param {TNvModuleOptions} options
 * @returns {(_constructor: Function) => void}
 */

function NvModule(options) {
  return function (_constructor) {
    var vm = _constructor.prototype;
    vm.$providerList = new Map();
    vm.$providerInstances = new Map();
    if (options.imports) vm.$imports = options.imports;
    if (options.components) vm.$components = options.components;
    if (options.providers) vm.$providers = options.providers;
    if (options.exports) vm.$exports = options.exports;
    if (options.bootstrap) vm.$bootstrap = options.bootstrap;

    vm.buildProviderList = function () {
      if (!this.$providers) return;
      var length = this.$providers.length;

      for (var i = 0; i < length; i++) {
        var service = this.$providers[i];

        if (service.provide) {
          if (service.useClass || service.useValue) this.$providerList.set(service.provide, service);
        } else {
          this.$providerList.set(service, service);
        }
      }
    };

    vm.buildProviders4Services = function () {
      if (!this.$providers) return;
      var length = this.$providers.length;

      var _loop_1 = function _loop_1(i) {
        var service = this_1.$providers[i];

        if (service.provide) {
          if (service.useClass) {
            if (!service.useClass._injectedProviders) service.useClass._injectedProviders = new Map();
            this_1.$providerList.forEach(function (value, key) {
              if (!service.useClass._injectedProviders.has(key)) service.useClass._injectedProviders.set(key, value);
            });
          }
        } else {
          if (!service._injectedProviders) service._injectedProviders = new Map();
          this_1.$providerList.set(service, service);
        }
      };

      var this_1 = this;

      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    };

    vm.buildProviders4Components = function () {
      if (!this.$providers || !this.$components) return;
      var length = this.$components.length;

      var _loop_2 = function _loop_2(i) {
        var component = this_2.$components[i];
        if (!component._injectedProviders) component._injectedProviders = new Map();
        this_2.$providerList.forEach(function (value, key) {
          if (!component._injectedProviders.has(key)) component._injectedProviders.set(key, value);
        });
      };

      var this_2 = this;

      for (var i = 0; i < length; i++) {
        _loop_2(i);
      }
    };

    vm.buildComponents4Components = function () {
      if (!this.$components) return;
      var length = this.$components.length;

      var _loop_3 = function _loop_3(i) {
        var FindComponent = this_3.$components[i];
        if (!FindComponent._injectedComponents) FindComponent._injectedComponents = [];
        this_3.$components.forEach(function (needInjectComponent) {
          if (!FindComponent._injectedComponents.find(function (c) {
            return c.$selector === needInjectComponent.$selector;
          })) FindComponent._injectedComponents.push(needInjectComponent);
        });
      };

      var this_3 = this;

      for (var i = 0; i < length; i++) {
        _loop_3(i);
      }
    };

    vm.buildImports = function () {
      if (!this.$imports) return;
      var length = this.$imports.length;

      for (var i = 0; i < length; i++) {
        var ModuleImport = this.$imports[i];
        var moduleImport = factoryModule(ModuleImport);
        var exportsLength = moduleImport.$exports.length;

        var _loop_4 = function _loop_4(i_1) {
          var importComponent = moduleImport.$exports[i_1];

          if (!this_4.$components.find(function (component) {
            return component.$selector === importComponent.$selector;
          })) {
            this_4.$components.push(importComponent);
          }
        };

        var this_4 = this;

        for (var i_1 = 0; i_1 < exportsLength; i_1++) {
          _loop_4(i_1);
        }
      }
    };
  };
}

exports.NvModule = NvModule;
/**
 * create an NvModule instance with factory method
 *
 * @export
 * @param {Function} NM
 * @returns {INvModule}
 */

function factoryModule(NM) {
  var nm = new NM();
  nm.buildProviderList();
  nm.buildProviders4Services();
  nm.buildComponents4Components();
  nm.buildProviders4Components();
  nm.buildImports();
  return nm;
}

exports.factoryModule = factoryModule;
},{}],"../../InDiv/src/InDiv/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils_1 = __importDefault(require("../Utils"));

var DI_1 = require("../DI");

var NvModule_1 = require("../NvModule");

var utils = new Utils_1.default();
/**
 * main: for new InDiv
 *
 * @class InDiv
 */

var InDiv =
/** @class */
function () {
  function InDiv() {
    this.modalList = [];
    if (!utils.isBrowser()) return;
    this.rootDom = document.querySelector('#root');
    this.$rootPath = '/';
    this.$canRenderModule = true;
    this.$routeDOMKey = 'router-render';
    this.$rootModule = null;
    this.$esRouteObject = null;
    this.$esRouteParmasObject = {};
  }
  /**
   * for using middleware and use bootstrap method of middleware
   *
   * @param {IMiddleware<InDiv>} modal
   * @returns {number}
   * @memberof InDiv
   */


  InDiv.prototype.use = function (modal) {
    modal.bootstrap(this);
    this.modalList.push(modal);
    return this.modalList.findIndex(function (md) {
      return utils.isEqual(md, modal);
    });
  };
  /**
   * for Route set RootPath
   *
   * if not use, rootPath will be <router-render />
   *
   * @param {string} rootPath
   * @memberof InDiv
   */


  InDiv.prototype.setRootPath = function (rootPath) {
    if (rootPath && typeof rootPath === 'string') {
      this.$rootPath = rootPath;
    } else {
      throw new Error('rootPath is not defined or rootPath must be a String');
    }
  };
  /**
   * bootstrap NvModule
   *
   * if not use Route it will be used
   *
   * @param {Function} Esmodule
   * @returns {void}
   * @memberof InDiv
   */


  InDiv.prototype.bootstrapModule = function (Esmodule) {
    if (!Esmodule) throw new Error('must send a root module');
    this.$rootModule = NvModule_1.factoryModule(Esmodule);
    this.$components = this.$rootModule.$components.slice();
  };
  /**
   * init InDiv and renderModuleBootstrap()
   *
   * @returns {void}
   * @memberof InDiv
   */


  InDiv.prototype.init = function () {
    if (!utils.isBrowser()) return;
    if (!this.$rootModule) throw new Error('must use bootstrapModule to declare a root NvModule before init');
    if (this.$canRenderModule) this.renderModuleBootstrap();
  };
  /**
   * render NvModule Bootstrap
   *
   * @returns {void}
   * @memberof InDiv
   */


  InDiv.prototype.renderModuleBootstrap = function () {
    if (!this.$rootModule.$bootstrap) throw new Error('need bootstrap for render Module Bootstrap');
    var BootstrapComponent = this.$rootModule.$bootstrap;
    this.renderComponent(BootstrapComponent, this.rootDom);
  };
  /**
   * expose function for render Component
   *
   * @param {Function} BootstrapComponent
   * @param {Element} renderDOM
   * @returns {*}
   * @memberof InDiv
   */


  InDiv.prototype.renderComponent = function (BootstrapComponent, renderDOM) {
    var component = DI_1.factoryCreator(BootstrapComponent, this.$rootModule);
    component.$vm = this;
    component.$components = this.$rootModule.$components;
    if (component.nvOnInit) component.nvOnInit();
    if (component.watchData) component.watchData();
    if (!component.$template) throw new Error('must decaler this.$template in bootstrap()');
    var template = component.$template;

    if (template && typeof template === 'string' && renderDOM) {
      if (component.nvBeforeMount) component.nvBeforeMount();
      this.replaceDom(component, renderDOM);
      if (component.nvAfterMount) component.nvAfterMount();
      return component;
    } else {
      throw new Error('renderBootstrap failed: template or rootDom is not exit');
    }
  };
  /**
   * render adn replace DOM
   *
   * @param {IComponent} component
   * @param {Element} renderDOM
   * @memberof InDiv
   */


  InDiv.prototype.replaceDom = function (component, renderDOM) {
    component.renderDom = renderDOM;
    component.render();
  };

  return InDiv;
}();

exports.default = InDiv;
},{"../Utils":"../../InDiv/src/Utils/index.ts","../DI":"../../InDiv/src/DI/index.ts","../NvModule":"../../InDiv/src/NvModule/index.ts"}],"../../InDiv/node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../../InDiv/node_modules/axios/node_modules/is-buffer/index.js":[function(require,module,exports) {
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],"../../InDiv/node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":"../../InDiv/node_modules/axios/lib/helpers/bind.js","is-buffer":"../../InDiv/node_modules/axios/node_modules/is-buffer/index.js"}],"../../InDiv/node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

},{}],"../../InDiv/node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"../../InDiv/node_modules/axios/lib/core/enhanceError.js"}],"../../InDiv/node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"../../InDiv/node_modules/axios/lib/core/createError.js"}],"../../InDiv/node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/helpers/btoa.js":[function(require,module,exports) {
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

},{}],"../../InDiv/node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

var settle = require('./../core/settle');

var buildURL = require('./../helpers/buildURL');

var parseHeaders = require('./../helpers/parseHeaders');

var isURLSameOrigin = require('./../helpers/isURLSameOrigin');

var createError = require('../core/createError');

var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || require('./../helpers/btoa');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false; // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

    if ("development" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;

      request.onprogress = function handleProgress() {};

      request.ontimeout = function handleTimeout() {};
    } // HTTP basic authentication


    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies'); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};
},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js","./../core/settle":"../../InDiv/node_modules/axios/lib/core/settle.js","./../helpers/buildURL":"../../InDiv/node_modules/axios/lib/helpers/buildURL.js","./../helpers/parseHeaders":"../../InDiv/node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../../InDiv/node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../../InDiv/node_modules/axios/lib/core/createError.js","./../helpers/btoa":"../../InDiv/node_modules/axios/lib/helpers/btoa.js","./../helpers/cookies":"../../InDiv/node_modules/axios/lib/helpers/cookies.js"}],"../../InDiv/node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"../../InDiv/node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../../InDiv/node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../../InDiv/node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../../InDiv/node_modules/axios/lib/adapters/xhr.js","process":"../node_modules/_process@0.11.10@process/browser.js"}],"../../InDiv/node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js"}],"../../InDiv/node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../../InDiv/node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"../../InDiv/node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../../InDiv/node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../../InDiv/node_modules/axios/lib/utils.js","./transformData":"../../InDiv/node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../../InDiv/node_modules/axios/lib/cancel/isCancel.js","../defaults":"../../InDiv/node_modules/axios/lib/defaults.js","./../helpers/isAbsoluteURL":"../../InDiv/node_modules/axios/lib/helpers/isAbsoluteURL.js","./../helpers/combineURLs":"../../InDiv/node_modules/axios/lib/helpers/combineURLs.js"}],"../../InDiv/node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var defaults = require('./../defaults');
var utils = require('./../utils');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../defaults":"../../InDiv/node_modules/axios/lib/defaults.js","./../utils":"../../InDiv/node_modules/axios/lib/utils.js","./InterceptorManager":"../../InDiv/node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../../InDiv/node_modules/axios/lib/core/dispatchRequest.js"}],"../../InDiv/node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"../../InDiv/node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"../../InDiv/node_modules/axios/lib/cancel/Cancel.js"}],"../../InDiv/node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../../InDiv/node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../../InDiv/node_modules/axios/lib/utils.js","./helpers/bind":"../../InDiv/node_modules/axios/lib/helpers/bind.js","./core/Axios":"../../InDiv/node_modules/axios/lib/core/Axios.js","./defaults":"../../InDiv/node_modules/axios/lib/defaults.js","./cancel/Cancel":"../../InDiv/node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../../InDiv/node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../../InDiv/node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../../InDiv/node_modules/axios/lib/helpers/spread.js"}],"../../InDiv/node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../../InDiv/node_modules/axios/lib/axios.js"}],"../../InDiv/src/Http/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __importDefault(require("axios"));

var NVHttp =
/** @class */
function () {
  function NVHttp() {}

  NVHttp.prototype.get = function (url, params) {
    return new Promise(function (resolve, reject) {
      var pms = params ? {
        params: params
      } : null;
      axios_1.default.get(url, pms).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e.response.data);
      });
    });
  };

  NVHttp.prototype.delete = function (url, params) {
    return new Promise(function (resolve, reject) {
      var pms = params ? {
        params: params
      } : null;
      axios_1.default.delete(url, pms).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e.response.data);
      });
    });
  };

  NVHttp.prototype.post = function (url, params) {
    return new Promise(function (resolve, reject) {
      axios_1.default.post(url, params).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e.response.data);
      });
    });
  };

  NVHttp.prototype.put = function (url, params) {
    return new Promise(function (resolve, reject) {
      axios_1.default.put(url, params).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e.response.data);
      });
    });
  };

  NVHttp.prototype.patch = function (url, params) {
    return new Promise(function (resolve, reject) {
      axios_1.default.patch(url, params).then(function (res) {
        resolve(res.data);
      }).catch(function (e) {
        reject(e.response.data);
      });
    });
  };

  return NVHttp;
}();

exports.default = NVHttp;
},{"axios":"../../InDiv/node_modules/axios/index.js"}],"../../InDiv/src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("babel-polyfill");

var Utils_1 = require("./Utils");

exports.Utils = Utils_1.default;

var Lifecycle_1 = require("./Lifecycle");

exports.OnInit = Lifecycle_1.OnInit;
exports.BeforeMount = Lifecycle_1.BeforeMount;
exports.AfterMount = Lifecycle_1.AfterMount;
exports.OnDestory = Lifecycle_1.OnDestory;
exports.HasRender = Lifecycle_1.HasRender;
exports.WatchState = Lifecycle_1.WatchState;
exports.RouteChange = Lifecycle_1.RouteChange;
exports.ReceiveProps = Lifecycle_1.ReceiveProps;
exports.SetState = Lifecycle_1.SetState;
exports.SetLocation = Lifecycle_1.SetLocation;
exports.GetLocation = Lifecycle_1.GetLocation;

var Watcher_1 = require("./Watcher");

exports.Watcher = Watcher_1.default;

var KeyWatcher_1 = require("./KeyWatcher");

exports.KeyWatcher = KeyWatcher_1.default;

var Compile_1 = require("./Compile");

exports.Compile = Compile_1.default;

var CompileUtils_1 = require("./CompileUtils");

exports.CompileUtilForRepeat = CompileUtils_1.CompileUtilForRepeat;
exports.CompileUtil = CompileUtils_1.CompileUtil;

var Component_1 = require("./Component");

exports.Component = Component_1.default;

var Router_1 = require("./Router");

exports.Router = Router_1.Router;
exports.TRouter = Router_1.TRouter;

var InDiv_1 = require("./InDiv");

exports.InDiv = InDiv_1.default;

var NvModule_1 = require("./NvModule");

exports.NvModule = NvModule_1.NvModule;
exports.factoryModule = NvModule_1.factoryModule;

var Http_1 = require("./Http");

exports.NVHttp = Http_1.default;

var DI_1 = require("./DI");

exports.Injectable = DI_1.Injectable;
exports.Injected = DI_1.Injected;
exports.injector = DI_1.injector;
exports.factoryCreator = DI_1.factoryCreator;
},{"babel-polyfill":"../../InDiv/node_modules/babel-polyfill/lib/index.js","./Utils":"../../InDiv/src/Utils/index.ts","./Lifecycle":"../../InDiv/src/Lifecycle/index.ts","./Watcher":"../../InDiv/src/Watcher/index.ts","./KeyWatcher":"../../InDiv/src/KeyWatcher/index.ts","./Compile":"../../InDiv/src/Compile/index.ts","./CompileUtils":"../../InDiv/src/CompileUtils/index.ts","./Component":"../../InDiv/src/Component/index.ts","./Router":"../../InDiv/src/Router/index.ts","./InDiv":"../../InDiv/src/InDiv/index.ts","./NvModule":"../../InDiv/src/NvModule/index.ts","./Http":"../../InDiv/src/Http/index.ts","./DI":"../../InDiv/src/DI/index.ts"}],"routes/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Router, TRouter } from 'indiv';

var src_1 = require("../../../InDiv/src");

var router = new src_1.Router();
var routes = [{
  path: '/',
  redirectTo: '/introduction',
  component: 'root-component',
  children: [{
    path: '/introduction',
    component: 'introduction-container'
  }, {
    path: '/architecture',
    component: 'architecture-container'
  }, {
    path: '/docs',
    redirectTo: '/docs/component',
    component: 'docs-container',
    children: [{
      path: '/component',
      component: 'docs-component-container'
    }, {
      path: '/template',
      component: 'docs-template-container'
    }, {
      path: '/service',
      component: 'docs-service-container'
    }, {
      path: '/module',
      component: 'docs-module-container'
    }, {
      path: '/route',
      component: 'docs-route-container'
    }, {
      path: '/indiv',
      component: 'docs-indiv-container'
    }, {
      path: '/libs',
      component: 'docs-libs-container'
    }, {
      path: '/http',
      component: 'docs-http-container'
    }]
  }, {
    path: '/ssr',
    component: 'ssr-container'
  }]
}];
router.setRootPath('/indiv-doc');
router.init(routes);

router.routeChange = function (old, next) {// console.log('$routeChange', old, next);
};

exports.default = router;
},{"../../../InDiv/src":"../../InDiv/src/index.ts"}],"pages/introduction/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"constants/introduction.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.content = function () {
  return [{
    h1: '什么是InDiv',
    p: ['InDiv 是一个mvvm库。它能帮你构建 Web 应用。InDiv 字符串模板、依赖注入和一些实践于一身。'],
    info: ['InDiv 是单词 individual 的缩写，我在设计时借鉴了很多 angular 和 react 的模式与概念。', '本网页是世界上第一个用 InDiv 构建的网页。', '在此致敬 angular 和 react的开发者们。感谢他们为前端做出的巨大贡献。']
  }, {
    h1: '基本假设',
    p: ['本文档假设你已经熟悉了 JavaScript，TypeScript，和来自最新标准的一些知识，比如 class 和 esmodule。', '下列代码范例都是用最新版本的 TypeScript 写的，利用 类型 实现依赖注入，并使用装饰器来提供元数据。']
  }, {
    h1: '基本理念',
    p: ['InDiv 基于 mvvm, 本身使用 TypeScript编写。', '它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。'],
    info: ['InDiv 基本构造块是 NvModule，它为组件提供了编译的上下文环境和作用域', '整个app的最小单位为 Component，页面上的一切皆为组件']
  }, {
    h1: '反馈',
    p: ['你可以和我一起做贡献！你可以到 Github 上的仓库中提出文档方面的问题，并创建Pull Requests。', '或者在 github 上联系我：DimaLiLongJi']
  }];
};
},{}],"pages/introduction/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var introduction_1 = require("../../constants/introduction");

var IntroductionContainer =
/** @class */
function () {
  function IntroductionContainer() {
    this.state = {
      info: introduction_1.content()
    };
  }

  IntroductionContainer = __decorate([src_1.Component({
    selector: 'introduction-container',
    template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let pp in info.p\">{{pp}}</p>\n                <div class=\"child-info\" nv-if=\"info.info\">\n                    <div class=\"pchild\">\n                        <p nv-repeat=\"let child in info.info\">{{child}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
  }), __metadata("design:paramtypes", [])], IntroductionContainer);
  return IntroductionContainer;
}();

exports.default = IntroductionContainer;
},{"./style.less":"pages/introduction/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/introduction":"constants/introduction.ts"}],"modules/introduction.module.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { NvModule } from 'indiv';

var src_1 = require("../../../InDiv/src");

var introduction_1 = __importDefault(require("../pages/introduction"));

var IntroductionModule =
/** @class */
function () {
  function IntroductionModule() {}

  IntroductionModule = __decorate([src_1.NvModule({
    imports: [],
    components: [introduction_1.default],
    providers: [],
    exports: [introduction_1.default]
  })], IntroductionModule);
  return IntroductionModule;
}();

exports.default = IntroductionModule;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/introduction":"pages/introduction/index.ts"}],"pages/architecture/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"constants/start.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.content = function () {
  return [{
    h1: '架构概览',
    p: ['InDiv 是一个 TypeScript 构建客户端应用的平台与框架。', 'InDiv 本身使用 TypeScript 写成的。', '它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。'],
    info: ['InDiv 的基本构造块是 NvModule，它为组件提供了编译的上下文环境和作用域。', 'NvModule 会把相关的一些功能收集到集中工具函数中。', 'InDiv 应用就是由一组 NvModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多其他模块。', 'Component 作为页面元素的基本单位，由定义的 NvModule 统一提供给编译器或路由使用。', 'Route 被委托管理页面渲染，根据访问的url的不同来获取不用的识图渲染。']
  }, {
    h1: '模块',
    p: ['NvModule 作为整个应用的基本构造块，可以从其他 NvModule 引入或是导出 Component , 也可以导入 Service 为全局使用或是本模块。'],
    info: ['每个 InDiv 应用都有一个根模块，通常命名为 AppModule。', '根模块提供了用来启动应用的引导机制', '一个应用通常会包含很多功能模块，它们最后都应该被导入根模块中。']
  }, {
    h1: '组件',
    p: ['组件控制屏幕上被称为视图的一小片区域。为识图提供交互和渲染模板'],
    info: ['每个 InDiv 应用都至少有一个组件，也就是根组件，它会把组件树和页面中的 DOM 连接起来。', '每个组件都会定义一个类，其中包含应用的数据和逻辑，并与一个 字符串 模板相关联，该模板定义了一个供目标环境下显示的视图。']
  }, {
    h1: '服务',
    p: ['服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。', 'InDiv 把组件和服务区分开，以提高模块性和复用性。'],
    info: ['对于与特定视图无关并希望跨组件共享的数据或逻辑，可以创建服务类。', '服务类的定义通常紧跟在 “@Injectable” 装饰器之后。', '该装饰器提供的元数据可以让你的服务作为依赖被注入到客户组件中。', '依赖注入（或 DI）让你可以保持组件类的精简和高效。有了 DI，组件就不用从服务器获取数据、验证用户输入或直接把日志写到控制台，而是会把这些任务委托给服务。']
  }, {
    h1: '路由',
    p: ['浏览器具有熟悉的导航模式，在地址栏输入 URL，浏览器就会导航到相应的页面。 InDiv 的 Router（即“路由器”）借鉴了这个模型。', '它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。'],
    info: ['要定义导航规则，你就要把导航路径和你的组件关联起来。', ' 路径（path）使用类似 URL 的语法来和程序数据整合在一起，就像模板语法会把你的视图和程序数据整合起来一样。', '然后你就可以用程序逻辑来决定要显示或隐藏哪些视图，以根据你制定的访问规则对用户的输入做出响应。']
  }];
};
},{}],"pages/architecture/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var start_1 = require("../../constants/start");

var ArchitectureContainer =
/** @class */
function () {
  function ArchitectureContainer() {
    this.state = {
      info: start_1.content()
    };
  }

  ArchitectureContainer = __decorate([src_1.Component({
    selector: 'architecture-container',
    template: "\n    <div class=\"page-container\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n          <h1>{{info.h1}}</h1>\n          <p nv-repeat=\"let pp in info.p\">{{pp}}</p>\n          <div class=\"child-info\" nv-if=\"info.info\">\n              <div class=\"pchild\">\n                  <p nv-repeat=\"let child in info.info\">{{child}}</p>\n              </div>\n          </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], ArchitectureContainer);
  return ArchitectureContainer;
}();

exports.default = ArchitectureContainer;
},{"./style.less":"pages/architecture/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/start":"constants/start.ts"}],"modules/architecture.module.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { NvModule } from 'indiv';

var src_1 = require("../../../InDiv/src");

var architecture_1 = __importDefault(require("../pages/architecture"));

var ArchitectureModule =
/** @class */
function () {
  function ArchitectureModule() {}

  ArchitectureModule = __decorate([src_1.NvModule({
    components: [architecture_1.default],
    exports: [architecture_1.default]
  })], ArchitectureModule);
  return ArchitectureModule;
}();

exports.default = ArchitectureModule;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/architecture":"pages/architecture/index.ts"}],"pages/docs/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"pages/docs/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var DocsContainer =
/** @class */
function () {
  function DocsContainer() {}

  DocsContainer.prototype.nvRouteChange = function (lastRoute, newRoute) {
    console.log('DocsContainer nvRouteChange', lastRoute, newRoute);
  };

  DocsContainer = __decorate([src_1.Component({
    selector: 'docs-container',
    template: "\n      <div class=\"page-container\">\n        <router-render></router-render>\n      </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsContainer);
  return DocsContainer;
}();

exports.default = DocsContainer;
},{"./style.less":"pages/docs/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"constants/component.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.componentInfo = function () {
  return [{
    h1: '组件与模板',
    p: ['在 InDiv 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 InDiv 组件的属性。'],
    info: [{
      title: '装饰器 Component',
      p: ['@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 InDiv 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。', '@Component 接收3个参数: selector, template, providers'],
      pchild: ['1. selector: string; 作为组件（component）被渲染成 DOM 的标签，类似于 <div>', '2. template: string; 视图模板，用来声明被渲染的视图', '3. providers?: (Function | { provide: any; useClass: Function; } | { provide: any; useValue: any; })[]; 声明可以被组件注入的服务。', '4. 在 JavaScript 中，只能把 装饰器Component 当做一个函数使用，最后应该导出被声明的类。', '5. 组件会优先去组件 providers 查找依赖，其次才会去模块 providers 查找依赖。', '6. 组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。', '7. 在 TypeScript 中 providers 仅仅能使用 providers: (Function | { provide: Function; useClass: Function; } | { provide: Function; useValue: any; })[]; 类型', '8. 在 JavaScript 中 providers 仅仅能使用 providers: ({ provide: string; useClass: Function; } | { provide: string; useValue: any; })[]; 类型'],
      code: "\n  // in TypeScript\n  @Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{state.a}}</div>\n    '),\n    providers: [\n      TestService,\n      {\n        provide: TestService1,\n        useClass: TestService1,\n      },\n      {\n        provide: TestService2,\n        useClass: '123',\n      },\n    ],\n  })\n  export default class ContainerComponent {\n    public state: {\n      a: number;\n    };\n\n    constructor(\n      private: testService: TestService\n    ) {\n      this.state = {\n        a: 1\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class ContainerComponent {\n    static injectTokens = [\n      'testService'\n    ];\n\n    constructor(testService) {\n      this.testService = testService;\n      this.state = {\n        a: 1\n      };\n    }\n  }\n  Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{state.a}}</div>\n    '),\n    providers: [\n      {\n        provide: 'testService',\n        useClass: TestService,\n      },\n      {\n        provide: 'testService1',\n        useClass: TestService1,\n      },\n      {\n        provide: 'testService2',\n        useClass: '123',\n      },\n    ],\n  })(ContainerComponent)\n "
    }, {
      title: '模板数据绑定',
      p: ['如果没有框架，你就要自己负责把数据渲染到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。', 'InDiv 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。'],
      pchild: ['1. 往模板HTML字符串中添加绑定 nv- 开头的标记可以告诉 InDiv 该如何渲染它们。', '2. 因为 InDiv 使用单向数据流，所以仅仅支持使用 this.state 内的值 或是 有返回值的实例上的方法 作为绑定数据， 实例的方法作为事件方法。', '3. 如果要在组件内使用 props ，请在 nvReceiveProps 或 nvOnInit 生命周期内用 props 对 state 赋值。', '4. 如果组件在 根模块（root NvModule）或模块（NvModule） 上的 components：Function[]; 声明过，则在其他同模块组件内的 template 可以像 HTML 标签一样使用组件。', '4. 模板上的组件可接受的 props的值 必须用 {} 包裹起来。', '5. props的值 有三种: <test-component man="{@countState(man.name)}" women="{man.name}" handler="{@getProps}"></test-component>', '(1) 直接使用 state上的值 或 nv-repeat 的值：women="{state.name} women="{man.name}"', '(2) 使用 @ 加 实例上带有返回值的方法，返回值将作为被传递的值：man="{@countState(man.name)}"', '(3) 使用 @ 加 实例上的方法，方法将作为 props 传递：handler="{@getProps}"'],
      code: "\n  @Component({\n    selector: 'container-component',\n    template: ('\n      <div nv-on:click=\"@show(state.a)\">\n        ContainerComponent {{state.a}}\n        <test-component valueA=\"{state.a}\" show=\"{@show}\"></test-component>\n      </div>\n      '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: null,\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.a = nextProps.a;\n    }\n  }\n "
    }, {
      title: '组件通信1: props 与 state',
      p: ['InDiv 的组件之间可以 props 来通信。', '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件调用来更改对应父组件的值来完成通信。'],
      pchild: ['1. 可以直接在 template 上使用在 NvModule 注册过的组件标签，并通过 propValue="{state.value}" propValue="{@returnValue(state.value)}" propFunction="{@fn}" 的引号包裹花括号的写法传递值与方法。', '2. 例如在下面例子，在 hero-component 内可以用循环 nv-repeat 的value，也可以使用 实例上有返回值的方法，也可以直接在实例方法中触发 handelClick 回调。', '3. 如果该 DOM 会发生频繁变化，并且有可追踪的唯一 key 值，可以添加指令 nv-key, 让 InDiv 直接追踪到 DOM 变化，帮助保存 组件 内的 state。', '4. 但是渲染的时候，不可以在模板上直接使用 props 的值，仅仅可以使用 class 实例的方法和 this.state 的值。', '5. 在生命周期 constructor 和 nvOnInit 之后，会开启对 this.state 的监听，此监听会监听每个挂载到 this.state 上的属性及属性的属性，因此如果不对 this.state 添加新的属性或对属性的属性添加新的属性的话，可以直接对某个属性赋值。', '6. 相反，如果要对 this.state 上的属性 增加属性或删除，则需要使用  setState<S>(newState: {[key: string]: S}) 方法对 this.state 重新添加监听', '7. 可以直接引用 InDiv 的 SetState 来为 setState方法声明类型。'],
      code: "\n  import { Component, SetState, OnInit, ReceiveProps } from 'InDiv';\n  @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{state.stateValue}}</p>\n        <p>idValue: {{state.idValue}}</p>\n      </div>\n    '),\n  })\n  export default class HeroComponent implements OnInit, ReceiveProps {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n  }\n\n @Component({\n    selector: 'container-component',\n    template: ('\n      <div>\n        <div nv-repeat=\"let person in state.b\" nv-key=\"person.id\">\n          <hero-component handelClick=\"@show\" stateValue=\"state.a\" idValue=\"person.id\" ></hero-component>\n        </div>\n      </div>\n    '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: {\n          id: 3,\n          name: '\u7801\u519C3',\n        },\n        b: [\n          {id: 1, name: '\u7801\u519C1'},\n          {id: 2, name: '\u7801\u519C2'},\n        ],\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n  }\n "
    }, {
      title: '组件通信2: service 与 RxJS',
      p: ['父子组件的通信可以通过 props , 但跨层级组件间的通信该怎么办？', '相比于构建全局变量，InDiv 的服务显然更适合这种场景。'],
      pchild: ['1. InDiv 的组件之间可以通过注入同一个 单例service。（既全局仅仅产生一个实例）', '2. 通过 RxJS 实现订阅与通知（RxJS 详细：https://rxjs-dev.firebaseapp.com/）', '3. 通过RxJS可观察者对象，获得组件之间通信或状态变更', '4. 在 nvOnDestory 生命周期钩子里取消订阅']
    }, {
      title: '组件的依赖注入',
      p: ['通过依赖注入系统，可以无需关注任何过程直接拿到一个所需的服务实例。', '每个组件实例都拥有一个同级的注入器，负责调用组件和模块的 providers，获取组件依赖的实例。', '在 TypeScript 与 JavaScript 中，声明依赖的方式不一样', '组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。'],
      pchild: ['1. 在 TypeScript 中，通过 @Injected 注解，获取组件的构造函数中参数的类型，根据 provide: Function  查找依赖，并注入实例。', '2. 在 JavaScript 中，通过组件类的静态属性 injectTokens: string[]，查找 provide: string 查找依赖，并注入实例。', '3. 优先查找组件中被声明的服务，其次再在模块中被声明的服务中查找依赖'],
      code: "\n import { Component, Injected } from 'InDiv';\n \n // in TypeScript\n @Injected\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{state.stateValue}}</p>\n      </div>\n    '),\n    providers: [ HeroService ],\n  })\n  export default class HeroComponent {\n    public state: any;\n\n    constructor(\n      private heroService: HeroService\n    ) {}\n\n    public nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class HeroComponent {\n    static injectTokens = [\n      'heroService'\n    ];\n\n    constructor(heroService) {\n      this.heroService = heroService;\n    }\n\n    nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n  Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{state.stateValue}}</p>\n      </div>\n    '),\n    providers: [{\n      provide: 'heroService',\n      useClass: HeroService,\n    }],\n  })(HeroComponent);\n "
    }, {
      title: '生命周期钩子',
      p: ['每个组件都有一个被 InDiv 管理的生命周期。', '生命周期钩子其实就是定义在实例中的一些方法，在 InDiv 中，通过不同的时刻调用不同的生命周期钩子，', '赋予你在它们发生时采取行动的能力。', '在 TypeScript 中，引用 InDiv 提供的 interface，通过 implements 的方式让类去实现被预先定义好的生命周期，而在 JavaScript 中，你只能自己手动去定义应该实现的生命周期方法。'],
      pchild: ['1. constructor 在类被实例化的时候回触发，你可以在这里预先定义你的 state', '2. nvOnInit(): void; constructor 之后，在这个生命周期中，可以通过 this.props 获取 props，并定义 state，此生命周期会在开启监听前被触发，并且之后再也不会触发', '3. nvBeforeMount(): void; 在 nvOnInit 之后，template 挂载页面之前被触发，每次触发渲染页面都会被触发', '4. nvAfterMount(): void; 在 nvBeforeMount 之后，template 挂载页面之后被触发，每次触发渲染页面（render）都会被触发', '5. nvHasRender(): void; 在 nvAfterMount 之后，渲染完成后被触发，每次触发渲染页面（render）都会被触发', '6. nvRouteChange(lastRoute?: string, newRoute?: string): void; 监听路由变化，当更换路由后被触发', '7. nvOnDestory(): void; 仅仅在路由决定销毁此组件时被触发', '8. nvWatchState(oldState?: any): void; 监听 state 变化，当 state 被更改后触发', '9. nvReceiveProps(nextProps: any): void; 监听 props 变化，当 props 即将被更改时触发'],
      code: "\n import { Component, OnInit, BeforeMount, AfterMount, HasRender, OnDestory, WatchState, ReceiveProps } from 'InDiv';\n\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{state.stateValue}}</p>\n        <p>idValue: {{state.idValue}}</p>\n      </div>\n    '),\n  })\n  class HeroComponent implements\n    OnInit,\n    BeforeMount,\n    AfterMount,\n    HasRender,\n    WatchState,\n    ReceiveProps,\n  {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n    }\n\n    public nvBeforeMount() {\n      console.log('component in BeforeMount');\n    }\n\n    public nvAfterMount() {\n      console.log('component in AfterMount');\n    }\n\n    public nvHasRender() {\n      console.log('component in HasRender');\n    }\n\n    public nvWatchState(oldState?: any) {\n      console.log('component in WatchState');\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n  }\n "
    }]
  }];
};
},{}],"../node_modules/rxjs/node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../node_modules/rxjs/_esm5/internal/util/isFunction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
  return typeof x === 'function';
}
},{}],"../node_modules/rxjs/_esm5/internal/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error =
      /*@__PURE__*/
      new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      /*@__PURE__*/
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};
exports.config = config;
},{}],"../node_modules/rxjs/_esm5/internal/util/hostReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hostReportError = hostReportError;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
  setTimeout(function () {
    throw err;
  });
}
},{}],"../node_modules/rxjs/_esm5/internal/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = void 0;

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      (0, _hostReportError.hostReportError)(err);
    }
  },
  complete: function () {}
};
exports.empty = empty;
},{"./config":"../node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../node_modules/rxjs/_esm5/internal/util/isArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

exports.isArray = isArray;
},{}],"../node_modules/rxjs/_esm5/internal/util/isObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
  return x != null && typeof x === 'object';
}
},{}],"../node_modules/rxjs/_esm5/internal/util/errorObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorObject = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = {
  e: {}
};
exports.errorObject = errorObject;
},{}],"../node_modules/rxjs/_esm5/internal/util/tryCatch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryCatch = tryCatch;

var _errorObject = require("./errorObject");

/** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */
var tryCatchTarget;

function tryCatcher() {
  try {
    return tryCatchTarget.apply(this, arguments);
  } catch (e) {
    _errorObject.errorObject.e = e;
    return _errorObject.errorObject;
  }
}

function tryCatch(fn) {
  tryCatchTarget = fn;
  return tryCatcher;
}
},{"./errorObject":"../node_modules/rxjs/_esm5/internal/util/errorObject.js"}],"../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
  Error.call(this);
  this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
    return i + 1 + ") " + err.toString();
  }).join('\n  ') : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
  return this;
}

UnsubscriptionErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
exports.UnsubscriptionError = UnsubscriptionError;
},{}],"../node_modules/rxjs/_esm5/internal/Subscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;

var _isArray = require("./util/isArray");

var _isObject = require("./util/isObject");

var _isFunction = require("./util/isFunction");

var _tryCatch = require("./util/tryCatch");

var _errorObject = require("./util/errorObject");

var _UnsubscriptionError = require("./util/UnsubscriptionError");

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription =
/*@__PURE__*/
function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var hasErrors = false;
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;
    var index = -1;
    var len = _parents ? _parents.length : 0;

    while (_parent) {
      _parent.remove(this);

      _parent = ++index < len && _parents[index] || null;
    }

    if ((0, _isFunction.isFunction)(_unsubscribe)) {
      var trial = (0, _tryCatch.tryCatch)(_unsubscribe).call(this);

      if (trial === _errorObject.errorObject) {
        hasErrors = true;
        errors = errors || (_errorObject.errorObject.e instanceof _UnsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(_errorObject.errorObject.e.errors) : [_errorObject.errorObject.e]);
      }
    }

    if ((0, _isArray.isArray)(_subscriptions)) {
      index = -1;
      len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if ((0, _isObject.isObject)(sub)) {
          var trial = (0, _tryCatch.tryCatch)(sub.unsubscribe).call(sub);

          if (trial === _errorObject.errorObject) {
            hasErrors = true;
            errors = errors || [];
            var err = _errorObject.errorObject.e;

            if (err instanceof _UnsubscriptionError.UnsubscriptionError) {
              errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
            } else {
              errors.push(err);
            }
          }
        }
      }
    }

    if (hasErrors) {
      throw new _UnsubscriptionError.UnsubscriptionError(errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    if (!teardown || teardown === Subscription.EMPTY) {
      return Subscription.EMPTY;
    }

    if (teardown === this) {
      return this;
    }

    var subscription = teardown;

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (typeof subscription._addParent !== 'function') {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
    }

    var subscriptions = this._subscriptions || (this._subscriptions = []);
    subscriptions.push(subscription);

    subscription._addParent(this);

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.prototype._addParent = function (parent) {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    if (!_parent || _parent === parent) {
      this._parent = parent;
    } else if (!_parents) {
      this._parents = [parent];
    } else if (_parents.indexOf(parent) === -1) {
      _parents.push(parent);
    }
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();

exports.Subscription = Subscription;

function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof _UnsubscriptionError.UnsubscriptionError ? err.errors : err);
  }, []);
}
},{"./util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","./util/isObject":"../node_modules/rxjs/_esm5/internal/util/isObject.js","./util/isFunction":"../node_modules/rxjs/_esm5/internal/util/isFunction.js","./util/tryCatch":"../node_modules/rxjs/_esm5/internal/util/tryCatch.js","./util/errorObject":"../node_modules/rxjs/_esm5/internal/util/errorObject.js","./util/UnsubscriptionError":"../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js"}],"../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$rxSubscriber = exports.rxSubscriber = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function' ?
/*@__PURE__*/
Symbol('rxSubscriber') : '@@rxSubscriber_' +
/*@__PURE__*/
Math.random();
exports.rxSubscriber = rxSubscriber;
var $$rxSubscriber = rxSubscriber;
exports.$$rxSubscriber = $$rxSubscriber;
},{}],"../node_modules/rxjs/_esm5/internal/Subscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SafeSubscriber = exports.Subscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isFunction = require("./util/isFunction");

var _Observer = require("./Observer");

var _Subscription = require("./Subscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

var _config = require("./config");

var _hostReportError = require("./util/hostReportError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;
    _this._parentSubscription = null;

    switch (arguments.length) {
      case 0:
        _this.destination = _Observer.empty;
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = _Observer.empty;
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[_rxSubscriber.rxSubscriber] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    this._parent = null;
    this._parents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parent = _parent;
    this._parents = _parents;
    this._parentSubscription = null;
    return this;
  };

  return Subscriber;
}(_Subscription.Subscription);

exports.Subscriber = Subscriber;

var SafeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if ((0, _isFunction.isFunction)(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer.empty) {
        context = Object.create(observerOrNext);

        if ((0, _isFunction.isFunction)(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        (0, _hostReportError.hostReportError)(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          (0, _hostReportError.hostReportError)(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        (0, _hostReportError.hostReportError)(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!_config.config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        (0, _hostReportError.hostReportError)(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./util/isFunction":"../node_modules/rxjs/_esm5/internal/util/isFunction.js","./Observer":"../node_modules/rxjs/_esm5/internal/Observer.js","./Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../internal/symbol/rxSubscriber":"../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","./config":"../node_modules/rxjs/_esm5/internal/config.js","./util/hostReportError":"../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../node_modules/rxjs/_esm5/internal/util/canReportError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canReportError = canReportError;

var _Subscriber = require("../Subscriber");

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber.Subscriber) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}
},{"../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../node_modules/rxjs/_esm5/internal/util/toSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require("../Subscriber");

var _rxSubscriber = require("../symbol/rxSubscriber");

var _Observer = require("../Observer");

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber.Subscriber) {
      return nextOrObserver;
    }

    if (nextOrObserver[_rxSubscriber.rxSubscriber]) {
      return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber.Subscriber(_Observer.empty);
  }

  return new _Subscriber.Subscriber(nextOrObserver, error, complete);
}
},{"../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","../symbol/rxSubscriber":"../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js","../Observer":"../node_modules/rxjs/_esm5/internal/Observer.js"}],"../node_modules/rxjs/_esm5/internal/symbol/observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
exports.observable = observable;
},{}],"../node_modules/rxjs/_esm5/internal/util/noop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
},{}],"../node_modules/rxjs/_esm5/internal/util/pipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _noop = require("./noop");

/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

function pipeFromArray(fns) {
  if (!fns) {
    return _noop.noop;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}
},{"./noop":"../node_modules/rxjs/_esm5/internal/util/noop.js"}],"../node_modules/rxjs/_esm5/internal/Observable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var _canReportError = require("./util/canReportError");

var _toSubscriber = require("./util/toSubscriber");

var _observable = require("../internal/symbol/observable");

var _pipe = require("./util/pipe");

var _config = require("./config");

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable =
/*@__PURE__*/
function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);

    if (operator) {
      operator.call(sink, this.source);
    } else {
      sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (_config.config.useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config.config.useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if ((0, _canReportError.canReportError)(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[_observable.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return (0, _pipe.pipeFromArray)(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config.config.Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}
},{"./util/canReportError":"../node_modules/rxjs/_esm5/internal/util/canReportError.js","./util/toSubscriber":"../node_modules/rxjs/_esm5/internal/util/toSubscriber.js","../internal/symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js","./util/pipe":"../node_modules/rxjs/_esm5/internal/util/pipe.js","./config":"../node_modules/rxjs/_esm5/internal/config.js"}],"../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
},{}],"../node_modules/rxjs/_esm5/internal/SubjectSubscription.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubjectSubscription = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(_Subscription.Subscription);

exports.SubjectSubscription = SubjectSubscription;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../node_modules/rxjs/_esm5/internal/Subject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("./Observable");

var _Subscriber = require("./Subscriber");

var _Subscription = require("./Subscription");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

var _rxSubscriber = require("../internal/symbol/rxSubscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(_Subscriber.Subscriber);

exports.SubjectSubscriber = SubjectSubscriber;

var Subject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[_rxSubscriber.rxSubscriber] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable.Observable);

exports.Subject = Subject;

var AnonymousSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription.Subscription.EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","./Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","./util/ObjectUnsubscribedError":"../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"../node_modules/rxjs/_esm5/internal/SubjectSubscription.js","../internal/symbol/rxSubscriber":"../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js"}],"../node_modules/rxjs/_esm5/internal/operators/refCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = refCount;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("../Subject");

var _Observable = require("../Observable");

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _refCount = require("../operators/refCount");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new _Subscription.Subscription();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription.Subscription.EMPTY;
      } else {
        this._connection = connection;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return (0, _refCount.refCount)()(this);
  };

  return ConnectableObservable;
}(_Observable.Observable);

exports.ConnectableObservable = ConnectableObservable;
var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
  operator: {
    value: null
  },
  _refCount: {
    value: 0,
    writable: true
  },
  _subject: {
    value: null,
    writable: true
  },
  _connection: {
    value: null,
    writable: true
  },
  _subscribe: {
    value: connectableProto._subscribe
  },
  _isComplete: {
    value: connectableProto._isComplete,
    writable: true
  },
  getSubject: {
    value: connectableProto.getSubject
  },
  connect: {
    value: connectableProto.connect
  },
  refCount: {
    value: connectableProto.refCount
  }
};
exports.connectableObservableDescriptor = connectableObservableDescriptor;

var ConnectableSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(_Subject.SubjectSubscriber);

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subject":"../node_modules/rxjs/_esm5/internal/Subject.js","../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../operators/refCount":"../node_modules/rxjs/_esm5/internal/operators/refCount.js"}],"../node_modules/rxjs/_esm5/internal/operators/groupBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = groupBy;
exports.GroupedObservable = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Subscription = require("../Subscription");

var _Observable = require("../Observable");

var _Subject = require("../Subject");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

var GroupByOperator =
/*@__PURE__*/
function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new _Subject.Subject();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(_Subscriber.Subscriber);

var GroupDurationSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(_Subscriber.Subscriber);

var GroupedObservable =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new _Subscription.Subscription();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(_Observable.Observable);

exports.GroupedObservable = GroupedObservable;

var InnerRefCountSubscription =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(_Subscription.Subscription);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subject":"../node_modules/rxjs/_esm5/internal/Subject.js"}],"../node_modules/rxjs/_esm5/internal/BehaviorSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
var BehaviorSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject.Subject);

exports.BehaviorSubject = BehaviorSubject;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subject":"../node_modules/rxjs/_esm5/internal/Subject.js","./util/ObjectUnsubscribedError":"../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/Action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription.Subscription);

exports.Action = Action;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Action = require("./Action");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(_Action.Action);

exports.AsyncAction = AsyncAction;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Action":"../node_modules/rxjs/_esm5/internal/scheduler/Action.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction.AsyncAction);

exports.QueueAction = QueueAction;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../node_modules/rxjs/_esm5/internal/Scheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var Scheduler =
/*@__PURE__*/
function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();

exports.Scheduler = Scheduler;
},{}],"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Scheduler = require("../Scheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Scheduler":"../node_modules/rxjs/_esm5/internal/Scheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = void 0;

var _QueueAction = require("./QueueAction");

var _QueueScheduler = require("./QueueScheduler");

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queue =
/*@__PURE__*/
new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
exports.queue = queue;
},{"./QueueAction":"../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js","./QueueScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js"}],"../node_modules/rxjs/_esm5/internal/observable/empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.emptyScheduled = emptyScheduled;
exports.EMPTY = void 0;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
var EMPTY =
/*@__PURE__*/
new _Observable.Observable(function (subscriber) {
  return subscriber.complete();
});
exports.EMPTY = EMPTY;

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}

function emptyScheduled(scheduler) {
  return new _Observable.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js"}],"../node_modules/rxjs/_esm5/internal/util/isScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = isScheduler;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}
},{}],"../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToArray = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    if (!subscriber.closed) {
      subscriber.complete();
    }
  };
};

exports.subscribeToArray = subscribeToArray;
},{}],"../node_modules/rxjs/_esm5/internal/observable/fromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromArray = fromArray;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _subscribeToArray = require("../util/subscribeToArray");

/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
function fromArray(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToArray.subscribeToArray)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      var i = 0;
      sub.add(scheduler.schedule(function () {
        if (i === input.length) {
          subscriber.complete();
          return;
        }

        subscriber.next(input[i++]);

        if (!subscriber.closed) {
          sub.add(this.schedule());
        }
      }));
      return sub;
    });
  }
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToArray":"../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js"}],"../node_modules/rxjs/_esm5/internal/observable/scalar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scalar = scalar;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function scalar(value) {
  var result = new _Observable.Observable(function (subscriber) {
    subscriber.next(value);
    subscriber.complete();
  });
  result._isScalar = true;
  result.value = value;
  return result;
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js"}],"../node_modules/rxjs/_esm5/internal/observable/of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = of;

var _isScheduler = require("../util/isScheduler");

var _fromArray = require("./fromArray");

var _empty = require("./empty");

var _scalar = require("./scalar");

/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */
function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if ((0, _isScheduler.isScheduler)(scheduler)) {
    args.pop();
  } else {
    scheduler = undefined;
  }

  switch (args.length) {
    case 0:
      return (0, _empty.empty)(scheduler);

    case 1:
      return scheduler ? (0, _fromArray.fromArray)(args, scheduler) : (0, _scalar.scalar)(args[0]);

    default:
      return (0, _fromArray.fromArray)(args, scheduler);
  }
}
},{"../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js","./scalar":"../node_modules/rxjs/_esm5/internal/observable/scalar.js"}],"../node_modules/rxjs/_esm5/internal/observable/throwError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = throwError;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function throwError(error, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js"}],"../node_modules/rxjs/_esm5/internal/Notification.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var _empty = require("./observable/empty");

var _of = require("./observable/of");

var _throwError = require("./observable/throwError");

/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
var Notification =
/*@__PURE__*/
function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case 'N':
        return observer.next && observer.next(this.value);

      case 'E':
        return observer.error && observer.error(this.error);

      case 'C':
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return next && next(this.value);

      case 'E':
        return error && error(this.error);

      case 'C':
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case 'N':
        return (0, _of.of)(this.value);

      case 'E':
        return (0, _throwError.throwError)(this.error);

      case 'C':
        return (0, _empty.empty)();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification('N', value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification('E', undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification('C');
  Notification.undefinedValueNotification = new Notification('N', undefined);
  return Notification;
}();

exports.Notification = Notification;
},{"./observable/empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js","./observable/of":"../node_modules/rxjs/_esm5/internal/observable/of.js","./observable/throwError":"../node_modules/rxjs/_esm5/internal/observable/throwError.js"}],"../node_modules/rxjs/_esm5/internal/operators/observeOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = observeOn;
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

var _Notification = require("../Notification");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

var ObserveOnOperator =
/*@__PURE__*/
function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();

exports.ObserveOnOperator = ObserveOnOperator;

var ObserveOnSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ObserveOnSubscriber, _super);

  function ObserveOnSubscriber(destination, scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    var _this = _super.call(this, destination) || this;

    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  ObserveOnSubscriber.dispatch = function (arg) {
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(_Notification.Notification.createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(_Notification.Notification.createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(_Notification.Notification.createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(_Subscriber.Subscriber);

exports.ObserveOnSubscriber = ObserveOnSubscriber;

var ObserveOnMessage =
/*@__PURE__*/
function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();

exports.ObserveOnMessage = ObserveOnMessage;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","../Notification":"../node_modules/rxjs/_esm5/internal/Notification.js"}],"../node_modules/rxjs/_esm5/internal/ReplaySubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _queue = require("./scheduler/queue");

var _Subscription = require("./Subscription");

var _observeOn = require("./operators/observeOn");

var _ObjectUnsubscribedError = require("./util/ObjectUnsubscribedError");

var _SubjectSubscription = require("./SubjectSubscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
var ReplaySubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ReplaySubject, _super);

  function ReplaySubject(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }

    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this) || this;

    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
    var _events = this._events;

    _events.push(value);

    if (_events.length > this._bufferSize) {
      _events.shift();
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype.nextTimeWindow = function (value) {
    this._events.push(new ReplayEvent(this._getNow(), value));

    this._trimBufferThenGetEvents();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;

    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;

    if (this.closed) {
      throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription.Subscription.EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription.SubjectSubscription(this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || _queue.queue).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  };

  return ReplaySubject;
}(_Subject.Subject);

exports.ReplaySubject = ReplaySubject;

var ReplayEvent =
/*@__PURE__*/
function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subject":"../node_modules/rxjs/_esm5/internal/Subject.js","./scheduler/queue":"../node_modules/rxjs/_esm5/internal/scheduler/queue.js","./Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","./operators/observeOn":"../node_modules/rxjs/_esm5/internal/operators/observeOn.js","./util/ObjectUnsubscribedError":"../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./SubjectSubscription":"../node_modules/rxjs/_esm5/internal/SubjectSubscription.js"}],"../node_modules/rxjs/_esm5/internal/AsyncSubject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subject = require("./Subject");

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
var AsyncSubject =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription.Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return _Subscription.Subscription.EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(_Subject.Subject);

exports.AsyncSubject = AsyncSubject;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subject":"../node_modules/rxjs/_esm5/internal/Subject.js","./Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../node_modules/rxjs/_esm5/internal/util/Immediate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Immediate = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};

function runIfPresent(handle) {
  var cb = tasksByHandle[handle];

  if (cb) {
    cb();
  }
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function (handle) {
    delete tasksByHandle[handle];
  }
};
exports.Immediate = Immediate;
},{}],"../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Immediate = require("../util/Immediate");

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
var AsapAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _Immediate.Immediate.clearImmediate(id);

      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction.AsyncAction);

exports.AsapAction = AsapAction;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../util/Immediate":"../node_modules/rxjs/_esm5/internal/util/Immediate.js","./AsyncAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/asap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = void 0;

var _AsapAction = require("./AsapAction");

var _AsapScheduler = require("./AsapScheduler");

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asap =
/*@__PURE__*/
new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
exports.asap = asap;
},{"./AsapAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js","./AsapScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/async.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = void 0;

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var async =
/*@__PURE__*/
new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
exports.async = async;
},{"./AsyncAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = void 0;

var _AnimationFrameAction = require("./AnimationFrameAction");

var _AnimationFrameScheduler = require("./AnimationFrameScheduler");

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrame =
/*@__PURE__*/
new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
exports.animationFrame = animationFrame;
},{"./AnimationFrameAction":"../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js","./AnimationFrameScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js"}],"../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _AsyncAction = require("./AsyncAction");

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var VirtualTimeScheduler =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction.AsyncAction);

exports.VirtualAction = VirtualAction;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./AsyncAction":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js","./AsyncScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js"}],"../node_modules/rxjs/_esm5/internal/util/identity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
  return x;
}
},{}],"../node_modules/rxjs/_esm5/internal/util/isObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = isObservable;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function isObservable(obj) {
  return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js"}],"../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
  Error.call(this);
  this.message = 'argument out of range';
  this.name = 'ArgumentOutOfRangeError';
  return this;
}

ArgumentOutOfRangeErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
},{}],"../node_modules/rxjs/_esm5/internal/util/EmptyError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
  Error.call(this);
  this.message = 'no elements in sequence';
  this.name = 'EmptyError';
  return this;
}

EmptyErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
exports.EmptyError = EmptyError;
},{}],"../node_modules/rxjs/_esm5/internal/util/TimeoutError.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeoutError = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
exports.TimeoutError = TimeoutError;
},{}],"../node_modules/rxjs/_esm5/internal/operators/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.MapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

var MapOperator =
/*@__PURE__*/
function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();

exports.MapOperator = MapOperator;

var MapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MapSubscriber, _super);

  function MapSubscriber(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  MapSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(_Subscriber.Subscriber);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../node_modules/rxjs/_esm5/internal/observable/bindCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = bindCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isArray = require("../util/isArray");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */
function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new _Observable.Observable(function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"../node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"../node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"../node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require("../Observable");

var _AsyncSubject = require("../AsyncSubject");

var _map = require("../operators/map");

var _canReportError = require("../util/canReportError");

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0, _isScheduler.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe((0, _map.map)(function (args) {
          return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new _Observable.Observable(function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new _AsyncSubject.AsyncSubject();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if ((0, _canReportError.canReportError)(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject.AsyncSubject();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../AsyncSubject":"../node_modules/rxjs/_esm5/internal/AsyncSubject.js","../operators/map":"../node_modules/rxjs/_esm5/internal/operators/map.js","../util/canReportError":"../node_modules/rxjs/_esm5/internal/util/canReportError.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js"}],"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OuterSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(_Subscriber.Subscriber);

exports.OuterSubscriber = OuterSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../node_modules/rxjs/_esm5/internal/InnerSubscriber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerSubscriber = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(_Subscriber.Subscriber);

exports.InnerSubscriber = InnerSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js"}],"../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToPromise = void 0;

var _hostReportError = require("./hostReportError");

/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
var subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _hostReportError.hostReportError);
    return subscriber;
  };
};

exports.subscribeToPromise = subscribeToPromise;
},{"./hostReportError":"../node_modules/rxjs/_esm5/internal/util/hostReportError.js"}],"../node_modules/rxjs/_esm5/internal/symbol/iterator.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSymbolIterator = getSymbolIterator;
exports.$$iterator = exports.iterator = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

var iterator =
/*@__PURE__*/
getSymbolIterator();
exports.iterator = iterator;
var $$iterator = iterator;
exports.$$iterator = $$iterator;
},{}],"../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToIterable = void 0;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
var subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[_iterator.iterator]();

    do {
      var item = iterator.next();

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

exports.subscribeToIterable = subscribeToIterable;
},{"../symbol/iterator":"../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToObservable = void 0;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
var subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[_observable.observable]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

exports.subscribeToObservable = subscribeToObservable;
},{"../symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../node_modules/rxjs/_esm5/internal/util/isArrayLike.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

exports.isArrayLike = isArrayLike;
},{}],"../node_modules/rxjs/_esm5/internal/util/isPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
  return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
},{}],"../node_modules/rxjs/_esm5/internal/util/subscribeTo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeTo = void 0;

var _Observable = require("../Observable");

var _subscribeToArray = require("./subscribeToArray");

var _subscribeToPromise = require("./subscribeToPromise");

var _subscribeToIterable = require("./subscribeToIterable");

var _subscribeToObservable = require("./subscribeToObservable");

var _isArrayLike = require("./isArrayLike");

var _isPromise = require("./isPromise");

var _isObject = require("./isObject");

var _iterator = require("../symbol/iterator");

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = function (result) {
  if (result instanceof _Observable.Observable) {
    return function (subscriber) {
      if (result._isScalar) {
        subscriber.next(result.value);
        subscriber.complete();
        return undefined;
      } else {
        return result.subscribe(subscriber);
      }
    };
  } else if (result && typeof result[_observable.observable] === 'function') {
    return (0, _subscribeToObservable.subscribeToObservable)(result);
  } else if ((0, _isArrayLike.isArrayLike)(result)) {
    return (0, _subscribeToArray.subscribeToArray)(result);
  } else if ((0, _isPromise.isPromise)(result)) {
    return (0, _subscribeToPromise.subscribeToPromise)(result);
  } else if (result && typeof result[_iterator.iterator] === 'function') {
    return (0, _subscribeToIterable.subscribeToIterable)(result);
  } else {
    var value = (0, _isObject.isObject)(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

exports.subscribeTo = subscribeTo;
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./subscribeToArray":"../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js","./subscribeToPromise":"../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js","./subscribeToIterable":"../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js","./subscribeToObservable":"../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js","./isArrayLike":"../node_modules/rxjs/_esm5/internal/util/isArrayLike.js","./isPromise":"../node_modules/rxjs/_esm5/internal/util/isPromise.js","./isObject":"../node_modules/rxjs/_esm5/internal/util/isObject.js","../symbol/iterator":"../node_modules/rxjs/_esm5/internal/symbol/iterator.js","../symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require("../InnerSubscriber");

var _subscribeTo = require("./subscribeTo");

/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === void 0) {
    destination = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
  }

  if (destination.closed) {
    return;
  }

  return (0, _subscribeTo.subscribeTo)(result)(destination);
}
},{"../InnerSubscriber":"../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./subscribeTo":"../node_modules/rxjs/_esm5/internal/util/subscribeTo.js"}],"../node_modules/rxjs/_esm5/internal/observable/combineLatest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = combineLatest;
exports.CombineLatestSubscriber = exports.CombineLatestOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isScheduler = require("../util/isScheduler");

var _isArray = require("../util/isArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _fromArray = require("./fromArray");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */
var NONE = {};

function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = null;
  var scheduler = null;

  if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
    observables = observables[0];
  }

  return (0, _fromArray.fromArray)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

var CombineLatestOperator =
/*@__PURE__*/
function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();

exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(CombineLatestSubscriber, _super);

  function CombineLatestSubscriber(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }

  CombineLatestSubscriber.prototype._next = function (observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  };

  CombineLatestSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add((0, _subscribeToResult.subscribeToResult)(this, observable, observable, i));
      }
    }
  };

  CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };

  CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.CombineLatestSubscriber = CombineLatestSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","../OuterSubscriber":"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require("../symbol/observable");

/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
function isInteropObservable(input) {
  return input && typeof input[_observable.observable] === 'function';
}
},{"../symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js"}],"../node_modules/rxjs/_esm5/internal/util/isIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = isIterable;

var _iterator = require("../symbol/iterator");

/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
function isIterable(input) {
  return input && typeof input[_iterator.iterator] === 'function';
}
},{"../symbol/iterator":"../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../node_modules/rxjs/_esm5/internal/observable/fromPromise.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromPromise = fromPromise;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _subscribeToPromise = require("../util/subscribeToPromise");

/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */
function fromPromise(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToPromise.subscribeToPromise)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      sub.add(scheduler.schedule(function () {
        return input.then(function (value) {
          sub.add(scheduler.schedule(function () {
            subscriber.next(value);
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }));
        }, function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        });
      }));
      return sub;
    });
  }
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../util/subscribeToPromise":"../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js"}],"../node_modules/rxjs/_esm5/internal/observable/fromIterable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIterable = fromIterable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _iterator = require("../symbol/iterator");

var _subscribeToIterable = require("../util/subscribeToIterable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */
function fromIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToIterable.subscribeToIterable)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      var iterator;
      sub.add(function () {
        if (iterator && typeof iterator.return === 'function') {
          iterator.return();
        }
      });
      sub.add(scheduler.schedule(function () {
        iterator = input[_iterator.iterator]();
        sub.add(scheduler.schedule(function () {
          if (subscriber.closed) {
            return;
          }

          var value;
          var done;

          try {
            var result = iterator.next();
            value = result.value;
            done = result.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }

          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
            this.schedule();
          }
        }));
      }));
      return sub;
    });
  }
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/iterator":"../node_modules/rxjs/_esm5/internal/symbol/iterator.js","../util/subscribeToIterable":"../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js"}],"../node_modules/rxjs/_esm5/internal/observable/fromObservable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromObservable = fromObservable;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

var _observable = require("../symbol/observable");

var _subscribeToObservable = require("../util/subscribeToObservable");

/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */
function fromObservable(input, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable((0, _subscribeToObservable.subscribeToObservable)(input));
  } else {
    return new _Observable.Observable(function (subscriber) {
      var sub = new _Subscription.Subscription();
      sub.add(scheduler.schedule(function () {
        var observable = input[_observable.observable]();

        sub.add(observable.subscribe({
          next: function (value) {
            sub.add(scheduler.schedule(function () {
              return subscriber.next(value);
            }));
          },
          error: function (err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          },
          complete: function () {
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }
        }));
      }));
      return sub;
    });
  }
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","../symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js","../util/subscribeToObservable":"../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js"}],"../node_modules/rxjs/_esm5/internal/observable/from.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;

var _Observable = require("../Observable");

var _isPromise = require("../util/isPromise");

var _isArrayLike = require("../util/isArrayLike");

var _isInteropObservable = require("../util/isInteropObservable");

var _isIterable = require("../util/isIterable");

var _fromArray = require("./fromArray");

var _fromPromise = require("./fromPromise");

var _fromIterable = require("./fromIterable");

var _fromObservable = require("./fromObservable");

var _subscribeTo = require("../util/subscribeTo");

/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */
function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof _Observable.Observable) {
      return input;
    }

    return new _Observable.Observable((0, _subscribeTo.subscribeTo)(input));
  }

  if (input != null) {
    if ((0, _isInteropObservable.isInteropObservable)(input)) {
      return (0, _fromObservable.fromObservable)(input, scheduler);
    } else if ((0, _isPromise.isPromise)(input)) {
      return (0, _fromPromise.fromPromise)(input, scheduler);
    } else if ((0, _isArrayLike.isArrayLike)(input)) {
      return (0, _fromArray.fromArray)(input, scheduler);
    } else if ((0, _isIterable.isIterable)(input) || typeof input === 'string') {
      return (0, _fromIterable.fromIterable)(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/isPromise":"../node_modules/rxjs/_esm5/internal/util/isPromise.js","../util/isArrayLike":"../node_modules/rxjs/_esm5/internal/util/isArrayLike.js","../util/isInteropObservable":"../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js","../util/isIterable":"../node_modules/rxjs/_esm5/internal/util/isIterable.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js","./fromPromise":"../node_modules/rxjs/_esm5/internal/observable/fromPromise.js","./fromIterable":"../node_modules/rxjs/_esm5/internal/observable/fromIterable.js","./fromObservable":"../node_modules/rxjs/_esm5/internal/observable/fromObservable.js","../util/subscribeTo":"../node_modules/rxjs/_esm5/internal/util/subscribeTo.js"}],"../node_modules/rxjs/_esm5/internal/operators/mergeMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = mergeMap;
exports.MergeMapSubscriber = exports.MergeMapOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _InnerSubscriber = require("../InnerSubscriber");

var _map = require("./map");

var _from = require("../observable/from");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return (0, _from.from)(project(a, i)).pipe((0, _map.map)(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

var MergeMapOperator =
/*@__PURE__*/
function () {
  function MergeMapOperator(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    this.project = project;
    this.concurrent = concurrent;
  }

  MergeMapOperator.prototype.call = function (observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };

  return MergeMapOperator;
}();

exports.MergeMapOperator = MergeMapOperator;

var MergeMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(MergeMapSubscriber, _super);

  function MergeMapSubscriber(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeMapSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result, value, index);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber.InnerSubscriber(this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    (0, _subscribeToResult.subscribeToResult)(this, ish, value, index, innerSubscriber);
  };

  MergeMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    this.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.MergeMapSubscriber = MergeMapSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../util/subscribeToResult":"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../InnerSubscriber":"../node_modules/rxjs/_esm5/internal/InnerSubscriber.js","./map":"../node_modules/rxjs/_esm5/internal/operators/map.js","../observable/from":"../node_modules/rxjs/_esm5/internal/observable/from.js"}],"../node_modules/rxjs/_esm5/internal/operators/mergeAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require("./mergeMap");

var _identity = require("../util/identity");

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
},{"./mergeMap":"../node_modules/rxjs/_esm5/internal/operators/mergeMap.js","../util/identity":"../node_modules/rxjs/_esm5/internal/util/identity.js"}],"../node_modules/rxjs/_esm5/internal/operators/concatAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = concatAll;

var _mergeAll = require("./mergeAll");

/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
function concatAll() {
  return (0, _mergeAll.mergeAll)(1);
}
},{"./mergeAll":"../node_modules/rxjs/_esm5/internal/operators/mergeAll.js"}],"../node_modules/rxjs/_esm5/internal/observable/concat.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = concat;

var _isScheduler = require("../util/isScheduler");

var _of = require("./of");

var _from = require("./from");

var _concatAll = require("../operators/concatAll");

/** PURE_IMPORTS_START _util_isScheduler,_of,_from,_operators_concatAll PURE_IMPORTS_END */
function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1 || observables.length === 2 && (0, _isScheduler.isScheduler)(observables[1])) {
    return (0, _from.from)(observables[0]);
  }

  return (0, _concatAll.concatAll)()(_of.of.apply(void 0, observables));
}
},{"../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js","./of":"../node_modules/rxjs/_esm5/internal/observable/of.js","./from":"../node_modules/rxjs/_esm5/internal/observable/from.js","../operators/concatAll":"../node_modules/rxjs/_esm5/internal/operators/concatAll.js"}],"../node_modules/rxjs/_esm5/internal/observable/defer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = defer;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function defer(observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? (0, _from.from)(input) : (0, _empty.empty)();
    return source.subscribe(subscriber);
  });
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../node_modules/rxjs/_esm5/internal/observable/forkJoin.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = forkJoin;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

var _subscribeToResult = require("../util/subscribeToResult");

var _OuterSubscriber = require("../OuterSubscriber");

var _map = require("../operators/map");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */
function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var resultSelector;

  if (typeof sources[sources.length - 1] === 'function') {
    resultSelector = sources.pop();
  }

  if (sources.length === 1 && (0, _isArray.isArray)(sources[0])) {
    sources = sources[0];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  if (resultSelector) {
    return forkJoin(sources).pipe((0, _map.map)(function (args) {
      return resultSelector.apply(void 0, args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    return new ForkJoinSubscriber(subscriber, sources);
  });
}

var ForkJoinSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ForkJoinSubscriber, _super);

  function ForkJoinSubscriber(destination, sources) {
    var _this = _super.call(this, destination) || this;

    _this.sources = sources;
    _this.completed = 0;
    _this.haveValues = 0;
    var len = sources.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      var source = sources[i];
      var innerSubscription = (0, _subscribeToResult.subscribeToResult)(_this, source, null, i);

      if (innerSubscription) {
        _this.add(innerSubscription);
      }
    }

    return _this;
  }

  ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;

    if (!innerSub._hasValue) {
      innerSub._hasValue = true;
      this.haveValues++;
    }
  };

  ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
    var _a = this,
        destination = _a.destination,
        haveValues = _a.haveValues,
        values = _a.values;

    var len = values.length;

    if (!innerSub._hasValue) {
      destination.complete();
      return;
    }

    this.completed++;

    if (this.completed !== len) {
      return;
    }

    if (haveValues === len) {
      destination.next(values);
    }

    destination.complete();
  };

  return ForkJoinSubscriber;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js","../util/subscribeToResult":"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../OuterSubscriber":"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../operators/map":"../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../node_modules/rxjs/_esm5/internal/observable/fromEvent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = fromEvent;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
var toString = Object.prototype.toString;

function fromEvent(target, eventName, options, resultSelector) {
  if ((0, _isFunction.isFunction)(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError('Invalid event target');
  }

  subscriber.add(unsubscribe);
}

function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}

function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}

function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"../node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require("../Observable");

var _isArray = require("../util/isArray");

var _isFunction = require("../util/isFunction");

var _map = require("../operators/map");

/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */
function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0, _map.map)(function (args) {
      return (0, _isArray.isArray)(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable.Observable(function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!(0, _isFunction.isFunction)(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","../util/isFunction":"../node_modules/rxjs/_esm5/internal/util/isFunction.js","../operators/map":"../node_modules/rxjs/_esm5/internal/operators/map.js"}],"../node_modules/rxjs/_esm5/internal/observable/generate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = generate;

var _Observable = require("../Observable");

var _identity = require("../util/identity");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || _identity.identity;
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = _identity.identity;
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new _Observable.Observable(function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/identity":"../node_modules/rxjs/_esm5/internal/util/identity.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../node_modules/rxjs/_esm5/internal/observable/iif.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = iif;

var _defer = require("./defer");

var _empty = require("./empty");

/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */
function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = _empty.EMPTY;
  }

  if (falseResult === void 0) {
    falseResult = _empty.EMPTY;
  }

  return (0, _defer.defer)(function () {
    return condition() ? trueResult : falseResult;
  });
}
},{"./defer":"../node_modules/rxjs/_esm5/internal/observable/defer.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../node_modules/rxjs/_esm5/internal/util/isNumeric.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;

var _isArray = require("./isArray");

/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
function isNumeric(val) {
  return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
},{"./isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js"}],"../node_modules/rxjs/_esm5/internal/observable/interval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = interval;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */
function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _async.async;
  }

  if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"../node_modules/rxjs/_esm5/internal/util/isNumeric.js"}],"../node_modules/rxjs/_esm5/internal/observable/merge.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = merge;

var _Observable = require("../Observable");

var _isScheduler = require("../util/isScheduler");

var _mergeAll = require("../operators/mergeAll");

var _fromArray = require("./fromArray");

/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */
function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if ((0, _isScheduler.isScheduler)(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable.Observable) {
    return observables[0];
  }

  return (0, _mergeAll.mergeAll)(concurrent)((0, _fromArray.fromArray)(observables, scheduler));
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js","../operators/mergeAll":"../node_modules/rxjs/_esm5/internal/operators/mergeAll.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js"}],"../node_modules/rxjs/_esm5/internal/observable/never.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = never;
exports.NEVER = void 0;

var _Observable = require("../Observable");

var _noop = require("../util/noop");

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER =
/*@__PURE__*/
new _Observable.Observable(_noop.noop);
exports.NEVER = NEVER;

function never() {
  return NEVER;
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../util/noop":"../node_modules/rxjs/_esm5/internal/util/noop.js"}],"../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require("../Observable");

var _from = require("./from");

var _isArray = require("../util/isArray");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */
function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return _empty.EMPTY;
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && (0, _isArray.isArray)(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new _Observable.Observable(function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return (0, _from.from)(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../node_modules/rxjs/_esm5/internal/observable/from.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../node_modules/rxjs/_esm5/internal/observable/pairs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

var _Subscription = require("../Subscription");

/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */
function pairs(obj, scheduler) {
  if (!scheduler) {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new _Observable.Observable(function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new _Subscription.Subscription();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}

function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js"}],"../node_modules/rxjs/_esm5/internal/observable/race.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = race;
exports.RaceSubscriber = exports.RaceOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _isArray = require("../util/isArray");

var _fromArray = require("./fromArray");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */
function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if ((0, _isArray.isArray)(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new RaceOperator());
}

var RaceOperator =
/*@__PURE__*/
function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();

exports.RaceOperator = RaceOperator;

var RaceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, observable, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(_OuterSubscriber.OuterSubscriber);

exports.RaceSubscriber = RaceSubscriber;
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../OuterSubscriber":"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js"}],"../node_modules/rxjs/_esm5/internal/observable/range.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require("../Observable");

/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  if (count === void 0) {
    count = 0;
  }

  return new _Observable.Observable(function (subscriber) {
    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}

function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js"}],"../node_modules/rxjs/_esm5/internal/observable/timer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = timer;

var _Observable = require("../Observable");

var _async = require("../scheduler/async");

var _isNumeric = require("../util/isNumeric");

var _isScheduler = require("../util/isScheduler");

/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */
function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if ((0, _isNumeric.isNumeric)(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if ((0, _isScheduler.isScheduler)(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!(0, _isScheduler.isScheduler)(scheduler)) {
    scheduler = _async.async;
  }

  return new _Observable.Observable(function (subscriber) {
    var due = (0, _isNumeric.isNumeric)(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","../scheduler/async":"../node_modules/rxjs/_esm5/internal/scheduler/async.js","../util/isNumeric":"../node_modules/rxjs/_esm5/internal/util/isNumeric.js","../util/isScheduler":"../node_modules/rxjs/_esm5/internal/util/isScheduler.js"}],"../node_modules/rxjs/_esm5/internal/observable/using.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;

var _Observable = require("../Observable");

var _from = require("./from");

var _empty = require("./empty");

/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
function using(resourceFactory, observableFactory) {
  return new _Observable.Observable(function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? (0, _from.from)(result) : _empty.EMPTY;
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}
},{"../Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./from":"../node_modules/rxjs/_esm5/internal/observable/from.js","./empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js"}],"../node_modules/rxjs/_esm5/internal/observable/zip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = zip;
exports.ZipSubscriber = exports.ZipOperator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _fromArray = require("./fromArray");

var _isArray = require("../util/isArray");

var _Subscriber = require("../Subscriber");

var _OuterSubscriber = require("../OuterSubscriber");

var _subscribeToResult = require("../util/subscribeToResult");

var _iterator = require("../../internal/symbol/iterator");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */
function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return (0, _fromArray.fromArray)(observables, undefined).lift(new ZipOperator(resultSelector));
}

var ZipOperator =
/*@__PURE__*/
function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();

exports.ZipOperator = ZipOperator;

var ZipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
    _this.values = values;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if ((0, _isArray.isArray)(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_iterator.iterator] === 'function') {
      iterators.push(new StaticIterator(value[_iterator.iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe(iterator, i));
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(_Subscriber.Subscriber);

exports.ZipSubscriber = ZipSubscriber;

var StaticIterator =
/*@__PURE__*/
function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return nextResult && nextResult.done;
  };

  return StaticIterator;
}();

var StaticArrayIterator =
/*@__PURE__*/
function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator =
/*@__PURE__*/
function (_super) {
  tslib_1.__extends(ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[_iterator.iterator] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function (value, index) {
    return (0, _subscribeToResult.subscribeToResult)(this, this.observable, this, index);
  };

  return ZipBufferIterator;
}(_OuterSubscriber.OuterSubscriber);
},{"tslib":"../node_modules/rxjs/node_modules/tslib/tslib.es6.js","./fromArray":"../node_modules/rxjs/_esm5/internal/observable/fromArray.js","../util/isArray":"../node_modules/rxjs/_esm5/internal/util/isArray.js","../Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","../OuterSubscriber":"../node_modules/rxjs/_esm5/internal/OuterSubscriber.js","../util/subscribeToResult":"../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js","../../internal/symbol/iterator":"../node_modules/rxjs/_esm5/internal/symbol/iterator.js"}],"../node_modules/rxjs/_esm5/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});
Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});
Object.defineProperty(exports, "GroupedObservable", {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});
Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});
Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});
Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});
Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});
Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});
Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});
Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});
Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});
Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});
Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});
Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});
Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});
Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});
Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});
Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});
Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});
Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});
Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});
Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});
Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});
Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});
Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});
Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});
Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});
Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});
Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});
Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});
Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});
Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});
Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});
Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});
Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});
Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});
Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});
Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});
Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});
Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});
Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});
Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});
Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});
Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});
Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});

var _Observable = require("./internal/Observable");

var _ConnectableObservable = require("./internal/observable/ConnectableObservable");

var _groupBy = require("./internal/operators/groupBy");

var _observable = require("./internal/symbol/observable");

var _Subject = require("./internal/Subject");

var _BehaviorSubject = require("./internal/BehaviorSubject");

var _ReplaySubject = require("./internal/ReplaySubject");

var _AsyncSubject = require("./internal/AsyncSubject");

var _asap = require("./internal/scheduler/asap");

var _async = require("./internal/scheduler/async");

var _queue = require("./internal/scheduler/queue");

var _animationFrame = require("./internal/scheduler/animationFrame");

var _VirtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");

var _Scheduler = require("./internal/Scheduler");

var _Subscription = require("./internal/Subscription");

var _Subscriber = require("./internal/Subscriber");

var _Notification = require("./internal/Notification");

var _pipe = require("./internal/util/pipe");

var _noop = require("./internal/util/noop");

var _identity = require("./internal/util/identity");

var _isObservable = require("./internal/util/isObservable");

var _ArgumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");

var _EmptyError = require("./internal/util/EmptyError");

var _ObjectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");

var _UnsubscriptionError = require("./internal/util/UnsubscriptionError");

var _TimeoutError = require("./internal/util/TimeoutError");

var _bindCallback = require("./internal/observable/bindCallback");

var _bindNodeCallback = require("./internal/observable/bindNodeCallback");

var _combineLatest = require("./internal/observable/combineLatest");

var _concat = require("./internal/observable/concat");

var _defer = require("./internal/observable/defer");

var _empty = require("./internal/observable/empty");

var _forkJoin = require("./internal/observable/forkJoin");

var _from = require("./internal/observable/from");

var _fromEvent = require("./internal/observable/fromEvent");

var _fromEventPattern = require("./internal/observable/fromEventPattern");

var _generate = require("./internal/observable/generate");

var _iif = require("./internal/observable/iif");

var _interval = require("./internal/observable/interval");

var _merge = require("./internal/observable/merge");

var _never = require("./internal/observable/never");

var _of = require("./internal/observable/of");

var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");

var _pairs = require("./internal/observable/pairs");

var _race = require("./internal/observable/race");

var _range = require("./internal/observable/range");

var _throwError = require("./internal/observable/throwError");

var _timer = require("./internal/observable/timer");

var _using = require("./internal/observable/using");

var _zip = require("./internal/observable/zip");

var _config = require("./internal/config");
},{"./internal/Observable":"../node_modules/rxjs/_esm5/internal/Observable.js","./internal/observable/ConnectableObservable":"../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js","./internal/operators/groupBy":"../node_modules/rxjs/_esm5/internal/operators/groupBy.js","./internal/symbol/observable":"../node_modules/rxjs/_esm5/internal/symbol/observable.js","./internal/Subject":"../node_modules/rxjs/_esm5/internal/Subject.js","./internal/BehaviorSubject":"../node_modules/rxjs/_esm5/internal/BehaviorSubject.js","./internal/ReplaySubject":"../node_modules/rxjs/_esm5/internal/ReplaySubject.js","./internal/AsyncSubject":"../node_modules/rxjs/_esm5/internal/AsyncSubject.js","./internal/scheduler/asap":"../node_modules/rxjs/_esm5/internal/scheduler/asap.js","./internal/scheduler/async":"../node_modules/rxjs/_esm5/internal/scheduler/async.js","./internal/scheduler/queue":"../node_modules/rxjs/_esm5/internal/scheduler/queue.js","./internal/scheduler/animationFrame":"../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js","./internal/scheduler/VirtualTimeScheduler":"../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js","./internal/Scheduler":"../node_modules/rxjs/_esm5/internal/Scheduler.js","./internal/Subscription":"../node_modules/rxjs/_esm5/internal/Subscription.js","./internal/Subscriber":"../node_modules/rxjs/_esm5/internal/Subscriber.js","./internal/Notification":"../node_modules/rxjs/_esm5/internal/Notification.js","./internal/util/pipe":"../node_modules/rxjs/_esm5/internal/util/pipe.js","./internal/util/noop":"../node_modules/rxjs/_esm5/internal/util/noop.js","./internal/util/identity":"../node_modules/rxjs/_esm5/internal/util/identity.js","./internal/util/isObservable":"../node_modules/rxjs/_esm5/internal/util/isObservable.js","./internal/util/ArgumentOutOfRangeError":"../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js","./internal/util/EmptyError":"../node_modules/rxjs/_esm5/internal/util/EmptyError.js","./internal/util/ObjectUnsubscribedError":"../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js","./internal/util/UnsubscriptionError":"../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js","./internal/util/TimeoutError":"../node_modules/rxjs/_esm5/internal/util/TimeoutError.js","./internal/observable/bindCallback":"../node_modules/rxjs/_esm5/internal/observable/bindCallback.js","./internal/observable/bindNodeCallback":"../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js","./internal/observable/combineLatest":"../node_modules/rxjs/_esm5/internal/observable/combineLatest.js","./internal/observable/concat":"../node_modules/rxjs/_esm5/internal/observable/concat.js","./internal/observable/defer":"../node_modules/rxjs/_esm5/internal/observable/defer.js","./internal/observable/empty":"../node_modules/rxjs/_esm5/internal/observable/empty.js","./internal/observable/forkJoin":"../node_modules/rxjs/_esm5/internal/observable/forkJoin.js","./internal/observable/from":"../node_modules/rxjs/_esm5/internal/observable/from.js","./internal/observable/fromEvent":"../node_modules/rxjs/_esm5/internal/observable/fromEvent.js","./internal/observable/fromEventPattern":"../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js","./internal/observable/generate":"../node_modules/rxjs/_esm5/internal/observable/generate.js","./internal/observable/iif":"../node_modules/rxjs/_esm5/internal/observable/iif.js","./internal/observable/interval":"../node_modules/rxjs/_esm5/internal/observable/interval.js","./internal/observable/merge":"../node_modules/rxjs/_esm5/internal/observable/merge.js","./internal/observable/never":"../node_modules/rxjs/_esm5/internal/observable/never.js","./internal/observable/of":"../node_modules/rxjs/_esm5/internal/observable/of.js","./internal/observable/onErrorResumeNext":"../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js","./internal/observable/pairs":"../node_modules/rxjs/_esm5/internal/observable/pairs.js","./internal/observable/race":"../node_modules/rxjs/_esm5/internal/observable/race.js","./internal/observable/range":"../node_modules/rxjs/_esm5/internal/observable/range.js","./internal/observable/throwError":"../node_modules/rxjs/_esm5/internal/observable/throwError.js","./internal/observable/timer":"../node_modules/rxjs/_esm5/internal/observable/timer.js","./internal/observable/using":"../node_modules/rxjs/_esm5/internal/observable/using.js","./internal/observable/zip":"../node_modules/rxjs/_esm5/internal/observable/zip.js","./internal/config":"../node_modules/rxjs/_esm5/internal/config.js"}],"service/test.service.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = require("rxjs"); // import { Injectable } from 'indiv';


var src_1 = require("../../../InDiv/src");

var TestService =
/** @class */
function () {
  function TestService() {
    this.data = 1;
    this.subject = new rxjs_1.Subject();
  }

  TestService.prototype.subscribe = function (fun) {
    return this.subject.subscribe({
      next: fun
    });
  };

  TestService.prototype.update = function (value) {
    this.subject.next({
      next: value
    });
  };

  TestService.prototype.unsubscribe = function () {
    this.subject.subscribe();
  };

  TestService = __decorate([src_1.Injectable(), __metadata("design:paramtypes", [])], TestService);
  return TestService;
}();

exports.default = TestService;
},{"rxjs":"../node_modules/rxjs/_esm5/index.js","../../../InDiv/src":"../../InDiv/src/index.ts"}],"pages/docs/component/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, HasRender, SetState, Injected, WatchState, OnInit } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var component_1 = require("../../../constants/component");

var test_service_1 = __importDefault(require("../../../service/test.service"));

var DocsComponentContainer =
/** @class */
function () {
  function DocsComponentContainer(testS) {
    this.testS = testS;
    this.state = {
      info: component_1.componentInfo()
    };
    this.subscribeToken = this.testS.subscribe(this.subscribe);
  }

  DocsComponentContainer.prototype.nvOnInit = function () {
    console.log('DocsComponentContainer has oninit');
  };

  DocsComponentContainer.prototype.nvWatchState = function (oldState) {
    console.log('oldState is: ', oldState);
  };

  DocsComponentContainer.prototype.subscribe = function (value) {
    console.log('RXJS value from DocsComponentContainer', value);
  };

  DocsComponentContainer.prototype.click = function (code, index) {
    code.title = '3232';
    this.testS.update(3);
  };

  DocsComponentContainer.prototype.showText = function (text) {
    return text;
  };

  DocsComponentContainer.prototype.nvHasRender = function () {
    console.log('nvHasRender', this.state);
  };

  DocsComponentContainer.prototype.nvOnDestory = function () {
    console.log('DocsComponentContainer nvOnDestory');
    this.subscribeToken.unsubscribe();
  };

  DocsComponentContainer.prototype.nvRouteChange = function (lastRoute, newRoute) {
    console.log('DocsComponentContainer nvRouteChange', lastRoute, newRoute);
  };

  var _a;

  DocsComponentContainer = __decorate([src_1.Injected, src_1.Component({
    selector: 'docs-component-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\" nv-on:click=\"@click(code, $index)\">{{@showText(code.title)}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], DocsComponentContainer);
  return DocsComponentContainer;
}();

exports.default = DocsComponentContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/component":"constants/component.ts","../../../service/test.service":"service/test.service.ts"}],"constants/template.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.templateInfo = function () {
  return [{
    h1: '模板语法',
    p: ['从使用模型-视图-控制器 (MVC) 或模型-视图-视图模型 (MVVM) 的经验中，很多开发人员都熟悉了组件和模板这两个概念。', '在 InDiv 中，组件扮演着控制器或视图模型的角色，模板则扮演视图的角色。', '模板很像字符串的HTML，但是它还包含 InDiv 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。', '你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。', 'InDiv 模板指令使用 nv- 开头，下面介绍一下 InDiv 的模板语法。', '1. 拥有特殊渲染方法的指令有 nv-model nv-text nv-html nv-if nv-class nv-repeat nv-key nv-on:Event。', '2. 如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。例如：nv-src nv-href nv-alt', '3. 内置指令接收2种字符串：', '(1) state.xxx 和 nv-repeat的值：nv-text="state.text" nv-text="repeatData.text"', '(2) 除 nv-on:Event 和 nv-model 外，其他指令的值可以接收@开头加组件实例上带返回值的方法，参数可以使用事件指令中除了$event之外的参数，指令渲染为方法返回值：nv-text="@bindText(state.text, $index, $element)"'],
    info: [{
      title: '1. 事件指令',
      p: ['以 nv-on:event 开头, event 为未加on的事件名， 指令值为 @开头 加 组件实例上的方法', '例如：nv-on:click="@goTo()"', '方法可使用参数：'],
      pchild: ["- Element => $element", "- event => $event", "- string => '1','2','3'", " - number => 1,2,3", " - index > $index", "- \u53D8\u91CF: \u4EC5\u80FD\u4F20\u9012state\u4E0A\u7684\u503C\uFF0C \u901A\u8FC7state.xxx\u6807\u793A", "- repeat value: \u4F20\u9012nv-repeat='let item in array'\u7684item\u503C\uFF0C\u5982\uFF1A nv-on:click=\"@show(nav)\" nv-repeat=\"let nav in state.navList\" nv-key=\"nav.id\""],
      code: "\n  <a class=\"nav\" nv-on:click=\"@goTo($event, $index, 1, 'state', state.nav.to,)\">{{state.nav.name}}</a>\n\n  public goTo(event: Event, index: number, aa: number, s: string, to: string) {\n    this.$setLocation(to);\n  }\n "
    }, {
      title: '2. text 指令',
      p: ['该指令可直接渲染为标签内的文字，或 <input> 的 value。'],
      pchild: ['可以使用 nv-text 也可以使用模板语法 {{}}。'],
      code: "\n  <p nv-text=\"state.b\"></p>\n  <p nv-text=\"@returnValue(state.b)\"></p>\n  <p>{{state.b}}</p>\n  <p>{{@returnValue(state.b)}}</p>\n "
    }, {
      title: '3. html 指令',
      p: ['该指令可直接渲染为标签内的 HTML，内部实现相当于 innerHTML。'],
      pchild: ['可以使用 nv-html。'],
      code: "\n  <p nv-html=\"state.b\"></p>\n  <p nv-html=\"@returnValue(state.b)\"></p>\n "
    }, {
      title: '4. model 指令',
      p: ['此指令等同于 nv-text 和 nv-on:input 同时使用'],
      pchild: ['仅仅可以对 <input> 使用 nv-model, model会主动更新被绑定的值并更新视图。'],
      code: "\n  <input nv-model=\"state.c\"/>\n "
    }, {
      title: '5. class 指令',
      p: ['指令会主动把被绑定的值作为 className 增加到元素的class中。'],
      pchild: ['使用 nv-class。'],
      code: "\n  <input nv-class=\"state.d\"/>\n  <input nv-class=\"@returnValue(state.d)\"/>\n "
    }, {
      title: '6. if 指令',
      p: ['如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树中显示或移除。'],
      pchild: ['使用 nv-if。'],
      code: "\n  <input nv-if=\"state.e\"/>\n  <input nv-if=\"@returnValue(state.e)\"/>\n "
    }, {
      title: '7. repeat 指令',
      p: ['repeat 是一个重复器指令 —— 自定义数据显示的一种方式。', '你的目标是展示一个由多个条目组成的列表。', '首先定义了一个 HTML 块，它规定了单个条目应该如何显示。', '再告诉 InDiv 把这个块当做模板，渲染列表中的每个条目。', '该指令可以搭配 nv-key 指令使用提高渲染性能。'],
      pchild: ['使用 nv-repeat="let item in Array"语法, Array只能为其他被repeat值或组件实例state上的数组。', '可以通过 let item in Array 的语法定义 nv-repeat 指令，在元素本身或子元素可以直接使用 item 作为值。', '此指令十分耗费性能，不建议多用，并且建议搭配 nv-key 使用。'],
      code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in state.arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
    }, {
      title: '8. key 指令',
      p: ['搭配 repeat 指令使用，为每个被 repeat 的元素指定一个唯一的值', '该指令会提高 repeat 指令的渲染性能，', '每次虚拟DOM更新时会优先匹配 tagName 和 key 都相同的虚拟DOM。'],
      pchild: ['nv-key 的值必须在 同级且同标签名的元素 中为唯一值', '建议如果对 自定义组件的父元素 或 自定义组件本身 使用 nv-repeat，尽量加上 nv-key 指令来避免重复创建组件实例，并保存组件内部状态。'],
      code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in state.arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
    }, {
      title: '9. 其他指令',
      p: ['如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。'],
      pchild: ['例如：nv-src nv-href nv-alt等'],
      code: "\n  <img nv-src=\"state.src\" nv-alt=\"state.alt\"/>\n  <img nv-src=\"@return(state.src)\" nv-alt=\"@return(state.alt)\"/>\n "
    }]
  }];
};
},{}],"pages/docs/template/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, HasRender, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var template_1 = require("../../../constants/template");

var DocsTemplateContainer =
/** @class */
function () {
  function DocsTemplateContainer() {
    this.state = {
      info: template_1.templateInfo()
    };
  }

  DocsTemplateContainer.prototype.nvHasRender = function () {
    console.log('DocsTemplateContainer nvHasRender', this.state);
  };

  DocsTemplateContainer = __decorate([src_1.Component({
    selector: 'docs-template-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\">{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsTemplateContainer);
  return DocsTemplateContainer;
}();

exports.default = DocsTemplateContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/template":"constants/template.ts"}],"constants/module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.moduleInfo = function () {
  return [{
    h1: 'InDiv 模块',
    p: ['JavaScript 和 InDiv 都使用模块来组织代码，虽然它们的组织形式不同，但 InDiv 的应用会同时依赖两者。', '此处不过多讲 JavaScript 模块，而着重叙述 InDiv 模块。'],
    info: [{
      title: '装饰器 NvModule',
      p: ['NvModule 是一些带有 @NvModule 装饰器的类。', '@NvModule 装饰器的 会告诉 InDiv 哪些其它的东西是当前模块所需的。', '@NvModule 接收5个参数。'],
      pchild: ['声明某些组件（component）、服务（service）属于这个模块', '公开其中的部分组件，以便其它模块中的组件模板中可以使用它们', '导入其它带有组件、服务的模块（NvModule），这些模块中的元件都是本模块所需的', '提供一些供应用中的其它组件使用的服务'],
      code: "\n  // in TypeScript\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n      PComponent,\n      TestComponent,\n      R1,\n    ],\n    providers: [\n      HeroSearchService,\n      {\n        provide: HeroSearchService1,\n        useClass: HeroSearchService1,\n      },\n      {\n        provide: ValueClass,\n        useValue: '12324',\n      },\n    ],\n  })\n  export default class M1 {}\n\n  // in JavaScript\n  export default class M1 {}\n  NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n      PComponent,\n      TestComponent,\n      R1,\n    ],\n    providers: [\n      {\n        provide: 'heroSearchService',\n        useClass: HeroSearchService,\n      },\n      {\n        provide: 'heroSearchService1',\n        useClass: HeroSearchService1,\n      },\n      {\n        provide: 'valueClass',\n        useValue: '12324',\n      },\n    ],\n  })(M1);\n "
    }, {
      title: '1. imports 导入模块',
      p: ['imports?: Function[];'],
      pchild: ['imports 数组 会告诉 InDiv 哪些其它的 模块 是当前 模块 所需的', 'imports 数组中的这些模块（NvModule）与 JavaScript 模块不同，它们都是 NvModule 而不是常规的 JavaScript 模块。', '而是因为它带有 @NvModule 装饰器及其元数据。', '被 imports 的 模块 一定要有 exports，否则将无效。'],
      code: "\n  // NvModule M2\n  @NvModule({\n    components: [\n      R2,\n      RouteChild,\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      R2,\n      RouteChild,\n    ],\n  })\n  class M2 {}\n\n  // NvModule M1\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n    ],\n  })\n  export default class M1 {}\n "
    }, {
      title: '2. components 声明组件',
      p: ['components: Function[];'],
      pchild: ['components 用来声明 组件 。', '在 NvModule 中被声明的 组件 里，可以直接使用该 NvModule 中声明过的 组件 和被 imports 进来的 模块 导出过的 组件。'],
      code: "\n  // NvModule M2\n  @Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })\n  class PCChild {}\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    exports: [\n      PCChild,\n    ],\n  })\n  class M2 {}\n\n\n  // NvModule M1\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n    ],\n  })\n  export default class M1 {}\n\n "
    }, {
      title: '3. providers 声明被提供的服务',
      p: ['providers 用来声明被提供的服务。', '服务可以被声明在 模块 的 providers 中。', '被声明后，所有该模块的组件，被该模块导出的组件，和该模块中的服务都可以直接依赖模块中的所有服务。'],
      pchild: ['providers 有三种类型', '1. Function (相当于{provide: Function; useClass: Function;}的简写)，最简便的方法，但在 JavaScript 中无法使用', '2. { provide: any; useClass: Function; } 该类型将提供 provide 作为injectToken，并将 useClass 实例化提供给 DI 系统', '3. { provide: any; useValue: any; } 该类型将提供 provide 作为injectToken，并将 useValue 直接提供给 DI 系统', '在 TypeScript 中三种类型都可以使用，但 provide 必须为类(provide: Function)，因为要通过反射拿到 constructor 的参数类型作为 injectToken 进行匹配', '但在 JavaScript 中，仅仅可以使用后两种对象的形式，通过主动声明 provide 为字符串(provide: string)，再通过 Class 的静态属性 injectTokens 进行匹配'],
      code: "\n  // in TypeScript\n  @Injected\n  @Component({\n    selector: 'pp-childs',\n    template: ('\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>'),\n  })\n  class PCChild {\n    constructor (\n      private heroS: HeroSearchService2,\n    ) {\n      this.service = heroS;\n    }\n  }\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      PCChild,\n    ],\n  })\n  class M2 {}\n\n\n  // in JavaScript\n  class PCChild {\n    static injectTokens = [\n      'heroSearchService2'\n    ];\n\n    constructor (\n      private heroS,\n    ) {\n      this.service = heroS;\n    }\n  }\n  Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })(PCChild)\n\n  class M2 {}\n  NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      {\n        provide: 'heroSearchService2',\n        useClass: HeroSearchService2,\n      },\n    ],\n    exports: [\n      PCChild,\n    ],\n  })(M2)\n "
    }, {
      title: '4. exports 模块导出的组件',
      p: ['exports?: Function[];'],
      pchild: ['exports 用来声明模块被导出的组件（component）。', '模块只能导出可声明的类。它不会声明或导出任何其它类型的类。', '被模块导出的组件，可以随意在 导入该模块的模块（NvModule） 中的 组件（component） 使用。', '被模块导出的组件，只能获取模块本身声明的依赖，组件本身声明的依赖，和根模块声明的依赖。'],
      code: "\n  // NvModule M2\n  @Injectable\n  @Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })\n  class PCChild {\n    constructor (\n      private heroS: HeroSearchService2,\n    ) {\n      this.service = heroS;\n    }\n  }\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      PCChild,\n    ],\n  })\n  class M2 {}\n\n\n  // NvModule M1\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n    ],\n  })\n  export default class M1 {}\n\n "
    }, {
      title: '5. bootstrap 引导启动',
      p: ['bootstrap?: Function;'],
      pchild: ['从分类上说，入口组件是 InDiv 命令式加载的任意组件。', '如果你没有使用路由，则需要在 根模块 中将一个 组件 声明给该项，被声明的 组件 将作为 入口组件 被 InDiv 渲染到页面。', '如果你使用路由，则无需对此项赋值，因为路由会自动根据配置去找到需要渲染的页面。'],
      code: "\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    components: [\n      Container,\n    ],\n    bootstrap: Container,\n  })\n  export default class M1 {}\n "
    }]
  }];
};
},{}],"pages/docs/module/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, HasRender, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var module_1 = require("../../../constants/module");

var DocsModuleContainer =
/** @class */
function () {
  function DocsModuleContainer() {
    this.state = {
      info: module_1.moduleInfo()
    };
  }

  DocsModuleContainer.prototype.nvHasRender = function () {
    console.log('DocsTemplateContainer nvHasRender', this.state);
  };

  DocsModuleContainer = __decorate([src_1.Component({
    selector: 'docs-module-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsModuleContainer);
  return DocsModuleContainer;
}();

exports.default = DocsModuleContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/module":"constants/module.ts"}],"constants/service.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.serviceInfo = function () {
  return [{
    h1: '服务 与 依赖注入',
    p: ['组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。', '它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。', '不要使用 new 来创建服务，而要依靠 InDiv 的 依赖注入(DI) 机制把它注入到 组件或服务的 的构造函数中', 'v1.2.0开始，所有服务如果不手动指定则默认都为单例服务'],
    info: [{
      title: '装饰器 Injectable, Injected',
      p: ['v1.2.0版本开始将由 Injectable, Injected 分别代替1.1.0版本及以下的 Service, Injectable', '@Injectable: 会指出紧随其后的那个类是个服务，并为其指定元数据。', '@Injectable: 接收1个参数: { isSingletonMode?: boolean; }。 用来指出是否为 单例服务。', '@Injected: 不接受任何参数，而是用来提示 InDiv 该 class 有需要注入的服务。', '@Injected: 可以用在 组件（component） 和 服务（service） 上。'],
      pchild: ['1. 在 TypeScript 中，在视同我们可以直接在 构造函数 的参数中声明出参数及其类型，类型为需要被注入的 服务，并可以直接在实例中拿到，', '2. 但是在 JavaScript 中，只能通过在 在类的静态属性（injectTokens: string[]）中，把 需要被注入 服务（service） 的字符串provide放入数组，则构造函数中的每项则依次成为被注入的服务实例', '3. 通过使用 @Injected，服务里可以使用其他被注入的服务', '4. 参数 {isSingletonMode: boolean;} 用来告诉 模块 该服务是否为单例服务', '(1) v1.2.0+：如果不设置isSingletonMode则默认为 true，默认所有的都为全局单例，如果不想成为单例服务则需要自己声明', '(2) 如果不使用 Injectable 装饰器，直接在模块 providers 中声明，则默认为非单例服务'],
      code: "\n  // in TypeScript\n  @Injected\n  @Injectable({ isSingletonMode: false })\n  export default class HeroSearchService {\n    public hsr: HeroSearchService1; // \u670D\u52A1 HeroSearchService1 \u88AB\u6CE8\u5165, \u53EF\u4EE5\u76F4\u63A5\u7528 this.hsr\n    constructor(\n      private hsr: HeroSearchService1,\n    ) {\n      console.log(this.hsr)\n    }\n  }\n\n  // in JavaScript\n  export default class HeroSearchService {\n    static injectTokens: [\n      'heroSearchService1'\n    ];\n\n    constructor(\n      heroSearchService1, // \u670D\u52A1 HeroSearchService1 \u88AB\u6CE8\u5165\uFF0C \u8BE5\u5B9E\u4F8B\u5373\u4E3A \u53C2\u6570 heroSearchService1\n    ) {\n      this.hsr = heroSearchService1;\n      this.hsr.test();\n    }\n  }\n  Injectable({\n    isSingletonMode: false,\n  })(HeroSearchService);\n "
    }, {
      title: '依赖注入',
      p: ['依赖注入是一个很重要的设计模式。 它使用得非常广泛，以至于几乎每个人都把它简称为 DI 。', '依赖注入（DI）是用来创建对象及其依赖的其它对象的一种方式。 ', '当依赖注入系统创建某个对象实例时，会负责提供该对象所依赖的对象（称为该对象的依赖）。'],
      pchild: ['1. 在 模块（NvModule） 中的 providers 声明 需要被注入的 服务。', '2. 在 组件（Component） 中的 providers 声明 需要被注入的 服务。', '3. 模块中的声明过的服务，该模块中的所有组件和服务都可以注入。', '4. 根模块（root NvModule）中的声明过的服务，所有模块中的所有组件和服务都可以注入。', '5. 模块中声明过的服务，会根据 isSingletonMode 来判断是否为全局单例。', '6. 模块导出（exports）的 组件 在其他模块（NvModule）也可以仅可以使用原模块的服务。', '7. 组件声明的服务，在每个组件实例中都不共享实例，每次创建组件实例时都会创建一个新的服务实例。', '8. 组件声明的服务，仅仅可以依赖 根模块（root NvModule）中声明的服务和 该组件中声明的服务。'],
      code: "\n  @NvModule({\n    imports: [\n    ],\n    components: [\n        DocsContainer,\n    ],\n    providers: [\n      HeroSearchService,\n      {\n        provide: HeroSearchService1,\n        useClass: HeroSearchService,\n      },\n      {\n        provide: Value,\n        useValue: '11333',\n      }\n    ],\n    exports: [\n        DocsContainer,\n    ],\n  })\n  class DocsModule {}\n\n  @Component<State>({\n    selector: 'docs-container',\n    template: ('\n      <div class=\"page-wrapper\">\n          <h1>DocsContainer</h1>\n      </div>\n    '),\n  })\n  class DocsContainer {\n    constructor(\n      private heroService: HeroSearchService,\n      private heroSearchService1: HeroSearchService1,\n      private value: Value,\n    ) {}\n  }\n "
    }]
  }];
};
},{}],"pages/docs/service/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, HasRender, SetState, OnDestory } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var service_1 = require("../../../constants/service");

var DocsServiceContainer =
/** @class */
function () {
  function DocsServiceContainer() {
    this.state = {
      info: service_1.serviceInfo()
    };
  }

  DocsServiceContainer.prototype.nvOnDestory = function () {
    console.log(9999, 'DocsServiceContainer destory');
  };

  DocsServiceContainer.prototype.nvHasRender = function () {
    console.log('DocsServiceContainer nvHasRender', this.state);
  };

  DocsServiceContainer = __decorate([src_1.Component({
    selector: 'docs-service-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsServiceContainer);
  return DocsServiceContainer;
}();

exports.default = DocsServiceContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/service":"constants/service.ts"}],"constants/route.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.routeInfo = function () {
  return [{
    h1: '路由 与 导航',
    p: ['类似于其他前端框架，InDiv 也提供了一套路由来帮助页面渲染。让用户从一个视图导航到另一个视图。', '它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。', 'InDiv 的 Router（即“路由器”）借鉴了这个浏览器的导航模型。', '它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。', '你可以为页面中的链接绑定一个路由，这样，当用户点击链接时，就会导航到应用中相应的视图。', '当用户点击按钮、从下拉框中选取，或响应来自任何地方的事件时，你也可以在代码控制下进行导航。', '路由器还在浏览器的历史日志中记录下这些活动，这样浏览器的前进和后退按钮也能照常工作。'],
    info: [{
      title: '配置路由',
      p: ["\u8BE5\u914D\u7F6E\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u9700\u8981\u8BBE\u7F6E \u8DDF\u8DEF\u7531 '/'", '每个对应的路由应该有四个键值对，可以引入 TRouter 来看所有类型'],
      pchild: ['1. path: string; 路径，提供代码直接更改或在浏览器里访问, 可以设置成 /:id 这种params模式，但不能设置其他同级路由。', '2. component?: string; 需要渲染的 组件（component） 的 selector，如果没有 子路由（children） 并且有 重定向（redirectTo） 可以不写该项 ', '3. redirectTo?: string; 当访问此路径时，需要重定向的地址，值为路由的完整路径。', '4. children?: TRouter[]， 子路由，TRouter 重复上述所有配置'],
      code: "\n  const routes: TRouter[] = [\n    {\n      path: '/',\n      redirectTo: '/introduction',\n      component: 'root-component',\n      children: [\n        {\n          path: '/introduction',\n          component: 'introduction-container',\n        },\n        {\n          path: '/docs',\n          redirectTo: '/docs/component',\n          component: 'docs-container',\n          children: [\n            {\n                path: '/component',\n                component: 'docs-component-container',\n            },\n            {\n                path: '/template',\n                redirectTo: '/docs/component',\n                children: [{\n                  path: '/:id',\n                  component: 'docs-id-container',\n                }]\n            },\n          ],\n        },\n      ],\n    },\n  ];\n "
    }, {
      title: '路由 Router',
      p: ['需要声明一份路由的配置 router: TRouter[]，来告诉 路由（Router） 应该以什么样的模式渲染页面。', "\u9700\u8981\u8C03\u7528 setRootPath(rootPath: string): void \u65B9\u6CD5\uFF0C\u58F0\u660E\u4E00\u4E2A \u6839\u8DEF\u5F84\uFF08rootPath\uFF09 \u3002\u5982\u672A\u58F0\u660E\uFF0C\u5C06\u628A '/' \u5F53\u505A\u6839\u8DEF\u5F84\u3002", '路由提供一个 routeChange 的事件，可以监听到全局的路由变化。'],
      pchild: ['需要根据如下顺序设置路由', '1. 设置跟路由', '2. 初始化路由', '3. 开始监听路由变化'],
      code: "\n  import { Route, TRouter } from 'InDiv';\n\n  const router = new Router();\n\n  const routes: TRouter[] = ....;\n\n  router.setRootPath('/demo');\n  router.init(routes);\n  router.routeChange = (old: string, next: string) => {};\n "
    }, {
      title: '工具函数',
      p: ['InDiv 提供了一些函数，来方便跳转或获取路由相关参数。', '在组件（component）里可以通过引入相应的类型来使用。'],
      pchild: ['1. SetLocation: <Q, P>(path: string, query?: Q, params?: P, title?: string) => void;', '2. GetLocation: () => { path: string; query?: any; params?: any; data?: any; };', 'path: string; 当前路由的路径', 'query?: string; 拼在路由后面的query, request.query', 'params?: any; 如果该路径为 /:id 类似这种模式，则params 为 {id: 123}', 'data?: any; 额外传递的值', 'title?: string; 跳转路由时需要更改的 title'],
      code: "\n  import { GetLocation, SetLocation } from 'InDiv';\n  \n  class RoutrComponent {\n    public getLocation: GetLocation;\n    public setLocation: SetLocation;\n\n    constructor() {}\n    public nvOnInit() {\n      console.log('this.getLocation', this.getLocation());\n      this.setLocation('/R1/C1/D1', { b: '1' });\n    }\n  }\n "
    }]
  }];
};
},{}],"pages/docs/route/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var route_1 = require("../../../constants/route");

var DocsRouteContainer =
/** @class */
function () {
  function DocsRouteContainer() {
    this.state = {
      info: route_1.routeInfo()
    };
  }

  DocsRouteContainer = __decorate([src_1.Component({
    selector: 'docs-route-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsRouteContainer);
  return DocsRouteContainer;
}();

exports.default = DocsRouteContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/route":"constants/route.ts"}],"constants/indiv.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.inDivInfo = function () {
  return [{
    h1: '启动',
    p: ['通过引入 InDiv 来启动整个应用'],
    info: [{
      title: '引导启动',
      p: ['现在我们配置好了 模块，组件，服务，和路由，', '开始引入核心来启动整个应用！'],
      pchild: ['1. 实例化 InDiv', '2. 启动根模块（root NvModule）', '3. 使用 use 方法来启用中间件，例如 Route', '4. 使用 init 方法启动整个应用'],
      code: "\n  const inDiv = new InDiv();\n  inDiv.bootstrapModule(M1);\n  inDiv.use(router);\n  inDiv.init();\n "
    }]
  }];
};
},{}],"pages/docs/indiv/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var indiv_1 = require("../../../constants/indiv");

var DocsInDivContainer =
/** @class */
function () {
  function DocsInDivContainer() {
    this.state = {
      info: indiv_1.inDivInfo()
    };
  }

  DocsInDivContainer = __decorate([src_1.Component({
    selector: 'docs-indiv-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsInDivContainer);
  return DocsInDivContainer;
}();

exports.default = DocsInDivContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/indiv":"constants/indiv.ts"}],"constants/libs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.libInfo = function () {
  return [{
    h1: '工具函数',
    p: ['在开发过程中，使用了一些工具函数，现在我把它们继承在一个 Utils 类里。', '可以通过依赖注入系统注入直接使用该类的非单例实例，也可以自行 new 出一个实例。'],
    info: [{
      title: 'Utils',
      p: ['Utils 暴露出共6个方法'],
      pchild: ['1. setCookie(name: string, value: any, options?: any): void; 设置 cookie', '2. getCookie(name: string): any; 获取 cookie', '3. removeCookie(name: string): boolean; 移除 cookie', '4. getQuery(name: string): string; 获得location上query的某个字段', '5. isFunction(func: any): boolean; 判断是否是function', '6. isEqual(a: any, b: any): boolean; 深度判断两个东西是否相同', '7. isBrowser(): boolean; 判断是否为浏览器环境'],
      code: "\n  import { Utils, NvModule } from 'InDiv';\n\n  const utils = new Utils;\n\n  @NvModule({\n    components: [\n      DocsContainer,\n    ],\n    providers: [\n      Utils\n    ],\n  })\n  class DocsModule { }\n "
    }]
  }];
};
},{}],"pages/docs/libs/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, HasRender, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var libs_1 = require("../../../constants/libs");

var DocsLibsContainer =
/** @class */
function () {
  function DocsLibsContainer() {
    this.state = {
      info: libs_1.libInfo()
    };
  }

  DocsLibsContainer = __decorate([src_1.Component({
    selector: 'docs-libs-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsLibsContainer);
  return DocsLibsContainer;
}();

exports.default = DocsLibsContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/libs":"constants/libs.ts"}],"constants/http.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.httpInfo = function () {
  return [{
    h1: 'HTTP',
    p: ['Class NVHttp 是 InDiv 通过 HTTP 与远程服务器通讯的机制。'],
    info: [{
      title: 'NVHttp',
      p: ['通过封装 axios 库，InDiv 可以通过 NVHttp 发送网络请求。', 'NVHttp 共封装了5中方法，可以直接注入 NVHttp 使用该类的非单例实例，也可以自己 new 出一个实例。', '如果需要更多方法，欢迎通过使用 axios 来获得更多体验。'],
      pchild: ['1. get: <P = any, R = any>(url: string, params?: P): Promise<R>;', '2. delete: <P = any, R = any>(url: string, params?: P): Promise<R>;', '3. post?<P = any, R = any>(url: string, params?: P): Promise<R>;', '4. put?<P = any, R = any>(url: string, params?: P): Promise<R>;', '5. patch?<P = any, R = any>(url: string, params?: P): Promise<R>;'],
      code: "\n  import { NVHttp, NvModule,  } from 'InDiv';\n\n  @NvModule({\n    components: [\n      DocsContainer,\n    ],\n    providers: [\n      NVHttp\n    ],\n  })\n  class DocsModule { }\n  @Component({\n    selector: 'docs-container',\n    template: ('\n      <div class=\"page-wrapper\">\n        <p></p>\n      </div>\n    '),\n  })\n  class DocsContainer {\n    constructor( privite nvHttp: NVHttp ) {\n      nvHttp.get(url, params);\n      nvHttp.delete(url, params);\n      nvHttp.post(url, params);\n      nvHttp.put(url, params);\n      nvHttp.patch(url, params);\n    }\n  }\n "
    }]
  }];
};
},{}],"pages/docs/http/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { Component, SetState } from 'indiv';

var src_1 = require("../../../../../InDiv/src");

var http_1 = require("../../../constants/http");

var DocsHttpContainer =
/** @class */
function () {
  function DocsHttpContainer() {
    this.state = {
      info: http_1.httpInfo()
    };
  }

  DocsHttpContainer = __decorate([src_1.Component({
    selector: 'docs-http-container',
    template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsHttpContainer);
  return DocsHttpContainer;
}();

exports.default = DocsHttpContainer;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/http":"constants/http.ts"}],"modules/docs.module.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { NvModule } from 'indiv';

var src_1 = require("../../../InDiv/src");

var docs_1 = __importDefault(require("../pages/docs"));

var component_1 = __importDefault(require("../pages/docs/component"));

var template_1 = __importDefault(require("../pages/docs/template"));

var module_1 = __importDefault(require("../pages/docs/module"));

var service_1 = __importDefault(require("../pages/docs/service"));

var route_1 = __importDefault(require("../pages/docs/route"));

var indiv_1 = __importDefault(require("../pages/docs/indiv"));

var libs_1 = __importDefault(require("../pages/docs/libs"));

var http_1 = __importDefault(require("../pages/docs/http"));

var test_service_1 = __importDefault(require("../service/test.service"));

var DocsModule =
/** @class */
function () {
  function DocsModule() {}

  DocsModule = __decorate([src_1.NvModule({
    components: [docs_1.default, component_1.default, template_1.default, module_1.default, service_1.default, route_1.default, indiv_1.default, libs_1.default, http_1.default],
    providers: [{
      provide: test_service_1.default,
      useClass: test_service_1.default
    }],
    exports: [docs_1.default, component_1.default, template_1.default, module_1.default, service_1.default, route_1.default, indiv_1.default, libs_1.default, http_1.default]
  })], DocsModule);
  return DocsModule;
}();

exports.default = DocsModule;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/docs":"pages/docs/index.ts","../pages/docs/component":"pages/docs/component/index.ts","../pages/docs/template":"pages/docs/template/index.ts","../pages/docs/module":"pages/docs/module/index.ts","../pages/docs/service":"pages/docs/service/index.ts","../pages/docs/route":"pages/docs/route/index.ts","../pages/docs/indiv":"pages/docs/indiv/index.ts","../pages/docs/libs":"pages/docs/libs/index.ts","../pages/docs/http":"pages/docs/http/index.ts","../service/test.service":"service/test.service.ts"}],"pages/ssr/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"constants/ssr.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.ssrInfo = function () {
  return [{
    h1: '服务端渲染（SSR）',
    p: ['标准的 InDiv 应用会运行在浏览器中，', '当 JavaScript 脚本加载完毕后，它会在 DOM 中渲染页面，以响应用户的操作。', '但是在特殊场景，比如 SEO，需要提升在低性能设备上的渲染速度，需要迅速显示首屏时，', '可能服务端渲染更适合。', '它可以生成这些页面，并在浏览器请求时直接用它们给出响应。'],
    info: [{
      title: '工作原理',
      p: ['通过引入 @indiv/ssr-renderer 。', '@indiv/ssr-renderer 包提供了服务端的 DOM 实现，使得渲染 InDiv 应用不再依赖浏览器。', '通过 node 端，会把客户端对应用页面的请求传给 @indiv/ssr-renderer 中的 renderToString  函数，', '引入 indiv 实例和路由的配置对象，renderToString 会根据对应的路径，返回已经被渲染完的字符串模板。', '通过不同框架的渲染机制，将返回的字符串模板渲染到模板的 <div id="root"></div> 中。', '最后，服务器就会把渲染好的页面返回给客户端。'],
      pchild: ['1. 生命周期受到限制，服务端渲染中仅仅支持 constructor 和 OnInit 的调用。', '2. 因为 InDiv 的 nvHttp 对象是封装的 axios 库，因此支持在 node 环境中使用 http 请求。', '3. 通过 nv-on:eventName 方式绑定的方法暂时无法渲染。']
    }, {
      title: '环境及使用',
      p: ['Node.js: v6+', 'indiv: v1.1.0+', '@indiv/ssr-renderer: v1.0.0+', '本例子使用 express 及 ejs 模板，你也可以选择适合的 服务端框架 及 模板 。'],
      pchild: ['1. 创建 InDiv app', '2. 创建一个用于处理请求的 express Web 服务器', '3. 创建一个 ejs 模板', '4. 引入 @indiv/ssr-renderer 包 renderToString: (url: string, routes: TRouter[], indiv: InDiv) => string', '5. 将 request 的 url， indiv app路由配置对象，和 indiv实例 作为参数依次传入 renderToString', '6. 最后 renderToString 的返回值渲染至模板中'],
      code: "\n  // in index.ejs\n  <div id=\"root\">\n    <%- content %>\n  </div>\n\n  // in service side\n  const express = require('express');\n  const renderToString = require('@indiv/ssr-renderer');\n\n  const app = express();\n\n  app.use('/indiv-doc', (request, response, next) => {    \n    // import indiv app\n    const ssrData = require('./dist/main.js');\n    response.render('index.ejs', {\n      // use in ejs template\n      content: renderToString(request.url, ssrData.routes, ssrData.default.inDiv),\n    });\n  });\n    "
    }]
  }];
};
},{}],"pages/ssr/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var ssr_1 = require("../../constants/ssr");

var SSRContainer =
/** @class */
function () {
  function SSRContainer() {
    this.state = {
      info: ssr_1.ssrInfo()
    };
  }

  SSRContainer = __decorate([src_1.Component({
    selector: 'ssr-container',
    template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n                <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n                    <h2>{{code.title}}</h2>\n                    <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n                    <div class=\"pchild\" nv-if=\"code.pchild\">\n                    <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n                    </div>\n                    <code-shower nv-if=\"code.code\" codes=\"{code.code}\"></code-shower>\n                </div>\n            </div>\n        </div>\n    "
  }), __metadata("design:paramtypes", [])], SSRContainer);
  return SSRContainer;
}();

exports.default = SSRContainer;
},{"./style.less":"pages/ssr/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/ssr":"constants/ssr.ts"}],"modules/ssr.module.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { NvModule } from 'indiv';

var src_1 = require("../../../InDiv/src");

var ssr_1 = __importDefault(require("../pages/ssr"));

var SSRModule =
/** @class */
function () {
  function SSRModule() {}

  SSRModule = __decorate([src_1.NvModule({
    components: [ssr_1.default],
    exports: [ssr_1.default]
  })], SSRModule);
  return SSRModule;
}();

exports.default = SSRModule;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/ssr":"pages/ssr/index.ts"}],"components/root-component/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"components/root-component/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var RootComponent =
/** @class */
function () {
  function RootComponent() {}

  RootComponent = __decorate([src_1.Component({
    selector: 'root-component',
    template: "\n        <div class=\"app-container\">\n            <side-bar></side-bar>\n            <router-render></router-render>\n        </div>\n    "
  })], RootComponent);
  return RootComponent;
}();

exports.default = RootComponent;
},{"./style.less":"components/root-component/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"components/side-bars/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"constants/nav.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.navs = function () {
  return [{
    name: '介绍',
    to: '/introduction'
  }, {
    name: '构架',
    to: '/architecture'
  }, {
    name: '文档',
    to: '/docs',
    child: [{
      name: '组件',
      to: '/docs/component'
    }, {
      name: '模板语法',
      to: '/docs/template'
    }, {
      name: '服务 与 依赖注入',
      to: '/docs/service'
    }, {
      name: '模块',
      to: '/docs/module'
    }, {
      name: '路由 与 导航',
      to: '/docs/route'
    }, {
      name: '引导启动',
      to: '/docs/indiv'
    }, {
      name: '工具函数',
      to: '/docs/libs'
    }, {
      name: 'HTTP',
      to: '/docs/http'
    }]
  }, {
    name: '服务端渲染',
    to: '/ssr'
  }];
};
},{}],"components/side-bars/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component, OnInit, RouteChange, SetState, SetLocation, GetLocation, Injected } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var nav_1 = require("../../constants/nav");

var test_service_1 = __importDefault(require("../../service/test.service"));

var SideBar =
/** @class */
function () {
  function SideBar(testS) {
    this.testS = testS;
    this.subscribeToken = this.testS.subscribe(this.subscribe);
  }

  SideBar.prototype.subscribe = function (value) {
    console.log('RXJS value from SideBar', value);
  };

  SideBar.prototype.nvOnInit = function () {
    this.state = {
      navs: nav_1.navs()
    };
    this.showColor();
    console.log('SideBar onInit');
  };

  SideBar.prototype.nvRouteChange = function (lastRoute, newRoute) {
    // console.log(111111, newRoute);
    this.showColor();
  };

  SideBar.prototype.nvOnDestory = function () {
    console.log('SideBar nvOnDestory');
    this.subscribeToken.unsubscribe();
  };

  SideBar.prototype.showColor = function () {
    var location = this.getLocation();
    this.state.navs.forEach(function (nav) {
      nav.active = null;
      if (nav.to === location.path) return nav.active = 'active';

      if (nav.child) {
        nav.child.forEach(function (n) {
          n.active = null;

          if (n.to === location.path) {
            nav.active = 'active';
            n.active = 'active';
          }
        });
      }
    });
  };

  var _a;

  SideBar = __decorate([src_1.Injected, src_1.Component({
    selector: 'side-bar',
    template: "\n        <div class=\"side-bar-container\">\n            <div class=\"nav-wrap\" nv-class=\"nav.active\" nv-repeat=\"let nav in state.navs\">\n                <a class=\"nav\" nv-on:click=\"@setLocation(nav.to)\">{{nav.name}}</a>\n                <div class=\"child-wrap\" nv-if=\"nav.child\">\n                    <a class=\"nav nav-child\" nv-class=\"child.active\" nv-repeat=\"let child in nav.child\" nv-on:click=\"@setLocation(child.to)\">{{child.name}}</a>\n                </div>\n            </div>\n        </div>\n    "
  }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], SideBar);
  return SideBar;
}();

exports.default = SideBar;
},{"./style.less":"components/side-bars/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/nav":"constants/nav.ts","../../service/test.service":"service/test.service.ts"}],"components/code-show/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/css-loader.js"}],"components/code-show/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./style.less"); // import { Component, OnInit, SetState, SetLocation, GetLocation } from 'indiv';


var src_1 = require("../../../../InDiv/src");

var CodeShower =
/** @class */
function () {
  function CodeShower() {}

  CodeShower.prototype.nvOnInit = function () {
    this.state = {
      codes: this.props.codes
    };
  };

  CodeShower.prototype.show = function () {
    console.log(this.state.codes);
  };

  CodeShower = __decorate([src_1.Component({
    selector: 'code-shower',
    template: "\n        <div nv-on:click=\"@show()\" class=\"code-show-container\">\n            <blockquote>\n                <pre>\n                    <code>{{state.codes}}</code>\n                </pre>\n            </blockquote>\n        </div>\n    "
  })], CodeShower);
  return CodeShower;
}();

exports.default = CodeShower;
},{"./style.less":"components/code-show/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"modules/index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
}); // import { NvModule } from 'indiv';

var src_1 = require("../../../InDiv/src");

var introduction_module_1 = __importDefault(require("./introduction.module"));

var architecture_module_1 = __importDefault(require("./architecture.module"));

var docs_module_1 = __importDefault(require("./docs.module"));

var ssr_module_1 = __importDefault(require("./ssr.module"));

var root_component_1 = __importDefault(require("../components/root-component"));

var side_bars_1 = __importDefault(require("../components/side-bars"));

var code_show_1 = __importDefault(require("../components/code-show"));

var test_service_1 = __importDefault(require("../service/test.service"));

var RootModule =
/** @class */
function () {
  function RootModule() {}

  RootModule = __decorate([src_1.NvModule({
    imports: [introduction_module_1.default, architecture_module_1.default, docs_module_1.default, ssr_module_1.default],
    components: [side_bars_1.default, root_component_1.default, code_show_1.default],
    providers: [test_service_1.default]
  })], RootModule);
  return RootModule;
}();

exports.default = RootModule;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","./introduction.module":"modules/introduction.module.ts","./architecture.module":"modules/architecture.module.ts","./docs.module":"modules/docs.module.ts","./ssr.module":"modules/ssr.module.ts","../components/root-component":"components/root-component/index.ts","../components/side-bars":"components/side-bars/index.ts","../components/code-show":"components/code-show/index.ts","../service/test.service":"service/test.service.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./styles/reset");

require("./styles/global"); // import { InDiv } from 'indiv';


var src_1 = require("../../InDiv/src");

var routes_1 = __importDefault(require("./routes"));

var modules_1 = __importDefault(require("./modules"));

var inDiv = new src_1.InDiv();
inDiv.bootstrapModule(modules_1.default);
inDiv.use(routes_1.default);
inDiv.init();
console.log('indiv', inDiv);
},{"./styles/reset":"styles/reset.less","./styles/global":"styles/global.less","../../InDiv/src":"../../InDiv/src/index.ts","./routes":"routes/index.ts","./modules":"modules/index.ts"}],"../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49409" + '/');

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
},{}]},{},["../node_modules/_parcel-bundler@1.10.1@parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.map