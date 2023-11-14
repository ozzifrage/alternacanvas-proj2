import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AssignmentCard({ header, subheader, body, subtype }) {

	const [showSubmit, setShowSubmit] = useState(false);
	const [showUpload, setShowUpload] = useState(false);

	const handleSubmitClose = () => setShowSubmit(false);
	const handleSubmitShow = () => setShowSubmit(true);

	const handleUploadClose = () => setShowUpload(false);
	const handleUploadShow = () => setShowUpload(true);


	return (
		<>
			<Card bg={subtype === 'module' ? 'dark' : 'light'} text={subtype === 'module' ? 'white' : 'dark'}>
				<Card.Body>
					<Card.Title>{header}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{subtype === 'module' ? '' : subheader}</Card.Subtitle>
					<Card.Text>
						{subtype === 'module' ? '' : body}
					</Card.Text>
					<Button variant="secondary" onClick={handleUploadShow}>Upload Submission</Button>
					<Button variant="danger" onClick={handleSubmitShow}>Submit Assignment</Button>
				</Card.Body>
			</Card>

			<Modal show={showSubmit} onHide={handleSubmitClose}>
				<Modal.Header closeButton>
					<Modal.Title>Assignment Submitted!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Chest Breakdown</h4>
					<p>+1 Chest for submitting this assignment.</p>
					<p>+1 Chest for submitting this early!</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleSubmitClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			

			<Modal show={showUpload} onHide={handleUploadClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload your Submission...</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Text Submission</h4>
					<Form.Label>Type here...</Form.Label>
					<Form.Control/>
					<h4>File Submission</h4>
					<Button variant="danger">
						Browse for a File
					</Button>


				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleUploadClose}>
						Cancel
					</Button>
					<Button variant="danger" onClick={handleUploadClose}>
						Upload
					</Button>
				</Modal.Footer>
			</Modal>



		</>

	);
}

export default AssignmentCard;