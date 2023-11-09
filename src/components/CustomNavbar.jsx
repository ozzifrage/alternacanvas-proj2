import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import styles from "../styles.module.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
	return (
		<Navbar className={styles.navbarCustom} expand="lg">
			<Container>
				<Navbar.Brand>Canvas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className={styles.navbarCustom} href="/">Home</Nav.Link>
						<Nav.Link className={styles.navbarCustom} href="/customization">Customization</Nav.Link>
						<Nav.Link className={styles.navbarCustom} href="/account">Account</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CustomNavbar;