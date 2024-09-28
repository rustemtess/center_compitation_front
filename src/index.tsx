import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from '@/pages/Home';
import NotFound from '@/pages/Not-Found';
import ShopPage from '@/pages/Shop';
import TeamPage from '@/pages/Team';
import '@/utils/i18n';

/**
 * 
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/shop',
    element: <ShopPage />
  },
  {
    path: '/team',
    element: <TeamPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

const rootElement: HTMLElement | null = document.getElementById("root");

if(rootElement)
  createRoot(
    rootElement
  ).render(
    <RouterProvider router={router} />
  );
else console.log('Root element not found');
