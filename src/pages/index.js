import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { Back, TimelineLite } from 'gsap';
let TL = new TimelineLite();

const App = () => {
   let home = useRef(null);
   let titleRef1 = useRef(null);
   let titleRef2 = useRef(null);
   let bodyRef1 = useRef(null);
   let bodyRef2 = useRef(null);
   let buttonsRef = useRef(null);

   useEffect(() => {
      TL.to(home, 0, { css: { visibility: 'visible' } })
         .from(titleRef1, 1, {
            opacity: 0,
            y: 60,
            ease: Back.easeOut,
         })
         .from(
            titleRef2,
            1,
            {
               opacity: 0,
               y: 60,
               ease: Back.easeOut,
            },
            '-=0.8'
         )
         .from(
            bodyRef1,
            1,
            {
               opacity: 0,
               y: 40,
               ease: Back.easeOut,
            },
            '-=0.8'
         )
         .from(
            bodyRef2,
            1,
            {
               opacity: 0,
               y: 40,
               ease: Back.easeOut,
            },
            '-=0.8'
         )
         .from(
            buttonsRef,
            1,
            {
               opacity: 0,
               y: 40,
               ease: Back.easeOut,
            },
            '-=0.6'
         );
      return () => {
         TL.kill();
      };
   }, []);

   // useEffect(() => {
   //    if () {
   //       window.addEventListener('mousemove', setImagePosition, true);
   //       return () => {
   //          window.removeEventListener('mousemove', setImagePosition, true);
   //       };
   //    }
   // }, []);

   return (
      <section className="home" ref={el => (home = el)}>
         <h1 className="home__title">
            <span ref={el => (titleRef1 = el)}>
               Hi. My name is Danny Burton.{' '}
            </span>
            <span ref={el => (titleRef2 = el)}>I'm a Front End Developer.</span>
         </h1>
         <p className="home__body">
            <span ref={el => (bodyRef1 = el)}>
               I develop user interfaces using web technologies.{' '}
            </span>
            <span ref={el => (bodyRef2 = el)}>
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
