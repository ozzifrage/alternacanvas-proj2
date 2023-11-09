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
				<Navbar.Brand>Canvas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className={styles.navbarText} to="/">Home</Link>
						<Link className={styles.navbarText} to="/customization">Customization</Link>
						<Link className={styles.navbarText} to="/account">Account</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNavbar;