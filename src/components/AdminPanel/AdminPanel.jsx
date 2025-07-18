import AddProduct from "./AddProduct.jsx";
import Login from "./Login.jsx";
import {useSelector} from "react-redux";

function AdminPanel() {
    const login = useSelector((state) => state.login);
    return(
        <>
            {console.log("loading Adminpanel")}
            {console.log(login)}
            {login.login ? <AddProduct/>  : <Login />}
        </>
    )
}

export default AdminPanel
