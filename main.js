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
})({"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/bundle-url.js"}],"styles/reset.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"styles/global.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"../../InDiv/node_modules/core-js/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"../../InDiv/node_modules/core-js/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"../../InDiv/node_modules/core-js/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../../InDiv/node_modules/core-js/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/core-js/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"../../InDiv/node_modules/core-js/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_dom-create":"../../InDiv/node_modules/core-js/modules/_dom-create.js"}],"../../InDiv/node_modules/core-js/modules/_to-primitive.js":[function(require,module,exports) {
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

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/core-js/modules/_object-dp.js":[function(require,module,exports) {
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

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_ie8-dom-define":"../../InDiv/node_modules/core-js/modules/_ie8-dom-define.js","./_to-primitive":"../../InDiv/node_modules/core-js/modules/_to-primitive.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/core-js/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../../InDiv/node_modules/core-js/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/core-js/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../../InDiv/node_modules/core-js/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"../../InDiv/node_modules/core-js/modules/_redefine.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/core-js/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"../../InDiv/node_modules/core-js/modules/_ctx.js":[function(require,module,exports) {
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

},{"./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js"}],"../../InDiv/node_modules/core-js/modules/_export.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js"}],"../../InDiv/node_modules/core-js/modules/_typed.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js"}],"../../InDiv/node_modules/core-js/modules/_library.js":[function(require,module,exports) {
module.exports = false;

},{}],"../../InDiv/node_modules/core-js/modules/_redefine-all.js":[function(require,module,exports) {
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js"}],"../../InDiv/node_modules/core-js/modules/_an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"../../InDiv/node_modules/core-js/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"../../InDiv/node_modules/core-js/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js"}],"../../InDiv/node_modules/core-js/modules/_to-index.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/core-js/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../../InDiv/node_modules/core-js/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/core-js/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"../../InDiv/node_modules/core-js/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"../../InDiv/node_modules/core-js/modules/_iobject.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js"}],"../../InDiv/node_modules/core-js/modules/_array-includes.js":[function(require,module,exports) {
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

},{"./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js"}],"../../InDiv/node_modules/core-js/modules/_shared.js":[function(require,module,exports) {

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

},{"./_core":"../../InDiv/node_modules/core-js/modules/_core.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_library":"../../InDiv/node_modules/core-js/modules/_library.js"}],"../../InDiv/node_modules/core-js/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"../../InDiv/node_modules/core-js/modules/_shared.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js"}],"../../InDiv/node_modules/core-js/modules/_object-keys-internal.js":[function(require,module,exports) {
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

},{"./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_array-includes":"../../InDiv/node_modules/core-js/modules/_array-includes.js","./_shared-key":"../../InDiv/node_modules/core-js/modules/_shared-key.js"}],"../../InDiv/node_modules/core-js/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"../../InDiv/node_modules/core-js/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"../../InDiv/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../InDiv/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../InDiv/node_modules/core-js/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/_array-fill.js":[function(require,module,exports) {
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

},{"./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/core-js/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"../../InDiv/node_modules/core-js/modules/_shared.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_typed-buffer.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_typed":"../../InDiv/node_modules/core-js/modules/_typed.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_to-index":"../../InDiv/node_modules/core-js/modules/_to-index.js","./_object-gopn":"../../InDiv/node_modules/core-js/modules/_object-gopn.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_array-fill":"../../InDiv/node_modules/core-js/modules/_array-fill.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js"}],"../../InDiv/node_modules/core-js/modules/_species-constructor.js":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_set-species.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.array-buffer.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_typed":"../../InDiv/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../InDiv/node_modules/core-js/modules/_typed-buffer.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_species-constructor":"../../InDiv/node_modules/core-js/modules/_species-constructor.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_set-species":"../../InDiv/node_modules/core-js/modules/_set-species.js"}],"../../InDiv/node_modules/core-js/modules/_classof.js":[function(require,module,exports) {
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

},{"./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../../InDiv/node_modules/core-js/modules/_is-array-iter.js":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"../../InDiv/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../InDiv/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../InDiv/node_modules/core-js/modules/_object-dps.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/core-js/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/_object-create.js":[function(require,module,exports) {
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

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_object-dps":"../../InDiv/node_modules/core-js/modules/_object-dps.js","./_enum-bug-keys":"../../InDiv/node_modules/core-js/modules/_enum-bug-keys.js","./_shared-key":"../../InDiv/node_modules/core-js/modules/_shared-key.js","./_dom-create":"../../InDiv/node_modules/core-js/modules/_dom-create.js","./_html":"../../InDiv/node_modules/core-js/modules/_html.js"}],"../../InDiv/node_modules/core-js/modules/_object-gpo.js":[function(require,module,exports) {
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

},{"./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_shared-key":"../../InDiv/node_modules/core-js/modules/_shared-key.js"}],"../../InDiv/node_modules/core-js/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"../../InDiv/node_modules/core-js/modules/_classof.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js","./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js"}],"../../InDiv/node_modules/core-js/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/core-js/modules/_array-species-constructor.js":[function(require,module,exports) {
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

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_is-array":"../../InDiv/node_modules/core-js/modules/_is-array.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_array-species-create.js":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"../../InDiv/node_modules/core-js/modules/_array-species-constructor.js"}],"../../InDiv/node_modules/core-js/modules/_array-methods.js":[function(require,module,exports) {
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

},{"./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_iobject":"../../InDiv/node_modules/core-js/modules/_iobject.js","./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_array-species-create":"../../InDiv/node_modules/core-js/modules/_array-species-create.js"}],"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js"}],"../../InDiv/node_modules/core-js/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"../../InDiv/node_modules/core-js/modules/_iter-create.js":[function(require,module,exports) {
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

},{"./_object-create":"../../InDiv/node_modules/core-js/modules/_object-create.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_iter-define.js":[function(require,module,exports) {
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

},{"./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_iter-create":"../../InDiv/node_modules/core-js/modules/_iter-create.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports) {
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

},{"./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js","./_iter-step":"../../InDiv/node_modules/core-js/modules/_iter-step.js","./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_iter-define":"../../InDiv/node_modules/core-js/modules/_iter-define.js"}],"../../InDiv/node_modules/core-js/modules/_iter-detect.js":[function(require,module,exports) {
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

},{"./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_array-copy-within.js":[function(require,module,exports) {
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

},{"./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/core-js/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"../../InDiv/node_modules/core-js/modules/_object-gopd.js":[function(require,module,exports) {
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

},{"./_object-pie":"../../InDiv/node_modules/core-js/modules/_object-pie.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../InDiv/node_modules/core-js/modules/_to-primitive.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_ie8-dom-define":"../../InDiv/node_modules/core-js/modules/_ie8-dom-define.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/core-js/modules/_typed-array.js":[function(require,module,exports) {
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

},{"./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_typed":"../../InDiv/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../InDiv/node_modules/core-js/modules/_typed-buffer.js","./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_to-index":"../../InDiv/node_modules/core-js/modules/_to-index.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js","./_to-primitive":"../../InDiv/node_modules/core-js/modules/_to-primitive.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_classof":"../../InDiv/node_modules/core-js/modules/_classof.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_is-array-iter":"../../InDiv/node_modules/core-js/modules/_is-array-iter.js","./_object-create":"../../InDiv/node_modules/core-js/modules/_object-create.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_object-gopn":"../../InDiv/node_modules/core-js/modules/_object-gopn.js","./core.get-iterator-method":"../../InDiv/node_modules/core-js/modules/core.get-iterator-method.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js","./_array-methods":"../../InDiv/node_modules/core-js/modules/_array-methods.js","./_array-includes":"../../InDiv/node_modules/core-js/modules/_array-includes.js","./_species-constructor":"../../InDiv/node_modules/core-js/modules/_species-constructor.js","./es6.array.iterator":"../../InDiv/node_modules/core-js/modules/es6.array.iterator.js","./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_iter-detect":"../../InDiv/node_modules/core-js/modules/_iter-detect.js","./_set-species":"../../InDiv/node_modules/core-js/modules/_set-species.js","./_array-fill":"../../InDiv/node_modules/core-js/modules/_array-fill.js","./_array-copy-within":"../../InDiv/node_modules/core-js/modules/_array-copy-within.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.int8-array.js":[function(require,module,exports) {
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.uint8-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.int16-array.js":[function(require,module,exports) {
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.uint16-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.int32-array.js":[function(require,module,exports) {
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.uint32-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.float32-array.js":[function(require,module,exports) {
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/es6.typed.float64-array.js":[function(require,module,exports) {
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../InDiv/node_modules/core-js/modules/_typed-array.js"}],"../../InDiv/node_modules/core-js/modules/_iter-call.js":[function(require,module,exports) {
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

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/_for-of.js":[function(require,module,exports) {
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

},{"./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_iter-call":"../../InDiv/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../InDiv/node_modules/core-js/modules/_is-array-iter.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./core.get-iterator-method":"../../InDiv/node_modules/core-js/modules/core.get-iterator-method.js"}],"../../InDiv/node_modules/core-js/modules/_meta.js":[function(require,module,exports) {
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

},{"./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/_validate-collection.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/core-js/modules/_collection-strong.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_object-create":"../../InDiv/node_modules/core-js/modules/_object-create.js","./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/core-js/modules/_for-of.js","./_iter-define":"../../InDiv/node_modules/core-js/modules/_iter-define.js","./_iter-step":"../../InDiv/node_modules/core-js/modules/_iter-step.js","./_set-species":"../../InDiv/node_modules/core-js/modules/_set-species.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js"}],"../../InDiv/node_modules/core-js/modules/_set-proto.js":[function(require,module,exports) {
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

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js"}],"../../InDiv/node_modules/core-js/modules/_inherit-if-required.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_set-proto":"../../InDiv/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/core-js/modules/_collection.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_for-of":"../../InDiv/node_modules/core-js/modules/_for-of.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_iter-detect":"../../InDiv/node_modules/core-js/modules/_iter-detect.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js","./_inherit-if-required":"../../InDiv/node_modules/core-js/modules/_inherit-if-required.js"}],"../../InDiv/node_modules/core-js/modules/es6.map.js":[function(require,module,exports) {
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

},{"./_collection-strong":"../../InDiv/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/core-js/modules/es6.set.js":[function(require,module,exports) {
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

},{"./_collection-strong":"../../InDiv/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/core-js/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"../../InDiv/node_modules/core-js/modules/_object-assign.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../InDiv/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../InDiv/node_modules/core-js/modules/_object-pie.js","./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_iobject":"../../InDiv/node_modules/core-js/modules/_iobject.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/_collection-weak.js":[function(require,module,exports) {
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

},{"./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/core-js/modules/_for-of.js","./_array-methods":"../../InDiv/node_modules/core-js/modules/_array-methods.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js"}],"../../InDiv/node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports) {
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

},{"./_array-methods":"../../InDiv/node_modules/core-js/modules/_array-methods.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_object-assign":"../../InDiv/node_modules/core-js/modules/_object-assign.js","./_collection-weak":"../../InDiv/node_modules/core-js/modules/_collection-weak.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports) {
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

},{"./_collection-weak":"../../InDiv/node_modules/core-js/modules/_collection-weak.js","./_validate-collection":"../../InDiv/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../InDiv/node_modules/core-js/modules/_collection.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.apply.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/_invoke.js":[function(require,module,exports) {
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

},{}],"../../InDiv/node_modules/core-js/modules/_bind.js":[function(require,module,exports) {
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

},{"./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_invoke":"../../InDiv/node_modules/core-js/modules/_invoke.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.construct.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-create":"../../InDiv/node_modules/core-js/modules/_object-create.js","./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_bind":"../../InDiv/node_modules/core-js/modules/_bind.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.define-property.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_to-primitive":"../../InDiv/node_modules/core-js/modules/_to-primitive.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.delete-property.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.get.js":[function(require,module,exports) {
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

},{"./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.has.js":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.is-extensible.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/_own-keys.js":[function(require,module,exports) {
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

},{"./_object-gopn":"../../InDiv/node_modules/core-js/modules/_object-gopn.js","./_object-gops":"../../InDiv/node_modules/core-js/modules/_object-gops.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.own-keys.js":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_own-keys":"../../InDiv/node_modules/core-js/modules/_own-keys.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.set.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_set-proto":"../../InDiv/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/core-js/modules/_task.js":[function(require,module,exports) {


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

},{"./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_invoke":"../../InDiv/node_modules/core-js/modules/_invoke.js","./_html":"../../InDiv/node_modules/core-js/modules/_html.js","./_dom-create":"../../InDiv/node_modules/core-js/modules/_dom-create.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/core-js/modules/_microtask.js":[function(require,module,exports) {


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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_task":"../../InDiv/node_modules/core-js/modules/_task.js","./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js"}],"../../InDiv/node_modules/core-js/modules/_new-promise-capability.js":[function(require,module,exports) {
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

},{"./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js"}],"../../InDiv/node_modules/core-js/modules/_perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"../../InDiv/node_modules/core-js/modules/_user-agent.js":[function(require,module,exports) {

var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/_promise-resolve.js":[function(require,module,exports) {
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

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_new-promise-capability":"../../InDiv/node_modules/core-js/modules/_new-promise-capability.js"}],"../../InDiv/node_modules/core-js/modules/es6.promise.js":[function(require,module,exports) {


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

},{"./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_classof":"../../InDiv/node_modules/core-js/modules/_classof.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_a-function":"../../InDiv/node_modules/core-js/modules/_a-function.js","./_an-instance":"../../InDiv/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../InDiv/node_modules/core-js/modules/_for-of.js","./_species-constructor":"../../InDiv/node_modules/core-js/modules/_species-constructor.js","./_task":"../../InDiv/node_modules/core-js/modules/_task.js","./_microtask":"../../InDiv/node_modules/core-js/modules/_microtask.js","./_new-promise-capability":"../../InDiv/node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../../InDiv/node_modules/core-js/modules/_perform.js","./_user-agent":"../../InDiv/node_modules/core-js/modules/_user-agent.js","./_promise-resolve":"../../InDiv/node_modules/core-js/modules/_promise-resolve.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js","./_redefine-all":"../../InDiv/node_modules/core-js/modules/_redefine-all.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js","./_set-species":"../../InDiv/node_modules/core-js/modules/_set-species.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js","./_iter-detect":"../../InDiv/node_modules/core-js/modules/_iter-detect.js"}],"../../InDiv/node_modules/core-js/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js","./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_wks-ext":"../../InDiv/node_modules/core-js/modules/_wks-ext.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js"}],"../../InDiv/node_modules/core-js/modules/_enum-keys.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../InDiv/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../InDiv/node_modules/core-js/modules/_object-pie.js"}],"../../InDiv/node_modules/core-js/modules/_object-gopn-ext.js":[function(require,module,exports) {
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

},{"./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_object-gopn":"../../InDiv/node_modules/core-js/modules/_object-gopn.js"}],"../../InDiv/node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_has":"../../InDiv/node_modules/core-js/modules/_has.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_shared":"../../InDiv/node_modules/core-js/modules/_shared.js","./_set-to-string-tag":"../../InDiv/node_modules/core-js/modules/_set-to-string-tag.js","./_uid":"../../InDiv/node_modules/core-js/modules/_uid.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js","./_wks-ext":"../../InDiv/node_modules/core-js/modules/_wks-ext.js","./_wks-define":"../../InDiv/node_modules/core-js/modules/_wks-define.js","./_enum-keys":"../../InDiv/node_modules/core-js/modules/_enum-keys.js","./_is-array":"../../InDiv/node_modules/core-js/modules/_is-array.js","./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js","./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../InDiv/node_modules/core-js/modules/_to-primitive.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js","./_object-create":"../../InDiv/node_modules/core-js/modules/_object-create.js","./_object-gopn-ext":"../../InDiv/node_modules/core-js/modules/_object-gopn-ext.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_object-gopn":"../../InDiv/node_modules/core-js/modules/_object-gopn.js","./_object-pie":"../../InDiv/node_modules/core-js/modules/_object-pie.js","./_object-gops":"../../InDiv/node_modules/core-js/modules/_object-gops.js","./_library":"../../InDiv/node_modules/core-js/modules/_library.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js"}],"../../InDiv/node_modules/core-js/modules/_object-sap.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_core":"../../InDiv/node_modules/core-js/modules/_core.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.freeze.js":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.seal.js":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.prevent-extensions.js":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_meta":"../../InDiv/node_modules/core-js/modules/_meta.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.is-frozen.js":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.is-sealed.js":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.is-extensible.js":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.get-prototype-of.js":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_object-gpo":"../../InDiv/node_modules/core-js/modules/_object-gpo.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.get-own-property-names.js":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-sap":"../../InDiv/node_modules/core-js/modules/_object-sap.js","./_object-gopn-ext":"../../InDiv/node_modules/core-js/modules/_object-gopn-ext.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-assign":"../../InDiv/node_modules/core-js/modules/_object-assign.js"}],"../../InDiv/node_modules/core-js/modules/_same-value.js":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"../../InDiv/node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_same-value":"../../InDiv/node_modules/core-js/modules/_same-value.js"}],"../../InDiv/node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_set-proto":"../../InDiv/node_modules/core-js/modules/_set-proto.js"}],"../../InDiv/node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_to-absolute-index":"../../InDiv/node_modules/core-js/modules/_to-absolute-index.js"}],"../../InDiv/node_modules/core-js/modules/_string-at.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_string-at":"../../InDiv/node_modules/core-js/modules/_string-at.js"}],"../../InDiv/node_modules/core-js/modules/_string-repeat.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../InDiv/node_modules/core-js/modules/_to-integer.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports) {
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_string-repeat":"../../InDiv/node_modules/core-js/modules/_string-repeat.js"}],"../../InDiv/node_modules/core-js/modules/_is-regexp.js":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js","./_cof":"../../InDiv/node_modules/core-js/modules/_cof.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/_string-context.js":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_is-regexp":"../../InDiv/node_modules/core-js/modules/_is-regexp.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/_fails-is-regexp.js":[function(require,module,exports) {
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

},{"./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_string-context":"../../InDiv/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_string-context":"../../InDiv/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_string-context":"../../InDiv/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../InDiv/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../InDiv/node_modules/core-js/modules/_flags.js":[function(require,module,exports) {
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

},{"./_an-object":"../../InDiv/node_modules/core-js/modules/_an-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.regexp.flags.js":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":"../../InDiv/node_modules/core-js/modules/_descriptors.js","./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_flags":"../../InDiv/node_modules/core-js/modules/_flags.js"}],"../../InDiv/node_modules/core-js/modules/_fix-re-wks.js":[function(require,module,exports) {
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

},{"./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.regexp.match.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../InDiv/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.regexp.replace.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../InDiv/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/core-js/modules/es6.regexp.split.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../InDiv/node_modules/core-js/modules/_fix-re-wks.js","./_is-regexp":"../../InDiv/node_modules/core-js/modules/_is-regexp.js"}],"../../InDiv/node_modules/core-js/modules/es6.regexp.search.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../InDiv/node_modules/core-js/modules/_fix-re-wks.js"}],"../../InDiv/node_modules/core-js/modules/_create-property.js":[function(require,module,exports) {
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":"../../InDiv/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../InDiv/node_modules/core-js/modules/_property-desc.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports) {
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

},{"./_ctx":"../../InDiv/node_modules/core-js/modules/_ctx.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_to-object":"../../InDiv/node_modules/core-js/modules/_to-object.js","./_iter-call":"../../InDiv/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../InDiv/node_modules/core-js/modules/_is-array-iter.js","./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_create-property":"../../InDiv/node_modules/core-js/modules/_create-property.js","./core.get-iterator-method":"../../InDiv/node_modules/core-js/modules/core.get-iterator-method.js","./_iter-detect":"../../InDiv/node_modules/core-js/modules/_iter-detect.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_create-property":"../../InDiv/node_modules/core-js/modules/_create-property.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_array-copy-within":"../../InDiv/node_modules/core-js/modules/_array-copy-within.js","./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_array-methods":"../../InDiv/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_array-fill":"../../InDiv/node_modules/core-js/modules/_array-fill.js","./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.is-finite.js":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js"}],"../../InDiv/node_modules/core-js/modules/_is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"../../InDiv/node_modules/core-js/modules/_is-object.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_is-integer":"../../InDiv/node_modules/core-js/modules/_is-integer.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.is-safe-integer.js":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_is-integer":"../../InDiv/node_modules/core-js/modules/_is-integer.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.is-nan.js":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.epsilon.js":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.min-safe-integer.js":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.number.max-safe-integer.js":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/_math-log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"../../InDiv/node_modules/core-js/modules/es6.math.acosh.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-log1p":"../../InDiv/node_modules/core-js/modules/_math-log1p.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.asinh.js":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.atanh.js":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/_math-sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"../../InDiv/node_modules/core-js/modules/es6.math.cbrt.js":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-sign":"../../InDiv/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.clz32.js":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.cosh.js":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/_math-expm1.js":[function(require,module,exports) {
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

},{}],"../../InDiv/node_modules/core-js/modules/es6.math.expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/core-js/modules/_math-expm1.js"}],"../../InDiv/node_modules/core-js/modules/_math-fround.js":[function(require,module,exports) {
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

},{"./_math-sign":"../../InDiv/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-fround":"../../InDiv/node_modules/core-js/modules/_math-fround.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.hypot.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.imul.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-log1p":"../../InDiv/node_modules/core-js/modules/_math-log1p.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.log10.js":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.log2.js":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-sign":"../../InDiv/node_modules/core-js/modules/_math-sign.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.sinh.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/core-js/modules/_math-expm1.js","./_fails":"../../InDiv/node_modules/core-js/modules/_fails.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.tanh.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_math-expm1":"../../InDiv/node_modules/core-js/modules/_math-expm1.js"}],"../../InDiv/node_modules/core-js/modules/es6.math.trunc.js":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js"}],"../../InDiv/node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_array-includes":"../../InDiv/node_modules/core-js/modules/_array-includes.js","./_add-to-unscopables":"../../InDiv/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../InDiv/node_modules/core-js/modules/_object-to-array.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_object-pie":"../../InDiv/node_modules/core-js/modules/_object-pie.js"}],"../../InDiv/node_modules/core-js/modules/es7.object.values.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-to-array":"../../InDiv/node_modules/core-js/modules/_object-to-array.js"}],"../../InDiv/node_modules/core-js/modules/es7.object.entries.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_object-to-array":"../../InDiv/node_modules/core-js/modules/_object-to-array.js"}],"../../InDiv/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_own-keys":"../../InDiv/node_modules/core-js/modules/_own-keys.js","./_to-iobject":"../../InDiv/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../InDiv/node_modules/core-js/modules/_object-gopd.js","./_create-property":"../../InDiv/node_modules/core-js/modules/_create-property.js"}],"../../InDiv/node_modules/core-js/modules/_string-pad.js":[function(require,module,exports) {
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

},{"./_to-length":"../../InDiv/node_modules/core-js/modules/_to-length.js","./_string-repeat":"../../InDiv/node_modules/core-js/modules/_string-repeat.js","./_defined":"../../InDiv/node_modules/core-js/modules/_defined.js"}],"../../InDiv/node_modules/core-js/modules/es7.string.pad-start.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_string-pad":"../../InDiv/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../InDiv/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/core-js/modules/es7.string.pad-end.js":[function(require,module,exports) {
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

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_string-pad":"../../InDiv/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../InDiv/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/core-js/modules/web.timers.js":[function(require,module,exports) {

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

},{"./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_user-agent":"../../InDiv/node_modules/core-js/modules/_user-agent.js"}],"../../InDiv/node_modules/core-js/modules/web.immediate.js":[function(require,module,exports) {
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":"../../InDiv/node_modules/core-js/modules/_export.js","./_task":"../../InDiv/node_modules/core-js/modules/_task.js"}],"../../InDiv/node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports) {

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

},{"./es6.array.iterator":"../../InDiv/node_modules/core-js/modules/es6.array.iterator.js","./_object-keys":"../../InDiv/node_modules/core-js/modules/_object-keys.js","./_redefine":"../../InDiv/node_modules/core-js/modules/_redefine.js","./_global":"../../InDiv/node_modules/core-js/modules/_global.js","./_hide":"../../InDiv/node_modules/core-js/modules/_hide.js","./_iterators":"../../InDiv/node_modules/core-js/modules/_iterators.js","./_wks":"../../InDiv/node_modules/core-js/modules/_wks.js"}],"../../InDiv/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],"../../InDiv/node_modules/easier-cookie/build/index.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={set:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="",n="",i="",c="";if(r.expires){var a=new Date;a.setDate(a.getDate()+r.expires),o=";expires="+a.toGMTString()}r.path&&(n=";path="+r.path),r.domain&&(i=";domain="+r.domain),c=t instanceof Object?encodeURI(JSON.stringify(t)):encodeURI(t),document.cookie=encodeURI(e)+"="+c+o+n+i},get:function(e){if(!e)return null;for(var t=document.cookie.split("; "),r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===decodeURI(e)){var n=void 0;try{n=JSON.parse(decodeURI(o[1]))}catch(e){n=decodeURI(o[1])}return""===n?null:n}}return null},remove:function(e){try{return this.set(e,"",-1),!0}catch(t){return console.error("remove cookie "+e+" failed:",t),!1}}};exports.default=e;
},{}]},{},[1], null)
},{}],"../node_modules/_process@0.11.10@process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
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
    }
    // if setTimeout wasn't available but was latter defined
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
    }
    // if clearTimeout wasn't available but was latter defined
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
};

