import './style.less';

import { Component, ChangeDetectionStrategy, MarkForCheck, TMarkForCheck } from '@indiv/core';
import TestService from '../../service/test.service';

@Component({
    selector: 'root-component',
    templateUrl: './template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
        provide: TestService,
        // useClass: TestService,
        },
    ],
})
export default class RootComponent {
    public showSideBar: string = 'open';
    public currentVersion: string = 'v1.2.2';
    public newestVersion: string = 'v4.0.0';
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
