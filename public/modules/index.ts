// import { NvModule } from 'easiest';
import { NvModule } from '../../../easiest/src';

import IntroductionModule from './introduction.module';
import ArchitectureModule from './architecture.module';
import DocsModule from './docs.module';

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
