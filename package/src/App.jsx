import './App.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import EmotionalIntro from './components/intro/EmotionalIntro';
import { LanguageProvider } from './i18n/LanguageContext';
import router from './routes/Router.js';
import { baselightTheme } from './theme/DefaultColors';

function App() {
  const theme = baselightTheme;
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 6200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        {showIntro && <EmotionalIntro onComplete={() => setShowIntro(false)} />}
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
