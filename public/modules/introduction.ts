import { EsModule } from 'easiest';

import IntroductionContainer from '../pages/introduction';

// export default class IntroductionModule extends EsModule {
//     constructor() {
//         super();
//     }

//     public $declarations(): void {
//         this.$components = {
//             'introduction-container': IntroductionContainer,
//         };
//         this.$exports = [
//             'introduction-container',
//         ];
//     }
// }
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
