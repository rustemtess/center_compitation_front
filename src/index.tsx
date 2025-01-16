import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@/utils/i18n";
import HomePage from "@/pages/Home";
import NotFound from "@/pages/Not-Found";
import ShopPage from "@/pages/Shop";
import TeamPage from "@/pages/Team";
import ProductPage from "@/pages/Product";
import AddProductPage from "@/pages/AddProduct";
import AuthPage from "@/pages/Auth";
import AddNewsPage from "@/pages/AddNews";
import NewsPage from "@/pages/News";
import ServicesPage from "@/pages/Services";
import AddServicePage from "@/pages/AddService";
import AllNewsPage from "@/pages/AllNews";
import EditProductPage from "@/pages/EditProduct";
import EditServicePage from "@/pages/EditService";
import ChatBot from "@/components/ChatBot";
import Levels from "@/dana-bala/levels";
import RegisterPage from "@/pages/Register";
import PayPage from "./pages/Pay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/product/:id/:screen?",
    element: <ProductPage />,
  },
  {
    path: "/product/add",
    element: <AddProductPage />,
  },
  {
    path: "/product/edit/:id",
    element: <EditProductPage />,
  },
  {
    path: "/news/:id",
    element: <NewsPage />,
  },
  {
    path: "/news/add",
    element: <AddNewsPage />,
  },
  {
    path: "/allnews",
    element: <AllNewsPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/services/add",
    element: <AddServicePage />,
  },
  {
    path: "/services/edit/:id",
    element: <EditServicePage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/no_access",
    element: <PayPage />,
  },
  {
    path: "/games",
    element: <Levels />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const rootElement: HTMLElement | null = document.getElementById("root");

const uid = localStorage.getItem("uid");
if (!uid) {
  localStorage.setItem("uid", Date.now().toString(36));
}

if (rootElement)
  createRoot(rootElement).render(
    <>
      <ChatBot />
      <RouterProvider router={router} />
    </>,
  );
else console.log("Root element not found");
