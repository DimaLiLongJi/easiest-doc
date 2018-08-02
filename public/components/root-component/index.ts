import './style.less';

import { Component } from 'easiest';

export default class RootComponent extends Component {
    constructor() {
        super();
    }

    public $bootstrap() {
        this.$template = (`
          <div class="app-container">
            <side-bar></side-bar>
            <router-render></router-render>
          </div>
        `);
    }

    public $onInit() {}

    public $watchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
