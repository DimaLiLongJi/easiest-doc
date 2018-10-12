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
})({23:[function(require,module,exports) {
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
},{}],12:[function(require,module,exports) {
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
},{"./bundle-url":23}],7:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],6:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],4:[function(require,module,exports) {
var define;
parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"5qf4":[function(require,module,exports) {

var e=module.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e);
},{}],"ss9A":[function(require,module,exports) {
var e=module.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e);
},{}],"M7z6":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"eT53":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e};
},{"./_is-object":"M7z6"}],"5BXi":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(r){return!0}};
},{}],"P9Ib":[function(require,module,exports) {
module.exports=!require("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});
},{"./_fails":"5BXi"}],"/vZ6":[function(require,module,exports) {
var e=require("./_is-object"),r=require("./_global").document,t=e(r)&&e(r.createElement);module.exports=function(e){return t?r.createElement(e):{}};
},{"./_is-object":"M7z6","./_global":"5qf4"}],"/o6G":[function(require,module,exports) {
module.exports=!require("./_descriptors")&&!require("./_fails")(function(){return 7!=Object.defineProperty(require("./_dom-create")("div"),"a",{get:function(){return 7}}).a});
},{"./_descriptors":"P9Ib","./_fails":"5BXi","./_dom-create":"/vZ6"}],"9y37":[function(require,module,exports) {
var t=require("./_is-object");module.exports=function(r,e){if(!t(r))return r;var o,n;if(e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;if("function"==typeof(o=r.valueOf)&&!t(n=o.call(r)))return n;if(!e&&"function"==typeof(o=r.toString)&&!t(n=o.call(r)))return n;throw TypeError("Can't convert object to primitive value")};
},{"./_is-object":"M7z6"}],"nw8e":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_ie8-dom-define"),t=require("./_to-primitive"),i=Object.defineProperty;exports.f=require("./_descriptors")?Object.defineProperty:function(o,n,u){if(e(o),n=t(n,!0),e(u),r)try{return i(o,n,u)}catch(e){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(o[n]=u.value),o};
},{"./_an-object":"eT53","./_ie8-dom-define":"/o6G","./_to-primitive":"9y37","./_descriptors":"P9Ib"}],"uJ6d":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"0NXb":[function(require,module,exports) {
var r=require("./_object-dp"),e=require("./_property-desc");module.exports=require("./_descriptors")?function(t,u,o){return r.f(t,u,e(1,o))}:function(r,e,t){return r[e]=t,r};
},{"./_object-dp":"nw8e","./_property-desc":"uJ6d","./_descriptors":"P9Ib"}],"2uHg":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"U49f":[function(require,module,exports) {
var o=0,t=Math.random();module.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++o+t).toString(36))};
},{}],"PHot":[function(require,module,exports) {

var e=require("./_global"),r=require("./_hide"),t=require("./_has"),i=require("./_uid")("src"),n="toString",o=Function[n],u=(""+o).split(n);require("./_core").inspectSource=function(e){return o.call(e)},(module.exports=function(n,o,c,l){var a="function"==typeof c;a&&(t(c,"name")||r(c,"name",o)),n[o]!==c&&(a&&(t(c,i)||r(c,i,n[o]?""+n[o]:u.join(String(o)))),n===e?n[o]=c:l?n[o]?n[o]=c:r(n,o,c):(delete n[o],r(n,o,c)))})(Function.prototype,n,function(){return"function"==typeof this&&this[i]||o.call(this)});
},{"./_global":"5qf4","./_hide":"0NXb","./_has":"2uHg","./_uid":"U49f","./_core":"ss9A"}],"6kYj":[function(require,module,exports) {
module.exports=function(o){if("function"!=typeof o)throw TypeError(o+" is not a function!");return o};
},{}],"E3Kh":[function(require,module,exports) {
var r=require("./_a-function");module.exports=function(n,t,u){if(r(n),void 0===t)return n;switch(u){case 1:return function(r){return n.call(t,r)};case 2:return function(r,u){return n.call(t,r,u)};case 3:return function(r,u,e){return n.call(t,r,u,e)}}return function(){return n.apply(t,arguments)}};
},{"./_a-function":"6kYj"}],"izCb":[function(require,module,exports) {

var e=require("./_global"),r=require("./_core"),o=require("./_hide"),i=require("./_redefine"),u=require("./_ctx"),n="prototype",t=function(c,f,l){var q,_,a,d,p=c&t.F,v=c&t.G,F=c&t.S,x=c&t.P,y=c&t.B,B=v?e:F?e[f]||(e[f]={}):(e[f]||{})[n],G=v?r:r[f]||(r[f]={}),P=G[n]||(G[n]={});for(q in v&&(l=f),l)a=((_=!p&&B&&void 0!==B[q])?B:l)[q],d=y&&_?u(a,e):x&&"function"==typeof a?u(Function.call,a):a,B&&i(B,q,a,c&t.U),G[q]!=a&&o(G,q,d),x&&P[q]!=a&&(P[q]=a)};e.core=r,t.F=1,t.G=2,t.S=4,t.P=8,t.B=16,t.W=32,t.U=64,t.R=128,module.exports=t;
},{"./_global":"5qf4","./_core":"ss9A","./_hide":"0NXb","./_redefine":"PHot","./_ctx":"E3Kh"}],"Z5df":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"nGau":[function(require,module,exports) {
var e=require("./_cof");module.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==e(r)?r.split(""):Object(r)};
},{"./_cof":"Z5df"}],"+Bjj":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on  "+o);return o};
},{}],"rfVX":[function(require,module,exports) {
var e=require("./_defined");module.exports=function(r){return Object(e(r))};
},{"./_defined":"+Bjj"}],"yjVO":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"dJBs":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.min;module.exports=function(t){return t>0?r(e(t),9007199254740991):0};
},{"./_to-integer":"yjVO"}],"JTrm":[function(require,module,exports) {
var r=require("./_cof");module.exports=Array.isArray||function(e){return"Array"==r(e)};
},{"./_cof":"Z5df"}],"H21C":[function(require,module,exports) {
module.exports=!1;
},{}],"6zGc":[function(require,module,exports) {

var r=require("./_core"),e=require("./_global"),o="__core-js_shared__",i=e[o]||(e[o]={});(module.exports=function(r,e){return i[r]||(i[r]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:require("./_library")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});
},{"./_core":"ss9A","./_global":"5qf4","./_library":"H21C"}],"44AI":[function(require,module,exports) {
var e=require("./_shared")("wks"),r=require("./_uid"),o=require("./_global").Symbol,u="function"==typeof o,i=module.exports=function(i){return e[i]||(e[i]=u&&o[i]||(u?o:r)("Symbol."+i))};i.store=e;
},{"./_shared":"6zGc","./_uid":"U49f","./_global":"5qf4"}],"NNbH":[function(require,module,exports) {
var r=require("./_is-object"),e=require("./_is-array"),o=require("./_wks")("species");module.exports=function(i){var t;return e(i)&&("function"!=typeof(t=i.constructor)||t!==Array&&!e(t.prototype)||(t=void 0),r(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t};
},{"./_is-object":"M7z6","./_is-array":"JTrm","./_wks":"44AI"}],"igas":[function(require,module,exports) {
var r=require("./_array-species-constructor");module.exports=function(e,n){return new(r(e))(n)};
},{"./_array-species-constructor":"NNbH"}],"AuPh":[function(require,module,exports) {
var e=require("./_ctx"),r=require("./_iobject"),t=require("./_to-object"),i=require("./_to-length"),u=require("./_array-species-create");module.exports=function(n,c){var s=1==n,a=2==n,o=3==n,f=4==n,l=6==n,q=5==n||l,_=c||u;return function(u,c,h){for(var v,p,b=t(u),d=r(b),g=e(c,h,3),j=i(d.length),x=0,m=s?_(u,j):a?_(u,0):void 0;j>x;x++)if((q||x in d)&&(p=g(v=d[x],x,b),n))if(s)m[x]=p;else if(p)switch(n){case 3:return!0;case 5:return v;case 6:return x;case 2:m.push(v)}else if(f)return!1;return l?-1:o||f?f:m}};
},{"./_ctx":"E3Kh","./_iobject":"nGau","./_to-object":"rfVX","./_to-length":"dJBs","./_array-species-create":"igas"}],"Z7e/":[function(require,module,exports) {
var e=require("./_wks")("unscopables"),r=Array.prototype;null==r[e]&&require("./_hide")(r,e,{}),module.exports=function(o){r[e][o]=!0};
},{"./_wks":"44AI","./_hide":"0NXb"}],"Qppk":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_array-methods")(5),i="find",n=!0;i in[]&&Array(1)[i](function(){n=!1}),r(r.P+r.F*n,"Array",{find:function(r){return e(this,r,arguments.length>1?arguments[1]:void 0)}}),require("./_add-to-unscopables")(i);
},{"./_export":"izCb","./_array-methods":"AuPh","./_add-to-unscopables":"Z7e/"}],"7sVm":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_array-methods")(6),n="findIndex",i=!0;n in[]&&Array(1)[n](function(){i=!1}),r(r.P+r.F*i,"Array",{findIndex:function(r){return e(this,r,arguments.length>1?arguments[1]:void 0)}}),require("./_add-to-unscopables")(n);
},{"./_export":"izCb","./_array-methods":"AuPh","./_add-to-unscopables":"Z7e/"}],"2Hh2":[function(require,module,exports) {
"use strict";var l=require("./_fails");module.exports=function(n,u){return!!n&&l(function(){u?n.call(null,function(){},1):n.call(null)})};
},{"./_fails":"5BXi"}],"VsIt":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_array-methods")(0),t=require("./_strict-method")([].forEach,!0);r(r.P+r.F*!t,"Array",{forEach:function(r){return e(this,r,arguments[1])}});
},{"./_export":"izCb","./_array-methods":"AuPh","./_strict-method":"2Hh2"}],"RnO+":[function(require,module,exports) {
var r=require("./_an-object");module.exports=function(t,e,o,a){try{return a?e(r(o)[0],o[1]):e(o)}catch(e){var c=t.return;throw void 0!==c&&r(c.call(t)),e}};
},{"./_an-object":"eT53"}],"JO4d":[function(require,module,exports) {
module.exports={};
},{}],"0B0p":[function(require,module,exports) {
var r=require("./_iterators"),e=require("./_wks")("iterator"),t=Array.prototype;module.exports=function(o){return void 0!==o&&(r.Array===o||t[e]===o)};
},{"./_iterators":"JO4d","./_wks":"44AI"}],"JCwR":[function(require,module,exports) {
"use strict";var e=require("./_object-dp"),r=require("./_property-desc");module.exports=function(t,i,o){i in t?e.f(t,i,r(0,o)):t[i]=o};
},{"./_object-dp":"nw8e","./_property-desc":"uJ6d"}],"GM7B":[function(require,module,exports) {
var e=require("./_cof"),t=require("./_wks")("toStringTag"),n="Arguments"==e(function(){return arguments}()),r=function(e,t){try{return e[t]}catch(e){}};module.exports=function(u){var o,c,i;return void 0===u?"Undefined":null===u?"Null":"string"==typeof(c=r(o=Object(u),t))?c:n?e(o):"Object"==(i=e(o))&&"function"==typeof o.callee?"Arguments":i};
},{"./_cof":"Z5df","./_wks":"44AI"}],"ia+4":[function(require,module,exports) {
var r=require("./_classof"),e=require("./_wks")("iterator"),t=require("./_iterators");module.exports=require("./_core").getIteratorMethod=function(o){if(null!=o)return o[e]||o["@@iterator"]||t[r(o)]};
},{"./_classof":"GM7B","./_wks":"44AI","./_iterators":"JO4d","./_core":"ss9A"}],"md62":[function(require,module,exports) {
var r=require("./_wks")("iterator"),t=!1;try{var n=[7][r]();n.return=function(){t=!0},Array.from(n,function(){throw 2})}catch(r){}module.exports=function(n,e){if(!e&&!t)return!1;var u=!1;try{var o=[7],c=o[r]();c.next=function(){return{done:u=!0}},o[r]=function(){return c},n(o)}catch(r){}return u};
},{"./_wks":"44AI"}],"RRcs":[function(require,module,exports) {
"use strict";var e=require("./_ctx"),r=require("./_export"),t=require("./_to-object"),i=require("./_iter-call"),o=require("./_is-array-iter"),u=require("./_to-length"),n=require("./_create-property"),a=require("./core.get-iterator-method");r(r.S+r.F*!require("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(r){var l,c,f,q,_=t(r),h="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,s=0,g=a(_);if(d&&(y=e(y,v>2?arguments[2]:void 0,2)),null==g||h==Array&&o(g))for(c=new h(l=u(_.length));l>s;s++)n(c,s,d?y(_[s],s):_[s]);else for(q=g.call(_),c=new h;!(f=q.next()).done;s++)n(c,s,d?i(q,y,[f.value,s],!0):f.value);return c.length=s,c}});
},{"./_ctx":"E3Kh","./_export":"izCb","./_to-object":"rfVX","./_iter-call":"RnO+","./_is-array-iter":"0B0p","./_to-length":"dJBs","./_create-property":"JCwR","./core.get-iterator-method":"ia+4","./_iter-detect":"md62"}],"g6sb":[function(require,module,exports) {
var e=require("./_iobject"),r=require("./_defined");module.exports=function(i){return e(r(i))};
},{"./_iobject":"nGau","./_defined":"+Bjj"}],"vfEH":[function(require,module,exports) {
var e=require("./_to-integer"),r=Math.max,t=Math.min;module.exports=function(n,a){return(n=e(n))<0?r(n+a,0):t(n,a)};
},{"./_to-integer":"yjVO"}],"4Ca7":[function(require,module,exports) {
var e=require("./_to-iobject"),r=require("./_to-length"),t=require("./_to-absolute-index");module.exports=function(n){return function(i,o,u){var f,l=e(i),a=r(l.length),c=t(u,a);if(n&&o!=o){for(;a>c;)if((f=l[c++])!=f)return!0}else for(;a>c;c++)if((n||c in l)&&l[c]===o)return n||c||0;return!n&&-1}};
},{"./_to-iobject":"g6sb","./_to-length":"dJBs","./_to-absolute-index":"vfEH"}],"LvRh":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_array-includes")(!1),i=[].indexOf,t=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(t||!require("./_strict-method")(i)),"Array",{indexOf:function(r){return t?i.apply(this,arguments)||0:e(this,r,arguments[1])}});
},{"./_export":"izCb","./_array-includes":"4Ca7","./_strict-method":"2Hh2"}],"RBsu":[function(require,module,exports) {
"use strict";var r=require("./_export"),e=require("./_array-methods")(1);r(r.P+r.F*!require("./_strict-method")([].map,!0),"Array",{map:function(r){return e(this,r,arguments[1])}});
},{"./_export":"izCb","./_array-methods":"AuPh","./_strict-method":"2Hh2"}],"nrVf":[function(require,module,exports) {
"use strict";var r=require("./_export"),t=require("./_a-function"),i=require("./_to-object"),e=require("./_fails"),o=[].sort,u=[1,2,3];r(r.P+r.F*(e(function(){u.sort(void 0)})||!e(function(){u.sort(null)})||!require("./_strict-method")(o)),"Array",{sort:function(r){return void 0===r?o.call(i(this)):o.call(i(this),t(r))}});
},{"./_export":"izCb","./_a-function":"6kYj","./_to-object":"rfVX","./_fails":"5BXi","./_strict-method":"2Hh2"}],"TSUD":[function(require,module,exports) {
var e=require("./_export");e(e.S+e.F*!require("./_descriptors"),"Object",{defineProperty:require("./_object-dp").f});
},{"./_export":"izCb","./_descriptors":"P9Ib","./_object-dp":"nw8e"}],"4zTK":[function(require,module,exports) {
"use strict";var e=require("./_classof"),r={};r[require("./_wks")("toStringTag")]="z",r+""!="[object z]"&&require("./_redefine")(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0);
},{"./_classof":"GM7B","./_wks":"44AI","./_redefine":"PHot"}],"LmBS":[function(require,module,exports) {
"use strict";var r=require("./_hide"),e=require("./_redefine"),t=require("./_fails"),i=require("./_defined"),n=require("./_wks");module.exports=function(u,o,c){var f=n(u),s=c(i,f,""[u]),a=s[0],l=s[1];t(function(){var r={};return r[f]=function(){return 7},7!=""[u](r)})&&(e(String.prototype,u,a),r(RegExp.prototype,f,2==o?function(r,e){return l.call(r,this,e)}:function(r){return l.call(r,this)}))};
},{"./_hide":"0NXb","./_redefine":"PHot","./_fails":"5BXi","./_defined":"+Bjj","./_wks":"44AI"}],"RTfC":[function(require,module,exports) {
require("./_fix-re-wks")("match",1,function(r,i,n){return[function(n){"use strict";var t=r(this),e=null==n?void 0:n[i];return void 0!==e?e.call(n,t):new RegExp(n)[i](String(t))},n]});
},{"./_fix-re-wks":"LmBS"}],"KGao":[function(require,module,exports) {
require("./_fix-re-wks")("replace",2,function(r,i,e){return[function(n,t){"use strict";var l=r(this),u=null==n?void 0:n[i];return void 0!==u?u.call(n,l,t):e.call(String(l),n,t)},e]});
},{"./_fix-re-wks":"LmBS"}],"NaGB":[function(require,module,exports) {
var e=require("./_shared")("keys"),r=require("./_uid");module.exports=function(u){return e[u]||(e[u]=r(u))};
},{"./_shared":"6zGc","./_uid":"U49f"}],"vL0Z":[function(require,module,exports) {
var r=require("./_has"),e=require("./_to-iobject"),u=require("./_array-includes")(!1),i=require("./_shared-key")("IE_PROTO");module.exports=function(o,a){var n,s=e(o),t=0,h=[];for(n in s)n!=i&&r(s,n)&&h.push(n);for(;a.length>t;)r(s,n=a[t++])&&(~u(h,n)||h.push(n));return h};
},{"./_has":"2uHg","./_to-iobject":"g6sb","./_array-includes":"4Ca7","./_shared-key":"NaGB"}],"9bbv":[function(require,module,exports) {
module.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
},{}],"U9a7":[function(require,module,exports) {
var e=require("./_object-keys-internal"),r=require("./_enum-bug-keys");module.exports=Object.keys||function(u){return e(u,r)};
},{"./_object-keys-internal":"vL0Z","./_enum-bug-keys":"9bbv"}],"MiMz":[function(require,module,exports) {
var e=require("./_object-dp"),r=require("./_an-object"),t=require("./_object-keys");module.exports=require("./_descriptors")?Object.defineProperties:function(o,i){r(o);for(var u,c=t(i),n=c.length,s=0;n>s;)e.f(o,u=c[s++],i[u]);return o};
},{"./_object-dp":"nw8e","./_an-object":"eT53","./_object-keys":"U9a7","./_descriptors":"P9Ib"}],"xj/b":[function(require,module,exports) {
var e=require("./_global").document;module.exports=e&&e.documentElement;
},{"./_global":"5qf4"}],"sYaK":[function(require,module,exports) {
var e=require("./_an-object"),r=require("./_object-dps"),t=require("./_enum-bug-keys"),n=require("./_shared-key")("IE_PROTO"),o=function(){},i="prototype",u=function(){var e,r=require("./_dom-create")("iframe"),n=t.length;for(r.style.display="none",require("./_html").appendChild(r),r.src="javascript:",(e=r.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u[i][t[n]];return u()};module.exports=Object.create||function(t,c){var a;return null!==t?(o[i]=e(t),a=new o,o[i]=null,a[n]=t):a=u(),void 0===c?a:r(a,c)};
},{"./_an-object":"eT53","./_object-dps":"MiMz","./_enum-bug-keys":"9bbv","./_shared-key":"NaGB","./_dom-create":"/vZ6","./_html":"xj/b"}],"J0Tl":[function(require,module,exports) {
var r=require("./_redefine");module.exports=function(e,n,i){for(var o in n)r(e,o,n[o],i);return e};
},{"./_redefine":"PHot"}],"yJTF":[function(require,module,exports) {
module.exports=function(o,n,r,i){if(!(o instanceof n)||void 0!==i&&i in o)throw TypeError(r+": incorrect invocation!");return o};
},{}],"Abke":[function(require,module,exports) {
var e=require("./_ctx"),r=require("./_iter-call"),t=require("./_is-array-iter"),i=require("./_an-object"),o=require("./_to-length"),n=require("./core.get-iterator-method"),u={},a={},f=module.exports=function(f,l,c,q,_){var h,s,d,g,p=_?function(){return f}:n(f),v=e(c,q,l?2:1),x=0;if("function"!=typeof p)throw TypeError(f+" is not iterable!");if(t(p)){for(h=o(f.length);h>x;x++)if((g=l?v(i(s=f[x])[0],s[1]):v(f[x]))===u||g===a)return g}else for(d=p.call(f);!(s=d.next()).done;)if((g=r(d,v,s.value,l))===u||g===a)return g};f.BREAK=u,f.RETURN=a;
},{"./_ctx":"E3Kh","./_iter-call":"RnO+","./_is-array-iter":"0B0p","./_an-object":"eT53","./_to-length":"dJBs","./core.get-iterator-method":"ia+4"}],"rq3q":[function(require,module,exports) {
var e=require("./_object-dp").f,r=require("./_has"),o=require("./_wks")("toStringTag");module.exports=function(t,u,i){t&&!r(t=i?t:t.prototype,o)&&e(t,o,{configurable:!0,value:u})};
},{"./_object-dp":"nw8e","./_has":"2uHg","./_wks":"44AI"}],"ebgP":[function(require,module,exports) {
"use strict";var e=require("./_object-create"),r=require("./_property-desc"),t=require("./_set-to-string-tag"),i={};require("./_hide")(i,require("./_wks")("iterator"),function(){return this}),module.exports=function(o,u,s){o.prototype=e(i,{next:r(1,s)}),t(o,u+" Iterator")};
},{"./_object-create":"sYaK","./_property-desc":"uJ6d","./_set-to-string-tag":"rq3q","./_hide":"0NXb","./_wks":"44AI"}],"8q6y":[function(require,module,exports) {
var t=require("./_has"),e=require("./_to-object"),o=require("./_shared-key")("IE_PROTO"),r=Object.prototype;module.exports=Object.getPrototypeOf||function(c){return c=e(c),t(c,o)?c[o]:"function"==typeof c.constructor&&c instanceof c.constructor?c.constructor.prototype:c instanceof Object?r:null};
},{"./_has":"2uHg","./_to-object":"rfVX","./_shared-key":"NaGB"}],"mH0U":[function(require,module,exports) {
"use strict";var e=require("./_library"),r=require("./_export"),t=require("./_redefine"),i=require("./_hide"),n=require("./_iterators"),u=require("./_iter-create"),o=require("./_set-to-string-tag"),s=require("./_object-gpo"),a=require("./_wks")("iterator"),c=!([].keys&&"next"in[].keys()),f="@@iterator",l="keys",q="values",y=function(){return this};module.exports=function(_,p,h,k,v,w,d){u(h,p,k);var x,b,g,j=function(e){if(!c&&e in I)return I[e];switch(e){case l:case q:return function(){return new h(this,e)}}return function(){return new h(this,e)}},m=p+" Iterator",A=v==q,F=!1,I=_.prototype,O=I[a]||I[f]||v&&I[v],P=O||j(v),z=v?A?j("entries"):P:void 0,B="Array"==p&&I.entries||O;if(B&&(g=s(B.call(new _)))!==Object.prototype&&g.next&&(o(g,m,!0),e||"function"==typeof g[a]||i(g,a,y)),A&&O&&O.name!==q&&(F=!0,P=function(){return O.call(this)}),e&&!d||!c&&!F&&I[a]||i(I,a,P),n[p]=P,n[m]=y,v)if(x={values:A?P:j(q),keys:w?P:j(l),entries:z},d)for(b in x)b in I||t(I,b,x[b]);else r(r.P+r.F*(c||F),p,x);return x};
},{"./_library":"H21C","./_export":"izCb","./_redefine":"PHot","./_hide":"0NXb","./_iterators":"JO4d","./_iter-create":"ebgP","./_set-to-string-tag":"rq3q","./_object-gpo":"8q6y","./_wks":"44AI"}],"x8b3":[function(require,module,exports) {
module.exports=function(e,n){return{value:n,done:!!e}};
},{}],"5h4d":[function(require,module,exports) {

"use strict";var e=require("./_global"),r=require("./_object-dp"),i=require("./_descriptors"),t=require("./_wks")("species");module.exports=function(u){var s=e[u];i&&s&&!s[t]&&r.f(s,t,{configurable:!0,get:function(){return this}})};
},{"./_global":"5qf4","./_object-dp":"nw8e","./_descriptors":"P9Ib","./_wks":"44AI"}],"AoVy":[function(require,module,exports) {
var e=require("./_uid")("meta"),r=require("./_is-object"),t=require("./_has"),n=require("./_object-dp").f,i=0,u=Object.isExtensible||function(){return!0},f=!require("./_fails")(function(){return u(Object.preventExtensions({}))}),o=function(r){n(r,e,{value:{i:"O"+ ++i,w:{}}})},s=function(n,i){if(!r(n))return"symbol"==typeof n?n:("string"==typeof n?"S":"P")+n;if(!t(n,e)){if(!u(n))return"F";if(!i)return"E";o(n)}return n[e].i},c=function(r,n){if(!t(r,e)){if(!u(r))return!0;if(!n)return!1;o(r)}return r[e].w},E=function(r){return f&&a.NEED&&u(r)&&!t(r,e)&&o(r),r},a=module.exports={KEY:e,NEED:!1,fastKey:s,getWeak:c,onFreeze:E};
},{"./_uid":"U49f","./_is-object":"M7z6","./_has":"2uHg","./_object-dp":"nw8e","./_fails":"5BXi"}],"1FW4":[function(require,module,exports) {
var r=require("./_is-object");module.exports=function(e,i){if(!r(e)||e._t!==i)throw TypeError("Incompatible receiver, "+i+" required!");return e};
},{"./_is-object":"M7z6"}],"8aIi":[function(require,module,exports) {
"use strict";var e=require("./_object-dp").f,r=require("./_object-create"),t=require("./_redefine-all"),i=require("./_ctx"),n=require("./_an-instance"),_=require("./_for-of"),o=require("./_iter-define"),u=require("./_iter-step"),f=require("./_set-species"),s=require("./_descriptors"),l=require("./_meta").fastKey,c=require("./_validate-collection"),v=s?"_s":"size",a=function(e,r){var t,i=l(r);if("F"!==i)return e._i[i];for(t=e._f;t;t=t.n)if(t.k==r)return t};module.exports={getConstructor:function(o,u,f,l){var h=o(function(e,t){n(e,h,u,"_i"),e._t=u,e._i=r(null),e._f=void 0,e._l=void 0,e[v]=0,null!=t&&_(t,f,e[l],e)});return t(h.prototype,{clear:function(){for(var e=c(this,u),r=e._i,t=e._f;t;t=t.n)t.r=!0,t.p&&(t.p=t.p.n=void 0),delete r[t.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var r=c(this,u),t=a(r,e);if(t){var i=t.n,n=t.p;delete r._i[t.i],t.r=!0,n&&(n.n=i),i&&(i.p=n),r._f==t&&(r._f=i),r._l==t&&(r._l=n),r[v]--}return!!t},forEach:function(e){c(this,u);for(var r,t=i(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(t(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!a(c(this,u),e)}}),s&&e(h.prototype,"size",{get:function(){return c(this,u)[v]}}),h},def:function(e,r,t){var i,n,_=a(e,r);return _?_.v=t:(e._l=_={i:n=l(r,!0),k:r,v:t,p:i=e._l,n:void 0,r:!1},e._f||(e._f=_),i&&(i.n=_),e[v]++,"F"!==n&&(e._i[n]=_)),e},getEntry:a,setStrong:function(e,r,t){o(e,r,function(e,t){this._t=c(e,r),this._k=t,this._l=void 0},function(){for(var e=this._k,r=this._l;r&&r.r;)r=r.p;return this._t&&(this._l=r=r?r.n:this._t._f)?u(0,"keys"==e?r.k:"values"==e?r.v:[r.k,r.v]):(this._t=void 0,u(1))},t?"entries":"values",!t,!0),f(r)}};
},{"./_object-dp":"nw8e","./_object-create":"sYaK","./_redefine-all":"J0Tl","./_ctx":"E3Kh","./_an-instance":"yJTF","./_for-of":"Abke","./_iter-define":"mH0U","./_iter-step":"x8b3","./_set-species":"5h4d","./_descriptors":"P9Ib","./_meta":"AoVy","./_validate-collection":"1FW4"}],"vjRp":[function(require,module,exports) {
exports.f={}.propertyIsEnumerable;
},{}],"uIjZ":[function(require,module,exports) {
var e=require("./_object-pie"),r=require("./_property-desc"),i=require("./_to-iobject"),t=require("./_to-primitive"),o=require("./_has"),c=require("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;exports.f=require("./_descriptors")?u:function(p,q){if(p=i(p),q=t(q,!0),c)try{return u(p,q)}catch(e){}if(o(p,q))return r(!e.f.call(p,q),p[q])};
},{"./_object-pie":"vjRp","./_property-desc":"uJ6d","./_to-iobject":"g6sb","./_to-primitive":"9y37","./_has":"2uHg","./_ie8-dom-define":"/o6G","./_descriptors":"P9Ib"}],"vn3S":[function(require,module,exports) {
var t=require("./_is-object"),e=require("./_an-object"),r=function(r,o){if(e(r),!t(o)&&null!==o)throw TypeError(o+": can't set as prototype!")};module.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=require("./_ctx")(Function.call,require("./_object-gopd").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,c){return r(t,c),e?t.__proto__=c:o(t,c),t}}({},!1):void 0),check:r};
},{"./_is-object":"M7z6","./_an-object":"eT53","./_ctx":"E3Kh","./_object-gopd":"uIjZ"}],"ogxf":[function(require,module,exports) {
var t=require("./_is-object"),o=require("./_set-proto").set;module.exports=function(r,e,p){var u,n=e.constructor;return n!==p&&"function"==typeof n&&(u=n.prototype)!==p.prototype&&t(u)&&o&&o(r,u),r};
},{"./_is-object":"M7z6","./_set-proto":"vn3S"}],"hWYB":[function(require,module,exports) {

"use strict";var e=require("./_global"),r=require("./_export"),t=require("./_redefine"),n=require("./_redefine-all"),i=require("./_meta"),u=require("./_for-of"),o=require("./_an-instance"),c=require("./_is-object"),a=require("./_fails"),s=require("./_iter-detect"),l=require("./_set-to-string-tag"),f=require("./_inherit-if-required");module.exports=function(d,h,q,_,p,g){var v=e[d],w=v,y=p?"set":"add",x=w&&w.prototype,E={},b=function(e){var r=x[e];t(x,e,"delete"==e?function(e){return!(g&&!c(e))&&r.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!c(e))&&r.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!c(e)?void 0:r.call(this,0===e?0:e)}:"add"==e?function(e){return r.call(this,0===e?0:e),this}:function(e,t){return r.call(this,0===e?0:e,t),this})};if("function"==typeof w&&(g||x.forEach&&!a(function(){(new w).entries().next()}))){var m=new w,j=m[y](g?{}:-0,1)!=m,C=a(function(){m.has(1)}),D=s(function(e){new w(e)}),F=!g&&a(function(){for(var e=new w,r=5;r--;)e[y](r,r);return!e.has(-0)});D||((w=h(function(e,r){o(e,w,d);var t=f(new v,e,w);return null!=r&&u(r,p,t[y],t),t})).prototype=x,x.constructor=w),(C||F)&&(b("delete"),b("has"),p&&b("get")),(F||j)&&b(y),g&&x.clear&&delete x.clear}else w=_.getConstructor(h,d,p,y),n(w.prototype,q),i.NEED=!0;return l(w,d),E[d]=w,r(r.G+r.W+r.F*(w!=v),E),g||_.setStrong(w,d,p),w};
},{"./_global":"5qf4","./_export":"izCb","./_redefine":"PHot","./_redefine-all":"J0Tl","./_meta":"AoVy","./_for-of":"Abke","./_an-instance":"yJTF","./_is-object":"M7z6","./_fails":"5BXi","./_iter-detect":"md62","./_set-to-string-tag":"rq3q","./_inherit-if-required":"ogxf"}],"ioKM":[function(require,module,exports) {
"use strict";var t=require("./_collection-strong"),e=require("./_validate-collection"),r="Map";module.exports=require("./_collection")(r,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(n){var i=t.getEntry(e(this,r),n);return i&&i.v},set:function(n,i){return t.def(e(this,r),0===n?0:n,i)}},t,!0);
},{"./_collection-strong":"8aIi","./_validate-collection":"1FW4","./_collection":"hWYB"}],"Ex+G":[function(require,module,exports) {
var r=require("./_an-object"),e=require("./_a-function"),u=require("./_wks")("species");module.exports=function(n,o){var i,t=r(n).constructor;return void 0===t||null==(i=r(t)[u])?o:e(i)};
},{"./_an-object":"eT53","./_a-function":"6kYj","./_wks":"44AI"}],"xcbV":[function(require,module,exports) {
module.exports=function(e,r,l){var a=void 0===l;switch(r.length){case 0:return a?e():e.call(l);case 1:return a?e(r[0]):e.call(l,r[0]);case 2:return a?e(r[0],r[1]):e.call(l,r[0],r[1]);case 3:return a?e(r[0],r[1],r[2]):e.call(l,r[0],r[1],r[2]);case 4:return a?e(r[0],r[1],r[2],r[3]):e.call(l,r[0],r[1],r[2],r[3])}return e.apply(l,r)};
},{}],"KY9y":[function(require,module,exports) {


var e,t,n,i=require("./_ctx"),o=require("./_invoke"),r=require("./_html"),s=require("./_dom-create"),a=require("./_global"),c=a.process,u=a.setImmediate,p=a.clearImmediate,f=a.MessageChannel,l=a.Dispatch,d=0,m={},h="onreadystatechange",g=function(){var e=+this;if(m.hasOwnProperty(e)){var t=m[e];delete m[e],t()}},v=function(e){g.call(e.data)};u&&p||(u=function(t){for(var n=[],i=1;arguments.length>i;)n.push(arguments[i++]);return m[++d]=function(){o("function"==typeof t?t:Function(t),n)},e(d),d},p=function(e){delete m[e]},"process"==require("./_cof")(c)?e=function(e){c.nextTick(i(g,e,1))}:l&&l.now?e=function(e){l.now(i(g,e,1))}:f?(n=(t=new f).port2,t.port1.onmessage=v,e=i(n.postMessage,n,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(e=function(e){a.postMessage(e+"","*")},a.addEventListener("message",v,!1)):e=h in s("script")?function(e){r.appendChild(s("script"))[h]=function(){r.removeChild(this),g.call(e)}}:function(e){setTimeout(i(g,e,1),0)}),module.exports={set:u,clear:p};
},{"./_ctx":"E3Kh","./_invoke":"xcbV","./_html":"xj/b","./_dom-create":"/vZ6","./_global":"5qf4","./_cof":"Z5df"}],"sFAp":[function(require,module,exports) {


var e=require("./_global"),t=require("./_task").set,r=e.MutationObserver||e.WebKitMutationObserver,n=e.process,o=e.Promise,a="process"==require("./_cof")(n);module.exports=function(){var i,c,s,v=function(){var e,t;for(a&&(e=n.domain)&&e.exit();i;){t=i.fn,i=i.next;try{t()}catch(e){throw i?s():c=void 0,e}}c=void 0,e&&e.enter()};if(a)s=function(){n.nextTick(v)};else if(!r||e.navigator&&e.navigator.standalone)if(o&&o.resolve){var u=o.resolve(void 0);s=function(){u.then(v)}}else s=function(){t.call(e,v)};else{var f=!0,l=document.createTextNode("");new r(v).observe(l,{characterData:!0}),s=function(){l.data=f=!f}}return function(e){var t={fn:e,next:void 0};c&&(c.next=t),i||(i=t,s()),c=t}};
},{"./_global":"5qf4","./_task":"KY9y","./_cof":"Z5df"}],"L7XN":[function(require,module,exports) {
"use strict";var r=require("./_a-function");function e(e){var o,t;this.promise=new e(function(r,e){if(void 0!==o||void 0!==t)throw TypeError("Bad Promise constructor");o=r,t=e}),this.resolve=r(o),this.reject=r(t)}module.exports.f=function(r){return new e(r)};
},{"./_a-function":"6kYj"}],"tyG8":[function(require,module,exports) {
module.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}};
},{}],"O5uh":[function(require,module,exports) {

var e=require("./_global"),r=e.navigator;module.exports=r&&r.userAgent||"";
},{"./_global":"5qf4"}],"cNG8":[function(require,module,exports) {
var r=require("./_an-object"),e=require("./_is-object"),i=require("./_new-promise-capability");module.exports=function(o,t){if(r(o),e(t)&&t.constructor===o)return t;var u=i.f(o);return(0,u.resolve)(t),u.promise};
},{"./_an-object":"eT53","./_is-object":"M7z6","./_new-promise-capability":"L7XN"}],"Pjta":[function(require,module,exports) {


"use strict";var e,r,t,i,n=require("./_library"),o=require("./_global"),c=require("./_ctx"),s=require("./_classof"),u=require("./_export"),a=require("./_is-object"),_=require("./_a-function"),h=require("./_an-instance"),f=require("./_for-of"),l=require("./_species-constructor"),v=require("./_task").set,d=require("./_microtask")(),p=require("./_new-promise-capability"),m=require("./_perform"),q=require("./_user-agent"),y=require("./_promise-resolve"),j="Promise",w=o.TypeError,g=o.process,x=g&&g.versions,b=x&&x.v8||"",k=o[j],P="process"==s(g),F=function(){},S=r=p.f,E=!!function(){try{var e=k.resolve(1),r=(e.constructor={})[require("./_wks")("species")]=function(e){e(F,F)};return(P||"function"==typeof PromiseRejectionEvent)&&e.then(F)instanceof r&&0!==b.indexOf("6.6")&&-1===q.indexOf("Chrome/66")}catch(e){}}(),O=function(e){var r;return!(!a(e)||"function"!=typeof(r=e.then))&&r},R=function(e,r){if(!e._n){e._n=!0;var t=e._c;d(function(){for(var i=e._v,n=1==e._s,o=0,c=function(r){var t,o,c,s=n?r.ok:r.fail,u=r.resolve,a=r.reject,_=r.domain;try{s?(n||(2==e._h&&H(e),e._h=1),!0===s?t=i:(_&&_.enter(),t=s(i),_&&(_.exit(),c=!0)),t===r.promise?a(w("Promise-chain cycle")):(o=O(t))?o.call(t,u,a):u(t)):a(i)}catch(e){_&&!c&&_.exit(),a(e)}};t.length>o;)c(t[o++]);e._c=[],e._n=!1,r&&!e._h&&C(e)})}},C=function(e){v.call(o,function(){var r,t,i,n=e._v,c=G(e);if(c&&(r=m(function(){P?g.emit("unhandledRejection",n,e):(t=o.onunhandledrejection)?t({promise:e,reason:n}):(i=o.console)&&i.error&&i.error("Unhandled promise rejection",n)}),e._h=P||G(e)?2:1),e._a=void 0,c&&r.e)throw r.v})},G=function(e){return 1!==e._h&&0===(e._a||e._c).length},H=function(e){v.call(o,function(){var r;P?g.emit("rejectionHandled",e):(r=o.onrejectionhandled)&&r({promise:e,reason:e._v})})},T=function(e){var r=this;r._d||(r._d=!0,(r=r._w||r)._v=e,r._s=2,r._a||(r._a=r._c.slice()),R(r,!0))},U=function(e){var r,t=this;if(!t._d){t._d=!0,t=t._w||t;try{if(t===e)throw w("Promise can't be resolved itself");(r=O(e))?d(function(){var i={_w:t,_d:!1};try{r.call(e,c(U,i,1),c(T,i,1))}catch(e){T.call(i,e)}}):(t._v=e,t._s=1,R(t,!1))}catch(e){T.call({_w:t,_d:!1},e)}}};E||(k=function(r){h(this,k,j,"_h"),_(r),e.call(this);try{r(c(U,this,1),c(T,this,1))}catch(e){T.call(this,e)}},(e=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=require("./_redefine-all")(k.prototype,{then:function(e,r){var t=S(l(this,k));return t.ok="function"!=typeof e||e,t.fail="function"==typeof r&&r,t.domain=P?g.domain:void 0,this._c.push(t),this._a&&this._a.push(t),this._s&&R(this,!1),t.promise},catch:function(e){return this.then(void 0,e)}}),t=function(){var r=new e;this.promise=r,this.resolve=c(U,r,1),this.reject=c(T,r,1)},p.f=S=function(e){return e===k||e===i?new t(e):r(e)}),u(u.G+u.W+u.F*!E,{Promise:k}),require("./_set-to-string-tag")(k,j),require("./_set-species")(j),i=require("./_core")[j],u(u.S+u.F*!E,j,{reject:function(e){var r=S(this);return(0,r.reject)(e),r.promise}}),u(u.S+u.F*(n||!E),j,{resolve:function(e){return y(n&&this===i?k:this,e)}}),u(u.S+u.F*!(E&&require("./_iter-detect")(function(e){k.all(e).catch(F)})),j,{all:function(e){var r=this,t=S(r),i=t.resolve,n=t.reject,o=m(function(){var t=[],o=0,c=1;f(e,!1,function(e){var s=o++,u=!1;t.push(void 0),c++,r.resolve(e).then(function(e){u||(u=!0,t[s]=e,--c||i(t))},n)}),--c||i(t)});return o.e&&n(o.v),t.promise},race:function(e){var r=this,t=S(r),i=t.reject,n=m(function(){f(e,!1,function(e){r.resolve(e).then(t.resolve,i)})});return n.e&&i(n.v),t.promise}});
},{"./_library":"H21C","./_global":"5qf4","./_ctx":"E3Kh","./_classof":"GM7B","./_export":"izCb","./_is-object":"M7z6","./_a-function":"6kYj","./_an-instance":"yJTF","./_for-of":"Abke","./_species-constructor":"Ex+G","./_task":"KY9y","./_microtask":"sFAp","./_new-promise-capability":"L7XN","./_perform":"tyG8","./_user-agent":"O5uh","./_promise-resolve":"cNG8","./_wks":"44AI","./_redefine-all":"J0Tl","./_set-to-string-tag":"rq3q","./_set-species":"5h4d","./_core":"ss9A","./_iter-detect":"md62"}],"h83E":[function(require,module,exports) {
"use strict";var n=require("./_a-function"),t=require("./_is-object"),r=require("./_invoke"),e=[].slice,i={},o=function(n,t,r){if(!(t in i)){for(var e=[],o=0;o<t;o++)e[o]="a["+o+"]";i[t]=Function("F,a","return new F("+e.join(",")+")")}return i[t](n,r)};module.exports=Function.bind||function(i){var u=n(this),c=e.call(arguments,1),a=function(){var n=c.concat(e.call(arguments));return this instanceof a?o(u,n.length,n):r(u,n,i)};return t(u.prototype)&&(a.prototype=u.prototype),a};
},{"./_a-function":"6kYj","./_is-object":"M7z6","./_invoke":"xcbV"}],"WIhg":[function(require,module,exports) {
var r=require("./_export");r(r.P,"Function",{bind:require("./_bind")});
},{"./_export":"izCb","./_bind":"h83E"}],"4JlF":[function(require,module,exports) {
var e=require("./_export"),r=require("./_object-create"),n=require("./_a-function"),t=require("./_an-object"),u=require("./_is-object"),c=require("./_fails"),i=require("./_bind"),o=(require("./_global").Reflect||{}).construct,a=c(function(){function e(){}return!(o(function(){},[],e)instanceof e)}),l=!c(function(){o(function(){})});e(e.S+e.F*(a||l),"Reflect",{construct:function(e,c){n(e),t(c);var f=arguments.length<3?e:n(arguments[2]);if(l&&!a)return o(e,c,f);if(e==f){switch(c.length){case 0:return new e;case 1:return new e(c[0]);case 2:return new e(c[0],c[1]);case 3:return new e(c[0],c[1],c[2]);case 4:return new e(c[0],c[1],c[2],c[3])}var p=[null];return p.push.apply(p,c),new(i.apply(e,p))}var s=f.prototype,q=r(u(s)?s:Object.prototype),_=Function.apply.call(e,q,c);return u(_)?_:q}});
},{"./_export":"izCb","./_object-create":"sYaK","./_a-function":"6kYj","./_an-object":"eT53","./_is-object":"M7z6","./_fails":"5BXi","./_bind":"h83E","./_global":"5qf4"}],"KIG8":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(t){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"npqE":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
var t,e=arguments[3],r=require("process");!function(t){!function(n){var i="object"==typeof e?e:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),o=u(t);function u(t,e){return function(r,n){"function"!=typeof t[r]&&Object.defineProperty(t,r,{configurable:!0,writable:!0,value:n}),e&&e(r,n)}}void 0===i.Reflect?i.Reflect=t:o=u(i.Reflect,o),function(t){var e=Object.prototype.hasOwnProperty,n="function"==typeof Symbol,i=n&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",o=n&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",u="function"==typeof Object.create,a={__proto__:[]}instanceof Array,f=!u&&!a,c={create:u?function(){return I(Object.create(null))}:a?function(){return I({__proto__:null})}:function(){return I({})},has:f?function(t,r){return e.call(t,r)}:function(t,e){return e in t},get:f?function(t,r){return e.call(t,r)?t[r]:void 0}:function(t,e){return t[e]}},s=Object.getPrototypeOf(Function),h="object"==typeof r&&r.env&&!1,y=h||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],r=function(){function t(t,e,r){this._index=0,this._keys=t,this._values=e,this._selector=r}return t.prototype["@@iterator"]=function(){return this},t.prototype[o]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var r=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var r=this._find(t,!0);return this._values[r]=e,this},e.prototype.delete=function(e){var r=this._find(e,!1);if(r>=0){for(var n=this._keys.length,i=r+1;i<n;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new r(this._keys,this._values,n)},e.prototype.values=function(){return new r(this._keys,this._values,i)},e.prototype.entries=function(){return new r(this._keys,this._values,u)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[o]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function n(t,e){return t}function i(t,e){return e}function u(t,e){return[t,e]}}():Map,p=h||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new y}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[o]=function(){return this.keys()},t}():Set,l=new(h||"function"!=typeof WeakMap?function(){var t=16,r=c.create(),n=i();return function(){function t(){this._key=i()}return t.prototype.has=function(t){var e=o(t,!1);return void 0!==e&&c.has(e,this._key)},t.prototype.get=function(t){var e=o(t,!1);return void 0!==e?c.get(e,this._key):void 0},t.prototype.set=function(t,e){var r=o(t,!0);return r[this._key]=e,this},t.prototype.delete=function(t){var e=o(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=i()},t}();function i(){var t;do{t="@@WeakMap@@"+a()}while(c.has(r,t));return r[t]=!0,t}function o(t,r){if(!e.call(t,n)){if(!r)return;Object.defineProperty(t,n,{value:c.create()})}return t[n]}function u(t,e){for(var r=0;r<e;++r)t[r]=255*Math.random()|0;return t}function a(){var e=function(t){if("function"==typeof Uint8Array)return"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):u(new Uint8Array(t),t);return u(new Array(t),t)}(t);e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var r="",n=0;n<t;++n){var i=e[n];4!==n&&6!==n&&8!==n||(r+="-"),i<16&&(r+="0"),r+=i.toString(16).toLowerCase()}return r}}():WeakMap);function v(t,e,r){var n=l.get(t);if(k(n)){if(!r)return;n=new y,l.set(t,n)}var i=n.get(e);if(k(i)){if(!r)return;i=new y,n.set(e,i)}return i}function _(t,e,r){var n=v(e,r,!1);return!k(n)&&!!n.has(t)}function d(t,e,r){var n=v(e,r,!1);if(!k(n))return n.get(t)}function w(t,e,r,n){var i=v(r,n,!0);i.set(t,e)}function g(t,e){var r=[],n=v(t,e,!1);if(k(n))return r;for(var i=n.keys(),u=function(t){var e=A(t,o);if(!x(e))throw new TypeError;var r=e.call(t);if(!O(r))throw new TypeError;return r}(i),a=0;;){var f=S(u);if(!f)return r.length=a,r;var c=f.value;try{r[a]=c}catch(t){try{P(u)}finally{throw t}}a++}}function b(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function k(t){return void 0===t}function m(t){return null===t}function O(t){return"object"==typeof t?null!==t:"function"==typeof t}function E(t,e){switch(b(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var r=3===e?"string":5===e?"number":"default",n=A(t,i);if(void 0!==n){var o=n.call(t,r);if(O(o))throw new TypeError;return o}return function(t,e){if("string"===e){var r=t.toString;if(x(r)){var n=r.call(t);if(!O(n))return n}var i=t.valueOf;if(x(i)){var n=i.call(t);if(!O(n))return n}}else{var i=t.valueOf;if(x(i)){var n=i.call(t);if(!O(n))return n}var o=t.toString;if(x(o)){var n=o.call(t);if(!O(n))return n}}throw new TypeError}(t,"default"===r?"number":r)}function T(t){var e=E(t,3);return"symbol"==typeof e?e:function(t){return""+t}(e)}function j(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function x(t){return"function"==typeof t}function M(t){return"function"==typeof t}function A(t,e){var r=t[e];if(null!=r){if(!x(r))throw new TypeError;return r}}function S(t){var e=t.next();return!e.done&&e}function P(t){var e=t.return;e&&e.call(t)}function K(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===s)return e;if(e!==s)return e;var r=t.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return e;var i=n.constructor;return"function"!=typeof i?e:i===t?e:i}function I(t){return t.__=void 0,delete t.__,t}t("decorate",function(t,e,r,n){if(k(r)){if(!j(t))throw new TypeError;if(!M(e))throw new TypeError;return function(t,e){for(var r=t.length-1;r>=0;--r){var n=t[r],i=n(e);if(!k(i)&&!m(i)){if(!M(i))throw new TypeError;e=i}}return e}(t,e)}if(!j(t))throw new TypeError;if(!O(e))throw new TypeError;if(!O(n)&&!k(n)&&!m(n))throw new TypeError;return m(n)&&(n=void 0),r=T(r),function(t,e,r,n){for(var i=t.length-1;i>=0;--i){var o=t[i],u=o(e,r,n);if(!k(u)&&!m(u)){if(!O(u))throw new TypeError;n=u}}return n}(t,e,r,n)}),t("metadata",function(t,e){return function(r,n){if(!O(r))throw new TypeError;if(!k(n)&&!function(t){switch(b(t)){case 3:case 4:return!0;default:return!1}}(n))throw new TypeError;w(t,e,r,n)}}),t("defineMetadata",function(t,e,r,n){if(!O(r))throw new TypeError;k(n)||(n=T(n));return w(t,e,r,n)}),t("hasMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return function t(e,r,n){var i=_(e,r,n);if(i)return!0;var o=K(r);if(!m(o))return t(e,o,n);return!1}(t,e,r)}),t("hasOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return _(t,e,r)}),t("getMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return function t(e,r,n){var i=_(e,r,n);if(i)return d(e,r,n);var o=K(r);if(!m(o))return t(e,o,n);return}(t,e,r)}),t("getOwnMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));return d(t,e,r)}),t("getMetadataKeys",function(t,e){if(!O(t))throw new TypeError;k(e)||(e=T(e));return function t(e,r){var n=g(e,r);var i=K(e);if(null===i)return n;var o=t(i,r);if(o.length<=0)return n;if(n.length<=0)return o;var u=new p;var a=[];for(var f=0,c=n;f<c.length;f++){var s=c[f],h=u.has(s);h||(u.add(s),a.push(s))}for(var y=0,l=o;y<l.length;y++){var s=l[y],h=u.has(s);h||(u.add(s),a.push(s))}return a}(t,e)}),t("getOwnMetadataKeys",function(t,e){if(!O(t))throw new TypeError;k(e)||(e=T(e));return g(t,e)}),t("deleteMetadata",function(t,e,r){if(!O(e))throw new TypeError;k(r)||(r=T(r));var n=v(e,r,!1);if(k(n))return!1;if(!n.delete(t))return!1;if(n.size>0)return!0;var i=l.get(e);return i.delete(r),i.size>0||(l.delete(e),!0)})}(o)}()}(t||(t={}));
},{"process":"KIG8"}],"jBTy":[function(require,module,exports) {
var define;
var e;parcelRequire=function(r,t,n,o){function i(e,n){function o(e){return i(o.resolve(e))}if(!t[e]){if(!r[e]){var a="function"==typeof parcelRequire&&parcelRequire;if(!n&&a)return a(e,!0);if(u)return u(e,!0);if(c&&"string"==typeof e)return c(e);var f=new Error("Cannot find module '"+e+"'");throw f.code="MODULE_NOT_FOUND",f}o.resolve=function(t){return r[e][1][t]||t};var l=t[e]=new i.Module(e);r[e][0].call(l.exports,o,l,l.exports,this)}return t[e].exports}var u="function"==typeof parcelRequire&&parcelRequire,c="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=function(e){this.id=e,this.bundle=i,this.exports={}},i.modules=r,i.cache=t,i.parent=u;for(var a=0;a<n.length;a++)i(n[a]);if(n.length){var f=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof e&&e.amd&&e(function(){return f})}return i}({1:[function(e,r,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={set:function(e,r){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="",i="",u="";if(n.expires){var c=new Date;c.setDate(c.getDate()+n.expires),o=";expires="+c.toGMTString()}n.path&&(i=";path="+n.path),n.domain&&(u=";domain="+n.domain),t=r instanceof Object?encodeURI(JSON.stringify(r)):encodeURI(r),document.cookie=encodeURI(e)+"="+t+o+i+u},get:function(e){if(!e)return null;for(var r=document.cookie.split("; "),t=0;t<r.length;t++){var n=r[t].split("=");if(n[0]===decodeURI(e)){var o=void 0;try{o=JSON.parse(decodeURI(n[1]))}catch(e){o=decodeURI(n[1])}return""===o?null:o}}return null},remove:function(e){try{return this.set(e,"",-1),!0}catch(r){return console.error("remove cookie "+e+" failed:",r),!1}}};t.default=n},{}]},{},[1]);
},{}],"H8Ea":[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=e(require("easier-cookie")),r=function(){function e(){this.toString=Object.prototype.toString}return e.prototype.setCookie=function(t,e,r){o.default.set(t,e,r)},e.prototype.getCookie=function(t){return o.default.get(t)},e.prototype.removeCookie=function(t){return o.default.remove(t)},e.prototype.buildQuery=function(t){if(!(t&&t instanceof Object))return"";var e="?";for(var o in t)t[o]instanceof Object?e+=o+"="+JSON.stringify(t[o])+"&":e+=o+"="+t[o].toString()+"&";return e.slice(0,e.length-1)},e.prototype.getQuery=function(t){for(var e=window.location.search.replace("?","").split("&"),o={},r=0;r<e.length;r++){var n=e[r].split("=");o[n[0]]=n[1]}return o[t]?o[t]:""},e.prototype.isFunction=function(t){return"[object Function]"===this.toString.call(t)},e.prototype.isEqual=function(e,o,r,n){if(e===o)return 0!==e||1/e==1/o;if(null==e||null==o)return!1;if(e!=e)return o!=o;var i=void 0===e?"undefined":t(e);return("function"===i||"object"===i||"object"===(void 0===o?"undefined":t(o)))&&this.deepIsEqual(e,o,r,n)},e.prototype.deepIsEqual=function(e,o,r,n){var i=this.toString.call(e);if(i!==this.toString.call(o))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+o;case"[object Number]":return+e!=+e?+o!=+o:0==+e?1/+e==1/o:+e==+o;case"[object Date]":case"[object Boolean]":return+e==+o}var u="[object Array]"===i;if(!u){if("object"!==(void 0===e?"undefined":t(e))||"object"!==(void 0===o?"undefined":t(o)))return!1;var c=e.constructor,f=o.constructor;if(c!==f&&!(this.isFunction(c)&&c instanceof c&&this.isFunction(f)&&f instanceof f)&&"constructor"in e&&"constructor"in o)return!1}n=n||[];for(var s=(r=r||[]).length;s--;)if(r[s]===e)return n[s]===o;if(r.push(e),n.push(o),u){if((s=e.length)!==o.length)return!1;for(;s--;)if(!this.isEqual(e[s],o[s],r,n))return!1}else{var p=Object.keys(e),a=void 0;if(s=p.length,Object.keys(o).length!==s)return!1;for(;s--;)if(a=p[s],!o.hasOwnProperty(a)||!this.isEqual(e[a],o[a],r,n))return!1}return r.pop(),n.pop(),!0},e.prototype.formatInnerHTML=function(t){return t=(t=t.replace(/(\n\s*)/g,"")).replace(/^[^\S\n]+/gm,"")},e.prototype.isBrowser=function(){return"undefined"!=typeof window&&void 0!==window.document},e}();exports.default=r;
},{"easier-cookie":"jBTy"}],"OPet":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
},{}],"w9Fr":[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("../Utils")),o=new r.default,n=function(){function e(t,e,r){this.data=t,this.watcher=e,this.render=r,this.watchData(this.data)}return e.prototype.watchData=function(e){if(e&&"object"===(void 0===e?"undefined":t(e))){var r=this,n=function(t){var n=e[t];r.watchData(n),Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return n},set:function(t){var e;o.isEqual(t,n)||(r.watcher&&(e=JSON.parse(JSON.stringify(r.data))),n=t,r.watchData(n),r.watcher&&r.watcher(e),r.render&&r.render())}})};for(var a in e)n(a)}},e}();exports.default=n;
},{"../Utils":"H8Ea"}],"9pTu":[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=e(require("../Utils")),n=new o.default,i=function(){function e(t,e,o){this.data=t,this.key=e,this.watcher=o,this.watchData(this.data,this.key)}return e.prototype.watchData=function(e,o){if(e&&"object"===(void 0===e?"undefined":t(e))&&e[o]){var i=this,r=e[o];Object.defineProperty(e,o,{configurable:!0,enumerable:!0,get:function(){return r},set:function(e){var o;n.isEqual(e,r)||(i.watcher&&("object"===(void 0===r?"undefined":t(r))&&(o=JSON.parse(JSON.stringify(r))),"object"!==(void 0===r?"undefined":t(r))&&"function"!=typeof r&&(o=r)),r=e,i.watcher&&i.watcher(o))}})}},e}();exports.default=i;
},{"../Utils":"H8Ea"}],"E/NU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return function(e){this.tagName=e.tagName,this.node=e.node,this.parentNode=e.parentNode,this.attributes=e.attributes,this.childNodes=e.childNodes,this.nodeValue=e.nodeValue,this.type=e.type,this.value=e.value,this.repeatData=e.repeatData,this.eventTypes=e.eventTypes,this.key=e.key,this.checked=!1}}();function t(e){return 1===e.nodeType?"element":3===e.nodeType?"text":11===e.nodeType?"document-fragment":""}function a(e){var t=e.attributes,a=[];return t&&Array.from(t).forEach(function(e){a.push({name:e.name,value:e.value})}),a}function n(r){var o=[];return r.childNodes&&Array.from(r.childNodes).forEach(function(e){o.push(n(e))}),new e({tagName:r.tagName,node:r,parentNode:r.parentNode,attributes:a(r),childNodes:o,nodeValue:r.nodeValue,type:t(r),value:r.value,repeatData:r.repeatData?r.repeatData:null,eventTypes:r.eventTypes?r.eventTypes:null,key:r.indiv_repeat_key?r.indiv_repeat_key:null})}exports.default=n;
},{}],"Htca":[function(require,module,exports) {
"use strict";function e(e,n,t,o){e.childNodes.length>0&&e.childNodes.forEach(function(d,u){if(!d.checked){var l=n.childNodes.find(function(e){return e.node.isEqualNode(d.node)&&e.key===d.key&&!e.checked||e.tagName===d.tagName&&e.key===d.key&&!e.checked});if(l){var c=n.childNodes.findIndex(function(e){return e===l});c!==u&&t.push({type:1,newIndex:c,oldVnode:d.node,parentNode:e.node}),a(d,l,t,o),l.checked=!0}else t.push({type:0,node:d.node,parentNode:e.node});d.checked=!0}}),n.childNodes.length>0&&n.childNodes.forEach(function(n,o){n.checked||(t.push({type:1,newIndex:o,oldVnode:n.node,parentNode:e.node}),n.checked=!0)})}function n(e,n,t){n.attributes.forEach(function(n){var o=e.attributes.find(function(e){return e.name===n.name});o&&o.value===n.value||t.push({type:2,node:e.node,newValue:n,oldValue:o})}),e.attributes.forEach(function(o){n.attributes.find(function(e){return e.name===o.name})||t.push({type:3,node:e.node,oldValue:o})})}function t(e,n,t){e.nodeValue!==n.nodeValue&&t.push({type:4,node:e.node,newValue:n.nodeValue,oldValue:e.nodeValue})}function o(e,n,t){e.value!==n.value&&t.push({type:5,node:e.node,newValue:n.value,oldValue:e.value})}function d(e,n,t){t.push({type:6,node:e.node,newValue:n.repeatData})}function u(e,n,t){var o=JSON.parse(e.eventTypes),d=JSON.parse(n.eventTypes);d&&d.length>0&&d.forEach(function(o){t.push({type:7,node:e.node,eventType:o,newValue:n.node["event"+o]})}),o&&o.length>0&&o.forEach(function(n){(!d||d.length<=0)&&t.push({type:7,node:e.node,eventType:n,newValue:null}),d&&d.length>0&&!d.find(function(e){return e===n})&&t.push({type:7,node:e.node,eventType:n,newValue:null})}),t.push({type:8,node:e.node,newValue:n.eventTypes})}function a(a,l,c,r){if(!c)throw new Error("patchList can not be null, diffVnode must need an Array");"document-fragment"!==l.type?(n(a,l,c),t(a,l,c),"INPUT"!==a.tagName&&"TEXTAREA textarea"!==a.tagName&&"INPUT"!==a.tagName||o(a,l,c),d(a,l,c),u(a,l,c),r&&!r(a,l)||e(a,l,c,r)):e(a,l,c,r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=a;
},{}],"vBQq":[function(require,module,exports) {
"use strict";function e(e){e.sort(function(e,n){return e.type===n.type&&e.newIndex&&n.newIndex?e.newIndex-n.newIndex:e.type-n.type}),e.forEach(function(e){switch(e.type){case 0:e.parentNode.removeChild(e.node);break;case 1:Array.from(e.parentNode.children).indexOf(e.oldVnode)!==e.newIndex&&(e.parentNode.contains(e.oldVnode)&&e.parentNode.removeChild(e.oldVnode),e.parentNode.childNodes[e.newIndex]?e.parentNode.insertBefore(e.oldVnode,e.parentNode.childNodes[e.newIndex]):e.parentNode.appendChild(e.oldVnode));break;case 2:e.node.setAttribute(e.newValue.name,e.newValue.value);break;case 3:e.node.removeAttribute(e.oldValue.name);break;case 4:e.node.nodeValue=e.newValue;break;case 5:e.node.value=e.newValue;break;case 6:e.node.repeatData=e.newValue;break;case 7:e.node["on"+e.eventType]=e.newValue;break;case 8:e.node.eventTypes=e.newValue}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Wip4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./parse");exports.parseToVnode=e.default;var r=require("./diff");exports.diffVnode=r.default;var d=require("./render");exports.renderVnode=d.default;
},{"./parse":"E/NU","./diff":"Htca","./render":"vBQq"}],"bsu5":[function(require,module,exports) {
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(e){this.$fragment=e}return t.prototype._getValueByValue=function(e,t,n){var r=t.replace("()","").replace("$.","").split("."),a=e;return r.forEach(function(e,t){e===n&&0===t||(a=a[e])}),a},t.prototype._setValueByValue=function(e,t,n,r){var a,i=t.replace("()","").replace("$.","").split("."),o=e;i.forEach(function(e,t){if(e===n&&0===t)return a=e;t<i.length&&(a=e),t<i.length-1&&(o=o[e])}),a&&(o[a]=r)},t.prototype._getVMVal=function(e,t){var n=t.replace("()","").replace("$.","").split("."),r=e;return n.forEach(function(e){r=r[e]}),r},t.prototype._getVMRepeatVal=function(e,t,n){var r;return t.replace("()","").replace("$.","").split(".").forEach(function(t,a){r=t!==n||0!==a?r[t]:e}),r},t.prototype._getVMFunction=function(e,t){var n=t.replace(/^(\@)/,"").replace(/\(.*\)/,"").split("."),r=e;return n.forEach(function(e){r=r[e]}),r},t.prototype._getVMFunctionArguments=function(e,t,n,r,a){var i=t.replace(/^(\@)/,"").match(/\((.*)\)/)[1].replace(/\s+/g,"").split(","),o=[],p=this;return i.forEach(function(t){return""!==t&&("$element"===t?o.push(n):"true"===t||"false"===t?o.push("true"===t):/(\$\.).*/g.test(t)?o.push(p._getVMVal(e.state,t)):/\'.*\'/g.test(t)?o.push(t.match(/\'(.*)\'/)[1]):!/\'.*\'/g.test(t)&&/^[0-9]*$/g.test(t)?o.push(Number(t)):0===t.indexOf(r)||0===t.indexOf(r+".")?o.push(p._getVMRepeatVal(a,t,r)):void(n.repeatData&&Object.keys(n.repeatData).forEach(function(e){if(0===t.indexOf(e)||0===t.indexOf(e+"."))return o.push(p._getValueByValue(n.repeatData[e],t,e))})))}),o},t.prototype.bind=function(e,t,n,r,a,i,o,p){var s,u=e.repeatData[t];if(/^(\@)/.test(r)){if("model"===n)throw new Error("directive: nv-model can't use "+r+" as value");var c=this._getVMFunction(i,r),l=this._getVMFunctionArguments(i,r,e,t,p);s=c.apply(i,l)}else if(0===r.indexOf(t)||0===r.indexOf(t+"."))s=this._getVMRepeatVal(u,r,t);else if(/(\$\.).*/.test(r))s=this._getVMVal(i.state,r);else{if("$index"!==r)throw new Error("directive: nv-"+n+" can't use recognize this value "+r);s=a}e.hasChildNodes()||this.templateUpdater(e,u,t,i);var f=this[n+"Updater"];switch(n){case"model":var v=void 0;v=0===r.indexOf(t)||0===r.indexOf(t+".")?o:this._getVMVal(i.state,r),f&&f.call(this,e,s,r,t,a,v,i);break;case"text":case"html":case"if":case"class":case"key":f&&f.call(this,e,s);break;default:this.commonUpdater.call(this,e,s,n)}},t.prototype.templateUpdater=function(e,t,n,r){var a=e.textContent;if(/\{\{(.*)\}\}/g.test(a)){var i=a.match(/(\{\{[^\{\}]+?\}\})/g);if(i&&i.length>0)for(var o=0;o<i.length;o++){var p=i[o].replace("{{","").replace("}}",""),s=null;if(/^(\@)/.test(p)){var u=this._getVMFunction(r,p),c=this._getVMFunctionArguments(r,p,e,n,t);s=u.apply(r,c)}else if(0===p.indexOf(n)||0===p.indexOf(n+"."))s=this._getVMRepeatVal(t,p,n);else{if(!/(\$\.).*/.test(p))throw new Error("directive: {{"+p+"}} can't use recognize "+p);s=this._getVMVal(r.state,p)}e.textContent=e.textContent.replace(i[o],s)}}},t.prototype.modelUpdater=function(t,n,r,a,i,o,p){t.value=void 0===n?"":n;var s=this,u=function(t){if(t.preventDefault(),/(\$\.).*/.test(r)){var n=r.replace("$.","");if(t.target.value===o)return;p.state[n]=t.target.value}else{if(0!==r.indexOf(a)&&0!==r.indexOf(a+"."))throw new Error("directive: nv-model can't use recognize this value");if("object"!==e(o[i])&&(o[i]=t.target.value),"object"===e(o[i])){var u=s._getValueByValue(o[i],r,a);u=t.target.value,s._setValueByValue(o[i],r,a,u)}}};if(t.oninput=u,t.eventinput=u,t.eventTypes){var c=JSON.parse(t.eventTypes);c.push("input"),t.eventTypes=JSON.stringify(c)}t.eventTypes||(t.eventTypes=JSON.stringify(["input"]))},t.prototype.textUpdater=function(e,t){if("input"===e.tagName.toLocaleLowerCase())return e.value=t;e.textContent=void 0===t?"":t},t.prototype.htmlUpdater=function(e,t){e.innerHTML=void 0===t?"":t},t.prototype.ifUpdater=function(e,t){!t&&this.$fragment.contains(e)&&this.$fragment.removeChild(e)},t.prototype.classUpdater=function(e,t){if(t){var n=e.className,r=(n=n.replace(/\s$/,""))&&String(t)?" ":"";e.className=n+r+t}},t.prototype.keyUpdater=function(e,t){e.indiv_repeat_key=t},t.prototype.commonUpdater=function(e,t,n){t&&(e[n]=t),!t&&e[n]&&(e[n]=null)},t.prototype.eventHandler=function(e,t,n,r,a,i){var o=r.split(":")[1],p=this._getVMFunction(t,n),s=n.replace(/^(\@)/,"").match(/\((.*)\)/)[1].replace(/ /g,"").split(","),u=this,c=function(n){var r=this,o=[];s.forEach(function(p){return""!==p&&("$event"===p?o.push(n):"$element"===p?o.push(e):"true"===p||"false"===p?o.push("true"===p):/(\$\.).*/g.test(p)?o.push(u._getVMVal(t.state,p)):/\'.*\'/g.test(p)?o.push(p.match(/\'(.*)\'/)[1]):!/\'.*\'/g.test(p)&&/^[0-9]*$/g.test(p)?o.push(Number(p)):0===p.indexOf(a)||0===p.indexOf(a+".")?o.push(u._getVMRepeatVal(i,p,a)):void(r.repeatData&&Object.keys(r.repeatData).forEach(function(e){if(0===p.indexOf(e)||0===p.indexOf(e+"."))return o.push(u._getValueByValue(r.repeatData[e],p,e))})))}),p.apply(t,o)};if(o&&p){if(e["on"+o]=c,e["event"+o]=c,e.eventTypes){var l=JSON.parse(e.eventTypes);l.push(o),e.eventTypes=JSON.stringify(l)}e.eventTypes||(e.eventTypes=JSON.stringify([o]))}},t}();exports.CompileUtilForRepeat=t;var n=function(){function e(e){this.$fragment=e}return e.prototype._getValueByValue=function(e,t,n){var r=t.replace("()","").replace("$.","").split("."),a=e;return r.forEach(function(e,t){e===n&&0===t||(a=a[e])}),a},e.prototype._getVMVal=function(e,t){var n=t.replace("()","").replace("$.","").split("."),r=e;return n.forEach(function(e){r=r[e]}),r},e.prototype._getVMRepeatVal=function(e,t){var n=t.split(" ");return this._getVMVal(e.state,n[3])},e.prototype._getVMFunction=function(e,t){var n=t.replace(/^(\@)/,"").replace(/\(.*\)/,"").split("."),r=e;return n.forEach(function(e){r=r[e]}),r},e.prototype._getVMFunctionArguments=function(t,n,r){var a=n.replace(/^(\@)/,"").match(/\((.*)\)/)[1].replace(/\s+/g,"").split(","),i=[];return a.forEach(function(n){return""!==n&&("$element"===n?i.push(r):"true"===n||"false"===n?i.push("true"===n):/(\$\.).*/g.test(n)?i.push((new e)._getVMVal(t.state,n)):/\'.*\'/g.test(n)?i.push(n.match(/\'(.*)\'/)[1]):!/\'.*\'/g.test(n)&&/^[0-9]*$/g.test(n)?i.push(Number(n)):void 0)}),i},e.prototype.bind=function(e,t,n,r){var a=this[r+"Updater"];if(this.isRepeatNode(e))switch(r){case"repeat":a&&a.call(this,e,this._getVMRepeatVal(t,n),n,t)}else{var i=null;if(/^(\@)/.test(n)){if("model"===r)throw new Error("directive: nv-model can't use "+n+" as value");var o=this._getVMFunction(t,n),p=this._getVMFunctionArguments(t,n,e);i=o.apply(t,p)}else{if(!/(\$\.).*/.test(n))throw new Error("directive: nv-"+r+" can't use recognize this value "+n);i=this._getVMVal(t.state,n)}switch(r){case"model":a&&a.call(this,e,i,n,t);break;case"text":case"html":case"if":case"class":case"key":a&&a.call(this,e,i);break;default:this.commonUpdater.call(this,e,i,r)}e.removeAttribute("nv-"+r)}},e.prototype.templateUpdater=function(e,t,n){var r=n.replace("{{","").replace("}}",""),a=null;if(/^(\@)/.test(r)){var i=this._getVMFunction(t,r),o=this._getVMFunctionArguments(t,r,e);a=i.apply(t,o)}else{if(!/(\$\.).*/.test(r))throw new Error("directive: "+n+" can't use recognize this value");a=this._getVMVal(t.state,r)}e.textContent=e.textContent.replace(n,a)},e.prototype.modelUpdater=function(e,t,n,r){e.value=void 0===t?"":t;var a=n.replace("$.",""),i=function(e){e.preventDefault(),/(\$\.).*/.test(n)&&(r.state[a]=e.target.value)};if(e.oninput=i,e.eventinput=i,e.eventTypes){var o=JSON.parse(e.eventTypes);o.push("input"),e.eventTypes=JSON.stringify(o)}e.eventTypes||(e.eventTypes=JSON.stringify(["input"]))},e.prototype.textUpdater=function(e,t){if("input"===e.tagName.toLocaleLowerCase())return e.value=t;e.textContent=void 0===t?"":t},e.prototype.htmlUpdater=function(e,t){e.innerHTML=void 0===t?"":t},e.prototype.ifUpdater=function(e,t){!t&&this.$fragment.contains(e)&&this.$fragment.removeChild(e)},e.prototype.classUpdater=function(e,t){if(t){var n=e.className,r=(n=n.replace(/\s$/,""))&&String(t)?" ":"";e.className=n+r+t}},e.prototype.keyUpdater=function(e,t){e.indiv_repeat_key=t},e.prototype.commonUpdater=function(e,t,n){t&&(e[n]=t),!t&&e[n]&&(e[n]=null)},e.prototype.repeatUpdater=function(e,n,r,a){var i=this;if(n){if(n&&!(n instanceof Array))throw new Error("compile error: nv-repeat need an Array!");var o=r.split(" ")[1];n.forEach(function(p,s){var u={};u[o]=p,u.$index=s;var c=i.cloneNode(e,u),l=c.attributes,f=c.textContent;i.$fragment.insertBefore(c,e),c.removeAttribute("nv-repeat"),i.isTextNode(c)&&/\{\{(.*)\}\}/g.test(f)&&new t(i.$fragment).templateUpdater(c,p,o,a),l&&Array.from(l).forEach(function(e){var r=e.name;if(i.isDirective(r)&&"nv-repeat"!==r){var u=r.substring(3),l=e.value;i.isEventDirective(u)?new t(i.$fragment).eventHandler(c,a,l,u,o,p):new t(i.$fragment).bind(c,o,u,l,s,a,n,p),c.removeAttribute(r)}}),c.hasChildNodes()&&i.$fragment.contains(c)&&i.repeatChildrenUpdater(c,p,r,s,a,n)})}},e.prototype.repeatChildrenUpdater=function(n,r,a,i,o,p){var s=this,u=a.split(" ")[1];Array.from(n.childNodes).forEach(function(c){s.isElementNode(c)&&o.$components.find(function(e){return e.$selector===c.tagName.toLocaleLowerCase()})&&(c.isComponent=!0),c.repeatData=n.repeatData||{},c.repeatData[u]=r,c.repeatData.$index=i,s.isRepeatProp(c)&&c.setAttribute("_prop-"+u,JSON.stringify(r));var l=c.attributes,f=c.textContent;s.isTextNode(c)&&/\{\{(.*)\}\}/g.test(f)&&new t(n).templateUpdater(c,r,u,o),l&&Array.from(l).forEach(function(e){var a=e.name,l=e.value,f=a.substring(3);s.isDirective(a)&&"nv-repeat"!==a&&new RegExp("(^"+u+")|(^$.)|(^@)").test(l)&&(s.isEventDirective(f)?new t(n).eventHandler(c,o,l,f,u,r):new t(n).bind(c,u,f,l,i,o,p,r),c.removeAttribute(a))}),c.hasChildNodes()&&!s.isRepeatNode(c)&&n.contains(c)&&s.repeatChildrenUpdater(c,r,a,i,o,p);var v=c.attributes;if(v&&n.contains(c)){var h=Array.from(v).find(function(e){return s.isDirective(e.name)&&"nv-repeat"===e.name});if(h){var d=h.value.split(" ")[3];/^(\$\.)/.test(d)&&(new e(n).bind(c,o,h.value,h.name.substring(3)),n.contains(c)&&n.removeChild(c)),new RegExp("(^"+u+")").test(d)&&(new e(n).repeatUpdater(c,s._getValueByValue(r,d,u),h.value,o),n.contains(c)&&n.removeChild(c)),n.removeAttribute("nv-repeat")}}})},e.prototype.eventHandler=function(t,n,r,a){var i=a.split(":")[1],o=this._getVMFunction(n,r),p=r.replace(/^(\@)/,"").match(/\((.*)\)/)[1].replace(/\s+/g,"").split(","),s=function(r){var a=[];p.forEach(function(i){return""!==i&&("$event"===i?a.push(r):"$element"===i?a.push(t):"true"===i||"false"===i?a.push("true"===i):/(\$\.).*/g.test(i)?a.push((new e)._getVMVal(n.state,i)):/\'.*\'/g.test(i)?a.push(i.match(/\'(.*)\'/)[1]):!/\'.*\'/g.test(i)&&/^[0-9]*$/g.test(i)?a.push(Number(i)):void 0)}),o.apply(n,a)};if(i&&o){if(t["on"+i]=s,t["event"+i]=s,t.eventTypes){var u=JSON.parse(t.eventTypes);u.push(i),t.eventTypes=JSON.stringify(u)}t.eventTypes||(t.eventTypes=JSON.stringify([i]))}},e.prototype.isDirective=function(e){return 0===e.indexOf("nv-")},e.prototype.isEventDirective=function(e){return 0===e.indexOf("on")},e.prototype.isElementNode=function(e){return 1===e.nodeType},e.prototype.isRepeatNode=function(e){var t=e.attributes,n=!1;return t&&Array.from(t).forEach(function(e){"nv-repeat"===e.name&&(n=!0)}),n},e.prototype.isRepeatProp=function(e){var t=e.attributes;return!!t&&!!Array.from(t).find(function(e){return/^\{(.+)\}$/.test(e.value)})},e.prototype.isTextNode=function(e){return 3===e.nodeType},e.prototype.cloneNode=function(e,t){var n=e.cloneNode(!0);return e.eventTypes&&(JSON.parse(e.eventTypes).forEach(function(t){n["on"+t]=e["event"+t],n["event"+t]=e["event"+t]}),n.eventTypes=e.eventTypes),t&&(n.repeatData=t),e.isComponent&&(n.isComponent=!0),n},e}();exports.CompileUtil=n;
},{}],"twql":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../VirtualDOM"),n=e(require("../Utils")),i=require("../CompileUtils"),o=new n.default,r=function(){function e(e,n){if(this.$vm=n,this.$el=this.isElementNode(e)?e:document.querySelector(e),this.$el){this.$fragment=this.node2Fragment(),this.init();var i=t.parseToVnode(this.$el),o=t.parseToVnode(this.$fragment),r=[];t.diffVnode(i,o,r,this.needDiffChildCallback.bind(this)),t.renderVnode(r),this.$fragment=null,i=null,o=null,r=null}}return e.prototype.needDiffChildCallback=function(e,t){return t.node.isComponent&&e.node?(e.node.isComponent=!0,!1):e.tagName!==t.tagName||t.tagName!==this.$vm.$vm.$routeDOMKey.toLocaleUpperCase()},e.prototype.init=function(){this.compileElement(this.$fragment)},e.prototype.compileElement=function(e){var t=document.createElement("div");t.innerHTML=o.formatInnerHTML(this.$vm.$template);var n=t.childNodes;this.recursiveDOM(n,e)},e.prototype.recursiveDOM=function(e,t){var n=this;Array.from(e).forEach(function(e){n.isElementNode(e)&&n.$vm.$components.find(function(t){return t.$selector===e.tagName.toLocaleLowerCase()})&&(e.isComponent=!0),e.hasChildNodes()&&!n.isRepeatNode(e)&&n.recursiveDOM(e.childNodes,e),t.appendChild(e);var i=e.textContent;if(n.isElementNode(e)&&n.compile(e,t),n.isTextNode(e)&&/\{\{(.*)\}\}/g.test(i)){var o=i.match(/(\{\{[^\{\}]+?\}\})/g),r=o.length;if(o&&r>0)for(var a=0;a<r;a++)n.compileText(e,o[a])}n.isRepeatNode(e)&&t.contains(e)&&t.removeChild(e)})},e.prototype.compile=function(e,t){var n=this,o=e.attributes;o&&Array.from(o).forEach(function(o){var r=o.name;if(n.isDirective(r)){var a=r.substring(3),s=o.value,l=new i.CompileUtil(t);n.isEventDirective(a)?(l.eventHandler(e,n.$vm,s,a),e.removeAttribute(r)):l.bind(e,n.$vm,s,a)}})},e.prototype.node2Fragment=function(){return document.createDocumentFragment()},e.prototype.compileText=function(e,t){new i.CompileUtil(this.$fragment).templateUpdater(e,this.$vm,t)},e.prototype.isDirective=function(e){return 0===e.indexOf("nv-")},e.prototype.isEventDirective=function(e){return 0===e.indexOf("on")},e.prototype.isElementNode=function(e){return"string"!=typeof e&&1===e.nodeType},e.prototype.isRepeatNode=function(e){var t=e.attributes,n=!1;return t&&Array.from(t).forEach(function(e){"nv-repeat"===e.name&&(n=!0)}),n},e.prototype.isTextNode=function(e){return 3===e.nodeType},e}();exports.default=r;
},{"../VirtualDOM":"Wip4","../Utils":"H8Ea","../CompileUtils":"bsu5"}],"xHlA":[function(require,module,exports) {
"use strict";function e(e){return function(t){t.isSingletonMode=!0,e&&(t.isSingletonMode=e.isSingletonMode)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"K6bt":[function(require,module,exports) {
"use strict";function e(e){var t=Reflect.getMetadata("design:paramtypes",e);t&&t.length&&t.forEach(function(t){if(t===e)throw new Error("不可以依赖自身");e._needInjectedClass?e._needInjectedClass.push(t):e._needInjectedClass=[t]})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"zxui":[function(require,module,exports) {
"use strict";function e(e,s){var n=[];return e._needInjectedClass&&e._needInjectedClass.forEach(function(i){if(e.prototype.$providerList){var t=e.prototype.$providerList.get(i);if(t&&!t.useClass&&!t.useValue)return n.push(r(t,s));if(t&&t.useClass)return n.push(r(t.useClass,s));if(t&&t.useValue)return n.push(t.useValue)}var o=e._injectedProviders.has(i)?e._injectedProviders.get(i):s.$providers.find(function(e){return!e.provide&&e===i||!(!e.provide||e.provide!==i)}),u=null;if(!o||o.useClass||o.useValue||(u=o),o&&o.useClass&&(u=o.useClass),o&&o.useValue)return n.push(o.useValue);if(!u)throw new Error("injector injects service error: can't find provide: "+i.name+" in Component "+e);if(u&&!u.isSingletonMode&&n.push(r(u,s)),u&&u.isSingletonMode){var a=s.$providerInstances.has(i)?s.$providerInstances.get(i):null;if(a&&n.push(a),!a){var p=r(u,s);s.$providerInstances.set(i,p),n.push(p)}}}),e.injectTokens&&e.injectTokens.forEach(function(i){if(e.prototype.$providerList){var t=e.prototype.$providerList.get(i);if(t&&!t.useClass&&!t.useValue)throw new Error("injector injects service error: can't find provide: "+i+" in Component "+e);if(t&&t.useClass)return n.push(r(t.useClass,s));if(t&&t.useValue)return n.push(t.useValue)}var o=e._injectedProviders.has(i)?e._injectedProviders.get(i):s.$providers.find(function(e){return!(!e.provide||e.provide!==i)}),u=null;if(o&&!o.useClass&&!o.useValue)throw new Error("injector injects service error: can't find provide: "+i+" in Component "+e);if(o&&o.useClass&&(u=o.useClass),o&&o.useValue)return n.push(o.useValue);if(!u)throw new Error("injector injects service error: can't find provide: "+i+" in Component "+e);if(u&&!u.isSingletonMode&&n.push(r(u,s)),u&&u.isSingletonMode){var a=s.$providerInstances.has(i)?s.$providerInstances.get(i):null;if(a&&n.push(a),!a){var p=r(u,s);s.$providerInstances.set(i,p),n.push(p)}}}),n}function r(r,s){var n=e(r,s);return Reflect.construct(r,n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.injector=e,exports.factoryCreator=r;
},{}],"7ter":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./injectable");exports.Injectable=e.default;var r=require("./injected");exports.Injected=r.default;var t=require("./factory-creator");exports.injector=t.injector,exports.factoryCreator=t.factoryCreator;
},{"./injectable":"xHlA","./injected":"K6bt","./factory-creator":"zxui"}],"7Ulo":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var e=t(require("../Compile")),n=t(require("../Watcher")),r=t(require("../Utils")),o=require("../CompileUtils"),s=require("../DI"),i=new r.default;function a(t){return function(r){r.$selector=t.selector,r._injectedComponents=new Map;var a=r.prototype;if(a.$template=t.template,t.providers&&t.providers.length>0){a.$providerList=new Map;for(var c=t.providers.length,p=0;p<c;p++){var u=t.providers[p];u.provide?(u.useClass||u.useValue)&&a.$providerList.set(u.provide,u):a.$providerList.set(u,u)}}a.compileUtil=new o.CompileUtil,a.$components=[],a.$componentList=[],a.getLocation=function(){return i.isBrowser()?{path:this.$vm.$esRouteObject.path,query:this.$vm.$esRouteObject.query,params:this.$vm.$esRouteParmasObject,data:this.$vm.$esRouteObject.data}:{}},a.setLocation=function(t,e,n,r){if(i.isBrowser()){var o="/"===this.$vm.$rootPath?"":this.$vm.$rootPath;history.pushState({path:t,query:e,data:n},r,""+o+t+i.buildQuery(e)),this.$vm.$esRouteObject={path:t,query:e,data:n}}},a.watchData=function(){this.state&&(this.nvWatchState&&(this.stateWatcher=new n.default(this.state,this.nvWatchState.bind(this),this.reRender.bind(this))),this.nvWatchState||(this.stateWatcher=new n.default(this.state,null,this.reRender.bind(this))))},a.render=function(){var n=this,r=this.renderDom;return Promise.resolve().then(function(){new e.default(r,n);n.mountComponent(r);for(var t=n.$componentList.length,o=0;o<t;o++){var s=n.$componentList[o];s.scope.render&&s.scope.render(),s.scope.nvAfterMount&&s.scope.nvAfterMount()}return n.nvHasRender&&n.nvHasRender(),n}).catch(function(e){throw new Error("component "+t.selector+" render failed: "+e)})},a.reRender=function(){var n=this,r=this.renderDom;return Promise.resolve().then(function(){new e.default(r,n);n.mountComponent(r);for(var t=n.$componentList.length,o=0;o<t;o++){var s=n.$componentList[o];s.scope.render&&s.scope.reRender(),s.scope.nvAfterMount&&s.scope.nvAfterMount()}return n.nvHasRender&&n.nvHasRender(),n}).catch(function(e){throw new Error("component "+t.selector+" render failed: "+e)})},a.mountComponent=function(t){var e=this.$componentList.slice();this.componentsConstructor(t);for(var n=this.$componentList.length,r=function(t){var n=o.$componentList[t],r=e.findIndex(function(t){return t.dom===n.dom}),s=e[r];-1!==r&&e.splice(r,1),s?(n.scope=s.scope,i.isEqual(n.scope.props,n.props)||(n.scope.nvReceiveProps&&n.scope.nvReceiveProps(n.props),n.scope.props=n.props)):n.scope=o.buildComponentScope(n.constructorFunction,n.props,n.dom),n.scope.$vm=o.$vm,n.scope.$components=o.$components,n.scope.nvOnInit&&!s&&n.scope.nvOnInit(),n.scope.watchData&&n.scope.watchData(),n.scope.nvBeforeMount&&n.scope.nvBeforeMount()},o=this,s=0;s<n;s++)r(s);var a=e.length;for(s=0;s<a;s++){var c=e[s];c.scope.nvOnDestory&&c.scope.nvOnDestory()}},a.componentsConstructor=function(t){var e=this;this.$componentList=[];var n=t.querySelectorAll(this.$vm.$routeDOMKey)[0];this.constructor._injectedComponents.forEach(function(t,n){e.$components.find(function(t){return t.$selector===n})||e.$components.push(t)});for(var r=this.$components.length,s=function(r){var s=i.$components[r].$selector,c=t.getElementsByTagName(s);Array.from(c).forEach(function(t){if((!n||!n.contains(t))&&t.isComponent){var s=t.attributes,i={};if(s){var c=Array.from(s),p={};c.forEach(function(e){/^\_prop\-(.+)/.test(e.name)&&(p[e.name.replace("_prop-","")]=JSON.parse(e.value),t.removeAttribute(e.name))}),c.forEach(function(n){var r=n.name;if(!/^\_prop\-(.+)/.test(r)){var s=r.split("-");s.length>1&&s.forEach(function(t,e){0===e&&(r=t),0!==e&&(r+=t.toLowerCase().replace(/( |^)[a-z]/g,function(t){return t.toUpperCase()}))});var c=/^\{(.+)\}$/.exec(n.value);if(c){var u=c[1].split("."),h=u[0],l=null;if(/^(\$\.).*/g.test(c[1]))return l=e.compileUtil._getVMVal(e.state,c[1]),void(i[r]=e.buildProps(l));if(/^(\@.).*\(.*\)$/g.test(c[1])){var f=new o.CompileUtilForRepeat,v=f._getVMFunction(a,c[1]),d=c[1].replace(/^(\@)/,"").match(/\((.*)\)/)[1].replace(/\s+/g,"").split(","),m=[];d.forEach(function(e){return""!==e&&("$element"===e?m.push(t):"true"===e||"false"===e?m.push("true"===e):/(\$\.).*/g.test(e)?m.push(f._getVMVal(a.state,e)):/\'.*\'/g.test(e)?m.push(e.match(/\'(.*)\'/)[1]):!/\'.*\'/g.test(e)&&/^[0-9]*$/g.test(e)?m.push(Number(e)):void(t.repeatData&&Object.keys(t.repeatData).forEach(function(n){if(0===e.indexOf(n)||0===e.indexOf(n+"."))return m.push(f._getValueByValue(t.repeatData[n],e,n))})))});var $=v.apply(a,m);return void(i[r]=$)}if(/^(\@.).*[^\(.*\)]$/g.test(c[1]))return l=e.compileUtil._getVMVal(e,c[1].replace(/^(\@)/,"")),void(i[r]=e.buildProps(l));if(p.hasOwnProperty(h))return l=e.getPropsValue(u,p[h]),void(i[r]=e.buildProps(l));if(t.repeatData&&null!==t.repeatData[h])return l=e.compileUtil._getValueByValue(t.repeatData[h],c[1],h),void(i[r]=e.buildProps(l))}"indiv_repeat_key"!==n.name&&t.removeAttribute(r)}})}e.$componentList.push({dom:t,props:i,scope:null,constructorFunction:e.$components[r]}),t.isComponent=!1}})},i=this,c=0;c<r;c++)s(c)},a.setState=function(t){if(t&&i.isFunction(t)){var e=t();if(e&&e instanceof Object){if(i.isEqual(this.state,e))return;var r=JSON.parse(JSON.stringify(this.state));Object.assign(r,e),this.state=r,this.nvWatchState&&(this.stateWatcher=new n.default(this.state,this.nvWatchState.bind(this),this.reRender.bind(this))),this.nvWatchState||(this.stateWatcher=new n.default(this.state,null,this.reRender.bind(this))),this.reRender()}}if(t&&t instanceof Object){if(i.isEqual(this.state,t))return;r=JSON.parse(JSON.stringify(this.state));Object.assign(r,t),this.state=r,this.nvWatchState&&(this.stateWatcher=new n.default(this.state,this.nvWatchState.bind(this),this.reRender.bind(this))),this.nvWatchState||(this.stateWatcher=new n.default(this.state,null,this.reRender.bind(this))),this.reRender()}},a.getPropsValue=function(t,e){var n=e;return t.forEach(function(t,e){0!==e&&(n=n[t])}),n},a.buildProps=function(t){return i.isFunction(t)?t.bind(this):t},a.buildComponentScope=function(t,e,n){var r=s.factoryCreator(t,this.$vm.$rootModule);return r.props=e,r.renderDom=n,r.$components=this.$components,r}}}exports.default=a;
},{"../Compile":"twql","../Watcher":"w9Fr","../Utils":"H8Ea","../CompileUtils":"bsu5","../DI":"7ter"}],"hGW1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./compile");exports.ICompile=e.ICompile;var r=require("./compileUtils");exports.ICompileUtilForRepeat=r.ICompileUtilForRepeat,exports.ICompileUtil=r.ICompileUtil;var t=require("./component");exports.ComponentList=t.ComponentList,exports.IComponent=t.IComponent;var o=require("./indiv");exports.IMiddleware=o.IMiddleware,exports.EsRouteObject=o.EsRouteObject,exports.IInDiv=o.IInDiv;var i=require("./nvModule");exports.INvModule=i.INvModule,exports.TInjectTokenProvider=i.TInjectTokenProvider,exports.TUseClassProvider=i.TUseClassProvider,exports.TuseValueProvider=i.TuseValueProvider;var s=require("./keyWatcher");exports.IKeyWatcher=s.IKeyWatcher;var p=require("./router");exports.TRouter=p.TRouter,exports.IRouter=p.IRouter;var u=require("./utils");exports.IUtil=u.IUtil;var a=require("./virtualDOM");exports.IVnode=a.IVnode,exports.TAttributes=a.TAttributes,exports.IPatchList=a.IPatchList;var I=require("./watcher");exports.TFnWatcher=I.TFnWatcher,exports.TFnRender=I.TFnRender,exports.IWatcher=I.IWatcher;
},{"./compile":"OPet","./compileUtils":"OPet","./component":"OPet","./indiv":"OPet","./nvModule":"OPet","./keyWatcher":"OPet","./router":"OPet","./utils":"OPet","./virtualDOM":"OPet","./watcher":"OPet"}],"JJ5c":[function(require,module,exports) {
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(n,i){function s(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(t){t.done?n(t.value):new r(function(e){e(t.value)}).then(s,u)}a((o=o.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var r,o,n,i,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(n=2&i[0]?o.return:i[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,i[1])).done)return n;switch(o=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=o(require("../Utils")),i=o(require("../KeyWatcher")),s=require("../types");exports.TRouter=s.TRouter;var u=new n.default,a=function(){function o(){this.routes=[],this.routesList=[],this.currentUrl="",this.lastRoute=null,this.rootDom=null,this.$rootPath="/",this.hasRenderComponentList=[],this.needRedirectPath=null,this.$vm=null,this.watcher=null,this.renderRouteList=[]}return o.prototype.bootstrap=function(t){var e=this;this.$vm=t,this.$vm.setRootPath(this.$rootPath),this.$vm.$canRenderModule=!1,this.$vm.$routeDOMKey="router-render",u.isBrowser()&&(window.addEventListener("load",this.refresh.bind(this),!1),window.addEventListener("popstate",function(){var t;t="/"===e.$rootPath?location.pathname||"/":""===location.pathname.replace(e.$rootPath,"")?"/":location.pathname.replace(e.$rootPath,""),e.$vm.$esRouteObject={path:t,query:{},data:null},e.$vm.$esRouteParmasObject={}},!1))},o.prototype.init=function(t){if(u.isBrowser()){if(!(t&&t instanceof Array))throw new Error("route error: no routes exit");var e=document.querySelector("#root");this.rootDom=e||null,this.routes=t,this.routesList=[]}},o.prototype.setRootPath=function(t){if(!t||"string"!=typeof t)throw new Error("route error: rootPath is not defined or rootPath must be a String");this.$rootPath=t},o.prototype.redirectTo=function(t){var e="/"===this.$rootPath?"":this.$rootPath;history.replaceState(null,null,""+e+t),this.$vm.$esRouteObject={path:t||"/",query:{},data:null},this.$vm.$esRouteParmasObject={}},o.prototype.refresh=function(){if(!this.$vm.$esRouteObject||!this.watcher){var t=void 0;t="/"===this.$rootPath?location.pathname||"/":""===location.pathname.replace(this.$rootPath,"")?"/":location.pathname.replace(this.$rootPath,""),this.$vm.$esRouteObject={path:t,query:{},data:null},this.$vm.$esRouteParmasObject={},this.watcher=new i.default(this.$vm,"$esRouteObject",this.refresh.bind(this))}this.currentUrl=this.$vm.$esRouteObject.path||"/",this.routesList=[],this.renderRouteList="/"===this.currentUrl?["/"]:this.currentUrl.split("/"),this.renderRouteList[0]="/",this.distributeRoutes()},o.prototype.distributeRoutes=function(){return e(this,void 0,Promise,function(){return r(this,function(t){switch(t.label){case 0:return this.lastRoute&&this.lastRoute!==this.currentUrl?(this.$vm.$esRouteParmasObject={},[4,this.insertRenderRoutes()]):[3,2];case 1:return t.sent(),[3,4];case 2:return[4,this.generalDistributeRoutes()];case 3:t.sent(),t.label=4;case 4:return this.routeChange&&this.routeChange(this.lastRoute,this.currentUrl),this.lastRoute=this.currentUrl,this.needRedirectPath&&(this.redirectTo(this.needRedirectPath),this.needRedirectPath=null),[2]}})})},o.prototype.insertRenderRoutes=function(){return e(this,void 0,Promise,function(){var e,o,n,i,s;return r(this,function(u){switch(u.label){case 0:(e="/"===this.lastRoute?["/"]:this.lastRoute.split("/"))[0]="/",o=function(t){var o,i,s,u,a,h,c,l,p,d;return r(this,function(r){switch(r.label){case 0:if(o=n.renderRouteList[t],0===t){if(!(i=n.routes.find(function(t){return t.path===""+o||/^\/\:.+/.test(t.path)})))throw new Error("route error: wrong route instantiation in insertRenderRoutes: "+n.currentUrl);n.routesList.push(i)}else{if(!((s=n.routesList[t-1].children)&&s instanceof Array))throw new Error("route error: routes not exit or routes must be an array!");if(!(u=s.find(function(t){return t.path==="/"+o||/^\/\:.+/.test(t.path)})))throw new Error("route error: wrong route instantiation: "+n.currentUrl);n.routesList.push(u)}if(o===e[t])return[3,3];if(!(a=n.routesList[t]))throw new Error("route error: wrong route instantiation in insertRenderRoutes: "+n.currentUrl);if(h=n.$vm.$components.find(function(t){return t.$selector===a.component}),p=document.querySelectorAll("router-render")[t-1],!a.component&&!a.redirectTo)throw new Error("route error: path "+a.path+" need a component which has children path or need a  redirectTo which has't children path");return/^\/\:.+/.test(a.path)&&!a.redirectTo&&(l=a.path.split("/:")[1],n.$vm.$esRouteParmasObject[l]=o),h?[4,n.instantiateComponent(h,p)]:[3,2];case 1:if(!(c=r.sent()))throw new Error("route error: path "+a.path+" need a component");n.hasRenderComponentList[t]&&n.hasRenderComponentList.splice(t,0,c),n.hasRenderComponentList[t]||(n.hasRenderComponentList[t]=c),n.routerChangeEvent(t),r.label=2;case 2:if(a.redirectTo&&/^\/.*/.test(a.redirectTo)&&t+1===n.renderRouteList.length)return n.needRedirectPath=a.redirectTo,[2,{value:void 0}];r.label=3;case 3:return o===e[t]&&(d=n.routesList[t],/^\/\:.+/.test(d.path)&&!d.redirectTo&&(l=d.path.split("/:")[1],n.$vm.$esRouteParmasObject[l]=o)),t===n.renderRouteList.length-1&&t<e.length-1&&(p=document.querySelectorAll("router-render")[t],n.routerChangeEvent(t),p&&p.hasChildNodes()&&p.removeChild(p.childNodes[0]),(d=n.routesList[t]).redirectTo&&/^\/.*/.test(d.redirectTo)&&t+1===n.renderRouteList.length)?(n.needRedirectPath=d.redirectTo,[2,{value:void 0}]):[2]}})},n=this,i=0,u.label=1;case 1:return i<this.renderRouteList.length?[5,o(i)]:[3,4];case 2:if("object"===(void 0===(s=u.sent())?"undefined":t(s)))return[2,s.value];u.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},o.prototype.generalDistributeRoutes=function(){return e(this,void 0,Promise,function(){var e,o,n,i;return r(this,function(s){switch(s.label){case 0:e=function(t){var e,n,i,s,a,h,c,l,p;return r(this,function(r){switch(r.label){case 0:if(e=o.renderRouteList[t],0!==t)return[3,2];if(!(n=o.routes.find(function(t){return t.path===""+e||/^\/\:.+/.test(t.path)})))throw new Error("route error: wrong route instantiation in generalDistributeRoutes: "+o.currentUrl);if(h=null,!o.$vm.$rootModule.$components.find(function(t){return t.$selector===n.component}))throw new Error("route error: path "+n.path+" is undefined");return h=o.$vm.$rootModule.$components.find(function(t){return t.$selector===n.component}),/^\/\:.+/.test(n.path)&&(c=n.path.split("/:")[1],o.$vm.$esRouteParmasObject[c]=e),u.isBrowser()?(i=document.querySelector("#root"),o.routesList.push(n),[4,o.instantiateComponent(h,i)]):[2,{value:void 0}];case 1:return(p=r.sent())&&o.hasRenderComponentList.push(p),t===o.renderRouteList.length-1&&o.routerChangeEvent(t),n.redirectTo&&/^\/.*/.test(n.redirectTo)&&t+1===o.renderRouteList.length?(o.needRedirectPath=n.redirectTo,o.renderRouteList.push(n.redirectTo),[2,{value:void 0}]):[3,5];case 2:if(!((s=o.routesList[t-1].children)&&s instanceof Array))throw new Error("route error: routes not exit or routes must be an array!");if(!(a=s.find(function(t){return t.path==="/"+e||/^\/\:.+/.test(t.path)})))throw new Error("route error: wrong route instantiation: "+o.currentUrl);if(h=null,o.$vm.$rootModule.$components.find(function(t){return t.$selector===a.component})&&(h=o.$vm.$rootModule.$components.find(function(t){return t.$selector===a.component})),!a.component&&!a.redirectTo)throw new Error("route error: path "+a.path+" need a component which has children path or need a  redirectTo which has't children path");return/^\/\:.+/.test(a.path)&&(c=a.path.split("/:")[1],o.$vm.$esRouteParmasObject[c]=e),l=document.querySelectorAll("router-render")[t-1],o.routesList.push(a),h?[4,o.instantiateComponent(h,l)]:[3,4];case 3:(p=r.sent())&&o.hasRenderComponentList.push(p),r.label=4;case 4:if(t===o.renderRouteList.length-1&&o.routerChangeEvent(t),a.redirectTo&&/^\/.*/.test(a.redirectTo)&&t+1===o.renderRouteList.length)return o.needRedirectPath=a.redirectTo,[2,{value:void 0}];r.label=5;case 5:return[2]}})},o=this,n=0,s.label=1;case 1:return n<this.renderRouteList.length?[5,e(n)]:[3,4];case 2:if("object"===(void 0===(i=s.sent())?"undefined":t(i)))return[2,i.value];s.label=3;case 3:return n++,[3,1];case 4:return[2]}})})},o.prototype.routerChangeEvent=function(t){var e=this;this.hasRenderComponentList.forEach(function(r,o){r.nvRouteChange&&r.nvRouteChange(e.lastRoute,e.currentUrl),e.emitComponentEvent(r.$componentList,"nvRouteChange"),o>=t+1&&(r.nvOnDestory&&r.nvOnDestory(),e.emitComponentEvent(r.$componentList,"nvOnDestory"))}),this.hasRenderComponentList.length=t+1},o.prototype.emitComponentEvent=function(t,e){var r=this;"nvRouteChange"===e&&t.forEach(function(t){t.scope.nvRouteChange&&t.scope.nvRouteChange(r.lastRoute,r.currentUrl),r.emitComponentEvent(t.scope.$componentList,e)}),"nvOnDestory"===e&&t.forEach(function(t){t.scope.nvOnDestory&&t.scope.nvOnDestory(),r.emitComponentEvent(t.scope.$componentList,e)})},o.prototype.instantiateComponent=function(t,e){return this.$vm.renderComponent(t,e)},o}();exports.Router=a;
},{"../Utils":"H8Ea","../KeyWatcher":"9pTu","../types":"hGW1"}],"Kb/p":[function(require,module,exports) {
"use strict";function e(e){return function(s){var t=s.prototype;t.$providerList=new Map,t.$providerInstances=new Map,e.imports&&(t.$imports=e.imports),e.components&&(t.$components=e.components),e.providers&&(t.$providers=e.providers),e.exports&&(t.$exports=e.exports),e.bootstrap&&(t.$bootstrap=e.bootstrap),t.buildProviderList=function(){if(this.$providers)for(var e=this.$providers.length,o=0;o<e;o++){var s=this.$providers[o];s.provide?(s.useClass||s.useValue)&&this.$providerList.set(s.provide,s):this.$providerList.set(s,s)}},t.buildProviders4Services=function(){if(this.$providers)for(var e=this.$providers.length,o=function(e){var o=s.$providers[e];o.provide?o.useClass&&(o.useClass._injectedProviders||(o.useClass._injectedProviders=new Map),s.$providerList.forEach(function(e,s){o.useClass._injectedProviders.has(s)||o.useClass._injectedProviders.set(s,e)})):(o._injectedProviders||(o._injectedProviders=new Map),s.$providerList.set(o,o))},s=this,t=0;t<e;t++)o(t)},t.buildProviders4Components=function(){if(this.$providers&&this.$components)for(var e=this.$components.length,o=function(e){var o=s.$components[e];o._injectedProviders||(o._injectedProviders=new Map),s.$providerList.forEach(function(e,s){o._injectedProviders.has(s)||o._injectedProviders.set(s,e)})},s=this,t=0;t<e;t++)o(t)},t.buildComponents4Components=function(){if(this.$components)for(var e=this.$components.length,o=function(e){var o=s.$components[e];o._injectedComponents||(o._injectedComponents=new Map),s.$components.forEach(function(e){o._injectedComponents.has(e.$selector)||o._injectedComponents.set(e.$selector,e)})},s=this,t=0;t<e;t++)o(t)},t.buildImports=function(){if(this.$imports)for(var e=this.$imports.length,s=0;s<e;s++)for(var t=o(this.$imports[s]),r=t.$exports.length,i=function(e){var o=t.$exports[e];n.$components.find(function(e){return e.$selector===o.$selector})||n.$components.push(o)},n=this,p=0;p<r;p++)i(p)}}}function o(e){var o=new e;return o.buildProviderList(),o.buildProviders4Services(),o.buildComponents4Components(),o.buildProviders4Components(),o.buildImports(),o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.NvModule=e,exports.factoryModule=o;
},{}],"QanZ":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var o=t(require("../Utils")),e=require("../DI"),r=require("../NvModule"),n=new o.default,i=function(){function t(){this.modalList=[],n.isBrowser()&&(this.rootDom=document.querySelector("#root"),this.$rootPath="/",this.$canRenderModule=!0,this.$routeDOMKey="router-render",this.$rootModule=null,this.$esRouteObject=null,this.$esRouteParmasObject={})}return t.prototype.use=function(t){return t.bootstrap(this),this.modalList.push(t),this.modalList.findIndex(function(o){return n.isEqual(o,t)})},t.prototype.setRootPath=function(t){if(!t||"string"!=typeof t)throw new Error("rootPath is not defined or rootPath must be a String");this.$rootPath=t},t.prototype.bootstrapModule=function(t){if(!t)throw new Error("must send a root module");this.$rootModule=r.factoryModule(t),this.$components=this.$rootModule.$components.slice()},t.prototype.init=function(){if(n.isBrowser()){if(!this.$rootModule)throw new Error("must use bootstrapModule to declare a root NvModule before init");this.$canRenderModule&&this.renderModuleBootstrap()}},t.prototype.renderModuleBootstrap=function(){if(!this.$rootModule.$bootstrap)throw new Error("need bootstrap for render Module Bootstrap");var t=this.$rootModule.$bootstrap;this.renderComponent(t,this.rootDom)},t.prototype.renderComponent=function(t,o){var r=e.factoryCreator(t,this.$rootModule);if(r.$vm=this,r.$components=this.$rootModule.$components,r.nvOnInit&&r.nvOnInit(),r.watchData&&r.watchData(),!r.$template)throw new Error("must decaler this.$template in bootstrap()");var n=r.$template;if(n&&"string"==typeof n&&o)return r.nvBeforeMount&&r.nvBeforeMount(),this.replaceDom(r,o).then(function(t){return t.nvAfterMount&&t.nvAfterMount(),t});throw new Error("renderBootstrap failed: template or rootDom is not exit")},t.prototype.replaceDom=function(t,o){return t.renderDom=o,t.render()},t}();exports.default=i;
},{"../Utils":"H8Ea","../DI":"7ter","../NvModule":"Kb/p"}],"ED/T":[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],"p/oJ":[function(require,module,exports) {
function t(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(n){return"function"==typeof n.readFloatLE&&"function"==typeof n.slice&&t(n.slice(0,0))}module.exports=function(o){return null!=o&&(t(o)||n(o)||!!o._isBuffer)};
},{}],"S1cf":[function(require,module,exports) {
"use strict";var e=require("./helpers/bind"),r=require("is-buffer"),n=Object.prototype.toString;function t(e){return"[object Array]"===n.call(e)}function i(e){return"[object ArrayBuffer]"===n.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function f(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function c(e){return"number"==typeof e}function a(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function s(e){return"[object Date]"===n.call(e)}function p(e){return"[object File]"===n.call(e)}function y(e){return"[object Blob]"===n.call(e)}function d(e){return"[object Function]"===n.call(e)}function b(e){return l(e)&&d(e.pipe)}function j(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function B(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),t(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}function A(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=A(e[n],r):e[n]=r}for(var n=0,t=arguments.length;n<t;n++)v(arguments[n],r);return e}function g(r,n,t){return v(n,function(n,i){r[i]=t&&"function"==typeof n?e(n,t):n}),r}module.exports={isArray:t,isArrayBuffer:i,isBuffer:r,isFormData:o,isArrayBufferView:f,isString:u,isNumber:c,isObject:l,isUndefined:a,isDate:s,isFile:p,isBlob:y,isFunction:d,isStream:b,isURLSearchParams:j,isStandardBrowserEnv:B,forEach:v,merge:A,extend:g,trim:m};
},{"./helpers/bind":"ED/T","is-buffer":"p/oJ"}],"M8l6":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":"S1cf"}],"YdsM":[function(require,module,exports) {
"use strict";module.exports=function(e,o,r,s,t){return e.config=o,r&&(e.code=r),e.request=s,e.response=t,e};
},{}],"3bIi":[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":"YdsM"}],"aS8y":[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":"3bIi"}],"H6Qo":[function(require,module,exports) {
"use strict";var e=require("./../utils");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(e.isURLSearchParams(n))a=n.toString();else{var c=[];e.forEach(n,function(i,n){null!=i&&(e.isArray(i)?n+="[]":i=[i],e.forEach(i,function(i){e.isDate(i)?i=i.toISOString():e.isObject(i)&&(i=JSON.stringify(i)),c.push(r(n)+"="+r(i))}))}),a=c.join("&")}return a&&(i+=(-1===i.indexOf("?")?"?":"&")+a),i};
},{"./../utils":"S1cf"}],"ZeD7":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":"S1cf"}],"/w7L":[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return r=a(window.location.href),function(e){var o=t.isString(e)?a(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return!0};
},{"./../utils":"S1cf"}],"mmkS":[function(require,module,exports) {
"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(){this.message="String contains an invalid character"}function o(o){for(var e,a,n=String(o),c="",i=0,h=r;n.charAt(0|i)||(h="=",i%1);c+=h.charAt(63&e>>8-i%1*8)){if((a=n.charCodeAt(i+=.75))>255)throw new t;e=e<<8|a}return c}t.prototype=new Error,t.prototype.code=5,t.prototype.name="InvalidCharacterError",module.exports=o;
},{}],"dn2M":[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":"S1cf"}],"KRuG":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),o=require("./../helpers/buildURL"),t=require("./../helpers/parseHeaders"),n=require("./../helpers/isURLSameOrigin"),s=require("../core/createError"),i="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||require("./../helpers/btoa");module.exports=function(a){return new Promise(function(u,d){var l=a.data,p=a.headers;e.isFormData(l)&&delete p["Content-Type"];var f=new XMLHttpRequest,c="onreadystatechange",w=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||n(a.url)||(f=new window.XDomainRequest,c="onload",w=!0,f.onprogress=function(){},f.ontimeout=function(){}),a.auth){var h=a.auth.username||"",m=a.auth.password||"";p.Authorization="Basic "+i(h+":"+m)}if(f.open(a.method.toUpperCase(),o(a.url,a.params,a.paramsSerializer),!0),f.timeout=a.timeout,f[c]=function(){if(f&&(4===f.readyState||w)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in f?t(f.getAllResponseHeaders()):null,o={data:a.responseType&&"text"!==a.responseType?f.response:f.responseText,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:e,config:a,request:f};r(u,d,o),f=null}},f.onerror=function(){d(s("Network Error",a,null,f)),f=null},f.ontimeout=function(){d(s("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",f)),f=null},e.isStandardBrowserEnv()){var y=require("./../helpers/cookies"),q=(a.withCredentials||n(a.url))&&a.xsrfCookieName?y.read(a.xsrfCookieName):void 0;q&&(p[a.xsrfHeaderName]=q)}if("setRequestHeader"in f&&e.forEach(p,function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete p[r]:f.setRequestHeader(r,e)}),a.withCredentials&&(f.withCredentials=!0),a.responseType)try{f.responseType=a.responseType}catch(e){if("json"!==a.responseType)throw e}"function"==typeof a.onDownloadProgress&&f.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){f&&(f.abort(),d(e),f=null)}),void 0===l&&(l=null),f.send(l)})};
},{"./../utils":"S1cf","./../core/settle":"aS8y","./../helpers/buildURL":"H6Qo","./../helpers/parseHeaders":"ZeD7","./../helpers/isURLSameOrigin":"/w7L","../core/createError":"3bIi","./../helpers/btoa":"mmkS","./../helpers/cookies":"dn2M"}],"BXyq":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("./utils"),r=require("./helpers/normalizeHeaderName"),n={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function i(){var t;return"undefined"!=typeof XMLHttpRequest?t=require("./adapters/xhr"):void 0!==e&&(t=require("./adapters/http")),t}var o={adapter:i(),transformRequest:[function(e,n){return r(n,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){o.headers[e]={}}),t.forEach(["post","put","patch"],function(e){o.headers[e]=t.merge(n)}),module.exports=o;
},{"./utils":"S1cf","./helpers/normalizeHeaderName":"M8l6","./adapters/xhr":"KRuG","./adapters/http":"KRuG","process":"KIG8"}],"rj2i":[function(require,module,exports) {
"use strict";var t=require("./../utils");function e(){this.handlers=[]}e.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},e.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},e.prototype.forEach=function(e){t.forEach(this.handlers,function(t){null!==t&&e(t)})},module.exports=e;
},{"./../utils":"S1cf"}],"woEt":[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":"S1cf"}],"V3+0":[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],"7/2Y":[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],"a2Uu":[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],"uz6X":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./transformData"),a=require("../cancel/isCancel"),s=require("../defaults"),t=require("./../helpers/isAbsoluteURL"),n=require("./../helpers/combineURLs");function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}module.exports=function(d){return o(d),d.baseURL&&!t(d.url)&&(d.url=n(d.baseURL,d.url)),d.headers=d.headers||{},d.data=r(d.data,d.headers,d.transformRequest),d.headers=e.merge(d.headers.common||{},d.headers[d.method]||{},d.headers||{}),e.forEach(["delete","get","head","post","put","patch","common"],function(e){delete d.headers[e]}),(d.adapter||s.adapter)(d).then(function(e){return o(d),e.data=r(e.data,e.headers,d.transformResponse),e},function(e){return a(e)||(o(d),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,d.transformResponse))),Promise.reject(e)})};
},{"./../utils":"S1cf","./transformData":"woEt","../cancel/isCancel":"V3+0","../defaults":"BXyq","./../helpers/isAbsoluteURL":"7/2Y","./../helpers/combineURLs":"a2Uu"}],"OvAf":[function(require,module,exports) {
"use strict";var e=require("./../defaults"),t=require("./../utils"),r=require("./InterceptorManager"),o=require("./dispatchRequest");function s(e){this.defaults=e,this.interceptors={request:new r,response:new r}}s.prototype.request=function(r){"string"==typeof r&&(r=t.merge({url:arguments[0]},arguments[1])),(r=t.merge(e,{method:"get"},this.defaults,r)).method=r.method.toLowerCase();var s=[o,void 0],u=Promise.resolve(r);for(this.interceptors.request.forEach(function(e){s.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});s.length;)u=u.then(s.shift(),s.shift());return u},t.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(r,o){return this.request(t.merge(o||{},{method:e,url:r}))}}),t.forEach(["post","put","patch"],function(e){s.prototype[e]=function(r,o,s){return this.request(t.merge(s||{},{method:e,url:r,data:o}))}}),module.exports=s;
},{"./../defaults":"BXyq","./../utils":"S1cf","./InterceptorManager":"rj2i","./dispatchRequest":"uz6X"}],"mI+K":[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],"tsWd":[function(require,module,exports) {
"use strict";var e=require("./Cancel");function n(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;n(function(n){r.reason||(r.reason=new e(n),o(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(n){e=n}),cancel:e}},module.exports=n;
},{"./Cancel":"mI+K"}],"X8jb":[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],"nUiQ":[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./helpers/bind"),n=require("./core/Axios"),t=require("./defaults");function u(t){var u=new n(t),l=r(n.prototype.request,u);return e.extend(l,n.prototype,u),e.extend(l,u),l}var l=u(t);l.Axios=n,l.create=function(r){return u(e.merge(t,r))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),module.exports=l,module.exports.default=l;
},{"./utils":"S1cf","./helpers/bind":"ED/T","./core/Axios":"OvAf","./defaults":"BXyq","./cancel/Cancel":"mI+K","./cancel/CancelToken":"tsWd","./cancel/isCancel":"V3+0","./helpers/spread":"X8jb"}],"dZBD":[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":"nUiQ"}],"VWVa":[function(require,module,exports) {
"use strict";var t=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var n=t(require("axios")),e=function(){function t(){}return t.prototype.get=function(t,e){return new Promise(function(o,u){var a=e?{params:e}:null;n.default.get(t,a).then(function(t){o(t.data)}).catch(function(t){u(t.response.data)})})},t.prototype.delete=function(t,e){return new Promise(function(o,u){var a=e?{params:e}:null;n.default.delete(t,a).then(function(t){o(t.data)}).catch(function(t){u(t.response.data)})})},t.prototype.post=function(t,e){return new Promise(function(o,u){n.default.post(t,e).then(function(t){o(t.data)}).catch(function(t){u(t.response.data)})})},t.prototype.put=function(t,e){return new Promise(function(o,u){n.default.put(t,e).then(function(t){o(t.data)}).catch(function(t){u(t.response.data)})})},t.prototype.patch=function(t,e){return new Promise(function(o,u){n.default.patch(t,e).then(function(t){o(t.data)}).catch(function(t){u(t.response.data)})})},t}();exports.default=e;
},{"axios":"dZBD"}],"7QCb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("core-js/modules/es6.array.find"),require("core-js/modules/es6.array.find-index"),require("core-js/modules/es6.array.for-each"),require("core-js/modules/es6.array.from"),require("core-js/modules/es6.array.index-of"),require("core-js/modules/es6.array.map"),require("core-js/modules/es6.array.sort"),require("core-js/modules/es6.object.define-property"),require("core-js/modules/es6.object.to-string"),require("core-js/modules/es6.regexp.match"),require("core-js/modules/es6.regexp.replace"),require("core-js/modules/es6.map"),require("core-js/modules/es6.promise"),require("core-js/modules/es6.function.bind"),require("core-js/modules/es6.reflect.construct"),require("core-js/modules/es6.promise"),require("reflect-metadata");var e=require("./Utils");exports.Utils=e.default;var r=require("./Lifecycle");exports.OnInit=r.OnInit,exports.BeforeMount=r.BeforeMount,exports.AfterMount=r.AfterMount,exports.OnDestory=r.OnDestory,exports.HasRender=r.HasRender,exports.WatchState=r.WatchState,exports.RouteChange=r.RouteChange,exports.ReceiveProps=r.ReceiveProps,exports.SetState=r.SetState,exports.SetLocation=r.SetLocation,exports.GetLocation=r.GetLocation;var o=require("./Watcher");exports.Watcher=o.default;var t=require("./KeyWatcher");exports.KeyWatcher=t.default;var s=require("./Compile");exports.Compile=s.default;var u=require("./CompileUtils");exports.CompileUtilForRepeat=u.CompileUtilForRepeat,exports.CompileUtil=u.CompileUtil;var a=require("./Component");exports.Component=a.default;var i=require("./Router");exports.Router=i.Router,exports.TRouter=i.TRouter;var p=require("./InDiv");exports.InDiv=p.default;var c=require("./NvModule");exports.NvModule=c.NvModule,exports.factoryModule=c.factoryModule;var l=require("./Http");exports.NVHttp=l.default;var d=require("./DI");exports.Injectable=d.Injectable,exports.Injected=d.Injected,exports.injector=d.injector,exports.factoryCreator=d.factoryCreator;
},{"core-js/modules/es6.array.find":"Qppk","core-js/modules/es6.array.find-index":"7sVm","core-js/modules/es6.array.for-each":"VsIt","core-js/modules/es6.array.from":"RRcs","core-js/modules/es6.array.index-of":"LvRh","core-js/modules/es6.array.map":"RBsu","core-js/modules/es6.array.sort":"nrVf","core-js/modules/es6.object.define-property":"TSUD","core-js/modules/es6.object.to-string":"4zTK","core-js/modules/es6.regexp.match":"RTfC","core-js/modules/es6.regexp.replace":"KGao","core-js/modules/es6.map":"ioKM","core-js/modules/es6.promise":"Pjta","core-js/modules/es6.function.bind":"WIhg","core-js/modules/es6.reflect.construct":"4JlF","reflect-metadata":"npqE","./Utils":"H8Ea","./Lifecycle":"OPet","./Watcher":"w9Fr","./KeyWatcher":"9pTu","./Compile":"twql","./CompileUtils":"bsu5","./Component":"7Ulo","./Router":"JJ5c","./InDiv":"QanZ","./NvModule":"Kb/p","./Http":"VWVa","./DI":"7ter"}]},{},["7QCb"], null)
},{}],9:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var indiv_1 = require("indiv");
// import { Router, TRouter } from '../../../InDiv/src';
var router = new indiv_1.Router();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9yb3V0ZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBd0M7QUFDeEMsd0RBQXdEO0FBRXhELElBQU0sTUFBTSxHQUFHLElBQUksY0FBTSxFQUFFLENBQUM7QUFHNUIsSUFBTSxNQUFNLEdBQWM7SUFDdEI7UUFDSSxJQUFJLEVBQUUsR0FBRztRQUNULFVBQVUsRUFBRSxlQUFlO1FBQzNCLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLFNBQVMsRUFBRSx3QkFBd0I7YUFDdEM7WUFDRDtnQkFDSSxJQUFJLEVBQUUsZUFBZTtnQkFDckIsU0FBUyxFQUFFLHdCQUF3QjthQUN0QztZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRTtvQkFDTjt3QkFDSSxJQUFJLEVBQUUsWUFBWTt3QkFDbEIsU0FBUyxFQUFFLDBCQUEwQjtxQkFDeEM7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFNBQVMsRUFBRSx5QkFBeUI7cUJBQ3ZDO29CQUNEO3dCQUNJLElBQUksRUFBRSxVQUFVO3dCQUNoQixTQUFTLEVBQUUsd0JBQXdCO3FCQUN0QztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsU0FBUzt3QkFDZixTQUFTLEVBQUUsdUJBQXVCO3FCQUNyQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsc0JBQXNCO3FCQUNwQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsUUFBUTt3QkFDZCxTQUFTLEVBQUUsc0JBQXNCO3FCQUNwQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUscUJBQXFCO3FCQUNuQztvQkFDRDt3QkFDSSxJQUFJLEVBQUUsT0FBTzt3QkFDYixTQUFTLEVBQUUscUJBQXFCO3FCQUNuQztpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osU0FBUyxFQUFFLGVBQWU7YUFDN0I7U0FDSjtLQUNKO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQUMsR0FBVyxFQUFFLElBQVk7SUFDM0MsMENBQTBDO0FBQzlDLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQyJ9
},{"indiv":4}],112:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],113:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.content = function () {
    return [{
        h1: '什么是InDiv',
        p: ['InDiv 是一个mvvm库。它能帮你构建 Web 应用。InDiv 字符串模板、依赖注入和一些实践于一身。'],
        info: ['InDiv 是单词 individual 的缩写，我撸它的时候借鉴了很多 angular，react，vue 的模式与概念。', '本网页是世界上第一个用 InDiv 构建的网页。', '请使用 indiv 1.2.0 + 版本', '在此致敬 angular，react 和 vue的大佬开发者们。感谢他们为前端做出的巨大贡献。']
    }, {
        h1: '基本假设',
        p: ['本文档假设你已经熟悉了 JavaScript，TypeScript，和来自最新标准的一些知识，比如 class 和 esmodule。', '下列代码范例都是用最新版本的 TypeScript 写的，利用 类型 实现依赖注入，并使用装饰器来提供元数据。']
    }, {
        h1: '基本理念',
        p: ['InDiv 是一个 mvvm 库, 本身使用 TypeScript编写。', '它将核心功能和可选功能作为一组 TypeScript 库进行实现，你可以把它们导入你的应用中。'],
        info: ['InDiv 基本构造块是 NvModule，它为组件提供了上下文环境和作用域', '整个app的最小单位为 Component，页面上的一切皆为组件', '异步渲染页面，尽量优化性能']
    }, {
        h1: '反馈',
        p: ['你可以和我一起做贡献！你可以到 Github 上的仓库中提出文档方面的问题，并创建Pull Requests。', '或者在 github 上联系我：DimaLiLongJi']
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL2ludHJvZHVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsT0FBTyxHQUFHLGNBQU0sT0FBQTtJQUN6QjtRQUNJLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFO1lBQ0Msd0RBQXdEO1NBQzNEO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsZ0VBQWdFO1lBQ2hFLDBCQUEwQjtZQUMxQixzQkFBc0I7WUFDdEIsaURBQWlEO1NBQ3BEO0tBQ0o7SUFDRDtRQUNJLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFO1lBQ0MscUVBQXFFO1lBQ3JFLHlEQUF5RDtTQUM1RDtLQUNKO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNDLHNDQUFzQztZQUN0QyxpREFBaUQ7U0FDcEQ7UUFDRCxJQUFJLEVBQUU7WUFDRix3Q0FBd0M7WUFDeEMsa0NBQWtDO1lBQ2xDLGVBQWU7U0FDbEI7S0FDSjtJQUNEO1FBQ0ksRUFBRSxFQUFFLElBQUk7UUFDUixDQUFDLEVBQUU7WUFDQyx5REFBeUQ7WUFDekQsOEJBQThCO1NBQ2pDO0tBQ0o7Q0FDSixFQXZDNEIsQ0F1QzVCLENBQUMifQ==
},{}],29:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component } from '../../../../InDiv/src';
var introduction_1 = require("../../constants/introduction");
var IntroductionContainer = /** @class */function () {
    function IntroductionContainer() {
        this.state = {
            info: introduction_1.content()
        };
    }
    IntroductionContainer = __decorate([indiv_1.Component({
        selector: 'introduction-container',
        template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let pp in info.p\">{{pp}}</p>\n                <div class=\"child-info\" nv-if=\"info.info\">\n                    <div class=\"pchild\">\n                        <p nv-repeat=\"let child in info.info\">{{child}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
    }), __metadata("design:paramtypes", [])], IntroductionContainer);
    return IntroductionContainer;
}();
exports.default = IntroductionContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9pbnRyb2R1Y3Rpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIsK0JBQWtDO0FBQ2xDLHFEQUFxRDtBQUVyRCw2REFBdUQ7QUE0QnZEO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLHNCQUFPLEVBQUU7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFOZ0IscUJBQXFCO1FBaEJ6QyxpQkFBUyxDQUFRO1lBQ2QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsQ0FBQyxrZkFZVixDQUFDO1NBQ0wsQ0FBQzs7T0FDbUIscUJBQXFCLENBT3pDO0lBQUQsNEJBQUM7Q0FBQSxBQVBELElBT0M7a0JBUG9CLHFCQUFxQiJ9
},{"./style.less":112,"indiv":4,"../../constants/introduction":113}],19:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { NvModule } from '../../../InDiv/src';
var introduction_1 = __importDefault(require("../pages/introduction"));
var IntroductionModule = /** @class */function () {
    function IntroductionModule() {}
    IntroductionModule = __decorate([indiv_1.NvModule({
        imports: [],
        components: [introduction_1.default],
        providers: [],
        exports: [introduction_1.default]
    })], IntroductionModule);
    return IntroductionModule;
}();
exports.default = IntroductionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cm9kdWN0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvaW50cm9kdWN0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUFpQztBQUNqQyxpREFBaUQ7QUFFakQsdUVBQTBEO0FBYzFEO0lBQUE7SUFBMEMsQ0FBQztJQUF0QixrQkFBa0I7UUFadEMsZ0JBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxFQUNSO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLHNCQUFxQjthQUN4QjtZQUNELFNBQVMsRUFBRSxFQUNWO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHNCQUFxQjthQUN4QjtTQUNKLENBQUM7T0FDbUIsa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBLEFBQTNDLElBQTJDO2tCQUF0QixrQkFBa0IifQ==
},{"indiv":4,"../pages/introduction":29}],114:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],115:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvc3RhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLE9BQU8sR0FBRyxjQUFNLE9BQUE7SUFDM0I7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNELHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsaURBQWlEO1NBQ2xEO1FBQ0QsSUFBSSxFQUFFO1lBQ0osNkNBQTZDO1lBQzdDLCtCQUErQjtZQUMvQiw4REFBOEQ7WUFDOUQsb0RBQW9EO1lBQ3BELHdDQUF3QztTQUN6QztLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELG1GQUFtRjtTQUNwRjtRQUNELElBQUksRUFBRTtZQUNKLHFDQUFxQztZQUNyQyxtQkFBbUI7WUFDbkIsaUNBQWlDO1NBQ2xDO0tBQ0Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxJQUFJO1FBQ1IsQ0FBQyxFQUFFO1lBQ0QsaUNBQWlDO1NBQ2xDO1FBQ0QsSUFBSSxFQUFFO1lBQ0osa0RBQWtEO1lBQ2xELDhEQUE4RDtTQUMvRDtLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELGdFQUFnRTtZQUNoRSw2QkFBNkI7U0FDOUI7UUFDRCxJQUFJLEVBQUU7WUFDSixrQ0FBa0M7WUFDbEMsa0NBQWtDO1lBQ2xDLGlDQUFpQztZQUNqQyxnRkFBZ0Y7U0FDakY7S0FDRjtJQUNEO1FBQ0UsRUFBRSxFQUFFLElBQUk7UUFDUixDQUFDLEVBQUU7WUFDRCx1RUFBdUU7WUFDdkUseUVBQXlFO1NBQzFFO1FBQ0QsSUFBSSxFQUFFO1lBQ0osNEJBQTRCO1lBQzVCLDJEQUEyRDtZQUMzRCxpREFBaUQ7U0FDbEQ7S0FDRjtDQUNGLEVBOUQ0QixDQThENUIsQ0FBQyJ9
},{}],30:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component } from '../../../../InDiv/src';
var start_1 = require("../../constants/start");
var ArchitectureContainer = /** @class */function () {
    function ArchitectureContainer() {
        this.state = {
            info: start_1.content()
        };
    }
    ArchitectureContainer = __decorate([indiv_1.Component({
        selector: 'architecture-container',
        template: "\n    <div class=\"page-container\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n          <h1>{{info.h1}}</h1>\n          <p nv-repeat=\"let pp in info.p\">{{pp}}</p>\n          <div class=\"child-info\" nv-if=\"info.info\">\n              <div class=\"pchild\">\n                  <p nv-repeat=\"let child in info.info\">{{child}}</p>\n              </div>\n          </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], ArchitectureContainer);
    return ArchitectureContainer;
}();
exports.default = ArchitectureContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9hcmNoaXRlY3R1cmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIsK0JBQWtDO0FBQ2xDLHFEQUFxRDtBQUVyRCwrQ0FBZ0Q7QUE0QmhEO0lBRUU7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGVBQU8sRUFBRTtTQUNoQixDQUFDO0lBQ0osQ0FBQztJQU5rQixxQkFBcUI7UUFoQnpDLGlCQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsQ0FBQyxrYkFZVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIscUJBQXFCLENBT3pDO0lBQUQsNEJBQUM7Q0FBQSxBQVBELElBT0M7a0JBUG9CLHFCQUFxQiJ9
},{"./style.less":114,"indiv":4,"../../constants/start":115}],18:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { NvModule } from '../../../InDiv/src';
var architecture_1 = __importDefault(require("../pages/architecture"));
var ArchitectureModule = /** @class */function () {
    function ArchitectureModule() {}
    ArchitectureModule = __decorate([indiv_1.NvModule({
        components: [architecture_1.default],
        exports: [architecture_1.default]
    })], ArchitectureModule);
    return ArchitectureModule;
}();
exports.default = ArchitectureModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvYXJjaGl0ZWN0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUFpQztBQUNqQyxpREFBaUQ7QUFFakQsdUVBQTBEO0FBVTFEO0lBQUE7SUFBMEMsQ0FBQztJQUF0QixrQkFBa0I7UUFSdEMsZ0JBQVEsQ0FBQztZQUNOLFVBQVUsRUFBRTtnQkFDUixzQkFBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0JBQXFCO2FBQ3hCO1NBQ0osQ0FBQztPQUNtQixrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBM0MsSUFBMkM7a0JBQXRCLGtCQUFrQiJ9
},{"indiv":4,"../pages/architecture":30}],130:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],36:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, RouteChange } from '../../../../InDiv/src';
var DocsContainer = /** @class */function () {
    function DocsContainer() {}
    DocsContainer.prototype.nvRouteChange = function (lastRoute, newRoute) {
        console.log('DocsContainer nvRouteChange', lastRoute, newRoute);
    };
    DocsContainer = __decorate([indiv_1.Component({
        selector: 'docs-container',
        template: "\n      <div class=\"page-container\">\n        <router-render></router-render>\n      </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsContainer);
    return DocsContainer;
}();
exports.default = DocsContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLCtCQUErQztBQUMvQyxrRUFBa0U7QUFVbEU7SUFDRTtJQUFlLENBQUM7SUFFVCxxQ0FBYSxHQUFwQixVQUFxQixTQUFrQixFQUFFLFFBQWlCO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFMa0IsYUFBYTtRQVJqQyxpQkFBUyxDQUFNO1lBQ2QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQyxtR0FJVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIsYUFBYSxDQU1qQztJQUFELG9CQUFDO0NBQUEsQUFORCxJQU1DO2tCQU5vQixhQUFhIn0=
},{"./style.less":130,"indiv":4}],132:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.componentInfo = function () {
    return [{
        h1: '组件与模板',
        p: ['在 InDiv 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 InDiv 组件的属性。'],
        info: [{
            title: '装饰器 Component',
            p: ['@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。', '在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 InDiv 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。', '@Component 接收3个参数: selector, template, providers'],
            pchild: ['1. selector: string; 作为组件（component）被渲染成 DOM 的标签，类似于 <div></div>', '2. template: string; 视图模板，用来声明被渲染的视图', '3. providers?: (Function | { provide: any; useClass: Function; } | { provide: any; useValue: any; })[]; 声明可以被组件注入的服务。', '4. 在 JavaScript 中，只能把 装饰器Component 当做一个函数使用，最后应该导出被声明的类。', '5. 组件会优先去组件 providers 查找依赖，其次才会去模块 providers 查找依赖。', '6. 组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。', '7. 在 TypeScript 中 providers 仅仅能使用 providers: (Function | { provide: Function; useClass: Function; } | { provide: Function; useValue: any; })[]; 类型', '8. 在 JavaScript 中 providers 仅仅能使用 providers: ({ provide: string; useClass: Function; } | { provide: string; useValue: any; })[]; 类型'],
            code: "\n  // in TypeScript\n  @Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{$.a}}</div>\n    '),\n    providers: [\n      TestService,\n      {\n        provide: TestService1,\n        useClass: TestService1,\n      },\n      {\n        provide: TestService2,\n        useClass: '123',\n      },\n    ],\n  })\n  export default class ContainerComponent {\n    public state: {\n      a: number;\n    };\n\n    constructor(\n      private: testService: TestService\n    ) {\n      this.state = {\n        a: 1\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class ContainerComponent {\n    static injectTokens = [\n      'testService'\n    ];\n\n    constructor(testService) {\n      this.testService = testService;\n      this.state = {\n        a: 1\n      };\n    }\n  }\n  Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{$.a}}</div>\n    '),\n    providers: [\n      {\n        provide: 'testService',\n        useClass: TestService,\n      },\n      {\n        provide: 'testService1',\n        useClass: TestService1,\n      },\n      {\n        provide: 'testService2',\n        useClass: '123',\n      },\n    ],\n  })(ContainerComponent)\n "
        }, {
            title: '模板数据绑定',
            p: ['如果没有框架，你就要自己负责把数据渲染到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。', 'InDiv 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。'],
            pchild: ['1. 往模板HTML字符串中添加绑定 nv- 开头的标记可以告诉 InDiv 该如何渲染它们。', '2. 因为 InDiv 使用单向数据流，所以仅仅支持使用 this.state 内的值($.开头，作为this.state.的指代) 或是 有返回值的实例上的方法(@开头，作为this的指代) 作为绑定数据， 实例的方法作为事件方法。', '3. 如果要在组件内使用 props ，请在 nvReceiveProps 或 Class的getter setter方法 或 在 nvOnInit 生命周期内用 props 对 state 赋值。', '4. 如果组件在 根模块（root NvModule）或模块（NvModule） 上的 components：Function[]; 声明过，则在其他同模块组件内的 template 可以像 HTML 标签一样使用组件。', '4. 模板上的组件可接受的 props的值 必须用 {} 包裹起来。', '5. props的值 有三种: <test-component man="{@countState(man.name)}" women="{$.name}" handler="{@getProps}"></test-component>', '(1) 直接使用 state上的值 或 nv-repeat 的值：women="{$.name} women="{man.name}"', '(2) 使用 @ 加 实例上带有返回值的方法，返回值将作为被传递的值：man="{@countState($.name)}"', '(3) 使用 @ 加 实例上的方法，方法将作为 props 传递：handler="{@getProps}"'],
            code: "\n  @Component({\n    selector: 'container-component',\n    template: ('\n      <div nv-on:click=\"@show($.a)\">\n        ContainerComponent {{$.a}}\n        <test-component value-a=\"{$.a}\" show=\"{@show}\"></test-component>\n      </div>\n      '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: null,\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.a = nextProps.a;\n    }\n  }\n "
        }, {
            title: '组件通信1: props 与 state',
            p: ['InDiv 的组件之间可以 props 来通信。', '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件调用来更改对应父组件的值来完成通信。', '直接改变 state 上的值，或通过 setState 更改 state 的值时，state会被立刻改变，因此更改state的行为为 同步的。', '但是更改 state 值时，会触发异步的重新渲染，并在渲染后更新子组件的 props，', '因此，通过在子组件中调用 props 上的方法来更新父组件的 state 时，子组件的 props 并不会立即更新。', '如果想知道子组件的 props 何时被更新，应该通过生命周期 nvReceiveProps(nextProps: Props) 或 Class的getter setter方法去监听props的变化。'],
            pchild: ['1. 可以直接在 template 上使用在 NvModule 注册过的组件标签，并通过 prop-value="{$.value}" prop-value="{@returnValue($.value)}" pro-function="{@fn}" 的引号包裹花括号的写法传递值与方法。', '2. template 上组件内的传值应按照 下划线命名法(UnderScoreCase) 书写，而在组件Class中应按照 驼峰命名法(CamelCase) 使用。例如: prop-value="{$.value}" => this.props.propValue', '3. 例如在下面例子，在 hero-component 内可以用循环 nv-repeat 的value，也可以使用 实例上有返回值的方法，也可以直接在实例方法中触发 handelClick 回调。', '4. 如果该 DOM 会发生频繁变化，并且有可追踪的唯一 key 值，可以添加指令 nv-key, 让 InDiv 直接追踪到 DOM 变化，帮助保存 组件 内的 state。', '5. 但是渲染的时候，不可以在模板上直接使用 props 的值，仅仅可以使用 class 实例的方法和 this.state 的值。', '6. 在生命周期 constructor 和 nvOnInit 之后，会开启对 this.state 的监听，此监听会监听每个挂载到 this.state 上的属性及属性的属性，因此如果不对 this.state 添加新的属性或对属性的属性添加新的属性的话，可以直接对某个属性赋值。', '7. 相反，如果要对 this.state 上的属性 增加属性或删除，则需要使用 setState<S>(newState: {[key: string]: S}) 方法对 this.state 重新添加监听', '8. 可以直接引用 InDiv 的 SetState 来为 setState方法声明类型。', '9. 可以通过生命周期 nvReceiveProps(nextProps: Props) 或 Class的getter setter方法去监听props的变化。(nvReceiveProps会先于getter setter被触发)。'],
            code: "\n  import { Component, SetState, OnInit, ReceiveProps } from 'InDiv';\n  @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{$.stateValue}}</p>\n        <p>idValue: {{$.idValue}}</p>\n      </div>\n    '),\n  })\n  export default class HeroComponent implements OnInit, ReceiveProps {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n    public _props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n\n    set props(props: any) {\n      this._props = props;\n    }\n\n    get props(): any {\n      return this._props;\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n  }\n\n @Component({\n    selector: 'container-component',\n    template: ('\n      <div>\n        <div nv-repeat=\"let person in $.b\" nv-key=\"person.id\">\n          <hero-component handel-click=\"@show\" state-value=\"$.a\" id-value=\"person.id\" ></hero-component>\n        </div>\n      </div>\n    '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: {\n          id: 3,\n          name: '\u7801\u519C3',\n        },\n        b: [\n          {id: 1, name: '\u7801\u519C1'},\n          {id: 2, name: '\u7801\u519C2'},\n        ],\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n  }\n "
        }, {
            title: '组件通信2: service 与 RxJS',
            p: ['父子组件的通信可以通过 props , 但跨层级组件间的通信该怎么办？', '相比于构建全局变量，InDiv 的服务显然更适合这种场景。'],
            pchild: ['1. InDiv 的组件之间可以通过注入同一个 单例service。（既全局仅仅产生一个实例）', '2. 通过 RxJS 实现订阅与通知（RxJS 详细：https://rxjs-dev.firebaseapp.com/）', '3. 通过RxJS可观察者对象，获得组件之间通信或状态变更', '4. 在 nvOnDestory 生命周期钩子里取消订阅']
        }, {
            title: '组件的依赖注入',
            p: ['通过依赖注入系统，可以无需关注任何过程直接拿到一个所需的服务实例。', '每个组件实例都拥有一个同级的注入器，负责调用组件和模块的 providers，获取组件依赖的实例。', '在 TypeScript 与 JavaScript 中，声明依赖的方式不一样', '组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。'],
            pchild: ['1. 在 TypeScript 中，通过 @Injected 注解，获取组件的构造函数中参数的类型，根据 provide: Function  查找依赖，并注入实例。', '2. 在 JavaScript 中，通过组件类的静态属性 injectTokens: string[]，查找 provide: string 查找依赖，并注入实例。', '3. 优先查找组件中被声明的服务，其次再在模块中被声明的服务中查找依赖'],
            code: "\n import { Component, Injected } from 'InDiv';\n \n // in TypeScript\n @Injected\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{$.stateValue}}</p>\n      </div>\n    '),\n    providers: [ HeroService ],\n  })\n  export default class HeroComponent {\n    public state: any;\n\n    constructor(\n      private heroService: HeroService\n    ) {}\n\n    public nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class HeroComponent {\n    static injectTokens = [\n      'heroService'\n    ];\n\n    constructor(heroService) {\n      this.heroService = heroService;\n    }\n\n    nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n  Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{$.stateValue}}</p>\n      </div>\n    '),\n    providers: [{\n      provide: 'heroService',\n      useClass: HeroService,\n    }],\n  })(HeroComponent);\n "
        }, {
            title: '生命周期钩子',
            p: ['每个组件都有一个被 InDiv 管理的生命周期。', '生命周期钩子其实就是定义在实例中的一些方法，在 InDiv 中，通过不同的时刻调用不同的生命周期钩子，', '赋予你在它们发生时采取行动的能力。', '在 TypeScript 中，引用 InDiv 提供的 interface，通过 implements 的方式让类去实现被预先定义好的生命周期，而在 JavaScript 中，你只能自己手动去定义应该实现的生命周期方法。'],
            pchild: ['1. constructor 在类被实例化的时候回触发，你可以在这里预先定义你的 state', '2. nvOnInit(): void; constructor 之后，在这个生命周期中，可以通过 this.props 获取 props，并定义 state，此生命周期会在开启监听前被触发，并且之后再也不会触发', '3. nvBeforeMount(): void; 在 nvOnInit 之后，template 挂载页面之前被触发，每次触发渲染页面都会被触发', '4. nvAfterMount(): void; 在 nvBeforeMount 之后，template 挂载页面之后被触发，每次触发渲染页面（render）都会被触发', '5. nvHasRender(): void; 在 nvAfterMount 之后，渲染完成后被触发，每次触发渲染页面（render）都会被触发', '6. nvRouteChange(lastRoute?: string, newRoute?: string): void; 监听路由变化，当更换路由后被触发', '7. nvOnDestory(): void; 仅仅在路由决定销毁此组件时被触发', '8. nvWatchState(oldState?: any): void; 监听 state 变化，当 state 被更改后触发', '9. nvReceiveProps(nextProps: any): void; 监听 props 变化，当 props 即将被更改时触发', '10. getter: 当监听 props 时，getter 会先于 nvReceiveProps 被触发', '11. setter: 当监听 state 时，setter 会晚于 nvWatchState 被触发'],
            code: "\n import { Component, OnInit, BeforeMount, AfterMount, HasRender, OnDestory, WatchState, ReceiveProps } from 'InDiv';\n\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{$.stateValue}}</p>\n        <p>idValue: {{$.idValue}}</p>\n      </div>\n    '),\n  })\n  class HeroComponent implements\n    OnInit,\n    BeforeMount,\n    AfterMount,\n    HasRender,\n    WatchState,\n    ReceiveProps,\n  {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n    }\n\n    public nvBeforeMount() {\n      console.log('component in BeforeMount');\n    }\n\n    public nvAfterMount() {\n      console.log('component in AfterMount');\n    }\n\n    public nvHasRender() {\n      console.log('component in HasRender');\n    }\n\n    public nvWatchState(oldState?: any) {\n      console.log('component in WatchState');\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n  }\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsYUFBYSxHQUFHLGNBQU0sT0FBQTtJQUNqQztRQUNFLEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFO1lBQ0QscURBQXFEO1NBQ3REO1FBQ0QsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLENBQUMsRUFBRTtvQkFDRCwwQ0FBMEM7b0JBQzFDLGlHQUFpRztvQkFDakcsa0RBQWtEO2lCQUNuRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sa0VBQWtFO29CQUNsRSxzQ0FBc0M7b0JBQ3RDLHVIQUF1SDtvQkFDdkgsMERBQTBEO29CQUMxRCxvREFBb0Q7b0JBQ3BELGlHQUFpRztvQkFDakcsb0pBQW9KO29CQUNwSixxSUFBcUk7aUJBQ3RJO2dCQUNELElBQUksRUFBRSxndkNBa0VaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixDQUFDLEVBQUU7b0JBQ0Qsd0dBQXdHO29CQUN4RywrQ0FBK0M7aUJBQ2hEO2dCQUNELE1BQU0sRUFBRTtvQkFDTixpREFBaUQ7b0JBQ2pELHVIQUF1SDtvQkFDdkgscUdBQXFHO29CQUNyRyxnSEFBZ0g7b0JBQ2hILG9DQUFvQztvQkFDcEMsd0hBQXdIO29CQUN4SCxxRUFBcUU7b0JBQ3JFLGdFQUFnRTtvQkFDaEUsd0RBQXdEO2lCQUN6RDtnQkFDRCxJQUFJLEVBQUUsZ2lCQXlCWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHNCQUFzQjtnQkFDN0IsQ0FBQyxFQUFFO29CQUNELDBCQUEwQjtvQkFDMUIseURBQXlEO29CQUN6RCx5RUFBeUU7b0JBQ3pFLDZDQUE2QztvQkFDN0MsNERBQTREO29CQUM1RCxxR0FBcUc7aUJBQ3RHO2dCQUNELE1BQU0sRUFBRTtvQkFDTixrSkFBa0o7b0JBQ2xKLHVJQUF1STtvQkFDdkksb0dBQW9HO29CQUNwRywwRkFBMEY7b0JBQzFGLG9FQUFvRTtvQkFDcEUsK0lBQStJO29CQUMvSSwwR0FBMEc7b0JBQzFHLCtDQUErQztvQkFDL0Msc0hBQXNIO2lCQUN2SDtnQkFDRCxJQUFJLEVBQUUsb3BEQXdFWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsQ0FBQyxFQUFFO29CQUNELHFDQUFxQztvQkFDckMsK0JBQStCO2lCQUNoQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04saURBQWlEO29CQUNqRCwrREFBK0Q7b0JBQy9ELCtCQUErQjtvQkFDL0IsOEJBQThCO2lCQUMvQjthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLENBQUMsRUFBRTtvQkFDRCxtQ0FBbUM7b0JBQ25DLG1EQUFtRDtvQkFDbkQsd0NBQXdDO29CQUN4Qyw4RkFBOEY7aUJBQy9GO2dCQUNELE1BQU0sRUFBRTtvQkFDTixxRkFBcUY7b0JBQ3JGLG9GQUFvRjtvQkFDcEYscUNBQXFDO2lCQUN0QztnQkFDRCxJQUFJLEVBQUUsbWdDQXdEWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsQ0FBQyxFQUFFO29CQUNELDBCQUEwQjtvQkFDMUIscURBQXFEO29CQUNyRCxtQkFBbUI7b0JBQ25CLGdIQUFnSDtpQkFDakg7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGdEQUFnRDtvQkFDaEQsNEdBQTRHO29CQUM1RywwRUFBMEU7b0JBQzFFLHNGQUFzRjtvQkFDdEYsMEVBQTBFO29CQUMxRSxpRkFBaUY7b0JBQ2pGLDBDQUEwQztvQkFDMUMsbUVBQW1FO29CQUNuRSx1RUFBdUU7b0JBQ3ZFLHVEQUF1RDtvQkFDdkQscURBQXFEO2lCQUN0RDtnQkFDRCxJQUFJLEVBQUUscXpDQTBEWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBOVlrQyxDQThZbEMsQ0FBQyJ9
},{}],141:[function(require,module,exports) {
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
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
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

var __assign = exports.__assign = function () {
    exports.__assign = __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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
    var _ = { label: 0, sent: function () {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
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
                case 0:case 1:
                    t = op;break;
                case 4:
                    _.label++;return { value: op[1], done: false };
                case 5:
                    _.label++;y = op[1];op = [0];continue;
                case 7:
                    op = _.ops.pop();_.trys.pop();continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];t = op;break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];_.ops.push(op);break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
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
            return { value: o && o[i++], done: !o };
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
        e = { error: error };
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
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
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
            resolve({ value: v, done: d });
        }, reject);
    }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    } else {
        cooked.raw = raw;
    }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
}
},{}],144:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFunction = isFunction;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map
},{}],55:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/new Error();
            /*@__PURE__*/console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};
