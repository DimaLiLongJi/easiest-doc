import './style.less';

// import { Component } from 'easiest';
import { Component, HasRender } from '../../../../../easiest/src';
import { docsComponent } from '../../../constants/docs';

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
  // <p class="example-title" es-if="code.exampleTitle">{{code.exampleTitle}}</p>
  //         <div class="example-info" es-if="code.example" es-repeat="let example in code.example">
  //           <p>{{example.p}}</p>
  //           <blockquote>
  //             <pre><code>{{example.code}}</code></pre>
  //           </blockquote>
  //         </div>
  template: (`
    <div class="page-container">
      <div class="info-content" es-repeat="let info in state.info">
        <h1>{{info.h1}}</h1>
        <p>{{info.p}}</p>
        <div class="child-info" es-repeat="let code in info.info">
          <h2 es-on:click="@click(code, $index)">{{code.title}}</h2>
          <p es-repeat="let pli in code.p">{{pli}}</p>
          <blockquote>
            <pre><code>{{code.code}}</code></pre>
          </blockquote>
        </div>
      </div>
    </div>
  `),
  state: {
    info: docsComponent,
  },
})
export default class DocsComponentContainer implements HasRender {
  public state: State;
  public func: string;
  public setState: (newState: any) => void;

  public click(code: any, index: number) {
    code.title = '1';
    console.log('this.state.info', this.state.info);
  }

  public esHasRender() {
    console.log('esHasRender', this.state);
  }
}
