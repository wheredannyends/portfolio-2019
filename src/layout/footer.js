import React from 'react';

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
                  <i className="social__icon fab fa-linkedin-in"></i>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//github.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <i className="social__icon fab fa-github"></i>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//twitter.com/wheredannyends"
                  className="social__link"
                  target="_blank"
               >
                  <i className="social__icon fab fa-twitter"></i>
               </a>
            </li>
            <li className="social__item">
               <a
                  href="//codepen.io/wheredannyends/"
                  className="social__link"
                  target="_blank"
               >
                  <i className="social__icon fab fa-codepen"></i>
               </a>
            </li>
         </ul>
         <p className="footer__copyright">Something will go here</p>
      </footer>
   );
};

export default Footer;