//# sourceMappingURL=config.js.map
},{}],153:[function(require,module,exports) {
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
//# sourceMappingURL=hostReportError.js.map
},{}],149:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = undefined;

var _config = require('./config');

var _hostReportError = require('./util/hostReportError');

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = exports.empty = {
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
//# sourceMappingURL=Observer.js.map
},{"./config":55,"./util/hostReportError":153}],142:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = exports.isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};
//# sourceMappingURL=isArray.js.map
},{}],143:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObject = isObject;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x != null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map
},{}],146:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map
},{}],145:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tryCatch = tryCatch;

var _errorObject = require('./errorObject');

var tryCatchTarget; /** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */

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
//# sourceMappingURL=tryCatch.js.map
},{"./errorObject":146}],86:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var UnsubscriptionError = exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map
},{}],52:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subscription = undefined;

var _isArray = require('./util/isArray');

var _isObject = require('./util/isObject');

var _isFunction = require('./util/isFunction');

var _tryCatch = require('./util/tryCatch');

var _errorObject = require('./util/errorObject');

var _UnsubscriptionError = require('./util/UnsubscriptionError');

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/function () {
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
//# sourceMappingURL=Subscription.js.map
},{"./util/isArray":142,"./util/isObject":143,"./util/isFunction":144,"./util/tryCatch":145,"./util/errorObject":146,"./util/UnsubscriptionError":86}],148:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = exports.rxSubscriber = typeof Symbol === 'function' ? /*@__PURE__*/Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/Math.random();
var $$rxSubscriber = exports.$$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map
},{}],53:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SafeSubscriber = exports.Subscriber = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isFunction = require('./util/isFunction');

