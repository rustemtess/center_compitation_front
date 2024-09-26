import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/Home';
import NotFound from './pages/Not-Found/page';
import ShopPage from './pages/Shop';
import './index.css';

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
