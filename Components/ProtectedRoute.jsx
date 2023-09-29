import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoute = () => {


    const data = localStorage.getItem("userName")
 
    if( data === null) {
        return <Navigate to="/" />
      
    } else {
        return <Outlet/>
        
    }

}

export default ProtectedRoute