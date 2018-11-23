// import { NvModule } from 'indiv';
import { NvModule } from '../../../InDiv/src';
// import { NvModule } from '../../../InDiv/build';

import ArchitectureContainer from '../pages/architecture';

@NvModule({
    declarations: [
        ArchitectureContainer,
    ],
    exports: [
        ArchitectureContainer,
    ],
    bootstrap: ArchitectureContainer,
})
export default class ArchitectureModule { }
