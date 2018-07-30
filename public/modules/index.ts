import { EsModule } from 'easiest';

import RootComponent from '../components/root-component';
import SideBar from '../components/side-bars';

export default class RootModule extends EsModule {
    constructor() {
      super();
    }
  
    public $declarations(): void {
      this.$components = {
        'side-bar': SideBar,
        'root-component': RootComponent,
      };
      this.$providers = [
      ];
      // this.$bootstrap = RootComponent;
    }
  }
