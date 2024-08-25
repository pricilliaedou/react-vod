import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className='nav-pages'>
    <Link to='/' className='accueil'>
      Accueil
    </Link>
    <Link to='/videos' className='videos'>
      Vidéos
    </Link>
    <Link to='/temoignages' className='temoignages'>
      Témoignages
    </Link>
    <Link to='/contact' className='contact'>
      Contact
    </Link>
  </nav>
);
export default Navbar;
