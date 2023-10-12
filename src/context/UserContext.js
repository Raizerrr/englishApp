import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getUser, udpateUser } from "../axios/userAxios";

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        registerUser();
    }, [])
    

    const registerUser = async() => {
        try {
            const newUser = await getUser();
            setUser(newUser.data.data);
            
        } catch (error) {
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const updateUserContext = async() => {
        await udpateUser(user);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                registerUser,
                logout,
                updateUserContext
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);