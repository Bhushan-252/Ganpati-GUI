import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router"
import { useEffect } from "react";
import { useLocation } from "react-router";

function App() {
    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

 return(
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
 )
}

export default App
