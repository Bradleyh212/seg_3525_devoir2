import React from 'react';
import jalen from '../assets/jalen.jpg';
import malik from '../assets/malik.jpg';
import andre from '../assets/andre.jpg';

function Team() {
  return (
    <div className="team-section bg-dark text-white py-5 px-4" id="team" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold">Great Style Starts with a Skilled Barber Team</h2>
        <p className="text-light">Meet our expert barbers – masters of fades, trims, and style. Each brings passion, skill, and precision to every cut.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <img src={jalen} alt="Jalen Carter" className="img-fluid rounded mb-3" />
          <h5 className="fw-bold">Jalen Carter</h5>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-light">Jalen is known for his flawless fades and creative cuts. With 5+ years of experience, he brings modern style to every client.</p>
        </div>
        <div className="col-md-3 text-center">
          <img src={malik} alt="Malik Torres" className="img-fluid rounded mb-3" />
          <h5 className="fw-bold">Malik Torres</h5>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-light">Specialized in beard shaping and clean lines, Malik takes pride in offering a sharp and relaxed grooming experience.</p>
        </div>
        <div className="col-md-3 text-center">
          <img src={andre} alt="Andre Silva" className="img-fluid rounded mb-3" />
          <h5 className="fw-bold">Andre Silva</h5>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-light">Andre’s precision and attention to detail make him a favorite for classic cuts and professional looks.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;