import { NvModule } from '@indiv/core';
import ShareModule from './share.module';
import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';
import DocsTemplateContainer from '../pages/docs/template';
import DocsModuleContainer from '../pages/docs/module';
import DocsServiceContainer from '../pages/docs/service';
import DocsRouteContainer from '../pages/docs/route';
import DocsInDivContainer from '../pages/docs/indiv';
import DocsLibsContainer from '../pages/docs/libs';
import DocsHttpContainer from '../pages/docs/http';

import TestService from '../service/test.service';
import { factoryService, ProvideFactoryService } from '../service/factory.service';

@NvModule({
    imports: [
        ShareModule
    ],
    declarations: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
        DocsModuleContainer,
        DocsServiceContainer,
        DocsRouteContainer,
        DocsInDivContainer,
        DocsLibsContainer,
        DocsHttpContainer,
    ],
    providers: [
        // {
        //     provide: TestService,
        //     useClass: TestService,
        // },
        {
            provide: ProvideFactoryService,
            useFactory: factoryService,
            deps: [TestService]
        }
    ],
    exports: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
        DocsModuleContainer,
        DocsServiceContainer,
        DocsRouteContainer,
        DocsInDivContainer,
        DocsLibsContainer,
        DocsHttpContainer,
    ],
    bootstrap: DocsContainer,
})
export default class DocsModule {
    constructor () {
        console.log(3333);
    }
}
