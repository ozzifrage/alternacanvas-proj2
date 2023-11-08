import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './CustomNavbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
	return (
		<div className="App">
			<header>
				<CustomNavbar></CustomNavbar>
			</header>
			<main>
				<Container>
					<Row className="px-4 my-5">
						<Col sm={7}>sm=8</Col>
						<Col sm={5}>sm=4</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}

export default App;
