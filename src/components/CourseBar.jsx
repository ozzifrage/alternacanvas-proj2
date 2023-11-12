import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"
import styles from "../styles.module.css";

function CourseBar() {
	return (
		<Nav defaultActiveKey="/announcements" variant="pills"  className={["flex-column", styles.sidebarCustom]}>
			<Nav.Link>
				<Link to="../announcements" relative="path">Announcements</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../modules" relative="path">Modules</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../grades" relative="path">Grades</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../syllabus" relative="path">Syllabus</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../zoom" relative="path">Zoom</Link>
			</Nav.Link>
		</Nav>
	);
}

export default CourseBar;