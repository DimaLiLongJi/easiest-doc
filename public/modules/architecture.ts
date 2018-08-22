// import { EsModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import ArchitectureContainer from '../pages/architecture';

@NvModule({
    imports: [
    ],
    components: {
        'architecture-container': ArchitectureContainer,
    },
    providers: [
    ],
    exports: [
        'architecture-container',
    ],
})
export default class ArchitectureModule { }
