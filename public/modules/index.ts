import { EsModule } from 'easiest';

import  IntroductionModule from './introduction';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';

export default class RootModule extends EsModule {
    constructor() {
      super();
    }
  
    public $declarations(): void {
      this.$imports = [
        IntroductionModule,
      ];
      this.$components = {
        'side-bar': SideBar,
        'root-component': RootComponent,
      };
      this.$providers = [
      ];
    }
  }
