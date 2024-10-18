import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
// import Categories from "../Categories";
import imgVideo from "../../assets/img-video.png";
import "./style.scss";

const Temoignages = ({ url }) => (
  <main>
    <div className='main-videos'>
      <Navbar />
      <div className='main-elements'>
        <div className='categories-all-pages'>
          <h3>Par Catégories</h3>
          <nav className='nav-categories'>
            <Link to='/cyberharcelement'>Cyberharcèlement</Link>
            <Link to='/reseaux-sociaux'>Réseaux Sociaux</Link>
            <Link to='/jeux-videos'>Jeux vidéos</Link>
            <Link to='/contenu-adultes'>Contenu adultes</Link>
            <Link to='/controle-parental'>Contrôle parental</Link>
            <Link to='/impact-addiction'>L&apos;impact des addictions</Link>
          </nav>
        </div>
        <div>
          {!url ? (
            <div className='img-video'>
              <img src={imgVideo} alt='img-video' />
            </div>
          ) : (
            <div className='video-player'>
              <iframe
                width='560'
                height='315'
                src={url}
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  </main>
);
export default Temoignages;
