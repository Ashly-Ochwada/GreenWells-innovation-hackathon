// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './ theme'; 

import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found. Make sure <div id="root"></div> exists in index.html');
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
