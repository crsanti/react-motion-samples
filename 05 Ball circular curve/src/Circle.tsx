import * as React from 'react';

interface Props {
  x: number;
  y: number;
  radius: number;
}

export const Circle: React.StatelessComponent<Props> = (props) => {
  const center = {
    x: props.x,
    y: props.y,
  };
  const fromX = props.x - props.radius;
  const fromY = props.y;
  const pointX = center.x - 25;
  const pointY = Math.sqrt(Math.pow(props.radius, 2) - Math.pow((pointX - center.x), 2)) + center.y;
  return (
    <g>
      <circle
        cx={props.x}
        cy={props.y}
        r={props.radius}
        fill="transparent"
        stroke="#333"
      />
      <circle
        cx={props.x}
        cy={props.y}
        r={3}
        fill="red"
      />
      <circle
        cx={fromX}
        cy={fromY}
        r={3}
        fill="blue"
      />
      <circle
        cx={pointX}
        cy={pointY}
        r={3}
        fill="green"
      />
    </g>
  );
};
