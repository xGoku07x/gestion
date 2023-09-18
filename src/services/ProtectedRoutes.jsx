import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoutes = () => {

    const auth = localStorage.getItem("loggedin")

    return auth ? <Outlet /> : <Navigate to={"/login"} />
}
