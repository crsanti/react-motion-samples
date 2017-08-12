import * as React from 'react';
import { Coordinates } from './entities';

interface Props {
  from: Coordinates;
  to: Coordinates;
  height: number;
}

const HEIGHT = 50;
export const Curve: React.StatelessComponent<Props> = (props) => {
  const point = generateFocusPoint(props);

  // distance : constant
  // newDistance: x
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
          C${props.from.x} ${props.from.y + props.to.x * 0.15}
          ${props.to.x} ${props.from.y + props.to.x * 0.15}
          ${props.to.x} ${props.to.y}
        `}
        fill="transparent"
        stroke="#333"
        strokeWidth={1.5}
      />
      <line
        x1={props.from.x}
        y1={props.from.y}
        x2={props.from.x}
        y2={props.from.y + props.height}
        stroke="#333"
        strokeWidth={1.5}
      />
      <circle
        cx={props.from.x}
        cy={props.from.y + props.height}
        r={3}
        fill="green"
      />

    </g>
  );
};

Curve.displayName = 'Curve';

const generateFocusPoint = (props: Props) => {
  const a = props.to.x / 2;
  const b = props.height;

  const c = Math.sqrt((a * a) - (b * b));
  console.log(a, b, c);

  return {
    x: c / 2,
    y: props.from.y,
  };
};
