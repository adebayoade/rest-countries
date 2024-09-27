import { RouteObject } from 'react-router-dom';
import AppLayout from './components/layouts/app-layout';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Country from './pages/country';

export const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/country',
        element: <Country />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
