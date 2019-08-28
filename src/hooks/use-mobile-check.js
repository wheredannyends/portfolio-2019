import { useState, useEffect } from 'react';

const useMobileCheck = () => {
   const [isMobile, setMobile] = useState(false);

   const listener = () => {
      setMobile(
         window.matchMedia('only screen and (min-width: 760px)').matches
            ? false
            : true
      );
   };

   useEffect(() => {
      listener();
      window.addEventListener('resize', listener, true);
      return () => {
         window.removeEventListener('resize', listener, true);
      };
   }, []);

   return isMobile;
};

export default useMobileCheck;
