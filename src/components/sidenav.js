import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = props => {
		return(
		 <ul className={`sideNav ${props.toggle}`}>
           <li>
             <NavLink exact to='/' activeClassName="active-sideNav-element">
               <i className="material-home-icon material-icons md-24 md-36">home</i>
                 Home
             </NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName="active-sideNav-element">
                <i className="material-face-icon material-icons md-24 md-36">face</i>
                  About
               </NavLink>
             </li>
             <li>
               <NavLink to='/projects' activeClassName="active-sideNav-element">
                 <i className="material-assignment-icon material-icons md-24 md-36">assignment</i>
                   Projects
                </NavLink>
             </li>
             <li>
               <NavLink to='/contact' activeClassName="active-sideNav-element">
                 <i className="material-email-icon material-icons md-24 md-36">email</i>
                   Contact
                </NavLink>
             </li>
         </ul>
		);
	}

export default SideNav;

