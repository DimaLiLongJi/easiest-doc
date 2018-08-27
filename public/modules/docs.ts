// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';
import DocsTemplateContainer from '../pages/docs/template';

@NvModule({
    imports: [
    ],
    components: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
    ],
    providers: [
    ],
    exports: [
        DocsContainer,
        DocsComponentContainer,
        DocsTemplateContainer,
    ],
})
export default class DocsModule { }
