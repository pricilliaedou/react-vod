import React from 'react';
import { Link } from 'react-router-dom';
import plmteam from '../assets/plmteam.png';
import EducationNationale from '../assets/education-nationale.png';
import SecretariatEnfance from '../assets/secretariat-enfance.png';
import Ue from '../assets/ue.png';
import FondationHopitaux from '../assets/fondation-hopitaux.png';

const Footer = () => (
  <footer>
    <div className='footer-details'>
      <div>
        <div className='logo-footer'>
          <div className='logo-footer-left'>
            <Link target='blank' to='https://www.education.gouv.fr/'>
              <img
                src={EducationNationale}
                alt='Ministère education nationale'
              />
            </Link>
            <Link
              to='https://solidarites.gouv.fr/protection-de-lenfance-1'
              target='blank'
            >
              <img src={SecretariatEnfance} alt='Secretariat enfance' />
            </Link>
          </div>
          <div className='logo-footer-right'>
            <Link
              to='https://ec.europa.eu/regional_policy/information-sources/logo-download-center_en'
              target='blank'
            >
              <img src={Ue} alt='logo ue' />
            </Link>
            <Link
              to='https://don.fondationhopitaux.fr/?affectations=fondationhop%2F%3Futm_campaign%3Dfilrougenomentite&utm_source=google&utm_medium=cpc&utm_outil=motscles&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnMdF06PWXgZqy3lHocIfuKle4XGfqeqiDaKX0TkLCeCEMypOlr9hpUaAvpFEALw_wcB'
              target='blank'
            >
              <img src={FondationHopitaux} alt='logo Fondation des hôpitaux' />
            </Link>
          </div>
        </div>
      </div>
      <div className='nous'>
        <Link to='/notre-histoire'>Découvrir l&apos;association </Link>
        <Link
          to='https://linktr.ee/plmteam?utm_source=linktree_admin_share'
          target='blank'
        >
          <img src={plmteam} alt='liens github' />
        </Link>
      </div>
      <div className='contacttest'>
        <Link to={'/'}>Demander une intervention</Link>
        <Link to={'/contact'} className='contacter'>
          Nous contacter
        </Link>
        <Link to={'/'}>Espace presse</Link>
        <Link to={'/'} className='newsletter'>
          Recevoir la newsletter
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
