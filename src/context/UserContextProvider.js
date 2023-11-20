import { createContext, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [loginUser, setLoginUser] = useState();
    return <>
        <UserContext.Provider value={{ loginUser, setLoginUser }} >
            {props.children}
        </UserContext.Provider>
    </>
}

// const [cart, setCart] = useState('');
//     // useEffect(() => {
//     //     localStorage.setItem('cart', JSON.stringify(cart))
//     // }, [cart])

//     // let values = { auth, setauth, loginUser, setLoginUser, cart, setCart };