import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SharedLayout from './SharedLayout';
import Dashboard from "./Dashboard";

function AppFrame() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppFrame;
