import './style.less';

import { Component } from 'easiest';

import { navs } from '../../constants/nav';

type nav = {
    name: string;
    to: string;
};
interface State {
    navs: nav[];
}

export default class SideBar extends Component<State> {
    public state: State;

    constructor() {
        super();
        this.state = {
            navs: navs,
        };
    }

    public $bootstrap() {
        this.$template = (`
          <div class="side-bar-container">
            <a class="nav" es-repeat="let nav in this.state.navs" es-on:click="this.goTo(nav.to)">{{nav.name}}</a>
          </div>
        `);
    }

    public $onInit() {
        console.log('props11', this.props);
    }

    public goTo(to: string) {
        console.log('to', to);
        this.$location.go(to);
        this.$location.state();
    }

    public $watchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
