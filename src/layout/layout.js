import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { Context, initialState, reducer } from './store';
import Metadata from '../queries/use-sitemetadata';
import Header from './header';
import Footer from './footer';
import '../styles/main.scss';

const Layout = ({ children, location }) => {
   const { title, description } = Metadata();
   const [store, dispatch] = useReducer(reducer, initialState);

   return (
      <Context.Provider value={{ store, dispatch }}>
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
      </Context.Provider>
   );
};

export default Layout;
