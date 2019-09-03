import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Back, TimelineLite } from 'gsap';

const App = () => {
   let homeRef = useRef(null);
   let titleRef = useRef(null);
   let bodyRef = useRef(null);
   let buttonsRef = useRef(null);

   useEffect(() => {
      let TL = new TimelineLite();

      const animation = {
         settings: [
            2,
            {
               opacity: 0,
               y: 50,
               scale: 0.9,
               ease: Back.easeOut,
            },
         ],
         delay: '-=1.8',
      };

      TL.to(homeRef, 0, { css: { visibility: 'visible' } })
         .from(titleRef, ...animation.settings)
         .from(bodyRef, ...animation.settings, animation.delay)
         .from(buttonsRef, ...animation.settings, animation.delay);
      return () => {
         TL.kill();
      };
   }, []);

   return (
      <section className="home" ref={el => (homeRef = el)}>
         <h1 className="home__title" ref={el => (titleRef = el)}>
            <span>Hi. My name is Danny Burton. </span>
            <span>I'm a Front End Developer.</span>
         </h1>
         <p className="home__body" ref={el => (bodyRef = el)}>
            <span>I develop user interfaces using web technologies. </span>
            <span>
               Currently a Senior Front-End Developer at{' '}
               <a
                  href="//www.convertus.com"
                  target="_blank"
                  className="home__body-link"
               >
                  Convertus
               </a>
               .
            </span>
         </p>
         <div className="home__button-area" ref={el => (buttonsRef = el)}>
            <Link to="/contact" className="home__button button button--alt">
               Contact Me
            </Link>
            <Link to="/projects" className="home__button button">
               View Projects
            </Link>
         </div>
      </section>
   );
};

export default App;
