import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import 'normalize.css';
;

//BrowserRoutes es usado para manejar las rutas de la aplicación

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <main className="main-container">
    <App />
    </main>
  </React.StrictMode>,
)
