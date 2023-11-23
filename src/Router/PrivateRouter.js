import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';
import { toast } from 'react-hot-toast';

export default function PrivateRoute(props) {

  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const main = new Story();
      const response = await main.Subscriptionlist();
      console.log("response",response);
      if(response.data.status){
        setContent(response.data.data);
        setLoading(false);
      } else { 
        setLoading(false);
        toast.error(response.data.message)
        navigate('/');
      }
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Please log in first.")
      navigate('/');
    }
  };

  useMemo(() => {
    fetchData();
  },[]); 
  // setLoginUser, navigate, loginUser
  return <>{props.children}</>;
}
