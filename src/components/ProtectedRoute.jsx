import { Navigate } from "react-router-dom"
import { auth } from "../Firebase"

const ProtectedRoute = ({ children }) => {
    if (!auth.currentUser?.emailVerified) {
        return <Navigate to='/login' replace/>
    }

    return children
}

export default ProtectedRoute