var _Observer = require('./Observer');

var _Subscription = require('./Subscription');

var _rxSubscriber = require('../internal/symbol/rxSubscriber');

var _config = require('./config');

var _hostReportError = require('./util/hostReportError');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Subscriber = /*@__PURE__*/function (_super) {
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
}(_Subscription.Subscription); /** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
exports.Subscriber = Subscriber;

var SafeSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=Subscriber.js.map
},{"tslib":141,"./util/isFunction":144,"./Observer":149,"./Subscription":52,"../internal/symbol/rxSubscriber":148,"./config":55,"./util/hostReportError":153}],139:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canReportError = canReportError;

var _Subscriber = require('../Subscriber');

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
//# sourceMappingURL=canReportError.js.map
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
},{"../Subscriber":53}],140:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSubscriber = toSubscriber;

var _Subscriber = require('../Subscriber');

var _rxSubscriber = require('../symbol/rxSubscriber');

var _Observer = require('../Observer');

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
//# sourceMappingURL=toSubscriber.js.map
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
},{"../Subscriber":53,"../symbol/rxSubscriber":148,"../Observer":149}],73:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map
},{}],80:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}
//# sourceMappingURL=noop.js.map
},{}],79:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pipe = pipe;
exports.pipeFromArray = pipeFromArray;

var _noop = require('./noop');

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
} /** PURE_IMPORTS_START _noop PURE_IMPORTS_END */
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
//# sourceMappingURL=pipe.js.map
},{"./noop":80}],46:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = undefined;

