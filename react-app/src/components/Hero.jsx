import React from 'react';
import bgImage from '../assets/barbershop_bg.jpg';

function Hero() {
  return (
    <div className="hero-section" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      paddingLeft: '5%',
    }}>
      <p className="lead">Fresh cuts. Clean fades. Always on point.</p>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
        Professional, stylish,<br />
        and affordable barbering services
      </h1>
      <p>We specialize in sharp haircuts, beard trims, and styling – all tailored to your look, time, and budget.</p>
      <button className="btn btn-light mt-3">View all Services</button>
    </div>
  );
}

export default Hero;