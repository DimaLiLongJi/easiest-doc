import './style.less';

// import { Component, OnInit, WatchState, SetState, SetLocation, GetLocation } from 'easiest';
import { Component, OnInit, WatchState, SetState, SetLocation, GetLocation } from '../../../../easiest/src';

import { navs } from '../../constants/nav';

type nav = {
    name: string;
    to: string;
    active?: string;
    child?: nav[];
};
interface State {
    navs: nav[];
}

@Component<State>({
    selector: 'side-bar',
    template: (`
        <div class="side-bar-container">
            <div class="nav-wrap" nv-class="nav.active" nv-repeat="let nav in state.navs">
                <a class="nav" nv-on:click="@goTo(nav.to, $index)">{{nav.name}}</a>
                <div class="child-wrap" nv-if="nav.child">
                    <a class="nav nav-child" nv-repeat="let child in nav.child" nv-on:click="@goTo(child.to)">{{child.name}}</a>
                </div>
            </div>
        </div>
    `),
})
export default class SideBar implements OnInit, WatchState {
    public state: State;
    public props: any;
    public getLocation: GetLocation;
    public setLocation: SetLocation;
    public setState: SetState;

    public nvOnInit() {
        this.state = {
            navs: navs,
        };
        this.showColor();
        console.log('SideBar onInit');
    }

    public showColor() {
        const location = this.getLocation();
        this.state.navs.forEach(nav => {
            nav.active = null;
            if (nav.to === location.path) return nav.active = 'active';
            if (nav.child) {
                nav.child.forEach(n => {
                    if (n.to === location.path) nav.active = 'active';
                });
            }
        });
    }

    public goTo(to: string, index?: number) {
        this.setLocation(to);
        if (index || index === 0) {
            this.showColor();
        }
    }

    public nvWatchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
