import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/inter/400.css";
import '@fontsource/inter/500.css';//loaded inter font.
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import {createTheme,ThemeProvider,CssBaseline} from "@mui/material";

const theme = createTheme({//created a custom MUI Theme.
  Typography:{
    fontFamily:'"Inter",sans-serif',
  }
})

//below i have loaded the theme that created.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
