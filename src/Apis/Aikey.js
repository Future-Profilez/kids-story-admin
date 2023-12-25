import React, { useEffect, useState } from 'react'
import Story from './Story';

export default function Aikey() {
    const [Openkey, setOpenkey] = useState(process.env.Openkey);
    useEffect(() => {
        const main = new Story();
        const response = main.fetchKey();
        response.then((res) => {
            if (res.data.status === true) {
                res.data.data.forEach(item => {
                    if (item.type === "open-key") {
                        setOpenkey(item.key);
                        localStorage.setItem("key",item.key)
                    }
                });
               
            }
        }).catch((error) => {
            console.log("error", error);
        });
    }, [Openkey]);

    return (
        <div>
            <h1>{Openkey}</h1>

        </div>
    )
}
