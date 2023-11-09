import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from './components/CustomNavbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StackedExample from './components/StackedExample';

function App() {
	return (
		<div className="App">
			<header>
				<CustomNavbar></CustomNavbar>
			</header>
			<main>
				<Container>
					<Row className="px-4 my-5">
						<Col sm={2}>sm=2
							<StackedExample></StackedExample>
						
						</Col>
						<Col sm={10}>sm=10</Col>
					</Row>
				</Container>
			</main>
		</div>
	);
}

export default App;
