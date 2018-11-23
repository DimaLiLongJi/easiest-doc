// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

import MiddlewareContainer from '../pages/middleware';

@NvModule({
  declarations: [
      MiddlewareContainer,
    ],
  exports: [
      MiddlewareContainer,
    ],
  bootstrap: MiddlewareContainer,
})
export default class MiddlewareModule { }
