import './style.less';

import { Component } from '@indiv/core';

@Component({
    selector: 'root-component',
    templateUrl: './template.html'
})
export default class RootComponent {
    public showSideBar = 'open';
    public currentVersion = 'v1.2.2';


    public changeShowSideBar() {
        if (this.showSideBar === 'open') {
            this.showSideBar = 'close';
        } else {
            this.showSideBar = 'open';
        }
    }
}
