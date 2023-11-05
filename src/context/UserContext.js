import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getUser, login, updateUserApi } from "../axios/userAxios";

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMesage] = useState("");

    useEffect(() => {
        registerUser();
        registerAdmin();
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

    const registerAdmin = async() => {
        const admin  = {
            "username": "kenny",
            "password": "123"
        }

        const {data} = await login(admin);
        localStorage.setItem("tokenAdmin", data.data.token);
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const updateUser = async(oldPassword) => {
        const userInput = {
            username: user.username,
            password: user.password,
            email: user.email,
            avatar: user.avatar,
            id: user.id,
            roleId: user.roleId,
            oldPassword
        }
        const {data} = await updateUserApi(userInput);
        if(data.data.token){
            localStorage.setItem('token', JSON.stringify(data.data.token));
        }
        else {
            
            setErrorMesage(data.data.message);
        }

    }

    return (
        <UserContext.Provider
            value={{
                user,
                errorMessage,
                setUser,
                registerUser,
                logout,
                updateUser,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);