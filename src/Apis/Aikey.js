import React, { useEffect, useState } from 'react'
import Story from './Story';

export default function Aikey() {
    const [Openkey, setOpenkey] = useState([]);
    useEffect(() => {
        const main = new Story();
        const response = main.fetchKey();
        response.then((res) => {
            if (res.data.status === true) {
                setOpenkey(res?.data?.openKey?.key);
                localStorage.setItem("key",res?.data?.openKey?.key)
            }
        }).catch((error) => {
            console.log("error", error);
        });
    }, [Openkey]);

    return (
        <>
            {/* <h1>{Openkey}</h1> */}
        </>
    )
}
