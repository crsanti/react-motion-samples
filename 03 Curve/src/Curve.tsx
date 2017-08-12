import * as React from 'react';
import { Coordinates } from './entities';

interface Props {
  from: Coordinates;
  to: Coordinates;
  height: number;
}

export const Curve: React.StatelessComponent<Props> = (props) => {
  const point = generateFocusPoint(props);
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
      <line
        x1={((props.to.x - props.from.x) / 2) + props.from.x}
        y1={props.from.y}
        x2={((props.to.x - props.from.x) / 2) + props.from.x}
        y2={props.to.y + props.height}
        stroke="#333"
        strokeWidth={1.5}
      />
      <path
        d={`M${props.from.x} ${props.from.y} Z`}
        fill="transparent"
      />
      <circle cx={props.from.x} cy={props.from.y} r={3} fill="blue" />
      <circle cx={props.to.x} cy={props.from.y} r={3} fill="blue" />
      <circle cx={props.to.x / 2} cy={props.to.y} r={3} fill="green" />
      <circle
        cx={(props.to.x / 2) - point.x}
        cy={point.y}
        r={3}
        fill="red"
      />
      <circle
        cx={(props.to.x / 2) + point.x}
        cy={point.y}
        r={3}
        fill="red"
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
