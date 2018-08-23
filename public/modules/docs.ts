// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';

@NvModule({
    imports: [
    ],
    components: [
        DocsContainer,
        DocsComponentContainer,
    ],
    providers: [
    ],
    exports: [
        DocsContainer,
        DocsComponentContainer,
    ],
})
export default class DocsModule { }
