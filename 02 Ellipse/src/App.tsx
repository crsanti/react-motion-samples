import * as React from 'react';
import './App.scss';
import { Ellipse } from './Ellipse';
import { Slider } from './Slider';

interface State {
  minorAxis: number;
  majorAxis: number;
}

const MAJOR_AXIS = 200;
export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      minorAxis: 200,
      majorAxis: 200,
    };
  }

  render() {
    const { innerWidth, innerHeight } = window;
    const maxWidth = innerWidth / 2;
    const maxHeight = innerHeight / 2.8;
    return (
      <div className="app">
        <div className="commands">
          <Slider min={50} max={600} value={this.state.majorAxis} onChange={this.onMajorAxisChange} />
          <Slider min={50} max={600} value={this.state.minorAxis} onChange={this.onMinorAxisChange} />
        </div>
        <svg className="svg">
          <Ellipse
            x={maxWidth}
            y={maxHeight}
            minorAxis={this.state.minorAxis}
            majorAxis={this.state.majorAxis}
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
