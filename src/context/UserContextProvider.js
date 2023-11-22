import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [loginUser, setLoginUser] = useState();
    const[List,setList] = useState('');
    useEffect(()=>{
        localStorage.setItem('List',JSON.stringify(List))
    },[List])
    return <>
        <UserContext.Provider value={{ loginUser, setLoginUser,List,setList }} >
            {props.children}
        </UserContext.Provider>
    </>
}
