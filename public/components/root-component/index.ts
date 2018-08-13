import './style.less';

import { Component, OnInit, WatchState } from 'easiest';

@Component({
    template: (`
        <div class="app-container">
            <side-bar></side-bar>
            <router-render></router-render>
        </div>
    `),
})
export default class RootComponent implements OnInit, WatchState {
    public esOnInit() { }

    public esWatchState(oldData: string, newData: string) {
        console.log('oldData Component:', oldData);
        console.log('newData Component:', newData);
    }
}
