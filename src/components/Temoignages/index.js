import React from 'react';
import Navbar from '../Navbar';
import Categories from '../Categories';
import imgVideo from '../../assets/img-video.png';
import './style.scss';

const Temoignages = ({ url }) => (
  <main>
    <div className='main-videos'>
      <Navbar />
      <div className='main-elements'>
        <Categories />
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
  </main>
);
export default Temoignages;
