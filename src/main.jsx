import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Shop from './components/Shop/Shop.jsx'
import Whislist from './components/Whislist/Whislist.jsx'
import Product from './components/Product/Product.jsx'
import Discription from './components/Product/Discription/Discription.jsx'
import FAQ from './components/Product/FAQ/FAQ.jsx'
import Cart from './components/Cart/Cart.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js'
import AdminPanel from './components/AdminPanel/AdminPanel.jsx'
import Login from './components/AdminPanel/login.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Footer />
      },
      {
        path: 'about',
        element: <Footer />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'whislist',
        element: <Whislist />
      },
      {
        path: 'Cart',
        element: <Cart />
      },
      {
        path: 'shop/Product/:productID',
        element: <Product />,
        children: [
          {
            path: 'discription',
            element: <Discription />
          },
          {
            path: 'FAQ',
            element: <FAQ />
          }
        ]
      }

    ]
  },
  {
    path: 'AdminPanel',
    element: <AdminPanel />,
  },
  {
    path:'login',
    element:<Login/>
  }
])
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
)
