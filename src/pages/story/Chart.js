import chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import Story from "../../Apis/Story";

function Chart() {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [Contnet, setContent] = useState([])
  useEffect(() => {
    const main = new Story();
    const response = main.Static();
    response.then((res) => {
      setContent(res.data)
    }).catch((error) => {
      console.log("erorr", error)
    })
  }, [])
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const chartCanvas = chartRef.current.getContext("2d");

    chartInstance.current = new chart(chartCanvas, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Sep.", "Oct.", "Nov.", "Dec."],

        datasets: [
          {
            label: 'User',
            // data: [Contnet.user],
            data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
            fill: true,
            backgroundColor: 'rgba(34, 79, 255, 0.30)',
            borderColor: 'rgba(34, 79, 255, 0.60)',
            borderWidth: 1,
            showLine: false
          },
          {
            label: 'Subscription',
           // data: [Contnet.totalSubscription],
            data: [140, 250, 360, 170, 280, 390, 170, 240, 350, 160, 270, 380],
            fill: true,
            backgroundColor: 'rgba(144, 84, 217, 0.20)',
            borderColor: 'rgba(144, 84, 217, 1)',
            borderWidth: 1
          },
          // {
          //     label: 'Stories',
          //     //data: [Contnet.stories],
          //     data: [120, 220, 320,120, 220, 320,120, 220, 320,120, 220, 320],
          //     fill: true,
          //     fontColor: '#ffffff',
          //     backgroundColor: 'rgba(34, 79, 255, 0.00)',
          //     borderColor: 'green',
          //     borderWidth: 1, 
          // }
        ]

      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Subscription tracking ",
            color: 'rgba(255, 255, 255, 1)',
            font: {
              size: 20,

            },
            position: 'top',
            titleAlign: "left",
            padding: {
              top: 10,
              bottom: 5
            }

          },

          legend: {
            display: true,
            labels: {
              color: 'rgba(255, 255, 255, 1)', // Change legend text color
            },
            padding: {
              top: 0,
              bottom: 25
            },
            Align: "start",
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(255, 255, 255, 1)', // Change x-axis tick text color
            },
            grid: {
              color: 'rgba(255, 255, 255, .05)',
            },

          },
          y: {
            ticks: {
              color: 'rgba(255, 255, 255, 1)', // Change y-axis tick text color
            },
            grid: {
              color: 'rgba(255, 255, 255, .05)',
            },

          },
        },

      },

    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <canvas ref={chartRef} style={{ width: "", height: "100px" }} />
  );
}

export default Chart;