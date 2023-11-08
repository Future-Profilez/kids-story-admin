import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectuser } from '../redux/UserSlice';
import Login from './Login';

const PrivateRouter = () => {
  const { isUserLoggedIn, isLoading } = useSelector(selectuser);

  if (isLoading) {
    return null; 
  }

  return isUserLoggedIn ? <Login /> : <Navigate to="/home" replace />;
};

export default PrivateRouter;
