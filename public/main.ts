import './styles/reset';
import './styles/global';

import { Easiest } from 'easiest';

import router from './routes';

import RootModule from './modules';

const easiest = new Easiest();
easiest.$bootstrapModule(RootModule);
easiest.$use(router);
easiest.$init();
console.log('easiest', easiest);
