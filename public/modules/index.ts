import { EsModule } from 'easiest';

import IntroductionModule from './introduction';
import ArchitectureModule from './architecture';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';

// export default class RootModule extends EsModule {
//     constructor() {
//       super();
//     }

//     public $declarations(): void {
//       this.$imports = [
//         IntroductionModule,
//         ArchitectureModule,
//       ];
//       this.$components = {
//         'side-bar': SideBar,
//         'root-component': RootComponent,
//       };
//       this.$providers = [
//       ];
//     }
//   }
@EsModule({
  imports: [
    IntroductionModule,
    ArchitectureModule,
  ],
  components: {
    'side-bar': SideBar,
    'root-component': RootComponent,
  },
  providers: [],
})
export default class RootModule { }
