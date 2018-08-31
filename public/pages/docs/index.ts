import './style.less';

import { Component } from 'indiv';

@Component<any>({
  selector: 'docs-container',
  template: (`
      <div class="page-container">
        <router-render></router-render>
      </div>
  `),
})
export default class DocsContainer {
  constructor() {}
}
