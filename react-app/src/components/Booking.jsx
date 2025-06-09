import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function Booking() {
	const [service, setService] = useState('haircut');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [confirmed, setConfirmed] = useState(false);

	const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '13:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

	const handleSubmit = (e) => {
		e.preventDefault();
		if (date && time) {
			setConfirmed(true);
		}
	};

	return (
		<section className="bg-black text-white py-5" style={{ minHeight: '100vh' }}>
			<Container  style={{paddingTop: '100px' }}>
				<h2 className="text-center mb-4">Book Your Appointment</h2>

				{confirmed ? (
					<Alert variant="success">
						Appointment confirmed for a {service} on <strong>{date}</strong> at <strong>{time}</strong>.
					</Alert>
				) : (
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-4">
							<Form.Label>Choose a Service:</Form.Label>
							<div className="d-flex gap-3">
								<Form.Check
									type="radio"
									label="Haircut"
									name="service"
									value="haircut"
									checked={service === 'haircut'}
									onChange={(e) => setService(e.target.value)}
								/>
								<Form.Check
									type="radio"
									label="Beard Trim"
									name="service"
									value="beard"
									checked={service === 'beard'}
									onChange={(e) => setService(e.target.value)}
								/>
							</div>
						</Form.Group>

						<Form.Group className="mb-4">
							<Form.Label>Choose a Date:</Form.Label>
							<Form.Control
								type="date"
							 value={date}
								onChange={(e) => setDate(e.target.value)}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-4">
							<Form.Label>Select a Time:</Form.Label>
							<Row>
								{times.map((t, idx) => (
									<Col xs={6} sm={4} md={2} key={idx} className="mb-2">
										<Button
											variant={t === time ? 'success' : 'outline-light'}
											className="w-100"
											onClick={() => setTime(t)}
										>
											{t}
										</Button>
									</Col>
								))}
							</Row>
						</Form.Group>

						<Button type="submit" variant="success">
							Confirm Appointment
						</Button>
					</Form>
				)}
			</Container>
		</section>
	);
}

export default Booking;