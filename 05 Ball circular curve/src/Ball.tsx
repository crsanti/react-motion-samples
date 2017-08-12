import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, Motion, spring, presets } from 'react-motion';
import { getRandomColor } from './utils';
import { Coordinates } from './entities';

interface Props {
  config?: OpaqueConfig | SpringHelperConfig;
  x: number;
  y: number;
  reverse: boolean;
  to: number;
  maxDistance: number;
}

const BALL_WIDTH = 50;
const SPRING_CONFIG: SpringHelperConfig = {
  stiffness: 176,
  damping: 26,
};
const STARTING_POINT: Coordinates = {
  x: 50,
  y: 100,
};
export class Ball extends React.PureComponent<Props> {
  render() {
    const color = getRandomColor();
    const center = {
      x: (this.props.x + this.props.maxDistance) / 2,
      y: this.props.y,
    };
    const radius = (this.props.maxDistance - this.props.x) / 2;
    return (
      <g>
        <circle cx={center.x} cy={center.y} r={3} fill="green" />
        <circle cx={center.x} cy={center.y} r={radius} fill="transparent" stroke="#333" />
        <Motion style={{ x: spring(this.props.to, SPRING_CONFIG) }}>
          {(value) => {
            const pointX = value.x;
            const pointY = Math.sqrt(Math.pow(radius, 2) - Math.pow((pointX - center.x), 2)) + center.y;
            return (
              <g>
                <circle
                  cx={this.props.x}
                  cy={this.props.y}
                  r={BALL_WIDTH / 2}
                  fill={color}
                  transform={`translate(${pointX - BALL_WIDTH}, ${pointY - this.props.y})`}
                />
                <line
                  stroke="#333"
                  strokeWidth={1.5}
                  x1={value.x}
                  y1={this.props.y}
                  x2={pointX}
                  y2={pointY}
                />
              </g>
            );
          }}
        </Motion>
        />
      </g>
    );
  }
}
