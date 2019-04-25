import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

interface MainProps { name: string; }
interface MainState { val: number; }

class MainComponent extends React.Component<MainProps, MainState> {
  constructor(props: Readonly<MainProps>) {
    super(props);
    this.state = {val: 0};
  }
  render() {
    return <div>
        <Hello compiler={this.props.name} framework="React" />
        <p>{this.state.val}</p>
        <button onClick={this.increment}>Press me</button>
      </div>
  }
  increment = () => {
    this.setState(state => ({val: state.val + 1}));
  }
}

ReactDOM.render(
  <MainComponent name="Typescript 3.something" />,
  document.getElementById("example")
);
