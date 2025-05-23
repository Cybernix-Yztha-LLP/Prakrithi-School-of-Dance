import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App';

const rootElement = document.getElementById('root'); // Changed from 'app' to 'root' to match CRA/Vite defaults
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
    <App />
);
