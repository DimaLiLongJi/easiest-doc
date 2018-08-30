// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';
import DocsTemplateContainer from '../pages/docs/template';
import DocsModuleContainer from '../pages/docs/module';
import DocsServiceContainer from '../pages/docs/service';
import DocsRouteContainer from '../pages/docs/route';
import DocsInDivContainer from '../pages/docs/indiv';
import DocsLibsContainer from '../pages/docs/libs';

@NvModule({
    imports: [
    ],
    components: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
        DocsModuleContainer,
        DocsServiceContainer,
        DocsRouteContainer,
        DocsInDivContainer,
        DocsLibsContainer,
    ],
    providers: [
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
    ],
})
export default class DocsModule { }
