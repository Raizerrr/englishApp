import classNames from "classnames/bind";
import Style from "../../pages/Learn/learn.module.scss";
import { useCourseContext } from "../../context/CourseContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(Style);
export const BlockLearnPage = ({block, index, level}) => {
    const [lessons, setLessons] = useState([]);
    const {getLessonsByBlockId} = useCourseContext();
    const {checkProgressOfPlayer, player} = useUserContext();
    
    const navigate = useNavigate();

    useEffect(() => {
        setLessons(getLessonsByBlockId(block.id));
    }, []);


    const handleClickLesson = (e, lessonNumber) => {
        e.preventDefault();
        const account = localStorage.getItem("account");
        
        navigate(`/lesson/lesson${account===null?1:player?.currentLevel}/read/${lessonNumber}`);
    }


    return (
        <div className="col-12">
            <div className={cx("course-section", "mb-5", "mt-3")}>
              <div
                className={cx(
                  "bange-container",
                  "d-flex",
                  "justify-content-center"
                )}
              >
                <div className={cx("bange", "green-bange", "w-100")}>
                  <h1 className={cx("section-title")}>Gate {index}</h1>
                  <p className={cx("section-desc")}>
                    {block?.title}
                  </p>
                </div>
              </div>

              <div
                className={cx(
                  "row",
                  "align-items-center",

                  "py-5",
                  "px-3"
                )}
              >
                {lessons?.map((lesson, lessonIndex) => (
                    <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                    <button
                        className={cx(
                        checkProgressOfPlayer(lessonIndex, index) || lessonIndex===0?"green-button-active":"lesson-disable",
                        "button-to-get-in-lesson",
                        "lesson-active",
                        "my-3",
                        "position-relative"
                        )}
                        onClick={e => handleClickLesson(e, index+"."+lessonIndex)}
                        disabled={checkProgressOfPlayer(lessonIndex, index) || lessonIndex===0?false: true}
                    >
                        <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                        alt=""
                        />
                    </button>
                    </div>
                ))}
               
              </div>
            </div>
          </div>
    )
}