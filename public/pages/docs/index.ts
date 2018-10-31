import './style.less';

import { Component, RouteChange } from 'indiv';
// import { Component, RouteChange } from '../../../../InDiv/src';
// import { Component, RouteChange } from '../../../../InDiv/build';

@Component<any>({
  selector: 'docs-container',
  template: (`
      <div class="page-container">
        <router-render></router-render>
      </div>
  `),
})
export default class DocsContainer implements RouteChange {
  constructor() {}

  public nvRouteChange(lastRoute?: string, newRoute?: string) {
    console.log('DocsContainer nvRouteChange', lastRoute, newRoute);
  }
}
