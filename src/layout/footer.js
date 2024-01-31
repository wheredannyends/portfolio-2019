import React, { useEffect, useRef } from 'react';
import {
   FaLinkedinIn,
   FaGithub,
   FaTwitter,
   FaCodepen,
   FaInstagram,
} from 'react-icons/fa';
import { TimelineLite, Power3 } from 'gsap';

const Footer = () => {
   let footerRef = useRef(null);

   useEffect(() => {
      let TL = new TimelineLite();

      TL.to(footerRef, 0, { css: { visibility: 'visible' } }).from(
         footerRef,
         3,
         {
            opacity: 0,
            y: 50,
            ease: Power3.easeOut,
         },
         1.5
      );

      return () => {
         TL.kill();
      };
   }, []);

   return (
      <footer className="footer" ref={el => (footerRef = el)}>
         <ul className="social">
            <li className="social__item">
               <a
                  href="https://www.linkedin.com/in/wheredannyends/"
                  className="social__link"
                  target="_blank"
               >
                  <FaLinkedinIn className="social__icon"></FaLinkedinIn>
               </a>
            </li>

            <li className="social__item">
               <a
                  href="https://github.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <FaGithub className="social__icon"></FaGithub>
               </a>
            </li>

            <li className="social__item">
               <a
                  href="https://instagram.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <FaInstagram className="social__icon"></FaInstagram>
               </a>
            </li>
         </ul>

         <p className="footer__copyright">
            Made with &hearts; by me using{' '}
            <a href="https://www.gatsbyjs.org/" target="_blank">
               GatsbyJS
            </a>
         </p>
      </footer>
   );
};

export default Footer;

