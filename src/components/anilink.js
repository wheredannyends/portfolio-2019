import { navigate } from 'gatsby';

const AniLink = ({ location, to }) => {
   const handleClick = () => {
      console.log('lol');
   };

   return <a onClick={handleClick}>LOL</a>;
};
