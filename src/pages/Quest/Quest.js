import classNames from "classnames/bind";
import Style from "./Quest.module.scss";
import { useTaskContext } from "../../context/TaskContext";
import { useEffect, useState } from "react";
import ExpEarningPopup from "../../component/Popup/ExpEarningPopup";

const cx = classNames.bind(Style);

function Quest() {

  const {dailyTask, getDailyTask} = useTaskContext();
  const [userTasks, setUserTasks] = useState({}); 
  const [show, setShow] = useState(false);


  useEffect(() => {
    getDailyTask();

    setUserTasks(JSON.parse(localStorage.getItem("task")));
  }, [])

  const ShowPopupHandle = () => {
    setShow(!show);
  };

  return (
    <div className="">
      <div className={cx("d-none", { ["show"]: show })}>
        <ExpEarningPopup ClicktoOpenPopup={ShowPopupHandle} />
      </div>
      <div
        className={cx(
          "container",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "flex-column"
        )}
      >
        <div className={cx("quest-container")}>
          <div className={cx("card", "quest-bange", "my-4", "p-3")}>
            <div className="card-body">
              <div className="row justify-content-center align-items-center">
                <div className="col-9">
                  <h1 className={cx("quest-bange-title", "my-3", "text-white")}>
                    Nhận thưởng khi xong nhiệm vụ!
                  </h1>
                  <p
                    className={cx(
                      "card-text",
                      "quest-bange-text",
                      "my-3",
                      "text-white"
                    )}
                  >
                    Hôm nay bạn đã hoàn thành 0 trên tổng số 3 nhiệm vụ.
                  </p>
                </div>
                <div className="col-3 p-3">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/e07e459ea20aef826b42caa71498d85f.svg"
                    className="w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className={cx("daily-quest-title", "my-3")}>
            Nhiệm vụ hằng ngày
          </h1>
          <div className={cx("dally-quest-container")}>
            <ul className={cx("quest-list")}>
              {dailyTask?.map(task => (
                <li className={cx("quest-list-item", "py-3")}>
                  <div className="row">
                    <div className="col-2">

                      
                      <img
                        src={task?.image}
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-10">
                      <h2 className={cx("list-item-title", "my-3")}>
                        {task?.title}
                      </h2>
                      <div style={{display: "flex"}}>

                        <div
                          className={cx(
                            "quest-progess-bar-complete",
                            "position-relative",
                            "my-3"
                          )}
                          style={{width: `${Math.floor(userTasks[task?.id]/task?.completeExpPoint*100)}%`}}
                        >
                          
                        </div>
                        <div
                          className={cx(
                            "quest-progess-bar",
                            "position-relative",
                            "my-3"
                          )}
                          style={{width: `${100-Math.floor(userTasks[task?.id]/task?.completeExpPoint*100)}%`}}
                        >
                          
                        </div>
                        <button
                          className={cx(
                            "position-absolute",
                            "receive-exp-when-complete-btn"
                          )}
                          onClick={() => ShowPopupHandle()}
                        >
                          <img
                            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/ca23da57929a3144934ee0571a2f44e9.svg"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quest;
