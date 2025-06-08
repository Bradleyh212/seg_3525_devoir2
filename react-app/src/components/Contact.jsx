import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const accentColor = '#168F23';

  return (
    <section className="bg-dark text-white py-5" id="contact" style={{minHeight: '80vh'}}>
      <Container>
        <h2 className="mb-4 text-center">Find us</h2>
        <Row className="g-4 justify-content-center">
          <Col md={5} className="bg-dark text-white p-3 rounded d-flex align-items-center border border-light">
            <FaPhoneAlt size={30} style={{ color: accentColor }} className="me-3" />
            <div>
              <h5 className="fw-bold mb-0">Call Us</h5>
              <small>+(08) 255 201 888</small>
            </div>
          </Col>

          <Col md={5} className="bg-dark text-white p-3 rounded d-flex align-items-center border border-light">
            <FaEnvelope size={30} style={{ color: accentColor }} className="me-3" />
            <div>
              <h5 className="fw-bold mb-0">Email Now</h5>
              <small>Hello@sharpcuts.com</small>
            </div>
          </Col>

          <Col md={10} className="bg-dark text-white p-3 rounded d-flex align-items-center border border-light">
            <FaMapMarkerAlt size={30} style={{ color: accentColor }} className="me-3" />
            <div>
              <h5 className="fw-bold mb-0">Address</h5>
              <small>7510, Brand Tower, New York, USA</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;