import { createContext, useContext, useEffect, useState } from "react";
import { getTest } from "../axios/userAxios";
import { useNavigate } from "react-router";
import { useUserContext } from "./UserContext";

const TestContext = createContext();
export const TestProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);
    const [testDetail, setTestDetail] = useState();
    const [questionNumber, setQuestionNumber] = useState(0);
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [exp, setExp] = useState(0);
    const [answerQuestion, setAnswerQuestion] = useState([]);
    const {updateCurrentLevel} = useUserContext();

    useEffect(() => {
        if(!(localStorage.getItem("token") || localStorage.getItem("account"))){
            navigate("/lesson/entry/read/normal");
        };
    }, [])

    

    const getTestByType = async(testType) => {
        const {data} = await getTest(testType);
        setQuestions(data?.data?.questions);
        setTestDetail(data?.data?.testDetails);
    }

    const determineLevel = () => {
        const scoreTotal = questions?.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.score;
          }, 0);
        const percent = Math.floor(score/scoreTotal*100);
        return Math.floor(percent/20);
    }

    const getQuestion = (testype) => {
        if(questionNumber > questions?.length || (questions[questionNumber] === undefined && questionNumber !== 0)) {
            navigate(`/lesson/complete/normal/${testype}`);

            const scoreTotal = questions?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.score;
              }, 0);

            if(score/scoreTotal>75){
                updateCurrentLevel(testype);    
            }

            const account = {
                currentCourse: null,
                currentBlock: null,
                currentLesson: null,
                level: determineLevel()+1
            }
            localStorage.setItem("account", JSON.stringify(account));
        }
        return questions[questionNumber];
    };
    

    return (
        <TestContext.Provider value={{
            testDetail,
            questionNumber,
            testDetail,
            score,
            exp,
            answerQuestion,
            questionsTotal: questions?.length,
            scoreTotalOfTest: questions?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.score;
              }, 0),
            setScore,
            setExp,
            setAnswerQuestion,
            getQuestion,
            setQuestionNumber,
            getTestByType
        }}>
            {children}
        </TestContext.Provider>
    )
}

export const useTestContext = () => useContext(TestContext);