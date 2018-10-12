import { NvModule } from 'indiv';
// import { NvModule } from '../../../InDiv/src';

import MiddlewareContainer from '../pages/middleware';

@NvModule({
    components: [
      MiddlewareContainer,
    ],
    exports: [
      MiddlewareContainer,
    ],
})
export default class MiddlewareModule { }
