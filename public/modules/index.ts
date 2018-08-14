// import { EsModule } from 'easiest';
import { EsModule } from '../../../easiest/src';

import IntroductionModule from './introduction';
import ArchitectureModule from './architecture';
import DocsModule from './docs';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';

@EsModule({
  imports: [
    IntroductionModule,
    ArchitectureModule,
    DocsModule,
  ],
  components: {
    'side-bar': SideBar,
    'root-component': RootComponent,
  },
  providers: [],
})
export default class RootModule { }
