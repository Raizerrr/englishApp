import { createContext, useContext, useState } from "react";
import { getTasksByLevelAndType } from "../axios/userAxios";

const TaskContext = createContext();
export const TaskProvider = ({children}) => {
    const [dailyTask, setDailyTask] = useState([]);


    const getDailyTask = async() => {
        const {data} = await getTasksByLevelAndType(0, "daily");
        setDailyTask(data.data);

        const savedTasks = data.data?.map(task => task?.id);

        const userTasksCompletement = {};
        
        for(let i = 0; i < savedTasks?.length; i++){
            userTasksCompletement[savedTasks[i]] = 0;
        }
        
        localStorage.setItem("task", JSON.stringify(userTasksCompletement));
    }

    return (
        <TaskContext.Provider
            value={{
                dailyTask,
                getDailyTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}
export const useTaskContext = () => useContext(TaskContext);