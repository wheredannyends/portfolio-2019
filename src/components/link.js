import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
// import Transitions from '../utilities/transitions';

const Transitions = {
   duration: 2,
   '/': {
      entry: () => {
         TweenLite.from('.ind', 1, { opacity: 0 });
      },
      exit: () => {
         TweenLite.to('.ind', 1, { opacity: 0 });
      },
   },
   '/projects': {
      entry: () => {
         TweenLite.from('.proj', 1, { opacity: 0 });
      },
      exit: () => {
         TweenLite.to('.proj', 1, { opacity: 0 });
      },
   },
};

const About = ({ from = 'default', to, children }) => {
   return (
      <TransitionLink
         to={to}
         exit={{
            trigger: () => {
               Transitions[from].exit();
            },
            length: Transitions.duration,
         }}
         entry={{
            trigger: () => {
               Transitions[to].entry();
            },
            delay: Transitions.duration,
         }}
      >
         {children}
      </TransitionLink>
   );
};

export default About;
