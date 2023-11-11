import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "../styles.module.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

function CustomNavbar() {
	return (
		<Navbar className={styles.navbarCustom} expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="flex-column">
						<div className={styles.imageContainer}>
							<img className={styles.logoImage} src="images/uc_logo.png" alt="Logo" />
						</div>
						<Link className={styles.navbarText} to="/">Dashboard</Link>
						<Link className={styles.navbarText}>Courses</Link>
						<Link className={styles.navbarText}>Calendar</Link>
						<Link className={styles.navbarText}>Inbox</Link>
						<Link className={styles.navbarText} to="/account">Account</Link>
						<Link className={styles.navbarText} to="/customization">Customization</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNavbar;