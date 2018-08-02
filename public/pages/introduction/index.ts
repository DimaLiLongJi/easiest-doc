import './style.less';

import { Component } from 'easiest';

import { content } from '../../constants/introduction';

export default class IntroductionContainer extends Component {
    constructor() {
        super();
        this.state = {
            info: content,
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
