import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => (
  <div className='categories-all-pages'>
    <h3>Catégories</h3>
    <nav className='nav-categories'>
      <Link to='/cyberharcelement'>Cyberharcèlement</Link>
      <Link to='/reseaux-sociaux'>Réseaux Sociaux</Link>
      <Link to='/jeux-videos'>Jeux vidéos</Link>
      <Link to='/contenu-adultes'>Contenu adultes</Link>
      <Link to='/controle-parental'>Contrôle parental</Link>
      <Link to='/impact-addiction'>L&apos;impacte des addictions</Link>
    </nav>
  </div>
);
export default Categories;
