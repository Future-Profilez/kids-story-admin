import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';
import { UserContext } from '../context/UserContextProvider';

export default function PrivateRouter(props) {

  const { setLoginUser} = useContext(UserContext);
 
  const navigate = useNavigate();

  useEffect(() => {
    if (!setLoginUser) {
      navigate('/');
      return;
    }

    const main = new Story();
    const resp = main.Login();

    resp.then((res) => {
      console.log("user", res);
      if (res.data) {
        setLoginUser(res.data.data);
      } else {
        navigate('/');
      }
    }).catch((err) => {
      console.log("err",err);
    });
  }, [setLoginUser,navigate]);

  return <>
    {props.children}
  </>;
}
