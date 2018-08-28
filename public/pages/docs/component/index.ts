// import { Component, HasRender, SetState } from 'easiest';
import { Component, HasRender, SetState } from '../../../../../easiest/src';
import { componentInfo } from '../../../constants/component';

interface Info {
    h1?: string;
    p?: string[];
    info?: {
      title?: string;
      p?: string[];
      pchild?: string[];
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
  selector: 'docs-component-container',
  template: (`
    <div class="page-wrapper">
      <div class="info-content" nv-repeat="let info in state.info">
        <h1>{{info.h1}}</h1>
        <p nv-repeat="let rp in info.p">{{rp}}</p>
        <div class="child-info" nv-repeat="let code in info.info">
          <h2 nv-on:click="@click(code, $index)">{{code.title}}</h2>
          <p nv-repeat="let pli in code.p">{{pli}}</p>
          <p nv-if="code.pchild" nv-repeat="let child in code.pchild">{{child}}</p>
          <code-shower codes="{code.code}"></code-shower>
        </div>
      </div>
    </div>
  `),
})
export default class DocsComponentContainer implements HasRender {
  public state: State;
  public func: string;
  public setState: SetState;

  constructor() {
    this.state = {
      info: componentInfo,
    };
  }

  public click(code: any, index: number) {
    code.title = '1';
    console.log('this.state.info', this.state.info);
  }

  public nvHasRender() {
    console.log('nvHasRender', this.state);
  }
}
