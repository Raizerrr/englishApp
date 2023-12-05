import { createContext, useContext, useEffect, useState } from "react";
import { createNewStreak, getAnswersByChatGPT, getRandomTest, getTest } from "../axios/userAxios";
import { useNavigate } from "react-router";
import { useUserContext } from "./UserContext";
const TestContext = createContext();

// Initial a test for deploy random question in this course for basic test
const initialTest =  {
    title: "Bài thực hành cơ bản của khóa học",
    description: "Chúng ta hãy ôn lại những bài học mà ta đã học qua dưới dạng các bài test",
    questionAmount: "random",
    interval: "60"
}

export const TestProvider = ({children}) => {
    const [questions, setQuestions] = useState(() => {
        const questionsStorage = JSON.parse(localStorage.getItem("questions"));
        return questionsStorage===null?[]:questionsStorage;
    });
    const [testDetail, setTestDetail] = useState(() => {
        const testDetailStorage = JSON.parse(localStorage.getItem("testDetail"));
        return testDetailStorage;
    });
    const [questionNumber, setQuestionNumber] = useState(() => {
        const questionNumberStorage = JSON.parse(localStorage.getItem("questionNumber"));
        return questionNumberStorage===null?0:questionNumberStorage;
    });
    const [answerQuestion, setAnswerQuestion] = useState(() => {
        const answerQuestionStorage = JSON.parse(localStorage.getItem("answerQuestion"));
        return answerQuestionStorage===null?[]:answerQuestionStorage;
    });

    const [skippedQuestions, setSkippedQuestions] = useState(() => {
        const skippedQuestionsStorage = JSON.parse(localStorage.getItem("skippedQuestions"));
        return skippedQuestionsStorage===null?[]:skippedQuestionsStorage;
    });

    const [score, setScore] = useState(() => {
        const scoreStorage = JSON.parse(localStorage.getItem("score"));
        return scoreStorage===null?0:scoreStorage;
    });
    const [exp, setExp] = useState(() => {
        const expStorage = JSON.parse(localStorage.getItem("exp"));
        return expStorage===null?0:expStorage;
    });

    const [skippedQuestionNumber, setSkippedQuestionNumber] = useState(() => {
        const skippedQuestionNumberStorage = JSON.parse(localStorage.getItem("skippedQuestionNumber"));
        return skippedQuestionNumberStorage===null?0:skippedQuestionNumberStorage;
    });
    const [answers, setAnswers] = useState(() => {
        const answersStorage = JSON.parse(localStorage.getItem("answers"));
        return answersStorage===null?[]:answersStorage;
    })
    const [chosenAnswers, setChosenAnswers] = useState(() => {
        const chosenAnswerStorage = JSON.parse(localStorage.getItem("chosenAnswers"));
        return chosenAnswerStorage===null?[]:chosenAnswerStorage;
    })
    const [directPopup, setDirectPopup] = useState(""); 
    const [loading, setLoading] = useState();
    
    const navigate = useNavigate();
    const {updateCurrentLevel, player, updatePlayer} = useUserContext();




    const getTestByType = async(testType, testId) => {
        let questionsStorage = JSON.parse(localStorage.getItem("questions"));
        let testDetailStorage = JSON.parse(localStorage.getItem("testDetail"));
        let questionNumberStorage = JSON.parse(localStorage.getItem("questionNumber"));
        let answerQuestionStorage = JSON.parse(localStorage.getItem("answerQuestion"));
        let skippedQuestionsStorage = JSON.parse(localStorage.getItem("skippedQuestions"));
        let skippedQuestionNumberStorage = JSON.parse(localStorage.getItem("skippedQuestionNumber"));
        const checked = questionNumberStorage === null && 
                        testDetailStorage === null && 
                        questionsStorage === null &&
                        answerQuestionStorage === null;
        if(checked) {
            
            
            if(testType==="randomTest" || testType==="entryTest"){
                const {data} = await getRandomTest(testId);
                testDetailStorage = initialTest;
                questionsStorage = data?.data?.questions;
            }
            else {
                const {data} = await getTest(testId);
                questionsStorage = data?.data;
                testDetailStorage = {};
            }
            questionNumberStorage = 0;
            answerQuestionStorage = [];
            skippedQuestionsStorage = [];
            skippedQuestionNumberStorage = 0;
        }


        setQuestions(questionsStorage);
        setTestDetail(testDetailStorage);
        setQuestionNumber(questionNumberStorage);
        setAnswerQuestion(answerQuestionStorage);
        setSkippedQuestions(skippedQuestionsStorage);
        setSkippedQuestionNumber(skippedQuestionNumberStorage);

                
        localStorage.setItem("questions", JSON.stringify(questionsStorage));
        localStorage.setItem("testDetail", JSON.stringify(testDetailStorage));
        localStorage.setItem("answerQuestion", JSON.stringify(answerQuestionStorage));
        localStorage.setItem("skippedQuestions", JSON.stringify(skippedQuestionsStorage));
        localStorage.setItem("questionNumber", questionNumberStorage);
        localStorage.setItem("skippedQuestionNumber", skippedQuestionNumberStorage);
    }

    const determineLevel = () => {
        const scoreTotal = questions?.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.score;
          }, 0);
        const percent = Math.floor(score/scoreTotal*100);
        return Math.floor(percent/20);
    }

    const getQuestion = async(testype, playerId, funcShow) => {
        if(questionNumber > questions?.length || (questions[questionNumber] === undefined && questionNumber !== 0)) {
            
            if(skippedQuestions?.length === 0 || skippedQuestionNumber===skippedQuestions?.length) {

                navigate(`/lesson/complete/normal/${testype}`);
    
                const scoreTotal = questions?.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue.score;
                  }, 0);
                if(score/scoreTotal>75){
                    updateCurrentLevel(testype);    
                }
                if(JSON.parse(localStorage.getItem("account"))?.level && !player?.userId){
                    const account = {
                        currentCourse: null,
                        currentBlock: null,
                        currentLesson: null,
                        level: determineLevel()+1
                    }
                    localStorage.setItem("account", JSON.stringify(account));
                }
                if(player?.id){
                    player.expPoint += 10;
                    await updatePlayer(player);
                    createNewStreakItem(playerId);
                }
                else {
                    const account = JSON.parse(localStorage.getItem("acount"));
                    if(account?.expoint){

                        account.expPoint += 10;
                    }
                    else {
                        account.expPoint = 10;
                    }
                    localStorage.setItem("acount", JSON.stringify(account));
                }
            }

            else if(skippedQuestionNumber===0) {
                setDirectPopup("skipped");
                funcShow();
                return skippedQuestions[skippedQuestionNumber];
            }
            else{
                saveTestDetailInLocalStorage();
                return skippedQuestions[skippedQuestionNumber];
            }
        }
        return questions[questionNumber];
    };

    const createNewStreakItem = async(playerId) => {
        await createNewStreak({playerId});
    }

    const saveTestDetailInLocalStorage = (refresh) => {
        let questionCount = questionNumber+1;
        if(refresh) {
            questionCount -= 1;
        }


        localStorage.setItem("questions", JSON.stringify(questions));
        localStorage.setItem("testDetail", JSON.stringify(testDetail));
        localStorage.setItem("answerQuestion", JSON.stringify(answerQuestion));
        localStorage.setItem("skippedQuestions", JSON.stringify(skippedQuestions));
        localStorage.setItem("skippedQuestionNumber", skippedQuestionNumber);
        localStorage.setItem("questionNumber", questionCount);
        localStorage.setItem("score", score);
        localStorage.setItem("exp", exp);
        localStorage.setItem("chosenAnswers", JSON.stringify(chosenAnswers));
    };

    const resetAllCachingTestDetails = () => {
        localStorage.removeItem("questions");
        localStorage.removeItem("testDetail");
        localStorage.removeItem("questionNumber");
        localStorage.removeItem("answerQuestion");
        localStorage.removeItem("score");
        localStorage.removeItem("exp");
        localStorage.removeItem("skippedQuestions");
        localStorage.removeItem("skippedQuestionNumber")
        localStorage.removeItem("chosenAnswers");
        localStorage.removeItem("answers");
        setQuestions([]);
        setSkippedQuestions([]);
        setAnswerQuestion([]);
        setQuestionNumber(0);
        setScore(0);
        setExp(0);
        setTestDetail({});
        setSkippedQuestionNumber(0);
        setChosenAnswers([]);
    }


    const getAnswers = async() => {
        const answersStorage = JSON.parse(localStorage.getItem("answers"));
        setLoading(false);
        if(answersStorage===null || answersStorage.length < 2){
            const {data} = await getAnswersByChatGPT(answerQuestion);
            setAnswers(data.data);
            localStorage.setItem("answers", JSON.stringify(data.data));
        }
        else {
            setAnswers(answers);
        }
        setLoading(true);

    }

    

    return (
        <TestContext.Provider value={{
            testDetail,
            questionNumber,
            testDetail,
            score,
            loading,
            exp,
            answerQuestion,
            questions,
            questionsTotal: questions?.length,
            skippedQuestionsTotal: skippedQuestions?.length,
            scoreTotalOfTest: questions?.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.score;
              }, 0),
            skippedQuestions,
            directPopup,
            skippedQuestionNumber,
            chosenAnswers,
            answers,
            setTestDetail,
            setChosenAnswers,
            setSkippedQuestionNumber,
            setDirectPopup,
            setScore,
            setExp,
            setAnswerQuestion,
            getQuestion,
            setQuestionNumber,
            getTestByType,
            saveTestDetailInLocalStorage,
            resetAllCachingTestDetails,
            setSkippedQuestions,
            getAnswers
        }}>
            {children}
        </TestContext.Provider>
    )
}

export const useTestContext = () => useContext(TestContext);