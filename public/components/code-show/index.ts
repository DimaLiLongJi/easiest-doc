import './style.less';

// import { Component, OnInit, WatchState, SetState, SetLocation, GetLocation } from 'easiest';
import { Component, OnInit, SetState, SetLocation, GetLocation } from '../../../../easiest/src';

interface State {
    codes: string;
}

@Component<State>({
    selector: 'code-shower',
    state: {
        codes: null,
    },
    template: (`
        <div nv-on:click="@show()" class="code-show-container">
            <blockquote>
                <pre>
                    <code>{{state.codes}}</code>
                </pre>
            </blockquote>
        </div>
    `),
})
export default class CodeShower implements OnInit {
    public state: State;
    public props: any;
    public getLocation: GetLocation;
    public setLocation: SetLocation;
    public setState: SetState;

    public nvOnInit() {
        this.state.codes = this.props.codes;
        // console.log(999, this.props);
        // console.log(1009, this.state.codes);
    }

    public show() {
        console.log(this.state.codes)
    }
}
