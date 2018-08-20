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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/reset.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles/global.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../easiest/node_modules/core-js/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"../../easiest/node_modules/core-js/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"../../easiest/node_modules/core-js/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../../easiest/node_modules/core-js/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js"}],"../../easiest/node_modules/core-js/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"../../easiest/node_modules/core-js/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_dom-create":"../../easiest/node_modules/core-js/modules/_dom-create.js"}],"../../easiest/node_modules/core-js/modules/_to-primitive.js":[function(require,module,exports) {
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

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js"}],"../../easiest/node_modules/core-js/modules/_object-dp.js":[function(require,module,exports) {
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

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_ie8-dom-define":"../../easiest/node_modules/core-js/modules/_ie8-dom-define.js","./_to-primitive":"../../easiest/node_modules/core-js/modules/_to-primitive.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js"}],"../../easiest/node_modules/core-js/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../../easiest/node_modules/core-js/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js"}],"../../easiest/node_modules/core-js/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../../easiest/node_modules/core-js/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"../../easiest/node_modules/core-js/modules/_redefine.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js"}],"../../easiest/node_modules/core-js/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"../../easiest/node_modules/core-js/modules/_ctx.js":[function(require,module,exports) {
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

},{"./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js"}],"../../easiest/node_modules/core-js/modules/_export.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js"}],"../../easiest/node_modules/core-js/modules/_typed.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js"}],"../../easiest/node_modules/core-js/modules/_library.js":[function(require,module,exports) {
module.exports = false;

},{}],"../../easiest/node_modules/core-js/modules/_redefine-all.js":[function(require,module,exports) {
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js"}],"../../easiest/node_modules/core-js/modules/_an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"../../easiest/node_modules/core-js/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"../../easiest/node_modules/core-js/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js"}],"../../easiest/node_modules/core-js/modules/_to-index.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js"}],"../../easiest/node_modules/core-js/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../../easiest/node_modules/core-js/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"../../easiest/node_modules/core-js/modules/_cof.js"}],"../../easiest/node_modules/core-js/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"../../easiest/node_modules/core-js/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"../../easiest/node_modules/core-js/modules/_iobject.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js"}],"../../easiest/node_modules/core-js/modules/_array-includes.js":[function(require,module,exports) {
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

},{"./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js"}],"../../easiest/node_modules/core-js/modules/_shared.js":[function(require,module,exports) {

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

},{"./_core":"../../easiest/node_modules/core-js/modules/_core.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_library":"../../easiest/node_modules/core-js/modules/_library.js"}],"../../easiest/node_modules/core-js/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"../../easiest/node_modules/core-js/modules/_shared.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js"}],"../../easiest/node_modules/core-js/modules/_object-keys-internal.js":[function(require,module,exports) {
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

},{"./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_array-includes":"../../easiest/node_modules/core-js/modules/_array-includes.js","./_shared-key":"../../easiest/node_modules/core-js/modules/_shared-key.js"}],"../../easiest/node_modules/core-js/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"../../easiest/node_modules/core-js/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"../../easiest/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../easiest/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../easiest/node_modules/core-js/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/_array-fill.js":[function(require,module,exports) {
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

},{"./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js"}],"../../easiest/node_modules/core-js/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"../../easiest/node_modules/core-js/modules/_shared.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_typed-buffer.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_typed":"../../easiest/node_modules/core-js/modules/_typed.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_to-index":"../../easiest/node_modules/core-js/modules/_to-index.js","./_object-gopn":"../../easiest/node_modules/core-js/modules/_object-gopn.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_array-fill":"../../easiest/node_modules/core-js/modules/_array-fill.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js"}],"../../easiest/node_modules/core-js/modules/_species-constructor.js":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_set-species.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.array-buffer.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_typed":"../../easiest/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../easiest/node_modules/core-js/modules/_typed-buffer.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_species-constructor":"../../easiest/node_modules/core-js/modules/_species-constructor.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_set-species":"../../easiest/node_modules/core-js/modules/_set-species.js"}],"../../easiest/node_modules/core-js/modules/_classof.js":[function(require,module,exports) {
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

},{"./_cof":"../../easiest/node_modules/core-js/modules/_cof.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../../easiest/node_modules/core-js/modules/_is-array-iter.js":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"../../easiest/node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../../easiest/node_modules/core-js/modules/_enum-bug-keys.js"}],"../../easiest/node_modules/core-js/modules/_object-dps.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js"}],"../../easiest/node_modules/core-js/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/_object-create.js":[function(require,module,exports) {
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

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_object-dps":"../../easiest/node_modules/core-js/modules/_object-dps.js","./_enum-bug-keys":"../../easiest/node_modules/core-js/modules/_enum-bug-keys.js","./_shared-key":"../../easiest/node_modules/core-js/modules/_shared-key.js","./_dom-create":"../../easiest/node_modules/core-js/modules/_dom-create.js","./_html":"../../easiest/node_modules/core-js/modules/_html.js"}],"../../easiest/node_modules/core-js/modules/_object-gpo.js":[function(require,module,exports) {
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

},{"./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_shared-key":"../../easiest/node_modules/core-js/modules/_shared-key.js"}],"../../easiest/node_modules/core-js/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"../../easiest/node_modules/core-js/modules/_classof.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js","./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js"}],"../../easiest/node_modules/core-js/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"../../easiest/node_modules/core-js/modules/_cof.js"}],"../../easiest/node_modules/core-js/modules/_array-species-constructor.js":[function(require,module,exports) {
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

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_is-array":"../../easiest/node_modules/core-js/modules/_is-array.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_array-species-create.js":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"../../easiest/node_modules/core-js/modules/_array-species-constructor.js"}],"../../easiest/node_modules/core-js/modules/_array-methods.js":[function(require,module,exports) {
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

},{"./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_iobject":"../../easiest/node_modules/core-js/modules/_iobject.js","./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_array-species-create":"../../easiest/node_modules/core-js/modules/_array-species-create.js"}],"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"../../easiest/node_modules/core-js/modules/_wks.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js"}],"../../easiest/node_modules/core-js/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"../../easiest/node_modules/core-js/modules/_iter-create.js":[function(require,module,exports) {
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

},{"./_object-create":"../../easiest/node_modules/core-js/modules/_object-create.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_iter-define.js":[function(require,module,exports) {
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

},{"./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_iter-create":"../../easiest/node_modules/core-js/modules/_iter-create.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports) {
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

},{"./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js","./_iter-step":"../../easiest/node_modules/core-js/modules/_iter-step.js","./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_iter-define":"../../easiest/node_modules/core-js/modules/_iter-define.js"}],"../../easiest/node_modules/core-js/modules/_iter-detect.js":[function(require,module,exports) {
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

},{"./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_array-copy-within.js":[function(require,module,exports) {
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

},{"./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js"}],"../../easiest/node_modules/core-js/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"../../easiest/node_modules/core-js/modules/_object-gopd.js":[function(require,module,exports) {
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

},{"./_object-pie":"../../easiest/node_modules/core-js/modules/_object-pie.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../easiest/node_modules/core-js/modules/_to-primitive.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_ie8-dom-define":"../../easiest/node_modules/core-js/modules/_ie8-dom-define.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js"}],"../../easiest/node_modules/core-js/modules/_typed-array.js":[function(require,module,exports) {
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

},{"./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_typed":"../../easiest/node_modules/core-js/modules/_typed.js","./_typed-buffer":"../../easiest/node_modules/core-js/modules/_typed-buffer.js","./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_to-index":"../../easiest/node_modules/core-js/modules/_to-index.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js","./_to-primitive":"../../easiest/node_modules/core-js/modules/_to-primitive.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_classof":"../../easiest/node_modules/core-js/modules/_classof.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_is-array-iter":"../../easiest/node_modules/core-js/modules/_is-array-iter.js","./_object-create":"../../easiest/node_modules/core-js/modules/_object-create.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_object-gopn":"../../easiest/node_modules/core-js/modules/_object-gopn.js","./core.get-iterator-method":"../../easiest/node_modules/core-js/modules/core.get-iterator-method.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js","./_array-methods":"../../easiest/node_modules/core-js/modules/_array-methods.js","./_array-includes":"../../easiest/node_modules/core-js/modules/_array-includes.js","./_species-constructor":"../../easiest/node_modules/core-js/modules/_species-constructor.js","./es6.array.iterator":"../../easiest/node_modules/core-js/modules/es6.array.iterator.js","./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_iter-detect":"../../easiest/node_modules/core-js/modules/_iter-detect.js","./_set-species":"../../easiest/node_modules/core-js/modules/_set-species.js","./_array-fill":"../../easiest/node_modules/core-js/modules/_array-fill.js","./_array-copy-within":"../../easiest/node_modules/core-js/modules/_array-copy-within.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.int8-array.js":[function(require,module,exports) {
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.uint8-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.int16-array.js":[function(require,module,exports) {
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.uint16-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.int32-array.js":[function(require,module,exports) {
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.uint32-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.float32-array.js":[function(require,module,exports) {
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/es6.typed.float64-array.js":[function(require,module,exports) {
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../../easiest/node_modules/core-js/modules/_typed-array.js"}],"../../easiest/node_modules/core-js/modules/_iter-call.js":[function(require,module,exports) {
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

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/_for-of.js":[function(require,module,exports) {
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

},{"./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_iter-call":"../../easiest/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../easiest/node_modules/core-js/modules/_is-array-iter.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./core.get-iterator-method":"../../easiest/node_modules/core-js/modules/core.get-iterator-method.js"}],"../../easiest/node_modules/core-js/modules/_meta.js":[function(require,module,exports) {
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

},{"./_uid":"../../easiest/node_modules/core-js/modules/_uid.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/_validate-collection.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js"}],"../../easiest/node_modules/core-js/modules/_collection-strong.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_object-create":"../../easiest/node_modules/core-js/modules/_object-create.js","./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../easiest/node_modules/core-js/modules/_for-of.js","./_iter-define":"../../easiest/node_modules/core-js/modules/_iter-define.js","./_iter-step":"../../easiest/node_modules/core-js/modules/_iter-step.js","./_set-species":"../../easiest/node_modules/core-js/modules/_set-species.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js"}],"../../easiest/node_modules/core-js/modules/_set-proto.js":[function(require,module,exports) {
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

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js"}],"../../easiest/node_modules/core-js/modules/_inherit-if-required.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_set-proto":"../../easiest/node_modules/core-js/modules/_set-proto.js"}],"../../easiest/node_modules/core-js/modules/_collection.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_for-of":"../../easiest/node_modules/core-js/modules/_for-of.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_iter-detect":"../../easiest/node_modules/core-js/modules/_iter-detect.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js","./_inherit-if-required":"../../easiest/node_modules/core-js/modules/_inherit-if-required.js"}],"../../easiest/node_modules/core-js/modules/es6.map.js":[function(require,module,exports) {
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

},{"./_collection-strong":"../../easiest/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../easiest/node_modules/core-js/modules/_collection.js"}],"../../easiest/node_modules/core-js/modules/es6.set.js":[function(require,module,exports) {
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

},{"./_collection-strong":"../../easiest/node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../easiest/node_modules/core-js/modules/_collection.js"}],"../../easiest/node_modules/core-js/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"../../easiest/node_modules/core-js/modules/_object-assign.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../easiest/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../easiest/node_modules/core-js/modules/_object-pie.js","./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_iobject":"../../easiest/node_modules/core-js/modules/_iobject.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/_collection-weak.js":[function(require,module,exports) {
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

},{"./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../easiest/node_modules/core-js/modules/_for-of.js","./_array-methods":"../../easiest/node_modules/core-js/modules/_array-methods.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js"}],"../../easiest/node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports) {
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

},{"./_array-methods":"../../easiest/node_modules/core-js/modules/_array-methods.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_object-assign":"../../easiest/node_modules/core-js/modules/_object-assign.js","./_collection-weak":"../../easiest/node_modules/core-js/modules/_collection-weak.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../easiest/node_modules/core-js/modules/_collection.js"}],"../../easiest/node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports) {
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

},{"./_collection-weak":"../../easiest/node_modules/core-js/modules/_collection-weak.js","./_validate-collection":"../../easiest/node_modules/core-js/modules/_validate-collection.js","./_collection":"../../easiest/node_modules/core-js/modules/_collection.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.apply.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/_invoke.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/core-js/modules/_bind.js":[function(require,module,exports) {
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

},{"./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_invoke":"../../easiest/node_modules/core-js/modules/_invoke.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.construct.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-create":"../../easiest/node_modules/core-js/modules/_object-create.js","./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_bind":"../../easiest/node_modules/core-js/modules/_bind.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.define-property.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_to-primitive":"../../easiest/node_modules/core-js/modules/_to-primitive.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.delete-property.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.get.js":[function(require,module,exports) {
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

},{"./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.has.js":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.is-extensible.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/_own-keys.js":[function(require,module,exports) {
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

},{"./_object-gopn":"../../easiest/node_modules/core-js/modules/_object-gopn.js","./_object-gops":"../../easiest/node_modules/core-js/modules/_object-gops.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.own-keys.js":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_own-keys":"../../easiest/node_modules/core-js/modules/_own-keys.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.set.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js"}],"../../easiest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_set-proto":"../../easiest/node_modules/core-js/modules/_set-proto.js"}],"../../easiest/node_modules/core-js/modules/_task.js":[function(require,module,exports) {


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

},{"./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_invoke":"../../easiest/node_modules/core-js/modules/_invoke.js","./_html":"../../easiest/node_modules/core-js/modules/_html.js","./_dom-create":"../../easiest/node_modules/core-js/modules/_dom-create.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_cof":"../../easiest/node_modules/core-js/modules/_cof.js"}],"../../easiest/node_modules/core-js/modules/_microtask.js":[function(require,module,exports) {


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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_task":"../../easiest/node_modules/core-js/modules/_task.js","./_cof":"../../easiest/node_modules/core-js/modules/_cof.js"}],"../../easiest/node_modules/core-js/modules/_new-promise-capability.js":[function(require,module,exports) {
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

},{"./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js"}],"../../easiest/node_modules/core-js/modules/_perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"../../easiest/node_modules/core-js/modules/_user-agent.js":[function(require,module,exports) {

var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/_promise-resolve.js":[function(require,module,exports) {
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

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_new-promise-capability":"../../easiest/node_modules/core-js/modules/_new-promise-capability.js"}],"../../easiest/node_modules/core-js/modules/es6.promise.js":[function(require,module,exports) {


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

},{"./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_classof":"../../easiest/node_modules/core-js/modules/_classof.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_a-function":"../../easiest/node_modules/core-js/modules/_a-function.js","./_an-instance":"../../easiest/node_modules/core-js/modules/_an-instance.js","./_for-of":"../../easiest/node_modules/core-js/modules/_for-of.js","./_species-constructor":"../../easiest/node_modules/core-js/modules/_species-constructor.js","./_task":"../../easiest/node_modules/core-js/modules/_task.js","./_microtask":"../../easiest/node_modules/core-js/modules/_microtask.js","./_new-promise-capability":"../../easiest/node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../../easiest/node_modules/core-js/modules/_perform.js","./_user-agent":"../../easiest/node_modules/core-js/modules/_user-agent.js","./_promise-resolve":"../../easiest/node_modules/core-js/modules/_promise-resolve.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js","./_redefine-all":"../../easiest/node_modules/core-js/modules/_redefine-all.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js","./_set-species":"../../easiest/node_modules/core-js/modules/_set-species.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js","./_iter-detect":"../../easiest/node_modules/core-js/modules/_iter-detect.js"}],"../../easiest/node_modules/core-js/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js","./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_wks-ext":"../../easiest/node_modules/core-js/modules/_wks-ext.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js"}],"../../easiest/node_modules/core-js/modules/_enum-keys.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_object-gops":"../../easiest/node_modules/core-js/modules/_object-gops.js","./_object-pie":"../../easiest/node_modules/core-js/modules/_object-pie.js"}],"../../easiest/node_modules/core-js/modules/_object-gopn-ext.js":[function(require,module,exports) {
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

},{"./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_object-gopn":"../../easiest/node_modules/core-js/modules/_object-gopn.js"}],"../../easiest/node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_has":"../../easiest/node_modules/core-js/modules/_has.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_shared":"../../easiest/node_modules/core-js/modules/_shared.js","./_set-to-string-tag":"../../easiest/node_modules/core-js/modules/_set-to-string-tag.js","./_uid":"../../easiest/node_modules/core-js/modules/_uid.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js","./_wks-ext":"../../easiest/node_modules/core-js/modules/_wks-ext.js","./_wks-define":"../../easiest/node_modules/core-js/modules/_wks-define.js","./_enum-keys":"../../easiest/node_modules/core-js/modules/_enum-keys.js","./_is-array":"../../easiest/node_modules/core-js/modules/_is-array.js","./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js","./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../../easiest/node_modules/core-js/modules/_to-primitive.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js","./_object-create":"../../easiest/node_modules/core-js/modules/_object-create.js","./_object-gopn-ext":"../../easiest/node_modules/core-js/modules/_object-gopn-ext.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_object-gopn":"../../easiest/node_modules/core-js/modules/_object-gopn.js","./_object-pie":"../../easiest/node_modules/core-js/modules/_object-pie.js","./_object-gops":"../../easiest/node_modules/core-js/modules/_object-gops.js","./_library":"../../easiest/node_modules/core-js/modules/_library.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js"}],"../../easiest/node_modules/core-js/modules/_object-sap.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_core":"../../easiest/node_modules/core-js/modules/_core.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/es6.object.freeze.js":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.seal.js":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.prevent-extensions.js":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_meta":"../../easiest/node_modules/core-js/modules/_meta.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.is-frozen.js":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.is-sealed.js":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.is-extensible.js":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.get-prototype-of.js":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_object-gpo":"../../easiest/node_modules/core-js/modules/_object-gpo.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js"}],"../../easiest/node_modules/core-js/modules/es6.object.get-own-property-names.js":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-sap":"../../easiest/node_modules/core-js/modules/_object-sap.js","./_object-gopn-ext":"../../easiest/node_modules/core-js/modules/_object-gopn-ext.js"}],"../../easiest/node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-assign":"../../easiest/node_modules/core-js/modules/_object-assign.js"}],"../../easiest/node_modules/core-js/modules/_same-value.js":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"../../easiest/node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_same-value":"../../easiest/node_modules/core-js/modules/_same-value.js"}],"../../easiest/node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_set-proto":"../../easiest/node_modules/core-js/modules/_set-proto.js"}],"../../easiest/node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports) {
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

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js"}],"../../easiest/node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js"}],"../../easiest/node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_to-absolute-index":"../../easiest/node_modules/core-js/modules/_to-absolute-index.js"}],"../../easiest/node_modules/core-js/modules/_string-at.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_string-at":"../../easiest/node_modules/core-js/modules/_string-at.js"}],"../../easiest/node_modules/core-js/modules/_string-repeat.js":[function(require,module,exports) {
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

},{"./_to-integer":"../../easiest/node_modules/core-js/modules/_to-integer.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports) {
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_string-repeat":"../../easiest/node_modules/core-js/modules/_string-repeat.js"}],"../../easiest/node_modules/core-js/modules/_is-regexp.js":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js","./_cof":"../../easiest/node_modules/core-js/modules/_cof.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/_string-context.js":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_is-regexp":"../../easiest/node_modules/core-js/modules/_is-regexp.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/_fails-is-regexp.js":[function(require,module,exports) {
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

},{"./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_string-context":"../../easiest/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../easiest/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../easiest/node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_string-context":"../../easiest/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../easiest/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../easiest/node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_string-context":"../../easiest/node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../../easiest/node_modules/core-js/modules/_fails-is-regexp.js"}],"../../easiest/node_modules/core-js/modules/_flags.js":[function(require,module,exports) {
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

},{"./_an-object":"../../easiest/node_modules/core-js/modules/_an-object.js"}],"../../easiest/node_modules/core-js/modules/es6.regexp.flags.js":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":"../../easiest/node_modules/core-js/modules/_descriptors.js","./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_flags":"../../easiest/node_modules/core-js/modules/_flags.js"}],"../../easiest/node_modules/core-js/modules/_fix-re-wks.js":[function(require,module,exports) {
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

},{"./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/core-js/modules/es6.regexp.match.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../easiest/node_modules/core-js/modules/_fix-re-wks.js"}],"../../easiest/node_modules/core-js/modules/es6.regexp.replace.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../easiest/node_modules/core-js/modules/_fix-re-wks.js"}],"../../easiest/node_modules/core-js/modules/es6.regexp.split.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../easiest/node_modules/core-js/modules/_fix-re-wks.js","./_is-regexp":"../../easiest/node_modules/core-js/modules/_is-regexp.js"}],"../../easiest/node_modules/core-js/modules/es6.regexp.search.js":[function(require,module,exports) {
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

},{"./_fix-re-wks":"../../easiest/node_modules/core-js/modules/_fix-re-wks.js"}],"../../easiest/node_modules/core-js/modules/_create-property.js":[function(require,module,exports) {
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":"../../easiest/node_modules/core-js/modules/_object-dp.js","./_property-desc":"../../easiest/node_modules/core-js/modules/_property-desc.js"}],"../../easiest/node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports) {
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

},{"./_ctx":"../../easiest/node_modules/core-js/modules/_ctx.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_to-object":"../../easiest/node_modules/core-js/modules/_to-object.js","./_iter-call":"../../easiest/node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../../easiest/node_modules/core-js/modules/_is-array-iter.js","./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_create-property":"../../easiest/node_modules/core-js/modules/_create-property.js","./core.get-iterator-method":"../../easiest/node_modules/core-js/modules/core.get-iterator-method.js","./_iter-detect":"../../easiest/node_modules/core-js/modules/_iter-detect.js"}],"../../easiest/node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_create-property":"../../easiest/node_modules/core-js/modules/_create-property.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_array-copy-within":"../../easiest/node_modules/core-js/modules/_array-copy-within.js","./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../easiest/node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_array-methods":"../../easiest/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../easiest/node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_array-methods":"../../easiest/node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../easiest/node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_array-fill":"../../easiest/node_modules/core-js/modules/_array-fill.js","./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../easiest/node_modules/core-js/modules/es6.number.is-finite.js":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js"}],"../../easiest/node_modules/core-js/modules/_is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"../../easiest/node_modules/core-js/modules/_is-object.js"}],"../../easiest/node_modules/core-js/modules/es6.number.is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_is-integer":"../../easiest/node_modules/core-js/modules/_is-integer.js"}],"../../easiest/node_modules/core-js/modules/es6.number.is-safe-integer.js":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_is-integer":"../../easiest/node_modules/core-js/modules/_is-integer.js"}],"../../easiest/node_modules/core-js/modules/es6.number.is-nan.js":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.number.epsilon.js":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.number.min-safe-integer.js":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.number.max-safe-integer.js":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/_math-log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"../../easiest/node_modules/core-js/modules/es6.math.acosh.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-log1p":"../../easiest/node_modules/core-js/modules/_math-log1p.js"}],"../../easiest/node_modules/core-js/modules/es6.math.asinh.js":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.math.atanh.js":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/_math-sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"../../easiest/node_modules/core-js/modules/es6.math.cbrt.js":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-sign":"../../easiest/node_modules/core-js/modules/_math-sign.js"}],"../../easiest/node_modules/core-js/modules/es6.math.clz32.js":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.math.cosh.js":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/_math-expm1.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/core-js/modules/es6.math.expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-expm1":"../../easiest/node_modules/core-js/modules/_math-expm1.js"}],"../../easiest/node_modules/core-js/modules/_math-fround.js":[function(require,module,exports) {
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

},{"./_math-sign":"../../easiest/node_modules/core-js/modules/_math-sign.js"}],"../../easiest/node_modules/core-js/modules/es6.math.fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-fround":"../../easiest/node_modules/core-js/modules/_math-fround.js"}],"../../easiest/node_modules/core-js/modules/es6.math.hypot.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.math.imul.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/es6.math.log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-log1p":"../../easiest/node_modules/core-js/modules/_math-log1p.js"}],"../../easiest/node_modules/core-js/modules/es6.math.log10.js":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.math.log2.js":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es6.math.sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-sign":"../../easiest/node_modules/core-js/modules/_math-sign.js"}],"../../easiest/node_modules/core-js/modules/es6.math.sinh.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-expm1":"../../easiest/node_modules/core-js/modules/_math-expm1.js","./_fails":"../../easiest/node_modules/core-js/modules/_fails.js"}],"../../easiest/node_modules/core-js/modules/es6.math.tanh.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_math-expm1":"../../easiest/node_modules/core-js/modules/_math-expm1.js"}],"../../easiest/node_modules/core-js/modules/es6.math.trunc.js":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js"}],"../../easiest/node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_array-includes":"../../easiest/node_modules/core-js/modules/_array-includes.js","./_add-to-unscopables":"../../easiest/node_modules/core-js/modules/_add-to-unscopables.js"}],"../../easiest/node_modules/core-js/modules/_object-to-array.js":[function(require,module,exports) {
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

},{"./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_object-pie":"../../easiest/node_modules/core-js/modules/_object-pie.js"}],"../../easiest/node_modules/core-js/modules/es7.object.values.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-to-array":"../../easiest/node_modules/core-js/modules/_object-to-array.js"}],"../../easiest/node_modules/core-js/modules/es7.object.entries.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_object-to-array":"../../easiest/node_modules/core-js/modules/_object-to-array.js"}],"../../easiest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_own-keys":"../../easiest/node_modules/core-js/modules/_own-keys.js","./_to-iobject":"../../easiest/node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../../easiest/node_modules/core-js/modules/_object-gopd.js","./_create-property":"../../easiest/node_modules/core-js/modules/_create-property.js"}],"../../easiest/node_modules/core-js/modules/_string-pad.js":[function(require,module,exports) {
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

},{"./_to-length":"../../easiest/node_modules/core-js/modules/_to-length.js","./_string-repeat":"../../easiest/node_modules/core-js/modules/_string-repeat.js","./_defined":"../../easiest/node_modules/core-js/modules/_defined.js"}],"../../easiest/node_modules/core-js/modules/es7.string.pad-start.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_string-pad":"../../easiest/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../easiest/node_modules/core-js/modules/_user-agent.js"}],"../../easiest/node_modules/core-js/modules/es7.string.pad-end.js":[function(require,module,exports) {
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

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_string-pad":"../../easiest/node_modules/core-js/modules/_string-pad.js","./_user-agent":"../../easiest/node_modules/core-js/modules/_user-agent.js"}],"../../easiest/node_modules/core-js/modules/web.timers.js":[function(require,module,exports) {

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

},{"./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_user-agent":"../../easiest/node_modules/core-js/modules/_user-agent.js"}],"../../easiest/node_modules/core-js/modules/web.immediate.js":[function(require,module,exports) {
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":"../../easiest/node_modules/core-js/modules/_export.js","./_task":"../../easiest/node_modules/core-js/modules/_task.js"}],"../../easiest/node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports) {

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

},{"./es6.array.iterator":"../../easiest/node_modules/core-js/modules/es6.array.iterator.js","./_object-keys":"../../easiest/node_modules/core-js/modules/_object-keys.js","./_redefine":"../../easiest/node_modules/core-js/modules/_redefine.js","./_global":"../../easiest/node_modules/core-js/modules/_global.js","./_hide":"../../easiest/node_modules/core-js/modules/_hide.js","./_iterators":"../../easiest/node_modules/core-js/modules/_iterators.js","./_wks":"../../easiest/node_modules/core-js/modules/_wks.js"}],"../../easiest/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/easier-cookie/build/index.js":[function(require,module,exports) {
var define;
parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={set:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="",n="",i="",c="";if(r.expires){var a=new Date;a.setDate(a.getDate()+r.expires),o=";expires="+a.toGMTString()}r.path&&(n=";path="+r.path),r.domain&&(i=";domain="+r.domain),c=t instanceof Object?encodeURI(JSON.stringify(t)):encodeURI(t),document.cookie=encodeURI(e)+"="+c+o+n+i},get:function(e){if(!e)return null;for(var t=document.cookie.split("; "),r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===decodeURI(e)){var n=void 0;try{n=JSON.parse(decodeURI(o[1]))}catch(e){n=decodeURI(o[1])}return""===n?null:n}}return null},remove:function(e){try{return this.set(e,"",-1),!0}catch(t){return console.error("remove cookie "+e+" failed:",t),!1}}};exports.default=e;
},{}]},{},[1], null)
},{}],"../../easiest/src/Utils/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var easier_cookie_1 = __importDefault(require("easier-cookie"));
var Utils = /** @class */function () {
    function Utils() {
        this.toString = Object.prototype.toString;
    }
    Utils.prototype.setCookie = function (name, value, options) {
        easier_cookie_1.default.set(name, value, options);
    };
    Utils.prototype.getCookie = function (name) {
        return easier_cookie_1.default.get(name);
    };
    Utils.prototype.removeCookie = function (name) {
        return easier_cookie_1.default.remove(name);
    };
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
    Utils.prototype.isFunction = function (func) {
        return this.toString.call(func) === '[object Function]';
    };
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
    Utils.prototype.formatInnerHTML = function (inner) {
        inner = inner.replace(/(\n\s*)/g, '');
        inner = inner.replace(/^[^\S\n]+/gm, '');
        return inner;
    };
    return Utils;
}();
exports.default = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9VdGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdFQUFtQztBQUVuQztJQUNFO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUM1QyxDQUFDO0lBRU0seUJBQVMsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLEtBQVUsRUFBRSxPQUFhO1FBQ3RELHVCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDM0IsT0FBTyx1QkFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sNEJBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixPQUFPLHVCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTSwwQkFBVSxHQUFqQixVQUFrQixNQUFXO1FBQzNCLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUM7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0RCxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDaEIsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxFQUFFO2dCQUNwQyxLQUFLLElBQU8sR0FBRyxTQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBRyxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLEtBQUssSUFBTyxHQUFHLFNBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRyxD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
},{"easier-cookie":"../../easiest/node_modules/easier-cookie/build/index.js"}],"../../easiest/src/Lifecycle/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9MaWZlY3ljbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiJ9
},{}],"../../easiest/src/Watcher/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var Watcher = /** @class */function () {
    function Watcher(data, watcher, render) {
        this.data = data;
        this.watcher = watcher;
        this.render = render;
        this.watchData(this.data);
        this.utils = new Utils_1.default();
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
                    if (vm.utils.isEqual(newVal, val)) return;
                    var oldData = {};
                    oldData[key] = val;
                    var newData = {};
                    newData[key] = newVal;
                    val = newVal;
                    vm.watchData(val);
                    if (vm.watcher) vm.watcher(oldData, newData);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9XYXRjaGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsbURBQTZCO0FBQzdCO0lBTUUsaUJBQ0UsSUFBUyxFQUNULE9BQW9CLEVBQ3BCLE1BQWtCO1FBRWxCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sMkJBQVMsR0FBaEIsVUFBaUIsSUFBUztRQUN4QixJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFBRSxPQUFPO1FBQzlDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQztnQ0FDTCxHQUFHO1lBQ1osSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUMvQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLEdBQUc7b0JBQ0QsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFDRCxHQUFHLFlBQUMsTUFBVztvQkFDYixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7d0JBQUUsT0FBTztvQkFDMUMsSUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUNuQixJQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQ3RCLEdBQUcsR0FBRyxNQUFNLENBQUM7b0JBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxFQUFFLENBQUMsT0FBTzt3QkFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxFQUFFLENBQUMsTUFBTTt3QkFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzdCLENBQUM7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO1FBckJELEtBQUssSUFBTSxHQUFHLElBQUksSUFBSTtvQkFBWCxHQUFHO1NBcUJiO0lBQ0gsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBRUQsa0JBQWUsT0FBTyxDQUFDIn0=
},{"../Utils":"../../easiest/src/Utils/index.ts"}],"../../easiest/src/KeyWatcher/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var KeyWatcher = /** @class */function () {
    function KeyWatcher(data, key, watcher) {
        this.data = data;
        this.key = key;
        this.watcher = watcher;
        this.watchData(this.data, this.key);
        this.utils = new Utils_1.default();
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
                if (vm.utils.isEqual(newVal, val)) return;
                if (newVal === val) return;
                var oldData = {};
                oldData[key] = val;
                var newData = {};
                newData[key] = newVal;
                val = newVal;
                if (vm.watcher) vm.watcher(oldData, newData);
            }
        });
    };
    return KeyWatcher;
}();
exports.default = KeyWatcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9LZXlXYXRjaGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsbURBQTZCO0FBRTdCO0lBTUUsb0JBQVksSUFBUyxFQUFFLEdBQVcsRUFBRSxPQUFvQjtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixJQUFTLEVBQUUsR0FBVztRQUNyQyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzVELElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQy9CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEdBQUc7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDO1lBQ0QsR0FBRyxZQUFDLE1BQVc7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO29CQUFFLE9BQU87Z0JBQzFDLElBQUksTUFBTSxLQUFLLEdBQUc7b0JBQUUsT0FBTztnQkFDM0IsSUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixJQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7Z0JBQ3RCLEdBQUcsR0FBRyxNQUFNLENBQUM7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTztvQkFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9
},{"../Utils":"../../easiest/src/Utils/index.ts"}],"../../easiest/src/VirtualDOM/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vnode = /** @class */function () {
    function Vnode(info) {
        this.tagName = info.tagName;
        this.node = info.node;
        this.parentNode = info.parentNode;
        this.attributes = info.attributes;
        this.childNodes = info.childNodes;
        this.nodeValue = info.nodeValue;
        this.type = info.type;
    }
    return Vnode;
}();
function bindNodeType(node) {
    if (node.nodeType === 1) return 'element';
    if (node.nodeType === 3) return 'text';
    if (node.nodeType === 11) return 'document-fragment';
    return '';
}
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
        type: bindNodeType(node)
    });
}
function diffAttributes(oldVnode, newVnode, patchList) {
    newVnode.attributes.forEach(function (attr) {
        var oldVnodeAttr = oldVnode.attributes.find(function (at) {
            return at.name === attr.name;
        });
        if (!oldVnodeAttr || oldVnodeAttr.value !== attr.value) {
            patchList.push({
                type: 3,
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
                type: 4,
                node: oldVnode.node,
                oldValue: attr
            });
        }
    });
}
function diffNodeValue(oldVnode, newVnode, patchList) {
    if (!oldVnode.nodeValue || !newVnode.nodeValue) return;
    if (oldVnode.nodeValue !== newVnode.nodeValue) {
        patchList.push({
            type: 5,
            node: oldVnode.node,
            newValue: newVnode.nodeValue,
            oldValue: oldVnode.nodeValue
        });
    }
}
function diffTagName(oldVnode, newVnode, patchList) {
    if (oldVnode.tagName !== newVnode.tagName) {
        patchList.push({
            type: 0,
            newNode: newVnode.node,
            oldVnode: oldVnode.node,
            parentNode: oldVnode.parentNode
        });
    }
}
function diffChildNodes(newVnode, oldVnode, patchList) {
    if (newVnode.childNodes.length > 0) {
        newVnode.childNodes.forEach(function (nChild, index) {
            if (!oldVnode.childNodes[index]) {
                patchList.push({
                    type: 1,
                    newNode: nChild.node,
                    parentNode: oldVnode.node
                });
            } else {
                diffVnode(oldVnode.childNodes[index], nChild, patchList);
            }
        });
    }
    if (oldVnode.childNodes.length > 0) {
        oldVnode.childNodes.forEach(function (oChild, index) {
            if (!newVnode.childNodes[index]) {
                patchList.push({
                    type: 2,
                    node: oChild.node,
                    parentNode: oldVnode.node
                });
            }
        });
    }
}
function diffVnode(oldVnode, newVnode, patchList) {
    if (!patchList) {
        console.error('patchList can not be null, diffVnode must need an Array');
        return;
    }
    if (newVnode.type === 'document-fragment') {
        diffChildNodes(newVnode, oldVnode, patchList);
        return;
    }
    if (newVnode.node.isEqualNode(oldVnode.node)) return;
    if (oldVnode.tagName !== newVnode.tagName) {
        diffTagName(oldVnode, newVnode, patchList);
        return;
    }
    diffAttributes(oldVnode, newVnode, patchList);
    diffNodeValue(oldVnode, newVnode, patchList);
    diffChildNodes(newVnode, oldVnode, patchList);
}
/**
 * REMOVETAG: 0, 替换dom: 0
 * ADDTAG: 1, 增加dom: 1
 * REMOVETAG: 2, 增加dom: 2
 * ADDATTRIBUTES: 3, 增加属性: 3
 * REPLACEATTRIBUTES: 4, 移除属性: 4
 * TEXT: 5, 更改文字: 5
 * @param [] patchList
 */
