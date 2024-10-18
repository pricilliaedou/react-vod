import React, { useState } from "react";
import Navbar from "../Navbar";
import ImgVideo from "../../assets/img-video.png";
import "./style.scss";

const Videos = ({ url }) => {
  const [activeAgeRange, setActiveAgeRange] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // Définit les tranches d'âge et les catégories correspondantes
  const ageRanges = {
    "2-10": ["Impact Addiction", "Jeux Vidéos"],
    "11-18": [
      "Impact Addiction",
      "Jeux Vidéos",
      "Cyberharcelement",
      "Réseaux Sociaux",
      "Contenu Adultes",
    ],
    Adultes: [
      "Impact Addiction",
      "Jeux Vidéos",
      "Cyberharcelement",
      "Réseaux Sociaux",
      "Contenu Adultes",
      "Controle Parental",
    ],
  };

  // Liste des vidéos par catégorie (simplifiée pour l'exemple)
  const videos = {
    "Impact Addiction": [
      "https://www.youtube.com/embed/IeqgF8_POJA?si=oh5LrXEaacSlnzR0",
    ],
    "Jeux Vidéos": [
      "https://www.youtube.com/embed/o4h6rs4IUtU?si=pH-1L6LVHdDdJ91J",
    ],
    Cyberharcelement: [
      "https://www.youtube.com/embed/kQhJmErUUlM?si=mDfKWR5iZ6e2pYbK",
    ],
    "Reseaux Sociaux": [
      "https://www.youtube.com/embed/vms2ShHOeKc?si=aqq27D9ukmTEudrs",
    ],
    "Contenu Adultes": [
      "https://www.youtube.com/embed/AzeJdWpXbwc?si=_FUuKS99LYyRaWA2",
    ],
    "Controle Parental": [
      "https://www.youtube.com/embed/XQBJ8fqQyzc?si=hSrG-orezVbQFt5w",
    ],
  };

  return (
    <div className='main-videos'>
      <Navbar />
      <div className='main-elements'>
        <div className='left-content'>
          {/* Sélection des tranches d'âge */}
          <div className='age-selection'>
            {Object.keys(ageRanges).map((range) => (
              <div key={range} className='age-range-block'>
                <button onClick={() => setActiveAgeRange(range)}>
                  {range}
                </button>

                {/* Affichage des catégories après la sélection d'une tranche d'âge */}
                {activeAgeRange === range && (
                  <div className='category-selection'>
                    {ageRanges[range].map((cat) => (
                      <button key={cat} onClick={() => setActiveCategory(cat)}>
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Affichage des vidéos après la sélection d'une catégorie */}
        {activeCategory && videos[activeCategory] && (
          <div className='video-list'>
            {videos[activeCategory].map((videoUrl, index) => (
              <div key={index} className='video-player'>
                <iframe
                  width='560'
                  height='315'
                  src={videoUrl}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}

        {/* Image ou vidéo */}
        {!activeCategory && !url && (
          <div className='img-video'>
            <img src={ImgVideo} alt='img-video' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;

// import React from 'react';
// import Navbar from '../Navbar';
// import Categories from '../Categories';
// import ImgVideo from '../../assets/img-video.png';
// import './style.scss';

// const Videos = ({ url }) => (
//   <div className='main-videos'>
//     <Navbar />
//     <div className='main-elements'>
//       <Categories />
//       {!url ? (
//         <div className='img-video'>
//           <img src={ImgVideo} alt='img-video' />
//         </div>
//       ) : (
//         <div className='video-player'>
//           <iframe
//             width='560'
//             height='315'
//             src={url}
//             title='YouTube video player'
//             frameBorder='0'
//             allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//             referrerPolicy='strict-origin-when-cross-origin'
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//     </div>
//   </div>
// );
// export default Videos;
