import { Component } from 'easiest';

import './style.less';

export default class RootComponent extends Component {
    constructor() {
        super();
    }

    public $bootstrap() {
        this.$template = (`
          <div>
            <side-bar></side-bar>
            下面是子路由<br/>
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