function renderVnode(patchList) {
    patchList.forEach(function (patch) {
        switch (patch.type) {
            case 0:
                patch.parentNode.replaceChild(patch.newNode, patch.oldVnode);
                break;
            case 1:
                patch.parentNode.appendChild(patch.newNode);
                break;
            case 2:
                patch.parentNode.removeChild(patch.node);
                break;
            case 3:
                patch.node.setAttribute(patch.newValue.name, patch.newValue.value);
                break;
            case 4:
                patch.node.removeAttribute(patch.newValue.name);
                break;
            case 5:
                patch.node.nodeValue = patch.newValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9WaXJ0dWFsRE9NL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFTRSxlQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQUVELHNCQUFzQixJQUFVO0lBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDO1FBQUUsT0FBTyxTQUFTLENBQUM7SUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7UUFBRSxPQUFPLE1BQU0sQ0FBQztJQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRTtRQUFFLE9BQU8sbUJBQW1CLENBQUM7SUFDckQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRUQsd0JBQXdCLElBQWdDO0lBQ3RELElBQU0sU0FBUyxHQUFrQixJQUFnQixDQUFDLFVBQVUsQ0FBQztJQUM3RCxJQUFNLFVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBQ3JDLElBQUksU0FBUyxFQUFFO1FBQ2IsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJ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
},{}],"../../easiest/src/CompileUtils/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var CompileUtilForRepeat = /** @class */function () {
    function CompileUtilForRepeat(fragment) {
        this.$fragment = fragment;
    }
    CompileUtilForRepeat.prototype._getValueByValue = function (vm, exp, key) {
        var valueList = exp.replace('()', '').split('.');
        var value = vm;
        valueList.forEach(function (v, index) {
            if (v === key && index === 0) return;
            value = value[v];
        });
        return value;
    };
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
    CompileUtilForRepeat.prototype._getVMVal = function (vm, exp) {
        var valueList = exp.replace('()', '').split('.');
        var value = vm;
        valueList.forEach(function (v) {
            // if (v === 'this') return;
            value = value[v];
        });
        return value;
    };
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
    CompileUtilForRepeat.prototype.bind = function (node, val, key, dir, exp, index, vm, watchValue) {
        var value;
        if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
            value = this._getVMRepeatVal(val, exp, key);
        } else {
            value = this._getVMVal(vm, exp);
        }
        var watchData;
        if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
            watchData = watchValue;
        } else {
            watchData = this._getVMVal(vm, exp);
        }
        if (!node.hasChildNodes()) this.templateUpdater(node, val, key, vm);
        var updaterFn = this[dir + "Updater"];
        switch (dir) {
            case 'model':
                if (updaterFn) updaterFn.call(this, node, value, exp, key, index, watchData, vm);
                break;
            default:
                if (updaterFn) updaterFn.call(this, node, value);
        }
    };
    CompileUtilForRepeat.prototype.templateUpdater = function (node, val, key, vm) {
        var text = node.textContent;
        var reg = /\{\{(.*)\}\}/g;
        if (reg.test(text)) {
            var exp = RegExp.$1;
            var value = void 0;
            if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
                value = this._getVMRepeatVal(val, exp, key);
            } else {
                value = this._getVMVal(vm, exp);
            }
            node.textContent = node.textContent.replace(/(\{\{.*\}\})/g, value);
        }
    };
    CompileUtilForRepeat.prototype.textUpdater = function (node, value) {
        if (node.tagName.toLocaleLowerCase() === 'input') return node.value = value;
        node.textContent = typeof value === 'undefined' ? '' : value;
    };
    CompileUtilForRepeat.prototype.htmlUpdater = function (node, value) {
        node.innerHTML = typeof value === 'undefined' ? '' : value;
    };
    CompileUtilForRepeat.prototype.ifUpdater = function (node, value) {
        if (value) this.$fragment.appendChild(node);
    };
    CompileUtilForRepeat.prototype.classUpdater = function (node, value, oldValue) {
        if (!value && !oldValue) return;
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');
        var space = className && String(value) ? ' ' : '';
        node.className = className + space + value;
    };
    CompileUtilForRepeat.prototype.modelUpdater = function (node, value, exp, key, index, watchData, vm) {
        node.value = typeof value === 'undefined' ? '' : value;
        var utilVm = this;
        var func = function func(event) {
            event.preventDefault();
            if (/(state.).*/.test(exp)) {
                // if (/(this.state.).*/.test(exp)) {
                var val = exp.replace(/(state.)/, '');
                // const val = exp.replace(/(this.state.)|(this.props)/, '');
                if (event.target.value === watchData) return;
                vm.state[val] = event.target.value;
            }
            // if (/(this.props.).*/.test(exp)) {
            //   const val = exp.replace(/(this.state.)|(this.props)/, '');
            //   if ((event.target as HTMLInputElement).value === watchData) return;
            //   vm.props[val] = (event.target as HTMLInputElement).value;
            // }
            if (exp.indexOf(key) === 0 || exp.indexOf(key + ".") === 0) {
                if (_typeof(watchData[index]) !== 'object') watchData[index] = event.target.value;
                if (_typeof(watchData[index]) === 'object') {
                    var vals = utilVm._getValueByValue(watchData[index], exp, key);
                    vals = event.target.value;
                    utilVm._setValueByValue(watchData[index], exp, key, vals);
                }
            }
            // vm.$reRender();
        };
        node.addEventListener('input', func, false);
        node.eventinput = func;
        if (node.eventTypes) {
            var eventlist = JSON.parse(node.eventTypes);
            eventlist.push('input');
            node.eventTypes = eventlist;
        }
        if (!node.eventTypes) node.eventTypes = JSON.stringify(['input']);
    };
    CompileUtilForRepeat.prototype.eventHandler = function (node, vm, exp, eventName, key, val) {
        var eventType = eventName.split(':')[1];
        // const fnList = exp.replace(/\(.*\)/, '').split('.');
        var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
        var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/ /g, '').split(',');
        // const args = exp.match(/\((.*)\)/)[1].replace(/ /g, '').split(',');
        var fn = vm;
        fnList.forEach(function (f) {
            // if (f === 'this') return;
            fn = fn[f];
        });
        var utilVm = this;
        var func = function func(event) {
            var _this = this;
            var argsList = [];
            args.forEach(function (arg) {
                if (arg === '') return false;
                if (arg === '$event') return argsList.push(event);
                // if (/(this.).*/g.test(arg) || /(this.state.).*/g.test(arg) || /(this.props.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
                if (/(state.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
                // if (/(this.state.).*/g.test(arg)) return argsList.push(utilVm._getVMVal(vm, arg));
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
var CompileUtil = /** @class */function () {
    function CompileUtil(fragment) {
        this.$fragment = fragment;
    }
    CompileUtil.prototype._getValueByValue = function (vm, exp, key) {
        var valueList = exp.replace('()', '').split('.');
        var value = vm;
        valueList.forEach(function (v, index) {
            if (v === key && index === 0) return;
            value = value[v];
        });
        return value;
    };
    CompileUtil.prototype._getVMVal = function (vm, exp) {
        var valueList = exp.replace('()', '').split('.');
        var value = vm;
        valueList.forEach(function (v, index) {
            // if (v === 'this' && index === 0) return;
            value = value[v];
        });
        return value;
    };
    CompileUtil.prototype._getVMRepeatVal = function (vm, exp) {
        var vlList = exp.split(' ');
        var value = this._getVMVal(vm, vlList[3]);
        return value;
    };
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
                case 'text':
                    if (updaterFn) updaterFn.call(this, node, this._getVMVal(vm, exp));
                    break;
                case 'if':
                    if (updaterFn) updaterFn.call(this, node, this._getVMVal(vm, exp), exp, vm);
                    break;
                default:
                    if (updaterFn) updaterFn.call(this, node, this._getVMVal(vm, exp));
            }
        }
    };
    CompileUtil.prototype.templateUpdater = function (node, vm, exp) {
        node.textContent = node.textContent.replace(/(\{\{.*\}\})/g, this._getVMVal(vm, exp));
    };
    CompileUtil.prototype.textUpdater = function (node, value) {
        if (node.tagName.toLocaleLowerCase() === 'input') return node.value = value;
        node.textContent = typeof value === 'undefined' ? '' : value;
    };
    CompileUtil.prototype.htmlUpdater = function (node, value) {
        node.innerHTML = typeof value === 'undefined' ? '' : value;
    };
    CompileUtil.prototype.ifUpdater = function (node, value) {
        if (!value && this.$fragment.contains(node)) {
            this.$fragment.removeChild(node);
        } else {
            this.$fragment.appendChild(node);
        }
    };
    CompileUtil.prototype.classUpdater = function (node, value, oldValue) {
        if (!value && !oldValue) return;
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');
        var space = className && String(value) ? ' ' : '';
        node.className = className + space + value;
    };
    CompileUtil.prototype.modelUpdater = function (node, value, exp, vm) {
        node.value = typeof value === 'undefined' ? '' : value;
        // const val = exp.replace(/(this.state.)|(this.props)/, '');
        var val = exp.replace(/(state.)/, '');
        // const val = exp.replace(/(this.state.)/, '');
        var func = function func(event) {
            event.preventDefault();
            // if (/(this.state.).*/.test(exp)) vm.state[val] = (event.target as HTMLInputElement).value;
            if (/(state.).*/.test(exp)) vm.state[val] = event.target.value;
            // if (/(this.props.).*/.test(exp)) vm.props[val] = (event.target as HTMLInputElement).value;
            // vm.$reRender();
        };
        node.addEventListener('input', func, false);
        node.eventinput = func;
        if (node.eventTypes) {
            var eventlist = JSON.parse(node.eventTypes);
            eventlist.push('input');
            node.eventTypes = JSON.stringify(eventlist);
        }
        if (!node.eventTypes) node.eventTypes = JSON.stringify(['input']);
    };
    CompileUtil.prototype.repeatUpdater = function (node, value, expFather, vm) {
        var _this = this;
        var key = expFather.split(' ')[1];
        value.forEach(function (val, index) {
            var repeatData = {};
            repeatData[key] = val;
            repeatData.$index = index;
            var newElement = _this.cloneNode(node, repeatData);
            var nodeAttrs = newElement.attributes;
            var text = newElement.textContent;
            var reg = /\{\{(.*)\}\}/g;
            // if (reg.test(text) && text.indexOf(`{{${key}`) >= 0 && !newElement.hasChildNodes()) {
            //   new CompileUtilForRepeat(this.$fragment).templateUpdater(newElement as Element, val, key, vm);
            // }
            if (nodeAttrs) {
                Array.from(nodeAttrs).forEach(function (attr) {
                    var attrName = attr.name;
                    if (_this.isDirective(attrName) && attrName !== 'es-repeat') {
                        var dir = attrName.substring(3);
                        var exp = attr.value;
                        if (_this.isEventDirective(dir)) {
                            new CompileUtilForRepeat(_this.$fragment).eventHandler(newElement, vm, exp, dir, key, val);
                        } else {
                            new CompileUtilForRepeat(_this.$fragment).bind(newElement, val, key, dir, exp, index, vm, value);
                        }
                    }
                });
            }
            if (_this.isTextNode(newElement) && reg.test(text)) {
                console.log(44444, newElement);
                new CompileUtilForRepeat(_this.$fragment).templateUpdater(newElement, val, key, vm);
            }
            if (!_this.isIfNode(node)) _this.$fragment.appendChild(newElement);
            if (newElement.hasChildNodes()) _this.repeatChildrenUpdater(newElement, val, expFather, index, vm, value);
        });
    };
    CompileUtil.prototype.repeatChildrenUpdater = function (node, value, expFather, index, vm, watchValue) {
        var _this = this;
        var key = expFather.split(' ')[1];
        Array.from(node.childNodes).forEach(function (child) {
            if (node.repeatData) child.repeatData = Object.assign({}, node.repeatData);
            if (!node.repeatData) child.repeatData = {};
            child.repeatData[key] = value;
            child.repeatData.$index = index;
            if (_this.isRepeatProp(child)) child.setAttribute("_prop-" + key, JSON.stringify(value));
            var nodeAttrs = child.attributes;
            var text = child.textContent;
            var reg = /\{\{(.*)\}\}/g;
            var canShowByIf = true;
            // if (reg.test(text) && text.indexOf(`{{${key}`) >= 0 && !child.hasChildNodes()) {
            //   new CompileUtilForRepeat(node).templateUpdater(child, value, key, vm);
            // }
            if (nodeAttrs) {
                Array.from(nodeAttrs).forEach(function (attr) {
                    var attrName = attr.name;
                    var exp = attr.value;
                    var dir = attrName.substring(3);
                    var repeatUtils = new CompileUtilForRepeat();
                    // if (this.isDirective(attrName) && attrName !== 'es-repeat' && new RegExp(`(^${key})|(^this)`).test(exp)) {
                    if (_this.isDirective(attrName) && attrName !== 'es-repeat' && new RegExp("(^" + key + ")|(^state)|(^@)").test(exp)) {
                        if (_this.isEventDirective(dir)) {
                            new CompileUtilForRepeat(node).eventHandler(child, vm, exp, dir, key, value);
                        } else {
                            new CompileUtilForRepeat(node).bind(child, value, key, dir, exp, index, vm, watchValue);
                        }
                        if (dir === 'if' && new RegExp("(^" + key + ")").test(exp)) canShowByIf = repeatUtils._getVMRepeatVal(value, exp, key);
                        // if (dir === 'if' && /^(this\.)/.test(exp)) canShowByIf = repeatUtils._getVMVal(vm, exp);
                        if (dir === 'if' && /^(state\.)/.test(exp)) canShowByIf = repeatUtils._getVMVal(vm, exp);
                        child.removeAttribute(attrName);
                    }
                });
            }
            if (_this.isTextNode(child) && reg.test(text)) {
                console.log(333333, child);
                new CompileUtilForRepeat(node).templateUpdater(child, value, key, vm);
            }
            if (child.hasChildNodes() && !_this.isRepeatNode(child) && canShowByIf) _this.repeatChildrenUpdater(child, value, expFather, index, vm, watchValue);
            if (!canShowByIf && node.contains(child)) node.removeChild(child);
            var newAttrs = child.attributes;
            if (newAttrs && canShowByIf) {
                var restRepeat = Array.from(newAttrs).find(function (attr) {
                    return _this.isDirective(attr.name) && attr.name === 'es-repeat';
                });
                if (restRepeat) {
                    var newWatchData = restRepeat.value.split(' ')[3];
                    // if (/^(this\.)/.test(newWatchData)) {
                    if (/^(state\.)/.test(newWatchData)) {
                        new CompileUtil(node).bind(child, vm, restRepeat.value, restRepeat.name.substring(3));
                        if (node.contains(child)) node.removeChild(child);
                    }
                    if (new RegExp("(^" + key + ")").test(newWatchData)) {
                        new CompileUtil(node).repeatUpdater(child, _this._getValueByValue(value, newWatchData, key), restRepeat.value, vm);
                        if (node.contains(child)) node.removeChild(child);
                    }
                }
            }
        });
    };
    CompileUtil.prototype.isDirective = function (attr) {
        return attr.indexOf('es-') === 0;
    };
    CompileUtil.prototype.isEventDirective = function (event) {
        return event.indexOf('on') === 0;
    };
    CompileUtil.prototype.isElementNode = function (node) {
        return node.nodeType === 1;
    };
    CompileUtil.prototype.isRepeatNode = function (node) {
        var nodeAttrs = node.attributes;
        var result = false;
        if (nodeAttrs) {
            Array.from(nodeAttrs).forEach(function (attr) {
                var attrName = attr.name;
                if (attrName === 'es-repeat') result = true;
            });
        }
        return result;
    };
    CompileUtil.prototype.isIfNode = function (node) {
        var nodeAttrs = node.attributes;
        var result = false;
        if (nodeAttrs) {
            Array.from(nodeAttrs).forEach(function (attr) {
                var attrName = attr.name;
                if (attrName === 'es-if') result = true;
            });
        }
        return result;
    };
    CompileUtil.prototype.isRepeatProp = function (node) {
        var nodeAttrs = node.attributes;
        var result = false;
        if (nodeAttrs) return !!Array.from(nodeAttrs).find(function (attr) {
            return (/^\{(.+)\}$/.test(attr.value)
            );
        });
        return result;
    };
    CompileUtil.prototype.isTextNode = function (node) {
        return node.nodeType === 3;
    };
    CompileUtil.prototype.cloneNode = function (node, repeatData) {
        var newElement = node.cloneNode(true);
        if (node.eventTypes) {
            JSON.parse(node.eventTypes).forEach(function (eve) {
                return newElement["on" + eve] = node["event" + eve];
            });
            newElement.eventTypes = JSON.parse(JSON.stringify(node.eventTypes));
        }
        // if (node.repeatData) newElement.repeatData = Object.assign({}, repeatData);
        // if (node.repeatData) newElement.repeatData = repeatData;
        if (repeatData) newElement.repeatData = repeatData;
        return newElement;
    };
    return CompileUtil;
}();
exports.CompileUtil = CompileUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9Db21waWxlVXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQkE7SUFJRSw4QkFBWSxRQUFxQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRU0sK0NBQWdCLEdBQXZCLFVBQXdCLEVBQU8sRUFBRSxHQUFXLEVBQUUsR0FBVztRQUN2RCxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSwrQ0FBZ0IsR0FBdkIsVUFBd0IsRUFBTyxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsUUFBYTtRQUN0RSxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxPQUFPLENBQUM7UUFDWixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUs7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDO2dCQUFFLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLEtB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
},{}],"../../easiest/src/Compile/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualDOM_1 = __importDefault(require("../VirtualDOM"));
var Utils_1 = __importDefault(require("../Utils"));
var CompileUtils_1 = require("../CompileUtils");
var Compile = /** @class */function () {
    // removeDOM
    function Compile(el, vm, routerRenderDom) {
        this.utils = new Utils_1.default();
        this.$vm = vm;
        this.$el = this.isElementNode(el) ? el : document.querySelector(el);
        if (this.$el) {
            this.$fragment = this.node2Fragment(this.$el);
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
            this.utils = null;
            this.$fragment = null;
            oldVnode = null;
            newVnode = null;
            patchList = null;
        }
    }
    Compile.prototype.init = function () {
        this.compileElement(this.$fragment);
    };
    Compile.prototype.compileElement = function (fragment) {
        var elementCreated = document.createElement('div');
        elementCreated.innerHTML = this.utils.formatInnerHTML(this.$vm.$template);
        var childNodes = elementCreated.childNodes;
        this.recursiveDOM(childNodes, fragment);
    };
    Compile.prototype.recursiveDOM = function (childNodes, fragment) {
        var _this = this;
        Array.from(childNodes).forEach(function (node) {
            if (node.hasChildNodes() && !_this.isRepeatNode(node)) {
                _this.recursiveDOM(node.childNodes, node);
            }
            var text = node.textContent;
            var reg = /\{\{(.*)\}\}/g;
            if (_this.isElementNode(node)) {
                // if (reg.test(text) && node.hasChildNodes() && node.childNodes.length === 1) {
                // // if (reg.test(text)) {
                //   const regText = RegExp.$1;
                //   console.log(222222, node);
                //   // if (/(.*\{\{(this.).*\}\}.*)/g.test(text)) this.compileText(node, regText);
                //   if (/(.*\{\{(state.).*\}\}.*)/g.test(text)) this.compileText(node, regText);
                // }
                _this.compile(node, fragment);
            }
            if (_this.isTextNode(node) && reg.test(text)) {
                var regText = RegExp.$1;
                console.log(111111, regText, node);
                if (/(.*\{\{(state.).*\}\}.*)/g.test(text)) _this.compileText(node, regText);
            }
            if (_this.isRepeatNode(node) && fragment.contains(node)) {
                fragment.removeChild(node);
            } else {
                if (!_this.isIfNode(node)) fragment.appendChild(node);
            }
        });
    };
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
    Compile.prototype.node2Fragment = function (el) {
        return document.createDocumentFragment();
    };
    Compile.prototype.compileText = function (node, exp) {
        new CompileUtils_1.CompileUtil(this.$fragment).templateUpdater(node, this.$vm, exp);
    };
    Compile.prototype.eventHandler = function (node, vm, exp, eventName) {
        var eventType = eventName.split(':')[1];
        // const fnList = exp.replace(/\(.*\)/, '').split('.');
        var fnList = exp.replace(/^(\@)/, '').replace(/\(.*\)/, '').split('.');
        var args = exp.replace(/^(\@)/, '').match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
        // const args = exp.match(/\((.*)\)/)[1].replace(/\s+/g, '').split(',');
        var fn = vm;
        fnList.forEach(function (f) {
            // if (f === 'this') return;
            fn = fn[f];
        });
        var func = function func(event) {
            var argsList = [];
            args.forEach(function (arg) {
                if (arg === '') return false;
                if (arg === '$event') argsList.push(event);
                // if (/(this.).*/g.test(arg) || /(this.state.).*/g.test(arg) || /(this.props.).*/g.test(arg)) argsList.push(new CompileUtil()._getVMVal(vm, arg));
                // if (/(this.).*/g.test(arg) || /(this.state.).*/g.test(arg)) argsList.push(new CompileUtil()._getVMVal(vm, arg));
                if (/(state.).*/g.test(arg)) argsList.push(new CompileUtils_1.CompileUtil()._getVMVal(vm, arg));
                if (/\'.*\'/g.test(arg)) argsList.push(arg.match(/\'(.*)\'/)[1]);
                if (!/\'.*\'/g.test(arg) && /^[0-9]*$/g.test(arg)) argsList.push(Number(arg));
                if (arg === 'true' || arg === 'false') argsList.push(arg === 'true');
            });
            fn.apply(vm, argsList);
        };
        if (eventType && fn) {
            node["on" + eventType] = func;
            node["event" + eventType] = func;
            if (node.eventTypes) {
                var eventlist = JSON.parse(node.eventTypes);
                eventlist.push(eventType);
                node.eventTypes = eventlist;
            }
            if (!node.eventTypes) node.eventTypes = JSON.stringify([eventType]);
        }
    };
    Compile.prototype.isDirective = function (attr) {
        return attr.indexOf('es-') === 0;
    };
    Compile.prototype.isEventDirective = function (eventName) {
        return eventName.indexOf('on') === 0;
    };
    Compile.prototype.isElementNode = function (node) {
        if (typeof node === 'string') return false;
        return node.nodeType === 1;
    };
    Compile.prototype.isRepeatNode = function (node) {
        var nodeAttrs = node.attributes;
        var result = false;
        if (nodeAttrs) {
            Array.from(nodeAttrs).forEach(function (attr) {
                var attrName = attr.name;
                if (attrName === 'es-repeat') result = true;
            });
        }
        return result;
    };
    Compile.prototype.isIfNode = function (node) {
        var nodeAttrs = node.attributes;
        var result = false;
        if (nodeAttrs) {
            Array.from(nodeAttrs).forEach(function (attr) {
                var attrName = attr.name;
                if (attrName === 'es-if') result = true;
            });
        }
        return result;
    };
    Compile.prototype.isTextNode = function (node) {
        return node.nodeType === 3;
    };
    return Compile;
}();
exports.default = Compile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9Db21waWxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsNkRBQXVDO0FBQ3ZDLG1EQUE2QjtBQUM3QixnREFBOEM7QUFFOUM7SUFNRSxZQUFZO0lBQ1osaUJBQVksRUFBb0IsRUFBRSxFQUFPLEVBQUUsZUFBeUI7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBWSxDQUFDLENBQUM7UUFDekYsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLGVBQWUsRUFBRTtnQkFDbkIsbUJBQW1CO2dCQUNuQixJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7YUFDakY7WUFDRCxJQUFJLFFBQVEsR0FBRyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxRQUFRLEdBQUcsb0JBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNB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
},{"../VirtualDOM":"../../easiest/src/VirtualDOM/index.ts","../Utils":"../../easiest/src/Utils/index.ts","../CompileUtils":"../../easiest/src/CompileUtils/index.ts"}],"../node_modules/process/browser.js":[function(require,module,exports) {

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
},{}],"../../easiest/node_modules/reflect-metadata/Reflect.js":[function(require,module,exports) {
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
},{"process":"../node_modules/process/browser.js"}],"../../easiest/src/Injectable/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Injectable(_constructor) {
    // 通过反射机制，获取参数类型列表
    var paramsTypes = Reflect.getMetadata('design:paramtypes', _constructor);
    if (paramsTypes.length) {
        paramsTypes.forEach(function (v, i) {
            if (v === _constructor) {
                throw new Error('不可以依赖自身');
            } else {
                var service = v.name;
                if (_constructor._needInjectedClass) {
                    _constructor._needInjectedClass.push(service);
                } else {
                    _constructor._needInjectedClass = [service];
                }
            }
        });
    }
}
exports.Injectable = Injectable;
function injector(_constructor, _module) {
    var args = [];
    if (_constructor._needInjectedClass) {
        _constructor._needInjectedClass.forEach(function (arg) {
            var _service = _constructor._injectedProviders.has(arg) ? _constructor._injectedProviders.get(arg) : _module.$providers.find(function (service) {
                return service.constructor.name === arg;
            });
            if (_service) args.push(factoryCreator(_service, _module));
        });
    }
    if (!_constructor._needInjectedClass) {
        var CLASS_ARGUS = /^function\s+[^\(]*\(\s*([^\)]*)\)/m;
        var argList = _constructor.toString().match(CLASS_ARGUS)[1].replace(/ /g, '').split(',');
        argList.forEach(function (arg) {
            var serviceName = arg.replace(/\n/g, '');
            var argu = "" + serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
            var _service = _constructor._injectedProviders.has(argu) ? _constructor._injectedProviders.get(argu) : _module.$providers.find(function (service) {
                return service.constructor.name === argu;
            });
            if (_service) args.push(factoryCreator(_service, _module));
        });
    }
    return args;
}
exports.injector = injector;
function factoryCreator(_constructor, _module) {
    var args = injector(_constructor, _module);
    var factory;
    if (_constructor.isSingletonMode) factory = _constructor.getInstance(args);
    factory = Reflect.construct(_constructor, args);
    return factory;
}
exports.factoryCreator = factoryCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9JbmplY3RhYmxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNEJBQTBCO0FBRTFCLG9CQUEyQixZQUFzQjtJQUM3QyxrQkFBa0I7SUFDbEIsSUFBTSxXQUFXLEdBQW9CLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUYsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1FBQ3BCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxZQUFZLEVBQUU7Z0JBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdkIsSUFBSyxZQUFvQixDQUFDLGtCQUFrQixFQUFFO29CQUN6QyxZQUFvQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDMUQ7cUJBQU07b0JBQ0YsWUFBb0IsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN4RDthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUM7QUFqQkQsZ0NBaUJDO0FBRUQsa0JBQXlCLFlBQXNCLEVBQUUsT0FBWTtJQUN6RCxJQUFNLElBQUksR0FBZSxFQUFFLENBQUM7SUFDNUIsSUFBSyxZQUFvQixDQUFDLGtCQUFrQixFQUFFO1FBQ3pDLFlBQW9CLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN6RCxJQUFNLFFBQVEsR0FBSSxZQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUUsWUFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUIsSUFBSyxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO1lBQzFNLElBQUksUUFBUTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsSUFBSSxDQUFFLFlBQW9CLENBQUMsa0JBQWtCLEVBQUU7UUFDM0MsSUFBTSxXQUFXLEdBQUcsb0NBQW9DLENBQUM7UUFDekQsSUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztZQUN4QixJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFNLElBQUksR0FBRyxLQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUcsQ0FBQztZQUM3RSxJQUFNLFFBQVEsR0FBSSxZQUFvQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsWUFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBaUIsSUFBSyxPQUFBLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1lBQzdNLElBQUksUUFBUTtnQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQW5CRCw0QkFtQkM7QUFFRCx3QkFBK0IsWUFBc0IsRUFBRSxPQUFZO0lBQy9ELElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLENBQUM7SUFDWixJQUFLLFlBQW9CLENBQUMsZUFBZTtRQUFFLE9BQU8sR0FBSSxZQUFvQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3RixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQU5ELHdDQU1DIn0=
},{"reflect-metadata":"../../easiest/node_modules/reflect-metadata/Reflect.js"}],"../../easiest/src/Component/index.ts":[function(require,module,exports) {
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
function Component(options) {
    return function (_constructor) {
        var vm = _constructor.prototype;
        vm.$template = options.template;
        vm.state = options.state;
        vm.utils = new Utils_1.default();
        vm.compileUtil = new CompileUtils_1.CompileUtil();
        vm.$components = {};
        vm.$componentList = [];
        vm.$getLocation = function () {
            return {
                path: this.$vm.$esRouteObject.path,
                query: this.$vm.$esRouteObject.query,
                params: this.$vm.$esRouteObject.params
            };
        };
        vm.$setLocation = function (path, query, params) {
            var rootPath = this.$vm.$rootPath === '/' ? '' : this.$vm.$rootPath;
            history.pushState({ path: path, query: query, params: params }, null, "" + rootPath + path + this.utils.buildQuery(query));
            this.$vm.$esRouteObject = { path: path, query: query, params: params };
        };
        vm.$watchData = function () {
            // if (this.props) (this as IComponent<State, Props, Vm>).propsWatcher = new Watcher((this as IComponent<State, Props, Vm>).props, (this as IComponent<State, Props, Vm>).esWatchState.bind(this as IComponent<State, Props, Vm>), (this as IComponent<State, Props, Vm>).$reRender.bind(this as IComponent<State, Props, Vm>));
            if (this.state) this.stateWatcher = new Watcher_1.default(this.state, this.esWatchState.bind(this), this.$reRender.bind(this));
        };
        vm.$render = function () {
            var dom = this.$renderDom;
            var compile = new Compile_1.default(dom, this);
            this.$mountComponent(dom, true);
            this.$componentList.forEach(function (component) {
                if (component.scope.$render) component.scope.$render();
                if (component.scope.esAfterMount) component.scope.esAfterMount();
            });
            if (this.esHasRender) this.esHasRender();
        };
        vm.esWatchState = function (oldData, newData) {};
        vm.$reRender = function () {
            var dom = this.$renderDom;
            var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
            var compile = new Compile_1.default(dom, this, routerRenderDom);
            this.$mountComponent(dom, false);
            this.$componentList.forEach(function (component) {
                if (component.scope.$render) component.scope.$reRender();
                if (component.scope.esAfterMount) component.scope.esAfterMount();
            });
            if (this.esHasRender) this.esHasRender();
        };
        vm.$mountComponent = function (dom, isFirstRender) {
            var _this = this;
            var saveStates = [];
            this.$componentList.forEach(function (component) {
                saveStates.push(component);
            });
            this.$componentsConstructor(dom);
            this.$componentList.forEach(function (component) {
                var saveComponent = saveStates.find(function (save) {
                    return save.dom === component.dom;
                });
                if (saveComponent) {
                    component.scope = saveComponent.scope;
                    if (!_this.utils.isEqual(component.scope, component.scope.props)) {
                        if (component.scope.esReceiveProps) component.scope.esReceiveProps(component.props);
                        component.scope.props = component.props;
                    }
                }
                component.scope.$vm = _this.$vm;
                component.scope.$components = _this.$components;
                if (component.scope.esOnInit && isFirstRender) component.scope.esOnInit();
                if (component.scope.$watchData) component.scope.$watchData();
                if (component.scope.esBeforeMount) component.scope.esBeforeMount();
            });
        };
        vm.$componentsConstructor = function (dom) {
            var _this = this;
            this.$componentList = [];
            var routerRenderDom = dom.querySelectorAll(this.$vm.$routeDOMKey)[0];
            for (var name in this.constructor._injectedComponents) {
                this.$components[name] = this.constructor._injectedComponents[name];
            }
            var _loop_1 = function _loop_1(name) {
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
                            if (/^\_prop\-(.+)/.test(attr.name)) _propsKeys_1[attr.name.replace('_prop-', '')] = JSON.parse(attr.value);
                        });
                        attrList.forEach(function (attr) {
                            var attrName = attr.name;
                            var prop = /^\{(.+)\}$/.exec(attr.value);
                            if (prop) {
                                var valueList = prop[1].split('.');
                                var key = valueList[0];
                                var _prop = null;
                                // if (/^(this.).*/g.test(prop[1])) _prop = (this as IComponent<State, Props, Vm>).compileUtil._getVMVal(this as IComponent<State, Props, Vm>, prop[1]);
                                if (/^(state.).*/g.test(prop[1])) _prop = _this.compileUtil._getVMVal(_this, prop[1]);
                                if (/^(\@.).*/g.test(prop[1])) _prop = _this.compileUtil._getVMVal(_this, prop[1].replace(/^(\@)/, ''));
                                if (_propsKeys_1.hasOwnProperty(key)) _prop = _this.getPropsValue(valueList, _propsKeys_1[key]);
                                props[attrName] = _this.buildProps(_prop);
                            }
                            node.removeAttribute(attrName);
                        });
                    }
                    _this.$componentList.push({
                        dom: node,
                        props: props,
                        scope: _this.buildComponentScope(_this.$components[name], props, node)
                    });
                });
            };
            for (var name in this.$components) {
                _loop_1(name);
            }
        };
        vm.setState = function (newState) {
            if (newState && this.utils.isFunction(newState)) {
                var _newState = newState();
                if (_newState && _newState instanceof Object) {
                    for (var key in _newState) {
                        if (this.state.hasOwnProperty(key) && this.state[key] !== _newState[key]) this.state[key] = _newState[key];
                        if (!this.state.hasOwnProperty(key)) this.state[key] = _newState[key];
                    }
                    this.$reRender();
                }
            }
            if (newState && newState instanceof Object) {
                for (var key in newState) {
                    if (this.state.hasOwnProperty(key) && this.state[key] !== newState[key]) this.state[key] = newState[key];
                    if (!this.state.hasOwnProperty(key)) this.state[key] = newState[key];
                }
                this.$reRender();
            }
        };
        // vm.setProps = function (newProps: any): void {
        //   if (newProps && (this as IComponent<State, Props, Vm>).utils.isFunction(newProps)) {
        //     const _newProps = newProps();
        //     if (_newProps && _newProps instanceof Object) {
        //       for (const key in _newProps) {
        //         if ((this as IComponent<State, Props, Vm>).props.hasOwnProperty(key) && (this as IComponent<State, Props, Vm>).props[key] !== _newProps[key]) (this as IComponent<State, Props, Vm>).props[key] = _newProps[key];
        //         if ((this as IComponent<State, Props, Vm>).props.hasOwnProperty(key)) (this as IComponent<State, Props, Vm>).props[key] = _newProps[key];
        //       }
        //       (this as IComponent<State, Props, Vm>).$reRender();
        //     }
        //   }
        //   if (newProps && newProps instanceof Object) {
        //     for (const key in newProps) {
        //       if ((this as IComponent).props.hasOwnProperty(key) && (this as IComponent).props[key] !== newProps[key]) (this as IComponent).props[key] = newProps[key];
        //       if ((this as IComponent).props.hasOwnProperty(key)) (this as IComponent).props[key] = newProps[key];
        //     }
        //     (this as IComponent<State, Props, Vm>).$reRender();
        //   }
        // };
        vm.getPropsValue = function (valueList, value) {
            var val = value;
            valueList.forEach(function (v, index) {
                if (index === 0) return;
                val = val[v];
            });
            return val;
        };
        vm.buildProps = function (prop) {
            if (this.utils.isFunction(prop)) {
                return prop.bind(this);
            } else {
                return prop;
            }
        };
        vm.buildComponentScope = function (ComponentClass, props, dom) {
            var _component = Injectable_1.factoryCreator(ComponentClass, this.$vm.$rootModule);
            _component.props = props;
            _component.$renderDom = dom;
            _component.$components = this.$components;
            return _component;
        };
    };
}
exports.default = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9Db21wb25lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx1REFBaUM7QUFDakMsdURBQWlDO0FBRWpDLG1EQUE2QjtBQUM3QixnREFBOEM7QUFDOUMsNENBQStDO0FBUS9DLG1CQUF1RCxPQUFpQztJQUN0RixPQUFPLFVBQVUsWUFBc0I7UUFDckMsSUFBTSxFQUFFLEdBQWlDLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDaEUsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUV6QixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUNuQyxFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNwQixFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV2QixFQUFFLENBQUMsWUFBWSxHQUFHO1lBQ2hCLE9BQU87Z0JBQ0wsSUFBSSxFQUFHLElBQXFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNwRSxLQUFLLEVBQUcsSUFBcUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUs7Z0JBQ3RFLE1BQU0sRUFBRyxJQUFxQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTTthQUN6RSxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLFlBQVksR0FBRyxVQUFVLElBQVksRUFBRSxLQUFXLEVBQUUsTUFBWTtZQUNqRSxJQUFNLFFBQVEsR0FBSSxJQUFxQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFF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
},{"../Compile":"../../easiest/src/Compile/index.ts","../Watcher":"../../easiest/src/Watcher/index.ts","../Utils":"../../easiest/src/Utils/index.ts","../CompileUtils":"../../easiest/src/CompileUtils/index.ts","../Injectable":"../../easiest/src/Injectable/index.ts"}],"../../easiest/src/Router/index.ts":[function(require,module,exports) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var KeyWatcher_1 = __importDefault(require("../KeyWatcher"));
var Router = /** @class */function () {
    function Router() {
        this.routes = [];
        this.routesList = [];
        this.currentUrl = '';
        this.lastRoute = null;
        this.rootDom = null;
        this.utils = new Utils_1.default();
        this.$rootPath = '/';
        this.hasRenderComponentList = [];
        this.needRedirectPath = null;
        this.$vm = null;
        this.watcher = null;
        this.renderRouteList = [];
    }
    Router.prototype.$bootstrap = function (vm) {
        var _this = this;
        this.$vm = vm;
        this.$vm.$setRootPath(this.$rootPath);
        this.$vm.$canRenderModule = false;
        this.$vm.$routeDOMKey = 'router-render';
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('popstate', function (e) {
            var path;
            if (_this.$rootPath === '/') {
                path = location.pathname || '/';
            } else {
                path = location.pathname.replace(_this.$rootPath, '') === '' ? '/' : location.pathname.replace(_this.$rootPath, '');
            }
            _this.$vm.$esRouteObject = {
                path: path,
                query: {},
                params: {}
            };
        }, false);
    };
    Router.prototype.$init = function (arr) {
        if (arr && arr instanceof Array) {
            var rootDom = document.querySelector('#root');
            this.rootDom = rootDom || null;
            this.routes = arr;
            this.routesList = [];
        } else {
            console.error('route error: no routes exit');
        }
    };
    Router.prototype.$setRootPath = function (rootPath) {
        if (rootPath && typeof rootPath === 'string') {
            this.$rootPath = rootPath;
        } else {
            console.error('route error: rootPath is not defined or rootPath must be a String');
        }
    };
    Router.prototype.$routeChange = function (lastRoute, nextRoute) {};
    Router.prototype.redirectTo = function (redirectTo) {
        var rootPath = this.$rootPath === '/' ? '' : this.$rootPath;
        history.replaceState(null, null, "" + rootPath + redirectTo);
        this.$vm.$esRouteObject = {
            path: redirectTo || '/',
            query: {},
            params: {}
        };
    };
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
                params: {}
            };
            this.watcher = new KeyWatcher_1.default(this.$vm, '$esRouteObject', this.refresh.bind(this));
        }
        this.currentUrl = this.$vm.$esRouteObject.path || '/';
        this.routesList = [];
        this.renderRouteList = this.currentUrl === '/' ? ['/'] : this.currentUrl.split('/');
        this.renderRouteList[0] = '/';
        this.distributeRoutes();
    };
    Router.prototype.distributeRoutes = function () {
        if (this.lastRoute && this.lastRoute !== this.currentUrl) {
            // has rendered
            this.insertRenderRoutes();
        } else {
            // first render
            this.generalDistributeRoutes();
        }
        this.$routeChange(this.lastRoute, this.currentUrl);
        this.lastRoute = this.currentUrl;
        if (this.needRedirectPath) {
            this.redirectTo(this.needRedirectPath);
            this.needRedirectPath = null;
        }
    };
    Router.prototype.insertRenderRoutes = function () {
        var _this = this;
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
                var willRemoveComponent = this_1.hasRenderComponentList[index];
                if (willRemoveComponent && willRemoveComponent.esOnDestory) willRemoveComponent.esOnDestory();
                var needRenderRoute = this_1.routesList[index];
                if (!needRenderRoute) {
                    console.error('route error: wrong route instantiation in insertRenderRoutes:', this_1.currentUrl);
                    return { value: void 0 };
                }
                // if (needRenderRoute.redirectTo && /^\/.*/.test(needRenderRoute.redirectTo) && (index + 1) === this.renderRouteList.length) {
                //   this.hasRenderComponentList.forEach((c, i) => {
                //     if (c.esRouteChange) c.esRouteChange(this.lastRoute, this.currentUrl);
                //     if (i > index && c.esOnDestory) c.esOnDestory();
                //   });
                //   this.hasRenderComponentList.length = index;
                //   this.needRedirectPath = needRenderRoute.redirectTo;
                //   return;
                // }
                var needRenderComponent = this_1.$vm.$components[needRenderRoute.component];
                var renderDom = document.querySelectorAll('router-render')[index - 1];
                this_1.hasRenderComponentList.forEach(function (c, i) {
                    if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                    if (i > index && c.esOnDestory) c.esOnDestory();
                });
                this_1.hasRenderComponentList.length = index;
                // this.instantiateComponent(needRenderComponent, renderDom).then(component => {
                //   this.hasRenderComponentList[index] = component;
                // });
                if (!needRenderRoute.component && !needRenderRoute.redirectTo) {
                    console.error("route error: path " + needRenderRoute.path + " need a component which has children path or need a  redirectTo which has't children path");
                    return { value: void 0 };
                }
                if (needRenderComponent) {
                    var component = this_1.instantiateComponent(needRenderComponent, renderDom);
                    if (component) this_1.hasRenderComponentList[index] = component;
                }
                if (needRenderRoute.redirectTo && /^\/.*/.test(needRenderRoute.redirectTo) && index + 1 === this_1.renderRouteList.length) {
                    this_1.hasRenderComponentList.forEach(function (c, i) {
                        if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                        if (i > index && c.esOnDestory) c.esOnDestory();
                    });
                    this_1.hasRenderComponentList.length = index;
                    this_1.needRedirectPath = needRenderRoute.redirectTo;
                    return { value: void 0 };
                }
            }
            if (index === this_1.renderRouteList.length - 1 && index < lastRouteList.length - 1) {
                var renderDom = document.querySelectorAll('router-render')[index];
                this_1.hasRenderComponentList.forEach(function (c, i) {
                    if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                    if (i > index && c.esOnDestory) c.esOnDestory();
                });
                if (renderDom && renderDom.hasChildNodes()) renderDom.removeChild(renderDom.childNodes[0]);
                this_1.hasRenderComponentList.length = index;
                var needRenderRoute = this_1.routesList[index];
                if (needRenderRoute.redirectTo && /^\/.*/.test(needRenderRoute.redirectTo) && index + 1 === this_1.renderRouteList.length) {
                    this_1.hasRenderComponentList.forEach(function (c, i) {
                        if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                        if (i > index && c.esOnDestory) c.esOnDestory();
                    });
                    this_1.hasRenderComponentList.length = index;
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
    Router.prototype.generalDistributeRoutes = function () {
        var _this = this;
        var _loop_2 = function _loop_2(index) {
            var path = this_2.renderRouteList[index];
            if (index === 0) {
                var rootRoute = this_2.routes.find(function (route) {
                    return route.path === "" + path || /^\/\:.+/.test(route.path);
                });
                if (!rootRoute) {
                    console.error('route error: wrong route instantiation in generalDistributeRoutes:', this_2.currentUrl);
                    return { value: void 0 };
                }
                var FindComponent = null;
                if (this_2.$vm.$rootModule.$components[rootRoute.component]) {
                    FindComponent = this_2.$vm.$components[rootRoute.component];
                } else {
                    console.error("route error: path " + rootRoute.path + " is undefined");
                    return { value: void 0 };
                }
                var rootDom = document.querySelector('#root');
                this_2.routesList.push(rootRoute);
                // this.instantiateComponent(FindComponent, rootDom)
                //   .then(component => {
                //     this.hasRenderComponentList[index] = component;
                //   })
                //   .catch(() => console.error('renderComponent failed'));
                var component = this_2.instantiateComponent(FindComponent, rootDom);
                if (component) this_2.hasRenderComponentList[index] = component;
                this_2.hasRenderComponentList.forEach(function (c, i) {
                    if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                    if (i > index && c.esOnDestory) c.esOnDestory();
                });
                if (rootRoute.redirectTo && /^\/.*/.test(rootRoute.redirectTo) && index + 1 === this_2.renderRouteList.length) {
                    this_2.needRedirectPath = rootRoute.redirectTo;
                    this_2.hasRenderComponentList.length = index;
                    return { value: void 0 };
                }
            } else {
                var lastRoute = this_2.routesList[index - 1].children;
                if (!lastRoute || !(lastRoute instanceof Array)) {
                    console.error('route error: routes not exit or routes must be an array!');
                }
                var route = lastRoute.find(function (r) {
                    return r.path === "/" + path || /^\/\:.+/.test(r.path);
                });
                if (!route) {
                    console.error('route error: wrong route instantiation:', this_2.currentUrl);
                    return { value: void 0 };
                }
                // if (route.redirectTo && /^\/.*/.test(route.redirectTo) && (index + 1) === this.renderRouteList.length) {
                //   this.hasRenderComponentList.forEach((c, i) => {
                //     if (c.esRouteChange) c.esRouteChange(this.lastRoute, this.currentUrl);
                //     if (i > index && c.esOnDestory) c.esOnDestory();
                //   });
                //   this.needRedirectPath = route.redirectTo;
                //   this.hasRenderComponentList.length = index;
                //   return;
                // }
                var FindComponent = null;
                if (this_2.$vm.$rootModule.$components[route.component]) {
                    FindComponent = this_2.$vm.$components[route.component];
                }
                if (!route.component && !route.redirectTo) {
                    console.error("route error: path " + route.path + " need a component which has children path or need a  redirectTo which has't children path");
                    return { value: void 0 };
                }
                var renderDom = document.querySelectorAll('router-render')[index - 1];
                this_2.routesList.push(route);
                this_2.hasRenderComponentList.forEach(function (c) {
                    if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                });
                // this.instantiateComponent(FindComponent, renderDom)
                //   .then(component => {
                //     this.hasRenderComponentList[index] = component;
                //   })
                //   .catch(() => console.error('renderComponent failed'));
                if (FindComponent) {
                    var component = this_2.instantiateComponent(FindComponent, renderDom);
                    if (component) this_2.hasRenderComponentList[index] = component;
                }
                if (route.redirectTo && /^\/.*/.test(route.redirectTo) && index + 1 === this_2.renderRouteList.length) {
                    this_2.hasRenderComponentList.forEach(function (c, i) {
                        if (c.esRouteChange) c.esRouteChange(_this.lastRoute, _this.currentUrl);
                        if (i > index && c.esOnDestory) c.esOnDestory();
                    });
                    this_2.needRedirectPath = route.redirectTo;
                    this_2.hasRenderComponentList.length = index;
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
    // public instantiateComponent(FindComponent: Function, renderDom: Element): Promise<any> {
    Router.prototype.instantiateComponent = function (FindComponent, renderDom) {
        return this.$vm.$renderComponent(FindComponent, renderDom);
    };
    return Router;
}();
exports.default = Router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9Sb3V0ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxtREFBNkI7QUFDN0IsNkRBQXVDO0FBRXZDO0lBY0U7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSwyQkFBVSxHQUFqQixVQUFrQixFQUFZO1FBQTlCLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDeEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FB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
},{"../Utils":"../../easiest/src/Utils/index.ts","../KeyWatcher":"../../easiest/src/KeyWatcher/index.ts"}],"../../easiest/src/EsModule/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
function EsModule(options) {
    return function (_constructor) {
        var vm = _constructor.prototype;
        vm.$exportList = {};
        vm.providerList = new Map();
        vm.utils = new Utils_1.default();
        if (options.imports) vm.$imports = options.imports;
        if (options.components) vm.$components = options.components;
        if (options.providers) vm.$providers = options.providers;
        if (options.exports) vm.$exports = options.exports;
        if (options.bootstrap) vm.$bootstrap = options.bootstrap;
        vm.$buildImports = function () {
            var _this = this;
            if (!this.$imports) return;
            this.$imports.forEach(function (ModuleImport) {
                // const moduleImport = new ModuleImport();
                var moduleImport = factoryModule(ModuleImport);
                for (var name in moduleImport.$exportList) {
                    _this.$components[name] = moduleImport.$exportList[name];
                }
            });
        };
        vm.$buildProviderList = function () {
            var _this = this;
            if (!this.$providers) return;
            this.$providers.forEach(function (service) {
                return _this.providerList.set("" + service.name.charAt(0).toUpperCase() + service.name.slice(1), service);
            });
        };
        vm.$buildProviders4Services = function () {
            if (!this.$providers) return;
            var _loop_1 = function _loop_1(name) {
                var service = this_1.$providers[name];
                if (service._injectedProviders) {
                    this_1.providerList.forEach(function (value, key) {
                        if (!service._injectedProviders.has(key)) service._injectedProviders.set(key, value);
                    });
                } else {
                    service._injectedProviders = this_1.providerList;
                }
            };
            var this_1 = this;
            for (var name in this.$providers) {
                _loop_1(name);
            }
        };
        vm.$buildProviders4Components = function () {
            if (!this.$providers) return;
            var _loop_2 = function _loop_2(name) {
                var component = this_2.$components[name];
                if (component._injectedProviders) {
                    this_2.providerList.forEach(function (value, key) {
                        if (!component._injectedProviders.has(key)) component._injectedProviders.set(key, value);
                    });
                } else {
                    component._injectedProviders = this_2.providerList;
                }
            };
            var this_2 = this;
            for (var name in this.$components) {
                _loop_2(name);
            }
        };
        vm.$buildComponents4Components = function () {
            if (!this.$components) return;
            for (var name in this.$components) {
                var FindComponent = this.$components[name];
                if (FindComponent._injectedComponents) {
                    FindComponent._injectedComponents = Object.assign(FindComponent._injectedComponents, this.$components);
                } else {
                    FindComponent._injectedComponents = this.$components;
                }
            }
        };
        vm.$buildExports = function () {
            var _this = this;
            if (!this.$exports) return;
            this.$exports.forEach(function (ex) {
                if (_this.$components[ex]) _this.$exportList[ex] = _this.$components[ex];
            });
        };
    };
}
exports.EsModule = EsModule;
function factoryModule(EM) {
    var em = new EM();
    em.$buildImports();
    em.$buildProviderList();
    em.$buildProviders4Services();
    em.$buildComponents4Components();
    em.$buildProviders4Components();
    em.$buildExports();
    return em;
}
exports.factoryModule = factoryModule;
// export default EsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9Fc01vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUE2QjtBQWM3QixrQkFBeUIsT0FBeUI7SUFDaEQsT0FBTyxVQUFVLFlBQXNCO1FBQ3JDLElBQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7UUFDbEMsRUFBRSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sQ0FBQyxPQUFPO1lBQUUsRUFBRSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksT0FBTyxDQUFDLFVBQVU7WUFBRSxFQUFFLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDNUQsSUFBSSxPQUFPLENBQUMsU0FBUztZQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUN6RCxJQUFJLE9BQU8sQ0FBQyxPQUFPO1lBQUUsRUFBRSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksT0FBTyxDQUFDLFNBQVM7WUFBRSxFQUFFLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFFekQsRUFBRSxDQUFDLGFBQWEsR0FBRztZQUFBLGlCQVNsQjtZQVJDLElBQUksQ0FBRSxJQUFrQixDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUN6QyxJQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFpQjtnQkFDckQsMkNBQTJDO2dCQUMzQyxJQUFNLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pE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
},{"../Utils":"../../easiest/src/Utils/index.ts"}],"../../easiest/src/Easiest/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = __importDefault(require("../Utils"));
var Injectable_1 = require("../Injectable");
var EsModule_1 = require("../EsModule");
var Easiest = /** @class */function () {
    function Easiest() {
        this.modalList = [];
        this.utils = new Utils_1.default();
        this.rootDom = document.querySelector('#root');
        this.$rootPath = '/';
        this.$canRenderModule = true;
        this.$routeDOMKey = 'router-render';
        this.$rootModule = null;
        this.$esRouteObject = null;
    }
    Easiest.prototype.$use = function (modal) {
        var _this = this;
        modal.$bootstrap(this);
        this.modalList.push(modal);
        return this.modalList.findIndex(function (md) {
            return _this.utils.isEqual(md, modal);
        });
    };
    Easiest.prototype.$setRootPath = function (rootPath) {
        if (rootPath && typeof rootPath === 'string') {
            this.$rootPath = rootPath;
        } else {
            console.error('rootPath is not defined or rootPath must be a String');
        }
    };
    Easiest.prototype.$bootstrapModule = function (Esmodule) {
        if (!Esmodule) {
            console.error('must send a root module');
            return;
        }
        this.$rootModule = EsModule_1.factoryModule(Esmodule);
        this.$components = Object.assign({}, this.$rootModule.$components);
    };
    Easiest.prototype.$init = function () {
        if (!this.$rootModule) {
            console.error('must use $bootstrapModule to declare a root EsModule before $init');
            return;
        }
        if (this.$canRenderModule) this.$renderModuleBootstrap();
    };
    Easiest.prototype.$renderModuleBootstrap = function () {
        if (!this.$rootModule.$bootstrap) {
            console.error('need $bootstrap for render Module Bootstrap');
            return;
        }
        var BootstrapComponent = this.$rootModule.$bootstrap;
        this.$renderComponent(BootstrapComponent, this.rootDom);
    };
    Easiest.prototype.$renderComponent = function (BootstrapComponent, renderDOM) {
        var component = Injectable_1.factoryCreator(BootstrapComponent, this.$rootModule);
        component.$vm = this;
        component.$components = this.$rootModule.$components;
        if (component.esOnInit) component.esOnInit();
        if (component.$watchData) component.$watchData();
        if (!component.$template) {
            console.error('must decaler this.$template in $bootstrap()');
            return;
        }
        var template = component.$template;
        if (template && typeof template === 'string' && renderDOM) {
            if (component.esBeforeMount) component.esBeforeMount();
            this.replaceDom(component, renderDOM);
            if (component.esAfterMount) component.esAfterMount();
            return component;
        } else {
            console.error('renderBootstrap failed: template or rootDom is not exit');
            return false;
        }
    };
    Easiest.prototype.replaceDom = function (component, renderDOM) {
        component.$renderDom = renderDOM;
        component.$render();
    };
    return Easiest;
}();
exports.default = Easiest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9FYXNpZXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsbURBQTZCO0FBQzdCLDRDQUErQztBQUMvQyx3Q0FBNEM7QUFFNUM7SUFjRTtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQztRQUVwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU0sc0JBQUksR0FBWCxVQUFZLEtBQTJCO1FBQXZDLGlCQUlDO1FBSEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLDhCQUFZLEdBQW5CLFVBQW9CLFFBQWdCO1FBQ2xDLElBQUksUUFBUSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztTQUMz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
},{"../Utils":"../../easiest/src/Utils/index.ts","../Injectable":"../../easiest/src/Injectable/index.ts","../EsModule":"../../easiest/src/EsModule/index.ts"}],"../../easiest/src/Service/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Service(options) {
    return function (_constructor) {
        if (options && options.isSingletonMode) _constructor.isSingletonMode = options.isSingletonMode;
        _constructor.instance = null;
        _constructor._injectedProviders = new Map();
        _constructor.getInstance = function (args) {
            var Instance = this;
            if (!this.isSingletonMode) return Reflect.construct(Instance, args);
            if (this.isSingletonMode) {
                if (!this.instance) this.instance = Reflect.construct(Instance, args);
                return this.instance;
            }
        };
    };
}
exports.default = Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9TZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsaUJBQWlCLE9BQXlCO0lBQ3hDLE9BQU8sVUFBVSxZQUFzQjtRQUNyQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZTtZQUFHLFlBQW9CLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDdkcsWUFBb0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLFlBQW9CLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNwRCxZQUFvQixDQUFDLFdBQVcsR0FBRyxVQUFVLElBQVk7WUFDeEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxrQkFBZSxPQUFPLENBQUMifQ==
},{}],"../../easiest/node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/is-buffer/index.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/utils.js":[function(require,module,exports) {
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

},{"./helpers/bind":"../../easiest/node_modules/axios/lib/helpers/bind.js","is-buffer":"../../easiest/node_modules/is-buffer/index.js"}],"../../easiest/node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
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

},{"../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
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

},{"./enhanceError":"../../easiest/node_modules/axios/lib/core/enhanceError.js"}],"../../easiest/node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
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

},{"./createError":"../../easiest/node_modules/axios/lib/core/createError.js"}],"../../easiest/node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/helpers/btoa.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
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
},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js","./../core/settle":"../../easiest/node_modules/axios/lib/core/settle.js","./../helpers/buildURL":"../../easiest/node_modules/axios/lib/helpers/buildURL.js","./../helpers/parseHeaders":"../../easiest/node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../../easiest/node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../../easiest/node_modules/axios/lib/core/createError.js","./../helpers/btoa":"../../easiest/node_modules/axios/lib/helpers/btoa.js","./../helpers/cookies":"../../easiest/node_modules/axios/lib/helpers/cookies.js"}],"../../easiest/node_modules/axios/lib/defaults.js":[function(require,module,exports) {
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

},{"./utils":"../../easiest/node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../../easiest/node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../../easiest/node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../../easiest/node_modules/axios/lib/adapters/xhr.js","process":"../node_modules/process/browser.js"}],"../../easiest/node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js"}],"../../easiest/node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../../easiest/node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
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

},{"./../utils":"../../easiest/node_modules/axios/lib/utils.js","./transformData":"../../easiest/node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../../easiest/node_modules/axios/lib/cancel/isCancel.js","../defaults":"../../easiest/node_modules/axios/lib/defaults.js","./../helpers/isAbsoluteURL":"../../easiest/node_modules/axios/lib/helpers/isAbsoluteURL.js","./../helpers/combineURLs":"../../easiest/node_modules/axios/lib/helpers/combineURLs.js"}],"../../easiest/node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
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

},{"./../defaults":"../../easiest/node_modules/axios/lib/defaults.js","./../utils":"../../easiest/node_modules/axios/lib/utils.js","./InterceptorManager":"../../easiest/node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../../easiest/node_modules/axios/lib/core/dispatchRequest.js"}],"../../easiest/node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
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

},{"./Cancel":"../../easiest/node_modules/axios/lib/cancel/Cancel.js"}],"../../easiest/node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
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

},{}],"../../easiest/node_modules/axios/lib/axios.js":[function(require,module,exports) {
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

},{"./utils":"../../easiest/node_modules/axios/lib/utils.js","./helpers/bind":"../../easiest/node_modules/axios/lib/helpers/bind.js","./core/Axios":"../../easiest/node_modules/axios/lib/core/Axios.js","./defaults":"../../easiest/node_modules/axios/lib/defaults.js","./cancel/Cancel":"../../easiest/node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../../easiest/node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../../easiest/node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../../easiest/node_modules/axios/lib/helpers/spread.js"}],"../../easiest/node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../../easiest/node_modules/axios/lib/axios.js"}],"../../easiest/src/Http/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var esHttp = {
    get: function get(url, params) {
        return new Promise(function (resolve, reject) {
            var pms = params ? { params: params } : null;
            axios_1.default.get(url, pms).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    },
    delete: function _delete(url, params) {
        return new Promise(function (resolve, reject) {
            var pms = params ? { params: params } : null;
            axios_1.default.delete(url, pms).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    },
    post: function post(url, params) {
        return new Promise(function (resolve, reject) {
            axios_1.default.post(url, params).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    },
    put: function put(url, params) {
        return new Promise(function (resolve, reject) {
            axios_1.default.put(url, params).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    },
    patch: function patch(url, params) {
        return new Promise(function (resolve, reject) {
            axios_1.default.patch(url, params).then(function (res) {
                resolve(res.data);
            }).catch(function (e) {
                reject(e.response.data);
            });
        });
    }
};
exports.default = esHttp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9IdHRwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQTBCO0FBRTFCLElBQU0sTUFBTSxHQUFHO0lBQ2IsR0FBRyxFQUFFLFVBQVMsR0FBVyxFQUFFLE1BQVk7UUFDckMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkMsZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2lCQUNoQixJQUFJLENBQUMsVUFBQyxHQUFRO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLENBQU07Z0JBQ1osTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLEVBQUUsVUFBUyxHQUFXLEVBQUUsTUFBWTtRQUN4QyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2QyxlQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBTTtnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksRUFBRSxVQUFTLEdBQVcsRUFBRSxNQUFZO1FBQ3RDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxlQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBTTtnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUcsRUFBRSxVQUFTLEdBQVcsRUFBRSxNQUFZO1FBQ3JDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBTTtnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssRUFBRSxVQUFTLEdBQVcsRUFBRSxNQUFZO1FBQ3ZDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxlQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7aUJBQ3JCLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsQ0FBTTtnQkFDWixNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==
},{"axios":"../../easiest/node_modules/axios/index.js"}],"../../easiest/src/Immutable/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toImmutable(data) {
    for (var key in data) {
        var val = data[key];
        if (val instanceof Object) {
            Object.defineProperty(data, key, {
                writable: false
            });
            toImmutable(val);
        }
    }
}
exports.toImmutable = toImmutable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9JbW11dGFibGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQkFBcUMsSUFBTztJQUMxQyxLQUFLLElBQU0sR0FBRyxJQUFJLElBQUksRUFBRTtRQUN0QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxHQUFHLFlBQVksTUFBTSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxDQUE4QixHQUFHLENBQUMsQ0FBQztTQUMvQztLQUNGO0FBQ0gsQ0FBQztBQVZELGtDQVVDIn0=
},{}],"../../easiest/src/index.ts":[function(require,module,exports) {
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
var Watcher_1 = require("./Watcher");
exports.Watcher = Watcher_1.default;
var KeyWatcher_1 = require("./KeyWatcher");
exports.KeyWatcher = KeyWatcher_1.default;
var Compile_1 = require("./Compile");
exports.Compile = Compile_1.default;
var Component_1 = require("./Component");
exports.Component = Component_1.default;
var Router_1 = require("./Router");
exports.Router = Router_1.default;
var Easiest_1 = require("./Easiest");
exports.Easiest = Easiest_1.default;
var EsModule_1 = require("./EsModule");
exports.EsModule = EsModule_1.EsModule;
exports.factoryModule = EsModule_1.factoryModule;
var Service_1 = require("./Service");
exports.Service = Service_1.default;
var Http_1 = require("./Http");
exports.esHttp = Http_1.default;
var Immutable_1 = require("./Immutable");
exports.toImmutable = Immutable_1.toImmutable;
var Injectable_1 = require("./Injectable");
exports.Injectable = Injectable_1.Injectable;
exports.injector = Injectable_1.injector;
exports.factoryCreator = Injectable_1.factoryCreator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9lYXNpZXN0L3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF3QjtBQUV4QixpQ0FBMkM7QUFBbEMsd0JBQUEsT0FBTyxDQUFTO0FBQ3pCLHlDQUEySDtBQUFsSCw2QkFBQSxNQUFNLENBQUE7QUFBRSxrQ0FBQSxXQUFXLENBQUE7QUFBRSxpQ0FBQSxVQUFVLENBQUE7QUFBRSxnQ0FBQSxTQUFTLENBQUE7QUFBRSxnQ0FBQSxTQUFTLENBQUE7QUFBRSxpQ0FBQSxVQUFVLENBQUE7QUFBRSxrQ0FBQSxXQUFXLENBQUE7QUFBRSxtQ0FBQSxZQUFZLENBQUE7QUFDckcscUNBQStDO0FBQXRDLDRCQUFBLE9BQU8sQ0FBVztBQUMzQiwyQ0FBcUQ7QUFBNUMsa0NBQUEsT0FBTyxDQUFjO0FBQzlCLHFDQUErQztBQUF0Qyw0QkFBQSxPQUFPLENBQVc7QUFDM0IseUNBQW1EO0FBQTFDLGdDQUFBLE9BQU8sQ0FBYTtBQUM3QixtQ0FBNkM7QUFBcEMsMEJBQUEsT0FBTyxDQUFVO0FBQzFCLHFDQUErQztBQUF0Qyw0QkFBQSxPQUFPLENBQVc7QUFDM0IsdUNBQXFEO0FBQTVDLDhCQUFBLFFBQVEsQ0FBQTtBQUFFLG1DQUFBLGFBQWEsQ0FBQTtBQUNoQyxxQ0FBK0M7QUFBdEMsNEJBQUEsT0FBTyxDQUFXO0FBQzNCLCtCQUEyQztBQUFsQyx3QkFBQSxPQUFPLENBQVU7QUFDMUIseUNBQTBDO0FBQWpDLGtDQUFBLFdBQVcsQ0FBQTtBQUVwQiwyQ0FBb0U7QUFBM0Qsa0NBQUEsVUFBVSxDQUFBO0FBQUUsZ0NBQUEsUUFBUSxDQUFBO0FBQUUsc0NBQUEsY0FBYyxDQUFBIn0=
},{"core-js/modules/es6.typed.array-buffer":"../../easiest/node_modules/core-js/modules/es6.typed.array-buffer.js","core-js/modules/es6.typed.int8-array":"../../easiest/node_modules/core-js/modules/es6.typed.int8-array.js","core-js/modules/es6.typed.uint8-array":"../../easiest/node_modules/core-js/modules/es6.typed.uint8-array.js","core-js/modules/es6.typed.uint8-clamped-array":"../../easiest/node_modules/core-js/modules/es6.typed.uint8-clamped-array.js","core-js/modules/es6.typed.int16-array":"../../easiest/node_modules/core-js/modules/es6.typed.int16-array.js","core-js/modules/es6.typed.uint16-array":"../../easiest/node_modules/core-js/modules/es6.typed.uint16-array.js","core-js/modules/es6.typed.int32-array":"../../easiest/node_modules/core-js/modules/es6.typed.int32-array.js","core-js/modules/es6.typed.uint32-array":"../../easiest/node_modules/core-js/modules/es6.typed.uint32-array.js","core-js/modules/es6.typed.float32-array":"../../easiest/node_modules/core-js/modules/es6.typed.float32-array.js","core-js/modules/es6.typed.float64-array":"../../easiest/node_modules/core-js/modules/es6.typed.float64-array.js","core-js/modules/es6.map":"../../easiest/node_modules/core-js/modules/es6.map.js","core-js/modules/es6.set":"../../easiest/node_modules/core-js/modules/es6.set.js","core-js/modules/es6.weak-map":"../../easiest/node_modules/core-js/modules/es6.weak-map.js","core-js/modules/es6.weak-set":"../../easiest/node_modules/core-js/modules/es6.weak-set.js","core-js/modules/es6.reflect.apply":"../../easiest/node_modules/core-js/modules/es6.reflect.apply.js","core-js/modules/es6.reflect.construct":"../../easiest/node_modules/core-js/modules/es6.reflect.construct.js","core-js/modules/es6.reflect.define-property":"../../easiest/node_modules/core-js/modules/es6.reflect.define-property.js","core-js/modules/es6.reflect.delete-property":"../../easiest/node_modules/core-js/modules/es6.reflect.delete-property.js","core-js/modules/es6.reflect.get":"../../easiest/node_modules/core-js/modules/es6.reflect.get.js","core-js/modules/es6.reflect.get-own-property-descriptor":"../../easiest/node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js","core-js/modules/es6.reflect.get-prototype-of":"../../easiest/node_modules/core-js/modules/es6.reflect.get-prototype-of.js","core-js/modules/es6.reflect.has":"../../easiest/node_modules/core-js/modules/es6.reflect.has.js","core-js/modules/es6.reflect.is-extensible":"../../easiest/node_modules/core-js/modules/es6.reflect.is-extensible.js","core-js/modules/es6.reflect.own-keys":"../../easiest/node_modules/core-js/modules/es6.reflect.own-keys.js","core-js/modules/es6.reflect.prevent-extensions":"../../easiest/node_modules/core-js/modules/es6.reflect.prevent-extensions.js","core-js/modules/es6.reflect.set":"../../easiest/node_modules/core-js/modules/es6.reflect.set.js","core-js/modules/es6.reflect.set-prototype-of":"../../easiest/node_modules/core-js/modules/es6.reflect.set-prototype-of.js","core-js/modules/es6.promise":"../../easiest/node_modules/core-js/modules/es6.promise.js","core-js/modules/es6.symbol":"../../easiest/node_modules/core-js/modules/es6.symbol.js","core-js/modules/es6.object.freeze":"../../easiest/node_modules/core-js/modules/es6.object.freeze.js","core-js/modules/es6.object.seal":"../../easiest/node_modules/core-js/modules/es6.object.seal.js","core-js/modules/es6.object.prevent-extensions":"../../easiest/node_modules/core-js/modules/es6.object.prevent-extensions.js","core-js/modules/es6.object.is-frozen":"../../easiest/node_modules/core-js/modules/es6.object.is-frozen.js","core-js/modules/es6.object.is-sealed":"../../easiest/node_modules/core-js/modules/es6.object.is-sealed.js","core-js/modules/es6.object.is-extensible":"../../easiest/node_modules/core-js/modules/es6.object.is-extensible.js","core-js/modules/es6.object.get-own-property-descriptor":"../../easiest/node_modules/core-js/modules/es6.object.get-own-property-descriptor.js","core-js/modules/es6.object.get-prototype-of":"../../easiest/node_modules/core-js/modules/es6.object.get-prototype-of.js","core-js/modules/es6.object.keys":"../../easiest/node_modules/core-js/modules/es6.object.keys.js","core-js/modules/es6.object.get-own-property-names":"../../easiest/node_modules/core-js/modules/es6.object.get-own-property-names.js","core-js/modules/es6.object.assign":"../../easiest/node_modules/core-js/modules/es6.object.assign.js","core-js/modules/es6.object.is":"../../easiest/node_modules/core-js/modules/es6.object.is.js","core-js/modules/es6.object.set-prototype-of":"../../easiest/node_modules/core-js/modules/es6.object.set-prototype-of.js","core-js/modules/es6.function.name":"../../easiest/node_modules/core-js/modules/es6.function.name.js","core-js/modules/es6.string.raw":"../../easiest/node_modules/core-js/modules/es6.string.raw.js","core-js/modules/es6.string.from-code-point":"../../easiest/node_modules/core-js/modules/es6.string.from-code-point.js","core-js/modules/es6.string.code-point-at":"../../easiest/node_modules/core-js/modules/es6.string.code-point-at.js","core-js/modules/es6.string.repeat":"../../easiest/node_modules/core-js/modules/es6.string.repeat.js","core-js/modules/es6.string.starts-with":"../../easiest/node_modules/core-js/modules/es6.string.starts-with.js","core-js/modules/es6.string.ends-with":"../../easiest/node_modules/core-js/modules/es6.string.ends-with.js","core-js/modules/es6.string.includes":"../../easiest/node_modules/core-js/modules/es6.string.includes.js","core-js/modules/es6.regexp.flags":"../../easiest/node_modules/core-js/modules/es6.regexp.flags.js","core-js/modules/es6.regexp.match":"../../easiest/node_modules/core-js/modules/es6.regexp.match.js","core-js/modules/es6.regexp.replace":"../../easiest/node_modules/core-js/modules/es6.regexp.replace.js","core-js/modules/es6.regexp.split":"../../easiest/node_modules/core-js/modules/es6.regexp.split.js","core-js/modules/es6.regexp.search":"../../easiest/node_modules/core-js/modules/es6.regexp.search.js","core-js/modules/es6.array.from":"../../easiest/node_modules/core-js/modules/es6.array.from.js","core-js/modules/es6.array.of":"../../easiest/node_modules/core-js/modules/es6.array.of.js","core-js/modules/es6.array.copy-within":"../../easiest/node_modules/core-js/modules/es6.array.copy-within.js","core-js/modules/es6.array.find":"../../easiest/node_modules/core-js/modules/es6.array.find.js","core-js/modules/es6.array.find-index":"../../easiest/node_modules/core-js/modules/es6.array.find-index.js","core-js/modules/es6.array.fill":"../../easiest/node_modules/core-js/modules/es6.array.fill.js","core-js/modules/es6.array.iterator":"../../easiest/node_modules/core-js/modules/es6.array.iterator.js","core-js/modules/es6.number.is-finite":"../../easiest/node_modules/core-js/modules/es6.number.is-finite.js","core-js/modules/es6.number.is-integer":"../../easiest/node_modules/core-js/modules/es6.number.is-integer.js","core-js/modules/es6.number.is-safe-integer":"../../easiest/node_modules/core-js/modules/es6.number.is-safe-integer.js","core-js/modules/es6.number.is-nan":"../../easiest/node_modules/core-js/modules/es6.number.is-nan.js","core-js/modules/es6.number.epsilon":"../../easiest/node_modules/core-js/modules/es6.number.epsilon.js","core-js/modules/es6.number.min-safe-integer":"../../easiest/node_modules/core-js/modules/es6.number.min-safe-integer.js","core-js/modules/es6.number.max-safe-integer":"../../easiest/node_modules/core-js/modules/es6.number.max-safe-integer.js","core-js/modules/es6.math.acosh":"../../easiest/node_modules/core-js/modules/es6.math.acosh.js","core-js/modules/es6.math.asinh":"../../easiest/node_modules/core-js/modules/es6.math.asinh.js","core-js/modules/es6.math.atanh":"../../easiest/node_modules/core-js/modules/es6.math.atanh.js","core-js/modules/es6.math.cbrt":"../../easiest/node_modules/core-js/modules/es6.math.cbrt.js","core-js/modules/es6.math.clz32":"../../easiest/node_modules/core-js/modules/es6.math.clz32.js","core-js/modules/es6.math.cosh":"../../easiest/node_modules/core-js/modules/es6.math.cosh.js","core-js/modules/es6.math.expm1":"../../easiest/node_modules/core-js/modules/es6.math.expm1.js","core-js/modules/es6.math.fround":"../../easiest/node_modules/core-js/modules/es6.math.fround.js","core-js/modules/es6.math.hypot":"../../easiest/node_modules/core-js/modules/es6.math.hypot.js","core-js/modules/es6.math.imul":"../../easiest/node_modules/core-js/modules/es6.math.imul.js","core-js/modules/es6.math.log1p":"../../easiest/node_modules/core-js/modules/es6.math.log1p.js","core-js/modules/es6.math.log10":"../../easiest/node_modules/core-js/modules/es6.math.log10.js","core-js/modules/es6.math.log2":"../../easiest/node_modules/core-js/modules/es6.math.log2.js","core-js/modules/es6.math.sign":"../../easiest/node_modules/core-js/modules/es6.math.sign.js","core-js/modules/es6.math.sinh":"../../easiest/node_modules/core-js/modules/es6.math.sinh.js","core-js/modules/es6.math.tanh":"../../easiest/node_modules/core-js/modules/es6.math.tanh.js","core-js/modules/es6.math.trunc":"../../easiest/node_modules/core-js/modules/es6.math.trunc.js","core-js/modules/es7.array.includes":"../../easiest/node_modules/core-js/modules/es7.array.includes.js","core-js/modules/es7.object.values":"../../easiest/node_modules/core-js/modules/es7.object.values.js","core-js/modules/es7.object.entries":"../../easiest/node_modules/core-js/modules/es7.object.entries.js","core-js/modules/es7.object.get-own-property-descriptors":"../../easiest/node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","core-js/modules/es7.string.pad-start":"../../easiest/node_modules/core-js/modules/es7.string.pad-start.js","core-js/modules/es7.string.pad-end":"../../easiest/node_modules/core-js/modules/es7.string.pad-end.js","core-js/modules/web.timers":"../../easiest/node_modules/core-js/modules/web.timers.js","core-js/modules/web.immediate":"../../easiest/node_modules/core-js/modules/web.immediate.js","core-js/modules/web.dom.iterable":"../../easiest/node_modules/core-js/modules/web.dom.iterable.js","regenerator-runtime/runtime":"../../easiest/node_modules/regenerator-runtime/runtime.js","./Utils":"../../easiest/src/Utils/index.ts","./Lifecycle":"../../easiest/src/Lifecycle/index.ts","./Watcher":"../../easiest/src/Watcher/index.ts","./KeyWatcher":"../../easiest/src/KeyWatcher/index.ts","./Compile":"../../easiest/src/Compile/index.ts","./Component":"../../easiest/src/Component/index.ts","./Router":"../../easiest/src/Router/index.ts","./Easiest":"../../easiest/src/Easiest/index.ts","./EsModule":"../../easiest/src/EsModule/index.ts","./Service":"../../easiest/src/Service/index.ts","./Http":"../../easiest/src/Http/index.ts","./Immutable":"../../easiest/src/Immutable/index.ts","./Injectable":"../../easiest/src/Injectable/index.ts"}],"routes/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import { Router } from 'easiest';
var src_1 = require("../../../easiest/src");
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
        }]
    }]
}];
router.$setRootPath('/easiest-doc');
router.$init(routes);
router.$routeChange = function (old, next) {
    console.log('$routeChange', old, next);
};
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBb0M7QUFDcEMsNENBQThDO0FBRTlDLElBQU0sTUFBTSxHQUFHLElBQUksWUFBTSxFQUFFLENBQUM7QUFHNUIsSUFBTSxNQUFNLEdBQUc7SUFDWDtRQUNJLElBQUksRUFBRSxHQUFHO1FBQ1QsVUFBVSxFQUFFLGVBQWU7UUFDM0IsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsU0FBUyxFQUFFLHdCQUF3QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsd0JBQXdCO2FBQ3RDO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsVUFBVSxFQUFFLGlCQUFpQjtnQkFDN0IsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsUUFBUSxFQUFFO29CQUNOO3dCQUNJLElBQUksRUFBRSxZQUFZO3dCQUNsQixTQUFTLEVBQUUsMEJBQTBCO3FCQUN4QztpQkFDSjthQUNKO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFDRixNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckIsTUFBTSxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQVcsRUFBRSxJQUFZO0lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==
},{"../../../easiest/src":"../../easiest/src/index.ts"}],"pages/introduction/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"constants/introduction.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content = [{
    h1: '什么是Easiest',
    p: 'Easiest 是一个开发平台。它能帮你更轻松的构建 Web。Easiest 集声明式模板、依赖注入和一些实践于一身，为您解决开发方面的各种挑战。'
}, {
    h1: '基本假设',
    p: '本文档假设你已经熟悉了 JavaScript 和来自 最新标准 的一些知识，比如 类 和 模块。 下列代码范例都是用最新版本的 TypeScript 写的，利用 类型 实现依赖注入，并使用装饰器来提供元数据。'
}, {
    h1: '美妙的工具',
    p: '使用简单的声明式字符串模板，快速实现各种特性。使用自定义组件和扩展模板语言。基于Javascript和Typescript，可以在几乎所有的IDE中获得即时帮助和反馈。所有这一切，都是为了帮助你编写漂亮的应用，而不是绞尽脑汁的让代码“能用”。'
}, {
    h1: '基本理念',
    p: 'Easiest 基于mvvm, 本身使用 TypeScript写成的。它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。Easiest 基本构造块是 EsModule，它为组件提供了编译的上下文环境'
}, {
    h1: '反馈',
    p: '你也可以和我们一起做贡献！你可以到 什么是Easiest 在 Github 上的仓库中提出文档方面的问题，并创建Pull Requests。'
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsT0FBTyxHQUFHO0lBQ25CO1FBQ0ksRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLDJFQUEyRTtLQUNqRjtJQUNEO1FBQ0ksRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUUsMEdBQTBHO0tBQ2hIO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSwySEFBMkg7S0FDakk7SUFDRDtRQUNJLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFLDJIQUEySDtLQUNqSTtJQUNEO1FBQ0ksRUFBRSxFQUFFLElBQUk7UUFDUixDQUFDLEVBQUUsd0VBQXdFO0tBQzlFO0NBQ0osQ0FBQyJ9
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'easiest';
var src_1 = require("../../../../easiest/src");
var introduction_1 = require("../../constants/introduction");
var IntroductionContainer = /** @class */function () {
    function IntroductionContainer() {}
    IntroductionContainer = __decorate([src_1.Component({
        state: {
            info: introduction_1.content
        },
        template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" es-repeat=\"let info in state.info\">\n                <h1>{{info.h1}}</h1>\n                <p>{{info.p}}</p>\n            </div>\n        </div>\n    "
    })], IntroductionContainer);
    return IntroductionContainer;
}();
exports.default = IntroductionContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIsdUNBQXVDO0FBQ3ZDLCtDQUFvRDtBQUVwRCw2REFBdUQ7QUF3QnZEO0lBQUE7SUFFQSxDQUFDO0lBRm9CLHFCQUFxQjtRQWJ6QyxlQUFTLENBQVE7WUFDZCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLHNCQUFPO2FBQ2hCO1lBQ0QsUUFBUSxFQUFFLENBQUMsNE9BT1YsQ0FBQztTQUNMLENBQUM7T0FDbUIscUJBQXFCLENBRXpDO0lBQUQsNEJBQUM7Q0FBQSxBQUZELElBRUM7a0JBRm9CLHFCQUFxQiJ9
},{"./style.less":"pages/introduction/style.less","../../../../easiest/src":"../../easiest/src/index.ts","../../constants/introduction":"constants/introduction.ts"}],"modules/introduction.ts":[function(require,module,exports) {
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
// import { EsModule } from 'easiest';
var src_1 = require("../../../easiest/src");
var introduction_1 = __importDefault(require("../pages/introduction"));
var IntroductionModule = /** @class */function () {
    function IntroductionModule() {}
    IntroductionModule = __decorate([src_1.EsModule({
        imports: [],
        components: {
            'introduction-container': introduction_1.default
        },
        providers: [],
        exports: ['introduction-container']
    })], IntroductionModule);
    return IntroductionModule;
}();
exports.default = IntroductionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kdWxlcy9pbnRyb2R1Y3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMsNENBQWdEO0FBRWhELHVFQUEwRDtBQWMxRDtJQUFBO0lBQTBDLENBQUM7SUFBdEIsa0JBQWtCO1FBWnRDLGNBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxFQUNSO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLHdCQUF3QixFQUFFLHNCQUFxQjthQUNsRDtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdCQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDbUIsa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQTNDLElBQTJDO2tCQUF0QixrQkFBa0IifQ==
},{"../../../easiest/src":"../../easiest/src/index.ts","../pages/introduction":"pages/introduction/index.ts"}],"pages/architecture/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"constants/start.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content = [{
    h1: '架构概览',
    p: 'Easiest 的基本构造块是 EsModule，它为组件提供了编译的上下文环境。 EsModule 会把相关的代码收集到一些功能集中。Easiest 应用就是由一组 EsModule 定义出的。 应用至少会有一个用于引导应用的根模块，通常还会有很多特性模块。 Component 作为页面元素的基本单位，由定义的 EsModule 统一提供给编译器或路由使用。Route 被委托管理页面渲染，根据访问的url的不同来获取不用的识图渲染。'
}, {
    h1: 'EsModule',
    p: 'EsModule 作为整个应用的基本构造块，可以从其他 EsModule 引入或是导出 Component , 也可以导入 Service 为全局使用或是本模块。'
}, {
    h1: 'Component',
    p: '组件控制屏幕上被称为视图的一小片区域。为识图提供交互和渲染模板'
}, {
    h1: 'Service',
    p: '服务是一个广义的概念，它包括应用所需的任何值、函数或特性。狭义的服务是一个明确定义了用途的类。它应该做一些具体的事，并做好。 Easiest 把组件和服务区分开，以提高模块性和复用性。'
}, {
    h1: 'Route',
    p: '浏览器具有熟悉的导航模式，在地址栏输入 URL，浏览器就会导航到相应的页面。 Easiest 的 Router（即“路由器”）借鉴了这个模型。它把浏览器中的 URL 看做一个操作指南， 据此导航到一个由客户端生成的视图，并可以把参数传给支撑视图的相应组件，帮它决定具体该展现哪些内容。'
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE9BQU8sR0FBRztJQUNyQjtRQUNFLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFLDZOQUE2TjtLQUNqTztJQUNEO1FBQ0UsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsbUZBQW1GO0tBQ3ZGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxpQ0FBaUM7S0FDckM7SUFDRDtRQUNFLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLDhGQUE4RjtLQUNsRztJQUNEO1FBQ0UsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsZ0pBQWdKO0tBQ3BKO0NBQ0YsQ0FBQyJ9
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component } from 'easiest';
var src_1 = require("../../../../easiest/src");
var start_1 = require("../../constants/start");
var ArchitectureContainer = /** @class */function () {
    function ArchitectureContainer() {}
    ArchitectureContainer = __decorate([src_1.Component({
        state: {
            info: start_1.content
        },
        template: "\n    <div class=\"page-container\">\n      <div class=\"info-content\" es-repeat=\"let info in state.info\">\n          <h1>{{info.h1}}</h1>\n          <p>{{info.p}}</p>\n      </div>\n    </div>\n  "
    })], ArchitectureContainer);
    return ArchitectureContainer;
}();
exports.default = ArchitectureContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9hcmNoaXRlY3R1cmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIsdUNBQXVDO0FBQ3ZDLCtDQUFvRDtBQUVwRCwrQ0FBZ0Q7QUF3QmhEO0lBQUE7SUFFQSxDQUFDO0lBRm9CLHFCQUFxQjtRQWJ6QyxlQUFTLENBQVE7WUFDaEIsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRSxlQUFPO2FBQ2Q7WUFDRCxRQUFRLEVBQUUsQ0FBQywwTUFPVixDQUFDO1NBQ0gsQ0FBQztPQUNtQixxQkFBcUIsQ0FFekM7SUFBRCw0QkFBQztDQUFBLEFBRkQsSUFFQztrQkFGb0IscUJBQXFCIn0=
},{"./style.less":"pages/architecture/style.less","../../../../easiest/src":"../../easiest/src/index.ts","../../constants/start":"constants/start.ts"}],"modules/architecture.ts":[function(require,module,exports) {
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
// import { EsModule } from 'easiest';
var src_1 = require("../../../easiest/src");
var architecture_1 = __importDefault(require("../pages/architecture"));
var ArchitectureModule = /** @class */function () {
    function ArchitectureModule() {}
    ArchitectureModule = __decorate([src_1.EsModule({
        imports: [],
        components: {
            'architecture-container': architecture_1.default
        },
        providers: [],
        exports: ['architecture-container']
    })], ArchitectureModule);
    return ArchitectureModule;
}();
exports.default = ArchitectureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kdWxlcy9hcmNoaXRlY3R1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMsNENBQWdEO0FBRWhELHVFQUEwRDtBQWMxRDtJQUFBO0lBQTBDLENBQUM7SUFBdEIsa0JBQWtCO1FBWnRDLGNBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxFQUNSO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLHdCQUF3QixFQUFFLHNCQUFxQjthQUNsRDtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdCQUF3QjthQUMzQjtTQUNKLENBQUM7T0FDbUIsa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQTNDLElBQTJDO2tCQUF0QixrQkFBa0IifQ==
},{"../../../easiest/src":"../../easiest/src/index.ts","../pages/architecture":"pages/architecture/index.ts"}],"pages/docs/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"pages/docs/index.ts":[function(require,module,exports) {
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
// import { Component } from 'easiest';
var src_1 = require("../../../../easiest/src");
var DocsContainer = /** @class */function () {
    function DocsContainer() {}
    DocsContainer = __decorate([src_1.Component({
        template: "\n      <div class=\"page-container\">\n        <router-render></router-render>\n      </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsContainer);
    return DocsContainer;
}();
exports.default = DocsContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLHVDQUF1QztBQUN2QywrQ0FBb0Q7QUFTcEQ7SUFDRTtJQUFlLENBQUM7SUFERyxhQUFhO1FBUGpDLGVBQVMsQ0FBTTtZQUNkLFFBQVEsRUFBRSxDQUFDLG1HQUlWLENBQUM7U0FDSCxDQUFDOztPQUNtQixhQUFhLENBRWpDO0lBQUQsb0JBQUM7Q0FBQSxBQUZELElBRUM7a0JBRm9CLGFBQWEifQ==
},{"./style.less":"pages/docs/style.less","../../../../easiest/src":"../../easiest/src/index.ts"}],"pages/docs/component/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"constants/docs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.docsComponent = [{
    h1: '组件与模板',
    p: '在 Easiest 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 Easiest 组件的属性。',
    info: [{
        title: '装饰器Component',
        p: ['@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 Easiest 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。'],
        code: "\n  @Component({\n    template: ('\n      <div>ContainerComponent {{state.a}}</div>\n    '),\n    state: {\n      a: 1\n    }\n  })\n  class ContainerComponent {\n    constructor() {}\n  }\n        "
    },
    //   {
    //     title: '模板语法',
    //     p: '模板很像字符串的HTML，但是它还包含 Easiest 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。 你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。详情见模板语法章节。',
    //     code: `
    // @Component({
    //   template: ('
    //     <div es-repeat="let a in state.arr">ContainerComponent: {{a.name}}</div>
    //   '),
    //   state: {
    //     arr: [
    //       {
    //         id: 1,
    //         name: 'name1'
    //       },
    //       {
    //         id: 2,
    //         name: 'name2'
    //       },
    //     ]
    //   }
    // })
    // class ContainerComponent {
    //   constructor() {}
    // }
    //     `,
    //     exampleTitle: `下面介绍一下 Easiest 的模板语法`,
    //     example: [
    //       {
    //         p: `
    //         1. 事件指令
    //           以 es-on:event 开头, event 为未加on的事件名， 并且 被绑定的事件必须为 class 的方法，且以 @ 开头并且在方法内可以使用 this ，this 指向 class的实例。
    //           方法可使用参数
    //             - event: $event
    //             - string: '1','2','3'
    //             - number: 1,2,3
    //             - index: @index
    //             - 变量: 仅能传递state上的值， 通过state.xxx标示
    //             - repeat item: 传递es-if的值，如： es-on:click="@show(nav)" es-repeat="let nav in state.navList"
    //         `,
    //         code: `
    // <a class="nav" es-on:click="@goTo(nav.to, $index)">{{nav.name}}</a>
    // public goTo(to: string, index: number) {
    //   this.$setLocation(to);
    // }
    //         `,
    //       },
    //       {
    //         p: `
    //         2. text
    //           可以使用 es-text="state.XXX" 也可以使用模板语法 {{}}。
    //         `,
    //         code: `
    // <p es-text="state.b"></p>
    // <p>{{state.b}}</p>
    //         `,
    //       },
    //       {
    //         p: `
    //         3. html
    //           可以使用 es-html="state.XXX"。
    //         `,
    //         code: `
    // <p es-html="state.b"></p>
    //         `,
    //       },
    //       {
    //         p: `
    //         4. model
    //           仅仅可以对 <input> 使用 es-model="state.XXX", model会主动更新被绑定的值并更新视图，此指令等同于 es-text 和 es-on:input 同时使用。
    //         `,
    //         code: `
    // <input es-model="state.c"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         5. class
    //           使用 es-class="state.XXX", 指令会主动把被绑定的值作为 className 增加到元素的class中。
    //         `,
    //         code: `
    // <input es-class="state.d"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         6. if
    //           使用 es-if="state.XXX", 如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树种显示或移除。
    //         `,
    //         code: `
    // <input es-if="state.e"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         7. if
    //           使用 es-repeat="let key in state.XXX", 如果被绑定的值为数组，则可以通过 let key in Array 的方式循环，在元素本身或子元素可以直接使用 key 作为值。
    //         `,
    //         code: `
    // <div es-class="li.class" es-repeat="let li in state.arrayList">
    //       <input es-model="l.value" es-repeat="let l in li" />
    // </div>
    //         `,
    //       },
    //     ],
    //   },
    {
        title: '模板数据绑定',
        p: ["\u5982\u679C\u6CA1\u6709\u6846\u67B6\uFF0C\u4F60\u5C31\u8981\u81EA\u5DF1\u8D1F\u8D23\u628A\u6570\u636E\u503C\u63A8\u9001\u5230 HTML \u63A7\u4EF6\u4E2D\uFF0C\u5E76\u628A\u6765\u81EA\u7528\u6237\u7684\u54CD\u5E94\u8F6C\u6362\u6210\u52A8\u4F5C\u548C\u5BF9\u503C\u7684\u66F4\u65B0\u3002 \u624B\u52A8\u5199\u8FD9\u79CD\u6570\u636E\u63A8\u62C9\u903B\u8F91\u4F1A\u5F88\u67AF\u71E5\u3001\u5BB9\u6613\u51FA\u9519\uFF0C\u96BE\u4EE5\u9605\u8BFB \u2014\u2014 \u7528\u8FC7 jQuery \u7684\u7A0B\u5E8F\u5458\u4E00\u5B9A\u6DF1\u6709\u4F53\u4F1A\u3002", "Easiest \u652F\u6301\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u8FD9\u662F\u4E00\u79CD\u5BF9\u6A21\u677F\u4E2D\u7684\u5404\u4E2A\u90E8\u4EF6\u4E0E\u7EC4\u4EF6\u4E2D\u7684\u5404\u4E2A\u90E8\u4EF6\u8FDB\u884C\u534F\u8C03\u7684\u673A\u5236\u3002 \u5F80\u6A21\u677FHTML\u5B57\u7B26\u4E32\u4E2D\u6DFB\u52A0\u7ED1\u5B9A\u6807\u8BB0\u53EF\u4EE5\u544A\u8BC9 Easiest \u8BE5\u5982\u4F55\u8FDE\u63A5\u5B83\u4EEC\u3002\u56E0\u4E3A Easiest \u4F7F\u7528\u5355\u5411\u6570\u636E\u6D41\uFF0C\u6240\u4EE5\u4EC5\u4EC5\u652F\u6301\u4F7F\u7528 this.state\u5185\u7684\u503C\u4F5C\u4E3A\u7ED1\u5B9A\u6570\u636E\uFF0C \u5B9E\u4F8B\u7684\u65B9\u6CD5\u4F5C\u4E3A\u4E8B\u4EF6\u65B9\u6CD5\u3002\u5982\u679C\u8981\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528 props \uFF0C\u8BF7\u5728 ReceiveProps \u58F0\u660E\u5468\u671F\u5185\u7528 props \u5BF9 state \u8D4B\u503C\u3002"],
        code: "\n  @Component({\n    template: ('\n      <div es-on:click=\"@show(state.a)\">ContainerComponent {{state.a}}}</div>\n    '),\n    state: {\n      a: null,\n    },\n  })\n  class ContainerComponent {\n    constructor() {}\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public esReceiveProps(nextProps: any): void {\n      this.stata.a = nextProps.a;\n    }\n  }\n        "
    }, {
        title: '组件通信',
        p: ['Easiest 的组件之间可以 props 来通信。', '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件来更改对应父组件的值来完成通信。', '可以直接在 template 上使用在 EsModule 注册过的组件标签，并通过 propValue={state.value} propFunction={@fn} 的写法传递值与方法。'],
        code: "\n  @Component({\n    template: ('\n      <div es-on:click=\"@show(state.a)\">ContainerComponent {{state.a}}}</div>\n    '),\n    state: {\n      a: null,\n    },\n  })\n  class ContainerComponent {\n    constructor() {}\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public esReceiveProps(nextProps: any): void {\n      this.stata.a = nextProps.a;\n    }\n  }\n        "
    }]
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxhQUFhLEdBQUc7SUFDM0I7UUFDRSxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSx5REFBeUQ7UUFDNUQsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLENBQUMsRUFBRTtvQkFDRCw0SUFBNEk7aUJBQzdJO2dCQUNELElBQUksRUFBRSx3TUFZTDthQUNGO1lBQ0gsTUFBTTtZQUNOLHFCQUFxQjtZQUNyQiw4SUFBOEk7WUFDOUksY0FBYztZQUNkLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsK0VBQStFO1lBQy9FLFFBQVE7WUFDUixhQUFhO1lBQ2IsYUFBYTtZQUNiLFVBQVU7WUFDVixpQkFBaUI7WUFDakIsd0JBQXdCO1lBQ3hCLFdBQVc7WUFDWCxVQUFVO1lBQ1YsaUJBQWlCO1lBQ2pCLHdCQUF3QjtZQUN4QixXQUFXO1lBQ1gsUUFBUTtZQUNSLE1BQU07WUFDTixLQUFLO1lBQ0wsNkJBQTZCO1lBQzdCLHFCQUFxQjtZQUNyQixJQUFJO1lBQ0osU0FBUztZQUNULDRDQUE0QztZQUM1QyxpQkFBaUI7WUFDakIsVUFBVTtZQUNWLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZ0hBQWdIO1lBQ2hILG9CQUFvQjtZQUNwQiw4QkFBOEI7WUFDOUIsb0NBQW9DO1lBQ3BDLDhCQUE4QjtZQUM5Qiw4QkFBOEI7WUFDOUIsZ0RBQWdEO1lBQ2hELHdHQUF3RztZQUN4RyxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLHNFQUFzRTtZQUN0RSwyQ0FBMkM7WUFDM0MsMkJBQTJCO1lBQzNCLElBQUk7WUFDSixhQUFhO1lBQ2IsV0FBVztZQUNYLFVBQVU7WUFDVixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLHFEQUFxRDtZQUNyRCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLDRCQUE0QjtZQUM1QixxQkFBcUI7WUFDckIsYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixzQ0FBc0M7WUFDdEMsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQiw0QkFBNEI7WUFDNUIsYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQiwyR0FBMkc7WUFDM0csYUFBYTtZQUNiLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQiwyRUFBMkU7WUFDM0UsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQiw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixxRkFBcUY7WUFDckYsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQiwyQkFBMkI7WUFDM0IsYUFBYTtZQUNiLFdBQVc7WUFDWCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixrSEFBa0g7WUFDbEgsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixrRUFBa0U7WUFDbEUsNkRBQTZEO1lBQzdELFNBQVM7WUFDVCxhQUFhO1lBQ2IsV0FBVztZQUNYLFNBQVM7WUFDVCxPQUFPO1lBQ0w7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsQ0FBQyxFQUFFO29CQUNELHVoQkFBeUc7b0JBQ3pHLG8wQkFBOE07aUJBQy9NO2dCQUNELElBQUksRUFBRSx1WUFvQkw7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLENBQUMsRUFBRTtvQkFDRCw0QkFBNEI7b0JBQzVCLHVEQUF1RDtvQkFDdkQsaUdBQWlHO2lCQUNsRztnQkFDRCxJQUFJLEVBQUUsdVlBb0JMO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyJ9
},{}],"pages/docs/component/index.ts":[function(require,module,exports) {
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
// import { Component } from 'easiest';
var src_1 = require("../../../../../easiest/src");
var docs_1 = require("../../../constants/docs");
var DocsComponentContainer = /** @class */function () {
    function DocsComponentContainer() {}
    DocsComponentContainer.prototype.click = function (code, index) {
        code.title = '1';
        console.log('this.state.info', this.state.info);
    };
    DocsComponentContainer.prototype.esHasRender = function () {
        console.log('esHasRender', this.state);
    };
    DocsComponentContainer = __decorate([src_1.Component({
        // <p class="example-title" es-if="code.exampleTitle">{{code.exampleTitle}}</p>
        //         <div class="example-info" es-if="code.example" es-repeat="let example in code.example">
        //           <p>{{example.p}}</p>
        //           <blockquote>
        //             <pre><code>{{example.code}}</code></pre>
        //           </blockquote>
        //         </div>
        template: "\n    <div class=\"page-container\">\n      <div class=\"info-content\" es-repeat=\"let info in state.info\">\n        <h1>{{info.h1}}</h1>\n        <p>{{info.p}}</p>\n        <div class=\"child-info\" es-repeat=\"let code in info.info\">\n          <h2 es-on:click=\"@click(code, $index)\">{{code.title}}</h2>\n          <p es-repeat=\"let pli in code.p\">{{pli}}</p>\n          <blockquote>\n            <pre><code>{{code.code}}</code></pre>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n  ",
        state: {
            info: docs_1.docsComponent
        }
    })], DocsComponentContainer);
    return DocsComponentContainer;
}();
exports.default = DocsComponentContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2NvbXBvbmVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdCQUFzQjtBQUV0Qix1Q0FBdUM7QUFDdkMsa0RBQWtFO0FBQ2xFLGdEQUF3RDtBQStDeEQ7SUFBQTtJQWFBLENBQUM7SUFSUSxzQ0FBSyxHQUFaLFVBQWEsSUFBUyxFQUFFLEtBQWE7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSw0Q0FBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBWmtCLHNCQUFzQjtRQTNCMUMsZUFBUyxDQUFRO1lBQ2hCLCtFQUErRTtZQUMvRSxrR0FBa0c7WUFDbEcsaUNBQWlDO1lBQ2pDLHlCQUF5QjtZQUN6Qix1REFBdUQ7WUFDdkQsMEJBQTBCO1lBQzFCLGlCQUFpQjtZQUNqQixRQUFRLEVBQUUsQ0FBQyxvZ0JBY1YsQ0FBQztZQUNGLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsb0JBQWE7YUFDcEI7U0FDRixDQUFDO09BQ21CLHNCQUFzQixDQWExQztJQUFELDZCQUFDO0NBQUEsQUFiRCxJQWFDO2tCQWJvQixzQkFBc0IifQ==
},{"./style.less":"pages/docs/component/style.less","../../../../../easiest/src":"../../easiest/src/index.ts","../../../constants/docs":"constants/docs.ts"}],"modules/docs.ts":[function(require,module,exports) {
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
// import { EsModule } from 'easiest';
var src_1 = require("../../../easiest/src");
var docs_1 = __importDefault(require("../pages/docs"));
var component_1 = __importDefault(require("../pages/docs/component"));
var DocsModule = /** @class */function () {
    function DocsModule() {}
    DocsModule = __decorate([src_1.EsModule({
        imports: [],
        components: {
            'docs-container': docs_1.default,
            'docs-component-container': component_1.default
        },
        providers: [],
        exports: ['docs-container', 'docs-component-container']
    })], DocsModule);
    return DocsModule;
}();
exports.default = DocsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvZG9jcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyw0Q0FBZ0Q7QUFFaEQsdURBQTBDO0FBQzFDLHNFQUE2RDtBQWdCN0Q7SUFBQTtJQUFrQyxDQUFDO0lBQWQsVUFBVTtRQWQ5QixjQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsRUFDUjtZQUNELFVBQVUsRUFBRTtnQkFDUixnQkFBZ0IsRUFBRSxjQUFhO2dCQUMvQiwwQkFBMEIsRUFBRSxtQkFBc0I7YUFDckQ7WUFDRCxTQUFTLEVBQUUsRUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLDBCQUEwQjthQUMzQjtTQUNKLENBQUM7T0FDbUIsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztrQkFBZCxVQUFVIn0=
},{"../../../easiest/src":"../../easiest/src/index.ts","../pages/docs":"pages/docs/index.ts","../pages/docs/component":"pages/docs/component/index.ts"}],"components/root-component/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/root-component/index.ts":[function(require,module,exports) {
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
// import { Component, OnInit, WatchState } from 'easiest';
var src_1 = require("../../../../easiest/src");
var RootComponent = /** @class */function () {
    function RootComponent() {}
    RootComponent.prototype.esOnInit = function () {};
    RootComponent.prototype.esWatchState = function (oldData, newData) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    };
    RootComponent = __decorate([src_1.Component({
        template: "\n        <div class=\"app-container\">\n            <side-bar></side-bar>\n            <router-render></router-render>\n        </div>\n    "
    })], RootComponent);
    return RootComponent;
}();
exports.default = RootComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3Jvb3QtY29tcG9uZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLDJEQUEyRDtBQUMzRCwrQ0FBd0U7QUFVeEU7SUFBQTtJQU9BLENBQUM7SUFOVSxnQ0FBUSxHQUFmLGNBQW9CLENBQUM7SUFFZCxvQ0FBWSxHQUFuQixVQUFvQixPQUFlLEVBQUUsT0FBZTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQU5nQixhQUFhO1FBUmpDLGVBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxDQUFDLCtJQUtWLENBQUM7U0FDTCxDQUFDO09BQ21CLGFBQWEsQ0FPakM7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztrQkFQb0IsYUFBYSJ9
},{"./style.less":"components/root-component/style.less","../../../../easiest/src":"../../easiest/src/index.ts"}],"components/side-bars/style.less":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"constants/nav.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.navs = [{
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
    }]
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL25hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsSUFBSSxHQUFHO0lBQ2hCO1FBQ0ksSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsZUFBZTtLQUN0QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLElBQUk7UUFDVixFQUFFLEVBQUUsT0FBTztRQUNYLEtBQUssRUFBRTtZQUNIO2dCQUNJLElBQUksRUFBRSxJQUFJO2dCQUNWLEVBQUUsRUFBRSxpQkFBaUI7YUFDeEI7U0FDSjtLQUNKO0NBQ0osQ0FBQyJ9
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.less");
// import { Component, OnInit, WatchState } from 'easiest';
var src_1 = require("../../../../easiest/src");
var nav_1 = require("../../constants/nav");
var SideBar = /** @class */function () {
    function SideBar() {}
    SideBar.prototype.esOnInit = function () {
        console.log('SideBar onInit', this.state.navs);
    };
    SideBar.prototype.goTo = function (to, index) {
        if (index || index === 0) {
            var navs_1 = this.state.navs.slice();
            navs_1.forEach(function (nav, i) {
                nav.active = null;
                if (i === index) nav.active = 'active';
            });
            this.setState({
                navs: navs_1
            });
        }
        this.$setLocation(to);
        this.$getLocation();
    };
    SideBar.prototype.esWatchState = function (oldData, newData) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    };
    SideBar = __decorate([src_1.Component({
        state: {
            navs: nav_1.navs
        },
        template: "\n        <div class=\"side-bar-container\">\n            <div class=\"nav-wrap\" es-class=\"nav.active\" es-repeat=\"let nav in state.navs\">\n                <a class=\"nav\" es-on:click=\"@goTo(nav.to, $index)\">{{nav.name}}</a>\n                <div class=\"child-wrap\" es-if=\"nav.child\">\n                    <a class=\"nav nav-child\"  es-repeat=\"let child in nav.child\" es-on:click=\"@goTo(child.to)\">{{child.name}}</a>\n                </div>\n            </div>\n        </div>\n    "
    })], SideBar);
    return SideBar;
}();
exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3NpZGUtYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdCQUFzQjtBQUV0QiwyREFBMkQ7QUFDM0QsK0NBQXdFO0FBRXhFLDJDQUEyQztBQTBCM0M7SUFBQTtJQThCQSxDQUFDO0lBdkJVLDBCQUFRLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHNCQUFJLEdBQVgsVUFBWSxFQUFVLEVBQUUsS0FBYztRQUNsQyxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQU0sTUFBSSxHQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFDLENBQUM7WUFDbEMsTUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxDQUFDLEtBQUssS0FBSztvQkFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLE1BQUk7YUFDYixDQUFDLENBQUM7U0FDTjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSw4QkFBWSxHQUFuQixVQUFvQixPQUFlLEVBQUUsT0FBZTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTdCZ0IsT0FBTztRQWYzQixlQUFTLENBQVE7WUFDZCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLFVBQUk7YUFDYjtZQUNELFFBQVEsRUFBRSxDQUFDLG9mQVNWLENBQUM7U0FDTCxDQUFDO09BQ21CLE9BQU8sQ0E4QjNCO0lBQUQsY0FBQztDQUFBLEFBOUJELElBOEJDO2tCQTlCb0IsT0FBTyJ9
},{"./style.less":"components/side-bars/style.less","../../../../easiest/src":"../../easiest/src/index.ts","../../constants/nav":"constants/nav.ts"}],"modules/index.ts":[function(require,module,exports) {
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
// import { EsModule } from 'easiest';
var src_1 = require("../../../easiest/src");
var introduction_1 = __importDefault(require("./introduction"));
var architecture_1 = __importDefault(require("./architecture"));
var docs_1 = __importDefault(require("./docs"));
var root_component_1 = __importDefault(require("../components/root-component"));
var side_bars_1 = __importDefault(require("../components/side-bars"));
var RootModule = /** @class */function () {
    function RootModule() {}
    RootModule = __decorate([src_1.EsModule({
        imports: [introduction_1.default, architecture_1.default, docs_1.default],
        components: {
            'side-bar': side_bars_1.default,
            'root-component': root_component_1.default
        },
        providers: []
    })], RootModule);
    return RootModule;
}();
exports.default = RootModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLDRDQUFnRDtBQUVoRCxnRUFBZ0Q7QUFDaEQsZ0VBQWdEO0FBQ2hELGdEQUFnQztBQUVoQyxnRkFBeUQ7QUFDekQsc0VBQThDO0FBYzlDO0lBQUE7SUFBa0MsQ0FBQztJQUFkLFVBQVU7UUFaOUIsY0FBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHNCQUFrQjtnQkFDbEIsc0JBQWtCO2dCQUNsQixjQUFVO2FBQ1g7WUFDRCxVQUFVLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFLG1CQUFPO2dCQUNuQixnQkFBZ0IsRUFBRSx3QkFBYTthQUNoQztZQUNELFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztPQUNtQixVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQW5DLElBQW1DO2tCQUFkLFVBQVUifQ==
},{"../../../easiest/src":"../../easiest/src/index.ts","./introduction":"modules/introduction.ts","./architecture":"modules/architecture.ts","./docs":"modules/docs.ts","../components/root-component":"components/root-component/index.ts","../components/side-bars":"components/side-bars/index.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/reset");
require("./styles/global");
// import { Easiest } from 'easiest';
// import { Easiest } from '../../easiest/src';
var src_1 = require("../../easiest/src");
var routes_1 = __importDefault(require("./routes"));
var modules_1 = __importDefault(require("./modules"));
var easiest = new src_1.Easiest();
easiest.$bootstrapModule(modules_1.default);
easiest.$use(routes_1.default);
easiest.$init();
console.log('easiest', easiest);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQkFBd0I7QUFDeEIsMkJBQXlCO0FBRXpCLHFDQUFxQztBQUNyQywrQ0FBK0M7QUFDL0MseUNBQTRDO0FBRTVDLG9EQUE4QjtBQUU5QixzREFBbUM7QUFFbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFPLEVBQUUsQ0FBQztBQUM5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsaUJBQVUsQ0FBQyxDQUFDO0FBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0FBQ3JCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyJ9
},{"./styles/reset":"styles/reset.less","./styles/global":"styles/global.less","../../easiest/src":"../../easiest/src/index.ts","./routes":"routes/index.ts","./modules":"modules/index.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52589' + '/');
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)