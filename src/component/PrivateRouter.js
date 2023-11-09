import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/UserSlice';
import Login from './Login';

const PrivateRouter = () => {
  const { isUserLoggedIn, isLoading } = useSelector(selectUser);

  if (isLoading) {
    return null; 
  }

  return isUserLoggedIn ? <Login /> : <Navigate to="/home" replace />;
};

export default PrivateRouter;
