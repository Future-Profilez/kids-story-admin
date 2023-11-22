import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';

export default function PrivateRoute(props) {
  const { setLoginUser, loginUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (!loginUser) {
        navigate("/");
      } else {
        const main = new Story();
        const response = await main.Subscriptionlist();
        if (response) {
          setContent(response.data);
          setLoading(false);
        }
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setLoginUser, navigate, loginUser]); 

  return <>{props.children}</>;
}
