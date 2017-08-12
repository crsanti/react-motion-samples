import * as React from 'react';
import { OpaqueConfig, SpringHelperConfig, Motion, spring, presets } from 'react-motion';
import { getRandomColor } from './utils';

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
export const Ball: React.StatelessComponent<Props> = (props) => {
  const color = getRandomColor();
  return (
    <g>
      <Motion style={{ x: spring(props.to, SPRING_CONFIG) }}>
        {(value) => {
          return (
            <circle
              cx={props.x}
              cy={props.y}
              r={BALL_WIDTH / 2}
              fill={color}
              transform={`translate(${value.x}, 0)`}
            />
          );
        }}
      </Motion>
      <line
        x1={props.x}
        y1={props.y}
        x2={props.maxDistance}
        y2={props.y}
        stroke="black"
      />
    </g>
  );
};
Ball.displayName = 'Ball';
