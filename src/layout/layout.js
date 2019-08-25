import React, { useReducer, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Metadata from '../queries/use-sitemetadata';
import Header from './header';
import Footer from './footer';
import '../styles/main.scss';

const Layout = ({ children, location }) => {
   const { title, description } = Metadata();

   return (
      <>
         <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
         </Helmet>
         <div className="page-wrap">
            <Header location={location.pathname} />
            <main>{children}</main>
            <Footer />
         </div>
      </>
   );
};

export default Layout;
