import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaCodepen } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="footer">
         <ul className="social">
            <li className="social__item">
               <a
                  href="//www.linkedin.com/in/wheredannyends/"
                  className="social__link"
                  target="_blank"
               >
                  <FaLinkedinIn className="social__icon"></FaLinkedinIn>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//github.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <FaGithub className="social__icon"></FaGithub>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//twitter.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <FaTwitter className="social__icon"></FaTwitter>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//codepen.io/wheredannyends/"
                  className="social__link"
                  target="_blank"
               >
                  <FaCodepen className="social__icon"></FaCodepen>
               </a>
            </li>
         </ul>
         <p className="footer__copyright">Something will go here</p>
      </footer>
   );
};

export default Footer;
