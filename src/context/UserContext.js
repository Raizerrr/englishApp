import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { addFriend, checkTokenResetPasswordApi, getFriend, getLeaderBoard, getPlayer, getStreaks, getUser, getUserExceptUserId, login, sendEmailForResetPasswordApi, updatePlayerApi, updateUserApi } from "../axios/userAxios";
import { useCourseContext } from "./CourseContext";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [currentUserDetail, setCurrentUserDetail] = useState();
    const [player, setPlayer] = useState(null);
    const [errorMessage, setErrorMesage] = useState("");
    const [streak, setStreak] = useState([]);
    const [hearts, setHearts] = useState(0);
    const {getLessonsAndBlocksAndLessons} = useCourseContext();
    const [friends, setFriends] = useState([]);
    const [users, setUsers] = useState([]);
    const [ranks, setRanks] = useState([]);


    useEffect(() => {
        registerUser();
        registerAdmin();
    }, [])
    
    

    useEffect(() => {
        if(player !== null){
            getLessonsAndBlocksAndLessons(player.currentLevel);
            localStorage.removeItem("account");
        }
        else {
            const account = JSON.parse(localStorage.getItem("account"));
            if(account?.level) {
                getLessonsAndBlocksAndLessons(account?.level);
                
            }
            else {
                const newAccount = {
                    level: 1,
                    currentLesson: null,
                    currentBlock: null,
                    currentCourse: null,
                    hearts: 5,
                    score: 0,
                    streak: 0
                }
                localStorage.setItem("acount", JSON.stringify(newAccount));
                setHearts(newAccount.hearts);
                setPlayer(newAccount);
                setStreak(newAccount.streak);
                getLessonsAndBlocksAndLessons(1);
            }
        }
    }, [player])

    const registerUser = async() => {
        try {
            const {data} = await getUser();
            const playerData = await getPlayer("English");
            const streakData = await getStreaks("English");
            const ranksData = await getLeaderBoard();
            
            setRanks(ranksData.data.data);
            setUser(data.data);
            setCurrentUserDetail(data.data);
            setStreak(streakData.data.data);
            setPlayer(playerData.data.data);
            await getUsersByCondition(data.data.id);
            await getFriends(data.data.id);
            await updatePlayer(playerData.data.data);
        } catch (error) {
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    const getUsersByCondition = async(id) => {
        const usersData = await getUserExceptUserId(id);
        setUsers(usersData.data.data);
    }

    const getFriends = async(id) => {
        const friendData = await getFriend(id);
        setFriends(friendData.data.data);
    }


    const registerAdmin = async() => {
        const admin  = {
            "username": "kenny",
            "password": "123456"
        }

        const {data} = await login(admin);
        localStorage.setItem("tokenAdmin", JSON.stringify(data.data.token));
    }

    const logout = () => {
        setUser(null);
        setUser(null);
        setPlayer(null);
        setCurrentUserDetail(null);
        localStorage.removeItem("token");
        const account = JSON.parse(localStorage.getItem("account"));
        setPlayer(account);
        setUser(account);
    }

    const updateCurrentLevel = async(level) => {
        const updatedLevel = "."+player.currentLevel+level;
        console.log(updatedLevel);
        player.currentLevel = updatedLevel;
        await updatePlayer(player);
    }

    const updatePlayer = async(player) => {
        try {
            const {data} = await updatePlayerApi(player);
            setPlayer(data.data);
            setHearts(data.data.heart)
        } catch (error) {
            localStorage.removeItem('token');
            setPlayer(null);
            setUser(null);
        }
    }

    const updateUser = async(oldPassword, reset) => {
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
        if(data.data.token && reset == null){
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

    const checkChangeProperty = () => {
        return currentUserDetail?.username !== user?.username
                || currentUserDetail?.avatar !== user?.avatar
                || currentUserDetail?.email !== user?.email
                || currentUserDetail?.password !== user?.password;
    }

    const getRankOfCurrentPlayer = () => {
        
        for(let i = 0; i < ranks?.length; i++){
            if(ranks[i].playerId === player?.id) {
                return i+1;
            }
        }

        return "-";
    }


    const sendEmailForResetPassword = async(email) => {
        await sendEmailForResetPasswordApi({email});
    }

    const checkTokenWhenResetPassword = async(token) => {
        const {data} = await checkTokenResetPasswordApi(token);
        return data.data;
    }

    return (
        <UserContext.Provider
            value={{
                user,
                errorMessage,
                player,
                streakTotal: streak?.length,
                hearts,
                friends,
                users,
                ranks,
                setUser,
                updatePlayer,
                registerUser,
                logout,
                updateUser,
                setHearts,
                checkProgressOfPlayer,
                updateCurrentLevel,
                addNewFriend,
                checkChangeProperty,
                getRankOfCurrentPlayer,
                setUsers,
                getUsersByCondition,
                getFriends,
                sendEmailForResetPassword,
                checkTokenWhenResetPassword,
                setErrorMesage
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);