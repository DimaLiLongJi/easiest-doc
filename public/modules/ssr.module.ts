import { NvModule } from '@indiv/core';
import ShareModule from './share.module';
import SSRContainer from '../pages/ssr';

@NvModule({
    declarations: [
        ShareModule,
        SSRContainer,
    ],
    exports: [
        SSRContainer,
    ],
    bootstrap: SSRContainer,
})
export default class SSRModule {}
