import * as React from 'react';
import './App.scss';
import { Ball } from './Ball';

const NUMBER_OF_BALLS = 5;
const INITIAL_VALUE = 100;
const MAX_DISTANCE = window.innerWidth - INITIAL_VALUE;
interface State {
  x: number;
  fromBegining: boolean;
}
export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = { x: INITIAL_VALUE, fromBegining: true };
  }

  render() {
    return (
      <div className="app">
        <div className="commands">
          <button className="app-btn btn btn-default" onClick={this.onStart}>Start</button>
          <button className="app-btn btn btn-default" onClick={this.onReset}>Reset</button>
        </div>
        <svg className="svg">
          <Ball
            x={INITIAL_VALUE}
            y={INITIAL_VALUE}
            reverse={this.state.fromBegining}
            to={this.state.x - INITIAL_VALUE}
            maxDistance={MAX_DISTANCE}
          />
        </svg>
      </div>
    );
  }

  private onStart = () => {
    if (this.state.x !== MAX_DISTANCE) {
      this.setState({ x: MAX_DISTANCE, fromBegining: false });
    }
  }

  private onReset = () => {
    if (this.state.x !== INITIAL_VALUE) {
      this.setState({ x: INITIAL_VALUE, fromBegining: true });
    }
  }
}
