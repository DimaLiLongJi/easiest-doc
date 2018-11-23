// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

import SSRContainer from '../pages/ssr';

@NvModule({
    declarations: [
        SSRContainer,
    ],
    exports: [
        SSRContainer,
    ],
    bootstrap: SSRContainer,
})
export default class SSRModule {}
