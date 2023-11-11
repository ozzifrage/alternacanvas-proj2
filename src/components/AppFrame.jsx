import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Dashboard from "./Dashboard";
import CoursePage from "./CoursePage";
import Account from "./Account";
import Customization from "./Customization";

function AppFrame() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="classes/:classId" element={<CoursePage />} />
                    <Route path="account" element={<Account />} />
                    <Route path="customization" element={<Customization />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppFrame;