var _canReportError = require('./util/canReportError');

var _toSubscriber = require('./util/toSubscriber');

var _observable = require('../internal/symbol/observable');

var _pipe = require('./util/pipe');

var _config = require('./config');

var Observable = /*@__PURE__*/function () {
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
}(); /** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
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
//# sourceMappingURL=Observable.js.map
},{"./util/canReportError":139,"./util/toSubscriber":140,"../internal/symbol/observable":73,"./util/pipe":79,"./config":55}],85:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var ObjectUnsubscribedError = exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map
},{}],147:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubjectSubscription = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscription = require("./Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=SubjectSubscription.js.map
},{"tslib":141,"./Subscription":52}],47:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Observable = require('./Observable');

var _Subscriber = require('./Subscriber');

var _Subscription = require('./Subscription');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

var _SubjectSubscription = require('./SubjectSubscription');

var _rxSubscriber = require('../internal/symbol/rxSubscriber');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SubjectSubscriber = /*@__PURE__*/function (_super) {
    tslib_1.__extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber.Subscriber); /** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
exports.SubjectSubscriber = SubjectSubscriber;

var Subject = /*@__PURE__*/function (_super) {
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

var AnonymousSubject = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=Subject.js.map
},{"tslib":141,"./Observable":46,"./Subscriber":53,"./Subscription":52,"./util/ObjectUnsubscribedError":85,"./SubjectSubscription":147,"../internal/symbol/rxSubscriber":148}],169:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refCount = refCount;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("../Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/function () {
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
var RefCountSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=refCount.js.map
},{"tslib":141,"../Subscriber":53}],71:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectableObservableDescriptor = exports.ConnectableObservable = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('../Subject');

var _Observable = require('../Observable');

var _Subscriber = require('../Subscriber');

var _Subscription = require('../Subscription');

var _refCount = require('../operators/refCount');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */
var ConnectableObservable = /*@__PURE__*/function (_super) {
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
var connectableObservableDescriptor = exports.connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = /*@__PURE__*/function (_super) {
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
var RefCountOperator = /*@__PURE__*/function () {
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
var RefCountSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=ConnectableObservable.js.map
},{"tslib":141,"../Subject":47,"../Observable":46,"../Subscriber":53,"../Subscription":52,"../operators/refCount":169}],72:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GroupedObservable = undefined;
exports.groupBy = groupBy;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

var _Subscription = require('../Subscription');

var _Observable = require('../Observable');

var _Subject = require('../Subject');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
} /** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */

var GroupByOperator = /*@__PURE__*/function () {
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
var GroupBySubscriber = /*@__PURE__*/function (_super) {
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
var GroupDurationSubscriber = /*@__PURE__*/function (_super) {
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
var GroupedObservable = /*@__PURE__*/function (_super) {
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

var InnerRefCountSubscription = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=groupBy.js.map
},{"tslib":141,"../Subscriber":53,"../Subscription":52,"../Observable":46,"../Subject":47}],48:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BehaviorSubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var BehaviorSubject = /*@__PURE__*/function (_super) {
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
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */
exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=BehaviorSubject.js.map
},{"tslib":141,"./Subject":47,"./util/ObjectUnsubscribedError":85}],239:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Action = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscription = require("../Subscription");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var Action = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=Action.js.map
},{"tslib":141,"../Subscription":52}],165:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncAction = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Action = require('./Action');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */
var AsyncAction = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=AsyncAction.js.map
},{"tslib":141,"./Action":239}],172:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueAction = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var QueueAction = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=QueueAction.js.map
},{"tslib":141,"./AsyncAction":165}],51:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Scheduler = /*@__PURE__*/function () {
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
//# sourceMappingURL=Scheduler.js.map
},{}],166:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Scheduler = require("../Scheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */
var AsyncScheduler = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=AsyncScheduler.js.map
},{"tslib":141,"../Scheduler":51}],173:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var QueueScheduler = /*@__PURE__*/function (_super) {
    tslib_1.__extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler.AsyncScheduler);
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map
},{"tslib":141,"./AsyncScheduler":166}],76:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = undefined;

