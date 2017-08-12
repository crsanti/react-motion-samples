import * as React from 'react';
import { Coordinates } from './entities';

interface Props {
  from: Coordinates;
  to: Coordinates;
  heightRatio: number;
}

const HEIGHT = 50;
export const Curve: React.StatelessComponent<Props> = (props) => {
  return (
    <g>
      <line
        x1={props.from.x}
        y1={props.from.y}
        x2={props.to.x}
        y2={props.to.y}
        stroke="#333"
        strokeWidth={1.5}
      />
      <path
        d={`
          M${props.from.x} ${props.from.y}
          C${props.from.x} ${props.from.y + props.to.x * props.heightRatio}
          ${props.to.x} ${props.from.y + props.to.x * props.heightRatio}
          ${props.to.x} ${props.to.y}
        `}
        fill="transparent"
        stroke="#333"
        strokeWidth={1.5}
      />
    </g>
  );
};

Curve.displayName = 'Curve';
