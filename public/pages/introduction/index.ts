import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../lib';

import { content } from '../../constants/introduction';

type info = {
    [x: string]: any;
    h1: string;
    p: string;
}

interface State {
    info: info[];
}
@Component<State>({
    state: {
        info: content,
    },
    template: (`
        <div class="page-container">
            <div class="info-content" es-repeat="let info in this.state.info">
                <h1>{{info.h1}}</h1>
                <p>{{info.p}}</p>
            </div>
        </div>
    `),
})
export default class IntroductionContainer {
    public state: State;
}
