import * as React from 'react';
import './App.scss';
import { Slider } from './Slider';
import { Curve } from './Curve';
import { Coordinates } from './entities';
import { Ball } from './Ball';
import { Circle } from './Circle';

interface State {
  lineLength: number;
  fromBegining: boolean;
  to: number;
}

const STARTING_POINT: Coordinates = {
  x: 50,
  y: 100,
};
export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      lineLength: 600,
      fromBegining: true,
      to: STARTING_POINT.x,
    };
  }

  render() {
    const { innerWidth, innerHeight } = window;
    const maxWidth = innerWidth - 50;
    const maxHeight = innerHeight / 2.8;
    return (
      <div className="app">
        <div className="commands">
          <Slider
            min={0}
            max={maxWidth}
            value={this.state.lineLength}
            onChange={this.lineLengthChange}
          />
          <button className="app-btn btn btn-default" onClick={this.onStart}>Start</button>
          <button className="app-btn btn btn-default" onClick={this.onReset}>Reset</button>
        </div>
        <div className="svg-container">
          <svg className="svg">
            <Curve
              from={STARTING_POINT}
              to={{ x: this.state.lineLength, y: STARTING_POINT.y }}
              heightRatio={0.15}
            />
            <Ball
              x={STARTING_POINT.x}
              y={STARTING_POINT.y}
              reverse={this.state.fromBegining}
              to={this.state.to}
              maxDistance={this.state.lineLength}
            />
          </svg>
        </div>
      </div>
    );
  }

  private lineLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      lineLength: Number(event.target.value),
    });
  }

  private onStart = () => {
    if (this.state.fromBegining) {
      this.setState({
        fromBegining: false,
        to: this.state.lineLength,
      });
    }
  }

  private onReset = () => {
    if (!this.state.fromBegining) {
      this.setState({
        fromBegining: true,
        to: STARTING_POINT.x,
      });
    }
  }
}
