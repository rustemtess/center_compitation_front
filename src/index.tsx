import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import '@/utils/i18n';
import HomePage from '@/pages/Home';
import NotFound from '@/pages/Not-Found';
import ShopPage from '@/pages/Shop';
import TeamPage from '@/pages/Team';
import ProductPage from '@/pages/Product';
import AddProductPage from '@/pages/AddProduct';
import AuthPage from '@/pages/Auth';
import AddNewsPage from '@/pages/AddNews';
import NewsPage from '@/pages/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <AuthPage />
  },
  {
    path: '/shop',
    element: <ShopPage />
  },
  {
    path: '/product/:id',
    element: <ProductPage />
  },
  {
    path: '/product/add',
    element: <AddProductPage />
  },
  {
    path: '/news/:id',
    element: <NewsPage />
  },
  {
    path: '/news/add',
    element: <AddNewsPage />
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
