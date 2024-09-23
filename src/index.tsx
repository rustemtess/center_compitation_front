import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/Home';
import NotFound from './pages/Not-Found/page';

/**
 * 
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
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
