import React from 'react';
import bgImage from '../assets/barbershop_bg.jpg';

import { Link } from 'react-router-dom'; //To go to the booking page

function Hero() {
	return (
		<div
			id="home" className="hero-section"
			style={{
				position: 'relative',
				backgroundImage: `url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
				color: 'white',
			}}
		>
			
			<div // Overlay to make sure we can see the text well
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% black overlay
					zIndex: 1,
				}}
			/>

			<div // Paragraphs
				style={{
					position: 'relative',
					zIndex: 2,
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'start',
					paddingLeft: '5%',
				}}
			>
				<p className="lead">Fresh cuts. Clean fades. Always on point.</p>
				<h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
					Professional, stylish,<br />
					and affordable barbering services
				</h1>
				<p style={{ maxWidth: '600px', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}>
					We specialize in sharp haircuts, beard trims, and styling – all tailored to your look, time, and budget.
				</p>
				<Link to="/booking" className="btn btn-light mt-3">
					Book an Appointment
				</Link>
			</div>
		</div>
	);
}

export default Hero;