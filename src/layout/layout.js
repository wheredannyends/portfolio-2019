import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet';
import { Context, initialState, reducer } from './store';
import Metadata from '../utilities/use-sitemetadata';
import Header from './header';
import Background from './background';
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
         {/* <Background /> */}
         <Header />
         <main className="wrapper">{children}</main>
      </Context.Provider>
   );
};

export default Layout;
