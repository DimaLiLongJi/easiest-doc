import { NvModule } from 'indiv';
// import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

import SSRContainer from '../pages/ssr';

@NvModule({
    components: [
        SSRContainer,
    ],
    exports: [
        SSRContainer,
    ],
})
export default class SSRModule { }
