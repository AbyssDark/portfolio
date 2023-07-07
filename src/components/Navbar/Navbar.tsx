import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';

const Navbar = () => (
  <nav className='navbar'>
    <div className='navbar__left'>
      <Link to='/' className='navbar__link'>
 
        <svg xmlns="http://www.w3.org/2000/svg"           width='100'
          height='100' fill="none" viewBox="0 0 168 168" id="T"><path stroke="#d8a353" d="M96.1946 58.3125H95.875V58.6575L72.125 93.293V58.8125V58.3125H71.8054L47.0112 37.75H120.989L96.1946 58.3125ZM72.125 95.0612L95.875 60.4258V94.7513L72.125 129.387V95.0612ZM72.5741 130.5L95.875 96.5195V130.5H72.5741ZM46.125 38.3142L70.2388 58.3125H46.125V38.3142ZM97.7612 58.3125L121.875 38.3142V58.3125H97.7612Z" className="colorStroke000000 svgStroke"></path></svg>

      </Link>
    </div>
    <div className='navbar__right'>
      <ul className='navbar__list'>
        <li className='navbar__items'>
          <HashLink to='/#about' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>01.</span>
            About
          </HashLink>
        </li>
        <li className='navbar__items'>
          <HashLink to='/#projects' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>02.</span>
            Projects
          </HashLink>
        </li>
        <li className='navbar__items'>
          <NavLink to='/contact' className='navbar__itemsLink'>
            <span className='navbar__itemsLinkNumeric'>03.</span>
            Contact
          </NavLink>
        </li>
      </ul>
      <a
        href='https://drive.google.com/file/d/1SArkoqiFxn9qevyzhdjTVBb6oJnRb6F_/view?usp=sharing'
        target='_blank'
        rel='noreferrer'
        className='navbar__button'
      >
        Resume
      </a>
    </div>
  </nav>
);

export default Navbar;
