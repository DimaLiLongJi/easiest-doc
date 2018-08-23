import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../../easiest/src';

import { content } from '../../constants/start';

type content = {
  [x: string]: any;
  h1: string;
  code?: string;
}

interface State {
  info: content[];
}
@Component<State>({
  selector: 'architecture-container',
  state: {
    info: content,
  },
  template: (`
    <div class="page-container">
      <div class="info-content" nv-repeat="let info in state.info">
          <h1>{{info.h1}}</h1>
          <p>{{info.p}}</p>
      </div>
    </div>
  `),
})
export default class ArchitectureContainer {
  public state: State;
}
