import './styles/reset';
import './styles/global';

// import { InDiv } from 'indiv';
import { InDiv } from '../../InDiv/src';
// import { InDiv } from '../../InDiv/build';
import RootModule from './modules';

const inDiv = new InDiv();
inDiv.bootstrapModule(RootModule);
inDiv.init();

console.log('indiv', inDiv);
