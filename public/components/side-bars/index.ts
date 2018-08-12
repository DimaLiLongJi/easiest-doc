import './style.less';

import { Component, OnInit, WatchState } from 'easiest';

import { navs } from '../../constants/nav';

type nav = {
    name: string;
    to: string;
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
        <a class="nav" es-repeat="let nav in this.state.navs" es-on:click="this.goTo(nav.to)">{{nav.name}}</a>
        </div>
    `),
})
export default class SideBar implements OnInit, WatchState {
        public state: State;
        public props: any;
        public $getLocation: () => any;
        public $setLocation: (path: string, query?: any, params?: any) => void;
    
        public esOnInit() {
            console.log('props11', this.props);
        }
    
        public goTo(to: string) {
            console.log('to', to);
            this.$setLocation(to);
            this.$getLocation();
        }
    
        public esWatchState(oldData: string, newData: string) {
            console.log('oldData Component:', oldData);
            console.log('newData Component:', newData);
        }
    }


// export default class SideBar extends Component<State> {
//     public state: State;

//     constructor() {
//         super();
//         this.state = {
//             navs: navs,
//         };
//     }

//     public $bootstrap() {
//         this.$template = (`
//           <div class="side-bar-container">
//             <a class="nav" es-repeat="let nav in this.state.navs" es-on:click="this.goTo(nav.to)">{{nav.name}}</a>
//           </div>
//         `);
//     }

//     public $onInit() {
//         console.log('props11', this.props);
//     }

//     public goTo(to: string) {
//         console.log('to', to);
//         this.$location.go(to);
//         this.$location.state();
//     }

//     public $watchState(oldData: string, newData: string) {
//         console.log('oldData Component:', oldData);
//         console.log('newData Component:', newData);
//     }
// }
