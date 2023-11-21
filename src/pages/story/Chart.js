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
            title: {
                display: true,
                text: 'Subscription tracking',
            },       
            data: {
                labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "August", "Sep.", "Oct.", "Nov.", "Dec."],
                
                datasets: [                   
                    {
                        label: 'User',
                        // data: [Contnet.user ],
                        data: [100, 200, 300,100, 200, 300,100, 200, 300,100, 200, 300],
                        fill: true,
                        backgroundColor: 'rgba(34,79,255,.2)',
                        borderColor: 'rgb(34 79 255)',
                        borderWidth: 1
                    },
                    { 
                        label: 'Subscription',
                        // data: [Contnet.totalSubscription],
                        data: [140, 250, 360,170, 280, 390,170, 240, 350,160, 270, 380],
                        fontColor: '#ffffff',
                        fill: true,
                        backgroundColor: 'rgba(139,85,217,.2)',
                        borderColor: 'rgb(139 85 217)',
                        borderWidth: 1
                    },
                    // {
                    //     label: 'Stories',
                    //     //  data: [Contnet.stories],
                    //     data: [120, 220, 320,120, 220, 320,120, 220, 320,120, 220, 320],
                    //     fill: true,
                    //     fontColor: '#ffffff',
                    //     backgroundColor: 'rgba(34, 79, 255, 0.00)',
                    //     borderColor: 'green',
                    //     borderWidth: 1, 
                    // }
                ]
                
            }
           
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