import React, { useState } from "react";
import bgLogin from "./background_login.png";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "jdoe@ymail.com" && password === "demo") {
      setError("");
      window.location.href = "/";
    } else {
      setError("Adresse mail ou mot de passe incorrect.");
    }
  };
  return (
    <div className='container container-login'>
      <main className='main-login'>
        <div className='left-side'>
          <img className='illustration' src={bgLogin} alt='Illustration' />
        </div>
        <div className='right-side'>
          <Link to={"/"}>
            <img className='logo-login' src={Logo} alt='logo' />
          </Link>
          <div className='form-container'>
            <h2>S&apos;inscrire</h2>
            <form onSubmit={handleLogin}>
              <div className='input-group'>
                <label>
                  Nom
                  <input
                    type='nom'
                    placeholder='Jane DOE'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
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
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className='btn-login'>
                <button type='submit'>S&apos;inscrire</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
