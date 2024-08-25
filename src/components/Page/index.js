import React from 'react';
import background from '../../assets/background.png';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => (
  <div className='container' style={{ backgroundImage: `url(${background})` }}>
    <Header />
    <main>{children} </main>
    <Footer />
  </div>
);
export default Page;
