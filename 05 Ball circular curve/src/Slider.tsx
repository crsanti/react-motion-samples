import * as React from 'react';
import './Slider.scss';

interface Props {
  min: number;
  max: number;
  value: number;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Slider: React.StatelessComponent<Props> = (props) => {
  return (
    <div className="row">
      <div className="col-md-10 col-xs-12">
        <input
          type="range"
          className="App-slider"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-2">
        <input type="text" className="form-control" value={props.value} onChange={props.onChange} />
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';
