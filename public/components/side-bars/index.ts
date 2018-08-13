import './style.less';

// import { Component, OnInit, WatchState } from 'easiest';
import { Component, OnInit, WatchState } from '../../../lib';

import { navs } from '../../constants/nav';

type nav = {
    name: string;
    to: string;
    active?: string;
};
interface State {
    navs: nav[];
}

@Component<State>({
    state: {
        navs: navs,
    },
    template: (`
        <div class="side-bar-container">
            <div class="nav-wrap" es-class="nav.active" es-repeat="let nav in this.state.navs">
                <a class="nav" es-on:click="this.goTo(nav.to, $index)">{{nav.name}}</a>
                <a class="nav nav-child" es-if="nav.child" es-repeat="let child in nav.child" es-on:click="this.goTo(child.to)">{{child.name}}</a>
            </div>
        </div>
    `),
})
export default class SideBar implements OnInit, WatchState {
    public state: State;
    public props: any;
    public $getLocation: () => any;
    public $setLocation: (path: string, query?: any, params?: any) => void;
    public $setState: (newState: any) => void;

    public esOnInit() {
        console.log('esOnInit', this.state.navs);
    }

    public goTo(to: string, index?: number) {
        this.$setLocation(to);
        this.$getLocation();
    }

    public esWatchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
