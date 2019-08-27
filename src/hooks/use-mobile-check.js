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
      console.log('onny');
      return () => {
         window.removeEventListener('resize', listener, true);
         console.log('offy');
      };
   }, []);

   return isMobile;
};

export default useMobileCheck;
