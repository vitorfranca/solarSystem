import React from 'react';
require('aframe');

const AU = 150000000; // 1 A.U. = 150 Million km

const SECOND = 1000, // milliseconds
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  MONTH = 30 * DAY,
  YEAR = 365 * DAY;

const Planet = ({ planet, time }) => {
  const scale = {
    distance: 50,
    size: 10000
  };
  const r = planet.distance * scale.distance;
  const angleYear = (time * Math.PI / YEAR / planet.year) % 2*Math.PI;
  const angleDay = (time / DAY / planet.day) % 360;

  const position = {
    x: r * Math.cos(angleYear),
    y: 0,
    z: r * Math.sin(angleYear),
  };

  return (
    <a-sphere
      position={`${position.x} ${position.y} ${position.z}`}
      rotation={`0 ${angleDay} 0`}
      radius={planet.diameter / scale.size}
      src={`img/${planet.name}.jpg`}>

    </a-sphere>
  );
}

export default Planet;
