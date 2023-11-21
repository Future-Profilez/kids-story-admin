import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [loginUser, setLoginUser] = useState();
    const[cart,setCart] = useState('');
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])
    return <>
        <UserContext.Provider value={{ loginUser, setLoginUser,cart,setCart }} >
            {props.children}
        </UserContext.Provider>
    </>
}
