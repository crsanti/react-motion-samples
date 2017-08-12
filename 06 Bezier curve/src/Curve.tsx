import * as React from 'react';
import { CarthesianCoordinates } from './entities';
import { bezier2, bezier3 } from './utils/bezier';
import { getDistanceBetweenPoints } from './utils/distance';

interface Props {
  from: CarthesianCoordinates;
  to: CarthesianCoordinates;
  heightRatio: number;
}

export const Curve: React.StatelessComponent<Props> = (props) => {
  const distance = getDistanceBetweenPoints(props.from, props.to);
  const center: CarthesianCoordinates = {
    x: (props.from.x + props.to.x) / 2,
    y: (props.from.y + props.to.y) / 2
  };
  const modifierPoint: CarthesianCoordinates = {
    x: center.x,
    y: center.y - distance / 3
  };
  const bezierMiddle = bezier3(props.from, props.to, modifierPoint, 0.5);
  return (
    <g>
      <circle
        cx={center.x}
        cy={center.y}
        r={3}
        fill="orange"
      />
      <line
        x1={props.from.x}
        y1={props.from.y}
        x2={props.to.x}
        y2={props.to.y}
        stroke="black"
      />
      <line
        x1={props.from.x}
        y1={props.from.y}
        x2={modifierPoint.x}
        y2={modifierPoint.y}
        stroke="black"
      />
      <line
        x1={modifierPoint.x}
        y1={modifierPoint.y}
        x2={props.to.x}
        y2={props.to.y}
        stroke="black"
      />
      <line
        x1={center.x}
        y1={center.y}
        x2={center.x}
        y2={bezierMiddle.y}
        stroke="black"
      />
      <circle
        cx={props.from.x}
        cy={props.from.y}
        r={3}
        fill="red"
      />
      {Array.from({ length: 100 }).map((_, i) => {
        const point = bezier3(props.from, props.to, modifierPoint, i / 100);
        // const point = bezier2(props.from, props.to, i / 100);
        return (
          <circle
            key={Math.random()}
            cx={point.x}
            cy={point.y}
            r={1}
            fill="black"
          />
        );
      })}
      <circle
        cx={props.to.x}
        cy={props.to.y}
        r={3}
        fill="red"
      />
      <circle
        cx={modifierPoint.x}
        cy={modifierPoint.y}
        r={3}
        fill="blue"
      />
      <path
        d={`
          M${props.from.x}, ${props.from.y}
          Q${modifierPoint.x}, ${modifierPoint.y}
          ${props.to.x}, ${props.to.y}
        `}
        fill="transparent"
        stroke="black"
      />
      <circle
        cx={bezierMiddle.x}
        cy={bezierMiddle.y}
        r={3}
        fill="yellow"
      />
    </g>
  );
};

Curve.displayName = 'Curve';
