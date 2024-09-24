import { Children } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext () ;

const UserProvider = ({Children}) => {

    const [user, setUser] = useState (true)

    const logout = () => {
        setUser(false) 
    }

    return (
        <UserContext.Provider value= {{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;