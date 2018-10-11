import './style.less';

import { Subscription } from 'rxjs';
// import { Component, OnInit, RouteChange, SetState, SetLocation, GetLocation, Injected } from 'indiv';
import { Component, OnInit, RouteChange, SetState, SetLocation, GetLocation, Injected, OnDestory, ReceiveProps } from '../../../../InDiv/src';

import { navs } from '../../constants/nav';

import TestService from '../../service/test.service';

type nav = {
    name: string;
    to: string;
    active?: string;
    child?: nav[];
};
interface State {
    navs: nav[];
    num: number;
}

interface Props {
    handleSideBar: () => void;
}

@Injected
@Component<State, Props>({
    selector: 'side-bar',
    template: (`
        <div class="side-bar-container">
            <div class="nav-wrap" nv-class="nav.active" nv-repeat="let nav in state.navs">
                <a class="nav" nv-on:click="@setLocation(nav.to)">{{nav.name}}</a>
                <div class="child-wrap" nv-if="nav.child">
                    <a class="nav nav-child" nv-class="child.active" nv-repeat="let child in nav.child" nv-on:click="@setLocation(child.to)">{{child.name}}</a>
                </div>
            </div>
            <button class="sidebar-toggle" nv-on:click="@changeShowSideBar()">
                <div class="sidebar-toggle-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    `),
})

export default class SideBar implements OnInit, RouteChange, OnDestory {
    public state: State;
    public props: Props;
    public getLocation: GetLocation;
    public setLocation: SetLocation;
    public setState: SetState;
    public subscribeToken: Subscription;

    constructor(
        private testS: TestService,
    ) {
        this.subscribeToken = this.testS.subscribe(this.subscribe);
    }

    public subscribe(value: any) {
        console.log('RXJS value from SideBar', value);
    }

    public nvOnInit() {
        this.state = {
            navs: navs(),
            num: 1,
        };
        this.showColor();
        console.log('SideBar onInit');
    }

    public nvRouteChange(lastRoute?: string, newRoute?: string): void {
        this.showColor();
    }

    public nvOnDestory() {
        console.log('SideBar nvOnDestory');
        this.subscribeToken.unsubscribe();
    }

    public showColor() {
        const location = this.getLocation();
        this.state.navs.forEach(nav => {
            nav.active = null;
            if (nav.to === location.path) nav.active = 'active';
            if (nav.child) {
                nav.child.forEach(n => {
                    n.active = null;
                    if (n.to === location.path) {
                        nav.active = 'active';
                        n.active = 'active';
                    }
                });
            }
        });
    }

    public changeShowSideBar() {
        this.props.handleSideBar();
    }
}
