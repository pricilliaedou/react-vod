import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Header from "../Header";
import Footer from "../Footer";
import barre from "../../assets/barre.png";
import nuage from "../../assets/nuage.png";
import rs from "../../assets/rs.webp";
import cerveau from "../../assets/cerveau.webp";
import cyberharcelement from "../../assets/cyberharcelement.webp";
import ecran from "../../assets/ecran.webp";
import glossaire from "../../assets/glossaire.webp";
import jeuxVideos from "../../assets/jeux-videos.webp";
import information from "../../assets/information.webp";
import solidtude from "../../assets/solitude.webp";
import prevention from "../../assets/prevention.webp";
import iconeEtoile from "../../assets/iconeEtoileBulles.svg";
import background from "../../assets/background.png";
import "./style.scss";
import Navbar from "../Navbar";

const Home = () => (
  <div className='container' style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <main>
      <div className='main-accueil'>
        <Navbar />
        <div className='main-accueil-elements'>
          <nav className='sidebar-nav'>
            <Link to='/' className='accueil'>
              Accueil
            </Link>
            <Link to='/Videos' className='videos'>
              Vidéos
            </Link>
            <Link to='/Temoignages' className='temoignages'>
              Témoignages
            </Link>
            <Link to='/Contact' className='contact'>
              Contact
            </Link>
            <div className='barre'>
              <img src={barre} alt='barre' />
            </div>
            <div className='nuage1'>
              <img src={nuage} alt='nuage' />
            </div>
            <div className='nuage2'>
              <img src={nuage} alt='nuage' />
            </div>
            <div className='nuage3'>
              <img src={nuage} alt='nuage' />
            </div>
            <div className='heart'>
              <img src={iconeEtoile} alt='coeur' />
            </div>
          </nav>
          <Carousel fade controls={true} indicators={true} interval={null}>
            {/* <!-- First video --> */}
            <Carousel.Item>
              <iframe
                className='d-block w-100'
                // width='560'
                height='315'
                src='https://www.youtube.com/embed/k2QmcskSiCI?si=2u9M_gtm9q9ZhSej'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share '
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </Carousel.Item>

            {/* <!-- Second video --> */}
            <Carousel.Item>
              <iframe
                className='d-block w-100'
                // width='560'
                height='315'
                src='https://www.youtube.com/embed/dEPjpIc6WBg?si=LejqJyinf0uWcumh'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </Carousel.Item>

            {/* <!-- Third video --> */}
            <Carousel.Item>
              <iframe
                className='d-block w-100'
                // width='560'
                height='315'
                src='https://www.youtube.com/embed/awNMmXZLct8?si=fzhRWE9nX37iJVXu'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='categories'>
          <h2>S&apos;informer selon mes besoins</h2>
          <div className='bloc-categories'>
            <div className='categories-video'>
              <Link to={"/login"} className='bulle'>
                <img src={rs} alt='réseaux sociaux' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={ecran} alt='écran' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={information} alt='information' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={jeuxVideos} alt='jeux videos' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={prevention} alt='prevention' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={cerveau} alt='cerveau' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={solidtude} alt='solitude' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={cyberharcelement} alt='cyberharcelement' />
              </Link>
              <Link to={"/login"} className='bulle'>
                <img src={glossaire} alt='glossaire' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Home;
