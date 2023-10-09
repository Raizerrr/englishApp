import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getUser } from "../axios/userAxios";

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        registerUser();
    }, [])
    

    const registerUser = async() => {
        const newUser = await getUser();
        setUser(newUser.data.data);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                registerUser,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);