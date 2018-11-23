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
})({"pages/docs/style.less":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/css-loader.js"}],"pages/docs/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./style.less");

var _src = require("../../../../InDiv/src");

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

// import { Component, RouteChange } from '../../../../InDiv/build';
var DocsContainer =
/** @class */
function () {
  function DocsContainer() {}

  DocsContainer.prototype.nvRouteChange = function (lastRoute, newRoute) {
    console.log('DocsContainer nvRouteChange', lastRoute, newRoute);
  };

  DocsContainer = __decorate([(0, _src.Component)({
    selector: 'docs-container',
    template: "\n      <div class=\"page-container\">\n        <router-render></router-render>\n      </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsContainer);
  return DocsContainer;
}();

var _default = DocsContainer;
exports.default = _default;
},{"./style.less":"pages/docs/style.less","../../../../InDiv/src":"../../InDiv/src/index.ts"}],"constants/component.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentInfo = void 0;

var componentInfo = function componentInfo() {
  return [{
    h1: '组件与模板',
    p: ['在 InDiv 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 InDiv 组件的属性。'],
    info: [{
      title: '装饰器 Component',
      p: ['@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。', '在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 InDiv 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。', '@Component 接收3个参数: selector, template, providers'],
      pchild: ['1. selector: string; 作为组件（component）被渲染成 DOM 的标签，类似于 <div></div>', '2. template: string; 视图模板，用来声明被渲染的视图', '3. providers?: (Function | { provide: any; useClass: Function; } | { provide: any; useValue: any; })[]; 声明可以被组件注入的服务。', '4. 在 JavaScript 中，只能把 装饰器Component 当做一个函数使用，最后应该导出被声明的类。', '5. 组件会优先去组件 providers 查找依赖，其次才会去模块 providers 查找依赖。', '6. 组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。', '7. 在 TypeScript 中 providers 仅仅能使用 providers: (Function | { provide: Function; useClass: Function; } | { provide: Function; useValue: any; })[]; 类型。', '8. 在 JavaScript 中 providers 仅仅能使用 providers: ({ provide: string; useClass: Function; } | { provide: string; useValue: any; })[]; 类型。', '9. 从v1.2.1开始，实例上将无法找到 setState, setLocation, getLocation 方法，你需要在 indiv包 中手动引入并赋值给实例的一个方法。但在v1.2.0及之前版本都存在于实例中。'],
      code: "\n  // in TypeScript\n  import { Component, setState, setLocation, getLocation, SetState, SetLocation, GetLocation } from 'indiv';\n  @Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{a}}</div>\n    '),\n    providers: [\n      TestService,\n      {\n        provide: TestService1,\n        useClass: TestService1,\n      },\n      {\n        provide: TestService2,\n        useClass: '123',\n      },\n    ],\n  })\n  export default class ContainerComponent {\n    public state: {\n      a: number;\n    };\n    private setState: SetState;\n    private setLocation: SetLocation;\n    private getLocation: GetLocation;\n\n    constructor(\n      private: testService: TestService\n    ) {\n      this.state = {\n        a: 1\n      };\n      this.setState = setState;\n      this.setLocation = setLocation;\n      this.getLocation = getLocation;\n    }\n  }\n\n  // in JavaScript\n  import { Component, setState, setLocation, getLocation } from 'indiv';\n\n  export default class ContainerComponent {\n    static injectTokens = [\n      'testService'\n    ];\n\n    constructor(testService) {\n      this.testService = testService;\n      this.state = {\n        a: 1\n      };\n      this.setState = setState;\n      this.setLocation = setLocation;\n      this.getLocation = getLocation;\n    }\n  }\n  Component({\n    selector: 'container-component'\n    template: ('\n      <div>ContainerComponent {{a}}</div>\n    '),\n    providers: [\n      {\n        provide: 'testService',\n        useClass: TestService,\n      },\n      {\n        provide: 'testService1',\n        useClass: TestService1,\n      },\n      {\n        provide: 'testService2',\n        useClass: '123',\n      },\n    ],\n  })(ContainerComponent)\n "
    }, {
      title: '模板数据绑定',
      p: ['如果没有框架，你就要自己负责把数据渲染到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。', 'InDiv 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。'],
      pchild: ['1. 往模板HTML字符串中添加绑定 nv- 开头的标记可以告诉 InDiv 该如何渲染它们。', '2. 因为 InDiv 使用单向数据流，所以仅仅支持使用 this.state 内的值(开头，作为this.state.的指代) 或是 有返回值的实例上的方法(@开头，作为this的指代) 作为绑定数据， 实例的方法作为事件方法。', '3. 如果要在组件内使用 props ，请在 nvReceiveProps 或 Class的getter setter方法 或 在 nvOnInit 生命周期内用 props 对 state 赋值。', '4. 如果组件在 根模块（root NvModule）或模块（NvModule） 上的 components：Function[]; 声明过，则在其他同模块组件内的 template 可以像 HTML 标签一样使用组件。', '4. 模板上的组件可接受的 props的值 必须用 {} 包裹起来。', '5. props的值 有三种: <test-component man="{@countState(man.name)}" women="{name}" handler="{@getProps}"></test-component>', '(1) 直接使用 state上的值 或 nv-repeat 的值：women="{name} women="{man.name}"', '(2) 使用 @ 加 实例上带有返回值的方法，返回值将作为被传递的值：man="{@countState(name)}"', '(3) 使用 @ 加 实例上的方法，方法将作为 props 传递：handler="{@getProps}"'],
      code: "\n  @Component({\n    selector: 'container-component',\n    template: ('\n      <div nv-on:click=\"@show(a)\">\n        ContainerComponent {{a}}\n        <test-component value-a=\"{a}\" show=\"{@show}\"></test-component>\n      </div>\n      '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: null,\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.a = nextProps.a;\n    }\n  }\n "
    }, {
      title: '组件通信1: props 与 state',
      p: ['InDiv 的组件之间可以 props 来通信。', '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件调用来更改对应父组件的值来完成通信。', '直接改变 state 上的值，或通过 setState 更改 state 的值时，state会被立刻改变，因此更改state的行为为 同步的。', '但是更改 state 值时，会触发异步的重新渲染，并在渲染后更新子组件的 props，', '因此，通过在子组件中调用 props 上的方法来更新父组件的 state 时，子组件的 props 并不会立即更新。', '如果想知道子组件的 props 何时被更新，应该通过生命周期 nvReceiveProps(nextProps: Props) 或 Class的getter setter方法去监听props的变化。', '从v1.2.1开始，实例上将无法找到 setState 方法，你需要在 indiv包 中手动引入setState并赋值给实例的一个方法。但在v1.2.0及之前版本都存在于实例中。'],
      pchild: ['1. 可以直接在 template 上使用在 NvModule 注册过的组件标签，并通过 prop-value="{value}" prop-value="{@returnValue(value)}" pro-function="{@fn}" 的引号包裹花括号的写法传递值与方法。', '2. template 上组件内的传值应按照 下划线命名法(UnderScoreCase) 书写，而在组件Class中应按照 驼峰命名法(CamelCase) 使用。例如: prop-value="{value}" => this.props.propValue', '3. 例如在下面例子，在 hero-component 内可以用循环 nv-repeat 的value，也可以使用 实例上有返回值的方法，也可以直接在实例方法中触发 handelClick 回调。', '4. 如果该 DOM 会发生频繁变化，并且有可追踪的唯一 key 值，可以添加指令 nv-key, 让 InDiv 直接追踪到 DOM 变化，帮助保存 组件 内的 state。', '5. 但是渲染的时候，不可以在模板上直接使用 props 的值，仅仅可以使用 class 实例的方法和 this.state 的值。', '6. 在生命周期 constructor 和 nvOnInit 之后，会开启对 this.state 的监听，此监听会监听每个挂载到 this.state 上的属性及属性的属性，因此如果不对 this.state 添加新的属性或对属性的属性添加新的属性的话，可以直接对某个属性赋值。', '7. 相反，如果要对 this.state 上的属性 增加属性或删除，则需要使用 setState<S>(newState: {[key: string]: S}) 方法对 this.state 重新添加监听', '8. 可以直接引用 InDiv 的 SetState 来为 setState方法声明类型。', '9. 可以通过生命周期 nvReceiveProps(nextProps: Props) 或 Class的getter setter方法去监听props的变化。(nvReceiveProps会先于getter setter被触发)。'],
      code: "\n  import { Component, SetState, OnInit, ReceiveProps, setState } from 'InDiv';\n  @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{stateValue}}</p>\n        <p>idValue: {{idValue}}</p>\n      </div>\n    '),\n  })\n  export default class HeroComponent implements OnInit, ReceiveProps {\n    private setState: SetState;\n    public state: any;\n    public props: any;\n    public _props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n      this.setState = setState;\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n\n    set props(props: any) {\n      this._props = props;\n    }\n\n    get props(): any {\n      return this._props;\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n  }\n\n @Component({\n    selector: 'container-component',\n    template: ('\n      <div>\n        <div nv-repeat=\"let person in b\" nv-key=\"person.id\">\n          <hero-component handel-click=\"@show\" state-value=\"a\" id-value=\"person.id\" ></hero-component>\n        </div>\n      </div>\n    '),\n  })\n  export default class ContainerComponent {\n    constructor() {\n      this.state = {\n        a: {\n          id: 3,\n          name: '\u7801\u519C3',\n        },\n        b: [\n          {id: 1, name: '\u7801\u519C1'},\n          {id: 2, name: '\u7801\u519C2'},\n        ],\n      };\n    }\n\n    public show(a: any) {\n      console.log(a);\n    }\n  }\n "
    }, {
      title: '组件通信2: service 与 RxJS',
      p: ['父子组件的通信可以通过 props , 但跨层级组件间的通信该怎么办？', '相比于构建全局变量，InDiv 的服务显然更适合这种场景。'],
      pchild: ['1. InDiv 的组件之间可以通过注入同一个 单例service。（既全局仅仅产生一个实例）', '2. 通过 RxJS 实现订阅与通知（RxJS 详细：https://rxjs-dev.firebaseapp.com/）', '3. 通过RxJS可观察者对象，获得组件之间通信或状态变更', '4. 在 nvOnDestory 生命周期钩子里取消订阅']
    }, {
      title: '组件的依赖注入',
      p: ['通过依赖注入系统，可以无需关注任何过程直接拿到一个所需的服务实例。', '每个组件实例都拥有一个同级的注入器，负责调用组件和模块的 providers，获取组件依赖的实例。', '在 TypeScript 与 JavaScript 中，声明依赖的方式不一样', '组件 providers 中的服务在每个组件实例内都有独立的实例。而模块 providers 则根据 isSingletonMode 决定是否为 全局单例 还是每次都实现一个新的实例。'],
      pchild: ['1. 在 TypeScript 中，通过 @Injected 注解，获取组件的构造函数中参数的类型，根据 provide: Function  查找依赖，并注入实例。', '2. 在 JavaScript 中，通过组件类的静态属性 injectTokens: string[]，查找 provide: string 查找依赖，并注入实例。', '3. 优先查找组件中被声明的服务，其次再在模块中被声明的服务中查找依赖'],
      code: "\n import { Component, Injected } from 'InDiv';\n \n // in TypeScript\n @Injected\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{stateValue}}</p>\n      </div>\n    '),\n    providers: [ HeroService ],\n  })\n  export default class HeroComponent {\n    public state: any;\n\n    constructor(\n      private heroService: HeroService\n    ) {}\n\n    public nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n\n  // in JavaScript\n  export default class HeroComponent {\n    static injectTokens = [\n      'heroService'\n    ];\n\n    constructor(heroService) {\n      this.heroService = heroService;\n    }\n\n    nvOnInit() {\n      this.state = {\n        stateValue: 111,\n      };\n    }\n  }\n  Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>{{stateValue}}</p>\n      </div>\n    '),\n    providers: [{\n      provide: 'heroService',\n      useClass: HeroService,\n    }],\n  })(HeroComponent);\n "
    }, {
      title: '生命周期钩子',
      p: ['每个组件都有一个被 InDiv 管理的生命周期。', '生命周期钩子其实就是定义在实例中的一些方法，在 InDiv 中，通过不同的时刻调用不同的生命周期钩子，', '赋予你在它们发生时采取行动的能力。', '在 TypeScript 中，引用 InDiv 提供的 interface，通过 implements 的方式让类去实现被预先定义好的生命周期，而在 JavaScript 中，你只能自己手动去定义应该实现的生命周期方法。'],
      pchild: ['1. constructor 在类被实例化的时候回触发，你可以在这里预先定义你的 state', '2. nvOnInit(): void; constructor 之后，在这个生命周期中，可以通过 this.props 获取 props，并定义 state，此生命周期会在开启监听前被触发，并且之后再也不会触发', '3. nvBeforeMount(): void; 在 nvOnInit 之后，template 挂载页面之前被触发，每次触发渲染页面都会被触发', '4. nvAfterMount(): void; 在 nvBeforeMount 之后，template 挂载页面之后被触发，每次触发渲染页面（render）都会被触发', '5. nvHasRender(): void; 在 nvAfterMount 之后，渲染完成后被触发，每次触发渲染页面（render）都会被触发', '6. nvRouteChange(lastRoute?: string, newRoute?: string): void; 监听路由变化，当更换路由后被触发', '7. nvOnDestory(): void; 仅仅在路由决定销毁此组件时被触发', '8. nvWatchState(oldState?: any): void; 监听 state 变化，当 state 被更改后触发', '9. nvReceiveProps(nextProps: any): void; 监听 props 变化，当 props 即将被更改时触发', '10. getter: 当监听 props 时，getter 会先于 nvReceiveProps 被触发', '11. setter: 当监听 state 时，setter 会晚于 nvWatchState 被触发'],
      code: "\n import { Component, OnInit, BeforeMount, AfterMount, HasRender, OnDestory, WatchState, ReceiveProps } from 'InDiv';\n\n @Component({\n    selector: 'hero-component',\n    template: ('\n      <div>\n        <p>\u6765\u81EA\u7236\u7EC4\u4EF6\u7684stateValue: {{stateValue}}</p>\n        <p>idValue: {{idValue}}</p>\n      </div>\n    '),\n  })\n  class HeroComponent implements\n    OnInit,\n    BeforeMount,\n    AfterMount,\n    HasRender,\n    WatchState,\n    ReceiveProps,\n  {\n    public setState: SetState;\n    public state: any;\n    public props: any;\n\n    public nvOnInit() {\n      this.state = {\n        idValue: this.props.idValue,\n        stateValue: this.props.stateValue,\n      };\n    }\n\n    public nvBeforeMount() {\n      console.log('component in BeforeMount');\n    }\n\n    public nvAfterMount() {\n      console.log('component in AfterMount');\n    }\n\n    public nvHasRender() {\n      console.log('component in HasRender');\n    }\n\n    public nvWatchState(oldState?: any) {\n      console.log('component in WatchState');\n    }\n\n    public nvReceiveProps(nextProps: any): void {\n      this.state.idValue = nextProps.idValue;\n      this.setState({\n        stateValue: nextProps.stateValue,\n      });\n    }\n\n    public show(a: any) {\n      this.props.handelClick(a);\n    }\n  }\n "
    }]
  }];
};

exports.componentInfo = componentInfo;
},{}],"pages/docs/component/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _component = require("../../../constants/component");

var _test = _interopRequireDefault(require("../../../service/test.service"));

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
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}; // import { Component, HasRender, SetState, Injected, WatchState, OnInit, OnDestory, RouteChange } from 'indiv';


var DocsComponentContainer =
/** @class */
function () {
  function DocsComponentContainer(testS) {
    this.testS = testS;
    this.state = {
      content: (0, _component.componentInfo)()
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
    code.title = '啊哈哈恭喜你发现，打开控制台吧';
    this.testS.update(3);
    console.log('刚刚更新了service中的值，下面应该就有打印了');
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

  DocsComponentContainer = __decorate([(0, _src.Component)({
    selector: 'docs-component-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in content\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\" nv-on:click=\"@click(code, $index)\">{{@showText(code.title)}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [typeof (_a = typeof _test.default !== "undefined" && _test.default) === "function" && _a || Object])], DocsComponentContainer);
  return DocsComponentContainer;
}();

var _default = DocsComponentContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/component":"constants/component.ts","../../../service/test.service":"service/test.service.ts"}],"constants/template.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templateInfo = void 0;

var templateInfo = function templateInfo() {
  return [{
    h1: '模板语法',
    p: ['从使用模型-视图-控制器 (MVC) 或模型-视图-视图模型 (MVVM) 的经验中，很多开发人员都熟悉了组件和模板这两个概念。', '在 InDiv 中，组件扮演着控制器或视图模型的角色，模板则扮演视图的角色。', '模板很像字符串的HTML，但是它还包含 InDiv 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。', '你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。', 'InDiv 模板指令使用 nv- 开头，下面介绍一下 InDiv 的模板语法。', '1. 拥有特殊渲染方法的指令有 nv-model nv-text nv-html nv-if nv-class nv-repeat nv-key nv-on:Event。', '2. 如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。例如：nv-src nv-href nv-alt', '3. 内置指令接收2种：', '(1) xxx(指代this.state.xxx) 和 nv-repeat被循环的itme值：nv-text="text" nv-text="repeatData.text"', '(2) （其实就是filter）除 nv-on:Event 和 nv-model 外，其他指令可以接收 @开头 加 组件实例上带返回值的方法 ，参数可以使用事件指令中除了$event之外的参数，指令的值渲染为方法返回值：nv-text="@bindText(text, $index, $element)"'],
    info: [{
      title: '1. 事件指令',
      p: ['以 nv-on:event 开头, event 为未加on的事件名， 指令值为 @开头 加 组件实例上的方法', '例如：nv-on:click="@goTo()"', '方法可使用参数：'],
      pchild: ["- Element => $element", "- event => $event", "- string => '1','2','3'", " - number => 1,2,3", " - index > $index", "- \u53D8\u91CF: \u4EC5\u80FD\u4F20\u9012state\u4E0A\u7684\u503C\uFF0C \u901A\u8FC7 xxx \u6807\u793A", "- repeat value: \u4F20\u9012nv-repeat='let item in array'\u7684item\u503C\uFF0C\u5982\uFF1A nv-on:click=\"@show(nav)\" nv-repeat=\"let nav in navList\" nv-key=\"nav.id\""],
      code: "\n  <a class=\"nav\" nv-on:click=\"@goTo($event, $index, 1, 'state', nav.to)\">{{nav.name}}</a>\n\n  public goTo(event: Event, index: number, aa: number, s: string, to: string) {\n    this.$setLocation(to);\n  }\n "
    }, {
      title: '2. text 指令',
      p: ['该指令可直接渲染为标签内的文字，或 <input> 的 value。'],
      pchild: ['可以使用 nv-text 也可以使用模板语法 {{}}。'],
      code: "\n  <p nv-text=\"b\"></p>\n  <p nv-text=\"@returnValue(b)\"></p>\n  <p>{{b}}</p>\n  <p>{{@returnValue(b)}}</p>\n "
    }, {
      title: '3. html 指令',
      p: ['该指令可直接渲染为标签内的 HTML，内部实现相当于 innerHTML。'],
      pchild: ['可以使用 nv-html。'],
      code: "\n  <p nv-html=\"b\"></p>\n  <p nv-html=\"@returnValue(b)\"></p>\n "
    }, {
      title: '4. model 指令',
      p: ['此指令等同于 nv-text 和 nv-on:input 同时使用'],
      pchild: ['仅仅可以对 <input> 使用 nv-model, model会主动更新被绑定的值并更新视图。'],
      code: "\n  <input nv-model=\"c\"/>\n "
    }, {
      title: '5. class 指令',
      p: ['指令会主动把被绑定的值作为 className 增加到元素的class中。'],
      pchild: ['使用 nv-class。'],
      code: "\n  <input nv-class=\"d\"/>\n  <input nv-class=\"@returnValue(d)\"/>\n "
    }, {
      title: '6. if 指令',
      p: ['如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树中显示或移除。'],
      pchild: ['使用 nv-if。'],
      code: "\n  <input nv-if=\"e\"/>\n  <input nv-if=\"@returnValue(e)\"/>\n "
    }, {
      title: '7. repeat 指令',
      p: ['repeat 是一个重复器指令 —— 自定义数据显示的一种方式。', '你的目标是展示一个由多个条目组成的列表。', '首先定义了一个 HTML 块，它规定了单个条目应该如何显示。', '再告诉 InDiv 把这个块当做模板，渲染列表中的每个条目。', '该指令可以搭配 nv-key 指令使用提高渲染性能。'],
      pchild: ['使用 nv-repeat="let item in Array"语法, Array只能为其他被repeat值或组件实例state上的数组。', '可以通过 let item in Array 的语法定义 nv-repeat 指令，在元素本身或子元素可以直接使用 item 作为值。', '此指令十分耗费性能，不建议多用，并且建议搭配 nv-key 使用。'],
      code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
    }, {
      title: '8. key 指令',
      p: ['搭配 repeat 指令使用，为每个被 repeat 的元素指定一个唯一的值', '该指令会提高 repeat 指令的渲染性能，', '每次虚拟DOM更新时会优先匹配 tagName 和 key 都相同的虚拟DOM。'],
      pchild: ['nv-key 的值必须在 同级且同标签名的元素 中为唯一值', '建议如果对 自定义组件的父元素 或 自定义组件本身 使用 nv-repeat，尽量加上 nv-key 指令来避免重复创建组件实例，并保存组件内部状态。'],
      code: "\n  <div nv-class=\"li.class\" nv-repeat=\"let li in arrayList\" nv-key=\"li.id\">\n    <input nv-model=\"l.value\" nv-repeat=\"let l in li\" nv-key=\"l.id\"/>\n    <demo-component value=\"{l}\" nv-key=\"li.id\"></demo-component>\n  </div>\n "
    }, {
      title: '9. 其他指令',
      p: ['如果属性可以通过 Element.attribute = value来设置的话，也可以使用 nv-attribute 来使用。'],
      pchild: ['例如：nv-src nv-href nv-alt等'],
      code: "\n  <img nv-src=\"src\" nv-alt=\"alt\"/>\n  <img nv-src=\"@return(src)\" nv-alt=\"@return(alt)\"/>\n "
    }]
  }];
};

exports.templateInfo = templateInfo;
},{}],"pages/docs/template/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _template = require("../../../constants/template");

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
}; // import { Component, HasRender, SetState } from 'indiv';


var DocsTemplateContainer =
/** @class */
function () {
  function DocsTemplateContainer() {
    this.state = {
      infos: (0, _template.templateInfo)(),
      codeType: "html"
    };
  }

  DocsTemplateContainer.prototype.nvHasRender = function () {
    console.log('DocsTemplateContainer nvHasRender', this.state);
  };

  DocsTemplateContainer = __decorate([(0, _src.Component)({
    selector: 'docs-template-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in infos\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2 class=\"fucker\">{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" type=\"{codeType}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsTemplateContainer);
  return DocsTemplateContainer;
}();

var _default = DocsTemplateContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/template":"constants/template.ts"}],"constants/module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moduleInfo = void 0;

var moduleInfo = function moduleInfo() {
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
      pchild: ['exports 用来声明模块被导出的组件（component）。', '模块只能导出可声明的类。它不会声明或导出任何其它类型的类。', '被模块导出的组件，可以随意在 导入该模块的模块（NvModule） 中的 组件（component） 使用。', '被模块导出的组件，只能获取模块本身声明的依赖，组件本身声明的依赖，和根模块声明的依赖。', '从v1.2.1 除了组件外，模块可以导出其他模块。实际上相当于模块导出了 被导出模块 的exports。', '依赖此模块可以导出模块的特性，你可以写一个公共模块导出一些基础的组件或其他模块，然后导入该公共模块到根模块提供给全局使用！'],
      code: "\n  // common module\n  @NvModule({\n    components: [\n      SomeCommonComponent,\n    ],\n    exports: [\n      SomeCommonComponent,\n    ],\n  })\n  class CommonModule {}\n\n  // NvModule M2\n  @Injectable\n  @Component({\n    selector: 'pp-childs',\n    template: (`\n      <div>\n        <p>\u5B50\u7EC4\u4EF6</p>\n      </div>\n    `),\n  })\n  class PCChild {\n    constructor (\n      private heroS: HeroSearchService2,\n    ) {\n      this.service = heroS;\n    }\n  }\n\n  @NvModule({\n    components: [\n      PCChild,\n    ],\n    providers: [\n      HeroSearchService2,\n    ],\n    exports: [\n      PCChild,\n      CommonModule,\n    ],\n  })\n  class M2 {}\n\n\n  // NvModule M1\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    imports: [\n      M2,\n    ],\n    components: [\n      Container,\n    ],\n  })\n  export default class M1 {}\n\n "
    }, {
      title: '5. bootstrap 引导启动',
      p: ['bootstrap?: Function;'],
      pchild: ['从分类上说，入口组件是 InDiv 命令式加载的任意组件。', '如果你没有使用路由，则需要在 根模块 中将一个 组件 声明给该项，被声明的 组件 将作为 入口组件 被 InDiv 渲染到页面。', '如果你使用路由，则无需对此项赋值，因为路由会自动根据配置去找到需要渲染的页面。'],
      code: "\n  @Component({\n    selector: 'cc-ontainer',\n    template: (`\n      <div>\n        <pp-childs></pp-childs>\n      </div>\n    `),\n  })\n  class Container {}\n\n  @NvModule({\n    components: [\n      Container,\n    ],\n    bootstrap: Container,\n  })\n  export default class M1 {}\n "
    }]
  }];
};

exports.moduleInfo = moduleInfo;
},{}],"pages/docs/module/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _module = require("../../../constants/module");

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
}; // import { Component, HasRender, SetState } from 'indiv';


var DocsModuleContainer =
/** @class */
function () {
  function DocsModuleContainer() {
    this.state = {
      content: (0, _module.moduleInfo)()
    };
  }

  DocsModuleContainer.prototype.nvHasRender = function () {
    console.log('DocsTemplateContainer nvHasRender', this.state);
  };

  DocsModuleContainer = __decorate([(0, _src.Component)({
    selector: 'docs-module-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in content\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsModuleContainer);
  return DocsModuleContainer;
}();

var _default = DocsModuleContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/module":"constants/module.ts"}],"constants/service.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceInfo = void 0;

var serviceInfo = function serviceInfo() {
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

exports.serviceInfo = serviceInfo;
},{}],"pages/docs/service/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _service = require("../../../constants/service");

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
}; // import { Component, HasRender, SetState, OnDestory } from 'indiv';


var DocsServiceContainer =
/** @class */
function () {
  function DocsServiceContainer() {
    this.state = {
      infos: (0, _service.serviceInfo)()
    };
  }

  DocsServiceContainer.prototype.nvOnDestory = function () {
    console.log(9999, 'DocsServiceContainer destory');
  };

  DocsServiceContainer.prototype.nvHasRender = function () {
    console.log('DocsServiceContainer nvHasRender', this.state);
  };

  DocsServiceContainer = __decorate([(0, _src.Component)({
    selector: 'docs-service-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in infos\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsServiceContainer);
  return DocsServiceContainer;
}();

var _default = DocsServiceContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/service":"constants/service.ts"}],"constants/route.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeInfo = void 0;

var routeInfo = function routeInfo() {
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
      pchild: ['1. SetLocation: <Q, P>(path: string, query?: Q, params?: P, title?: string) => void;', '2. GetLocation: () => { path: string; query?: any; params?: any; data?: any; };', 'path: string; 当前路由的路径', 'query?: string; 拼在路由后面的query, request.query', 'params?: any; 如果该路径为 /:id 类似这种模式，则params 为 {id: 123}', 'data?: any; 额外传递的值', 'title?: string; 跳转路由时需要更改的 title', '3. 从v1.2.1开始，实例上将无法找到 setLocation, getLocation 方法，你需要在 indiv包 中手动引入并赋值给实例的一个方法。但在v1.2.0及之前版本都存在于实例中。'],
      code: "\n  // import { GetLocation, SetLocation } from 'InDiv'; v1.2.1\u4E4B\u524D\u90FD\u53EF\u4EE5\u5728\u5B9E\u4F8B\u4E0A\u627E\u5230\uFF0C\u56E0\u6B64\u65E0\u9700\u5F15\u5165\n  import { GetLocation, SetLocation, setLocation, getLocation } from 'InDiv';\n  \n  class RoutrComponent {\n    public getLocation: GetLocation;\n    public setLocation: SetLocation;\n\n    constructor() {\n      this.getLocation = getLocation;\n      this.setLocation = setLocation;\n    }\n    public nvOnInit() {\n      console.log('this.getLocation', this.getLocation());\n      this.setLocation('/R1/C1/D1', { b: '1' });\n    }\n  }\n "
    }]
  }];
};

exports.routeInfo = routeInfo;
},{}],"pages/docs/route/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _route = require("../../../constants/route");

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
}; // import { Component, SetState } from 'indiv';


