import { RouteObject } from 'react-router-dom';
import AppLayout from './components/layouts/app-layout';
import Home from './pages/home';
import NotFound from './pages/not-found';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
