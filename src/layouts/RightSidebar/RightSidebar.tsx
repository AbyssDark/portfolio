import React from 'react';
import { Link } from 'react-router-dom';
import './rightSidebar.scss';

const RightSideBar = () => (
  <div className='right'>
    <main className='right__main'>
      <div><Link to='/contact' className='right__email'>dominhthinh1711@hotmail.com</Link></div>
      <div className='right__line' />
    </main>
  </div>
);

export default RightSideBar;