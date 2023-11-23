import { createContext, useState, useEffect } from "react";
export const UserContext = createContext(); 

export default function UserContextProvider({children}) {

    const [name, setName] = useState("data");
    
    const [loginUser, setLoginUser] = useState();

    const[List,setList] = useState('');
    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('List', List);
    }, [List]);

    const [generatedStory, setGerenratedStory] = useState();

    return <UserContext.Provider value={{ generatedStory, setGerenratedStory,
        loginUser, setLoginUser,List, setList, name, setName }} >
            {children}
        </UserContext.Provider>
}
 