// v8 likes predictible objects
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
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous) previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate ? function () {
                return MakeDictionary(Object.create(null));
            } : supportsProto ? function () {
                return MakeDictionary({ __proto__: null });
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
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && undefined === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
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
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
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
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/false);
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
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
            if (IsUndefined(metadataMap)) return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
            if (IsUndefined(metadataMap)) return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
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
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/false);
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
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null) return 1 /* Null */;
            switch (typeof x) {
                case "undefined":
                    return 0 /* Undefined */;
                case "boolean":
                    return 2 /* Boolean */;
                case "string":
                    return 3 /* String */;
                case "symbol":
                    return 4 /* Symbol */;
                case "number":
                    return 5 /* Number */;
                case "object":
                    return x === null ? 1 /* Null */ : 6 /* Object */;
                default:
                    return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */:
                    return input;
                case 1 /* Null */:
                    return input;
                case 2 /* Boolean */:
                    return input;
                case 3 /* String */:
                    return input;
                case 4 /* Symbol */:
                    return input;
                case 5 /* Number */:
                    return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result)) throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
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
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key)) return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */:
                    return true;
                case 4 /* Symbol */:
                    return true;
                default:
                    return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null) return undefined;
            if (!IsCallable(func)) throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method)) throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator)) throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f) f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype) return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype) return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function") return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O) return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
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
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
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
                    return { value: value, done: true };
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
                    return this._find(key, /*insert*/false) >= 0;
                };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/false);
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
        }
        // naive Set shim
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
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/false);
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
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
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
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
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
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
},{"process":"../node_modules/_process@0.11.10@process/browser.js"}],"../../InDiv/src/Injectable/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
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
        _constructor.instance = null;
        _constructor._injectedProviders = new Map();
        _constructor.getInstance = function (args) {
            if (!_constructor.isSingletonMode) return Reflect.construct(_constructor, args);
            if (_constructor.isSingletonMode) {
                if (!_constructor.instance) _constructor.instance = Reflect.construct(_constructor, args);
                return _constructor.instance;
            }
        };
    };
}
exports.Injectable = Injectable;
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
exports.Injected = Injected;
/**
 * injector: build arguments for factoryCreator
 *
 * @export
 * @param {Function} _constructor
 * @param {*} _module
 * @returns {any[]}
 */
function injector(_constructor, _module) {
    var args = [];
    // for ts Dependency Injection
    if (_constructor._needInjectedClass) {
        _constructor._needInjectedClass.forEach(function (arg) {
            var _service = _constructor._injectedProviders.has(arg) ? _constructor._injectedProviders.get(arg) : _module.$providers.find(function (service) {
                return service === arg;
            });
            if (_service && _service.useClass) args.push(factoryCreator(_service.useClass, _module));
            if (_service && _service.useValue) args.push(_service.useValue);
            if (_service && !_service.useClass && !_service.useValue) args.push(factoryCreator(_service, _module));
        });
    }
    // for js Dependency Injection
    if (_constructor.injectTokens) {
        _constructor.injectTokens.forEach(function (arg) {
            var _service = _constructor._injectedProviders.has(arg) ? _constructor._injectedProviders.get(arg) : _module.$providers.find(function (service) {
                if (service.provide && service.provide === arg) return true;
                return false;
            });
            if (_service && _service.useClass) args.push(factoryCreator(_service.useClass, _module));
            if (_service && _service.useValue) args.push(_service.useValue);
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
 * @param {*} _module
 * @returns {*}
 */
function factoryCreator(_constructor, _module) {
    var args = injector(_constructor, _module);
    var factory = Reflect.construct(_constructor, args);
    if (_constructor.isSingletonMode) factory = _constructor.getInstance(args);
    return factory;
}
exports.factoryCreator = factoryCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvSW5qZWN0YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQU0xQjs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLE9BQTRCO0lBQ25ELE9BQU8sVUFBVSxZQUFzQjtRQUNsQyxZQUFvQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDN0MsSUFBSSxPQUFPO1lBQUcsWUFBb0IsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUM1RSxZQUFvQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckMsWUFBb0IsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BELFlBQW9CLENBQUMsV0FBVyxHQUFHLFVBQUMsSUFBWTtZQUM3QyxJQUFJLENBQUUsWUFBb0IsQ0FBQyxlQUFlO2dCQUFFLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekYsSUFBSyxZQUFvQixDQUFDLGVBQWUsRUFBRTtnQkFDdkMsSUFBSSxDQUFFLFlBQW9CLENBQUMsUUFBUTtvQkFBRyxZQUFvQixDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUcsT0FBUSxZQUFvQixDQUFDLFFBQVEsQ0FBQzthQUN6QztRQUNMLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztBQUNOLENBQUM7QUFkRCxnQ0FjQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxZQUFzQjtJQUMzQyxrQkFBa0I7SUFDbEIsSUFBTSxXQUFXLEdBQW9CLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUYsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0s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
},{"reflect-metadata":"../../InDiv/node_modules/reflect-metadata/Reflect.js"}],"../../InDiv/src/Utils/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var easier_cookie_1 = __importDefault(require("easier-cookie"));
var Injectable_1 = require("../Injectable");
/**
 * utils for InDiv
 *
 * @class Utils
 */
var Utils = /** @class */function () {
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
        if (a === b) return a !== 0 || 1 / a === 1 / b;
        // typeof null 的结果为 object ，这里做判断，是为了让有 null 的情况尽早退出函数
        if (a == null || b == null) return false;
        // 判断 NaN
        if (a !== a) return b !== b;
        // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
        var type = typeof a === "undefined" ? "undefined" : _typeof(a);
        if (type !== 'function' && type !== 'object' && (typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object') return false;
        // 更复杂的对象使用 deepEq 函数进行深度比较
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
        var areArrays = className === '[object Array]';
        // 不是数组
        if (!areArrays) {
            // 过滤掉两个函数的情况
            if ((typeof a === "undefined" ? "undefined" : _typeof(a)) !== 'object' || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== 'object') return false;
            var aCtor = a.constructor;
            var bCtor = b.constructor;
            // aCtor 和 bCtor 必须都存在并且都不是 Object 构造函数的情况下，aCtor 不等于 bCtor， 那这两个对象就真的不相等啦
            if (aCtor !== bCtor && !(this.isFunction(aCtor) && aCtor instanceof aCtor && this.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
                return false;
            }
        }
        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        // 检查是否有循环引用的部分
        while (length--) {
            if (aStack[length] === a) {
                return bStack[length] === b;
            }
        }
        aStack.push(a);
        bStack.push(b);
        // 数组判断
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
    Utils = __decorate([Injectable_1.Injectable({
        isSingletonMode: false
    }), __metadata("design:paramtypes", [])], Utils);
    return Utils;
}();
exports.default = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvVXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBbUM7QUFFbkMsNENBQTJDO0FBRTNDOzs7O0dBSUc7QUFJSDtJQUNFOzs7T0FHRztJQUNIO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHlCQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxLQUFVLEVBQUUsT0FBYTtRQUN0RCx1QkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSx5QkFBUyxHQUFoQixVQUFpQixJQUFZO1FBQzNCLE9BQU8sdUJBQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLDRCQUFZLEdBQW5CLFVBQW9CLElBQVk7UUFDOUIsT0FBTyx1QkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksMEJBQVUsR0FBakIsVUFBa0IsTUFBVztRQUMzQixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLEtBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLENBQUMsRUFBRTtnQkFDcEMsS0FBSyxJQUFPLEdBQUcsU0FBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFB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
},{"easier-cookie":"../../InDiv/node_modules/easier-cookie/build/index.js","../Injectable":"../../InDiv/src/Injectable/index.ts"}],"../../InDiv/src/Lifecycle/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvTGlmZWN5Y2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
},{}],"../../InDiv/src/Watcher/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var utils = new Utils_1.default();
/**
 * Watcher for InDiv
 *
 * @class Watcher
 */
var Watcher = /** @class */function () {
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
        if (!data || (typeof data === "undefined" ? "undefined" : _typeof(data)) !== 'object') return;
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
                    if (utils.isEqual(newVal, val)) return;
                    // for watcher method
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvV2F0Y2hlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUE2QjtBQUU3QixJQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0FBRTFCOzs7O0dBSUc7QUFDSDtJQUtFOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsaUJBQ0UsSUFBUyxFQUNULE9BQW9CLEVBQ3BCLE1BQWtCO1FBRWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSwyQkFBUyxHQUFoQixVQUFpQixJQUFTO1FBQ3hCLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtZQUFFLE9BQU87UUFDOUMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO2dDQUNMLEdBQUc7WUFDWixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQy9CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsR0FBRztvQkFDRCxPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUNELEdBQUcsWUFBQyxNQUFXO29CQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO3dCQUFFLE9BQU87b0JBRXZDLHFCQUFxQjtvQkFDckIsSUFBSSxPQUFPLENBQUM7b0JBQ1osSUFBSSxFQUFFLENBQUMsT0FBTzt3QkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUU5RCxHQUFHLEdBQUcsTUFBTSxDQUFDO29CQUNiLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLElBQUksRUFBRSxDQUFDLE9BQU87d0JBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxFQUFFLENBQUMsTUFBTTt3QkFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdCLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBdEJELEtBQUssSUFBTSxHQUFHLElBQUksSUFBSTtvQkFBWCxHQUFHO1NBc0JiO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBRUQsa0JBQWUsT0FBTyxDQUFDIn0=
},{"../Utils":"../../InDiv/src/Utils/index.ts"}],"../../InDiv/src/KeyWatcher/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var utils = new Utils_1.default();
/**
 * watch a key of an Object
 *
 * @class KeyWatcher
 */
var KeyWatcher = /** @class */function () {
    function KeyWatcher(data, key, watcher) {
        this.data = data;
        this.key = key;
        this.watcher = watcher;
        this.watchData(this.data, this.key);
    }
    KeyWatcher.prototype.watchData = function (data, key) {
        if (!data || (typeof data === "undefined" ? "undefined" : _typeof(data)) !== 'object' || !data[key]) return;
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
                    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === 'object') oldData = JSON.parse(JSON.stringify(val));
                    if ((typeof val === "undefined" ? "undefined" : _typeof(val)) !== 'object' && typeof val !== 'function') oldData = val;
                }
                val = newVal;
                if (vm.watcher) vm.watcher(oldData);
            }
        });
    };
    return KeyWatcher;
}();
exports.default = KeyWatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvS2V5V2F0Y2hlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLG1EQUE2QjtBQUU3QixJQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0FBRTFCOzs7O0dBSUc7QUFDSDtJQUtFLG9CQUFZLElBQVMsRUFBRSxHQUFXLEVBQUUsT0FBb0I7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixJQUFTLEVBQUUsR0FBVztRQUNyQyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEdBQUc7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDO1lBQ0QsR0FBRyxZQUFDLE1BQVc7Z0JBQ2IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7b0JBQUUsT0FBTztnQkFFdkMsSUFBSSxPQUFPLENBQUM7Z0JBQ1osSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNkLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTt3QkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVU7d0JBQUUsT0FBTyxHQUFHLEdBQUcsQ0FBQztpQkFDekU7Z0JBRUQsR0FBRyxHQUFHLE1BQU0sQ0FBQztnQkFFYixJQUFJLEVBQUUsQ0FBQyxPQUFPO29CQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFFRCxrQkFBZSxVQUFVLENBQUMifQ==
},{"../Utils":"../../InDiv/src/Utils/index.ts"}],"../../InDiv/src/VirtualDOM/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vnode
 *
 * @class Vnode
 */
var Vnode = /** @class */function () {
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
    var nEventTypes = JSON.parse(newVnode.eventTypes);
    // 全部更新为新的事件
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
    }
    // 最后要更新下 eventTypes，否则下次 oldVnode.eventTypes 将为最开始的eventTypes
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
    if (!patchList) {
        console.error('patchList can not be null, diffVnode must need an Array');
        return;
    }
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
var VirtualDOM = {
    parseToVnode: parseToVnode,
    diffVnode: diffVnode,
    renderVnode: renderVnode
};
exports.default = VirtualDOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvVmlydHVhbERPTS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDSDtJQWNFOzs7O09BSUc7SUFDSCxlQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7QUFFRDs7Ozs7R0FLRztBQUNILFNBQVMsWUFBWSxDQUFDLElBQVU7SUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQztJQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztRQUFFLE9BQU8sTUFB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
},{}],"../../InDiv/src/CompileUtils/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * compile util for nv-repeat DOM
 *
 * @export
 * @class CompileUtilForRepeat
 */
