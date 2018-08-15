export const docsComponent = [
  {
    h1: '显示数据',
    p: '在 Easiest 中最典型的数据显示方式，就是把 HTML 模板中的控件绑定到 Easiest 组件的属性。',
    info: [
      {
        title: 'Component',
        p: '@Component 装饰器会指出紧随其后的那个类是个组件类，并为其指定元数据。 在下面的范例代码中，你可以看到 ContainerComponent 只是一个普通类，完全没有 Easiest 特有的标记或语法。 直到给它加上了 @Component 装饰器，它才变成了组件。',
        code: `
          @Component({
            template: ('
              <div>ContainerComponent</div>
            '),
          })
          class ContainerComponent {
            constructor() {}
          }
        `,
      },
      {
        title: '模板语法',
        p: '模板很像字符串的HTML，但是它还包含 Easiest 的模板语法，这些模板语法可以根据你的应用逻辑、应用状态和 DOM 数据来修改这些 HTML。 你的模板可以使用数据绑定来协调应用和 DOM 中的数据，把程序逻辑应用到要显示的内容上。详情见模板语法章节。',
        code: `
        @Component({
          template: ('
            <div es-repeat="let a in this.state.arr">ContainerComponent: {{a.name}}</div>
          '),
          state: {
            arr: [
              {
                id: 1,
                name: 'name1'
              },
              {
                id: 2,
                name: 'name2'
              },
            ]
          }
        })
        class ContainerComponent {
          constructor() {}
        }
        `,
      },
    ],
  },
];
