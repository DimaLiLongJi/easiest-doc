import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../../easiest/src';

@Component<any>({
  template: (`
      <div class="page-container">
        <router-render></router-render>
      </div>
  `),
})
export default class DocsContainer {
  constructor() {}
}
