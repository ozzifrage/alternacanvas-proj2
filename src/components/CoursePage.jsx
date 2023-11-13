import './CoursePage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles.module.css"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CourseBar from './CourseBar';
import PageCard from './pageCard';
import announcementData from "../data/announcements.json"
import assignmentData from "../data/assignments.json"
import moduleData from "../data/modules-metadata.json"
import {Link, useParams} from "react-router-dom";

function CoursePage() {

	const pageArgument = useParams();

	let data = null;
    switch (pageArgument.pageName){
		case "announcements":
			data = announcementData;
			break;
		case "assignments":
			data = assignmentData;
			break;
		case "modules":
			data = moduleData;
			break;
	}

	return (
		<div className="CoursePage">
			<Container>
				<Row className="px-4 my-5">
					<Col sm={2}>sm=2
						<CourseBar></CourseBar>
					</Col>
					<Col sm={10}>sm=10 
						<Container className={styles.contentContainer}>
							{data.map((entry) => <PageCard header={entry.header} subheader={entry.date} body={entry.body} ></PageCard>)}
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CoursePage;
