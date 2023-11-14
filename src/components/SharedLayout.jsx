import {Outlet} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from "./CustomNavbar";

function SharedLayout() {
	return (
        <>
            <Row>
                <Col sm={2}>
                    <CustomNavbar />
                </Col>
                <Col sm={10}>
                    <Outlet />
                </Col>
            </Row>
        </>
  	);
}

export default SharedLayout;