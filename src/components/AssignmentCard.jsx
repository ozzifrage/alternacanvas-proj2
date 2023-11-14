import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function AssignmentCard({ header, subheader, body, subtype }) {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		<>
			<Card bg={subtype === 'module' ? 'dark' : 'light'} text={subtype === 'module' ? 'white' : 'dark'}>
				<Card.Body>
					<Card.Title>{header}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{subtype === 'module' ? '' : subheader}</Card.Subtitle>
					<Card.Text>
						{subtype === 'module' ? '' : body}
					</Card.Text>
					<Button variant="secondary">Upload Submission</Button>
					<Button variant="danger" onClick={handleShow}>Submit Assignment</Button>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Assignment Submitted!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Chest Breakdown</h4>
					<p>+1 Chest for submitting this assignment.</p>
					<p>+1 Chest for submitting this early!</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>


		</>

	);
}

export default AssignmentCard;