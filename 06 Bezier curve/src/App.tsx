import * as React from 'react';
import './App.scss';
import { Slider } from './Slider';
import { VisualElements } from './VisualElements';
import { CarthesianCoordinates } from './entities';
import { Ball } from './Ball';
import { AutoSizer } from 'react-virtualized';

interface State {
  lineLength: number;
  fromBegining: boolean;
  to: number;
}

const STARTING_POINT: CarthesianCoordinates = {
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
          <div className="form-group">
            <button className="app-btn btn btn-default" onClick={this.onStart}>Start</button>
            <button className="app-btn btn btn-default" onClick={this.onReset}>Reset</button>
          </div>
        </div>
        <div className="svg-container">
          <AutoSizer>
            {({ width, height }) => {
              const centerX = width / 2;
              const centerY = height / 2;
              const from = {
                x: centerX - this.state.lineLength / 2,
                y: centerY,
              };
              const to = {
                x: centerX + this.state.lineLength / 2,
                y: centerY,
              };
              return (
                <svg width={width} height={height} className="svg">
                  <Ball
                    from={from}
                    to={to}
                    fromBegining={this.state.fromBegining}
                  />
                  <VisualElements
                    from={from}
                    to={to}
                    heightRatio={0.25}
                  />
                </svg>
              );
            }}
          </AutoSizer>
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
