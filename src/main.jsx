import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from "./components/Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "/",
    element: <Home />
  }, {
    path: "/contact",
    element: <Footer />
  }, {
    path: "/about",
    element: <Footer />
  }, {
    path: "/shop",
    element: <Shop/>
  }]
}]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)