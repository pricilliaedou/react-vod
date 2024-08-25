import React from 'react';
import { Link } from 'react-router-dom';
import profil from '../../assets/profil.svg';
import './style.scss';

const Profil = () => (
  <div className='profile-container'>
    <div className='sidebar'>
      <div className='profile-photo'>
        <img src={profil} alt='profil' className='photo' />
        <h3>Jane DOE</h3>
      </div>
      <nav className='sidebar-menu'>
        <Link to='/profil'>Profil</Link>
        <Link to='/'>Mot de passe</Link>
        <Link to='/'>Gérer mon compte</Link>
      </nav>
    </div>
    <div className='profile-content'>
      <div className='profile-content-first'>
        <h2>Mon profil</h2>
        <button>Modifier mon profil</button>
      </div>
      <form id='profileForm'>
        <div className='form-group'>
          <label htmlFor='fullName'>
            Nom complet
            <p>
              Cette information n&apos;est pas visible pour les autres
              utilisateurs
            </p>
            <input type='text' id='fullName' name='fullName' value='Jane Doe' />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='username'>
            Nom d&apos;utilisateur
            <input type='text' id='username' name='username' value='Janioe' />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Adresse Email
            <p>
              Cette information n&apos;est pas visible pour les autres
              utilisateurs
            </p>
            <input
              type='email'
              id='email'
              name='email'
              value='Jdoe@ymail.com'
            />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='location'>
            Localisation
            <input type='text' id='location' name='location' value='Lille' />
          </label>
        </div>
      </form>
    </div>
  </div>
);
export default Profil;
