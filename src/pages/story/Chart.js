import { useEffect, useRef, useState } from "react";
import Story from "../../Apis/Story";
import { toast } from 'react-hot-toast';
import Chart from 'chart.js/auto';

function ChartComponent() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [content, setContent] = useState([]);
    const fetchData = async () => {
      try {
        const main = new Story();
        const response = await main.getchart();
        if (response.data.status === true) {
          setContent(response.data.data); 
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Error fetching data");
      }
    };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("content",content)

  // const months =content.month
  // console.log("monrth")

  
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  
    if (content.length > 0) {
      const chartCanvas = chartRef.current.getContext("2d");
  
      const months = content.map(item => item.month); 
      const totalUsersData = content.map(item => item.total_users); 
      const subscribedUsersData = content.map(item => item.subscribed_users); 
  
      chartInstance.current = new Chart(chartCanvas, {
        type: "line",
        data: {
          labels: months,
          datasets: [
            {
              label: 'User',
              data: totalUsersData,
              fill: true,
              backgroundColor: 'rgba(34, 79, 255, 0.30)',
              borderColor: 'rgba(34, 79, 255, 0.60)',
              borderWidth: 1,
              showLine: false
            },
            {
              label: 'Subscription',
              data: subscribedUsersData,
              fill: true,
              backgroundColor: 'rgba(144, 84, 217, 0.20)',
              borderColor: 'rgba(144, 84, 217, 1)',
              borderWidth: 1
            },
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 1, // Start y-axis from 100
              max: 50, // End y-axis at 1000
              stepSize: 10 // Set y-axis increment to 100
            }
          }
        }
      });
    }
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [content]);
  
  



  return (
    <canvas ref={chartRef} style={{ width: "", height: "100px" }} />
  );
}

export default ChartComponent;
