import React from 'react';
require('aframe');

import Planet from './planet';
import planets from './planets';

class AFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentWillMount() {
    const timeScale = 1000 * 60 * 60 * 24;
    setInterval(() => this.setState({
      time: this.state.time + 1,
      scaledTime: this.state.time * timeScale
    }));
  }

  render() {
    const light = {
      distance: 20,
      intensity: 0.7,
      decay: 2
    };

    const sun = {
      name: 'sun',
      distance: 0,
      diameter: 1391400/20,
      year: 1,
      day: 25
    }


    return (
      <a-scene>
        <a-sphere
          position="0 0 0"
          rotation="0 0 0"
          radius={sun.diameter / 10000}
          src={`img/sun.jpg`}
          light="type: point; intensity: 0.8; distance: 2800; decay: 1.15;"
          shader="flat">
          <a-animation attribute="rotation"
             dur="600000"
             fill="forwards"
             to="0 360 0"
             easing="linear"
             repeat="indefinite"></a-animation>
        </a-sphere>

        { planets.map((p) => <Planet key={p.name} planet={p} time={this.state.scaledTime} />) }

        <a-entity light="type: ambient; color: #222"></a-entity>

        <a-sky color="#666" src="img/stars.jpg">
          <a-animation attribute="rotation"
               dur={1200000}
               fill="forwards" easing="linear"
               from="0 0 0" to="0 -360 0"
               repeat="indefinite"></a-animation>
        </a-sky>

        <a-camera position="0 -1.6 50">
          <a-cursor color="#666"></a-cursor>
        </a-camera>
      </a-scene>
    );
  }
}

export default (AFrame);
