import { createContext, useContext, useState } from "react";
import { getCourse } from "../axios/userAxios";

export const CourseContext = createContext();

export const CourseProvider = ({children}) => {
    const [course, setCourse] = useState();
    const [blocks, setBlocks] = useState();
    const [lessons, setLessons] = useState([]);


    const getLessonsAndBlocksAndLessons = async(level) => {
        const title = `Course level ${level}`;
        const {data} = await getCourse(title);

         
        setCourse(data.data.courseDetail);
        // get Blocks
        const lessonOfBlock = data.data.lessonOfBlock;
        let blocksArr = [];
        let lessonsArr = [];

        for (let i = 0 ; i < lessonOfBlock?.length; i++){
            blocksArr.push(lessonOfBlock[i].blockDetail);
            const lessonsItem = lessonOfBlock[i].lessons;
            lessonsArr = lessonsArr.concat(lessonsItem);
        }

        setBlocks(blocksArr);
        setLessons(lessonsArr);
    }

    const getLessonsByBlockId = (blockId) => {
        const lessonsByBlockId = lessons.filter(lesson => lesson.blockId === blockId);
        return lessonsByBlockId;
    }

    const checkOpenRank = (level) => {
        const levelArr = level?.split(".");
        if(levelArr) {
            if(levelArr[1] === "1") {
                return Number.parseInt(levelArr[2]);
            }

        }

        return null;
    }



    return (
        <CourseContext.Provider value={{
            blocks,
            course,
            getLessonsAndBlocksAndLessons,
            getLessonsByBlockId,
            checkOpenRank
        }}>
            {children}
        </CourseContext.Provider>
    )
}

export const useCourseContext = () => useContext(CourseContext);