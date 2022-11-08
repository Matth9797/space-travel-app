import React from 'react'
import Footer from '../components/Footer/Footer';
import HeroImg from '../components/HeroImg/HeroImg';
import Navbar from '../components/Navbar/Navbar';
import TrainingCards from '../components/Training/TrainingCards';

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="TRAINING." text="Train with the best." />
      <TrainingCards />
      <Footer />
    </div>
  );
}

export default Training
