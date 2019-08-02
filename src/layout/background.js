import React from 'react';
import Particles from 'react-particles-js';

const Background = () => {
   const config = {
      particles: {
         number: {
            value: 300,
         },
         color: {
            value: ['#AB84C8', '#5CD2B9', '#6EC1FF'],
         },
         shape: {
            type: 'circle',
         },
         opacity: {
            value: 0.3,
            random: true,
            anim: {
               enable: false,
            },
         },
         size: {
            value: 8,
            random: true,
         },
         line_linked: {
            enable: false,
         },
         move: {
            enable: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
         },
      },
      retina_detect: true,
   };

   return <Particles params={config} className="background" />;
};

export default Background;
