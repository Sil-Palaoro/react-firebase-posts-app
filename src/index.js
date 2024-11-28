import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';

const rootElement = document.getElementById('root');

// Crear un root y renderizar la aplicación
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
