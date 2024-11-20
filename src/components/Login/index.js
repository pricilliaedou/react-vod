import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import bgLogin from "./background_login.png";
import Logo from "../../assets/logo.png";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/public/login", {
        username: email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/");
      } else {
        setError("Connexion échouée. Veuillez réessayer.");
      }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError("Adresse mail ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
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
              {error && <p style={{ color: "red" }}>{error}</p>}
              <div className='btn-login'>
                <button type='submit'>Je me connecte</button>
              </div>
            </form>
            <div className='register-link'>
              <Link to={"/signup"}>
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
