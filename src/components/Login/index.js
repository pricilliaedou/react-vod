import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgLogin from './background_login.png';
import Logo from '../../assets/logo.png';
import './style.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'jdoe@ymail.com' && password === 'demo') {
      setError('');
      // Redirection vers une autre page, ici un composant React utilisant react-router
      window.location.href = '/profil';
    } else {
      setError('Adresse mail ou mot de passe incorrect.');
    }
  };
  return (
    <div className='container container-login'>
      <main className='main-login'>
        <div className='left-side'>
          <img className='illustration' src={bgLogin} alt='Illustration' />
        </div>
        <div className='right-side'>
          <img className='logo-login' src={Logo} alt='logo' />
          <div className='form-container'>
            <h2>Se connecter</h2>
            <form onSubmit={handleLogin}>
              <div className='input-group'>
                <label>
                  Adresse email
                  <input
                    type='email'
                    placeholder='adresseemail@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className='input-group'>
                <label>
                  Mot de passe
                  <input
                    type='password'
                    placeholder='Mot de passe'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className='checkbox-group'>
                <label htmlFor='rememberMe'>
                  <input type='checkbox' id='rememberMe' /> Se souvenir de moi
                </label>
                <a href='/forgot-password'>Mot de passe oublié</a>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className='btn-login'>
                <button type='submit'>Je me connecte</button>
              </div>
            </form>
            <div className='register-link'>
              <Link to={'/'}>
                <span>Vous êtes nouveau ?</span> S&apos;inscrire
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
