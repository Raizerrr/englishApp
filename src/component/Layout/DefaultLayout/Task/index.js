import classNames from "classnames/bind";
import Style from "./Task.module.scss";
import { useCourseContext } from "../../../../context/CourseContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserEnviroment from "../../LayoutsComponent/UserEnviroment";
import { useTaskContext } from "../../../../context/TaskContext";
import { useUserContext } from "../../../../context/UserContext";
import { useEffect, useState } from "react";

const cx = classNames.bind(Style);

const contents =[
                [
                  "Thử Super Miễn Phí", 
                  "Không quảng cáo, bài luyện tập cá nhân hóa, và không giới \nhạn số lần chinh phục Huyền thoại!",
                  "Thử 2 tuần miễn phí",
                  "/premium"
                ],
                [
                  "Làm Bài Test Đầu Vào",
                  "Làm bài test đầu vào để chúng tôi có thể xác định đúng trình độ của bạn và đưa ra các bài học tốt nhất cho bạn",
                  "Tham gia ngay",
                  "/lesson/entry/read/normal"
                ]
              ]

function Task() {
  const {checkOpenRank} = useCourseContext();
  const {dailyTask} = useTaskContext();
  const {user} = useUserContext();
  const [checkedUser, setCheckedUser] = useState(1);

  useEffect(() => {
    const account = JSON.parse(localStorage.getItem("account"));
    if(user?.id) {
      setCheckedUser(0);
    }
    else if(account?.level){
      setCheckedUser(2);
    }
  }, [user])
  
  return (
    <div>
      <div className="container my-4">
        {/*  */}
        <div className={cx("task-container")}>

          <UserEnviroment />
          {/*  */}
          {checkedUser !== 2 && (
            <div
              className={cx(
                "card",
                "premium-card-container",
                "rounded-4",
                "p-3",
                "my-5"
              )}
            >
              <div className="card-body">
                <h5 className={cx("premium-card-title")}>{contents[checkedUser][0]}</h5>
                <div className={cx("row", "my-4")}>
                  <div className="col-8">
                    <p
                      className={cx(
                        "premium-card-text",
                        "my-4",
                        "align-items-center"
                      )}
                    >
                      {contents[checkedUser][1]}
                    </p>
                  </div>
                  <div className="col-4">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/e07e459ea20aef826b42caa71498d85f.svg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>


                <Link
                  to={contents[checkedUser][3]}
                  className={cx("premium-submit-btn", "btn", "rounded-4")}
                >
                  {contents[checkedUser][2]}
                </Link>
              </div>
            </div>

          )}
          {checkOpenRank !== null && checkedUser === 0 && (
            <div
              className={cx(
                "card",
                "premium-card-container",
                "rounded-4",
                "p-3",
                "mb-5"
              )}
            >
              <div className="card-body">
                <h5 className={cx("premium-card-title")}>
                  Mở khóa Bảng xếp hạng!
                </h5>
                <div className={cx("row", "my-4", "align-items-center")}>
                  <div className="col-3">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className={cx("premium-card-text", "my-4")}>
                      Hoàn thành thêm {6-checkOpenRank()} bài học để bắt đầu thi đua
                    </p>
                  </div>
                </div>
              </div>
            </div>

          )}
          <div
            className={cx(
              "card",
              "premium-card-container",
              "rounded-4",
              "p-3",
              "mb-5"
            )}
          >
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <h5 className={cx("premium-card-title")}>
                    Nhiệm vụ hằng ngày
                  </h5>
                </div>
                <div className="col-4">
                  <a href="/quest">Xem tất cả</a>
                </div>
              </div>
              {dailyTask?.map(task => (
                <div className={cx("row", "my-4", "align-items-center")}>
                  <div className="col-3">
                    <img
                      src={task?.image}
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className={cx("premium-card-text", "my-4")}>
                      {task?.title} (0/{task?.completeExpPoint})
                    </p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
