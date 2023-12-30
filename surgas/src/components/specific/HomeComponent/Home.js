import React from 'react';
import { Container, Row, Col, Carousel, Card, CardDeck } from 'react-bootstrap';
import JumbotronComponent from './JumbotronComponent';
import HotProductsCarrousel from './HotProductsCarrousel';
import TipsCarrousel from './TipsCarrousel';

import '../../../styles/specific/HomeComponent/Home.css';
import FloatingButton from '../../reusable/FloatingButton';

const Home = () => {
  return (
    <div className='homeBackGround'>
      <HotProductsCarrousel/>
      <JumbotronComponent/>
      <TipsCarrousel/>  
    </div>
  );
};

Home.propTypes = {};

export default Home;