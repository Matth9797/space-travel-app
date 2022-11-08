import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/HeroImg/HeroImg';
import PricingCards from '../components/Pricing/PricingCards';

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImg heading='PRICING.' text='Choose your trip.' />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing
