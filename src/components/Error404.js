import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../assets/Error.png';

const Error404 = () => (
  <div className='wrapper'>
    <div className='details-page-erreur'>
      <div className='message-erreur'>
        <p>Oh non !</p>
        <p>Cette page est introuvable</p>
        <p>
          Accedez à notre page d&apos;accueil en cliquant{' '}
          <Link to='/'>ici</Link>
        </p>
      </div>
      <div className='image-erreur'>
        <img src={Error} alt=' canard page erreur' />
      </div>
    </div>
  </div>
);

export default Error404;
