import './style.less';

import { Component } from 'indiv';

@Component({
    selector: 'root-component',
    template: (`
        <div class="app-container">
            <side-bar></side-bar>
            <router-render></router-render>
        </div>
    `),
})
export default class RootComponent {}
