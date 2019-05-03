import './style.less';

import { Component, ChangeDetectionStrategy, MarkForCheck, TMarkForCheck } from '@indiv/core';

@Component({
    selector: 'root-component',
    templateUrl: './template.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class RootComponent {
    public showSideBar: string = 'open';
    public currentVersion: string = 'v1.2.2';
    public nestVersion: string = 'v2.1.1';
    @MarkForCheck() public marker: TMarkForCheck;

    public changeShowSideBar() {
        if (this.showSideBar === 'open') {
            this.showSideBar = 'close';
        } else {
            this.showSideBar = 'open';
        }
        this.marker();
    }
}
