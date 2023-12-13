import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';


export default function PrivateRoute(props) {

  const navigate = useNavigate();
  const [content, setContent] = useState([]);

  const {pathname} = useLocation();
  
  const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
        const notIncluded = ["/terms"];
        if(notIncluded.includes(pathname)){
            
        }else {
            const auth = localStorage.getItem('authenticated');
            if (!auth) {
            } else {
              setContent(true);
            }
        }
    }, []);
  

  const fetchData = async () => {
    try {
      const main = new Story();
      const response = await main.Subscriptionlist();
      if (response.data.status) {
        setContent(response.data.data);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Please login in first.")
      navigate('/');
    }
  };
  useMemo(() => {
    
    fetchData();
  }, []);
  return <>{props.children}</>;
}
