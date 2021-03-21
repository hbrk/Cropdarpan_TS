import React, { Fragment } from 'react';

//import Home from '../sections/Home/Home';
import Nav from './../Nav/Nav';
import Home from './../sections/Home/Home';
import Sections from './../sections/Sections';


const Layout = () => {
  return (
  <div>     
  <Nav />
  <Sections /> 
  </div>
        );
};

export default Layout;
