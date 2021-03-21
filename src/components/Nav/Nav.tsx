import { constants } from 'os';
import {Button} from "react-bootstrap"
import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
// const icon =require ('./../../../assets/images/logo.png')

let icon='./../../../assets/images/logo.png'
import './Nav.scss'
import './../index.css'

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
        <div className="item">
          <img src={icon} width='140' height='110' />
          <p style={{color:"green",fontSize:'19px'}}> A Crop Diagnostic Tool</p>
        </div>
      <div className='container'>
	    <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >

        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
         <ul className='navbar-nav ml-auto'>
            <li className='text-center mt'>
              <Link to="/home"  className='nav-link' style={{color:"#fcfafa"}}>
               <strong style={{color:"green"}}><h2> <b>Home</b></h2> </strong>
              </Link>
            </li>
	    <li>&nbsp;</li>
	    <li>&nbsp;</li>
	    <li>&nbsp;</li>
	    <li>&nbsp;</li>
	    <li>&nbsp;</li>
            <li className='text-center mt'>
              <Link className='nav-link' to='/about' style={{fontSize:"50",color:"#fcfafa"}}>
              <strong style={{color:"black"}}><h2> <b> About</b> </h2> </strong>
              </Link>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className='text-center mt'>
              <Link to="/gallery" className='nav-link' style={{color:"#fcfafa"}}>
              <strong style={{color:"black"}}><h2> <b> Gallery</b></h2></strong>
              </Link>
            </li>
	    <li>&nbsp;</li>
 	    <li>&nbsp;</li>
 	    <li>&nbsp;</li>
 	    <li>&nbsp;</li>

	    <li className='text-center mt'>
              <Link to="/review" className='nav-link' style={{color:"#fcfafa"}}>
              <strong style={{color:"black"}}><h2>  <b> Review </b> </h2> </strong>
              </Link>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
	    <li className='text-center mt'>
              <Link to="/download" className='nav-link' style={{color:"#fcfafa"}}>
               <strong style={{color:"black"}}><h2> <b> Download App </b></h2> </strong>
              </Link>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>

	    <li className='w-100 text-center mt-1'>
		<Button  className="btn-outline-success" style={{backgroundColor:"green",borderColor:"green",borderStyle:"solid",borderRadius:10}}> <Link to="/login" style={{color:"green"}}><strong style={{color:"white"}}><h2><b>Login</b></h2> </strong></Link></Button>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className='w-100 text-center mt-1'>
                <Button  className="btn btn-outline-success" style={{borderRadius:10,backgroundColor:"white",borderColor:"green",borderStyle:"solid"}}> <Link to="/signup" style={{color:"white"}}><strong style={{color:"black"}}><h2><b>SignUp</b></h2> </strong></Link></Button>
      </li>
      


            </ul>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
