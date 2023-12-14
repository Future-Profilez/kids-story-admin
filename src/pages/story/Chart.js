import { useEffect, useRef, useState } from "react";
import Story from "../../Apis/Story";
import { toast } from 'react-hot-toast';
import Chart from 'chart.js/auto'; // Import Chart from chart.js/auto

function ChartComponent() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const main = new Story();
    const response = main.getchart();
    response.then((res) => {
      if (res.data.status === true) {
        setContent(res.data.data);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    }).catch((error) => {
      console.log("error", error);
    });
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (content.length > 0) { 
      const chartCanvas = chartRef.current.getContext("2d");

      chartInstance.current = new Chart(chartCanvas, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Sep.", "Oct.", "Nov.", "Dec."],
          datasets: [
            {
              label: 'User',
              data: content.total_users, 
              fill: true,
              backgroundColor: 'rgba(34, 79, 255, 0.30)',
              borderColor: 'rgba(34, 79, 255, 0.60)',
              borderWidth: 1,
              showLine: false
            },
            {
              label: 'Subscription',
              data: content.subscribed_users, 
              fill: true,
              backgroundColor: 'rgba(144, 84, 217, 0.20)',
              borderColor: 'rgba(144, 84, 217, 1)',
              borderWidth: 1
            },
          ]
        },
     
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
