import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.util";


export const UserContext = createContext({

})

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentuser] = useState(null);
    const value = {currentUser, setCurrentuser};
    useEffect(()=>{
        const unsubscribe =  onAuthStateChangedListener((user)=>{
            console.log(user)
        })
        return unsubscribe;
    },[])
    
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}