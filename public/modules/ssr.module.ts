// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';

import SSRContainer from '../pages/ssr';

@NvModule({
    imports: [
    ],
    components: [
        SSRContainer,
    ],
    providers: [
    ],
    exports: [
        SSRContainer,
    ],
})
export default class SSRModule { }
