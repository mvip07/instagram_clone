import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRouter({ children }) {
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("user-token")
        if (!token) {
            return navigate("/account")
        }
    }, [navigate, children])

    return children
}

export default PrivateRouter;