// import { EsModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import IntroductionContainer from '../pages/introduction';

@NvModule({
    imports: [
    ],
    components: {
        'introduction-container': IntroductionContainer,
    },
    providers: [
    ],
    exports: [
        'introduction-container',
    ],
})
export default class IntroductionModule { }
