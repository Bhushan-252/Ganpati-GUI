import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router"

function App() {
 return(
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
 )
}

export default App
