// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Box, CircularProgress } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense
    fallback={
      <Box
        sx={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: 'linear-gradient(180deg, #f8fbff 0%, #eef3fb 100%)',
        }}
      >
        <CircularProgress />
      </Box>
    }
  >
    <App />
  </Suspense>,
)
