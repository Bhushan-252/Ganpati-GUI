import AddProduct from "./AddProduct.jsx";
import Login from "./Login.jsx";
import {useSelector} from "react-redux";
import DashBoard from "./DashBoard.jsx";
import Header from "../Header/Header.jsx";

function AdminPanel() {
    const login = useSelector((state) => state.login);


    return(
        <>
        <DashBoard/>
  {/* {login.login ? <DashBoard/>  : <Login />} */}
        </>
    )
}

export default AdminPanel
