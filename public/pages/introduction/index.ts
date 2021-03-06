import { Component, AfterMount, Watch } from '@indiv/core';
import { Inject } from '@indiv/di';
import { content } from '../../constants/introduction';
import { VersionService, versionToken } from '../../service/version.service';

type Info = {
    [x: string]: any;
    h1: string;
    p: string[];
    info?: string[];
}

@Component({
    selector: 'introduction-container',
    templateUrl: './template.html',
    // template: (`
    //     <div class="page-container">
    //         <div class="info-content" nv-repeat="info in infos">
    //             <h1>{{info.h1}}</h1>
    //             <p nv-repeat="pp in info.p">{{pp}}</p>
    //             <div class="child-info" nv-if="info.info">
    //                 <div class="pchild">
    //                     <p nv-repeat="child in info.info">{{child}}</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `),
})
export default class IntroductionContainer implements AfterMount {
    @Watch() public lastVersion: string;
    public infos: Info[] = content();
    
    @Inject(VersionService)
    private versionService: VersionService;

    constructor(@Inject(versionToken) private version: string) {
        this.lastVersion = version;
    }

    public nvAfterMount(): void {
        // this.lastVersion = this.versionService.getLastVersion();
    }
}
