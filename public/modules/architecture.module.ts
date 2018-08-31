// import { NvModule } from 'easiest';
import { NvModule } from '../../../InDiv/src';

import ArchitectureContainer from '../pages/architecture';

@NvModule({
    imports: [
    ],
    components: [
        ArchitectureContainer,
    ],
    providers: [
    ],
    exports: [
        ArchitectureContainer,
    ],
})
export default class ArchitectureModule { }
