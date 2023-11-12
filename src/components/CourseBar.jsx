import Nav from 'react-bootstrap/Nav';
import styles from "../styles.module.css";

function CourseBar() {
	return (
		<Nav defaultActiveKey="/home" variant="pills"  className={["flex-column", styles.sidebarCustom]}>
			<Nav.Link eventKey="link-1">Announcements</Nav.Link>
			<Nav.Link eventKey="link-2">Modules</Nav.Link>
			<Nav.Link eventKey="link-3">Assignments</Nav.Link>
			<Nav.Link eventKey="link-4"> Grades</Nav.Link>
			<Nav.Link eventKey="link-5"> Syllabus</Nav.Link>
			<Nav.Link eventKey="link-6"> Zoom</Nav.Link>
		</Nav>
	);
}

export default CourseBar;