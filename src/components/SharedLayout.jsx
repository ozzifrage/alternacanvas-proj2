import {Outlet} from "react-router-dom";
import CustomNavbar from "./CustomNavbar";

function SharedLayout() {
	return (
        <>
            <CustomNavbar />
            <Outlet />
        </>
  	);
}

export default SharedLayout;