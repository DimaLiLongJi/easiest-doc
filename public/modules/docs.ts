// import { EsModule } from 'easiest';
import { EsModule } from '../../../easiest/src';

import DocsContainer from '../pages/docs';
import DocsComponentContainer from '../pages/docs/component';

@EsModule({
    imports: [
    ],
    components: {
        'docs-container': DocsContainer,
        'docs-component-container': DocsComponentContainer,
    },
    providers: [
    ],
    exports: [
      'docs-container',
      'docs-component-container',
    ],
})
export default class DocsModule { }
