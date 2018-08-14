import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../../../easiest/src';

@Component<any>({
  template: (`
    <div class="page-container">
      DocsComponentContainer
      <router-render></router-render>
    </div>
  `),
})
export default class DocsComponentContainer {}
