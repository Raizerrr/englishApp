import classNames from "classnames/bind";
import Style from "./LeaderBoard.module.scss";
import { useCourseContext } from "../../context/CourseContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function LeaderBoard() {
  const {checkOpenRank} = useCourseContext();

  return (
    <div>
      <div className="container justify-content-center align-items-center d-flex">
        <div className={cx("leaderboard-wrapper", "my-4", "position-relative")}>
          <div className=" justify-content-center align-items-center d-flex">
            <div className={cx("leaderboard-logo")}>
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          {6-checkOpenRank()>0 && (
            <>
              <div className={cx("leaderboard-title", "text-center", "py-3")}>
                <h1>Mở khóa Bảng xếp hạng!</h1>
              </div>
              <div className={cx("leaderboard-desc", "text-center")}>
                <p>Hoàn thành thêm {6-checkOpenRank()>0?6-checkOpenRank():6} bài học để bắt đầu thi đua</p>
              </div>
            </>
          )}


          <div className={cx("d-flex", "justify-content-center", "mb-5")}>
            <Link
              to={"/"}
              className={cx("d-none", "leaderboard-start-btn", "my-3")}
            >
              Bắt Đầu Học
            </Link>

            <Link
              to={"/signin"}
              className={cx("leaderboard-start-btn", "my-3")}
            >
              Đăng Nhập
            </Link>
          </div>

          {/* <div className={cx("user-background-show")}>
            <img
              className="pt-4 px-3"
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/66cc61ca4afdfeb838aafa9828c4be07.svg"
              alt=""
            />
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/57708658a81384750325296995face91.svg"
              alt=""
            />
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/25acac0956f9ff91bc9fd184000da9aa.svg"
              alt=""
            />
          </div> */}
          <div
            className={cx(
              "leaderboard-container",
              "pb-5",
              "rounded-5",
              "position-relative"
            )}
          >
            <h1 className={cx("leaderboard-title", "p-2")}>
              Top kn trong Tuần
            </h1>
            <div className={cx("leaderboard", "d-flex", "flex-column", "py-2")}>
              <div className={cx("leaderboard-list", "px-3")}>
                <div
                  className={cx(
                    "leaderboard-item",
                    "px-5",
                    "py-3",
                    "rounded-4",
                    "top-1"
                  )}
                >
                  <div className="row align-items-center">
                    <div className={cx("col-1")}>
                      <div className={cx("leaderboard-number-on")}>1</div>
                    </div>
                    <div className={cx("col-9")}>
                      <div className="row align-items-center">
                        <div
                          className={cx(
                            "col-2",
                            "d-flex",
                            "justify-content-center"
                          )}
                        >
                          <div
                            className={cx("user-avatar-leaderboard-container")}
                          >
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                              alt=""
                              className={cx(
                                "user-avatar",
                                "rounded-circle",
                                "w-100",
                                "h-100"
                              )}
                            />
                          </div>
                        </div>
                        <div className={cx("col-10")}>
                          <div
                            className={cx("user-name-leaderboard-container")}
                          >
                            Tricky
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("col-2")}>
                      <div className={cx("user-exp-leaderboard-container")}>
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "leaderboard-item",
                    "px-5",
                    "py-3",
                    "rounded-4",
                    "top-2"
                  )}
                >
                  <div className="row align-items-center">
                    <div className={cx("col-1")}>
                      <div className={cx("leaderboard-number-on")}>2</div>
                    </div>
                    <div className={cx("col-9")}>
                      <div className="row align-items-center">
                        <div
                          className={cx(
                            "col-2",
                            "d-flex",
                            "justify-content-center"
                          )}
                        >
                          <div
                            className={cx("user-avatar-leaderboard-container")}
                          >
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                              alt=""
                              className={cx(
                                "user-avatar",
                                "rounded-circle",
                                "w-100",
                                "h-100"
                              )}
                            />
                          </div>
                        </div>
                        <div className={cx("col-10")}>
                          <div
                            className={cx("user-name-leaderboard-container")}
                          >
                            Tricky
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("col-2")}>
                      <div className={cx("user-exp-leaderboard-container")}>
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "leaderboard-item",
                    "px-5",
                    "py-3",
                    "rounded-4",
                    "top-3"
                  )}
                >
                  <div className="row align-items-center">
                    <div className={cx("col-1")}>
                      <div className={cx("leaderboard-number-on")}>3</div>
                    </div>
                    <div className={cx("col-9")}>
                      <div className="row align-items-center">
                        <div
                          className={cx(
                            "col-2",
                            "d-flex",
                            "justify-content-center"
                          )}
                        >
                          <div
                            className={cx("user-avatar-leaderboard-container")}
                          >
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                              alt=""
                              className={cx(
                                "user-avatar",
                                "rounded-circle",
                                "w-100",
                                "h-100"
                              )}
                            />
                          </div>
                        </div>
                        <div className={cx("col-10")}>
                          <div
                            className={cx("user-name-leaderboard-container")}
                          >
                            Tricky
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("col-2")}>
                      <div className={cx("user-exp-leaderboard-container")}>
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "leaderboard-item",
                    "px-5",
                    "py-3",
                    "rounded-4",
                    "this-user-in-leaderboard-item"
                  )}
                >
                  <div className="row align-items-center">
                    <div className={cx("col-1")}>
                      <div className={cx("leaderboard-number-on")}>4</div>
                    </div>
                    <div className={cx("col-9")}>
                      <div className="row align-items-center">
                        <div
                          className={cx(
                            "col-2",
                            "d-flex",
                            "justify-content-center"
                          )}
                        >
                          <div
                            className={cx("user-avatar-leaderboard-container")}
                          >
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                              alt=""
                              className={cx(
                                "user-avatar",
                                "rounded-circle",
                                "w-100",
                                "h-100"
                              )}
                            />
                          </div>
                        </div>
                        <div className={cx("col-10")}>
                          <div
                            className={cx("user-name-leaderboard-container")}
                          >
                            Phu le
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("col-2")}>
                      <div className={cx("user-exp-leaderboard-container")}>
                        1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("this-user")}>
            <div className={cx("leaderboard-item", "py-4", "rounded-4")}>
              <div className="row align-items-center w-100 px-5">
                <div className={cx("col-1")}>
                  <div className={cx("leaderboard-number-on")}>
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                </div>
                <div className={cx("col-9")}>
                  <div className="row align-items-center">
                    <div
                      className={cx(
                        "col-2",
                        "d-flex",
                        "justify-content-center"
                      )}
                    >
                      <div className={cx("user-avatar-leaderboard-container")}>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          alt=""
                          className={cx(
                            "user-avatar",
                            "rounded-circle",
                            "w-100",
                            "h-100"
                          )}
                        />
                      </div>
                    </div>
                    <div className={cx("col-10")}>
                      <div className={cx("user-name-leaderboard-container")}>
                        Phu le
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("col-2")}>
                  <div className={cx("user-exp-leaderboard-container")}>
                    1 Kn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