var _QueueAction = require('./QueueAction');

var _QueueScheduler = require('./QueueScheduler');

/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */
var queue = /*@__PURE__*/exports.queue = new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
//# sourceMappingURL=queue.js.map
},{"./QueueAction":172,"./QueueScheduler":173}],93:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY = undefined;
exports.empty = empty;
exports.emptyScheduled = emptyScheduled;

var _Observable = require('../Observable');

var EMPTY = /*@__PURE__*/exports.EMPTY = new _Observable.Observable(function (subscriber) {
    return subscriber.complete();
}); /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
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
//# sourceMappingURL=empty.js.map
},{"../Observable":46}],175:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isScheduler = isScheduler;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map
},{}],246:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = exports.subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map
},{}],178:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromArray = fromArray;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _subscribeToArray = require('../util/subscribeToArray');

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
//# sourceMappingURL=fromArray.js.map
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */
},{"../Observable":46,"../Subscription":52,"../util/subscribeToArray":246}],220:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scalar = scalar;

var _Observable = require('../Observable');

function scalar(value) {
    var result = new _Observable.Observable(function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
},{"../Observable":46}],105:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.of = of;

var _isScheduler = require('../util/isScheduler');

var _fromArray = require('./fromArray');

var _empty = require('./empty');

var _scalar = require('./scalar');

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
//# sourceMappingURL=of.js.map
},{"../util/isScheduler":175,"./fromArray":178,"./empty":93,"./scalar":220}],108:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwError = throwError;

var _Observable = require('../Observable');

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable.Observable(function (subscriber) {
            return subscriber.error(error);
        });
    } else {
        return new _Observable.Observable(function (subscriber) {
            return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber });
        });
    }
} /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function dispatch(_a) {
    var error = _a.error,
        subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map
},{"../Observable":46}],54:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Notification = undefined;

var _empty = require('./observable/empty');

var _of = require('./observable/of');

var _throwError = require('./observable/throwError');

var Notification = /*@__PURE__*/function () {
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
}(); /** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */
exports.Notification = Notification;
//# sourceMappingURL=Notification.js.map
},{"./observable/empty":93,"./observable/of":105,"./observable/throwError":108}],154:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = undefined;
exports.observeOn = observeOn;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

var _Notification = require('../Notification');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
} /** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */

var ObserveOnOperator = /*@__PURE__*/function () {
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

var ObserveOnSubscriber = /*@__PURE__*/function (_super) {
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

var ObserveOnMessage = /*@__PURE__*/function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}();
exports.ObserveOnMessage = ObserveOnMessage;
//# sourceMappingURL=observeOn.js.map
},{"tslib":141,"../Subscriber":53,"../Notification":54}],49:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplaySubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _queue = require('./scheduler/queue');

var _Subscription = require('./Subscription');

var _observeOn = require('./operators/observeOn');

var _ObjectUnsubscribedError = require('./util/ObjectUnsubscribedError');

var _SubjectSubscription = require('./SubjectSubscription');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ReplaySubject = /*@__PURE__*/function (_super) {
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
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */
exports.ReplaySubject = ReplaySubject;

var ReplayEvent = /*@__PURE__*/function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}();
//# sourceMappingURL=ReplaySubject.js.map
},{"tslib":141,"./Subject":47,"./scheduler/queue":76,"./Subscription":52,"./operators/observeOn":154,"./util/ObjectUnsubscribedError":85,"./SubjectSubscription":147}],50:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncSubject = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subject = require('./Subject');

var _Subscription = require('./Subscription');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AsyncSubject = /*@__PURE__*/function (_super) {
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
}(_Subject.Subject); /** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */
exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=AsyncSubject.js.map
},{"tslib":141,"./Subject":47,"./Subscription":52}],240:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = exports.Immediate = {
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
//# sourceMappingURL=Immediate.js.map
},{}],170:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapAction = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Immediate = require('../util/Immediate');

var _AsyncAction = require('./AsyncAction');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var AsapAction = /*@__PURE__*/function (_super) {
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
}(_AsyncAction.AsyncAction); /** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map
},{"tslib":141,"../util/Immediate":240,"./AsyncAction":165}],171:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AsapScheduler = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=AsapScheduler.js.map
},{"tslib":141,"./AsyncScheduler":166}],74:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = undefined;

var _AsapAction = require('./AsapAction');

var _AsapScheduler = require('./AsapScheduler');

/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */
var asap = /*@__PURE__*/exports.asap = new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
//# sourceMappingURL=asap.js.map
},{"./AsapAction":170,"./AsapScheduler":171}],75:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = undefined;

var _AsyncAction = require('./AsyncAction');

var _AsyncScheduler = require('./AsyncScheduler');

/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
var async = /*@__PURE__*/exports.async = new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
//# sourceMappingURL=async.js.map
},{"./AsyncAction":165,"./AsyncScheduler":166}],167:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameAction = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require("./AsyncAction");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */
var AnimationFrameAction = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=AnimationFrameAction.js.map
},{"tslib":141,"./AsyncAction":165}],168:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameScheduler = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncScheduler = require("./AsyncScheduler");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */
var AnimationFrameScheduler = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=AnimationFrameScheduler.js.map
},{"tslib":141,"./AsyncScheduler":166}],77:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = undefined;

var _AnimationFrameAction = require('./AnimationFrameAction');

var _AnimationFrameScheduler = require('./AnimationFrameScheduler');

/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */
var animationFrame = /*@__PURE__*/exports.animationFrame = new _AnimationFrameScheduler.AnimationFrameScheduler(_AnimationFrameAction.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map
},{"./AnimationFrameAction":167,"./AnimationFrameScheduler":168}],78:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = undefined;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _AsyncAction = require('./AsyncAction');

var _AsyncScheduler = require('./AsyncScheduler');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var VirtualTimeScheduler = /*@__PURE__*/function (_super) {
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
}(_AsyncScheduler.AsyncScheduler); /** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */
exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=VirtualTimeScheduler.js.map
},{"tslib":141,"./AsyncAction":165,"./AsyncScheduler":166}],81:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identity = identity;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
},{}],82:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObservable = isObservable;

var _Observable = require('../Observable');

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}
//# sourceMappingURL=isObservable.js.map
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
},{"../Observable":46}],83:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var ArgumentOutOfRangeError = exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map
},{}],84:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var EmptyError = exports.EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map
},{}],87:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = /*@__PURE__*/Object.create(Error.prototype);
var TimeoutError = exports.TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map
},{}],174:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MapOperator = undefined;
exports.map = map;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require('../Subscriber');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/function () {
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

var MapSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=map.js.map
},{"tslib":141,"../Subscriber":53}],88:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallback = bindCallback;

var _Observable = require('../Observable');

var _AsyncSubject = require('../AsyncSubject');

var _map = require('../operators/map');

var _canReportError = require('../util/canReportError');

var _isArray = require('../util/isArray');

var _isScheduler = require('../util/isScheduler');

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
                    args: args, subscriber: subscriber, params: params
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
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
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
//# sourceMappingURL=bindCallback.js.map
},{"../Observable":46,"../AsyncSubject":50,"../operators/map":174,"../util/canReportError":139,"../util/isArray":142,"../util/isScheduler":175}],89:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindNodeCallback = bindNodeCallback;

var _Observable = require('../Observable');

var _AsyncSubject = require('../AsyncSubject');

var _map = require('../operators/map');

var _canReportError = require('../util/canReportError');

var _isScheduler = require('../util/isScheduler');

var _isArray = require('../util/isArray');

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
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
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
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            } else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        } catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
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
//# sourceMappingURL=bindNodeCallback.js.map
},{"../Observable":46,"../AsyncSubject":50,"../operators/map":174,"../util/canReportError":139,"../util/isScheduler":175,"../util/isArray":142}],176:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OuterSubscriber = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var OuterSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=OuterSubscriber.js.map
},{"tslib":141,"./Subscriber":53}],245:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InnerSubscriber = undefined;

var _tslib = require("tslib");

var tslib_1 = _interopRequireWildcard(_tslib);

var _Subscriber = require("./Subscriber");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */
var InnerSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=InnerSubscriber.js.map
},{"tslib":141,"./Subscriber":53}],244:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToPromise = undefined;

var _hostReportError = require('./hostReportError');

var subscribeToPromise = exports.subscribeToPromise = function (promise) {
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
//# sourceMappingURL=subscribeToPromise.js.map
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */
},{"./hostReportError":153}],190:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSymbolIterator = getSymbolIterator;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/exports.iterator = getSymbolIterator();
var $$iterator = exports.$$iterator = iterator;
//# sourceMappingURL=iterator.js.map
},{}],250:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToIterable = undefined;

var _iterator = require('../symbol/iterator');

var subscribeToIterable = exports.subscribeToIterable = function (iterable) {
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
//# sourceMappingURL=subscribeToIterable.js.map
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
},{"../symbol/iterator":190}],252:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToObservable = undefined;

var _observable = require('../symbol/observable');

var subscribeToObservable = exports.subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_observable.observable]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        } else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
},{"../symbol/observable":73}],181:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
//# sourceMappingURL=isArrayLike.js.map
},{}],180:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPromise = isPromise;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map
},{}],187:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeTo = undefined;

var _Observable = require('../Observable');

var _subscribeToArray = require('./subscribeToArray');

var _subscribeToPromise = require('./subscribeToPromise');

var _subscribeToIterable = require('./subscribeToIterable');

var _subscribeToObservable = require('./subscribeToObservable');

var _isArrayLike = require('./isArrayLike');

var _isPromise = require('./isPromise');

var _isObject = require('./isObject');

var _iterator = require('../symbol/iterator');

var _observable = require('../symbol/observable');

/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */
var subscribeTo = exports.subscribeTo = function (result) {
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
//# sourceMappingURL=subscribeTo.js.map
},{"../Observable":46,"./subscribeToArray":246,"./subscribeToPromise":244,"./subscribeToIterable":250,"./subscribeToObservable":252,"./isArrayLike":181,"./isPromise":180,"./isObject":143,"../symbol/iterator":190,"../symbol/observable":73}],177:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeToResult = subscribeToResult;

var _InnerSubscriber = require('../InnerSubscriber');

var _subscribeTo = require('./subscribeTo');

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
//# sourceMappingURL=subscribeToResult.js.map
},{"../InnerSubscriber":245,"./subscribeTo":187}],90:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CombineLatestSubscriber = exports.CombineLatestOperator = undefined;
exports.combineLatest = combineLatest;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isScheduler = require('../util/isScheduler');

var _isArray = require('../util/isArray');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

var _fromArray = require('./fromArray');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
var CombineLatestOperator = /*@__PURE__*/function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}();
exports.CombineLatestOperator = CombineLatestOperator;

var CombineLatestSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=combineLatest.js.map
},{"tslib":141,"../util/isScheduler":175,"../util/isArray":142,"../OuterSubscriber":176,"../util/subscribeToResult":177,"./fromArray":178}],182:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInteropObservable = isInteropObservable;

var _observable = require('../symbol/observable');

function isInteropObservable(input) {
    return input && typeof input[_observable.observable] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */
},{"../symbol/observable":73}],183:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIterable = isIterable;

var _iterator = require('../symbol/iterator');

function isIterable(input) {
    return input && typeof input[_iterator.iterator] === 'function';
}
//# sourceMappingURL=isIterable.js.map
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */
},{"../symbol/iterator":190}],184:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromPromise = fromPromise;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _subscribeToPromise = require('../util/subscribeToPromise');

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
//# sourceMappingURL=fromPromise.js.map
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */
},{"../Observable":46,"../Subscription":52,"../util/subscribeToPromise":244}],185:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromIterable = fromIterable;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _iterator = require('../symbol/iterator');

var _subscribeToIterable = require('../util/subscribeToIterable');

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
//# sourceMappingURL=fromIterable.js.map
},{"../Observable":46,"../Subscription":52,"../symbol/iterator":190,"../util/subscribeToIterable":250}],186:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromObservable = fromObservable;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

var _observable = require('../symbol/observable');

var _subscribeToObservable = require('../util/subscribeToObservable');

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
//# sourceMappingURL=fromObservable.js.map
},{"../Observable":46,"../Subscription":52,"../symbol/observable":73,"../util/subscribeToObservable":252}],95:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.from = from;

var _Observable = require('../Observable');

var _isPromise = require('../util/isPromise');

var _isArrayLike = require('../util/isArrayLike');

var _isInteropObservable = require('../util/isInteropObservable');

var _isIterable = require('../util/isIterable');

var _fromArray = require('./fromArray');

var _fromPromise = require('./fromPromise');

var _fromIterable = require('./fromIterable');

var _fromObservable = require('./fromObservable');

var _subscribeTo = require('../util/subscribeTo');

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
//# sourceMappingURL=from.js.map
},{"../Observable":46,"../util/isPromise":180,"../util/isArrayLike":181,"../util/isInteropObservable":182,"../util/isIterable":183,"./fromArray":178,"./fromPromise":184,"./fromIterable":185,"./fromObservable":186,"../util/subscribeTo":187}],253:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MergeMapSubscriber = exports.MergeMapOperator = undefined;
exports.mergeMap = mergeMap;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _subscribeToResult = require('../util/subscribeToResult');

var _OuterSubscriber = require('../OuterSubscriber');

var _InnerSubscriber = require('../InnerSubscriber');

var _map = require('./map');

var _from = require('../observable/from');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
var MergeMapOperator = /*@__PURE__*/function () {
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

var MergeMapSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=mergeMap.js.map
},{"tslib":141,"../util/subscribeToResult":177,"../OuterSubscriber":176,"../InnerSubscriber":245,"./map":174,"../observable/from":95}],189:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeAll = mergeAll;

var _mergeMap = require('./mergeMap');

var _identity = require('../util/identity');

/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */
function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return (0, _mergeMap.mergeMap)(_identity.identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
},{"./mergeMap":253,"../util/identity":81}],179:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatAll = concatAll;

var _mergeAll = require('./mergeAll');

function concatAll() {
    return (0, _mergeAll.mergeAll)(1);
}
//# sourceMappingURL=concatAll.js.map
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */
},{"./mergeAll":189}],91:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = concat;

var _isScheduler = require('../util/isScheduler');

var _of = require('./of');

var _from = require('./from');

var _concatAll = require('../operators/concatAll');

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
//# sourceMappingURL=concat.js.map
},{"../util/isScheduler":175,"./of":105,"./from":95,"../operators/concatAll":179}],92:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defer = defer;

var _Observable = require('../Observable');

var _from = require('./from');

var _empty = require('./empty');

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
//# sourceMappingURL=defer.js.map
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
},{"../Observable":46,"./from":95,"./empty":93}],94:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forkJoin = forkJoin;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _empty = require('./empty');

var _subscribeToResult = require('../util/subscribeToResult');

var _OuterSubscriber = require('../OuterSubscriber');

var _map = require('../operators/map');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
} /** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */

var ForkJoinSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=forkJoin.js.map
},{"tslib":141,"../Observable":46,"../util/isArray":142,"./empty":93,"../util/subscribeToResult":177,"../OuterSubscriber":176,"../operators/map":174}],96:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEvent = fromEvent;

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _isFunction = require('../util/isFunction');

var _map = require('../operators/map');

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
//# sourceMappingURL=fromEvent.js.map
},{"../Observable":46,"../util/isArray":142,"../util/isFunction":144,"../operators/map":174}],97:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEventPattern = fromEventPattern;

var _Observable = require('../Observable');

var _isArray = require('../util/isArray');

var _isFunction = require('../util/isFunction');

var _map = require('../operators/map');

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
//# sourceMappingURL=fromEventPattern.js.map
},{"../Observable":46,"../util/isArray":142,"../util/isFunction":144,"../operators/map":174}],98:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = generate;

var _Observable = require('../Observable');

var _identity = require('../util/identity');

var _isScheduler = require('../util/isScheduler');

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
} /** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */

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
//# sourceMappingURL=generate.js.map
},{"../Observable":46,"../util/identity":81,"../util/isScheduler":175}],99:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iif = iif;

var _defer = require('./defer');

var _empty = require('./empty');

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
//# sourceMappingURL=iif.js.map
},{"./defer":92,"./empty":93}],188:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isNumeric = isNumeric;

var _isArray = require('./isArray');

function isNumeric(val) {
    return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
}
//# sourceMappingURL=isNumeric.js.map
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */
},{"./isArray":142}],100:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = interval;

var _Observable = require('../Observable');

var _async = require('../scheduler/async');

var _isNumeric = require('../util/isNumeric');

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
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
} /** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */

function dispatch(state) {
    var subscriber = state.subscriber,
        counter = state.counter,
        period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map
},{"../Observable":46,"../scheduler/async":75,"../util/isNumeric":188}],101:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = merge;

var _Observable = require('../Observable');

var _isScheduler = require('../util/isScheduler');

var _mergeAll = require('../operators/mergeAll');

var _fromArray = require('./fromArray');

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
//# sourceMappingURL=merge.js.map
},{"../Observable":46,"../util/isScheduler":175,"../operators/mergeAll":189,"./fromArray":178}],102:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NEVER = undefined;
exports.never = never;

var _Observable = require('../Observable');

var _noop = require('../util/noop');

/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */
var NEVER = /*@__PURE__*/exports.NEVER = new _Observable.Observable(_noop.noop);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map
},{"../Observable":46,"../util/noop":80}],103:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = onErrorResumeNext;

