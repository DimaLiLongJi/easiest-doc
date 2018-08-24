import './style.less';

// import { Component, HasRender, SetState } from 'easiest';
import { Component, HasRender, SetState } from '../../../../../easiest/src';
import { componentInfo } from '../../../constants/template';

interface Info {
    h1?: string;
    p?: string;
    info?: {
      title?: string;
      p?: string[];
      code?: string;
      exampleTitle?: string;
      example?: {
        p?: string;
        code?: string;
      }[];
    }[];
}

interface State {
  info: Info[];
}
@Component<State>({
  // <p class="example-title" nv-if="code.exampleTitle">{{code.exampleTitle}}</p>
  //         <div class="example-info" nv-if="code.example" nv-repeat="let example in code.example">
  //           <p>{{example.p}}</p>
  //           <blockquote>
  //             <pre><code>{{example.code}}</code></pre>
  //           </blockquote>
  //         </div>
  selector: 'docs-component-container',
  template: (`
    <div class="page-container">
      <div class="info-content" nv-repeat="let info in state.info">
        <h1>{{info.h1}}</h1>
        <p>{{info.p}}</p>
        <div class="child-info" nv-repeat="let code in info.info">
          <h2>{{code.title}}</h2>
          <p nv-repeat="let pli in code.p">{{pli}}</p>
          <blockquote>
            <pre><code>{{code.code}}</code></pre>
          </blockquote>
        </div>
      </div>
    </div>
  `),
  state: {
    info: componentInfo,
  },
})
export default class DocsTemplateContainer implements HasRender {
  public state: State;
  public func: string;
  public setState: SetState;

  public nvHasRender() {
    console.log('DocsTemplateContainer nvHasRender', this.state);
  }
}
