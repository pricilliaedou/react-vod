import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import plmTeam from "../../assets/plmteam.png";
import "./style.scss";

const Contact = () => {
  // États pour les champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Fonction de validation
  const validate = () => {
    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins deux lettres.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "L'adresse email est invalide.";
    }
    if (message.trim().length < 20) {
      newErrors.message = "Le message doit contenir au moins 20 caractères.";
    }
    setErrors(newErrors);

    // Retourne vrai s'il n'y a pas d'erreurs
    return Object.keys(newErrors).length === 0;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className='main-contact'>
      <Navbar />
      <div className='main-contact-h2'>
        <h2>Besoins de réponses?</h2>
        <h2>Contactez nous !</h2>
      </div>

      <div className='main-contact-details'>
        <div className='main-contact-left'>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                placeholder='Nom'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div>
              <input type='text' placeholder='Prenom' />
            </div>
            <div>
              <select className='select'>
                <option value=''>Vous êtes</option>
                <option value='particulier'>Particulier</option>
                <option value='professionnel'>Professionnel</option>
              </select>
            </div>
            <div>
              <input
                type='email'
                placeholder='E-mail*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
              <input type='text' placeholder='Sujet' />
            </div>
            <div>
              <textarea
                id='message'
                name='message'
                placeholder='Message*'
                rows='3'
                cols='50'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p style={{ color: "red" }}>{errors.message}</p>
              )}
            </div>
            <button type='submit'>Envoyer</button>
          </form>
          {/* Afficher un message de confirmation ou d'erreur */}
          {formSubmitted && (
            <p style={{ color: "green" }}>Formulaire soumis avec succès !</p>
          )}
          {!formSubmitted && Object.keys(errors).length > 0 && (
            <p style={{ color: "red" }}>Le formulaire contient des erreurs.</p>
          )}
        </div>
        <div className='main-contact-right'>
          <div className='main-contact-right-details'>
            <p>01 85 96 78 41</p>
            <p>40 rue Fictive Paris 75003</p>
            <Link
              to='https://linktr.ee/plmteam?utm_source=linktree_admin_share'
              target='blank'
            >
              <img src={plmTeam} alt='liens github' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
