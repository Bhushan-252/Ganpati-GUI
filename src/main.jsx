import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./app/store.js";
import React, { Suspense, lazy } from "react";

// Lazy imports
const App = lazy(() => import("./App.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Shop = lazy(() => import("./components/Shop/Shop.jsx"));
const Product = lazy(() => import("./components/Product/Product.jsx"));
const Description = lazy(() => import("./components/Product/Description/Description.jsx"));
const FAQ = lazy(() => import("./components/Product/FAQ/FAQ.jsx"));
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const AdminPanel = lazy(() => import("./components/AdminPanel/AdminPanel.jsx"));
const AddProduct = lazy(() => import("./components/AdminPanel/AddProduct.jsx"));
const DashboardHome = lazy(() => import("./components/AdminPanel/DashboardHome.jsx"));
const Orders = lazy(() => import("./components/AdminPanel/Orders.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Footer /> },
      { path: "about", element: <Footer /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      {
        path: "shop/product/:productID",
        element: <Product />,
        children: [
          { index: true, element: <Description /> },
          { path: "faq", element: <FAQ /> },
        ],
      },
    ],
  },
  {
    path: "adminpanel",
    element: <AdminPanel />,
    children: [
      { index: true, element: <DashboardHome /> },
      // { path: "home", element: <DashboardHome /> },
      { path: "addproduct", element: <AddProduct /> },
      { path: "orders", element: <Orders /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
);
