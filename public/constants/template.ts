export const componentInfo = [
  {
    h1: '组件与模板',
    p: '在 InDiv 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 InDiv 组件的属性。',
    info: [
      {
        title: '装饰器Component',
        p: [
          '@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 InDiv 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。',
          '@Component 接收三个参数:',
          '1. selector: string; 作为组件被渲染成 DOM 的标签，类似于 <div>',
          '2. template: string; 视图模板，用来声明被渲染的视图',
          '3. state?: any; 提供渲染的默认state，可以不写，但在生命周期 constructor 或 nvOnInit 要声明出来， 在后续的方法或生命周期如果想对 this.state 增加新的属性必须使用 setState({key, value})',
        ],
        code: `
  @Component({
    selector: 'container-component'
    template: ('
      <div>ContainerComponent {{state.a}}</div>
    '),
    state: {
      a: 1
    }
  })
  class ContainerComponent {
    constructor() {}
  }
        `,
      },
    //   {
    //     title: '模板语法',
    //     p: '模板很像字符串的HTML，但是它还包含 InDiv 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。 你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。详情见模板语法章节。',
    //     code: `
    // @Component({
    //   selector: 'container-component',
    //   template: ('
    //     <div nv-repeat="let a in state.arr">ContainerComponent: {{a.name}}</div>
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
    //     exampleTitle: `下面介绍一下 InDiv 的模板语法`,
    //     example: [
    //       {
    //         p: `
    //         1. 事件指令
    //           以 nv-on:event 开头, event 为未加on的事件名， 并且 被绑定的事件必须为 class 的方法，且以 @ 开头并且在方法内可以使用 this ，this 指向 class的实例。
    //           方法可使用参数
    //             - event: $event
    //             - string: '1','2','3'
    //             - number: 1,2,3
    //             - index: @index
    //             - 变量: 仅能传递state上的值， 通过state.xxx标示
    //             - repeat item: 传递nv-if的值，如： nv-on:click="@show(nav)" nv-repeat="let nav in state.navList"
    //         `,
    //         code: `
    // <a class="nav" nv-on:click="@goTo(nav.to, $index)">{{nav.name}}</a>
    // public goTo(to: string, index: number) {
    //   this.$setLocation(to);
    // }
    //         `,
    //       },
    //       {
    //         p: `
    //         2. text
    //           可以使用 nv-text="state.XXX" 也可以使用模板语法 {{}}。
    //         `,
    //         code: `
    // <p nv-text="state.b"></p>
    // <p>{{state.b}}</p>
    //         `,
    //       },
    //       {
    //         p: `
    //         3. html
    //           可以使用 nv-html="state.XXX"。
    //         `,
    //         code: `
    // <p nv-html="state.b"></p>
    //         `,
    //       },
    //       {
    //         p: `
    //         4. model
    //           仅仅可以对 <input> 使用 nv-model="state.XXX", model会主动更新被绑定的值并更新视图，此指令等同于 nv-text 和 nv-on:input 同时使用。
    //         `,
    //         code: `
    // <input nv-model="state.c"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         5. class
    //           使用 nv-class="state.XXX", 指令会主动把被绑定的值作为 className 增加到元素的class中。
    //         `,
    //         code: `
    // <input nv-class="state.d"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         6. if
    //           使用 nv-if="state.XXX", 如果被绑定的值被 javascript 判定为 true/false，将分别在DOM树种显示或移除。
    //         `,
    //         code: `
    // <input nv-if="state.e"/>
    //         `,
    //       },
    //       {
    //         p: `
    //         7. if
    //           使用 nv-repeat="let key in state.XXX", 如果被绑定的值为数组，则可以通过 let key in Array 的方式循环，在元素本身或子元素可以直接使用 key 作为值。
    //         `,
    //         code: `
    // <div nv-class="li.class" nv-repeat="let li in state.arrayList">
    //       <input nv-model="l.value" nv-repeat="let l in li" />
    // </div>
    //         `,
    //       },
    //     ],
    //   },
      {
        title: '模板数据绑定',
        p: [
          '如果没有框架，你就要自己负责把数据渲染到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。',
          'InDiv 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。',
          '往模板HTML字符串中添加绑定 nv- 开头的标记可以告诉 InDiv 该如何渲染它们。因为 InDiv 使用单向数据流.',
          '所以仅仅支持使用 this.state 内的值作为绑定数据， 实例的方法作为事件方法。如果要在组件内使用 props ，请在 nvReceiveProps 或 nvOnInit 生命周期内用 props 对 state 赋值。',
        ],
        code: `
@Component({
    selector: 'container-component',
    template: ('
      < div nv-on: click= "@show(state.a)" > ContainerComponent {{state.a}}}/div> as 
    '),
    state: {
      a: null,
    },
  })
  class ContainerComponent {
    constructor() {}

    public show(a: any) {
      console.log(a);
    }

    public nvReceiveProps(nextProps: any): void {
      this.state.a = nextProps.a;
    }
  }
`,
      },
      {
        title: '组件通信: props 与 state',
        p: [
          'InDiv 的组件之间可以 props 来通信。',
          '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件来更改对应父组件的值来完成通信。',
          '可以直接在 template 上使用在 NvModule 注册过的组件标签，并通过 propValue={state.value} propValue={repeatValue} propFunction={@fn} 的写法传递值与方法。',
          '例如在下面例子，在 hero-component 内可以用循环 state.a (nv-repeat)的value persion 并且可以直接在实例方法中触发 handelClick 回调',
          '但是渲染的时候，不可以在模板上直接使用 props 的值，仅仅可以使用实例的方法和 state 的值',
        ],
        code: `
@Component({
    selector: 'hero-component',
    template: ('
      < div >
        来自父组件的stateValue as p: {{}}/p> as 
        < p > idValue: {{}}/p> as 
      < /div>
    '),
    state: {
      idValue: null,
      stateValue: null,
    },
  })
  class HeroComponent implements OnInit {
    public setState: SetState;
    public state: any;

    public publuc     constructor() {}
    public esOnInit() {
      this.state.idValue = nextProps.idValue;
      this.state.stateValue = nextProps.stateValue;
    }

    public show(a: any) {
      console.log(a);
    }

    public nvReceiveProps(nextProps: any): void {
      this.state.idValue = nextProps.idValue;
      this.setState({
        stateValue: nextProps.stateValue,
      });
    }
  }

@Component({
    selector: 'container-component',
    template: ('
      < div >
        nv as div - repeat = "let person in state.b" >
          -component as hero handelClick= "@show" stateValue= "state.a" idValue= "person.id" > /hero-component> as 
        < /div>
      < /div>
    '),
    state: {
      a: null,
      b: [
        {id: 1, name: '码农1'},
        {id: 2, name: '码农2'},
      ],
    },
  })
  class ContainerComponent {
    constructor() {
      this.state.a = {
        id: 3,
        name: '码农3',
      }
    }

    public show(a: any) {
      console.log(a);
    }
  }
`,
      },
    ],
  },
];
