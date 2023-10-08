import axios from "axios"

const API = axios.create({baseURL: "http://localhost:8870/api"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem("token")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;
    }
    return req;
})


// Authentication
export const login = (formValue) => API.post("/user/checklogin", formValue);
export const register = (formValue) => API.post("/user/insertuser", formValue);