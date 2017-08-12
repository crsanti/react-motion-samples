import * as React from 'react';
import { Motion, spring, presets, PlainStyle, OpaqueConfig, SpringHelperConfig } from 'react-motion';
import './App.scss';

interface CounterStyles extends PlainStyle {
  x: number;
}

const customConfig: SpringHelperConfig = {
  stiffness: 170,
  damping: 130,
};

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100, presets.gentle) }}>
          {renderChild('Gentle', presets.gentle)}
        </Motion>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100, presets.noWobble) }}>
          {renderChild('NoWobble', presets.noWobble)}
        </Motion>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100, presets.stiff) }}>
          {renderChild('Stiff', presets.stiff)}
        </Motion>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100, presets.wobbly) }}>
          {renderChild('Wobbly', presets.wobbly)}
        </Motion>
        <Motion defaultStyle={{ x: 0 }} style={{ x: spring(100, customConfig) }}>
          {renderChild('Custom', customConfig)}
        </Motion>
      </div>
    );
  }
}

const renderChild = (text: string, config: OpaqueConfig | SpringHelperConfig) =>
  (value: CounterStyles) => (
    <div className="counter">
      <span className="label">{text}: </span>
      <span className="text">{value.x}</span>
      <div>{JSON.stringify(config)}</div>
    </div>
  );
