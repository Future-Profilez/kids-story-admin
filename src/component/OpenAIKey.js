import React, { useEffect } from 'react'
import Story from '../Apis/Story';

export default function OpenAIKey() {
    
    useEffect(() => {
        const main = new Story();
        const response = main.fetchKey();
        response.then((res) => {
            if (res.data.status && res.data.openKey) {
                localStorage.setItem('open-api-key', res.data.openKey.key)
            }
        }).catch((error) => {
            console.log("error", error);
        });
    }, []);

    return (
        <>
        </>
    )
}
