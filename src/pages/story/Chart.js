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
                        // data: [Contnet.user ],
                        data: [100, 500, 1000],
                        fill: true,
                        backgroundColor: 'red',
                        borderColor: 'red',
                        borderWidth: 2
                    },
                    {
                        label: 'Subscription',
                        // data: [Contnet.totalSubscription],
                        data: [300, 600, 900],

                        fill: true,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        label: 'Stories',
                        //  data: [Contnet.stories],
                        data: [400, 700, 900],
                        fill: true,
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        borderColor: 'green',
                        borderWidth: 2
                    }
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
        <div className="mt-5">
            <canvas ref={chartRef} style={{ width: "500px", height: "500px" }} />
        </div>
    );
}

export default Chart;
