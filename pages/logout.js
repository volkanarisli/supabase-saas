import { useEffect } from "react"
import { useUser } from "../context/user"


const Logout = () => {
    const { logout } = useUser()
    useEffect(logout, [])
    return (
        <div>
            Logging Out
        </div>
    )
}

export default Logout
