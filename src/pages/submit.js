import React, { useRef, useEffect } from 'react';
import { Back, TimelineLite } from 'gsap';

const Submit = () => {
   let [submitWrap, titleRef, bodyRef] = useRef(null);

   useEffect(() => {
      let TL = new TimelineLite();

      const animation = {
         settings: [
            2,
            {
               opacity: 0,
               y: 50,
               scale: 1.1,
               ease: Back.easeOut,
            },
         ],
         delay: '-=1.8',
      };

      TL.to(submitWrap, 0, { css: { visibility: 'visible' } })
         .from(titleRef, ...animation.settings)
         .from(bodyRef, ...animation.settings, animation.delay);
      return () => {
         TL.kill();
      };
   }, []);

   return (
      <div
         className="submit container container--sm"
         ref={el => (submitWrap = el)}
      >
         <h2 ref={el => (titleRef = el)}>Message received!</h2>
         <p className="submit__body-text" ref={el => (bodyRef = el)}>
            I'll get back to you as soon as I can.
         </p>
      </div>
   );
};

export default Submit;

