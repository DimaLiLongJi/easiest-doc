import 'highlight.js/styles/atom-one-dark.css';

// import { Component, OnInit, SetState, HasRender, ReceiveProps, setState } from 'indiv';
import { Component, OnInit, SetState, HasRender, ReceiveProps, setState } from '../../../../InDiv/src';
// import { Component, OnInit, SetState, HasRender, ReceiveProps, setState } from '../../../../InDiv/build';
import hljs from 'highlight.js';

interface State {
    codes: string;
    type: string;
}

interface Props {
    codes: string;
    type?: string;
}

@Component<State, Props>({
    selector: 'code-shower',
    template: (`
        <div nv-on:click="@show()" class="code-show-container">
            <blockquote>
                <pre>
                    <code nv-class="type">{{codes}}</code>
                </pre>
            </blockquote>
        </div>
    `),
})
export default class CodeShower implements OnInit, HasRender, ReceiveProps {
    public state: State;
    public props: Props;
    public setState: SetState;

    public nvOnInit() {
        this.setState = setState;
        this.state = {
            codes: this.props.codes,
            type: 'typescript',
        };
        if (this.props.type) this.state.type = this.props.type;
    }

    public show() {
        console.log(this.state.codes);
    }

    public nvHasRender() {
        document.querySelectorAll('pre code').forEach((dom) => {
            hljs.highlightBlock(dom);
        });
    }

    public nvReceiveProps(_props: Props) {
        if (_props.type) this.state.type = _props.type;
    }

}
