import * as React from 'react';
import './App.scss';
import { Slider } from './Slider';
import { Curve } from './Curve';

interface State {
  minorAxis: number;
  majorAxis: number;
}

const MAJOR_AXIS = 200;
export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      minorAxis: 120,
      majorAxis: 260,
    };
  }

  render() {
    const { innerWidth, innerHeight } = window;
    const maxWidth = innerWidth  - 200;
    const maxHeight = innerHeight / 2.8;
    return (
      <div className="app">
        <div className="commands">
          <Slider min={50} max={maxWidth} value={this.state.majorAxis} onChange={this.onMajorAxisChange} />
          <Slider min={50} max={maxHeight} value={this.state.minorAxis} onChange={this.onMinorAxisChange} />
        </div>
        <svg className="svg">
          <Curve
            from={{ x: 0, y: 50 }}
            to={{ x: this.state.majorAxis, y: 50 }}
            height={this.state.minorAxis}
          />
        </svg>
      </div>
    );
  }

  private onMajorAxisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      majorAxis: Number(event.target.value),
    });
  }

  private onMinorAxisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      minorAxis: Number(event.target.value),
    });
  }
}
