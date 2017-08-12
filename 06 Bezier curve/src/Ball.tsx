import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, Motion, spring, presets } from 'react-motion';
import { getRandomColor } from './utils';
import { CarthesianCoordinates } from './entities';
import { getDistanceBetweenPoints } from './utils/distance';
import { bezier3 } from './utils/bezier';

interface Props {
  from: CarthesianCoordinates;
  reverse?: boolean;
  to: CarthesianCoordinates;
  maxDistance?: number;
  destination: CarthesianCoordinates;
}

const BALL_WIDTH = 50;
const SPRING_CONFIG: SpringHelperConfig = {
  stiffness: 176,
  damping: 26,
};
export class Ball extends React.PureComponent<Props> {
  render() {
    const color = getRandomColor();
    const distance = getDistanceBetweenPoints(this.props.from, this.props.destination) || 1;
    const center: CarthesianCoordinates = {
      x: (this.props.from.x + this.props.to.x) / 2,
      y: (this.props.from.y + this.props.to.y) / 2
    };
    const modifierPoint: CarthesianCoordinates = {
      x: center.x,
      y: center.y - distance / 3
    };
    return (
      <g>
        <Motion style={{ x: spring(distance, SPRING_CONFIG) }}>
          {({ x }) => {
            const t = this.props.reverse ? distance - x / distance : x / distance;
            const point = bezier3(this.props.from, this.props.to, modifierPoint, t);
            console.log(JSON.stringify(point), x, distance);
            return (
              <g>
                <circle
                  cx={this.props.from.x}
                  cy={this.props.from.y}
                  r={BALL_WIDTH / 2}
                  fill={color}
                  transform={`translate(${point.x - this.props.to.x}, ${point.y - this.props.to.y})`}
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
