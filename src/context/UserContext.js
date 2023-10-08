import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getUser } from "../axios/userAxios";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     registerUser();
    // }, [])
    

    const registerUser = async() => {
        const newUser = await getUser();
        console.log(newUser);
        setUser(newUser);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                registerUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);