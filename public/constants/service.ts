export const serviceInfo = () => [
  {
    h1: '服务 与 依赖注入',
    p: [
      '组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。',
      '它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。',
      '不要使用 new 来创建服务，而要依靠 InDiv 的 依赖注入(DI) 机制把它注入到 组件或服务的 的构造函数中',
      'v1.2.0开始，所有服务如果不手动指定则默认都为单例服务',
    ],
    info: [
      {
        title: '装饰器 Injectable, Injected',
        p: [
          '由于作者英语水平过差，将Injectable用错',
          '因此v1.2.0版本开始将由 Injectable, Injected 分别代替1.1.0版本及以下的 Service, Injectable',
          '@Injectable: 会指出紧随其后的那个类是个服务，并为其指定元数据。',
          '@Injectable: 接收1个参数: { isSingletonMode?: boolean; }。 用来指出是否为 单例服务。',
          '@Injected: 不接受任何参数，而是用来提示 InDiv 该 class 有需要注入的服务。',
          '@Injected: 可以用在 组件（component） 和 服务（service） 上。',
        ],
        pchild: [
          '1. isSingletonMode: boolean; 用来告诉 模块 该服务是否为单例服务',
          '!!! v1.2.0+：默认所有的都为单例，如果不想成为单例服务则需要自己声明',
          '2. 服务里可以被注入其他服务',
          '3. 在 TypeScript 中，在视同我们可以直接在 构造函数 的参数中声明出参数及其类型，类型为需要被注入的 服务，并可以直接在实例中拿到，',
          '4. 但是在 JavaScript 中，只能通过在 在类的静态属性（injectTokens: string[]）中，把 需要被注入 服务（service） 的字符串provide放入数组，则构造函数中的每项则依次成为被注入的服务实例',
        ],
        code: `
  // in TypeScript
  @Injected
  @Injectable({ isSingletonMode: false })
  export default class HeroSearchService {
    public hsr: HeroSearchService1; // 服务 HeroSearchService1 被注入, 可以直接用 this.hsr
    constructor(
      private hsr: HeroSearchService1,
    ) {
      console.log(this.hsr)
    }
  }

  // in JavaScript
  export default class HeroSearchService {
    static injectTokens: [
      'heroSearchService1'
    ];

    constructor(
      heroSearchService1, // 服务 HeroSearchService1 被注入， 该实例即为 参数 heroSearchService1
    ) {
      this.hsr = heroSearchService1;
      this.hsr.test();
    }
  }
  Injectable({
    isSingletonMode: false,
  })(HeroSearchService);
 `,
      },
      {
        title: '依赖注入',
        p: [
          '依赖注入是一个很重要的设计模式。 它使用得非常广泛，以至于几乎每个人都把它简称为 DI 。',
          '依赖注入（DI）是用来创建对象及其依赖的其它对象的一种方式。 ',
          '当依赖注入系统创建某个对象实例时，会负责提供该对象所依赖的对象（称为该对象的依赖）。',
        ],
        pchild: [
          '1. 在 NvModule 中的 providers 传入 需要被注入的 服务。',
          '2. 该模块（NvModule）中的所有 组件 和 服务 都可以 使用 (v1.1.0版本@Injectable / v1.2.0及以上版本@Injected) 注解来声明被注入的服务。',
          '3. 模块导出（exports）的 组件 在其他模块（NvModule）也可以使用该 模块 的 服务。',
          '4. 无需一个一个 new 出对应的 服务，直接注入即可。',
        ],
        code: `
  @NvModule({
    imports: [
    ],
    components: [
        DocsContainer,
    ],
    providers: [
      HeroSearchService,
      {
        provide: HeroSearchService1,
        useClass: HeroSearchService,
      },
      {
        provide: Value,
        useValue: '11333',
      }
    ],
    exports: [
        DocsContainer,
    ],
  })
  export default class DocsModule {}
 `,
      },
    ],
  },
];
