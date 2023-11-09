import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppFrame from "./components/AppFrame"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AppFrame></AppFrame>
	</React.StrictMode>
);
