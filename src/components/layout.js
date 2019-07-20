import React from 'react';
import { Helmet } from 'react-helmet';
import Particles from './particles';
import Metadata from '../hooks/use-sitemetadata';
import '../style/main.scss';

const Layout = ({ children }) => {
   const { title, description } = Metadata();
   return (
      <>
         <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <link rel="stylesheet" href="https://use.typekit.net/qjk7wuk.css" />
         </Helmet>
         <main>{children}</main>
      </>
   );
};

export default Layout;
