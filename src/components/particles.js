import React from 'react';
import ParticleField from 'react-particles-webgl';

const config = {
   showCube: false,
   dimension: '3D',
   velocity: 0.3,
   boundaryType: 'passthru',
   antialias: true,
   direction: {
      xMin: 0.3,
      xMax: -0.6,
      yMin: 1,
      yMax: 1,
      zMin: 0.3,
      zMax: -0.6,
   },
   lines: {
      visible: false,
   },
   particles: {
      colorMode: 'solid',
      color: '#ffffff',
      transparency: 0.1,
      shape: 'circle',
      boundingBox: 'canvas',
      count: 200,
      minSize: 20,
      maxSize: 80,
      visible: true,
   },
   cameraControls: {
      enabled: false,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true,
   },
};

export default () => <ParticleField config={config} />;
