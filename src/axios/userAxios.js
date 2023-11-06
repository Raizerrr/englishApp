import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8870/api"});
const APICourse = axios.create({baseURL: "http://localhost:8871/api"});

API.interceptors.request.use((req) => {
    if(sessionStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    }
    return req;
})

APICourse.interceptors.request.use((req) => {
    if(localStorage.getItem("tokenAdmin")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    }
    return req;
})


// Authentication
export const login = (formValue) => API.post("/user/checklogin", formValue);
export const register = (formValue) => API.post("/user/insertuser", formValue);
export const getUser = () => API.get("/user/getUser");
export const updateUserApi = (formValue) => API.put("/user/updateUser", formValue);













// For course admin
export const getQuestions = () => APICourse.get("/question");
export const getTest = (testType) => APICourse.get(`/test/deploy/${testType}`);