import * as React from 'react';
import './App.scss';
import { Slider } from './Slider';
import { Curve } from './Curve';
import { Grid } from './Grid';

interface State {
  modifier: number;
  lineLength: number;
}

export class App extends React.Component<{}, State> {
  constructor() {
    super();
    this.state = {
      modifier: 50,
      lineLength: 600,
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
          <Slider
            min={0}
            max={maxHeight}
            value={this.state.modifier}
            onChange={this.onmodifierChange}
          />
        </div>
        <div className="svg-container">
          <svg className="svg">
            <Curve
              from={{ x: 50, y: 100 }}
              to={{ x: this.state.lineLength, y: 100 }}
              height={this.state.modifier}
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

  private onmodifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      modifier: Number(event.target.value),
    });
  }
}
