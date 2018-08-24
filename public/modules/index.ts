// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import IntroductionModule from './introduction';
import ArchitectureModule from './architecture';
import DocsModule from './docs';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';
import CodeShower from '../components/code-show';

@NvModule({
  imports: [
    IntroductionModule,
    ArchitectureModule,
    DocsModule,
  ],
  components: [
    SideBar,
    RootComponent,
    CodeShower,
  ],
  providers: [],
})
export default class RootModule { }
