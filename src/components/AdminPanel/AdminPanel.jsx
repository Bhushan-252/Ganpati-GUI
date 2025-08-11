import AddProduct from "./AddProduct.jsx";
import Login from "./Login.jsx";
import {useSelector} from "react-redux";
import DashBoard from "./DashBoard.jsx";

function AdminPanel() {
    // const login = useSelector((state) => state.login);


    return(
        <>
            <Login/>
            {/*{login.login ? <DashBoard/>  : <Login />}*/}
     </>
    )
}

export default AdminPanel
