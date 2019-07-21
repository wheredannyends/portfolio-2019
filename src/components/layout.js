import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/main.scss';

const Layout = ({ children }) => {
   return (
      <>
         <Helmet>
            <html lang="en" />
            <title>Danny Burton | Web Developer</title>
            <meta
               name="description"
               content="Portfolio for Vancouver-based web developer Danny Burton"
            />
            <link rel="stylesheet" href="https://use.typekit.net/qjk7wuk.css" />
         </Helmet>
         <main>{children}</main>
      </>
   );
};

export default Layout;
