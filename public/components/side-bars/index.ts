import { Component } from 'easiest';

import './style.less';

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    name: '首页',
                    to: 'main',
                },
            ],
        };
    }

    public $bootstrap() {
        this.$template = (`
          <div>
            <a es-repeat="let nav in this.state.navs" es-on:click="this.goTo(nav.to)">{{nav.name}}</a>
          </div>
        `);
    }

    public $onInit() {
        console.log('props11', this.props);
    }

    public goTo(to: string) {
        console.log('to', to);
    }

    public $watchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
