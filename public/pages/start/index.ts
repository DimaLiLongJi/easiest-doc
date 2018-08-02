import './style.less';

import { Component } from 'easiest';

type info = {
  [x: string]: any;
  h1: string;
  p: string;
}

interface State {
  info: info[];
}

export default class IntroductionContainer extends Component<State> {
  public state: State;

  constructor() {
      super();
      this.state = {
          info: [
            {
              h1: '架构概览',
              p: 'fuck',
            },
          ],
      }
  }

  public $bootstrap() {
      this.$template = (`
        <div class="page-container">
          <div class="info-content" es-repeat="let info in this.state.info">
              <h1>{{info.h1}}</h1>
              <p>{{info.p}}</p>
          </div>
        </div>
      `);
  }
}
