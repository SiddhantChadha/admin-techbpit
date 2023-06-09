import { Navigate } from 'react-router-dom';
import { useAuth } from "./auth";
import MainComponent from '../components/MainComponent'

const ProtectRoutes = () => {
    const { cookies } = useAuth();

    return (cookies.token ? <MainComponent/> : <Navigate to='/login' exact />)
};

export default ProtectRoutes;