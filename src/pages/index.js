import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Back, TimelineLite } from 'gsap';
import SplitText from '../vendor/splittext';
let TL = new TimelineLite();

const App = () => {
   let home = useRef(null);
   let titleRef = useRef(null);
   let bodyRef = useRef(null);
   let buttonsRef = useRef(null);

   let titleSplit = new SplitText(titleRef, { type: 'chars' });
   let bodySplit = new SplitText(bodyRef, { type: 'words' });

   useEffect(() => {
      TL.to(home, 0, { css: { visibility: 'visible' } })
         .staggerFrom(
            titleSplit.chars,
            0.8,
            {
               opacity: 0,
               y: 40,
               rotationX: 90,
               ease: Back.easeOut,
            },
            0.05
         )
         .staggerFrom(
            bodySplit.words,
            0.8,
            {
               opacity: 0,
               y: 10,
               rotationX: 90,
               ease: Back.easeOut,
            },
            0.1
         )
         .from(buttonsRef, 1.6, {
            opacity: 0,
            y: 30,
            ease: Back.easeOut,
         });
      return () => {
         TL.kill();
      };
   }, []);

   return (
      <section className="home" ref={el => (home = el)}>
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
