import './style.less';

// import { Component } from 'easiest';
import { Component } from '../../../../lib';

@Component<any>({
  template: (`
    <div class="page-container">
      DocsComponentContainer
      <router-render></router-render>
    </div>
  `),
})
export default class DocsComponentContainer {}