var CompileUtilForRepeat = /** @class */function () {
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
    CompileUtilForRepeat.prototype.bind = function (node, key, dir, exp, index, vm, watchValue) {
        var repeatValue = node.repeatData[key];
        var value;
        if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
            value = this._getVMRepeatVal(repeatValue, exp, key);
        } else {
            value = this._getVMVal(vm, exp);
        }
        var watchData;
        if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
            watchData = watchValue;
        } else {
            watchData = this._getVMVal(vm, exp);
        }
        if (!node.hasChildNodes()) this.templateUpdater(node, repeatValue, key, vm);
        var updaterFn = this[dir + "Updater"];
        switch (dir) {
            case 'model':
                if (updaterFn) updaterFn.call(this, node, value, exp, key, index, watchData, vm);
                break;
            default:
                if (updaterFn) updaterFn.call(this, node, value);
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
                    var value = void 0;
                    if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
                        value = this._getVMRepeatVal(val, exp, key);
                    } else {
                        value = this._getVMVal(vm, exp);
                    }
                    node.textContent = node.textContent.replace(textList[i], value);
                }
            }
        }
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
     * update attribute src for nv-src
     *
     * @param {Element} node
     * @param {*} value
     * @memberof CompileUtilForRepeat
     */
    CompileUtilForRepeat.prototype.srcUpdater = function (node, value) {
        if (value) node.src = value;
    };
    /**
     * update attribute href for nv-href
     *
     * @param {Element} node
     * @param {*} value
     * @memberof CompileUtilForRepeat
     */
    CompileUtilForRepeat.prototype.hrefUpdater = function (node, value) {
        if (value) node.href = value;
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
            }
            if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
                if (_typeof(watchData[index]) !== 'object') watchData[index] = event.target.value;
                if (_typeof(watchData[index]) === 'object') {
                    var vals = utilVm._getValueByValue(watchData[index], exp, key);
                    vals = event.target.value;
                    utilVm._setValueByValue(watchData[index], exp, key, vals);
                }
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
    CompileUtilForRepeat.prototype.keyUpdater = function (node, value) {
        node.indiv_repeat_key = value;
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
        var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
        var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/ /g, '').split(',');
        var fn = vm;
        fnList.forEach(function (f) {
            fn = fn[f];
        });
        var utilVm = this;
        var func = function func(event) {
            var _this = this;
            var argsList = [];
            args.forEach(function (arg) {
                if (arg === '') return false;
                if (arg === '$event') return argsList.push(event);
                if (arg === '$element') return argsList.push(node);
                if (/(state.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
                if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
                if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
                if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
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
var CompileUtil = /** @class */function () {
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
        valueList.forEach(function (v, index) {
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
            // compile unrepeatNode's attributes
            switch (dir) {
                case 'model':
                    if (updaterFn) updaterFn.call(this, node, this._getVMVal(vm, exp), exp, vm);
                    break;
                default:
                    if (updaterFn) updaterFn.call(this, node, this._getVMVal(vm, exp));
            }
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
        node.textContent = node.textContent.replace(exp, this._getVMVal(vm, exp.replace('{{', '').replace('}}', '')));
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
     * update attribute src for nv-src
     *
     * @param {Element} node
     * @param {*} value
     * @memberof CompileUtil
     */
    CompileUtil.prototype.srcUpdater = function (node, value) {
        if (value) node.src = value;
    };
    /**
     * update attribute href for nv-href
     *
     * @param {Element} node
     * @param {*} value
     * @memberof CompileUtil
     */
    CompileUtil.prototype.hrefUpdater = function (node, value) {
        if (value) node.href = value;
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
        if (value && !(value instanceof Array)) {
            console.error('compile error: nv-repeat need an Array!');
            return;
        }
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
                            new CompileUtilForRepeat(_this.$fragment).bind(newElement, key, dir, exp, index, vm, value);
                        }
                        newElement.removeAttribute(attrName);
                    }
                });
            }
            // first insert node before repeatnode, and remove repeatnode in Compile
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
                            new CompileUtilForRepeat(node).bind(child, key, dir, exp, index, vm, watchValue);
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
                    var newWatchData = restRepeat.value.split(' ')[3];
                    // first compile and then remove repeatNode
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
            return (/^\{(.+)\}$/.test(attr.value)
            );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvQ29tcGlsZVV0aWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBa0JBOzs7OztHQUtHO0FBQ0g7SUFJRTs7Ozs7T0FLRztJQUNILDhCQUFZLFFBQXFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLCtDQUFnQixHQUF2QixVQUF3QixFQUFPLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDdkQsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLENBQUM7Z0JBQUUsT0FBTztZQUNyQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksK0NBQWdCLEdBQXZCLFVBQXdCLEVBQU8sRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLFFBQWE7UUFDdEUsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksT0FBTyxDQUFDO1FBQ1osU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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
},{}],"../../InDiv/src/Compile/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOM_1 = __importDefault(require("../VirtualDOM"));
var Utils_1 = __importDefault(require("../Utils"));
var CompileUtils_1 = require("../CompileUtils");
var utils = new Utils_1.default();
/**
 * main compiler
 *
 * @class Compile
 */
var Compile = /** @class */function () {
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
            var oldVnode = VirtualDOM_1.default.parseToVnode(this.$el);
            var newVnode = VirtualDOM_1.default.parseToVnode(this.$fragment);
            var patchList = [];
            VirtualDOM_1.default.diffVnode(oldVnode, newVnode, patchList);
            VirtualDOM_1.default.renderVnode(patchList);
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
            if (_this.isElementNode(node)) {
                _this.compile(node, fragment);
            }
            if (_this.isTextNode(node) && reg.test(text)) {
                var textList = text.match(/(\{\{(state\.)[^\{\}]+?\}\})/g);
                if (textList && textList.length > 0) {
                    for (var i = 0; i < textList.length; i++) {
                        _this.compileText(node, textList[i]);
                    }
                }
            }
            // after compile repeatNode, remove repeatNode
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
                    if (_this.isEventDirective(dir)) {
                        _this.eventHandler(node, _this.$vm, exp, dir);
                    } else {
                        new CompileUtils_1.CompileUtil(fragment).bind(node, _this.$vm, exp, dir);
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
     * compile event and build eventType in DOM
     *
     * @param {Element} node
     * @param {*} vm
     * @param {string} exp
     * @param {string} eventName
     * @memberof Compile
     */
    Compile.prototype.eventHandler = function (node, vm, exp, eventName) {
        var eventType = eventName.split(':')[1];
        var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
        var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
        var fn = vm;
        fnList.forEach(function (f) {
            fn = fn[f];
        });
        var func = function func(event) {
            var argsList = [];
            args.forEach(function (arg) {
                if (arg === '') return false;
                if (arg === '$event') return argsList.push(event);
                if (arg === '$element') return argsList.push(node);
                if (/(state.).*/g.test(arg)) return argsList.push(new CompileUtils_1.CompileUtil()._getVMVal(vm, arg));
                if (/\'.*\'/g.test(arg)) return argsList.push(arg.match(/\'(.*)\'/)[1]);
                if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) return argsList.push(Number(arg));
                if (arg === 'true' || arg === 'false') return argsList.push(arg === 'true');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvQ29tcGlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLDZEQUF1QztBQUN2QyxtREFBNkI7QUFDN0IsZ0RBQThDO0FBRTlDLElBQU0sS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7QUFFMUI7Ozs7R0FJRztBQUNIO0lBTUU7Ozs7OztPQU1HO0lBQ0gsaUJBQVksRUFBb0IsRUFBRSxFQUFPLEVBQUUsZUFBeUI7UUFDbEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFZLENBQUMsQ0FBQztRQUN6RixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsbUJBQW1CO2dCQUNuQixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDakY7WUFFRCxJQUFJLFFBQVEsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxD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
},{"../VirtualDOM":"../../InDiv/src/VirtualDOM/index.ts","../Utils":"../../InDiv/src/Utils/index.ts","../CompileUtils":"../../InDiv/src/CompileUtils/index.ts"}],"../../InDiv/src/Component/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Compile_1 = __importDefault(require("../Compile"));
var Watcher_1 = __importDefault(require("../Watcher"));
var Utils_1 = __importDefault(require("../Utils"));
var CompileUtils_1 = require("../CompileUtils");
var Injectable_1 = require("../Injectable");
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
        vm.$template = options.template;
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
            history.pushState({ path: path, query: query, data: data }, title, "" + rootPath + path + utils.buildQuery(query));
            this.$vm.$esRouteObject = { path: path, query: query, data: data };
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
            this.$componentList.forEach(function (component) {
                if (component.scope.render) component.scope.render();
                if (component.scope.nvAfterMount) component.scope.nvAfterMount();
            });
            if (this.nvHasRender) this.nvHasRender();
        };
        vm.reRender = function () {
            var dom = this.renderDom;
            var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
            var compile = new Compile_1.default(dom, this, routerRenderDom);
            this.mountComponent(dom);
            this.$componentList.forEach(function (component) {
                if (component.scope.render) component.scope.reRender();
                if (component.scope.nvAfterMount) component.scope.nvAfterMount();
            });
            if (this.nvHasRender) this.nvHasRender();
        };
        vm.mountComponent = function (dom) {
            var _this = this;
            var cacheStates = [];
            this.$componentList.forEach(function (component) {
                cacheStates.push(component);
            });
            this.componentsConstructor(dom);
            this.$componentList.forEach(function (component) {
                // find Component from cache
                var cacheComponent = cacheStates.find(function (cache) {
                    return cache.dom === component.dom;
                });
                if (cacheComponent) {
                    component.scope = cacheComponent.scope;
                    // old props: component.scope.props
                    // new props: component.props
                    if (!utils.isEqual(component.scope.props, component.props)) {
                        if (component.scope.nvReceiveProps) component.scope.nvReceiveProps(component.props);
                        component.scope.props = component.props;
                    }
                }
                component.scope.$vm = _this.$vm;
                component.scope.$components = _this.$components;
                if (component.scope.nvOnInit && !cacheComponent) component.scope.nvOnInit();
                if (component.scope.watchData) component.scope.watchData();
                if (component.scope.nvBeforeMount) component.scope.nvBeforeMount();
            });
        };
        vm.componentsConstructor = function (dom) {
            var _this = this;
            this.$componentList = [];
            var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
            this.constructor._injectedComponents.forEach(function (injectedComponent) {
                if (!_this.$components.find(function (component) {
                    return component.$selector === injectedComponent.$selector;
                })) _this.$components.push(injectedComponent);
            });
            var _loop_1 = function _loop_1(i) {
                var name = this_1.$components[i].$selector;
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
                                if (/^(\@.).*/g.test(prop[1])) {
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
                            }
                            // can't remove indiv_repeat_key
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
            var this_1 = this;
            for (var i = 0; i <= this.$components.length - 1; i++) {
                _loop_1(i);
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
            var _component = Injectable_1.factoryCreator(ComponentClass, this.$vm.$rootModule);
            _component.props = props;
            _component.renderDom = dom;
            _component.$components = this.$components;
            return _component;
        };
    };
}
exports.default = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvQ29tcG9uZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsdURBQWlDO0FBQ2pDLHVEQUFpQztBQUNqQyxtREFBNkI7QUFDN0IsZ0RBQThDO0FBQzlDLDRDQUErQztBQVEvQyxJQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0FBRTFCOzs7Ozs7Ozs7O0dBVUc7QUFDSCxTQUFTLFNBQVMsQ0FBcUMsT0FBMEI7SUFDL0UsT0FBTyxVQUFVLFlBQXNCO1FBQ3BDLFlBQW9CLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsSUFBTSxFQUFFLEdBQWlDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDaEUsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWhDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDbkMsRUFBRSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFFdkIsRUFBRSxDQUFDLFdBQVcsR0FBRztZQU1mLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLE9BQU87Z0JBQ0wsSUFBSSxFQUFHLElBQXFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNwRSxLQUFLLEVBQUcsSUFBcUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUs7Z0JBQ3RFLE1BQU0sRUFBRyxJQUFxQyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0I7Z0JBQ3ZFLElBQUksRUFBRyxJQUFxQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSTthQUNyRSxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLFdBQVcsR0FB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
},{"../Compile":"../../InDiv/src/Compile/index.ts","../Watcher":"../../InDiv/src/Watcher/index.ts","../Utils":"../../InDiv/src/Utils/index.ts","../CompileUtils":"../../InDiv/src/CompileUtils/index.ts","../Injectable":"../../InDiv/src/Injectable/index.ts"}],"../../InDiv/src/types/compile.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0luRGl2L3NyYy90eXBlcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
},{}],"../../InDiv/src/types/compileUtils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZVV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW5EaXYvc3JjL3R5cGVzL2NvbXBpbGVVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
},{}],"../../InDiv/src/types/component.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW5EaXYvc3JjL3R5cGVzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
},{}],"../../InDiv/src/types/indiv.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaXYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvdHlwZXMvaW5kaXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
},{}],"../../InDiv/src/types/nvModule.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnZNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvdHlwZXMvbnZNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
},{}],"../../InDiv/src/types/keyWatcher.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5V2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0luRGl2L3NyYy90eXBlcy9rZXlXYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
},{}],"../../InDiv/src/types/router.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW5EaXYvc3JjL3R5cGVzL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
},{}],"../../InDiv/src/types/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvdHlwZXMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
},{}],"../../InDiv/src/types/virtualDOM.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbERPTS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0luRGl2L3NyYy90eXBlcy92aXJ0dWFsRE9NLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
},{}],"../../InDiv/src/types/watcher.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0luRGl2L3NyYy90eXBlcy93YXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIifQ==
},{}],"../../InDiv/src/types/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.IParseToVnode = virtualDOM_1.IParseToVnode;
exports.IDiffVnode = virtualDOM_1.IDiffVnode;
exports.IRenderVnode = virtualDOM_1.IRenderVnode;
exports.IVirtualDOM = virtualDOM_1.IVirtualDOM;
var watcher_1 = require("./watcher");
exports.TFnWatcher = watcher_1.TFnWatcher;
exports.TFnRender = watcher_1.TFnRender;
exports.IWatcher = watcher_1.IWatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvdHlwZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFBNUIsNkJBQUEsUUFBUSxDQUFBO0FBQ2pCLCtDQUFxRTtBQUE1RCwrQ0FBQSxxQkFBcUIsQ0FBQTtBQUFFLHNDQUFBLFlBQVksQ0FBQTtBQUM1Qyx5Q0FBd0Q7QUFBL0Msb0NBQUEsYUFBYSxDQUFBO0FBQUUsaUNBQUEsVUFBVSxDQUFBO0FBQ2xDLGlDQUE2RDtBQUFwRCw4QkFBQSxXQUFXLENBQUE7QUFBRSxnQ0FBQSxhQUFhLENBQUE7QUFBRSx5QkFBQSxNQUFNLENBQUE7QUFDM0MsdUNBQTZEO0FBQXBELCtCQUFBLFNBQVMsQ0FBQTtBQUFFLDBDQUFBLG9CQUFvQixDQUFBO0FBQ3hDLDJDQUEyQztBQUFsQyxtQ0FBQSxXQUFXLENBQUE7QUFDcEIsbUNBQTRDO0FBQW5DLDJCQUFBLE9BQU8sQ0FBQTtBQUFFLDJCQUFBLE9BQU8sQ0FBQTtBQUN6QixpQ0FBZ0M7QUFBdkIsd0JBQUEsS0FBSyxDQUFBO0FBQ2QsMkNBQXFIO0FBQTVHLDhCQUFBLE1BQU0sQ0FBQTtBQUFFLG1DQUFBLFdBQVcsQ0FBQTtBQUFFLGtDQUFBLFVBQVUsQ0FBQTtBQUFFLHFDQUFBLGFBQWEsQ0FBQTtBQUFFLGtDQUFBLFVBQVUsQ0FBQTtBQUFFLG9DQUFBLFlBQVksQ0FBQTtBQUFFLG1DQUFBLFdBQVcsQ0FBQTtBQUM5RixxQ0FBNEQ7QUFBbkQsK0JBQUEsVUFBVSxDQUFBO0FBQUUsOEJBQUEsU0FBUyxDQUFBO0FBQUUsNkJBQUEsUUFBUSxDQUFBIn0=
},{"./compile":"../../InDiv/src/types/compile.ts","./compileUtils":"../../InDiv/src/types/compileUtils.ts","./component":"../../InDiv/src/types/component.ts","./indiv":"../../InDiv/src/types/indiv.ts","./nvModule":"../../InDiv/src/types/nvModule.ts","./keyWatcher":"../../InDiv/src/types/keyWatcher.ts","./router":"../../InDiv/src/types/router.ts","./utils":"../../InDiv/src/types/utils.ts","./virtualDOM":"../../InDiv/src/types/virtualDOM.ts","./watcher":"../../InDiv/src/types/watcher.ts"}],"../../InDiv/src/Router/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var Router = /** @class */function () {
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
            console.error('route error: no routes exit');
        }
    };
    Router.prototype.setRootPath = function (rootPath) {
        if (rootPath && typeof rootPath === 'string') {
            this.$rootPath = rootPath;
        } else {
            console.error('route error: rootPath is not defined or rootPath must be a String');
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
                if (!rootRoute) {
                    console.error('route error: wrong route instantiation in insertRenderRoutes:', this_1.currentUrl);
                    return { value: void 0 };
                }
                this_1.routesList.push(rootRoute);
            } else {
                var lastRoute = this_1.routesList[index - 1].children;
                if (!lastRoute || !(lastRoute instanceof Array)) {
                    console.error('route error: routes not exit or routes must be an array!');
                    return { value: void 0 };
                }
                var route = lastRoute.find(function (r) {
                    return r.path === "/" + path || /^\/\:.+/.test(r.path);
                });
                if (!route) {
                    console.error('route error: wrong route instantiation:', this_1.currentUrl);
                    return { value: void 0 };
                }
                this_1.routesList.push(route);
            }
            if (path !== lastRouteList[index]) {
                var needRenderRoute_1 = this_1.routesList[index];
                if (!needRenderRoute_1) {
                    console.error('route error: wrong route instantiation in insertRenderRoutes:', this_1.currentUrl);
                    return { value: void 0 };
                }
                var needRenderComponent = this_1.$vm.$components.find(function (component) {
                    return component.$selector === needRenderRoute_1.component;
                });
                var renderDom = document.querySelectorAll('router-render')[index - 1];
                if (!needRenderRoute_1.component && !needRenderRoute_1.redirectTo) {
                    console.error("route error: path " + needRenderRoute_1.path + " need a component which has children path or need a  redirectTo which has't children path");
                    return { value: void 0 };
                }
                if (/^\/\:.+/.test(needRenderRoute_1.path) && !needRenderRoute_1.redirectTo) {
                    var key = needRenderRoute_1.path.split('/:')[1];
                    this_1.$vm.$esRouteParmasObject[key] = path;
                }
                if (needRenderComponent) {
                    var component = this_1.instantiateComponent(needRenderComponent, renderDom);
                    if (component) {
                        if (this_1.hasRenderComponentList[index]) {
                            this_1.hasRenderComponentList[index + 1] = this_1.hasRenderComponentList[index];
                            this_1.hasRenderComponentList[index] = component;
                        }
                        if (!this_1.hasRenderComponentList[index]) this_1.hasRenderComponentList[index] = component;
                    }
                    this_1.routerChangeEvent(index);
                }
                if (needRenderRoute_1.redirectTo && /^\/.*/.test(needRenderRoute_1.redirectTo) && index + 1 === this_1.renderRouteList.length) {
                    this_1.needRedirectPath = needRenderRoute_1.redirectTo;
                    return { value: void 0 };
                }
            }
            // add parmas in $esRouteParmasObject
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
                    return { value: void 0 };
                }
            }
        };
        var this_1 = this;
        for (var index = 0; index < this.renderRouteList.length; index++) {
            var state_1 = _loop_1(index);
            if ((typeof state_1 === "undefined" ? "undefined" : _typeof(state_1)) === "object") return state_1.value;
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
                if (!rootRoute_1) {
                    console.error('route error: wrong route instantiation in generalDistributeRoutes:', this_2.currentUrl);
                    return { value: void 0 };
                }
                var FindComponent = null;
                if (this_2.$vm.$rootModule.$components.find(function (component) {
                    return component.$selector === rootRoute_1.component;
                })) {
                    FindComponent = this_2.$vm.$rootModule.$components.find(function (component) {
                        return component.$selector === rootRoute_1.component;
                    });
                } else {
                    console.error("route error: path " + rootRoute_1.path + " is undefined");
                    return { value: void 0 };
                }
                if (/^\/\:.+/.test(rootRoute_1.path)) {
                    var key = rootRoute_1.path.split('/:')[1];
                    this_2.$vm.$esRouteParmasObject[key] = path;
                }
                if (!utils.isBrowser()) return { value: void 0 };
                var rootDom = document.querySelector('#root');
                this_2.routesList.push(rootRoute_1);
                var component = this_2.instantiateComponent(FindComponent, rootDom);
                // 因为没有 所有要push进去
                if (component) this_2.hasRenderComponentList.push(component);
                if (index === this_2.renderRouteList.length - 1) this_2.routerChangeEvent(index);
                if (rootRoute_1.redirectTo && /^\/.*/.test(rootRoute_1.redirectTo) && index + 1 === this_2.renderRouteList.length) {
                    this_2.needRedirectPath = rootRoute_1.redirectTo;
                    this_2.renderRouteList.push(rootRoute_1.redirectTo);
                    return { value: void 0 };
                }
            } else {
                var lastRoute = this_2.routesList[index - 1].children;
                if (!lastRoute || !(lastRoute instanceof Array)) {
                    console.error('route error: routes not exit or routes must be an array!');
                }
                var route_1 = lastRoute.find(function (r) {
                    return r.path === "/" + path || /^\/\:.+/.test(r.path);
                });
                if (!route_1) {
                    console.error('route error: wrong route instantiation:', this_2.currentUrl);
                    return { value: void 0 };
                }
                var FindComponent = null;
                if (this_2.$vm.$rootModule.$components.find(function (component) {
                    return component.$selector === route_1.component;
                })) {
                    FindComponent = this_2.$vm.$rootModule.$components.find(function (component) {
                        return component.$selector === route_1.component;
                    });
                }
                if (!route_1.component && !route_1.redirectTo) {
                    console.error("route error: path " + route_1.path + " need a component which has children path or need a  redirectTo which has't children path");
                    return { value: void 0 };
                }
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
                    return { value: void 0 };
                }
            }
        };
        var this_2 = this;
        for (var index = 0; index < this.renderRouteList.length; index++) {
            var state_2 = _loop_2(index);
            if ((typeof state_2 === "undefined" ? "undefined" : _typeof(state_2)) === "object") return state_2.value;
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
        this.hasRenderComponentList.forEach(function (c, i) {
            if (c.nvRouteChange) c.nvRouteChange(_this.lastRoute, _this.currentUrl);
            _this.emitComponentEvent(c.$componentList, 'nvRouteChange');
            if (i >= index + 1) {
                if (c.nvOnDestory) c.nvOnDestory();
                _this.emitComponentEvent(c.$componentList, 'nvOnDestory');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvUm91dGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsbURBQTZCO0FBQzdCLDZEQUF1QztBQUV2QyxrQ0FBbUM7QUFBMUIsMEJBQUEsT0FBTyxDQUFBO0FBRWhCLElBQU0sS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7QUFFMUI7Ozs7O0dBS0c7QUFDSDtJQWNFO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSwwQkFBUyxHQUFoQixVQUFpQixFQUFVO1FBQTNCLGlCQXNCRztRQXJCQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxlQUFl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
},{"../Utils":"../../InDiv/src/Utils/index.ts","../KeyWatcher":"../../InDiv/src/KeyWatcher/index.ts","../types":"../../InDiv/src/types/index.ts"}],"../../InDiv/src/NvModule/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
        vm.providerList = new Map();
        if (options.imports) vm.$imports = options.imports;
        if (options.components) vm.$components = options.components;
        if (options.providers) vm.$providers = options.providers;
        if (options.exports) vm.$exports = options.exports;
        if (options.bootstrap) vm.bootstrap = options.bootstrap;
        vm.buildImports = function () {
            if (!this.$imports) return;
            var length = this.$imports.length - 1;
            for (var i = 0; i <= length; i++) {
                var ModuleImport = this.$imports[i];
                var moduleImport = factoryModule(ModuleImport);
                var lengthExports = moduleImport.$exports.length - 1;
                var _loop_1 = function _loop_1(i_1) {
                    var importComponent = moduleImport.$exports[i_1];
                    if (!this_1.$components.find(function (component) {
                        return component.$selector === importComponent.$selector;
                    })) {
                        this_1.$components.push(importComponent);
                    }
                };
                var this_1 = this;
                for (var i_1 = 0; i_1 <= lengthExports; i_1++) {
                    _loop_1(i_1);
                }
            }
        };
        vm.buildProviderList = function () {
            if (!this.$providers) return;
            var length = this.$providers.length - 1;
            for (var i = 0; i <= length; i++) {
                var service = this.$providers[i];
                if (service.provide) {
                    if (service.useClass || service.useValue) this.providerList.set(service.provide, service);
                } else {
                    this.providerList.set(service, service);
                }
            }
        };
        vm.buildProviders4Services = function () {
            if (!this.$providers) return;
            var length = this.$providers.length - 1;
            var _loop_2 = function _loop_2(i) {
                var service = this_2.$providers[i];
                if (!service._injectedProviders) service._injectedProviders = new Map();
                this_2.providerList.forEach(function (value, key) {
                    if (!service._injectedProviders.has(key)) service._injectedProviders.set(key, value);
                });
            };
            var this_2 = this;
            for (var i = 0; i <= length; i++) {
                _loop_2(i);
            }
        };
        vm.buildProviders4Components = function () {
            if (!this.$providers || !this.$components) return;
            var length = this.$components.length - 1;
            var _loop_3 = function _loop_3(i) {
                var component = this_3.$components[i];
                if (!component._injectedProviders) component._injectedProviders = new Map();
                this_3.providerList.forEach(function (value, key) {
                    if (!component._injectedProviders.has(key)) component._injectedProviders.set(key, value);
                });
            };
            var this_3 = this;
            for (var i = 0; i <= length; i++) {
                _loop_3(i);
            }
        };
        vm.buildComponents4Components = function () {
            if (!this.$components) return;
            var length = this.$components.length - 1;
            var _loop_4 = function _loop_4(i) {
                var FindComponent = this_4.$components[i];
                if (!FindComponent._injectedComponents) FindComponent._injectedComponents = [];
                this_4.$components.forEach(function (needInjectComponent) {
                    if (!FindComponent._injectedComponents.find(function (c) {
                        return c.$selector === needInjectComponent.$selector;
                    })) FindComponent._injectedComponents.push(needInjectComponent);
                });
            };
            var this_4 = this;
            for (var i = 0; i <= length; i++) {
                _loop_4(i);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvTnZNb2R1bGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQTs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLFFBQVEsQ0FBQyxPQUF5QjtJQUNoRCxPQUFPLFVBQVUsWUFBc0I7UUFDckMsSUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLFNBQXNCLENBQUM7UUFDL0MsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksT0FBTyxDQUFDLE9BQU87WUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxPQUFPLENBQUMsVUFBVTtZQUFFLEVBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUM1RCxJQUFJLE9BQU8sQ0FBQyxTQUFTO1lBQUUsRUFBRSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3pELElBQUksT0FBTyxDQUFDLE9BQU87WUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxPQUFPLENBQUMsU0FBUztZQUFFLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUV4RCxFQUFFLENBQUMsWUFBWSxHQUFHO1lBQ2hCLElBQUksQ0FBRSxJQUFrQixDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUMxQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDeEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEMsSUFBTSxZQUFZLEdBQUksSUFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakQsSUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dDQUM5QyxHQUFDO29CQUNSLElBQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBQyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFjLElBQUssT0FBQSxTQUFTLENBQUMsU0FBUyxLQUFNLGVBQXVCLENBQUMsU0FBUyxFQUExRCxDQUEwRCxDQUFDLEVBQUU7d0JBQzFHLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztxQkFDeEM7Z0JBQ0gsQ0FBQzs7Z0JBTEQsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxJQUFJLGFBQWEsRUFBRSxHQUFDLEVBQUU7NEJBQTlCLEdBQUM7aUJBS1Q7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixJQUFJLENBQUUsSUFBa0IsQ0FBQyxVQUFVO2dCQUFFLE9BQU87WUFDNUMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hDLElBQU0sT0FBTyxHQUFJLElBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxJQUFLLE9BQWdDLENBQUMsT0FBTyxFQUFFO29CQUM3QyxJQUFLLE9BQWdDLENBQUMsUUFBUSxJQUFLLE9BQWdDLENBQUMsUUFBUTt3QkFBRyxJQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUUsT0FBZ0MsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3hMO3FCQUFNO29CQUNKLElBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFtQixFQUFFLE9BQW1CLENBQUMsQ0FBQztpQkFDaEY7YUFDRjtRQUNILENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQyx1QkFBdUIsR0FBRztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTztZQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0NBQ2pDLENBQUM7Z0JBQ1IsSUFBTSxPQUFPLEdBQVMsTUFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCO29CQUFFLE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUN2RSxNQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztvQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2RixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7O1lBTkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQXZCLENBQUM7YUFNVDtRQUNILENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQyx5QkFBeUIsR0FBRztZQUM3QixJQUFJLENBQUUsSUFBa0IsQ0FBQyxVQUFVLElBQUksQ0FBRSxJQUFrQixDQUFDLFdBQVc7Z0JBQUUsT0FBTztZQUNoRixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0NBQ2xDLENBQUM7Z0JBQ1IsSUFBTSxTQUFTLEdBQVMsTUFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCO29CQUFFLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUMzRSxNQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztvQkFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO3dCQUFFLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzRixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7O1lBTkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLEVBQUU7d0JBQXZCLENBQUM7YUFNVDtRQUNILENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQywwQkFBMEIsR0FBRztZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsT0FBTztZQUM5QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0NBQ2xDLENBQUM7Z0JBQ1IsSUFBTSxhQUFhLEdBQVMsTUFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CO29CQUFFLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7Z0JBQzlFLE1BQWtCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLG1CQUF3QjtvQkFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLFNBQVMsRUFBN0MsQ0FBNkMsQ0FBQzt3QkFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3RLLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQzs7WUFORCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBdkIsQ0FBQzthQU1UO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTNFRCw0QkEyRUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQixhQUFhLENBQUMsRUFBWTtJQUN4QyxJQUFNLEVBQUUsR0FBRyxJQUFLLEVBQVUsRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNsQixPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFSRCxzQ0FRQyJ9
},{}],"../../InDiv/src/InDiv/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var Injectable_1 = require("../Injectable");
var NvModule_1 = require("../NvModule");
var utils = new Utils_1.default();
/**
 * main: for new InDiv
 *
 * @class InDiv
 */
var InDiv = /** @class */function () {
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
            console.error('rootPath is not defined or rootPath must be a String');
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
        if (!Esmodule) {
            console.error('must send a root module');
            return;
        }
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
        if (!this.$rootModule) {
            console.error('must use bootstrapModule to declare a root NvModule before init');
            return;
        }
        if (this.$canRenderModule) this.renderModuleBootstrap();
    };
    /**
     * render NvModule Bootstrap
     *
     * @returns {void}
     * @memberof InDiv
     */
    InDiv.prototype.renderModuleBootstrap = function () {
        if (!this.$rootModule.bootstrap) {
            console.error('need bootstrap for render Module Bootstrap');
            return;
        }
        var BootstrapComponent = this.$rootModule.bootstrap;
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
        var component = Injectable_1.factoryCreator(BootstrapComponent, this.$rootModule);
        component.$vm = this;
        component.$components = this.$rootModule.$components;
        if (component.nvOnInit) component.nvOnInit();
        if (component.watchData) component.watchData();
        if (!component.$template) {
            console.error('must decaler this.$template in bootstrap()');
            return;
        }
        var template = component.$template;
        if (template && typeof template === 'string' && renderDOM) {
            if (component.nvBeforeMount) component.nvBeforeMount();
            this.replaceDom(component, renderDOM);
            if (component.nvAfterMount) component.nvAfterMount();
            return component;
        } else {
            console.error('renderBootstrap failed: template or rootDom is not exit');
            return false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvSW5EaXYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxtREFBNkI7QUFDN0IsNENBQStDO0FBQy9DLHdDQUE0QztBQUU1QyxJQUFNLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0FBRTFCOzs7O0dBSUc7QUFDSDtJQWNFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFBRSxPQUFPO1FBRS9CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG1CQUFHLEdBQVYsVUFBVyxLQUF5QjtRQUNsQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksMkJBQVcsR0FBbEIsVUFBbUIsUUFBZ0I7UUFDakMsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSSwrQkFBZSxHQUF0QixVQUF1QixRQUFrQjtRQUN2QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3pDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxRQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksb0JBQUksR0FBWDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQUUsT0FBTztRQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7WUFDakYsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0kscUNBQXFCLEdBQTVCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUM1RCxPQUFPO1NBQ1I7UUFDRCxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksK0JBQWUsR0FBdEIsVUFBdUIsa0JBQTRCLEVBQUUsU0FBa0I7UUFDckUsSUFBTSxTQUFTLEdBQVEsMkJBQWMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUUsU0FBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDckIsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLFNBQVMsQ0FBQyxRQUFRO1lBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLElBQUksU0FBUyxDQUFDLFNBQVM7WUFBRSxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1lBQzVELE9BQU87U0FDUjtRQUNELElBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUN6RCxJQUFJLFNBQVMsQ0FBQyxhQUFhO2dCQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUV2RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0QyxJQUFJLFNBQVMsQ0FBQyxZQUFZO2dCQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNyRCxPQUFPLFNBQVMsQ0FBQztTQUVsQjthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1lBQ3pFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksMEJBQVUsR0FBakIsVUFBa0IsU0FBcUIsRUFBRSxTQUFrQjtRQUN6RCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBeEpELElBd0pDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=
},{"../Utils":"../../InDiv/src/Utils/index.ts","../Injectable":"../../InDiv/src/Injectable/index.ts","../NvModule":"../../InDiv/src/NvModule/index.ts"}],"../../InDiv/node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
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
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ('development' !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
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

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
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
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
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
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
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
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Injectable_1 = require("../Injectable");
var NVHttp = /** @class */function () {
    function NVHttp() {}
    NVHttp.prototype.get = function (url, params) {
        return new Promise(function (resolve, reject) {
            var pms = params ? { params: params } : null;
            axios_1.default.get(url, pms).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    };
    NVHttp.prototype.delete = function (url, params) {
        return new Promise(function (resolve, reject) {
            var pms = params ? { params: params } : null;
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
    NVHttp = __decorate([Injectable_1.Injectable({
        isSingletonMode: false
    })], NVHttp);
    return NVHttp;
}();
exports.default = NVHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvSHR0cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQiw0Q0FBMkM7QUFNM0M7SUFBQTtJQThEQSxDQUFDO0lBN0RRLG9CQUFHLEdBQVYsVUFBNkIsR0FBVyxFQUFFLE1BQVU7UUFDbEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2lCQUNoQixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLENBQUM7Z0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1QkFBTSxHQUFiLFVBQWdDLEdBQVcsRUFBRSxNQUFVO1FBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLGVBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDbkIsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scUJBQUksR0FBWCxVQUE4QixHQUFXLEVBQUUsTUFBVTtRQUNuRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsZUFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO2lCQUNwQixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLENBQUM7Z0JBQ04sTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxvQkFBRyxHQUFWLFVBQTZCLEdBQVcsRUFBRSxNQUFVO1FBQ2xELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQztnQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHNCQUFLLEdBQVosVUFBK0IsR0FBVyxFQUFFLE1BQVU7UUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLGVBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztpQkFDckIsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBN0RHLE1BQU07UUFIWCx1QkFBVSxDQUFDO1lBQ1YsZUFBZSxFQUFFLEtBQUs7U0FDdkIsQ0FBQztPQUNJLE1BQU0sQ0E4RFg7SUFBRCxhQUFDO0NBQUEsQUE5REQsSUE4REM7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==
},{"axios":"../../InDiv/node_modules/axios/index.js","../Injectable":"../../InDiv/src/Injectable/index.ts"}],"../../InDiv/src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

require("core-js/modules/es6.typed.array-buffer");

require("core-js/modules/es6.typed.int8-array");

require("core-js/modules/es6.typed.uint8-array");

require("core-js/modules/es6.typed.uint8-clamped-array");

require("core-js/modules/es6.typed.int16-array");

require("core-js/modules/es6.typed.uint16-array");

require("core-js/modules/es6.typed.int32-array");

require("core-js/modules/es6.typed.uint32-array");

require("core-js/modules/es6.typed.float32-array");

require("core-js/modules/es6.typed.float64-array");

require("core-js/modules/es6.map");

require("core-js/modules/es6.set");

require("core-js/modules/es6.weak-map");

require("core-js/modules/es6.weak-set");

require("core-js/modules/es6.reflect.apply");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.reflect.define-property");

require("core-js/modules/es6.reflect.delete-property");

require("core-js/modules/es6.reflect.get");

require("core-js/modules/es6.reflect.get-own-property-descriptor");

require("core-js/modules/es6.reflect.get-prototype-of");

require("core-js/modules/es6.reflect.has");

require("core-js/modules/es6.reflect.is-extensible");

require("core-js/modules/es6.reflect.own-keys");

require("core-js/modules/es6.reflect.prevent-extensions");

require("core-js/modules/es6.reflect.set");

require("core-js/modules/es6.reflect.set-prototype-of");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.seal");

require("core-js/modules/es6.object.prevent-extensions");

require("core-js/modules/es6.object.is-frozen");

require("core-js/modules/es6.object.is-sealed");

require("core-js/modules/es6.object.is-extensible");

require("core-js/modules/es6.object.get-own-property-descriptor");

require("core-js/modules/es6.object.get-prototype-of");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.get-own-property-names");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.is");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.string.raw");

require("core-js/modules/es6.string.from-code-point");

require("core-js/modules/es6.string.code-point-at");

require("core-js/modules/es6.string.repeat");

require("core-js/modules/es6.string.starts-with");

require("core-js/modules/es6.string.ends-with");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.regexp.flags");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.search");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.of");

require("core-js/modules/es6.array.copy-within");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.find-index");

require("core-js/modules/es6.array.fill");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.number.is-finite");

require("core-js/modules/es6.number.is-integer");

require("core-js/modules/es6.number.is-safe-integer");

require("core-js/modules/es6.number.is-nan");

require("core-js/modules/es6.number.epsilon");

require("core-js/modules/es6.number.min-safe-integer");

require("core-js/modules/es6.number.max-safe-integer");

require("core-js/modules/es6.math.acosh");

require("core-js/modules/es6.math.asinh");

require("core-js/modules/es6.math.atanh");

require("core-js/modules/es6.math.cbrt");

require("core-js/modules/es6.math.clz32");

require("core-js/modules/es6.math.cosh");

require("core-js/modules/es6.math.expm1");

require("core-js/modules/es6.math.fround");

require("core-js/modules/es6.math.hypot");

require("core-js/modules/es6.math.imul");

require("core-js/modules/es6.math.log1p");

require("core-js/modules/es6.math.log10");

require("core-js/modules/es6.math.log2");

require("core-js/modules/es6.math.sign");

require("core-js/modules/es6.math.sinh");

require("core-js/modules/es6.math.tanh");

require("core-js/modules/es6.math.trunc");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es7.object.values");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es7.string.pad-start");

require("core-js/modules/es7.string.pad-end");

require("core-js/modules/web.timers");

require("core-js/modules/web.immediate");

require("core-js/modules/web.dom.iterable");

require("regenerator-runtime/runtime");

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
var Injectable_1 = require("./Injectable");
exports.Injectable = Injectable_1.Injectable;
exports.Injected = Injectable_1.Injected;
exports.injector = Injectable_1.injector;
exports.factoryCreator = Injectable_1.factoryCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9JbkRpdi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBd0I7QUFFeEIsaUNBQTJDO0FBQWxDLHdCQUFBLE9BQU8sQ0FBUztBQUN6Qix5Q0FZcUI7QUFYbkIsNkJBQUEsTUFBTSxDQUFBO0FBQ04sa0NBQUEsV0FBVyxDQUFBO0FBQ1gsaUNBQUEsVUFBVSxDQUFBO0FBQ1YsZ0NBQUEsU0FBUyxDQUFBO0FBQ1QsZ0NBQUEsU0FBUyxDQUFBO0FBQ1QsaUNBQUEsVUFBVSxDQUFBO0FBQ1Ysa0NBQUEsV0FBVyxDQUFBO0FBQ1gsbUNBQUEsWUFBWSxDQUFBO0FBQ1osK0JBQUEsUUFBUSxDQUFBO0FBQ1Isa0NBQUEsV0FBVyxDQUFBO0FBQ1gsa0NBQUEsV0FBVyxDQUFBO0FBRWIscUNBQStDO0FBQXRDLDRCQUFBLE9BQU8sQ0FBVztBQUMzQiwyQ0FBcUQ7QUFBNUMsa0NBQUEsT0FBTyxDQUFjO0FBQzlCLHFDQUErQztBQUF0Qyw0QkFBQSxPQUFPLENBQVc7QUFDM0IsK0NBQW1FO0FBQTFELDhDQUFBLG9CQUFvQixDQUFBO0FBQUUscUNBQUEsV0FBVyxDQUFBO0FBQzFDLHlDQUFtRDtBQUExQyxnQ0FBQSxPQUFPLENBQWE7QUFDN0IsbUNBQTJDO0FBQWxDLDBCQUFBLE1BQU0sQ0FBQTtBQUFFLDJCQUFBLE9BQU8sQ0FBQTtBQUN4QixpQ0FBMkM7QUFBbEMsd0JBQUEsT0FBTyxDQUFTO0FBQ3pCLHVDQUFxRDtBQUE1Qyw4QkFBQSxRQUFRLENBQUE7QUFBRSxtQ0FBQSxhQUFhLENBQUE7QUFDaEMsK0JBQTJDO0FBQWxDLHdCQUFBLE9BQU8sQ0FBVTtBQUMxQiwyQ0FLc0I7QUFKcEIsa0NBQUEsVUFBVSxDQUFBO0FBQ1YsZ0NBQUEsUUFBUSxDQUFBO0FBQ1IsZ0NBQUEsUUFBUSxDQUFBO0FBQ1Isc0NBQUEsY0FBYyxDQUFBIn0=
},{"core-js/modules/es6.typed.array-buffer":"../../InDiv/node_modules/core-js/modules/es6.typed.array-buffer.js","core-js/modules/es6.typed.int8-array":"../../InDiv/node_modules/core-js/modules/es6.typed.int8-array.js","core-js/modules/es6.typed.uint8-array":"../../InDiv/node_modules/core-js/modules/es6.typed.uint8-array.js","core-js/modules/es6.typed.uint8-clamped-array":"../../InDiv/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js","core-js/modules/es6.typed.int16-array":"../../InDiv/node_modules/core-js/modules/es6.typed.int16-array.js","core-js/modules/es6.typed.uint16-array":"../../InDiv/node_modules/core-js/modules/es6.typed.uint16-array.js","core-js/modules/es6.typed.int32-array":"../../InDiv/node_modules/core-js/modules/es6.typed.int32-array.js","core-js/modules/es6.typed.uint32-array":"../../InDiv/node_modules/core-js/modules/es6.typed.uint32-array.js","core-js/modules/es6.typed.float32-array":"../../InDiv/node_modules/core-js/modules/es6.typed.float32-array.js","core-js/modules/es6.typed.float64-array":"../../InDiv/node_modules/core-js/modules/es6.typed.float64-array.js","core-js/modules/es6.map":"../../InDiv/node_modules/core-js/modules/es6.map.js","core-js/modules/es6.set":"../../InDiv/node_modules/core-js/modules/es6.set.js","core-js/modules/es6.weak-map":"../../InDiv/node_modules/core-js/modules/es6.weak-map.js","core-js/modules/es6.weak-set":"../../InDiv/node_modules/core-js/modules/es6.weak-set.js","core-js/modules/es6.reflect.apply":"../../InDiv/node_modules/core-js/modules/es6.reflect.apply.js","core-js/modules/es6.reflect.construct":"../../InDiv/node_modules/core-js/modules/es6.reflect.construct.js","core-js/modules/es6.reflect.define-property":"../../InDiv/node_modules/core-js/modules/es6.reflect.define-property.js","core-js/modules/es6.reflect.delete-property":"../../InDiv/node_modules/core-js/modules/es6.reflect.delete-property.js","core-js/modules/es6.reflect.get":"../../InDiv/node_modules/core-js/modules/es6.reflect.get.js","core-js/modules/es6.reflect.get-own-property-descriptor":"../../InDiv/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js","core-js/modules/es6.reflect.get-prototype-of":"../../InDiv/node_modules/core-js/modules/es6.reflect.get-prototype-of.js","core-js/modules/es6.reflect.has":"../../InDiv/node_modules/core-js/modules/es6.reflect.has.js","core-js/modules/es6.reflect.is-extensible":"../../InDiv/node_modules/core-js/modules/es6.reflect.is-extensible.js","core-js/modules/es6.reflect.own-keys":"../../InDiv/node_modules/core-js/modules/es6.reflect.own-keys.js","core-js/modules/es6.reflect.prevent-extensions":"../../InDiv/node_modules/core-js/modules/es6.reflect.prevent-extensions.js","core-js/modules/es6.reflect.set":"../../InDiv/node_modules/core-js/modules/es6.reflect.set.js","core-js/modules/es6.reflect.set-prototype-of":"../../InDiv/node_modules/core-js/modules/es6.reflect.set-prototype-of.js","core-js/modules/es6.promise":"../../InDiv/node_modules/core-js/modules/es6.promise.js","core-js/modules/es6.symbol":"../../InDiv/node_modules/core-js/modules/es6.symbol.js","core-js/modules/es6.object.freeze":"../../InDiv/node_modules/core-js/modules/es6.object.freeze.js","core-js/modules/es6.object.seal":"../../InDiv/node_modules/core-js/modules/es6.object.seal.js","core-js/modules/es6.object.prevent-extensions":"../../InDiv/node_modules/core-js/modules/es6.object.prevent-extensions.js","core-js/modules/es6.object.is-frozen":"../../InDiv/node_modules/core-js/modules/es6.object.is-frozen.js","core-js/modules/es6.object.is-sealed":"../../InDiv/node_modules/core-js/modules/es6.object.is-sealed.js","core-js/modules/es6.object.is-extensible":"../../InDiv/node_modules/core-js/modules/es6.object.is-extensible.js","core-js/modules/es6.object.get-own-property-descriptor":"../../InDiv/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js","core-js/modules/es6.object.get-prototype-of":"../../InDiv/node_modules/core-js/modules/es6.object.get-prototype-of.js","core-js/modules/es6.object.keys":"../../InDiv/node_modules/core-js/modules/es6.object.keys.js","core-js/modules/es6.object.get-own-property-names":"../../InDiv/node_modules/core-js/modules/es6.object.get-own-property-names.js","core-js/modules/es6.object.assign":"../../InDiv/node_modules/core-js/modules/es6.object.assign.js","core-js/modules/es6.object.is":"../../InDiv/node_modules/core-js/modules/es6.object.is.js","core-js/modules/es6.object.set-prototype-of":"../../InDiv/node_modules/core-js/modules/es6.object.set-prototype-of.js","core-js/modules/es6.function.name":"../../InDiv/node_modules/core-js/modules/es6.function.name.js","core-js/modules/es6.string.raw":"../../InDiv/node_modules/core-js/modules/es6.string.raw.js","core-js/modules/es6.string.from-code-point":"../../InDiv/node_modules/core-js/modules/es6.string.from-code-point.js","core-js/modules/es6.string.code-point-at":"../../InDiv/node_modules/core-js/modules/es6.string.code-point-at.js","core-js/modules/es6.string.repeat":"../../InDiv/node_modules/core-js/modules/es6.string.repeat.js","core-js/modules/es6.string.starts-with":"../../InDiv/node_modules/core-js/modules/es6.string.starts-with.js","core-js/modules/es6.string.ends-with":"../../InDiv/node_modules/core-js/modules/es6.string.ends-with.js","core-js/modules/es6.string.includes":"../../InDiv/node_modules/core-js/modules/es6.string.includes.js","core-js/modules/es6.regexp.flags":"../../InDiv/node_modules/core-js/modules/es6.regexp.flags.js","core-js/modules/es6.regexp.match":"../../InDiv/node_modules/core-js/modules/es6.regexp.match.js","core-js/modules/es6.regexp.replace":"../../InDiv/node_modules/core-js/modules/es6.regexp.replace.js","core-js/modules/es6.regexp.split":"../../InDiv/node_modules/core-js/modules/es6.regexp.split.js","core-js/modules/es6.regexp.search":"../../InDiv/node_modules/core-js/modules/es6.regexp.search.js","core-js/modules/es6.array.from":"../../InDiv/node_modules/core-js/modules/es6.array.from.js","core-js/modules/es6.array.of":"../../InDiv/node_modules/core-js/modules/es6.array.of.js","core-js/modules/es6.array.copy-within":"../../InDiv/node_modules/core-js/modules/es6.array.copy-within.js","core-js/modules/es6.array.find":"../../InDiv/node_modules/core-js/modules/es6.array.find.js","core-js/modules/es6.array.find-index":"../../InDiv/node_modules/core-js/modules/es6.array.find-index.js","core-js/modules/es6.array.fill":"../../InDiv/node_modules/core-js/modules/es6.array.fill.js","core-js/modules/es6.array.iterator":"../../InDiv/node_modules/core-js/modules/es6.array.iterator.js","core-js/modules/es6.number.is-finite":"../../InDiv/node_modules/core-js/modules/es6.number.is-finite.js","core-js/modules/es6.number.is-integer":"../../InDiv/node_modules/core-js/modules/es6.number.is-integer.js","core-js/modules/es6.number.is-safe-integer":"../../InDiv/node_modules/core-js/modules/es6.number.is-safe-integer.js","core-js/modules/es6.number.is-nan":"../../InDiv/node_modules/core-js/modules/es6.number.is-nan.js","core-js/modules/es6.number.epsilon":"../../InDiv/node_modules/core-js/modules/es6.number.epsilon.js","core-js/modules/es6.number.min-safe-integer":"../../InDiv/node_modules/core-js/modules/es6.number.min-safe-integer.js","core-js/modules/es6.number.max-safe-integer":"../../InDiv/node_modules/core-js/modules/es6.number.max-safe-integer.js","core-js/modules/es6.math.acosh":"../../InDiv/node_modules/core-js/modules/es6.math.acosh.js","core-js/modules/es6.math.asinh":"../../InDiv/node_modules/core-js/modules/es6.math.asinh.js","core-js/modules/es6.math.atanh":"../../InDiv/node_modules/core-js/modules/es6.math.atanh.js","core-js/modules/es6.math.cbrt":"../../InDiv/node_modules/core-js/modules/es6.math.cbrt.js","core-js/modules/es6.math.clz32":"../../InDiv/node_modules/core-js/modules/es6.math.clz32.js","core-js/modules/es6.math.cosh":"../../InDiv/node_modules/core-js/modules/es6.math.cosh.js","core-js/modules/es6.math.expm1":"../../InDiv/node_modules/core-js/modules/es6.math.expm1.js","core-js/modules/es6.math.fround":"../../InDiv/node_modules/core-js/modules/es6.math.fround.js","core-js/modules/es6.math.hypot":"../../InDiv/node_modules/core-js/modules/es6.math.hypot.js","core-js/modules/es6.math.imul":"../../InDiv/node_modules/core-js/modules/es6.math.imul.js","core-js/modules/es6.math.log1p":"../../InDiv/node_modules/core-js/modules/es6.math.log1p.js","core-js/modules/es6.math.log10":"../../InDiv/node_modules/core-js/modules/es6.math.log10.js","core-js/modules/es6.math.log2":"../../InDiv/node_modules/core-js/modules/es6.math.log2.js","core-js/modules/es6.math.sign":"../../InDiv/node_modules/core-js/modules/es6.math.sign.js","core-js/modules/es6.math.sinh":"../../InDiv/node_modules/core-js/modules/es6.math.sinh.js","core-js/modules/es6.math.tanh":"../../InDiv/node_modules/core-js/modules/es6.math.tanh.js","core-js/modules/es6.math.trunc":"../../InDiv/node_modules/core-js/modules/es6.math.trunc.js","core-js/modules/es7.array.includes":"../../InDiv/node_modules/core-js/modules/es7.array.includes.js","core-js/modules/es7.object.values":"../../InDiv/node_modules/core-js/modules/es7.object.values.js","core-js/modules/es7.object.entries":"../../InDiv/node_modules/core-js/modules/es7.object.entries.js","core-js/modules/es7.object.get-own-property-descriptors":"../../InDiv/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","core-js/modules/es7.string.pad-start":"../../InDiv/node_modules/core-js/modules/es7.string.pad-start.js","core-js/modules/es7.string.pad-end":"../../InDiv/node_modules/core-js/modules/es7.string.pad-end.js","core-js/modules/web.timers":"../../InDiv/node_modules/core-js/modules/web.timers.js","core-js/modules/web.immediate":"../../InDiv/node_modules/core-js/modules/web.immediate.js","core-js/modules/web.dom.iterable":"../../InDiv/node_modules/core-js/modules/web.dom.iterable.js","regenerator-runtime/runtime":"../../InDiv/node_modules/regenerator-runtime/runtime.js","./Utils":"../../InDiv/src/Utils/index.ts","./Lifecycle":"../../InDiv/src/Lifecycle/index.ts","./Watcher":"../../InDiv/src/Watcher/index.ts","./KeyWatcher":"../../InDiv/src/KeyWatcher/index.ts","./Compile":"../../InDiv/src/Compile/index.ts","./CompileUtils":"../../InDiv/src/CompileUtils/index.ts","./Component":"../../InDiv/src/Component/index.ts","./Router":"../../InDiv/src/Router/index.ts","./InDiv":"../../InDiv/src/InDiv/index.ts","./NvModule":"../../InDiv/src/NvModule/index.ts","./Http":"../../InDiv/src/Http/index.ts","./Injectable":"../../InDiv/src/Injectable/index.ts"}],"routes/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { Router, TRouter } from 'indiv';
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
router.routeChange = function (old, next) {
    // console.log('$routeChange', old, next);
};
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkM7QUFDM0MsMENBQXFEO0FBRXJELElBQU0sTUFBTSxHQUFHLElBQUksWUFBTSxFQUFFLENBQUM7QUFHNUIsSUFBTSxNQUFNLEdBQWM7SUFDdEI7UUFDSSxJQUFJLEVBQUUsR0FBRztRQUNULFVBQVUsRUFBRSxlQUFlO1FBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLFNBQVMsRUFBRSx3QkFBd0I7YUFDdEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsU0FBUyxFQUFFLHdCQUF3QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRTtvQkFDTjt3QkFDSSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDeEM7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFNBQVMsRUFBRSx5QkFBeUI7cUJBQ3ZDO29CQUNEO3dCQUNJLElBQUksRUFBRSxVQUFVO3dCQUNoQixTQUFTLEVBQUUsd0JBQXdCO3FCQUN0QztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsU0FBUzt3QkFDZixTQUFTLEVBQUUsdUJBQXVCO3FCQUNyQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsc0JBQXNCO3FCQUNwQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsc0JBQXNCO3FCQUNwQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUscUJBQXFCO3FCQUNuQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUscUJBQXFCO3FCQUNuQztpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLGVBQWU7YUFDN0I7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDM0MsMENBQTBDO0FBQzlDLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9
},{"../../../InDiv/src":"../../InDiv/src/index.ts"}],"pages/introduction/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"constants/introduction.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content = function () {
    return [{
        h1: '什么是InDiv',
        p: ['InDiv 是一个mvvm库。它能帮你轻松地构建 Web。InDiv 集声明式模板、依赖注入和一些实践于一身。'],
        info: ['InDiv 是单词 individual 的缩写，我在设计时借鉴了很多 angular 和 react 的模式与概念。', '本网页是世界上第一个用 InDiv 构建的网页。', '在此致敬 angular 和 react的开发者们。感谢他们为前端做出的巨大贡献。']
    }, {
        h1: '基本假设',
        p: ['本文档假设你已经熟悉了 JavaScript 和来自 最新标准 的一些知识，比如 类 和 模块。', '下列代码范例都是用最新版本的 TypeScript 写的，利用 类型 实现依赖注入，并使用装饰器来提供元数据。']
    }, {
        h1: '美妙的工具',
        p: ['所有的一切，都是为了帮助你编写漂亮的应用，而不是绞尽脑汁的让代码“能用”。'],
        info: ['使用简单的声明式字符串模板，快速实现各种特性。使用自定义组件和扩展模板语言。', '基于Javascript和Typescript，可以在几乎所有的IDE中获得即时帮助和反馈。']
    }, {
        h1: '基本理念',
        p: ['InDiv 基于mvvm, 本身使用 TypeScript写成的。', '它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。'],
        info: ['InDiv 基本构造块是 NvModule，它为组件提供了编译的上下文环境', '整个app的最小单位为 Component，页面上的一切皆为组件']
    }, {
        h1: '反馈',
        p: ['你可以和我一起做贡献！你可以到 Github 上的仓库中提出文档方面的问题，并创建Pull Requests。', '或者在 github 上联系我：DimaLiLongJi']
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsT0FBTyxHQUFHLGNBQU0sT0FBQTtJQUN6QjtRQUNJLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFO1lBQ0MseURBQXlEO1NBQzVEO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsNkRBQTZEO1lBQzdELDBCQUEwQjtZQUMxQiwyQ0FBMkM7U0FDOUM7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUU7WUFDQyxrREFBa0Q7WUFDbEQseURBQXlEO1NBQzVEO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFO1lBQ0MsdUNBQXVDO1NBQzFDO1FBQ0QsSUFBSSxFQUFFO1lBQ0Ysd0NBQXdDO1lBQ3hDLGdEQUFnRDtTQUNuRDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNDLG1DQUFtQztZQUNuQyxpREFBaUQ7U0FDcEQ7UUFDRCxJQUFJLEVBQUU7WUFDRix1Q0FBdUM7WUFDdkMsa0NBQWtDO1NBQ3JDO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxJQUFJO1FBQ1IsQ0FBQyxFQUFFO1lBQ0MseURBQXlEO1lBQ3pELDhCQUE4QjtTQUNqQztLQUNKO0NBQ0osRUEvQzRCLENBK0M1QixDQUFDIn0=
},{}],"pages/introduction/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var introduction_1 = require("../../constants/introduction");
var IntroductionContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIscUNBQXFDO0FBQ3JDLDZDQUFrRDtBQUVsRCw2REFBdUQ7QUE0QnZEO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLHNCQUFPLEVBQUU7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFOZ0IscUJBQXFCO1FBaEJ6QyxlQUFTLENBQVE7WUFDZCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxDQUFDLHNmQVlWLENBQUM7U0FDTCxDQUFDOztPQUNtQixxQkFBcUIsQ0FPekM7SUFBRCw0QkFBQztDQUFBLEFBUEQsSUFPQztrQkFQb0IscUJBQXFCIn0=
},{"./style.less":"pages/introduction/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/introduction":"constants/introduction.ts"}],"modules/introduction.module.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NvModule } from 'indiv';
var src_1 = require("../../../InDiv/src");
var introduction_1 = __importDefault(require("../pages/introduction"));
var IntroductionModule = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvaW50cm9kdWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQywwQ0FBOEM7QUFFOUMsdUVBQTBEO0FBYzFEO0lBQUE7SUFBMEMsQ0FBQztJQUF0QixrQkFBa0I7UUFadEMsY0FBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQ1I7WUFDRCxVQUFVLEVBQUU7Z0JBQ1Isc0JBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0JBQXFCO2FBQ3hCO1NBQ0osQ0FBQztPQUNtQixrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBM0MsSUFBMkM7a0JBQXRCLGtCQUFrQiJ9
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/introduction":"pages/introduction/index.ts"}],"pages/architecture/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"constants/start.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content = function () {
    return [{
        h1: '架构概览',
        p: ['InDiv 是一个 TypeScript 构建客户端应用的平台与框架。', 'InDiv 本身使用 TypeScript 写成的。', '它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。'],
        info: ['InDiv 的基本构造块是 NvModule，它为组件提供了编译的上下文环境。', 'NvModule 会把相关的代码收集到一些功能集中。', 'InDiv 应用就是由一组 NvModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。', 'Component 作为页面元素的基本单位，由定义的 NvModule 统一提供给编译器或路由使用。', 'Route 被委托管理页面渲染，根据访问的url的不同来获取不用的识图渲染。']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE9BQU8sR0FBRyxjQUFNLE9BQUE7SUFDM0I7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNELHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsaURBQWlEO1NBQ2xEO1FBQ0QsSUFBSSxFQUFFO1lBQ0oseUNBQXlDO1lBQ3pDLDRCQUE0QjtZQUM1Qiw4REFBOEQ7WUFDOUQsb0RBQW9EO1lBQ3BELHdDQUF3QztTQUN6QztLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELG1GQUFtRjtTQUNwRjtRQUNELElBQUksRUFBRTtZQUNKLHFDQUFxQztZQUNyQyxtQkFBbUI7WUFDbkIsaUNBQWlDO1NBQ2xDO0tBQ0Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxJQUFJO1FBQ1IsQ0FBQyxFQUFFO1lBQ0QsaUNBQWlDO1NBQ2xDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osa0RBQWtEO1lBQ2xELDhEQUE4RDtTQUMvRDtLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELGdFQUFnRTtZQUNoRSw2QkFBNkI7U0FDOUI7UUFDRCxJQUFJLEVBQUU7WUFDSixrQ0FBa0M7WUFDbEMsa0NBQWtDO1lBQ2xDLGlDQUFpQztZQUNqQyxnRkFBZ0Y7U0FDakY7S0FDRjtJQUNEO1FBQ0UsRUFBRSxFQUFFLElBQUk7UUFDUixDQUFDLEVBQUU7WUFDRCx1RUFBdUU7WUFDdkUseUVBQXlFO1NBQzFFO1FBQ0QsSUFBSSxFQUFFO1lBQ0osNEJBQTRCO1lBQzVCLDJEQUEyRDtZQUMzRCxpREFBaUQ7U0FDbEQ7S0FDRjtDQUNGLEVBOUQ0QixDQThENUIsQ0FBQyJ9
},{}],"pages/architecture/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var start_1 = require("../../constants/start");
var ArchitectureContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9hcmNoaXRlY3R1cmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIscUNBQXFDO0FBQ3JDLDZDQUFrRDtBQUVsRCwrQ0FBZ0Q7QUE0QmhEO0lBRUU7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGVBQU8sRUFBRTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQU5rQixxQkFBcUI7UUFoQnpDLGVBQVMsQ0FBUTtZQUNoQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxDQUFDLHNiQVlWLENBQUM7U0FDSCxDQUFDOztPQUNtQixxQkFBcUIsQ0FPekM7SUFBRCw0QkFBQztDQUFBLEFBUEQsSUFPQztrQkFQb0IscUJBQXFCIn0=
},{"./style.less":"pages/architecture/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/start":"constants/start.ts"}],"modules/architecture.module.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NvModule } from 'indiv';
var src_1 = require("../../../InDiv/src");
var architecture_1 = __importDefault(require("../pages/architecture"));
var ArchitectureModule = /** @class */function () {
    function ArchitectureModule() {}
    ArchitectureModule = __decorate([src_1.NvModule({
        imports: [],
        components: [architecture_1.default],
        providers: [],
        exports: [architecture_1.default]
    })], ArchitectureModule);
    return ArchitectureModule;
}();
exports.default = ArchitectureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvYXJjaGl0ZWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQywwQ0FBOEM7QUFFOUMsdUVBQTBEO0FBYzFEO0lBQUE7SUFBMEMsQ0FBQztJQUF0QixrQkFBa0I7UUFadEMsY0FBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQ1I7WUFDRCxVQUFVLEVBQUU7Z0JBQ1Isc0JBQXFCO2FBQ3hCO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0JBQXFCO2FBQ3hCO1NBQ0osQ0FBQztPQUNtQixrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBM0MsSUFBMkM7a0JBQXRCLGtCQUFrQiJ9
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/architecture":"pages/architecture/index.ts"}],"pages/docs/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"pages/docs/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var DocsContainer = /** @class */function () {
    function DocsContainer() {}
    DocsContainer = __decorate([src_1.Component({
        selector: 'docs-container',
        template: "\n      <div class=\"page-container\">\n        <router-render></router-render>\n      </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsContainer);
    return DocsContainer;
}();
exports.default = DocsContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLHFDQUFxQztBQUNyQyw2Q0FBa0Q7QUFVbEQ7SUFDRTtJQUFlLENBQUM7SUFERyxhQUFhO1FBUmpDLGVBQVMsQ0FBTTtZQUNkLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLENBQUMsbUdBSVYsQ0FBQztTQUNILENBQUM7O09BQ21CLGFBQWEsQ0FFakM7SUFBRCxvQkFBQztDQUFBLEFBRkQsSUFFQztrQkFGb0IsYUFBYSJ9
},{"./style.less":"pages/docs/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"constants/component.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.componentInfo = function () {
    return [{
        h1: '组件与模板',
        p: ['在 InDiv 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 InDiv 组件的属性。'],
        info: [{
            title: '装饰器 Component',
            p: ['@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 InDiv 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。', '@Component 接收2个参数:'],
            pchild: ['1. selector: string; 作为组件（component）被渲染成 DOM 的标签，类似于 <div>', '2. template: string; 视图模板，用来声明被渲染的视图', '在 JavaScript 中，只能把 装饰器Component 当做一个函数使用，最后应该导出被声明的 类。'],
            code: "\n  // in TypeScript\n  @Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{state.a}}</div>\n    '),\n  })\n  export default class ContainerComponent {\n    public state: {\n      a: number;\n    };\n\n    constructor() {\n      this.state = {\n        a: 1\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class ContainerComponent {\n    public state: {\n      a: number;\n    };\n\n    constructor() {\n      this.state = {\n        a: 1\n      };\n    }\n  }\n  Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{state.a}}</div>\n    '),\n  })(ContainerComponent)\n "
        }, {
            title: '模板数据绑定',
            p: ['如果没有框架，你就要自己负责把数据渲染到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。', 'InDiv 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。'],
            pchild: ['往模板HTML字符串中添加绑定 nv- 开头的标记可以告诉 InDiv 该如何渲染它们。', '因为 InDiv 使用单向数据流，所以仅仅支持使用 this.state 内的值作为绑定数据， class 实例的方法作为事件方法。如果要在组件内使用 props ，请在 nvReceiveProps 或 nvOnInit 生命周期内用 props 对 state 赋值。'],
            code: "\n  @Component({\n    selector: 'container-component',\n    template: ('\n      <div nv-on:click=\"@show(state.a)\"> ContainerComponent {{state.a}}}/div>\n      '),\n  })\n  class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: null,\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.a = nextProps.a;\n    }\n  }\n "
        }, {
            title: '组件通信1: props 与 state',
            p: ['InDiv 的组件之间可以 props 来通信。', '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件调用来更改对应父组件的值来完成通信。'],
            pchild: ['可以直接在 template 上使用在 NvModule 注册过的组件标签，并通过 propValue="{state.value}" propValue="{repeatValue}" propFunction="{@fn}" 的引号包裹花括号的写法传递值与方法。', '例如在下面例子，在 hero-component 内可以用循环 state.a (nv-repeat)的value persion 并且可以直接在实例方法中触发 handelClick 回调。', '如果该 DOM 会发生频繁变化，并且有可追踪的唯一 key 值，可以添加指令 nv-key, 让 InDiv 直接追踪到 DOM 变化，帮助保存 组件 内的 state。', '但是渲染的时候，不可以在模板上直接使用 props 的值，仅仅可以使用 class 实例的方法和 this.state 的值。', '在生命周期 constructor 和 nvOnInit 之后，会开启对 this.state 的监听，此监听会监听每个挂载到 this.state 上的属性及属性的属性，因此如果不对 this.state 添加新的属性或对属性的属性添加新的属性的话，可以直接对某个属性赋值。', '相反，如果要对 this.state 上的属性 增加属性或删除，则需要使用  setState<S>(newState: {[key: string]: S}) 方法对 this.state 重新添加监听', '可以直接引用 InDiv 的 SetState 来为 setState方法声明类型。'],
            code: "\n  import { Component, SetState, OnInit, ReceiveProps } from 'InDiv';\n  @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{state.stateValue}}</p>\n        <p>idValue: {{state.idValue}}</p>\n      </div>\n    '),\n  })\n  class HeroComponent implements OnInit, ReceiveProps {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      state: {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      },\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n  }\n\n @Component({\n    selector: 'container-component',\n    template: ('\n      <div>\n        <div nv-repeat=\"let person in state.b\" nv-key=\"person.id\">\n          <hero-component handelClick=\"@show\" stateValue=\"state.a\" idValue=\"person.id\" ></hero-component>\n        </div>\n      </div>\n    '),\n  })\n  class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: {\n          id: 3,\n          name: '\u7801\u519C3',\n        },\n        b: [\n          {id: 1, name: '\u7801\u519C1'},\n          {id: 2, name: '\u7801\u519C2'},\n        ],\n      }\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n  }\n "
        }, {
            title: '组件通信2: service 与 RxJS',
            p: ['父子组件的通信可以通过 props , 但跨层级组件间的通信该怎么办？', '相比于构建全局变量，InDiv 的服务显然更适合这种场景。'],
            pchild: ['1. InDiv 的组件之间可以通过注入同一个 单例service。（既全局仅仅产生一个实例）', '2. 通过 RxJS 订阅同一个 可观察者对象（详细 RxJS 用法请关注 RxJS 文档 https://rxjs-dev.firebaseapp.com/）', '3. 通过用一个 可观察者对象 获得组件之间通信或状态变更']
        }, {
            title: '生命周期钩子',
            p: ['每个组件都有一个被 InDiv 管理的生命周期。', '生命周期钩子其实就是定义在实例中的一些方法，在 InDiv 中，通过不同的时刻调用不同的生命周期钩子，', '赋予你在它们发生时采取行动的能力。', '在 TypeScript 中，引用 InDiv 提供的 interface，通过 implements 的方式让类去实现被预先定义好的生命周期，而在 JavaScript 中，你只能自己手动去定义应该实现的生命周期方法。'],
            pchild: ['1. constructor 在类被实例化的时候回触发，你可以在这里预先定义你的 state', '2. nvOnInit(): void; constructor 之后，在这个生命周期中，可以通过 this.props 获取 props，并定义 state，此生命周期会在开启监听前被触发，并且之后再也不会触发', '3. nvBeforeMount(): void; 在 nvOnInit 之后，template 挂载页面之前被触发，每次触发渲染页面都会被触发', '4. nvAfterMount(): void; 在 nvBeforeMount 之后，template 挂载页面之后被触发，每次触发渲染页面（render）都会被触发', '5. nvHasRender(): void; 在 nvAfterMount 之后，渲染完成后被触发，每次触发渲染页面（render）都会被触发', '6. nvRouteChange(lastRoute?: string, newRoute?: string): void; 监听路由变化，当更换路由后被触发', '7. nvOnDestory(): void; 仅仅在路由决定销毁此组件时被触发', '8. nvWatchState(oldState?: any): void; 监听 state 变化，当 state 被更改时被触发', '9. nvReceiveProps(nextProps: any): void; 监听 props 变化，当 props 被更改时被触发'],
            code: "\n import { Component, OnInit, BeforeMount, AfterMount, HasRender, OnDestory, WatchState, ReceiveProps } from 'InDiv';\n\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{state.stateValue}}</p>\n        <p>idValue: {{state.idValue}}</p>\n      </div>\n    '),\n  })\n  class HeroComponent implements\n    OnInit,\n    BeforeMount,\n    AfterMount,\n    HasRender,\n    WatchState,\n    ReceiveProps,\n  {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      state: {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      },\n    }\n\n    public nvBeforeMount() {\n      console.log('component in BeforeMount');\n    }\n\n    public nvAfterMount() {\n      console.log('component in AfterMount');\n    }\n\n    public nvHasRender() {\n      console.log('component in HasRender');\n    }\n\n    public nvWatchState(oldState?: any) {\n      console.log('component in WatchState');\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n  }\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsYUFBYSxHQUFHLGNBQU0sT0FBQTtJQUNqQztRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFO1lBQ0QscURBQXFEO1NBQ3REO1FBQ0QsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLENBQUMsRUFBRTtvQkFDRCwwSUFBMEk7b0JBQzFJLG9CQUFvQjtpQkFDckI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDREQUE0RDtvQkFDNUQsc0NBQXNDO29CQUN0Qyx3REFBd0Q7aUJBQ3pEO2dCQUNELElBQUksRUFBRSwwcUJBc0NaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixDQUFDLEVBQUU7b0JBQ0Qsd0dBQXdHO29CQUN4RywrQ0FBK0M7aUJBQ2hEO2dCQUNELE1BQU0sRUFBRTtvQkFDTiw4Q0FBOEM7b0JBQzlDLDBJQUEwSTtpQkFDM0k7Z0JBQ0QsSUFBSSxFQUFFLDBiQXNCWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsQ0FBQyxFQUFFO29CQUNELDBCQUEwQjtvQkFDMUIseURBQXlEO2lCQUMxRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sdUlBQXVJO29CQUN2SSxrR0FBa0c7b0JBQ2xHLHVGQUF1RjtvQkFDdkYsaUVBQWlFO29CQUNqRSw0SUFBNEk7b0JBQzVJLHdHQUF3RztvQkFDeEcsNENBQTRDO2lCQUM3QztnQkFDRCxJQUFJLEVBQUUscStDQStEWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsQ0FBQyxFQUFFO29CQUNELHFDQUFxQztvQkFDckMsK0JBQStCO2lCQUNoQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04saURBQWlEO29CQUNqRCxrRkFBa0Y7b0JBQ2xGLCtCQUErQjtpQkFDaEM7YUFpRUY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixDQUFDLEVBQUU7b0JBQ0QsMEJBQTBCO29CQUMxQixxREFBcUQ7b0JBQ3JELG1CQUFtQjtvQkFDbkIsZ0hBQWdIO2lCQUNqSDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sZ0RBQWdEO29CQUNoRCw0R0FBNEc7b0JBQzVHLDBFQUEwRTtvQkFDMUUsc0ZBQXNGO29CQUN0RiwwRUFBMEU7b0JBQzFFLGlGQUFpRjtvQkFDakYsMENBQTBDO29CQUMxQyxvRUFBb0U7b0JBQ3BFLHNFQUFzRTtpQkFDdkU7Z0JBQ0QsSUFBSSxFQUFFLHV6Q0EwRFo7YUFDSztTQUNGO0tBQ0Y7Q0FDRixFQXpVa0MsQ0F5VWxDLENBQUMifQ==
},{}],"service/test.service.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Injectable } from 'indiv';
var src_1 = require("../../../InDiv/src");
var TestService = /** @class */function () {
    function TestService() {
        var _this = this;
        this.getData = function () {
            return _this.data;
        };
        this.setData = function (data) {
            _this.data = data;
        };
        this.data = 1;
    }
    TestService = __decorate([src_1.Injectable(), __metadata("design:paramtypes", [])], TestService);
    return TestService;
}();
exports.default = TestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmljZS90ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMsMENBQWdEO0FBR2hEO0lBRUU7UUFBQSxpQkFFQztRQUVNLFlBQU8sR0FBRztZQUNmLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDLENBQUE7UUFDTSxZQUFPLEdBQUcsVUFBQyxJQUFZO1lBQzVCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUMsQ0FBQTtRQVJDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFKa0IsV0FBVztRQUQvQixnQkFBVSxFQUFFOztPQUNRLFdBQVcsQ0FZL0I7SUFBRCxrQkFBQztDQUFBLEFBWkQsSUFZQztrQkFab0IsV0FBVyJ9
},{"../../../InDiv/src":"../../InDiv/src/index.ts"}],"pages/docs/component/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, HasRender, SetState, Injected, WatchState, OnInit } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var component_1 = require("../../../constants/component");
var test_service_1 = __importDefault(require("../../../service/test.service"));
var DocsComponentContainer = /** @class */function () {
    function DocsComponentContainer(testS) {
        this.testS = testS;
        this.state = {
            info: component_1.componentInfo()
        };
    }
    DocsComponentContainer.prototype.nvOnInit = function () {
        console.log('DocsComponentContainer has oninit');
    };
    DocsComponentContainer.prototype.nvWatchState = function (oldState) {
        console.log('oldState is: ', oldState);
    };
    DocsComponentContainer.prototype.click = function (code, index) {
        code.title = '3232';
        this.testS.setData(3);
        console.log(22222, this.testS.getData());
    };
    DocsComponentContainer.prototype.nvHasRender = function () {
        console.log('nvHasRender', this.state);
    };
    var _a;
    DocsComponentContainer = __decorate([src_1.Injected, src_1.Component({
        selector: 'docs-component-container',
        template: "\n    <div class=\"page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\" nv-on:click=\"@click(code, $index)\">{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], DocsComponentContainer);
    return DocsComponentContainer;
}();
exports.default = DocsComponentContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2NvbXBvbmVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUF3RjtBQUN4RixnREFBd0c7QUFDeEcsMERBQTZEO0FBRTdELCtFQUF3RDtBQTBDeEQ7SUFPRSxnQ0FDVSxLQUFrQjtRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUseUJBQWEsRUFBRTtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVNLHlDQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDZDQUFZLEdBQW5CLFVBQW9CLFFBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHNDQUFLLEdBQVosVUFBYSxJQUFTLEVBQUUsS0FBYTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDRDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O0lBL0JrQixzQkFBc0I7UUFwQjFDLGNBQVE7UUFDUixlQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLDBCQUEwQjtZQUNwQyxRQUFRLEVBQUUsQ0FBQywwcUJBZVYsQ0FBQztTQUNILENBQUM7NkRBU2lCLHNCQUFXLG9CQUFYLHNCQUFXO09BUlQsc0JBQXNCLENBZ0MxQztJQUFELDZCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7a0JBaENvQixzQkFBc0IifQ==
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/component":"constants/component.ts","../../../service/test.service":"service/test.service.ts"}],"constants/template.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.templateInfo = function () {
    return [{
        h1: '模板语法',
        p: ['从使用模型-视图-控制器 (MVC) 或模型-视图-视图模型 (MVVM) 的经验中，很多开发人员都熟悉了组件和模板这两个概念。', '在 InDiv 中，组件扮演着控制器或视图模型的角色，模板则扮演视图的角色。', '模板很像字符串的HTML，但是它还包含 InDiv 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。', '你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。', 'InDiv 模板指令使用 nv- 开头，下面介绍一下 InDiv 的模板语法。'],
        info: [{
            title: '1. 事件指令',
            p: ['以 nv-on:event 开头, event 为未加on的事件名， 并且 被绑定的事件必须为 class 的方法，且以 @ 开头并且在方法内可以使用 this ，this 指向 class的实例。', '方法可使用参数：'],
            pchild: ["- event => $event", "- string => '1','2','3'", " - number => 1,2,3", " - index > @index", "- \u53D8\u91CF: \u4EC5\u80FD\u4F20\u9012state\u4E0A\u7684\u503C\uFF0C \u901A\u8FC7state.xxx\u6807\u793A", "- repeat item: \u4F20\u9012nv-if\u7684\u503C\uFF0C\u5982\uFF1A nv-on:click=\"@show(nav)\" nv-repeat=\"let nav in state.navList\" nv-key=\"nav.id\""],
            code: "\n  <a class=\"nav\" nv-on:click=\"@goTo($event, $index, 1, 'state', state.nav.to,)\">{{state.nav.name}}</a>\n\n  public goTo(event: Event, index: number, aa: number, s: string, to: string) {\n    this.$setLocation(to);\n  }\n "
        }, {
            title: '2. text 指令',
            p: ['该指令可直接渲染为标签内的文字，或 <input> 的 value。'],
            pchild: ['可以使用 nv-text="state.XXX" 也可以使用模板语法 {{}}。'],
            code: "\n  <p nv-text=\"state.b\"></p>\n  <p>{{state.b}}</p>\n "
        }, {
            title: '3. html 指令',
            p: ['该指令可直接渲染为标签内的 HTML，内部实现相当于 innerHTML。'],
            pchild: ['可以使用 nv-html="state.XXX"。'],
            code: "\n  <p nv-html=\"state.b\"></p>\n "
        }, {
            title: '4. model 指令',
            p: ['此指令等同于 nv-text 和 nv-on:input 同时使用'],
            pchild: ['仅仅可以对 <input> 使用 nv-model="state.XXX", model会主动更新被绑定的值并更新视图。'],
            code: "\n  <input nv-model=\"state.c\"/>\n "
        }, {
            title: '5. class 指令',
            p: ['指令会主动把被绑定的值作为 className 增加到元素的class中。'],
            pchild: ['使用 nv-class="state.XXX"。'],
            code: "\n  <input nv-class=\"state.d\"/>\n "
        }, {
            title: '6. if 指令',
            p: ['如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树中显示或移除。'],
            pchild: ['使用 nv-if="state.XXX"。'],
            code: "\n  <input nv-if=\"state.e\"/>\n "
        }, {
            title: '7. repeat 指令',
            p: ['repeat 是一个重复器指令 —— 自定义数据显示的一种方式。', '你的目标是展示一个由多个条目组成的列表。首先定义了一个 HTML 块，它规定了单个条目应该如何显示。 再告诉 InDiv 把这个块当做模板，渲染列表中的每个条目。'],
            pchild: ['使用 nv-repeat="let key in state.XXX", 被绑定的值只能为数组，则可以通过 let key in Array 的方式循环，在元素本身或子元素可以直接使用 key 作为值。', '此指令十分耗费性能，不建议多用。'],
            code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in state.arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\"></demo-component>\n  </div>\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFlBQVksR0FBRyxjQUFNLE9BQUE7SUFDaEM7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNELGtFQUFrRTtZQUNsRSx3Q0FBd0M7WUFDeEMsMEVBQTBFO1lBQzFFLDhDQUE4QztZQUM5Qyx5Q0FBeUM7U0FDMUM7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsQ0FBQyxFQUFFO29CQUNELHFHQUFxRztvQkFDckcsVUFBVTtpQkFDWDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix5R0FBbUM7b0JBQ25DLG9KQUEyRztpQkFDNUc7Z0JBQ0QsSUFBSSxFQUFFLHFPQU1aO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsQ0FBQyxFQUFFO29CQUNELG9DQUFvQztpQkFDckM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDBDQUEwQztpQkFDM0M7Z0JBQ0QsSUFBSSxFQUFFLDBEQUdaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsQ0FBQyxFQUFFO29CQUNELHVDQUF1QztpQkFDeEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsSUFBSSxFQUFFLG9DQUVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsQ0FBQyxFQUFFO29CQUNELG1DQUFtQztpQkFDcEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDhEQUE4RDtpQkFDL0Q7Z0JBQ0QsSUFBSSxFQUFFLHNDQUVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsQ0FBQyxFQUFFO29CQUNELHVDQUF1QztpQkFDeEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDBCQUEwQjtpQkFDM0I7Z0JBQ0QsSUFBSSxFQUFFLHNDQUVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsQ0FBQyxFQUFFO29CQUNELG9EQUFvRDtpQkFDckQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsSUFBSSxFQUFFLG1DQUVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsQ0FBQyxFQUFFO29CQUNELGtDQUFrQztvQkFDbEMsbUZBQW1GO2lCQUNwRjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sdUdBQXVHO29CQUN2RyxrQkFBa0I7aUJBQ25CO2dCQUNELElBQUksRUFBRSx5T0FLWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBakhpQyxDQWlIakMsQ0FBQyJ9
},{}],"pages/docs/template/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, HasRender, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var template_1 = require("../../../constants/template");
var DocsTemplateContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3RlbXBsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMERBQTBEO0FBQzFELGdEQUEwRTtBQUMxRSx3REFBMkQ7QUF3QzNEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLHVCQUFZLEVBQUU7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFFTSwyQ0FBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFia0IscUJBQXFCO1FBbkJ6QyxlQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsQ0FBQyxxb0JBZVYsQ0FBQztTQUNILENBQUM7O09BQ21CLHFCQUFxQixDQWN6QztJQUFELDRCQUFDO0NBQUEsQUFkRCxJQWNDO2tCQWRvQixxQkFBcUIifQ==
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/template":"constants/template.ts"}],"constants/module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
            title: '3. providers 提供服务',
            p: ['providers 用来声明 服务 。', '服务可以被声明在 模块 的 providers 中，被声明后，所有该 模块的组件，被该模块导出的组件，和模块中的服务都可以直接依赖注入该服务。'],
            pchild: ['providers 有三种类型', '1. Function injectToken和class都是class，最简便的方法，但在 JavaScript 中无法使用', '2. { provide: any; useClass: Function; } 该类型将提供 provide 作为injectToken，并将 useClass 实例化提供给 DI 系统', '3. { provide: any; useValue: any; } 该类型将提供 provide 作为injectToken，并将 useValue 直接提供给 DI 系统', '在 TypeScript 中三种类型都可以使用，但 provide 必须为类(provide: Function)，因为要通过反射拿到 constructor 的参数类型作为 injectToken 进行匹配', '但在 JavaScript 中，仅仅可以使用后两种对象的形式，通过主动声明 provide 为字符串(provide: string)，再通过 Class 的静态属性 injectTokens 进行匹配'],
            code: "\n  // in TypeScript\n  @Injected\n  @Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })\n  class PCChild {\n    constructor (\n      private heroS: HeroSearchService2,\n    ) {\n      this.service = heroS;\n    }\n  }\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      PCChild,\n    ],\n  })\n  class M2 {}\n\n\n  // in JavaScript\n  class PCChild {\n    static injectTokens = [\n      'heroSearchService2'\n    ];\n\n    constructor (\n      private heroS,\n    ) {\n      this.service = heroS;\n    }\n  }\n  Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })(PCChild)\n\n  class M2 {}\n  NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      {\n        provide: 'heroSearchService2',\n        useClass: HeroSearchService2,\n      },\n    ],\n    exports: [\n      PCChild,\n    ],\n  })(M2)\n "
        }, {
            title: '4. exports 模块导出的组件',
            p: ['exports?: Function[];'],
            pchild: ['exports 用来声明模块被导出的组件（component）。', '模块只能导出可声明的类。它不会声明或导出任何其它类型的类。', '被模块导出的组件，可以随意在 导入该模块的模块（NvModule） 中的 组件（component） 使用。'],
            code: "\n  // NvModule M2\n  @Injectable\n  @Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })\n  class PCChild {\n    constructor (\n      private heroS: HeroSearchService2,\n    ) {\n      this.service = heroS;\n    }\n  }\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      PCChild,\n    ],\n  })\n  class M2 {}\n\n\n  // NvModule M1\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n    ],\n  })\n  export default class M1 {}\n\n "
        }, {
            title: '5. bootstrap 引导启动',
            p: ['bootstrap?: Function;'],
            pchild: ['从分类上说，入口组件是 InDiv 命令式加载的任意组件。', '如果你没有使用路由，则需要在 根模块 中将一个 组件 声明给该项，被声明的 组件 将作为 入口组件 被 InDiv 渲染到页面。', '如果你使用路由，则无需对此项赋值，因为路由会自动根据配置去找到需要渲染的页面。'],
            code: "\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    components: [\n      Container,\n    ],\n    bootstrap: Container,\n  })\n  export default class M1 {}\n\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsVUFBVSxHQUFHLGNBQU0sT0FBQTtJQUM5QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFO1lBQ0QsK0RBQStEO1lBQy9ELHNDQUFzQztTQUN2QztRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixDQUFDLEVBQUU7b0JBQ0QsaUNBQWlDO29CQUNqQywyQ0FBMkM7b0JBQzNDLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHFDQUFxQztvQkFDckMsK0JBQStCO29CQUMvQiwyQ0FBMkM7b0JBQzNDLG9CQUFvQjtpQkFDckI7Z0JBQ0QsSUFBSSxFQUFFLDY2QkFxRFo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLENBQUMsRUFBRTtvQkFDRCx1QkFBdUI7aUJBQ3hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwwQ0FBMEM7b0JBQzFDLGlGQUFpRjtvQkFDakYsNkJBQTZCO29CQUM3QixvQ0FBb0M7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxzWUE0Qlo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLENBQUMsRUFBRTtvQkFDRCx5QkFBeUI7aUJBQzFCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixzQkFBc0I7b0JBQ3RCLDRFQUE0RTtpQkFDN0U7Z0JBQ0QsSUFBSSxFQUFFLDZtQkE0Q1o7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLENBQUMsRUFBRTtvQkFDRCxxQkFBcUI7b0JBQ3JCLHlFQUF5RTtpQkFDMUU7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGlCQUFpQjtvQkFDakIsaUVBQWlFO29CQUNqRSxnR0FBZ0c7b0JBQ2hHLDBGQUEwRjtvQkFDMUYsMEdBQTBHO29CQUMxRyx1R0FBdUc7aUJBQ3hHO2dCQUNELElBQUksRUFBRSxxakNBcUVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsb0JBQW9CO2dCQUMzQixDQUFDLEVBQUU7b0JBQ0QsdUJBQXVCO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sa0NBQWtDO29CQUNsQywrQkFBK0I7b0JBQy9CLHdEQUF3RDtpQkFDekQ7Z0JBQ0QsSUFBSSxFQUFFLCt4QkFzRFo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLENBQUMsRUFBRTtvQkFDRCx1QkFBdUI7aUJBQ3hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwrQkFBK0I7b0JBQy9CLGtFQUFrRTtvQkFDbEUseUNBQXlDO2lCQUMxQztnQkFDRCxJQUFJLEVBQUUscVNBbUJaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUFwVytCLENBb1cvQixDQUFDIn0=
},{}],"pages/docs/module/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, HasRender, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var module_1 = require("../../../constants/module");
var DocsModuleContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL21vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBEQUEwRDtBQUMxRCxnREFBMEU7QUFDMUUsb0RBQXVEO0FBd0N2RDtJQUtFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSxtQkFBVSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBYmtCLG1CQUFtQjtRQW5CdkMsZUFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLENBQUMsb25CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixtQkFBbUIsQ0FjdkM7SUFBRCwwQkFBQztDQUFBLEFBZEQsSUFjQztrQkFkb0IsbUJBQW1CIn0=
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/module":"constants/module.ts"}],"constants/service.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceInfo = function () {
    return [{
        h1: '服务 与 依赖注入',
        p: ['组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。', '它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。', '不要使用 new 来创建服务，而要依靠 InDiv 的 依赖注入(DI) 机制把它注入到 组件或服务的 的构造函数中', 'v1.2.0开始，所有服务如果不手动指定则默认都为单例服务'],
        info: [{
            title: '装饰器 Injectable, Injected',
            p: ['由于作者英语水平过差，将Injectable用错', '因此v1.2.0版本开始将由 Injectable, Injected 分别代替1.1.0版本及以下的 Service, Injectable', '@Injectable: 会指出紧随其后的那个类是个服务，并为其指定元数据。', '@Injectable: 接收1个参数: { isSingletonMode?: boolean; }。 用来指出是否为 单例服务。', '@Injected: 不接受任何参数，而是用来提示 InDiv 该 class 有需要注入的服务。', '@Injected: 可以用在 组件（component） 和 服务（service） 上。'],
            pchild: ['1. isSingletonMode: boolean; 用来告诉 模块 该服务是否为单例服务', '!!! v1.2.0+：默认所有的都为单例，如果不想成为单例服务则需要自己声明', '2. 服务里可以被注入其他服务', '3. 在 TypeScript 中，在视同我们可以直接在 构造函数 的参数中声明出参数及其类型，类型为需要被注入的 服务，并可以直接在实例中拿到，', '4. 但是在 JavaScript 中，只能通过在 在类的静态属性（injectTokens: string[]）中，把 需要被注入 服务（service） 的字符串provide放入数组，则构造函数中的每项则依次成为被注入的服务实例'],
            code: "\n  // in TypeScript\n  @Injected\n  @Injectable({ isSingletonMode: false })\n  export default class HeroSearchService {\n    public hsr: HeroSearchService1; // \u670D\u52A1 HeroSearchService1 \u88AB\u6CE8\u5165, \u53EF\u4EE5\u76F4\u63A5\u7528 this.hsr\n    constructor(\n      private hsr: HeroSearchService1,\n    ) {\n      console.log(this.hsr)\n    }\n  }\n\n  // in JavaScript\n  export default class HeroSearchService {\n    static injectTokens: [\n      'heroSearchService1'\n    ];\n\n    constructor(\n      heroSearchService1, // \u670D\u52A1 HeroSearchService1 \u88AB\u6CE8\u5165\uFF0C \u8BE5\u5B9E\u4F8B\u5373\u4E3A \u53C2\u6570 heroSearchService1\n    ) {\n      this.hsr = heroSearchService1;\n      this.hsr.test();\n    }\n  }\n  Injectable({\n    isSingletonMode: false,\n  })(HeroSearchService);\n "
        }, {
            title: '依赖注入',
            p: ['依赖注入是一个很重要的设计模式。 它使用得非常广泛，以至于几乎每个人都把它简称为 DI 。', '依赖注入（DI）是用来创建对象及其依赖的其它对象的一种方式。 ', '当依赖注入系统创建某个对象实例时，会负责提供该对象所依赖的对象（称为该对象的依赖）。'],
            pchild: ['1. 在 NvModule 中的 providers 传入 需要被注入的 服务。', '2. 该模块（NvModule）中的所有 组件 和 服务 都可以 使用 (v1.1.0版本@Injectable / v1.2.0及以上版本@Injected) 注解来声明被注入的服务。', '3. 模块导出（exports）的 组件 在其他模块（NvModule）也可以使用该 模块 的 服务。', '4. 无需一个一个 new 出对应的 服务，直接注入即可。'],
            code: "\n  @NvModule({\n    imports: [\n    ],\n    components: [\n        DocsContainer,\n    ],\n    providers: [\n      HeroSearchService,\n      {\n        provide: HeroSearchService1,\n        useClass: HeroSearchService,\n      },\n      {\n        provide: Value,\n        useValue: '11333',\n      }\n    ],\n    exports: [\n        DocsContainer,\n    ],\n  })\n  export default class DocsModule {}\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxXQUFXLEdBQUcsY0FBTSxPQUFBO0lBQy9CO1FBQ0UsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUU7WUFDRCxpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLDREQUE0RDtZQUM1RCwrQkFBK0I7U0FDaEM7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxDQUFDLEVBQUU7b0JBQ0QsMEJBQTBCO29CQUMxQix5RUFBeUU7b0JBQ3pFLHdDQUF3QztvQkFDeEMsb0VBQW9FO29CQUNwRSxtREFBbUQ7b0JBQ25ELGdEQUFnRDtpQkFDakQ7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGlEQUFpRDtvQkFDakQseUNBQXlDO29CQUN6QyxpQkFBaUI7b0JBQ2pCLDJFQUEyRTtvQkFDM0UsdUhBQXVIO2lCQUN4SDtnQkFDRCxJQUFJLEVBQUUsbXpCQTZCWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsQ0FBQyxFQUFFO29CQUNELCtDQUErQztvQkFDL0MsaUNBQWlDO29CQUNqQyw0Q0FBNEM7aUJBQzdDO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwwQ0FBMEM7b0JBQzFDLCtGQUErRjtvQkFDL0YscURBQXFEO29CQUNyRCwrQkFBK0I7aUJBQ2hDO2dCQUNELElBQUksRUFBRSxxWkF1Qlo7YUFDSztTQUNGO0tBQ0Y7Q0FDRixFQWxHZ0MsQ0FrR2hDLENBQUMifQ==
},{}],"pages/docs/service/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, HasRender, SetState, OnDestory } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var service_1 = require("../../../constants/service");
var DocsServiceContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3NlcnZpY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxRUFBcUU7QUFDckUsZ0RBQXFGO0FBQ3JGLHNEQUF5RDtBQXdDekQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUscUJBQVcsRUFBRTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVNLDBDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBakJrQixvQkFBb0I7UUFuQnhDLGVBQVMsQ0FBUTtZQUNoQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFFBQVEsRUFBRSxDQUFDLG9uQkFlVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIsb0JBQW9CLENBa0J4QztJQUFELDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7a0JBbEJvQixvQkFBb0IifQ==
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/service":"constants/service.ts"}],"constants/route.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routeInfo = function () {
    return [{
        h1: '路由 与 导航',
        p: ['类似于其他前端框架，InDiv 也提供了一套路由来帮助页面渲染。让用户从一个视图导航到另一个视图。', '它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。', 'InDiv 的 Router（即“路由器”）借鉴了这个浏览器的导航模型。', '它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。', '你可以为页面中的链接绑定一个路由，这样，当用户点击链接时，就会导航到应用中相应的视图。', '当用户点击按钮、从下拉框中选取，或响应来自任何地方的事件时，你也可以在代码控制下进行导航。', '路由器还在浏览器的历史日志中记录下这些活动，这样浏览器的前进和后退按钮也能照常工作。'],
        info: [{
            title: '配置路由',
            p: ["\u8BE5\u914D\u7F6E\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u9700\u8981\u8BBE\u7F6E \u8DDF\u8DEF\u7531 '/'", '每个对应的路由应该有四个键值对，可以引入 TRouter 来看所有类型'],
            pchild: ['1. path: string; 路径，提供代码直接更改或在浏览器里访问', '2. component?: string; 需要渲染的 组件（component） 的 selector，如果没有 子路由（children） 并且有 重定向（redirectTo） 可以不写该项 ', '3. redirectTo?: string; 需要重定向的地址，改地址为路由的完整路径。', '4. children?: TRouter[]， 子路由，重复上述所有配置'],
            code: "\n  const routes: TRouter[] = [\n    {\n      path: '/',\n      redirectTo: '/introduction',\n      component: 'root-component',\n      children: [\n        {\n          path: '/introduction',\n          component: 'introduction-container',\n        },\n        {\n          path: '/docs',\n          redirectTo: '/docs/component',\n          component: 'docs-container',\n          children: [\n            {\n                path: '/component',\n                component: 'docs-component-container',\n            },\n            {\n                path: '/template',\n                redirectTo: '/docs/component',\n            },\n          ],\n        },\n      ],\n    },\n  ];\n "
        }, {
            title: '路由 Router',
            p: ['需要声明一份路由的配置 router: TRouter[]，来告诉 路由（Router） 应该以什么样的模式渲染页面。', "\u9700\u8981\u8C03\u7528 setRootPath(rootPath: string): void \u65B9\u6CD5\uFF0C\u58F0\u660E\u4E00\u4E2A \u6839\u8DEF\u5F84\uFF08rootPath\uFF09 \u3002\u5982\u672A\u58F0\u660E\uFF0C\u5C06\u628A '/' \u5F53\u505A\u6839\u8DEF\u5F84\u3002", '路由提供一个 routeChange 的事件，可以监听到全局的路由变化。'],
            pchild: ['需要根据如下顺序设置路由', '1. 设置跟路由', '2. 初始化路由', '3. 开始监听路由变化'],
            code: "\n  import { Route, TRouter } from 'InDiv';\n\n  const router = new Router();\n\n  const routes: TRouter[] = ....;\n\n  router.setRootPath('/demo');\n  router.init(routes);\n  router.routeChange = (old: string, next: string) => {};\n "
        }, {
            title: '工具函数',
            p: ['InDiv 提供了一些函数，来方便跳转或获取路由相关参数。', '在组件（component）里可以通过引入相应的类型来使用。'],
            pchild: ['1. SetLocation: <Q = any, P = any>(path: string, query?: Q, params?: P) => void;', '2. GetLocation: () => { path: string; query?: any; params?: any; };', 'path: string; 当前路由的路径', 'query?: string; 拼在路由后面的query, request.query', 'params?: any; 传递到路由的数据'],
            code: "\n  import { GetLocation, SetLocation } from 'InDiv';\n  \n  class RoutrComponent {\n    public getLocation: GetLocation;\n    public setLocation: SetLocation;\n\n    constructor() {}\n    public nvOnInit() {\n      console.log('this.getLocation', this.getLocation());\n      this.setLocation('/R1/C1/D1', { b: '1' });\n    }\n  }\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFNBQVMsR0FBRyxjQUFNLE9BQUE7SUFDN0I7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRTtZQUNELG1EQUFtRDtZQUNuRCwrQkFBK0I7WUFDL0Isc0NBQXNDO1lBQ3RDLHlFQUF5RTtZQUN6RSw2Q0FBNkM7WUFDN0MsK0NBQStDO1lBQy9DLDRDQUE0QztTQUM3QztRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLENBQUMsRUFBRTtvQkFDRCx1R0FBdUI7b0JBQ3ZCLHFDQUFxQztpQkFDdEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHNDQUFzQztvQkFDdEMsc0dBQXNHO29CQUN0RywrQ0FBK0M7b0JBQy9DLHVDQUF1QztpQkFDeEM7Z0JBQ0QsSUFBSSxFQUFFLGdyQkE2Qlo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixDQUFDLEVBQUU7b0JBQ0QsNkRBQTZEO29CQUM3RCwwT0FBb0Y7b0JBQ3BGLHNDQUFzQztpQkFDdkM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGNBQWM7b0JBQ2QsVUFBVTtvQkFDVixVQUFVO29CQUNWLGFBQWE7aUJBQ2Q7Z0JBQ0QsSUFBSSxFQUFFLDRPQVVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixDQUFDLEVBQUU7b0JBQ0QsK0JBQStCO29CQUMvQixnQ0FBZ0M7aUJBQ2pDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixrRkFBa0Y7b0JBQ2xGLHFFQUFxRTtvQkFDckUsdUJBQXVCO29CQUN2Qiw2Q0FBNkM7b0JBQzdDLHdCQUF3QjtpQkFDekI7Z0JBQ0QsSUFBSSxFQUFFLCtVQWFaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUEvRzhCLENBK0c5QixDQUFDIn0=
},{}],"pages/docs/route/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var route_1 = require("../../../constants/route");
var DocsRouteContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3JvdXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQStDO0FBQy9DLGdEQUErRDtBQUMvRCxrREFBcUQ7QUF3Q3JEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGlCQUFTLEVBQUU7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFUa0Isa0JBQWtCO1FBbkJ0QyxlQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsQ0FBQyxvbkJBZVYsQ0FBQztTQUNILENBQUM7O09BQ21CLGtCQUFrQixDQVV0QztJQUFELHlCQUFDO0NBQUEsQUFWRCxJQVVDO2tCQVZvQixrQkFBa0IifQ==
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/route":"constants/route.ts"}],"constants/indiv.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inDivInfo = function () {
    return [{
        h1: '启动',
        p: ['通过引入 InDiv 来启动整个应用'],
        info: [{
            title: '引导启动',
            p: ['现在我们配置好了 模块，组件，服务，和路由，', '开始引入核心来启动整个应用！'],
            pchild: ['1. 实例化 InDiv', '2. 启动核心 模块（NvModule）', '3. 使用 use 方法来启用中间件，例如 Route', '4. 使用 init 方法启动整个应用'],
            code: "\n  const inDiv = new InDiv();\n  inDiv.bootstrapModule(M1);\n  inDiv.use(router);\n  inDiv.init();\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaXYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvaW5kaXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFNBQVMsR0FBRyxjQUFNLE9BQUE7SUFDN0I7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELG9CQUFvQjtTQUNyQjtRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLENBQUMsRUFBRTtvQkFDRCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGNBQWM7b0JBQ2Qsc0JBQXNCO29CQUN0Qiw2QkFBNkI7b0JBQzdCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsSUFBSSxFQUFFLHdHQUtaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUE1QjhCLENBNEI5QixDQUFDIn0=
},{}],"pages/docs/indiv/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var indiv_1 = require("../../../constants/indiv");
var DocsInDivContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2luZGl2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQStDO0FBQy9DLGdEQUErRDtBQUMvRCxrREFBcUQ7QUF3Q3JEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGlCQUFTLEVBQUU7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFUa0Isa0JBQWtCO1FBbkJ0QyxlQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsQ0FBQyxvbkJBZVYsQ0FBQztTQUNILENBQUM7O09BQ21CLGtCQUFrQixDQVV0QztJQUFELHlCQUFDO0NBQUEsQUFWRCxJQVVDO2tCQVZvQixrQkFBa0IifQ==
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/indiv":"constants/indiv.ts"}],"constants/libs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.libInfo = function () {
    return [{
        h1: '工具函数',
        p: ['在开发过程中，使用了一些工具函数，现在我把它们继承在一个 Utils 类里，方便大家去调用。'],
        info: [{
            title: 'Utils',
            p: ['Utils 暴露出共6个方法'],
            pchild: ['1. setCookie(name: string, value: any, options?: any): void; 设置 cookie', '2. getCookie(name: string): any; 获取 cookie', '3. removeCookie(name: string): boolean; 移除 cookie', '4. getQuery(name: string): string; 获得location上query的某个字段', '5. isFunction(func: any): boolean; 判断是否是function', '6. isEqual(a: any, b: any): boolean; 深度判断两个东西是否相同'],
            code: "\n  import { Utils } from 'InDiv';\n\n  const utils = new Utils;\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9saWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxPQUFPLEdBQUcsY0FBTSxPQUFBO0lBQzNCO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUU7WUFDRCxnREFBZ0Q7U0FDakQ7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxDQUFDLEVBQUU7b0JBQ0QsZ0JBQWdCO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sd0VBQXdFO29CQUN4RSw0Q0FBNEM7b0JBQzVDLG1EQUFtRDtvQkFDbkQsMERBQTBEO29CQUMxRCxrREFBa0Q7b0JBQ2xELG1EQUFtRDtpQkFDcEQ7Z0JBQ0QsSUFBSSxFQUFFLHFFQUlaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUE1QjRCLENBNEI1QixDQUFDIn0=
},{}],"pages/docs/libs/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, HasRender, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var libs_1 = require("../../../constants/libs");
var DocsLibsContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2xpYnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwwREFBMEQ7QUFDMUQsZ0RBQTBFO0FBQzFFLGdEQUFrRDtBQXdDbEQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsY0FBTyxFQUFFO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBVGtCLGlCQUFpQjtRQW5CckMsZUFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLENBQUMsb25CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixpQkFBaUIsQ0FVckM7SUFBRCx3QkFBQztDQUFBLEFBVkQsSUFVQztrQkFWb0IsaUJBQWlCIn0=
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/libs":"constants/libs.ts"}],"constants/http.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.httpInfo = function () {
    return [{
        h1: 'HTTP',
        p: ['nvHttp 对象是 InDiv 通过 HTTP 与远程服务器通讯的机制。'],
        info: [{
            title: 'nvHttp',
            p: ['通过封装 axios 库，InDiv 可以通过 nvHttp 发送网络请求。', 'nvHttp 共封装了5中方法，可以直接引入 nvHttp 直接使用对应方法，无需注入。', '如果需要更多方法，欢迎通过使用 axios 来获得更多体验。'],
            pchild: ['1. get: <P = any, R = any>(url: string, params?: P): Promise<R>;', '2. delete: <P = any, R = any>(url: string, params?: P): Promise<R>;', '3. post?<P = any, R = any>(url: string, params?: P): Promise<R>;', '4. put?<P = any, R = any>(url: string, params?: P): Promise<R>;', '5. patch?<P = any, R = any>(url: string, params?: P): Promise<R>;'],
            code: "\n  import { nvHttp } from 'InDiv';\n\n  nvHttp.get(url, params);\n  nvHttp.delete(url, params);\n  nvHttp.post(url, params);\n  nvHttp.put(url, params);\n  nvHttp.patch(url, params);\n "
        }, {
            title: 'nvHttp',
            p: ['通过封装 axios 库，InDiv 可以通过 nvHttp 发送网络请求。', 'nvHttp 共封装了5中方法，可以直接引入 nvHttp 直接使用对应方法，无需注入。'],
            pchild: ['1. get: <P = any, R = any>(url: string, params?: P): Promise<R>;', '2. delete: <P = any, R = any>(url: string, params?: P): Promise<R>;', '3. post?<P = any, R = any>(url: string, params?: P): Promise<R>;', '4. put?<P = any, R = any>(url: string, params?: P): Promise<R>;', '5. patch?<P = any, R = any>(url: string, params?: P): Promise<R>;'],
            code: "\n  import { nvHttp } from 'InDiv';\n\n  nvHttp.get(url, params);\n  nvHttp.delete(url, params);\n  nvHttp.post(url, params);\n  nvHttp.put(url, params);\n  nvHttp.patch(url, params);\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxRQUFRLEdBQUcsY0FBTSxPQUFBO0lBQzVCO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUU7WUFDRCx1Q0FBdUM7U0FDeEM7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixDQUFDLEVBQUU7b0JBQ0Qsd0NBQXdDO29CQUN4Qyw4Q0FBOEM7b0JBQzlDLGdDQUFnQztpQkFDakM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGtFQUFrRTtvQkFDbEUscUVBQXFFO29CQUNyRSxrRUFBa0U7b0JBQ2xFLGlFQUFpRTtvQkFDakUsbUVBQW1FO2lCQUNwRTtnQkFDRCxJQUFJLEVBQUUsNExBUVo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxRQUFRO2dCQUNmLENBQUMsRUFBRTtvQkFDRCx3Q0FBd0M7b0JBQ3hDLDhDQUE4QztpQkFDL0M7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGtFQUFrRTtvQkFDbEUscUVBQXFFO29CQUNyRSxrRUFBa0U7b0JBQ2xFLGlFQUFpRTtvQkFDakUsbUVBQW1FO2lCQUNwRTtnQkFDRCxJQUFJLEVBQUUsNExBUVo7YUFDSztTQUNGO0tBQ0Y7Q0FDRixFQXhENkIsQ0F3RDdCLENBQUMifQ==
},{}],"pages/docs/http/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Component, SetState } from 'indiv';
var src_1 = require("../../../../../InDiv/src");
var http_1 = require("../../../constants/http");
var DocsHttpContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2h0dHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDL0MsZ0RBQStEO0FBQy9ELGdEQUFtRDtBQXdDbkQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsZUFBUSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBVGtCLGlCQUFpQjtRQW5CckMsZUFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLENBQUMsb25CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixpQkFBaUIsQ0FVckM7SUFBRCx3QkFBQztDQUFBLEFBVkQsSUFVQztrQkFWb0IsaUJBQWlCIn0=
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/http":"constants/http.ts"}],"modules/docs.module.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NvModule } from 'indiv';
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
var DocsModule = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL2RvY3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLDBDQUE4QztBQUU5Qyx1REFBMEM7QUFDMUMsc0VBQTZEO0FBQzdELG9FQUEyRDtBQUMzRCxnRUFBdUQ7QUFDdkQsa0VBQXlEO0FBQ3pELDhEQUFxRDtBQUNyRCw4REFBcUQ7QUFDckQsNERBQW1EO0FBQ25ELDREQUFtRDtBQUVuRCx5RUFBa0Q7QUFnQ2xEO0lBQUE7SUFBa0MsQ0FBQztJQUFkLFVBQVU7UUE5QjlCLGNBQVEsQ0FBQztZQUNOLFVBQVUsRUFBRTtnQkFDUixjQUFhO2dCQUNiLG1CQUFzQjtnQkFDdEIsa0JBQXFCO2dCQUNyQixnQkFBbUI7Z0JBQ25CLGlCQUFvQjtnQkFDcEIsZUFBa0I7Z0JBQ2xCLGVBQWtCO2dCQUNsQixjQUFpQjtnQkFDakIsY0FBaUI7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1A7b0JBQ0ksT0FBTyxFQUFFLHNCQUFXO29CQUNwQixRQUFRLEVBQUUsc0JBQVc7aUJBQ3hCO2FBQ0o7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYTtnQkFDYixtQkFBc0I7Z0JBQ3RCLGtCQUFxQjtnQkFDckIsZ0JBQW1CO2dCQUNuQixpQkFBb0I7Z0JBQ3BCLGVBQWtCO2dCQUNsQixlQUFrQjtnQkFDbEIsY0FBaUI7Z0JBQ2pCLGNBQWlCO2FBQ3BCO1NBQ0osQ0FBQztPQUNtQixVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQW5DLElBQW1DO2tCQUFkLFVBQVUifQ==
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/docs":"pages/docs/index.ts","../pages/docs/component":"pages/docs/component/index.ts","../pages/docs/template":"pages/docs/template/index.ts","../pages/docs/module":"pages/docs/module/index.ts","../pages/docs/service":"pages/docs/service/index.ts","../pages/docs/route":"pages/docs/route/index.ts","../pages/docs/indiv":"pages/docs/indiv/index.ts","../pages/docs/libs":"pages/docs/libs/index.ts","../pages/docs/http":"pages/docs/http/index.ts","../service/test.service":"service/test.service.ts"}],"pages/ssr/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"constants/ssr.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL3Nzci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsT0FBTyxHQUFHLGNBQU0sT0FBQTtJQUN6QjtRQUNFLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRTtZQUNELHVCQUF1QjtZQUN2Qiw4Q0FBOEM7WUFDOUMsNENBQTRDO1lBQzVDLGFBQWE7WUFDYiw4QkFBOEI7U0FDL0I7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixDQUFDLEVBQUU7b0JBQ0QsNEJBQTRCO29CQUM1QiwyREFBMkQ7b0JBQzNELHNFQUFzRTtvQkFDdEUsNkRBQTZEO29CQUM3RCxzREFBc0Q7b0JBQ3RELHdCQUF3QjtpQkFDekI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGtEQUFrRDtvQkFDbEQsK0RBQStEO29CQUMvRCxzQ0FBc0M7aUJBQ3ZDO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxDQUFDLEVBQUU7b0JBQ0QsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUIsK0NBQStDO2lCQUNoRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04saUJBQWlCO29CQUNqQixnQ0FBZ0M7b0JBQ2hDLGdCQUFnQjtvQkFDaEIsc0dBQXNHO29CQUN0Ryx1RUFBdUU7b0JBQ3ZFLGlDQUFpQztpQkFDbEM7Z0JBQ0QsSUFBSSxFQUFFLGdoQkFvQlg7YUFDSTtTQUNGO0tBQ0Y7Q0FDRixFQW5FMEIsQ0FtRTFCLENBQUMifQ==
},{}],"pages/ssr/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var ssr_1 = require("../../constants/ssr");
var SSRContainer = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9zc3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIscUNBQXFDO0FBQ3JDLDZDQUFrRDtBQUVsRCwyQ0FBOEM7QUF3QzlDO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLGFBQU8sRUFBRTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQU5nQixZQUFZO1FBbkJoQyxlQUFTLENBQVE7WUFDZCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsQ0FBQyxzdUJBZVYsQ0FBQztTQUNMLENBQUM7O09BQ21CLFlBQVksQ0FPaEM7SUFBRCxtQkFBQztDQUFBLEFBUEQsSUFPQztrQkFQb0IsWUFBWSJ9
},{"./style.less":"pages/ssr/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/ssr":"constants/ssr.ts"}],"modules/ssr.module.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NvModule } from 'indiv';
var src_1 = require("../../../InDiv/src");
var ssr_1 = __importDefault(require("../pages/ssr"));
var SSRModule = /** @class */function () {
    function SSRModule() {}
    SSRModule = __decorate([src_1.NvModule({
        imports: [],
        components: [ssr_1.default],
        providers: [],
        exports: [ssr_1.default]
    })], SSRModule);
    return SSRModule;
}();
exports.default = SSRModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvc3NyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9DQUFvQztBQUNwQywwQ0FBOEM7QUFFOUMscURBQXdDO0FBY3hDO0lBQUE7SUFBaUMsQ0FBQztJQUFiLFNBQVM7UUFaN0IsY0FBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLEVBQ1I7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsYUFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFLEVBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsYUFBWTthQUNmO1NBQ0osQ0FBQztPQUNtQixTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQWxDLElBQWtDO2tCQUFiLFNBQVMifQ==
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/ssr":"pages/ssr/index.ts"}],"components/root-component/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"components/root-component/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var RootComponent = /** @class */function () {
    function RootComponent() {}
    RootComponent = __decorate([src_1.Component({
        selector: 'root-component',
        template: "\n        <div class=\"app-container\">\n            <side-bar></side-bar>\n            <router-render></router-render>\n        </div>\n    "
    })], RootComponent);
    return RootComponent;
}();
exports.default = RootComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3Jvb3QtY29tcG9uZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLHFDQUFxQztBQUNyQyw2Q0FBa0Q7QUFXbEQ7SUFBQTtJQUFvQyxDQUFDO0lBQWhCLGFBQWE7UUFUakMsZUFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQywrSUFLVixDQUFDO1NBQ0wsQ0FBQztPQUNtQixhQUFhLENBQUc7SUFBRCxvQkFBQztDQUFBLEFBQXJDLElBQXFDO2tCQUFoQixhQUFhIn0=
},{"./style.less":"components/root-component/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"components/side-bars/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"constants/nav.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL25hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsSUFBSSxHQUFHLGNBQU0sT0FBQTtJQUN0QjtRQUNJLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNJLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLGVBQWU7S0FDdEI7SUFDRDtRQUNJLElBQUksRUFBRSxJQUFJO1FBQ1YsRUFBRSxFQUFFLE9BQU87UUFDWCxLQUFLLEVBQUU7WUFDSDtnQkFDSSxJQUFJLEVBQUUsSUFBSTtnQkFDVixFQUFFLEVBQUUsaUJBQWlCO2FBQ3hCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLGdCQUFnQjthQUN2QjtZQUNEO2dCQUNJLElBQUksRUFBRSxXQUFXO2dCQUNqQixFQUFFLEVBQUUsZUFBZTthQUN0QjtZQUNEO2dCQUNJLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxjQUFjO2FBQ3JCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsRUFBRSxFQUFFLGFBQWE7YUFDcEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixFQUFFLEVBQUUsYUFBYTthQUNwQjtZQUNEO2dCQUNJLElBQUksRUFBRSxNQUFNO2dCQUNaLEVBQUUsRUFBRSxZQUFZO2FBQ25CO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLFlBQVk7YUFDbkI7U0FDSjtLQUNKO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEVBQUUsRUFBRSxNQUFNO0tBQ2I7Q0FDSixFQW5EeUIsQ0FtRHpCLENBQUMifQ==
},{}],"components/side-bars/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component, OnInit, RouteChange, SetState, SetLocation, GetLocation, Injected } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var nav_1 = require("../../constants/nav");
var test_service_1 = __importDefault(require("../../service/test.service"));
var SideBar = /** @class */function () {
    function SideBar(testS) {
        this.testS = testS;
        console.log('service data', this.testS.getData());
    }
    SideBar.prototype.nvOnInit = function () {
        this.state = {
            navs: nav_1.navs()
        };
        this.showColor();
        console.log('SideBar onInit');
    };
    SideBar.prototype.nvRouteChange = function (lastRoute, newRoute) {
        console.log(111111, newRoute);
        this.showColor();
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
        console.log('service data', this.testS.getData());
    };
    var _a;
    SideBar = __decorate([src_1.Injected, src_1.Component({
        selector: 'side-bar',
        template: "\n        <div class=\"side-bar-container\">\n            <div class=\"nav-wrap\" nv-class=\"nav.active\" nv-repeat=\"let nav in state.navs\">\n                <a class=\"nav\" nv-on:click=\"@setLocation(nav.to)\">{{nav.name}}</a>\n                <div class=\"child-wrap\" nv-if=\"nav.child\">\n                    <a class=\"nav nav-child\" nv-class=\"child.active\" nv-repeat=\"let child in nav.child\" nv-on:click=\"@setLocation(child.to)\">{{child.name}}</a>\n                </div>\n            </div>\n        </div>\n    "
    }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], SideBar);
    return SideBar;
}();
exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3NpZGUtYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUFzQjtBQUV0Qix3R0FBd0c7QUFDeEcsNkNBQXFIO0FBRXJILDJDQUEyQztBQUUzQyw0RUFBcUQ7QUEwQnJEO0lBT0ksaUJBQ1ksS0FBa0I7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVNLDBCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLFVBQUksRUFBRTtTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixTQUFrQixFQUFFLFFBQWlCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sMkJBQVMsR0FBaEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN2QixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUMzRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO29CQUNmLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTt3QkFDeEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO3FCQUN2QjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7SUExQ2dCLE9BQU87UUFkM0IsY0FBUTtRQUNSLGVBQVMsQ0FBUTtZQUNkLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxDQUFDLG1oQkFTVixDQUFDO1NBQ0wsQ0FBQzs2REFTcUIsc0JBQVcsb0JBQVgsc0JBQVc7T0FSYixPQUFPLENBMkMzQjtJQUFELGNBQUM7Q0FBQSxBQTNDRCxJQTJDQztrQkEzQ29CLE9BQU8ifQ==
},{"./style.less":"components/side-bars/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts","../../constants/nav":"constants/nav.ts","../../service/test.service":"service/test.service.ts"}],"components/code-show/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/css-loader.js"}],"components/code-show/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component, OnInit, SetState, SetLocation, GetLocation } from 'indiv';
var src_1 = require("../../../../InDiv/src");
var CodeShower = /** @class */function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL2NvZGUtc2hvdy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdCQUFzQjtBQUV0QixpRkFBaUY7QUFDakYsNkNBQThGO0FBa0I5RjtJQUFBO0lBZ0JBLENBQUM7SUFUVSw2QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7U0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFmZ0IsVUFBVTtRQVo5QixlQUFTLENBQVE7WUFDZCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsQ0FBQyxtUEFRVixDQUFDO1NBQ0wsQ0FBQztPQUNtQixVQUFVLENBZ0I5QjtJQUFELGlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7a0JBaEJvQixVQUFVIn0=
},{"./style.less":"components/code-show/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"modules/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { NvModule } from 'indiv';
var src_1 = require("../../../InDiv/src");
var introduction_module_1 = __importDefault(require("./introduction.module"));
var architecture_module_1 = __importDefault(require("./architecture.module"));
var docs_module_1 = __importDefault(require("./docs.module"));
var ssr_module_1 = __importDefault(require("./ssr.module"));
var root_component_1 = __importDefault(require("../components/root-component"));
var side_bars_1 = __importDefault(require("../components/side-bars"));
var code_show_1 = __importDefault(require("../components/code-show"));
var test_service_1 = __importDefault(require("../service/test.service"));
var RootModule = /** @class */function () {
    function RootModule() {}
    RootModule = __decorate([src_1.NvModule({
        imports: [introduction_module_1.default, architecture_module_1.default, docs_module_1.default, ssr_module_1.default],
        components: [side_bars_1.default, root_component_1.default, code_show_1.default],
        providers: [test_service_1.default]
    })], RootModule);
    return RootModule;
}();
exports.default = RootModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW9DO0FBQ3BDLDBDQUE4QztBQUU5Qyw4RUFBdUQ7QUFDdkQsOEVBQXVEO0FBQ3ZELDhEQUF1QztBQUN2Qyw0REFBcUM7QUFFckMsZ0ZBQXlEO0FBQ3pELHNFQUE4QztBQUM5QyxzRUFBaUQ7QUFFakQseUVBQWtEO0FBa0JsRDtJQUFBO0lBQWtDLENBQUM7SUFBZCxVQUFVO1FBaEI5QixjQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsNkJBQWtCO2dCQUNsQiw2QkFBa0I7Z0JBQ2xCLHFCQUFVO2dCQUNWLG9CQUFTO2FBQ1Y7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsbUJBQU87Z0JBQ1Asd0JBQWE7Z0JBQ2IsbUJBQVU7YUFDWDtZQUNELFNBQVMsRUFBRTtnQkFDVCxzQkFBVzthQUNaO1NBQ0YsQ0FBQztPQUNtQixVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQW5DLElBQW1DO2tCQUFkLFVBQVUifQ==
},{"../../../InDiv/src":"../../InDiv/src/index.ts","./introduction.module":"modules/introduction.module.ts","./architecture.module":"modules/architecture.module.ts","./docs.module":"modules/docs.module.ts","./ssr.module":"modules/ssr.module.ts","../components/root-component":"components/root-component/index.ts","../components/side-bars":"components/side-bars/index.ts","../components/code-show":"components/code-show/index.ts","../service/test.service":"service/test.service.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/reset");
require("./styles/global");
// import { InDiv } from 'indiv';
var src_1 = require("../../InDiv/src");
var routes_1 = __importDefault(require("./routes"));
var modules_1 = __importDefault(require("./modules"));
var inDiv = new src_1.InDiv();
inDiv.bootstrapModule(modules_1.default);
inDiv.use(routes_1.default);
inDiv.init();
console.log('indiv', inDiv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQkFBd0I7QUFDeEIsMkJBQXlCO0FBRXpCLGlDQUFpQztBQUNqQyx1Q0FBd0M7QUFFeEMsb0RBQThCO0FBRTlCLHNEQUFtQztBQUVuQyxJQUFNLEtBQUssR0FBRyxJQUFJLFdBQUssRUFBRSxDQUFDO0FBQzFCLEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQVUsQ0FBQyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0FBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=
},{"./styles/reset":"styles/reset.less","./styles/global":"styles/global.less","../../InDiv/src":"../../InDiv/src/index.ts","./routes":"routes/index.ts","./modules":"modules/index.ts"}],"../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '61695' + '/');
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/_parcel-bundler@1.9.7@parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.map