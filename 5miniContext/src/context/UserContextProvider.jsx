import React, { useState } from "react";
import UserContext from "./UseContext";

const UseContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>   {/* We are giving access of user and setUser to children which is later on can be accessed  */} 
            {children}
        </UserContext.Provider>
    )
}
export default UseContextProvider;