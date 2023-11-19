import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [loginUser, setLoginUser] = useState();
    const [auth, setauth] = useState();
    const [cart, setCart] = useState('');
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    let values = { auth, setauth, loginUser, setLoginUser, cart, setCart };


    return <>
        <UserContext.Provider value={values} >
            {props.children}
        </UserContext.Provider>
    </>
}