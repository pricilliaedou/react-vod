import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page from './components/Page';
import Home from './components/Home';
import Videos from './components/Videos';
import Temoignages from './components/Temoignages';
import Contact from './components/Contact';
import Login from './components/Login';
import Profil from './components/Profil';
import Association from './components/Association';
import Error404 from './components/Error404';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route
        path='/videos'
        element={
          <Page>
            <Videos />
          </Page>
        }
      />
      <Route
        path='/cyberharcelement'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/kQhJmErUUlM?si=mDfKWR5iZ6e2pYbK' />
          </Page>
        }
      />
      <Route
        path='/reseaux-sociaux'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/vms2ShHOeKc?si=aqq27D9ukmTEudrs' />
          </Page>
        }
      />
      <Route
        path='/jeux-videos'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/o4h6rs4IUtU?si=pH-1L6LVHdDdJ91J' />
          </Page>
        }
      />
      <Route
        path='/contenu-adultes'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/AzeJdWpXbwc?si=_FUuKS99LYyRaWA2' />
          </Page>
        }
      />
      <Route
        path='/controle-parental'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/XQBJ8fqQyzc?si=hSrG-orezVbQFt5w ' />
          </Page>
        }
      />
      <Route
        path='/impact-addiction'
        element={
          <Page>
            <Videos url='https://www.youtube.com/embed/IeqgF8_POJA?si=oh5LrXEaacSlnzR0' />
          </Page>
        }
      />
      <Route
        path='/temoignages'
        element={
          <Page>
            <Temoignages />
          </Page>
        }
      />

      <Route
        path='/contact'
        element={
          <Page>
            <Contact />
          </Page>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='/profil' element={<Profil />} />
      <Route
        path='/notre-histoire'
        element={
          <Page>
            <Association />
          </Page>
        }
      />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </Router>
);

export default RoutesConfig;
