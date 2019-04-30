import { NvModule } from '@indiv/core';
import ShareModule from './share.module';
import MiddlewareContainer from '../pages/middleware';

@NvModule({
  declarations: [
      MiddlewareContainer,
      ShareModule
    ],
  exports: [
      MiddlewareContainer,
    ],
  bootstrap: MiddlewareContainer,
})
export default class MiddlewareModule { }
