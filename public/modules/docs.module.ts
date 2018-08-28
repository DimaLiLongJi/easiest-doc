// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';
import DocsTemplateContainer from '../pages/docs/template';
import DocsModuleContainer from '../pages/docs/module';

@NvModule({
    imports: [
    ],
    components: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
        DocsModuleContainer,
    ],
    providers: [
    ],
    exports: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
        DocsModuleContainer,
    ],
})
export default class DocsModule { }
