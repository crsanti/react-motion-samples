import * as React from 'react';

interface Props {
  width: number;
  height: number;
}

export const Grid: React.StatelessComponent<Props> = (props) => {
  const iWidth = Math.round(props.width);
  const iHeight = Math.round(props.height);
  const verticalLength = iWidth;
  const horizontalLength = iHeight;
  console.log(verticalLength, horizontalLength);
  return (
    <g>
      {Array.from({ length: verticalLength }, (_, i) => {
        const step = (i + 1) * 10;
        return (
          <path key={`a${i}`} className="ruler" d={`M ${step},0 L ${step},${verticalLength}`} />
        );
      })}
      {Array.from({ length: horizontalLength }, (_, i) => {
        const step = (i + 1) * 10;
        return (
          <path key={`a${i}`} className="ruler" d={`M 0,${step} L ${horizontalLength},${step}`} />
        );
      })}
    </g>
  );
};

Grid.displayName = 'Grid';
