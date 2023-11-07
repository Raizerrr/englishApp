import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getPlayer, getStreaks, getUser, login, updateUserApi } from "../axios/userAxios";

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [player, setPlayer] = useState({});
    const [errorMessage, setErrorMesage] = useState("");
    const [streak, setStreak] = useState([]);
    const [hearts, setHearts] = useState(0);


    useEffect(() => {
        registerUser();
        registerAdmin();
        
    }, [])
    

    const registerUser = async() => {
        try {
            const {data} = await getUser();
            const playerData = await getPlayer("English");
            const streakData = await getStreaks("English");
            setUser(data.data);
            setPlayer(playerData.data.data);
            setHearts(playerData.data.data.heart)
            setStreak(streakData.data.data);
            
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
        localStorage.setItem("tokenAdmin", JSON.stringify(data.data.token));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    }

    const updatePlayer = async(player) => {
        try {
            const {data} = await updatePlayer(player);
            setPlayer(data.data);
        } catch (error) {
            localStorage.removeItem('token');
            setPlayer(null);
            setUser(null);
        }
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
                player,
                streakTotal: streak.length,
                hearts,
                setUser,
                updatePlayer,
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