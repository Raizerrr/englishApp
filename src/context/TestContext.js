import { createContext, useContext, useState } from "react";
import { getTest } from "../axios/userAxios";
import { useNavigate } from "react-router";

const TestContext = createContext();
export const TestProvider = ({children}) => {
    const [questions, setQuestions] = useState([]);
    const [testDetail, setTestDetail] = useState();
    const [questionNumber, setQuestionNumber] = useState(0);
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const [exp, setExp] = useState(0);
    const [answerQuestion, setAnswerQuestion] = useState([]);
    const [hearts, setHearts] = useState(5);

    

    const getTestByType = async(testType) => {
        const {data} = await getTest(testType);
        setQuestions(data?.data?.questions);
        setTestDetail(data?.data?.testDetails);
    }

    const getQuestion = () => {
        if(questionNumber > questions?.length) {
            navigate("/lesson/complete/normal");
        }
        return questions[questionNumber];
    }

    return (
        <TestContext.Provider value={{
            testDetail,
            questionNumber,
            testDetail,
            score,
            exp,
            answerQuestion,
            hearts,
            questionsTotal: questions?.length,
            scoreTotalOfTest: questions?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.score;
              }, 0),
            setHearts,
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