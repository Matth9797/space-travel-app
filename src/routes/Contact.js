import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroImg from '../components/HeroImg/HeroImg';
import Footer from '../components/Footer/Footer';
import Form from '../components/Form/Form';

const Contact = () => {
  return (
    <div>
       <Navbar />
       <HeroImg heading='CONTACT.' text='Contact Space Estate' />
       <Form />
       <Footer />
    </div>
  )
}

export default Contact
