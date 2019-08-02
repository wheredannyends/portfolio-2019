import React from 'react';
import { Link } from 'gatsby';

const App = () => {
   return (
      <section className="home">
         <h1 className="home__title">
            Hi! My name is Danny Burton. I'm a Front End Developer.
         </h1>
         <div>
            <Link to="/projects" className="home__button button button--alt">
               Contact Me
            </Link>
            <Link to="/projects" className="home__button button">
               View Work
            </Link>
         </div>
      </section>
   );
};

export default App;