var _Observable = require('../Observable');

var _from = require('./from');

var _isArray = require('../util/isArray');

var _empty = require('./empty');

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
//# sourceMappingURL=onErrorResumeNext.js.map
},{"../Observable":46,"./from":95,"../util/isArray":142,"./empty":93}],104:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairs = pairs;
exports.dispatch = dispatch;

var _Observable = require('../Observable');

var _Subscription = require('../Subscription');

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
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
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
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        } else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map
},{"../Observable":46,"../Subscription":52}],106:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RaceSubscriber = exports.RaceOperator = undefined;
exports.race = race;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _isArray = require('../util/isArray');

var _fromArray = require('./fromArray');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
} /** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */

var RaceOperator = /*@__PURE__*/function () {
    function RaceOperator() {}
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}();
exports.RaceOperator = RaceOperator;

var RaceSubscriber = /*@__PURE__*/function (_super) {
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
//# sourceMappingURL=race.js.map
},{"tslib":141,"../util/isArray":142,"./fromArray":178,"../OuterSubscriber":176,"../util/subscribeToResult":177}],107:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.range = range;
exports.dispatch = dispatch;

var _Observable = require('../Observable');

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
                index: index, count: count, start: start, subscriber: subscriber
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
} /** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */
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
//# sourceMappingURL=range.js.map
},{"../Observable":46}],109:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = timer;

var _Observable = require('../Observable');

var _async = require('../scheduler/async');

var _isNumeric = require('../util/isNumeric');

var _isScheduler = require('../util/isScheduler');

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
            index: 0, period: period, subscriber: subscriber
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
//# sourceMappingURL=timer.js.map
},{"../Observable":46,"../scheduler/async":75,"../util/isNumeric":188,"../util/isScheduler":175}],110:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.using = using;

var _Observable = require('../Observable');

var _from = require('./from');

var _empty = require('./empty');

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
//# sourceMappingURL=using.js.map
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */
},{"../Observable":46,"./from":95,"./empty":93}],111:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZipSubscriber = exports.ZipOperator = undefined;
exports.zip = zip;

var _tslib = require('tslib');

var tslib_1 = _interopRequireWildcard(_tslib);

var _fromArray = require('./fromArray');

var _isArray = require('../util/isArray');

var _Subscriber = require('../Subscriber');

var _OuterSubscriber = require('../OuterSubscriber');

var _subscribeToResult = require('../util/subscribeToResult');

var _iterator = require('../../internal/symbol/iterator');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
} /** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */

var ZipOperator = /*@__PURE__*/function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}();
exports.ZipOperator = ZipOperator;

