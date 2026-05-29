import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';

import App from "./App"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
  >
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </SnackbarProvider>
);
