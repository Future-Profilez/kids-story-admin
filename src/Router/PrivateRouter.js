import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Story from '../Apis/Story';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';


export default function PrivateRoute(props) {

  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const {pathname} = useLocation();
  
    useEffect(() => {
        const notIncluded = ["/terms","/contact"];
        if(notIncluded.includes(pathname)){
            
        }else {
            const auth = localStorage.getItem('authenticated');
            if (!auth) {
            } else {
              setContent(true);
            }
        }
    }, []);
  

    const fetchData = () => {
      const main = new Story();
      const response = main.Subscriptionlist();
      response
        .then((res) => {
          if (res.data.status) {
            setContent(res.data.data);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          console.log("error", error);
          toast.error("Please log in first.");
          navigate('/');
        });
    };
    
  useMemo(() => {
    fetchData();
  }, []);
  return <>{props.children}</>;
}
