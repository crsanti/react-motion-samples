import * as React from 'react';
import { CarthesianCoordinates } from './entities';

interface Props {
  centerPoint: CarthesianCoordinates;
  diameter: number;
}

export const VisualElements: React.StatelessComponent<Props> = (props) => {
  const radius = props.diameter / 2;
  return (
    <g>
      <line
        x1={props.centerPoint.x - radius}
        y1={props.centerPoint.y}
        x2={props.centerPoint.x + radius}
        y2={props.centerPoint.y}
        stroke="black"
      />
      <circle
        cx={props.centerPoint.x}
        cy={props.centerPoint.y}
        r={3}
        fill="green"
      />
      <circle
        cx={props.centerPoint.x}
        cy={props.centerPoint.y}
        r={radius}
        fill="transparent"
        stroke="black"
      />
    </g>
  );
};
