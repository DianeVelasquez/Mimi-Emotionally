// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';

import { baselightTheme } from "./theme/DefaultColors";
import { RouterProvider } from 'react-router';
import router from "./routes/Router.js"
import EmotionalIntro from './components/intro/EmotionalIntro';

function App() {
  const theme = baselightTheme;
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showIntro && <EmotionalIntro />}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
