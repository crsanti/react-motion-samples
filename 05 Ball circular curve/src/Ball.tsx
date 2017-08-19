import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, Motion, spring, presets } from 'react-motion';
import { getRandomColor, getCircumferenceY } from './utils';
import { CarthesianCoordinates } from './entities';

interface Props {
  config?: OpaqueConfig | SpringHelperConfig;
  centerPoint: CarthesianCoordinates;
  fromBegining: boolean;
  diameter: number;
}

const BALL_WIDTH = 50;
const SPRING_CONFIG: SpringHelperConfig = {
  stiffness: 176,
  damping: 26,
};

export class Ball extends React.PureComponent<Props> {
  render() {
    const { centerPoint } = this.props;
    const color = getRandomColor();
    const radius = this.props.diameter / 2;
    const springValue = this.props.fromBegining ? 0 : this.props.diameter;
    return (
      <g>
        <Motion style={{ x: spring(springValue, SPRING_CONFIG) }}>
          {({ x }) => {
            const y = getCircumferenceY(radius, centerPoint, centerPoint.x - radius + x);
            return (
              <circle
                cx={centerPoint.x - radius}
                cy={centerPoint.y}
                r={BALL_WIDTH / 2}
                fill={color}
                transform={`translate(${x}, ${y})`}
              />
            );
          }}
        </Motion>
        />
      </g>
    );
  }
}
