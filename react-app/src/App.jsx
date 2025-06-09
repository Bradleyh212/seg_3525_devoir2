import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route
					path="/"
					element={
						<>
							<Hero />
							<Services />
							<Team />
							<Contact />
							<Footer />
						</>
					}
				/>
				<Route path="/booking" element={<Booking />} />
			</Routes>
		</>
	);
}

export default App;