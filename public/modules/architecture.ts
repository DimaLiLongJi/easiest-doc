import { EsModule } from 'easiest';

import ArchitectureContainer from '../pages/architecture';

export default class ArchitectureModule extends EsModule {
    constructor() {
        super();
    }

    public $declarations(): void {
        this.$components = {
            'architecture-container': ArchitectureContainer,
        };
        this.$exports = [
            'architecture-container',
        ];
    }
}
