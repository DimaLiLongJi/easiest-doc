export const docsComponent = [
  {
    h1: '组件与模板',
    p: '在 Easiest 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 Easiest 组件的属性。',
    info: [
      {
        title: '装饰器Component',
        p: [
          '@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 Easiest 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。',
        ],
        code: `
  @Component({
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
        p: [
          `如果没有框架，你就要自己负责把数据值推送到 HTML 控件中，并把来自用户的响应转换成动作和对值的更新。 手动写这种数据推拉逻辑会很枯燥、容易出错，难以阅读 —— 用过 jQuery 的程序员一定深有体会。`,
          `Easiest 支持双向数据绑定，这是一种对模板中的各个部件与组件中的各个部件进行协调的机制。 往模板HTML字符串中添加绑定标记可以告诉 Easiest 该如何连接它们。因为 Easiest 使用单向数据流，所以仅仅支持使用 this.state内的值作为绑定数据， 实例的方法作为事件方法。如果要在组件内使用 props ，请在 ReceiveProps 声明周期内用 props 对 state 赋值。`,
        ],
        code: `
  @Component({
    template: ('
      <div es-on:click="@show(state.a)">ContainerComponent {{state.a}}}</div>
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

    public esReceiveProps(nextProps: any): void {
      this.stata.a = nextProps.a;
    }
  }
        `,
      },
      {
        title: '组件通信',
        p: [
          'Easiest 的组件之间可以 props 来通信。',
          '组件间通信应该是单向的，通过传递值到子组件，并通过传递一个回调方法在子组件来更改对应父组件的值来完成通信。',
          '可以直接在 template 上使用在 EsModule 注册过的组件标签，并通过 propValue={state.value} propFunction={@fn} 的写法传递值与方法。',
        ],
        code: `
  @Component({
    template: ('
      <div es-on:click="@show(state.a)">ContainerComponent {{state.a}}}</div>
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

    public esReceiveProps(nextProps: any): void {
      this.stata.a = nextProps.a;
    }
  }
        `,
      },
    ],
  },
];
