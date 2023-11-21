import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';

export default function PrivateRoute(props) {
  const { setLoginUser, loginUser } = useContext(UserContext);
  const [Regs, setRegs] = useState({
    email: "",
    password: ""

  });
  const Navigate = useNavigate();
  console.log("loginUser", loginUser)
  async function handleform() {
    const main = new Story();
    try {
      const response = await main.Login({ Regs });
      console.log("res.data", response.data);
      console.log("res.status", response.status); 
    } catch (error) {
      console.error("Error in API request:", error);
      if (error.response) {
      
        console.error("Server response data:", error.response.data);
        console.error("Server response status:", error.response.status);
      } else if (error.request) {
   
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  }
  

  useEffect(() => {
    handleform();
  }, [setLoginUser, Navigate, loginUser]);

  return <>{props.children}</>;
}
