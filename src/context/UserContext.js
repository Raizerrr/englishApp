import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { addFriend, getFriend, getPlayer, getStreaks, getUser, getUserExceptUserId, login, updateUserApi } from "../axios/userAxios";
import { useCourseContext } from "./CourseContext";

const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [player, setPlayer] = useState(null);
    const [errorMessage, setErrorMesage] = useState("");
    const [streak, setStreak] = useState([]);
    const [hearts, setHearts] = useState(0);
    const {getLessonsAndBlocksAndLessons} = useCourseContext();
    const [friends, setFriends] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        registerUser();
        registerAdmin();
    }, [])
    
    

    useEffect(() => {
        if(player !== null){
            getLessonsAndBlocksAndLessons(player.currentLevel);
        }
        else {
            const account = JSON.parse(localStorage.getItem("account"));
            getLessonsAndBlocksAndLessons(account?.level);
        }
    }, [player])

    const registerUser = async() => {
        try {
            const {data} = await getUser();
            const playerData = await getPlayer("English");
            const streakData = await getStreaks("English");
            const friendData = await getFriend(data.data.id);
            const usersData = await getUserExceptUserId(data.data.id);
            
            setUsers(usersData.data.data);
            setUser(data.data);
            setPlayer(playerData.data.data);
            setHearts(playerData.data.data.heart)
            setStreak(streakData.data.data);
            setFriends(friendData.data.data);
            
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

    const updateCurrentLevel = async(level) => {
        const updatedLevel = "."+player.currentLevel+level;
        console.log(updatedLevel);
        player.currentLevel = updatedLevel;
        await updatePlayer(player);
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

    const checkProgressOfPlayer = (lessonIndex, blockIndex) => {
        const currentLevel = player?.currentLevel+"";
        if(currentLevel?.indexOf(".") !== -1){
            const arr = currentLevel?.split(".");
            if(arr[1].match(""+blockIndex) && arr[2].match(""+lessonIndex)){
                return true;
            }
        }
        return false;
    }

    const addNewFriend = async(friendId) => {
        const {data} = await addFriend({userId: user?.id, friendId});
        console.log(data);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                errorMessage,
                player,
                streakTotal: streak.length,
                hearts,
                friends,
                users,
                setUser,
                updatePlayer,
                registerUser,
                logout,
                updateUser,
                checkProgressOfPlayer,
                updateCurrentLevel,
                addNewFriend
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);