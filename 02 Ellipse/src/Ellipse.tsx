import * as React from 'react';

interface Props {
  x: number;
  y: number;
  minorAxis: number;
  majorAxis: number;
}

export const Ellipse: React.StatelessComponent<Props> = (props) => {
  return (
    <g>
      <ellipse
        cx={props.x}
        cy={props.y}
        rx={props.majorAxis}
        ry={props.minorAxis}
        fill="transparent"
        stroke="#333"
        strokeWidth={3}
      />
      <line
        x1={props.x - props.majorAxis}
        y1={props.y}
        x2={props.x + props.majorAxis}
        y2={props.y}
        stroke="#333"
        strokeWidth={3}
      />
      <line
        x1={props.x}
        y1={props.y - props.minorAxis}
        x2={props.x}
        y2={props.y + props.minorAxis}
        stroke="#333"
        strokeWidth={3}
      />
    </g>
  );
};
Ellipse.displayName = 'Ellipse';
