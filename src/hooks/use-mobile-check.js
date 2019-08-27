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
      console.log('resize on');
      window.addEventListener('resize', listener, true);
      return () => {
         console.log('resize off');
         window.removeEventListener('resize', listener, true);
      };
   }, []);

   return isMobile;
};

export default useMobileCheck;
