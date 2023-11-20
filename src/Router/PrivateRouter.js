import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';

export default function PrivateRoute(props) {
  const { setLoginUser, loginUser } = useContext(UserContext);
  const [Regs, setRegs] = useState({
    password: "",
    email: "",

  });
  const Navigate = useNavigate();
  console.log("loginUser", loginUser)
  async function handleform() {

    try {
      const main = new Story();
      const response = await main.Login(Regs);
      console.log("response", response);
      if (response) {
        setRegs(response?.data)
        setLoginUser(response?.data?.data);
      } else {
        Navigate('/')
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    handleform();
  }, [setLoginUser, Navigate, loginUser]);

  return <>{props.children}</>;
}
