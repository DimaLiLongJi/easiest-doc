import './style.less';

import { Component, ChangeDetectionStrategy, MarkForCheck, TMarkForCheck } from '@indiv/core';
import TestService from '../../service/test.service';
import { VersionService } from '../../service/version.service';

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
export class RootComponent {
    public showSideBar: string = 'open';
    public currentVersion: string = 'v1.2.2';
    public lastVersion: string = 'v4.1.0';
    @MarkForCheck() public marker: TMarkForCheck;

    constructor(private versionService: VersionService) {
        this.lastVersion = this.versionService.getLastVersion();
    }

    public changeShowSideBar() {
        if (this.showSideBar === 'open') {
            this.showSideBar = 'close';
        } else {
            this.showSideBar = 'open';
        }
        this.marker();
    }
}
