import React, { useRef, useEffect } from 'react';
import { TimelineLite, Back, Power3 } from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';

const App = () => {
  let [homeRef, titleRef, bodyRef, buttonsRef] = useRef(null);

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

  const anim = {
    exit: {
      trigger: ({ node }) =>
        TweenLite.to(node, 1.5, {
          opacity: 0,
          y: 50,
          ease: Back.easeIn,
        }),
      length: 1.5,
    },
    entry: {
      trigger: ({ node }) =>
        TweenLite.from(node, 1.5, {
          opacity: 0,
        }),
      delay: 1.5,
    },
  };

  return (
    <section className="home" ref={el => (homeRef = el)}>
      <h1 className="home__title" ref={el => (titleRef = el)}>
        <span>Hi. My name is Danny Burton. </span>
        <span>I'm a Front End Developer.</span>
      </h1>
      <p className="home__body" ref={el => (bodyRef = el)}>
        <span>I develop user interfaces using web technologies. </span>
        <span>
          Currently a Front End Developer at{' '}
          <a
            href="//www.pixelunion.net"
            target="_blank"
            className="home__body-link"
          >
            Pixel Union
               </a>
               .
            </span>
      </p>
      <div className="home__button-area" ref={el => (buttonsRef = el)}>
        <TransitionLink
          to="/contact"
          exit={anim.exit}
          entry={anim.entry}
          className="home__button button button--alt"
        >
          Contact Me
            </TransitionLink>
        <TransitionLink
          to="/projects"
          exit={anim.exit}
          entry={anim.entry}
          className="home__button button"
        >
          View Projects
            </TransitionLink>
      </div>
    </section>
  );
};

export default App;
