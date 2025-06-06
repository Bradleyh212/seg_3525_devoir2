import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

import logo from './assets/logo_vecteur.png';
import peigne_ciseaux from './assets/peigne_ciseaux_vecteur.png';

function Header () {
		const acc_color = '#168E23'; // This is my accent color
		return (
			// Bootstrap Top Navbar
			<Navbar expand="lg" bg="black" variant="dark" fixed="top">
				<Container fluid>
					<Navbar.Brand href="#" className="d-flex align-items-center"> 
						<img // Adding logo
						src={logo}
						alt="Logo"
						width="120"
						height="120"
						className="d-inline-block align-top me-2"
						/>
					 
						<div className="d-flex flex-column">

								
							<span className="text-white fw-bold d-flex align-items-center" style={{ fontFamily: 'Playfair Display', fontSize: '2rem'}}> 
							  ROYAL
								<img
									src={peigne_ciseaux}
									alt="Scissors"
									width="30"
									height="30"
								/>
							</span>

							<span style={{ color: acc_color, fontFamily: 'Satisfy',fontSize: '1.5rem'}}>
								Beauty Salon
							</span>
						</div>

					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarNav" />
					<Navbar.Collapse id="navbarNav">
					  <Nav className="ms-auto">
						<Nav.Link href="#home">Accueil</Nav.Link>
						<Nav.Link href="#about">Services</Nav.Link>
						<Nav.Link href="#projects">À propos</Nav.Link>
						<Nav.Link href="#contact">Rendez-vous</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					  </Nav>
					</Navbar.Collapse>
			  </Container>
			</Navbar>

		);
}


export default Header;