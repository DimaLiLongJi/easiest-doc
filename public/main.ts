import './styles/reset.less';
import './styles/global.less';

import { InDiv } from '@indiv/core';
import { PlatformBrowser } from '@indiv/platform-browser';
import RootModule from './modules';

const inDiv = new InDiv();
inDiv.bootstrapModule(RootModule);
inDiv.use(PlatformBrowser);
inDiv.init();

console.log('indiv', inDiv);
