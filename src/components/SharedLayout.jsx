import {Outlet} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from "./CustomNavbar";

function SharedLayout() {
	return (
        <>
            <Row>
                <Col sm={1}>
                    <CustomNavbar />
                </Col>
                <Col sm={11}>
                    <Outlet />
                </Col>
            </Row>
        </>
  	);
}

export default SharedLayout;