var DocsRouteContainer =
/** @class */
function () {
  function DocsRouteContainer() {
    this.state = {
      infos: (0, _route.routeInfo)()
    };
  }

  DocsRouteContainer = __decorate([(0, _src.Component)({
    selector: 'docs-route-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in infos\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsRouteContainer);
  return DocsRouteContainer;
}();

var _default = DocsRouteContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/route":"constants/route.ts"}],"constants/indiv.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inDivInfo = void 0;

var inDivInfo = function inDivInfo() {
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

exports.inDivInfo = inDivInfo;
},{}],"pages/docs/indiv/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _indiv = require("../../../constants/indiv");

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
}; // import { Component, SetState } from 'indiv';


var DocsInDivContainer =
/** @class */
function () {
  function DocsInDivContainer() {
    this.state = {
      content: (0, _indiv.inDivInfo)()
    };
  }

  DocsInDivContainer = __decorate([(0, _src.Component)({
    selector: 'docs-indiv-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in content\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsInDivContainer);
  return DocsInDivContainer;
}();

var _default = DocsInDivContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/indiv":"constants/indiv.ts"}],"constants/libs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.libInfo = void 0;

var libInfo = function libInfo() {
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

exports.libInfo = libInfo;
},{}],"pages/docs/libs/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _libs = require("../../../constants/libs");

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
}; // import { Component, SetState } from 'indiv';


var DocsLibsContainer =
/** @class */
function () {
  function DocsLibsContainer() {
    this.state = {
      content: (0, _libs.libInfo)()
    };
  }

  DocsLibsContainer = __decorate([(0, _src.Component)({
    selector: 'docs-libs-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in content\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsLibsContainer);
  return DocsLibsContainer;
}();

var _default = DocsLibsContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/libs":"constants/libs.ts"}],"constants/http.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpInfo = void 0;

var httpInfo = function httpInfo() {
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

exports.httpInfo = httpInfo;
},{}],"pages/docs/http/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../../../InDiv/src");

var _http = require("../../../constants/http");

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
}; // import { Component, SetState } from 'indiv';


var DocsHttpContainer =
/** @class */
function () {
  function DocsHttpContainer() {
    this.state = {
      content: (0, _http.httpInfo)()
    };
  }

  DocsHttpContainer = __decorate([(0, _src.Component)({
    selector: 'docs-http-container',
    template: "\n    <div class=\"child-page-wrapper\">\n      <div class=\"info-content\" nv-repeat=\"let info in content\">\n        <h1>{{info.h1}}</h1>\n        <p nv-repeat=\"let rp in info.p\">{{rp}}</p>\n        <div class=\"child-info\" nv-repeat=\"let code in info.info\">\n          <h2>{{code.title}}</h2>\n          <p nv-repeat=\"let pli in code.p\">{{pli}}</p>\n          <div class=\"pchild\" nv-if=\"code.pchild\">\n            <p nv-repeat=\"let child in code.pchild\">{{child}}</p>\n          </div>\n          <code-shower codes=\"{code.code}\" nv-if=\"code.code\"></code-shower>\n        </div>\n      </div>\n    </div>\n  "
  }), __metadata("design:paramtypes", [])], DocsHttpContainer);
  return DocsHttpContainer;
}();

var _default = DocsHttpContainer;
exports.default = _default;
},{"../../../../../InDiv/src":"../../InDiv/src/index.ts","../../../constants/http":"constants/http.ts"}],"modules/docs.module.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = require("../../../InDiv/src");

var _docs = _interopRequireDefault(require("../pages/docs"));

var _component = _interopRequireDefault(require("../pages/docs/component"));

var _template = _interopRequireDefault(require("../pages/docs/template"));

var _module = _interopRequireDefault(require("../pages/docs/module"));

var _service = _interopRequireDefault(require("../pages/docs/service"));

var _route = _interopRequireDefault(require("../pages/docs/route"));

var _indiv = _interopRequireDefault(require("../pages/docs/indiv"));

var _libs = _interopRequireDefault(require("../pages/docs/libs"));

var _http = _interopRequireDefault(require("../pages/docs/http"));

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
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}; // import { NvModule } from 'indiv';


var DocsModule =
/** @class */
function () {
  function DocsModule() {
    console.log(3333);
  }

  DocsModule = __decorate([(0, _src.NvModule)({
    declarations: [_docs.default, _component.default, _template.default, _module.default, _service.default, _route.default, _indiv.default, _libs.default, _http.default],
    // providers: [
    //     {
    //         provide: TestService,
    //         useClass: TestService,
    //     },
    // ],
    exports: [_docs.default, _component.default, _template.default, _module.default, _service.default, _route.default, _indiv.default, _libs.default, _http.default],
    bootstrap: _docs.default
  }), __metadata("design:paramtypes", [])], DocsModule);
  return DocsModule;
}();

var _default = DocsModule;
exports.default = _default;
},{"../../../InDiv/src":"../../InDiv/src/index.ts","../pages/docs":"pages/docs/index.ts","../pages/docs/component":"pages/docs/component/index.ts","../pages/docs/template":"pages/docs/template/index.ts","../pages/docs/module":"pages/docs/module/index.ts","../pages/docs/service":"pages/docs/service/index.ts","../pages/docs/route":"pages/docs/route/index.ts","../pages/docs/indiv":"pages/docs/indiv/index.ts","../pages/docs/libs":"pages/docs/libs/index.ts","../pages/docs/http":"pages/docs/http/index.ts"}],"../node_modules/_parcel-bundler@1.10.3@parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/docs.module.76cfd183.map