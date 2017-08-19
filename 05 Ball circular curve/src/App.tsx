import * as React from 'react';
import './App.scss';
import { Slider } from './Slider';
import { CarthesianCoordinates } from './entities';
import { Ball } from './Ball';
import { Circle } from './Circle';
import { VisualElements } from './VisualElements';
import { AutoSizer } from 'react-virtualized';

interface State {
  lineLength: number;
  fromBegining: boolean;
}

export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      lineLength: 300,
      fromBegining: true,
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
              const centerPoint: CarthesianCoordinates = {
                x: width / 2,
                y: height / 2,
              };
              return (
                <svg width={width} height={height} className="svg">
                  <VisualElements
                    centerPoint={centerPoint}
                    diameter={this.state.lineLength}
                  />
                  <Ball
                    centerPoint={centerPoint}
                    diameter={this.state.lineLength}
                    fromBegining={this.state.fromBegining}
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
      });
    }
  }

  private onReset = () => {
    if (!this.state.fromBegining) {
      this.setState({
        fromBegining: true,
      });
    }
  }
}
