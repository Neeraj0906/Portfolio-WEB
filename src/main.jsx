import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import Tailwind base styles
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import './output.css'; // Import the final Tailwind output

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
