import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom"
import styles from "../styles.module.css";

function CourseBar() {
	return (
		<Nav defaultActiveKey="/announcements" variant="pills"  className={["flex-column", styles.sidebarCustom]}>
			<Nav.Link>
				<Link to="../announcements" relative="path" className={styles.sidebarLink}>Announcements</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../modules" relative="path" className={styles.sidebarLink}>Modules</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../assignments" relative="path" className={styles.sidebarLink}>Assignments</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../grades" relative="path" className={styles.sidebarLink}>Grades</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../syllabus" relative="path" className={styles.sidebarLink}>Syllabus</Link>
			</Nav.Link>
			<Nav.Link>
				<Link to="../zoom" relative="path" className={styles.sidebarLink}>Zoom</Link>
			</Nav.Link>
		</Nav>
	);
}

export default CourseBar;