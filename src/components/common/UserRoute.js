import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserRoute = ({ children }) => {
    const { user } = useAuth();
    let location = useLocation();
    if (user.email) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;

};

export default UserRoute;