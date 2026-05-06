import { createBrowserRouter } from 'react-router';
import AppLayout from '../layouts/marketing/AppLayout';
import AnalyzePage from '../pages/AnalyzePage';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'analyze', element: <AnalyzePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
