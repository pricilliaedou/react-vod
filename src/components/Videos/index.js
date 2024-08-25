import React from 'react';
import Navbar from '../Navbar';
import Categories from '../Categories';
import ImgVideo from '../../assets/img-video.png';
import './style.scss';

const Videos = ({ url }) => (
  <div className='main-videos'>
    <Navbar />
    <div className='main-elements'>
      <Categories />
      {!url ? (
        <div className='img-video'>
          <img src={ImgVideo} alt='img-video' />
        </div>
      ) : (
        <div className='video-player'>
          <iframe
            width='560'
            height='315'
            src={url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  </div>
);
export default Videos;
