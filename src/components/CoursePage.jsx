import './CoursePage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles.module.css"
import CustomNavbar from './CustomNavbar';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CourseBar from './CourseBar';
import PageCard from './pageCard';

function CoursePage() {
	return (
		<div className="CoursePage">
			<Container>
				<Row className="px-4 my-5">
					<Col sm={2}>sm=2
						<CourseBar></CourseBar>
					</Col>
					<Col sm={10}>sm=10 
						<Container className={styles.contentContainer}>
							<PageCard></PageCard>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CoursePage;
