import './style.less';

// import { Component } from 'easiest';
import { Component, HasRender } from '../../../../../easiest/src';
import { docsComponent } from '../../../constants/docs';

interface State {
  info: {
    h1: string;
    p: string;
    info: {
      title: string;
      p: string;
      code: string;
    }[];
  }[]
}
@Component<State>({
  template: (`
    <div class="page-container">
      <div class="info-content" es-repeat="let info in this.state.info">
        <h1>{{info.h1}}</h1>
        <p>{{info.p}}</p>
        <div class="child-info" es-repeat="let code in info.info">
          <h2 es-on:click="this.click(code, $index)">{{code.title}}</h2>
          <p>{{code.p}}</p>
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
    const info = this.state.info;
    info.forEach(i => {
      const info = i.info.find(n => n.title === code.title);
      if (info) info.title = '1';
    });
    this.setState({info});
    console.log('this.state.info', this.state.info);
  }

  public esHasRender() {
    console.log('esHasRender', this.state);
  }
}
