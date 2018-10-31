import './styles/reset';
import './styles/global';

import { InDiv } from 'indiv';
// import { InDiv } from '../../InDiv/src';
// import { InDiv } from '../../InDiv/build';

import router from './routes';

import RootModule from './modules';

const inDiv = new InDiv();
inDiv.bootstrapModule(RootModule);
inDiv.use(router);
inDiv.init();
console.log('indiv', inDiv);
