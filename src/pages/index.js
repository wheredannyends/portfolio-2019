import React from 'react';
import { Link } from 'gatsby';

const App = () => {
   return (
      <section className="home">
         <h1 className="home__title">
            <span>Hi. My name is Danny Burton. </span>
            <span>I'm a Front End Developer.</span>
         </h1>
         <p className="home__body">
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
         <div className="home__button-area">
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
