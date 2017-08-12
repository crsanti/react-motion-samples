import * as React from 'react';
import { CarthesianCoordinates } from './entities';

interface Props {
  from: CarthesianCoordinates;
  to: CarthesianCoordinates;
  radius: number;
}

export const Circle: React.StatelessComponent<Props> = (props) => {
  const center = {
    x: (props.from.x + props.to.x) / 2,
    y: (props.from.y + props.to.y) / 2,
  };
  return (
    <g>
      <circle cx={center.x} cy={center.y} r={3} fill="green" />
      <circle cx={center.x} cy={center.y} r={props.radius} fill="transparent" stroke="#333" />
    </g>
  );
};
