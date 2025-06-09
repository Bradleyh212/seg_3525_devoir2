import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import lineup1 from '../assets/lineup_1.jpg';
import fade1 from '../assets/fade_1.jpg';
import lineup2 from '../assets/lineup_2.jpg';
import beardTrim from '../assets/beard_trim.jpg.webp';
import fade2 from '../assets/fade_2.webp';
import hairStyling from '../assets/hairstyling.jpg';

function Services() {
	const services = [
		{ title: "Haircut", img: lineup1 },
		{ title: "Beard Trim", img: beardTrim },
		{ title: "Hair Styling", img: hairStyling },
		{ title: "Haircut", img: fade1 }
	];
	return (
		<section id="services" className="bg-dark text-white py-5">
			<Container>
				<h2 className="text-center mb-4">Our Services</h2>
				<Carousel interval={1500} fade={false}>
					{services.map((service, index) => (
						<Carousel.Item key={index}>
							<img
								className="d-block w-100"
								src={service.img}
								alt={service.title}
								style={{
									height: '500px',
									objectFit: 'cover',
									borderRadius: '8px'
								}}
							/>
							<Carousel.Caption>
								<h5>{service.title}</h5>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</section>
	);

}

export default Services;