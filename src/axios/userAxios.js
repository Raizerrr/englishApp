import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8870/api"});
const APICourse = axios.create({baseURL: "http://localhost:8871/api"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    }
    return req;
})

APICourse.interceptors.request.use((req) => {
    if(localStorage.getItem("tokenAdmin")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("tokenAdmin"))}`;
    }
    return req;
})


// Authentication
export const login = (formValue) => API.post("/user/checklogin", formValue);
export const register = (formValue) => API.post("/user/insertuser", formValue);
export const getUser = () => API.get("/user/getUser");
export const getPlayer = (language) => API.get(`/player/getplayer/${language}`);    
export const getStreaks = (language) =>  API.get(`/streak/getstreak/${language}`);
export const updateUserApi = (formValue) => API.put("/user/updateUser", formValue);
export const updatePlayerApi = (player) => API.put("/player/updatePlayer", player);
export const getFriend = (userId) => API.get(`/friend/getallfriend/${userId}`);
export const getUserExceptUserId = () => API.get(`/user/getUserExceptUserId`);
export const addFriend = (formValue) => API.post('/friend/insertfriend', formValue);
export const getLeaderBoard = () => API.get("/player/getRanks");
export const createNewStreak = (formValue) => API.post("/streak/insertstreak", formValue);
export const checkRunningStreak = (formValue, language) => API.put(`/streak/checkStreak/${language}`, formValue);   













// For course admin
export const getQuestions = () => APICourse.get("/question");
export const getTest = (testType) => APICourse.get(`/test/deploy/${testType}`);
export const getCourse = (title) => APICourse.get(`/course/getCourse/${title}`);
export const getTasksByLevelAndType = (level, taskType) => APICourse.get(`/task/getTasks/${level}/${taskType}`);