// useToken.js
import { useSelector } from 'react-redux';
import { login, token } from '../redux/UserSlice';

const useToken = () => {
  const tokensss = useSelector(login);
  return tokensss;
};

export default useToken;
