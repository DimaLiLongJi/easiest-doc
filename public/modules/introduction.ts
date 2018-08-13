import { EsModule } from 'easiest';

import IntroductionContainer from '../pages/introduction';

@EsModule({
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
