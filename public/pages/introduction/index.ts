import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../../easiest/src';

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
    selector: 'introduction-container',
    template: (`
        <div class="page-container">
            <div class="info-content" nv-repeat="let info in state.info">
                <h1>{{info.h1}}</h1>
                <p>{{info.p}}</p>
            </div>
        </div>
    `),
})
export default class IntroductionContainer {
    public state: State;
    constructor() {
        this.state = {
            info: content(),
        };
    }
}
