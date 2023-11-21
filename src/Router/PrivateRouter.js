import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';

export default function PrivateRoute(props) {
  const { setLoginUser, loginUser } = useContext(UserContext);
  const Navigate = useNavigate();
const daat = loginUser.data
console.log("data",daat)
  console.log("loginuser",loginUser)
  async function handleform() {
    const main = new Story();
    try {
      const { email, password } = loginUser.data;
      console.log("email, password0",email, password)
      const response = await main.Login({ email });
      console.log("res.data", response);
      setLoginUser(response?.data);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  }

  useEffect(() => {
    handleform();
  }, [setLoginUser, Navigate, loginUser]);

  return <>{props.children}</>;
}
