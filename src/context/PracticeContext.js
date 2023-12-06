import { createContext, useContext, useState } from "react";
import { getPracticesByCourseId } from "../axios/userAxios";

const PracticeContext = createContext();

export const PracticeProvider = ({children}) => {
    const [practices, setPractices] = useState([]);

    const getPractices = async(courseId) => {
        const {data} = await getPracticesByCourseId(courseId);
        setPractices(data?.data)
    }
    return (
        <PracticeContext.Provider
            value={{
                practices,
                getPractices
            }}
        >
            {children}
        </PracticeContext.Provider>
    )
}

export const usePracticeContext = () => useContext(PracticeContext);