var ZipSubscriber = /*@__PURE__*/function (_super) {
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

var StaticIterator = /*@__PURE__*/function () {
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
var StaticArrayIterator = /*@__PURE__*/function () {
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
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}();
var ZipBufferIterator = /*@__PURE__*/function (_super) {
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
            return { value: null, done: true };
        } else {
            return { value: buffer.shift(), done: false };
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
//# sourceMappingURL=zip.js.map
},{"tslib":141,"./fromArray":178,"../util/isArray":142,"../Subscriber":53,"../OuterSubscriber":176,"../util/subscribeToResult":177,"../../internal/symbol/iterator":190}],28:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Observable = require('./internal/Observable');

Object.defineProperty(exports, 'Observable', {
  enumerable: true,
  get: function () {
    return _Observable.Observable;
  }
});

var _ConnectableObservable = require('./internal/observable/ConnectableObservable');

Object.defineProperty(exports, 'ConnectableObservable', {
  enumerable: true,
  get: function () {
    return _ConnectableObservable.ConnectableObservable;
  }
});

var _groupBy = require('./internal/operators/groupBy');

Object.defineProperty(exports, 'GroupedObservable', {
  enumerable: true,
  get: function () {
    return _groupBy.GroupedObservable;
  }
});

var _observable = require('./internal/symbol/observable');

Object.defineProperty(exports, 'observable', {
  enumerable: true,
  get: function () {
    return _observable.observable;
  }
});

var _Subject = require('./internal/Subject');

Object.defineProperty(exports, 'Subject', {
  enumerable: true,
  get: function () {
    return _Subject.Subject;
  }
});

var _BehaviorSubject = require('./internal/BehaviorSubject');

Object.defineProperty(exports, 'BehaviorSubject', {
  enumerable: true,
  get: function () {
    return _BehaviorSubject.BehaviorSubject;
  }
});

var _ReplaySubject = require('./internal/ReplaySubject');

Object.defineProperty(exports, 'ReplaySubject', {
  enumerable: true,
  get: function () {
    return _ReplaySubject.ReplaySubject;
  }
});

var _AsyncSubject = require('./internal/AsyncSubject');

Object.defineProperty(exports, 'AsyncSubject', {
  enumerable: true,
  get: function () {
    return _AsyncSubject.AsyncSubject;
  }
});

var _asap = require('./internal/scheduler/asap');

Object.defineProperty(exports, 'asapScheduler', {
  enumerable: true,
  get: function () {
    return _asap.asap;
  }
});

var _async = require('./internal/scheduler/async');

Object.defineProperty(exports, 'asyncScheduler', {
  enumerable: true,
  get: function () {
    return _async.async;
  }
});

var _queue = require('./internal/scheduler/queue');

Object.defineProperty(exports, 'queueScheduler', {
  enumerable: true,
  get: function () {
    return _queue.queue;
  }
});

var _animationFrame = require('./internal/scheduler/animationFrame');

Object.defineProperty(exports, 'animationFrameScheduler', {
  enumerable: true,
  get: function () {
    return _animationFrame.animationFrame;
  }
});

var _VirtualTimeScheduler = require('./internal/scheduler/VirtualTimeScheduler');

Object.defineProperty(exports, 'VirtualTimeScheduler', {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, 'VirtualAction', {
  enumerable: true,
  get: function () {
    return _VirtualTimeScheduler.VirtualAction;
  }
});

var _Scheduler = require('./internal/Scheduler');

Object.defineProperty(exports, 'Scheduler', {
  enumerable: true,
  get: function () {
    return _Scheduler.Scheduler;
  }
});

var _Subscription = require('./internal/Subscription');

Object.defineProperty(exports, 'Subscription', {
  enumerable: true,
  get: function () {
    return _Subscription.Subscription;
  }
});

var _Subscriber = require('./internal/Subscriber');

Object.defineProperty(exports, 'Subscriber', {
  enumerable: true,
  get: function () {
    return _Subscriber.Subscriber;
  }
});

var _Notification = require('./internal/Notification');

Object.defineProperty(exports, 'Notification', {
  enumerable: true,
  get: function () {
    return _Notification.Notification;
  }
});

var _pipe = require('./internal/util/pipe');

Object.defineProperty(exports, 'pipe', {
  enumerable: true,
  get: function () {
    return _pipe.pipe;
  }
});

var _noop = require('./internal/util/noop');

Object.defineProperty(exports, 'noop', {
  enumerable: true,
  get: function () {
    return _noop.noop;
  }
});

var _identity = require('./internal/util/identity');

Object.defineProperty(exports, 'identity', {
  enumerable: true,
  get: function () {
    return _identity.identity;
  }
});

var _isObservable = require('./internal/util/isObservable');

Object.defineProperty(exports, 'isObservable', {
  enumerable: true,
  get: function () {
    return _isObservable.isObservable;
  }
});

var _ArgumentOutOfRangeError = require('./internal/util/ArgumentOutOfRangeError');

Object.defineProperty(exports, 'ArgumentOutOfRangeError', {
  enumerable: true,
  get: function () {
    return _ArgumentOutOfRangeError.ArgumentOutOfRangeError;
  }
});

var _EmptyError = require('./internal/util/EmptyError');

Object.defineProperty(exports, 'EmptyError', {
  enumerable: true,
  get: function () {
    return _EmptyError.EmptyError;
  }
});

var _ObjectUnsubscribedError = require('./internal/util/ObjectUnsubscribedError');

Object.defineProperty(exports, 'ObjectUnsubscribedError', {
  enumerable: true,
  get: function () {
    return _ObjectUnsubscribedError.ObjectUnsubscribedError;
  }
});

var _UnsubscriptionError = require('./internal/util/UnsubscriptionError');

Object.defineProperty(exports, 'UnsubscriptionError', {
  enumerable: true,
  get: function () {
    return _UnsubscriptionError.UnsubscriptionError;
  }
});

var _TimeoutError = require('./internal/util/TimeoutError');

Object.defineProperty(exports, 'TimeoutError', {
  enumerable: true,
  get: function () {
    return _TimeoutError.TimeoutError;
  }
});

var _bindCallback = require('./internal/observable/bindCallback');

Object.defineProperty(exports, 'bindCallback', {
  enumerable: true,
  get: function () {
    return _bindCallback.bindCallback;
  }
});

var _bindNodeCallback = require('./internal/observable/bindNodeCallback');

Object.defineProperty(exports, 'bindNodeCallback', {
  enumerable: true,
  get: function () {
    return _bindNodeCallback.bindNodeCallback;
  }
});

var _combineLatest = require('./internal/observable/combineLatest');

Object.defineProperty(exports, 'combineLatest', {
  enumerable: true,
  get: function () {
    return _combineLatest.combineLatest;
  }
});

var _concat = require('./internal/observable/concat');

Object.defineProperty(exports, 'concat', {
  enumerable: true,
  get: function () {
    return _concat.concat;
  }
});

var _defer = require('./internal/observable/defer');

Object.defineProperty(exports, 'defer', {
  enumerable: true,
  get: function () {
    return _defer.defer;
  }
});

var _empty = require('./internal/observable/empty');

Object.defineProperty(exports, 'empty', {
  enumerable: true,
  get: function () {
    return _empty.empty;
  }
});

var _forkJoin = require('./internal/observable/forkJoin');

Object.defineProperty(exports, 'forkJoin', {
  enumerable: true,
  get: function () {
    return _forkJoin.forkJoin;
  }
});

var _from = require('./internal/observable/from');

Object.defineProperty(exports, 'from', {
  enumerable: true,
  get: function () {
    return _from.from;
  }
});

var _fromEvent = require('./internal/observable/fromEvent');

Object.defineProperty(exports, 'fromEvent', {
  enumerable: true,
  get: function () {
    return _fromEvent.fromEvent;
  }
});

var _fromEventPattern = require('./internal/observable/fromEventPattern');

Object.defineProperty(exports, 'fromEventPattern', {
  enumerable: true,
  get: function () {
    return _fromEventPattern.fromEventPattern;
  }
});

var _generate = require('./internal/observable/generate');

Object.defineProperty(exports, 'generate', {
  enumerable: true,
  get: function () {
    return _generate.generate;
  }
});

var _iif = require('./internal/observable/iif');

Object.defineProperty(exports, 'iif', {
  enumerable: true,
  get: function () {
    return _iif.iif;
  }
});

var _interval = require('./internal/observable/interval');

Object.defineProperty(exports, 'interval', {
  enumerable: true,
  get: function () {
    return _interval.interval;
  }
});

var _merge = require('./internal/observable/merge');

Object.defineProperty(exports, 'merge', {
  enumerable: true,
  get: function () {
    return _merge.merge;
  }
});

var _never = require('./internal/observable/never');

Object.defineProperty(exports, 'never', {
  enumerable: true,
  get: function () {
    return _never.never;
  }
});

var _of = require('./internal/observable/of');

Object.defineProperty(exports, 'of', {
  enumerable: true,
  get: function () {
    return _of.of;
  }
});

var _onErrorResumeNext = require('./internal/observable/onErrorResumeNext');

Object.defineProperty(exports, 'onErrorResumeNext', {
  enumerable: true,
  get: function () {
    return _onErrorResumeNext.onErrorResumeNext;
  }
});

var _pairs = require('./internal/observable/pairs');

Object.defineProperty(exports, 'pairs', {
  enumerable: true,
  get: function () {
    return _pairs.pairs;
  }
});

var _race = require('./internal/observable/race');

Object.defineProperty(exports, 'race', {
  enumerable: true,
  get: function () {
    return _race.race;
  }
});

var _range = require('./internal/observable/range');

Object.defineProperty(exports, 'range', {
  enumerable: true,
  get: function () {
    return _range.range;
  }
});

var _throwError = require('./internal/observable/throwError');

Object.defineProperty(exports, 'throwError', {
  enumerable: true,
  get: function () {
    return _throwError.throwError;
  }
});

var _timer = require('./internal/observable/timer');

Object.defineProperty(exports, 'timer', {
  enumerable: true,
  get: function () {
    return _timer.timer;
  }
});

var _using = require('./internal/observable/using');

Object.defineProperty(exports, 'using', {
  enumerable: true,
  get: function () {
    return _using.using;
  }
});

var _zip = require('./internal/observable/zip');

Object.defineProperty(exports, 'zip', {
  enumerable: true,
  get: function () {
    return _zip.zip;
  }
});
Object.defineProperty(exports, 'EMPTY', {
  enumerable: true,
  get: function () {
    return _empty.EMPTY;
  }
});
Object.defineProperty(exports, 'NEVER', {
  enumerable: true,
  get: function () {
    return _never.NEVER;
  }
});

var _config = require('./internal/config');

Object.defineProperty(exports, 'config', {
  enumerable: true,
  get: function () {
    return _config.config;
  }
});
},{"./internal/Observable":46,"./internal/observable/ConnectableObservable":71,"./internal/operators/groupBy":72,"./internal/symbol/observable":73,"./internal/Subject":47,"./internal/BehaviorSubject":48,"./internal/ReplaySubject":49,"./internal/AsyncSubject":50,"./internal/scheduler/asap":74,"./internal/scheduler/async":75,"./internal/scheduler/queue":76,"./internal/scheduler/animationFrame":77,"./internal/scheduler/VirtualTimeScheduler":78,"./internal/Scheduler":51,"./internal/Subscription":52,"./internal/Subscriber":53,"./internal/Notification":54,"./internal/util/pipe":79,"./internal/util/noop":80,"./internal/util/identity":81,"./internal/util/isObservable":82,"./internal/util/ArgumentOutOfRangeError":83,"./internal/util/EmptyError":84,"./internal/util/ObjectUnsubscribedError":85,"./internal/util/UnsubscriptionError":86,"./internal/util/TimeoutError":87,"./internal/observable/bindCallback":88,"./internal/observable/bindNodeCallback":89,"./internal/observable/combineLatest":90,"./internal/observable/concat":91,"./internal/observable/defer":92,"./internal/observable/empty":93,"./internal/observable/forkJoin":94,"./internal/observable/from":95,"./internal/observable/fromEvent":96,"./internal/observable/fromEventPattern":97,"./internal/observable/generate":98,"./internal/observable/iif":99,"./internal/observable/interval":100,"./internal/observable/merge":101,"./internal/observable/never":102,"./internal/observable/of":105,"./internal/observable/onErrorResumeNext":103,"./internal/observable/pairs":104,"./internal/observable/race":106,"./internal/observable/range":107,"./internal/observable/throwError":108,"./internal/observable/timer":109,"./internal/observable/using":110,"./internal/observable/zip":111,"./internal/config":55}],22:[function(require,module,exports) {
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
var rxjs_1 = require("rxjs");
var indiv_1 = require("indiv");
// import { Injectable } from '../../../InDiv/src';
var TestService = /** @class */function () {
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
    TestService = __decorate([indiv_1.Injectable(), __metadata("design:paramtypes", [])], TestService);
    return TestService;
}();
exports.default = TestService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmljZS90ZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2QkFBNkM7QUFDN0MsK0JBQW1DO0FBQ25DLG1EQUFtRDtBQUduRDtJQUlFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLEdBQXlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDNUIsSUFBSSxFQUFFLEdBQUc7U0FDVixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLEtBQVU7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEIsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0saUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUF2QmtCLFdBQVc7UUFEL0Isa0JBQVUsRUFBRTs7T0FDUSxXQUFXLENBd0IvQjtJQUFELGtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7a0JBeEJvQixXQUFXIn0=
},{"rxjs":28,"indiv":4}],37:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, HasRender, SetState, Injected, WatchState, OnInit, OnDestory, RouteChange } from '../../../../../InDiv/src';
var component_1 = require("../../../constants/component");
var test_service_1 = __importDefault(require("../../../service/test.service"));
var DocsComponentContainer = /** @class */function () {
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
    DocsComponentContainer = __decorate([indiv_1.Injected, indiv_1.Component({
        selector: 'docs-component-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\" nv-on:click=\"@click(code, $index)\">{{@showText(code.title)}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], DocsComponentContainer);
    return DocsComponentContainer;
}();
exports.default = DocsComponentContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2NvbXBvbmVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUFxRjtBQUNyRixtSUFBbUk7QUFDbkksMERBQTZEO0FBRTdELCtFQUF3RDtBQWdEeEQ7SUFRRSxnQ0FDVSxLQUFrQjtRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUseUJBQWEsRUFBRTtTQUN0QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLHlDQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDZDQUFZLEdBQW5CLFVBQW9CLFFBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDBDQUFTLEdBQWhCLFVBQWlCLEtBQVU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sc0NBQUssR0FBWixVQUFhLElBQVMsRUFBRSxLQUFhO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSx5Q0FBUSxHQUFmLFVBQWdCLElBQVM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sNENBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLDRDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLDhDQUFhLEdBQXBCLFVBQXFCLFNBQWtCLEVBQUUsUUFBaUI7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7SUFqRGtCLHNCQUFzQjtRQTFCMUMsZ0JBQVE7UUFDUixpQkFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSwwQkFBMEI7WUFDcEMsUUFBUSxFQUFFLENBQUMsdXJCQWVWLENBQUM7U0FPSCxDQUFDOzZEQVVpQixzQkFBVyxvQkFBWCxzQkFBVztPQVRULHNCQUFzQixDQWtEMUM7SUFBRCw2QkFBQztDQUFBLEFBbERELElBa0RDO2tCQWxEb0Isc0JBQXNCIn0=
},{"indiv":4,"../../../constants/component":132,"../../../service/test.service":22}],136:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.templateInfo = function () {
    return [{
        h1: '模板语法',
        p: ['从使用模型-视图-控制器 (MVC) 或模型-视图-视图模型 (MVVM) 的经验中，很多开发人员都熟悉了组件和模板这两个概念。', '在 InDiv 中，组件扮演着控制器或视图模型的角色，模板则扮演视图的角色。', '模板很像字符串的HTML，但是它还包含 InDiv 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。', '你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。', 'InDiv 模板指令使用 nv- 开头，下面介绍一下 InDiv 的模板语法。', '1. 拥有特殊渲染方法的指令有 nv-model nv-text nv-html nv-if nv-class nv-repeat nv-key nv-on:Event。', '2. 如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。例如：nv-src nv-href nv-alt', '3. 内置指令接收2种：', '(1) $.xxx(指代this.state.xxx) 和 nv-repeat被循环的itme值：nv-text="$.text" nv-text="repeatData.text"', '(2) （其实就是filter）除 nv-on:Event 和 nv-model 外，其他指令可以接收 @开头 加 组件实例上带返回值的方法 ，参数可以使用事件指令中除了$event之外的参数，指令的值渲染为方法返回值：nv-text="@bindText($.text, $index, $element)"'],
        info: [{
            title: '1. 事件指令',
            p: ['以 nv-on:event 开头, event 为未加on的事件名， 指令值为 @开头 加 组件实例上的方法', '例如：nv-on:click="@goTo()"', '方法可使用参数：'],
            pchild: ["- Element => $element", "- event => $event", "- string => '1','2','3'", " - number => 1,2,3", " - index > $index", "- \u53D8\u91CF: \u4EC5\u80FD\u4F20\u9012state\u4E0A\u7684\u503C\uFF0C \u901A\u8FC7 $.xxx \u6807\u793A", "- repeat value: \u4F20\u9012nv-repeat='let item in array'\u7684item\u503C\uFF0C\u5982\uFF1A nv-on:click=\"@show(nav)\" nv-repeat=\"let nav in $.navList\" nv-key=\"nav.id\""],
            code: "\n  <a class=\"nav\" nv-on:click=\"@goTo($event, $index, 1, 'state', $.nav.to)\">{{$.nav.name}}</a>\n\n  public goTo(event: Event, index: number, aa: number, s: string, to: string) {\n    this.$setLocation(to);\n  }\n "
        }, {
            title: '2. text 指令',
            p: ['该指令可直接渲染为标签内的文字，或 <input> 的 value。'],
            pchild: ['可以使用 nv-text 也可以使用模板语法 {{}}。'],
            code: "\n  <p nv-text=\"$.b\"></p>\n  <p nv-text=\"@returnValue($.b)\"></p>\n  <p>{{$.b}}</p>\n  <p>{{@returnValue($.b)}}</p>\n "
        }, {
            title: '3. html 指令',
            p: ['该指令可直接渲染为标签内的 HTML，内部实现相当于 innerHTML。'],
            pchild: ['可以使用 nv-html。'],
            code: "\n  <p nv-html=\"$.b\"></p>\n  <p nv-html=\"@returnValue($.b)\"></p>\n "
        }, {
            title: '4. model 指令',
            p: ['此指令等同于 nv-text 和 nv-on:input 同时使用'],
            pchild: ['仅仅可以对 <input> 使用 nv-model, model会主动更新被绑定的值并更新视图。'],
            code: "\n  <input nv-model=\"$.c\"/>\n "
        }, {
            title: '5. class 指令',
            p: ['指令会主动把被绑定的值作为 className 增加到元素的class中。'],
            pchild: ['使用 nv-class。'],
            code: "\n  <input nv-class=\"$.d\"/>\n  <input nv-class=\"@returnValue($.d)\"/>\n "
        }, {
            title: '6. if 指令',
            p: ['如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树中显示或移除。'],
            pchild: ['使用 nv-if。'],
            code: "\n  <input nv-if=\"$.e\"/>\n  <input nv-if=\"@returnValue($.e)\"/>\n "
        }, {
            title: '7. repeat 指令',
            p: ['repeat 是一个重复器指令 —— 自定义数据显示的一种方式。', '你的目标是展示一个由多个条目组成的列表。', '首先定义了一个 HTML 块，它规定了单个条目应该如何显示。', '再告诉 InDiv 把这个块当做模板，渲染列表中的每个条目。', '该指令可以搭配 nv-key 指令使用提高渲染性能。'],
            pchild: ['使用 nv-repeat="let item in Array"语法, Array只能为其他被repeat值或组件实例state上的数组。', '可以通过 let item in Array 的语法定义 nv-repeat 指令，在元素本身或子元素可以直接使用 item 作为值。', '此指令十分耗费性能，不建议多用，并且建议搭配 nv-key 使用。'],
            code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in $.arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
        }, {
            title: '8. key 指令',
            p: ['搭配 repeat 指令使用，为每个被 repeat 的元素指定一个唯一的值', '该指令会提高 repeat 指令的渲染性能，', '每次虚拟DOM更新时会优先匹配 tagName 和 key 都相同的虚拟DOM。'],
            pchild: ['nv-key 的值必须在 同级且同标签名的元素 中为唯一值', '建议如果对 自定义组件的父元素 或 自定义组件本身 使用 nv-repeat，尽量加上 nv-key 指令来避免重复创建组件实例，并保存组件内部状态。'],
            code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in $.arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
        }, {
            title: '9. 其他指令',
            p: ['如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。'],
            pchild: ['例如：nv-src nv-href nv-alt等'],
            code: "\n  <img nv-src=\"$.src\" nv-alt=\"$.alt\"/>\n  <img nv-src=\"@return($.src)\" nv-alt=\"@return($.alt)\"/>\n "
        }]
    }];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFlBQVksR0FBRyxjQUFNLE9BQUE7SUFDaEM7UUFDRSxFQUFFLEVBQUUsTUFBTTtRQUNWLENBQUMsRUFBRTtZQUNELGtFQUFrRTtZQUNsRSx3Q0FBd0M7WUFDeEMsMEVBQTBFO1lBQzFFLDhDQUE4QztZQUM5Qyx5Q0FBeUM7WUFDekMsdUZBQXVGO1lBQ3ZGLDRGQUE0RjtZQUM1RixjQUFjO1lBQ2QsNkZBQTZGO1lBQzdGLDZKQUE2SjtTQUM5SjtRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixDQUFDLEVBQUU7b0JBQ0Qsd0RBQXdEO29CQUN4RCwwQkFBMEI7b0JBQzFCLFVBQVU7aUJBQ1g7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix1R0FBaUM7b0JBQ2pDLDZLQUFvSTtpQkFDckk7Z0JBQ0QsSUFBSSxFQUFFLDROQU1aO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsQ0FBQyxFQUFFO29CQUNELG9DQUFvQztpQkFDckM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDhCQUE4QjtpQkFDL0I7Z0JBQ0QsSUFBSSxFQUFFLDJIQUtaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsQ0FBQyxFQUFFO29CQUNELHVDQUF1QztpQkFDeEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGVBQWU7aUJBQ2hCO2dCQUNELElBQUksRUFBRSx5RUFHWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLENBQUMsRUFBRTtvQkFDRCxtQ0FBbUM7aUJBQ3BDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixrREFBa0Q7aUJBQ25EO2dCQUNELElBQUksRUFBRSxrQ0FFWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLENBQUMsRUFBRTtvQkFDRCx1Q0FBdUM7aUJBQ3hDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixjQUFjO2lCQUNmO2dCQUNELElBQUksRUFBRSw2RUFHWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLENBQUMsRUFBRTtvQkFDRCxvREFBb0Q7aUJBQ3JEO2dCQUNELE1BQU0sRUFBRTtvQkFDTixXQUFXO2lCQUNaO2dCQUNELElBQUksRUFBRSx1RUFHWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLENBQUMsRUFBRTtvQkFDRCxrQ0FBa0M7b0JBQ2xDLHNCQUFzQjtvQkFDdEIsZ0NBQWdDO29CQUNoQyxnQ0FBZ0M7b0JBQ2hDLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHVFQUF1RTtvQkFDdkUscUVBQXFFO29CQUNyRSxtQ0FBbUM7aUJBQ3BDO2dCQUNELElBQUksRUFBRSxzUEFLWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLENBQUMsRUFBRTtvQkFDRCx3Q0FBd0M7b0JBQ3hDLHdCQUF3QjtvQkFDeEIsMENBQTBDO2lCQUMzQztnQkFDRCxNQUFNLEVBQUU7b0JBQ04sK0JBQStCO29CQUMvQiw2RUFBNkU7aUJBQzlFO2dCQUNELElBQUksRUFBRSxzUEFLWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLENBQUMsRUFBRTtvQkFDRCxpRUFBaUU7aUJBQ2xFO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwyQkFBMkI7aUJBQzVCO2dCQUNELElBQUksRUFBRSwrR0FHWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBaEtpQyxDQWdLakMsQ0FBQyJ9
},{}],39:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, HasRender, SetState } from '../../../../../InDiv/src';
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
    DocsTemplateContainer = __decorate([indiv_1.Component({
        selector: 'docs-template-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\">{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsTemplateContainer);
    return DocsTemplateContainer;
}();
exports.default = DocsTemplateContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3RlbXBsYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQXVEO0FBQ3ZELDZFQUE2RTtBQUM3RSx3REFBMkQ7QUF3QzNEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLHVCQUFZLEVBQUU7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFFTSwyQ0FBVyxHQUFsQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFia0IscUJBQXFCO1FBbkJ6QyxpQkFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLENBQUMsdW9CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixxQkFBcUIsQ0FjekM7SUFBRCw0QkFBQztDQUFBLEFBZEQsSUFjQztrQkFkb0IscUJBQXFCIn0=
},{"indiv":4,"../../../constants/template":136}],134:[function(require,module,exports) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsVUFBVSxHQUFHLGNBQU0sT0FBQTtJQUM5QjtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFO1lBQ0QsK0RBQStEO1lBQy9ELHNDQUFzQztTQUN2QztRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixDQUFDLEVBQUU7b0JBQ0QsaUNBQWlDO29CQUNqQywyQ0FBMkM7b0JBQzNDLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHFDQUFxQztvQkFDckMsK0JBQStCO29CQUMvQiwyQ0FBMkM7b0JBQzNDLG9CQUFvQjtpQkFDckI7Z0JBQ0QsSUFBSSxFQUFFLDY2QkFxRFo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLENBQUMsRUFBRTtvQkFDRCx1QkFBdUI7aUJBQ3hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwwQ0FBMEM7b0JBQzFDLGlGQUFpRjtvQkFDakYsNkJBQTZCO29CQUM3QixvQ0FBb0M7aUJBQ3JDO2dCQUNELElBQUksRUFBRSxzWUE0Qlo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLENBQUMsRUFBRTtvQkFDRCx5QkFBeUI7aUJBQzFCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixzQkFBc0I7b0JBQ3RCLDRFQUE0RTtpQkFDN0U7Z0JBQ0QsSUFBSSxFQUFFLDZtQkE0Q1o7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLENBQUMsRUFBRTtvQkFDRCx1QkFBdUI7b0JBQ3ZCLDRCQUE0QjtvQkFDNUIsa0RBQWtEO2lCQUNuRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04saUJBQWlCO29CQUNqQix5RkFBeUY7b0JBQ3pGLGdHQUFnRztvQkFDaEcsMEZBQTBGO29CQUMxRiwwR0FBMEc7b0JBQzFHLHVHQUF1RztpQkFDeEc7Z0JBQ0QsSUFBSSxFQUFFLCtpQ0FvRVo7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxvQkFBb0I7Z0JBQzNCLENBQUMsRUFBRTtvQkFDRCx1QkFBdUI7aUJBQ3hCO2dCQUNELE1BQU0sRUFBRTtvQkFDTixrQ0FBa0M7b0JBQ2xDLCtCQUErQjtvQkFDL0Isd0RBQXdEO29CQUN4RCw2Q0FBNkM7aUJBQzlDO2dCQUNELElBQUksRUFBRSwreEJBc0RaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixDQUFDLEVBQUU7b0JBQ0QsdUJBQXVCO2lCQUN4QjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sK0JBQStCO29CQUMvQixrRUFBa0U7b0JBQ2xFLHlDQUF5QztpQkFDMUM7Z0JBQ0QsSUFBSSxFQUFFLG1TQWtCWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBcFcrQixDQW9XL0IsQ0FBQyJ9
},{}],38:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, HasRender, SetState } from '../../../../../InDiv/src';
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
    DocsModuleContainer = __decorate([indiv_1.Component({
        selector: 'docs-module-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsModuleContainer);
    return DocsModuleContainer;
}();
exports.default = DocsModuleContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL21vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUF1RDtBQUN2RCw2RUFBNkU7QUFDN0Usb0RBQXVEO0FBd0N2RDtJQUtFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSxtQkFBVSxFQUFFO1NBQ25CLENBQUM7SUFDSixDQUFDO0lBRU0seUNBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBYmtCLG1CQUFtQjtRQW5CdkMsaUJBQVMsQ0FBUTtZQUNoQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSxDQUFDLHNuQkFlVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIsbUJBQW1CLENBY3ZDO0lBQUQsMEJBQUM7Q0FBQSxBQWRELElBY0M7a0JBZG9CLG1CQUFtQiJ9
},{"indiv":4,"../../../constants/module":134}],131:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxXQUFXLEdBQUcsY0FBTSxPQUFBO0lBQy9CO1FBQ0UsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUU7WUFDRCxpQ0FBaUM7WUFDakMsK0JBQStCO1lBQy9CLDREQUE0RDtZQUM1RCwrQkFBK0I7U0FDaEM7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxDQUFDLEVBQUU7b0JBQ0QsdUVBQXVFO29CQUN2RSx3Q0FBd0M7b0JBQ3hDLG9FQUFvRTtvQkFDcEUsbURBQW1EO29CQUNuRCxnREFBZ0Q7aUJBQ2pEO2dCQUNELE1BQU0sRUFBRTtvQkFDTiwyRUFBMkU7b0JBQzNFLHVIQUF1SDtvQkFDdkgsbUNBQW1DO29CQUNuQyxzREFBc0Q7b0JBQ3RELHlFQUF5RTtvQkFDekUsd0RBQXdEO2lCQUN6RDtnQkFDRCxJQUFJLEVBQUUsbXpCQTZCWjthQUNLO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsQ0FBQyxFQUFFO29CQUNELCtDQUErQztvQkFDL0MsaUNBQWlDO29CQUNqQyw0Q0FBNEM7aUJBQzdDO2dCQUNELE1BQU0sRUFBRTtvQkFDTiw4Q0FBOEM7b0JBQzlDLCtDQUErQztvQkFDL0Msa0NBQWtDO29CQUNsQyxtREFBbUQ7b0JBQ25ELDhDQUE4QztvQkFDOUMscURBQXFEO29CQUNyRCxrREFBa0Q7b0JBQ2xELHdEQUF3RDtpQkFDekQ7Z0JBQ0QsSUFBSSxFQUFFLGt2QkF1Q1o7YUFDSztTQUNGO0tBQ0Y7Q0FDRixFQXRIZ0MsQ0FzSGhDLENBQUMifQ==
},{}],40:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, HasRender, SetState, OnDestory } from '../../../../../InDiv/src';
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
    DocsServiceContainer = __decorate([indiv_1.Component({
        selector: 'docs-service-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsServiceContainer);
    return DocsServiceContainer;
}();
exports.default = DocsServiceContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3NlcnZpY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBa0U7QUFDbEUsd0ZBQXdGO0FBQ3hGLHNEQUF5RDtBQXdDekQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUscUJBQVcsRUFBRTtTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVNLDBDQUFXLEdBQWxCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsOEJBQThCLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sMENBQVcsR0FBbEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBakJrQixvQkFBb0I7UUFuQnhDLGlCQUFTLENBQVE7WUFDaEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsQ0FBQyxzbkJBZVYsQ0FBQztTQUNILENBQUM7O09BQ21CLG9CQUFvQixDQWtCeEM7SUFBRCwyQkFBQztDQUFBLEFBbEJELElBa0JDO2tCQWxCb0Isb0JBQW9CIn0=
},{"indiv":4,"../../../constants/service":131}],138:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFNBQVMsR0FBRyxjQUFNLE9BQUE7SUFDN0I7UUFDRSxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRTtZQUNELG1EQUFtRDtZQUNuRCwrQkFBK0I7WUFDL0Isc0NBQXNDO1lBQ3RDLHlFQUF5RTtZQUN6RSw2Q0FBNkM7WUFDN0MsK0NBQStDO1lBQy9DLDRDQUE0QztTQUM3QztRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLENBQUMsRUFBRTtvQkFDRCx1R0FBdUI7b0JBQ3ZCLHFDQUFxQztpQkFDdEM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLDBFQUEwRTtvQkFDMUUsc0dBQXNHO29CQUN0RyxxREFBcUQ7b0JBQ3JELCtDQUErQztpQkFDaEQ7Z0JBQ0QsSUFBSSxFQUFFLHN6QkFpQ1o7YUFDSztZQUNEO2dCQUNFLEtBQUssRUFBRSxXQUFXO2dCQUNsQixDQUFDLEVBQUU7b0JBQ0QsNkRBQTZEO29CQUM3RCwwT0FBb0Y7b0JBQ3BGLHNDQUFzQztpQkFDdkM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGNBQWM7b0JBQ2QsVUFBVTtvQkFDVixVQUFVO29CQUNWLGFBQWE7aUJBQ2Q7Z0JBQ0QsSUFBSSxFQUFFLDRPQVVaO2FBQ0s7WUFDRDtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixDQUFDLEVBQUU7b0JBQ0QsK0JBQStCO29CQUMvQixnQ0FBZ0M7aUJBQ2pDO2dCQUNELE1BQU0sRUFBRTtvQkFDTixzRkFBc0Y7b0JBQ3RGLGlGQUFpRjtvQkFDakYsdUJBQXVCO29CQUN2Qiw2Q0FBNkM7b0JBQzdDLHNEQUFzRDtvQkFDdEQsb0JBQW9CO29CQUNwQixrQ0FBa0M7aUJBQ25DO2dCQUNELElBQUksRUFBRSwrVUFhWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBckg4QixDQXFIOUIsQ0FBQyJ9
},{}],44:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, SetState } from '../../../../../InDiv/src';
var route_1 = require("../../../constants/route");
var DocsRouteContainer = /** @class */function () {
    function DocsRouteContainer() {
        this.state = {
            info: route_1.routeInfo()
        };
    }
    DocsRouteContainer = __decorate([indiv_1.Component({
        selector: 'docs-route-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsRouteContainer);
    return DocsRouteContainer;
}();
exports.default = DocsRouteContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL3JvdXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRDO0FBQzVDLGtFQUFrRTtBQUNsRSxrREFBcUQ7QUF3Q3JEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGlCQUFTLEVBQUU7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFUa0Isa0JBQWtCO1FBbkJ0QyxpQkFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLENBQUMsc25CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixrQkFBa0IsQ0FVdEM7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztrQkFWb0Isa0JBQWtCIn0=
},{"indiv":4,"../../../constants/route":138}],133:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kaXYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25zdGFudHMvaW5kaXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFNBQVMsR0FBRyxjQUFNLE9BQUE7SUFDN0I7UUFDRSxFQUFFLEVBQUUsSUFBSTtRQUNSLENBQUMsRUFBRTtZQUNELG9CQUFvQjtTQUNyQjtRQUNELElBQUksRUFBRTtZQUNKO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLENBQUMsRUFBRTtvQkFDRCx3QkFBd0I7b0JBQ3hCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGNBQWM7b0JBQ2QseUJBQXlCO29CQUN6Qiw2QkFBNkI7b0JBQzdCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsSUFBSSxFQUFFLHdHQUtaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUE1QjhCLENBNEI5QixDQUFDIn0=
},{}],41:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, SetState } from '../../../../../InDiv/src';
var indiv_2 = require("../../../constants/indiv");
var DocsInDivContainer = /** @class */function () {
    function DocsInDivContainer() {
        this.state = {
            info: indiv_2.inDivInfo()
        };
    }
    DocsInDivContainer = __decorate([indiv_1.Component({
        selector: 'docs-indiv-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsInDivContainer);
    return DocsInDivContainer;
}();
exports.default = DocsInDivContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2luZGl2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRDO0FBQzVDLGtFQUFrRTtBQUNsRSxrREFBcUQ7QUF3Q3JEO0lBS0U7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLGlCQUFTLEVBQUU7U0FDbEIsQ0FBQztJQUNKLENBQUM7SUFUa0Isa0JBQWtCO1FBbkJ0QyxpQkFBUyxDQUFRO1lBQ2hCLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLENBQUMsc25CQWVWLENBQUM7U0FDSCxDQUFDOztPQUNtQixrQkFBa0IsQ0FVdEM7SUFBRCx5QkFBQztDQUFBLEFBVkQsSUFVQztrQkFWb0Isa0JBQWtCIn0=
},{"indiv":4,"../../../constants/indiv":133}],135:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9saWJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxPQUFPLEdBQUcsY0FBTSxPQUFBO0lBQzNCO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUU7WUFDRCx3Q0FBd0M7WUFDeEMsMkNBQTJDO1NBQzVDO1FBQ0QsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsQ0FBQyxFQUFFO29CQUNELGdCQUFnQjtpQkFDakI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLHdFQUF3RTtvQkFDeEUsNENBQTRDO29CQUM1QyxtREFBbUQ7b0JBQ25ELDBEQUEwRDtvQkFDMUQsa0RBQWtEO29CQUNsRCxtREFBbUQ7b0JBQ25ELHFDQUFxQztpQkFDdEM7Z0JBQ0QsSUFBSSxFQUFFLHNOQWNaO2FBQ0s7U0FDRjtLQUNGO0NBQ0YsRUF4QzRCLENBd0M1QixDQUFDIn0=
},{}],42:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, SetState } from '../../../../../InDiv/src';
var libs_1 = require("../../../constants/libs");
var DocsLibsContainer = /** @class */function () {
    function DocsLibsContainer() {
        this.state = {
            info: libs_1.libInfo()
        };
    }
    DocsLibsContainer = __decorate([indiv_1.Component({
        selector: 'docs-libs-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsLibsContainer);
    return DocsLibsContainer;
}();
exports.default = DocsLibsContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2xpYnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEM7QUFDNUMsa0VBQWtFO0FBQ2xFLGdEQUFrRDtBQXdDbEQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsY0FBTyxFQUFFO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBVGtCLGlCQUFpQjtRQW5CckMsaUJBQVMsQ0FBUTtZQUNoQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxDQUFDLHNuQkFlVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIsaUJBQWlCLENBVXJDO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7a0JBVm9CLGlCQUFpQiJ9
},{"indiv":4,"../../../constants/libs":135}],137:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbnN0YW50cy9odHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxRQUFRLEdBQUcsY0FBTSxPQUFBO0lBQzVCO1FBQ0UsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUU7WUFDRCwyQ0FBMkM7U0FDNUM7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixDQUFDLEVBQUU7b0JBQ0Qsd0NBQXdDO29CQUN4QywyREFBMkQ7b0JBQzNELGdDQUFnQztpQkFDakM7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGtFQUFrRTtvQkFDbEUscUVBQXFFO29CQUNyRSxrRUFBa0U7b0JBQ2xFLGlFQUFpRTtvQkFDakUsbUVBQW1FO2lCQUNwRTtnQkFDRCxJQUFJLEVBQUUseWtCQTZCWjthQUNLO1NBQ0Y7S0FDRjtDQUNGLEVBdEQ2QixDQXNEN0IsQ0FBQyJ9
},{}],43:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, SetState } from '../../../../../InDiv/src';
var http_1 = require("../../../constants/http");
var DocsHttpContainer = /** @class */function () {
    function DocsHttpContainer() {
        this.state = {
            info: http_1.httpInfo()
        };
    }
    DocsHttpContainer = __decorate([indiv_1.Component({
        selector: 'docs-http-container',
        template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
    }), __metadata("design:paramtypes", [])], DocsHttpContainer);
    return DocsHttpContainer;
}();
exports.default = DocsHttpContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9kb2NzL2h0dHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEM7QUFDNUMsa0VBQWtFO0FBQ2xFLGdEQUFtRDtBQXdDbkQ7SUFLRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsZUFBUSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBVGtCLGlCQUFpQjtRQW5CckMsaUJBQVMsQ0FBUTtZQUNoQixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFFBQVEsRUFBRSxDQUFDLHNuQkFlVixDQUFDO1NBQ0gsQ0FBQzs7T0FDbUIsaUJBQWlCLENBVXJDO0lBQUQsd0JBQUM7Q0FBQSxBQVZELElBVUM7a0JBVm9CLGlCQUFpQiJ9
},{"indiv":4,"../../../constants/http":137}],20:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { NvModule } from '../../../InDiv/src';
var docs_1 = __importDefault(require("../pages/docs"));
var component_1 = __importDefault(require("../pages/docs/component"));
var template_1 = __importDefault(require("../pages/docs/template"));
var module_1 = __importDefault(require("../pages/docs/module"));
var service_1 = __importDefault(require("../pages/docs/service"));
var route_1 = __importDefault(require("../pages/docs/route"));
var indiv_2 = __importDefault(require("../pages/docs/indiv"));
var libs_1 = __importDefault(require("../pages/docs/libs"));
var http_1 = __importDefault(require("../pages/docs/http"));
var test_service_1 = __importDefault(require("../service/test.service"));
var DocsModule = /** @class */function () {
    function DocsModule() {}
    DocsModule = __decorate([indiv_1.NvModule({
        components: [docs_1.default, component_1.default, template_1.default, module_1.default, service_1.default, route_1.default, indiv_2.default, libs_1.default, http_1.default],
        providers: [{
            provide: test_service_1.default,
            useClass: test_service_1.default
        }],
        exports: [docs_1.default, component_1.default, template_1.default, module_1.default, service_1.default, route_1.default, indiv_2.default, libs_1.default, http_1.default]
    })], DocsModule);
    return DocsModule;
}();
exports.default = DocsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL2RvY3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlDO0FBQ2pDLGlEQUFpRDtBQUVqRCx1REFBMEM7QUFDMUMsc0VBQTZEO0FBQzdELG9FQUEyRDtBQUMzRCxnRUFBdUQ7QUFDdkQsa0VBQXlEO0FBQ3pELDhEQUFxRDtBQUNyRCw4REFBcUQ7QUFDckQsNERBQW1EO0FBQ25ELDREQUFtRDtBQUVuRCx5RUFBa0Q7QUFnQ2xEO0lBQUE7SUFBa0MsQ0FBQztJQUFkLFVBQVU7UUE5QjlCLGdCQUFRLENBQUM7WUFDTixVQUFVLEVBQUU7Z0JBQ1IsY0FBYTtnQkFDYixtQkFBc0I7Z0JBQ3RCLGtCQUFxQjtnQkFDckIsZ0JBQW1CO2dCQUNuQixpQkFBb0I7Z0JBQ3BCLGVBQWtCO2dCQUNsQixlQUFrQjtnQkFDbEIsY0FBaUI7Z0JBQ2pCLGNBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQO29CQUNJLE9BQU8sRUFBRSxzQkFBVztvQkFDcEIsUUFBUSxFQUFFLHNCQUFXO2lCQUN4QjthQUNKO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGNBQWE7Z0JBQ2IsbUJBQXNCO2dCQUN0QixrQkFBcUI7Z0JBQ3JCLGdCQUFtQjtnQkFDbkIsaUJBQW9CO2dCQUNwQixlQUFrQjtnQkFDbEIsZUFBa0I7Z0JBQ2xCLGNBQWlCO2dCQUNqQixjQUFpQjthQUNwQjtTQUNKLENBQUM7T0FDbUIsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztrQkFBZCxVQUFVIn0=
},{"indiv":4,"../pages/docs":36,"../pages/docs/component":37,"../pages/docs/template":39,"../pages/docs/module":38,"../pages/docs/service":40,"../pages/docs/route":44,"../pages/docs/indiv":41,"../pages/docs/libs":42,"../pages/docs/http":43,"../service/test.service":22}],116:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],117:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ssrInfo = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uc3RhbnRzL3Nzci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsT0FBTyxHQUFHLGNBQU0sT0FBQTtJQUN6QjtRQUNFLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRTtZQUNELHVCQUF1QjtZQUN2Qiw4Q0FBOEM7WUFDOUMsNENBQTRDO1lBQzVDLGFBQWE7WUFDYiw4QkFBOEI7U0FDL0I7UUFDRCxJQUFJLEVBQUU7WUFDSjtnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixDQUFDLEVBQUU7b0JBQ0QsbUNBQW1DO29CQUNuQywyREFBMkQ7b0JBQzNELHNFQUFzRTtvQkFDdEUsNkRBQTZEO29CQUM3RCxzREFBc0Q7b0JBQ3RELHdCQUF3QjtpQkFDekI7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLGtEQUFrRDtvQkFDbEQsK0RBQStEO29CQUMvRCxzQ0FBc0M7aUJBQ3ZDO2FBQ0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxDQUFDLEVBQUU7b0JBQ0QsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUIsK0NBQStDO2lCQUNoRDtnQkFDRCxNQUFNLEVBQUU7b0JBQ04saUJBQWlCO29CQUNqQixnQ0FBZ0M7b0JBQ2hDLGdCQUFnQjtvQkFDaEIsc0dBQXNHO29CQUN0Ryx1RUFBdUU7b0JBQ3ZFLGlDQUFpQztpQkFDbEM7Z0JBQ0QsSUFBSSxFQUFFLGdoQkFvQlg7YUFDSTtTQUNGO0tBQ0Y7Q0FDRixFQW5FMEIsQ0FtRTFCLENBQUMifQ==
},{}],34:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component } from '../../../../InDiv/src';
var ssr_1 = require("../../constants/ssr");
var SSRContainer = /** @class */function () {
    function SSRContainer() {
        this.state = {
            info: ssr_1.ssrInfo()
        };
    }
    SSRContainer = __decorate([indiv_1.Component({
        selector: 'ssr-container',
        template: "\n        <div class=\"page-container\">\n            <div class=\"info-content\" nv-repeat=\"let info in $.info\">\n                <h1>{{info.h1}}</h1>\n                <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n                <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n                    <h2>{{code.title}}</h2>\n                    <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n                    <div class=\"pchild\" nv-if=\"code.pchild\">\n                    <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n                    </div>\n                    <code-shower nv-if=\"code.code\" codes=\"{code.code}\"></code-shower>\n                </div>\n            </div>\n        </div>\n    "
    }), __metadata("design:paramtypes", [])], SSRContainer);
    return SSRContainer;
}();
exports.default = SSRContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9wYWdlcy9zc3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0I7QUFFdEIsK0JBQWtDO0FBQ2xDLHFEQUFxRDtBQUVyRCwyQ0FBOEM7QUF3QzlDO0lBRUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLGFBQU8sRUFBRTtTQUNsQixDQUFDO0lBQ04sQ0FBQztJQU5nQixZQUFZO1FBbkJoQyxpQkFBUyxDQUFRO1lBQ2QsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLENBQUMsa3VCQWVWLENBQUM7U0FDTCxDQUFDOztPQUNtQixZQUFZLENBT2hDO0lBQUQsbUJBQUM7Q0FBQSxBQVBELElBT0M7a0JBUG9CLFlBQVkifQ==
},{"./style.less":116,"indiv":4,"../../constants/ssr":117}],21:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { NvModule } from '../../../InDiv/src';
var ssr_1 = __importDefault(require("../pages/ssr"));
var SSRModule = /** @class */function () {
    function SSRModule() {}
    SSRModule = __decorate([indiv_1.NvModule({
        components: [ssr_1.default],
        exports: [ssr_1.default]
    })], SSRModule);
    return SSRModule;
}();
exports.default = SSRModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvc3NyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUFpQztBQUNqQyxpREFBaUQ7QUFFakQscURBQXdDO0FBVXhDO0lBQUE7SUFBaUMsQ0FBQztJQUFiLFNBQVM7UUFSN0IsZ0JBQVEsQ0FBQztZQUNOLFVBQVUsRUFBRTtnQkFDUixhQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsYUFBWTthQUNmO1NBQ0osQ0FBQztPQUNtQixTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQWxDLElBQWtDO2tCQUFiLFNBQVMifQ==
},{"indiv":4,"../pages/ssr":34}],33:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],25:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component } from '../../../../InDiv/src';
var RootComponent = /** @class */function () {
    function RootComponent() {
        this.state = {
            showSideBar: 'open'
        };
    }
    RootComponent.prototype.changeShowSideBar = function (value) {
        if (this.state.showSideBar === 'open') {
            this.state.showSideBar = 'close';
        } else {
            this.state.showSideBar = 'open';
        }
    };
    RootComponent = __decorate([indiv_1.Component({
        selector: 'root-component',
        template: "\n        <div class=\"app-container\" nv-class=\"$.showSideBar\">\n            <a href=\"https://github.com/DimaLiLongJi/InDiv\" class=\"github-corner\" aria-label=\"View source on Github\"><svg viewBox=\"0 0 250 250\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a>\n            <side-bar handle-side-bar=\"{@changeShowSideBar}\"></side-bar>\n            <router-render></router-render>\n        </div>\n    "
    }), __metadata("design:paramtypes", [])], RootComponent);
    return RootComponent;
}();
exports.default = RootComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3Jvb3QtY29tcG9uZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0JBQXNCO0FBRXRCLCtCQUFrQztBQUNsQyxxREFBcUQ7QUFZckQ7SUFJSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDO0lBQ04sQ0FBQztJQUVNLHlDQUFpQixHQUF4QixVQUF5QixLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO1lBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUNwQzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQWhCZ0IsYUFBYTtRQVZqQyxpQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsQ0FBQyxnMENBTVYsQ0FBQztTQUNMLENBQUM7O09BQ21CLGFBQWEsQ0FpQmpDO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztrQkFqQm9CLGFBQWEifQ==
},{"./style.less":33,"indiv":4}],31:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],32:[function(require,module,exports) {
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
},{}],24:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { Component, OnInit, RouteChange, SetState, SetLocation, GetLocation, Injected, OnDestory, ReceiveProps } from '../../../../InDiv/src';
var nav_1 = require("../../constants/nav");
var test_service_1 = __importDefault(require("../../service/test.service"));
var SideBar = /** @class */function () {
    function SideBar(testS) {
        this.testS = testS;
        this.subscribeToken = this.testS.subscribe(this.subscribe);
    }
    SideBar.prototype.subscribe = function (value) {
        console.log('RXJS value from SideBar', value);
    };
    SideBar.prototype.nvOnInit = function () {
        this.state = {
            navs: nav_1.navs(),
            num: 1
        };
        this.showColor();
        console.log('SideBar onInit');
    };
    SideBar.prototype.nvRouteChange = function (lastRoute, newRoute) {
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
            if (nav.to === location.path) nav.active = 'active';
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
    SideBar.prototype.changeShowSideBar = function () {
        this.props.handleSideBar();
    };
    var _a;
    SideBar = __decorate([indiv_1.Injected, indiv_1.Component({
        selector: 'side-bar',
        template: "\n        <div class=\"side-bar-container\">\n            <div class=\"nav-wrap\" nv-class=\"nav.active\" nv-repeat=\"let nav in $.navs\">\n                <a class=\"nav\" nv-on:click=\"@setLocation(nav.to)\">{{nav.name}}</a>\n                <div class=\"child-wrap\" nv-if=\"nav.child\">\n                    <a class=\"nav nav-child\" nv-class=\"child.active\" nv-repeat=\"let child in nav.child\" nv-on:click=\"@setLocation(child.to)\">{{child.name}}</a>\n                </div>\n            </div>\n            <button class=\"sidebar-toggle\" nv-on:click=\"@changeShowSideBar()\">\n                <div class=\"sidebar-toggle-button\">\n                    <span></span>\n                    <span></span>\n                    <span></span>\n                </div>\n            </button>\n        </div>\n    "
    }), __metadata("design:paramtypes", [typeof (_a = typeof test_service_1.default !== "undefined" && test_service_1.default) === "function" && _a || Object])], SideBar);
    return SideBar;
}();
exports.default = SideBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL3NpZGUtYmFycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHdCQUFzQjtBQUd0QiwrQkFBcUc7QUFDckcsaUpBQWlKO0FBRWpKLDJDQUEyQztBQUUzQyw0RUFBcUQ7QUF1Q3JEO0lBUUksaUJBQ1ksS0FBa0I7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUUxQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sMkJBQVMsR0FBaEIsVUFBaUIsS0FBVTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSwwQkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxVQUFJLEVBQUU7WUFDWixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixTQUFrQixFQUFFLFFBQWlCO1FBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sNkJBQVcsR0FBbEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sMkJBQVMsR0FBaEI7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN2QixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDcEQsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztvQkFDZixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEIsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7d0JBQ3hCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO3dCQUN0QixDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztxQkFDdkI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7SUF2RGdCLE9BQU87UUF0QjNCLGdCQUFRO1FBQ1IsaUJBQVMsQ0FBZTtZQUNyQixRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsQ0FBQyxrekJBZ0JWLENBQUM7U0FDTCxDQUFDOzZEQVdxQixzQkFBVyxvQkFBWCxzQkFBVztPQVRiLE9BQU8sQ0F3RDNCO0lBQUQsY0FBQztDQUFBLEFBeERELElBd0RDO2tCQXhEb0IsT0FBTyJ9
},{"./style.less":31,"indiv":4,"../../constants/nav":32,"../../service/test.service":22}],35:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":12}],26:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
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
    CodeShower = __decorate([indiv_1.Component({
        selector: 'code-shower',
        template: "\n        <div nv-on:click=\"@show()\" class=\"code-show-container\">\n            <blockquote>\n                <pre>\n                    <code>{{$.codes}}</code>\n                </pre>\n            </blockquote>\n        </div>\n    "
    })], CodeShower);
    return CodeShower;
}();
exports.default = CodeShower;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL2NvZGUtc2hvdy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdCQUFzQjtBQUV0QiwrQkFBOEU7QUFtQjlFO0lBQUE7SUFnQkEsQ0FBQztJQVRVLDZCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztTQUMxQixDQUFDO0lBQ04sQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQWZnQixVQUFVO1FBWjlCLGlCQUFTLENBQVE7WUFDZCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsQ0FBQywrT0FRVixDQUFDO1NBQ0wsQ0FBQztPQUNtQixVQUFVLENBZ0I5QjtJQUFELGlCQUFDO0NBQUEsQUFoQkQsSUFnQkM7a0JBaEJvQixVQUFVIn0=
},{"./style.less":35,"indiv":4}],10:[function(require,module,exports) {
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
var indiv_1 = require("indiv");
// import { NvModule } from '../../../InDiv/src';
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
    RootModule = __decorate([indiv_1.NvModule({
        imports: [introduction_module_1.default, architecture_module_1.default, docs_module_1.default, ssr_module_1.default],
        components: [side_bars_1.default, root_component_1.default, code_show_1.default],
        providers: [test_service_1.default]
    })], RootModule);
    return RootModule;
}();
exports.default = RootModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9tb2R1bGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQWlDO0FBQ2pDLGlEQUFpRDtBQUVqRCw4RUFBdUQ7QUFDdkQsOEVBQXVEO0FBQ3ZELDhEQUF1QztBQUN2Qyw0REFBcUM7QUFFckMsZ0ZBQXlEO0FBQ3pELHNFQUE4QztBQUM5QyxzRUFBaUQ7QUFFakQseUVBQWtEO0FBa0JsRDtJQUFBO0lBQWtDLENBQUM7SUFBZCxVQUFVO1FBaEI5QixnQkFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLDZCQUFrQjtnQkFDbEIsNkJBQWtCO2dCQUNsQixxQkFBVTtnQkFDVixvQkFBUzthQUNWO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLG1CQUFPO2dCQUNQLHdCQUFhO2dCQUNiLG1CQUFVO2FBQ1g7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsc0JBQVc7YUFDWjtTQUNGLENBQUM7T0FDbUIsVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUFuQyxJQUFtQztrQkFBZCxVQUFVIn0=
},{"indiv":4,"./introduction.module":19,"./architecture.module":18,"./docs.module":20,"./ssr.module":21,"../components/root-component":25,"../components/side-bars":24,"../components/code-show":26,"../service/test.service":22}],1:[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/reset");
require("./styles/global");
var indiv_1 = require("indiv");
// import { InDiv } from '../../InDiv/src';
var routes_1 = __importDefault(require("./routes"));
var modules_1 = __importDefault(require("./modules"));
var inDiv = new indiv_1.InDiv();
inDiv.bootstrapModule(modules_1.default);
inDiv.use(routes_1.default);
inDiv.init();
console.log('indiv', inDiv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQkFBd0I7QUFDeEIsMkJBQXlCO0FBRXpCLCtCQUE4QjtBQUM5QiwyQ0FBMkM7QUFFM0Msb0RBQThCO0FBRTlCLHNEQUFtQztBQUVuQyxJQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQzFCLEtBQUssQ0FBQyxlQUFlLENBQUMsaUJBQVUsQ0FBQyxDQUFDO0FBQ2xDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0FBQ2xCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=
},{"./styles/reset":7,"./styles/global":6,"indiv":4,"./routes":9,"./modules":10}],311:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60204' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
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
        parents.push(+k);
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
},{}]},{},[311,1], null)
//# sourceMappingURL=/main.map