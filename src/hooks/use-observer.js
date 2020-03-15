import { useState, useRef, useEffect } from 'react';

const useObserver = options => {
   const [observerEntry, setEntry] = useState({});
   const elRef = useRef();

   useEffect(() => {
      const observer = new IntersectionObserver(
         entries => setEntry(entries[0]),
         options
      );
      observer.observe(elRef.current);
      return () => observer.disconnect();
   }, []);
   return [observerEntry, elRef];
};

export default useObserver;
