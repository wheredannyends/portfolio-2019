import React from 'react';
import { Link } from 'gatsby';

const Header = ({ location }) => {
   console.log(location);
   return (
      <header className="header">
         <Link to="/">
            <svg
               className="header__logo"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 420 420"
            >
               <path d="M210,0C94,0,0,94,0,210a210.82,210.82,0,0,0,4.57,43.7l9.11-5.5A200.19,200.19,0,0,1,10,210C10,99.72,99.72,10,210,10S410,99.72,410,210a200.68,200.68,0,0,1-2.38,30.86l9.23,5.57A211.28,211.28,0,0,0,420,210C420,94,326,0,210,0Z" />
               <path d="M95.7,241.52l37-62.58,22.9,19.77,27-23.33,27,23.33,27-23.33,27,23.33,24.13-20.83,49.6,83.92L390,230.21l8.34,5A190.88,190.88,0,0,0,400,210c0-104.77-85.23-190-190-190S20,105.23,20,210a190.42,190.42,0,0,0,2.82,32.68L60,220.21ZM163.91,126.4h93.34L284,171.48l-20.27,17.37-27-23.35-27,23.35-27-23.35-27,23.43-19-16.38Z" />
               <path d="M390,241.88l-66.65,40.06-33.42-20.19-56.57,34.06-73.19-44.11-33.42,20.13-66.65-40L7,263.91C30.8,353.77,112.66,420,210,420c99.88,0,183.46-69.73,204.75-163.16Z" />
            </svg>
         </Link>
         <nav className="header__nav">
            <Link
               to="/work"
               className={`header__nav-link ${
                  location.indexOf('/work') !== -1
                     ? 'header__nav-link--active'
                     : ''
               }`}
            >
               Work
            </Link>
            <Link
               to="/about"
               className={`header__nav-link ${
                  location === '/about' ? 'header__nav-link--active' : ''
               }`}
            >
               About
            </Link>
            <Link
               to="/contact"
               className={`header__nav-link ${
                  location === '/contact' ? 'header__nav-link--active' : ''
               }`}
            >
               Contact
            </Link>
         </nav>
      </header>
   );
};

export default Header;
