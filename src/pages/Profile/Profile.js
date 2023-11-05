import classNames from "classnames/bind";
import Style from "./Profile.module.scss";

const cx = classNames.bind(Style);

function Profile() {
  return (
    <div
      className={cx(
        "container",
        "d-flex",
        "flex-column",
        "justify-content-center",
        "align-items-center",
        "my-3"
      )}
    >
      <div className={cx("profile-container", "my-3")}>
        <div className={cx("user-infor-section", "my-3", "pb-4")}>
          <div className="row">
            <div className="col-9">
              <h1 className={cx("user-name")}>Phú Lê</h1>
              <small className={cx("user-nickname")}>phule2211</small>
              <p className={cx("date-to-join", "my-3")}>
                Đã tham gia vào tháng 8 2023
              </p>
              <p className={cx("folower", "my-3")}>
                Đang theo dõi 0 / 0 Người theo dõi
              </p>
            </div>
            <div className="col-3">
              <div
                className={cx("avatar-img-container", "w-100", "h-100", "px-3")}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                  alt=""
                  className={cx(
                    "user-avatar",
                    "rounded-circle",
                    "w-100",
                    "h-100",
                    "p-3"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("process-section", "mt-5")}>
          <h1 className={cx("process-section-title", "my-2")}>Thống Kê</h1>
          <div className="row">
            <div className={cx("col-6", "my-3")}>
              <div
                className={cx(
                  "process-display-container",
                  "py-3",
                  "px-3",
                  "px-md-5",
                  "rounded-5"
                )}
              >
                <div className={cx("process-display", "row")}>
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
                        alt=""
                        className={cx("process-icon")}
                      />
                    </div>
                    <div className="col-10">
                      <h1
                        className={cx(
                          "process-count-display",
                          "disabled-process"
                        )}
                      >
                        0
                      </h1>
                      <h1 className={cx("process-name-display")}>
                        Ngày Streak
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-6", "my-3")}>
              <div
                className={cx(
                  "process-display-container",
                  "py-3",
                  "px-3",
                  "px-md-5",
                  "rounded-5"
                )}
              >
                <div className={cx("process-display", "row")}>
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg"
                        alt=""
                        className={cx("process-icon")}
                      />
                    </div>
                    <div className="col-10">
                      <h1 className={cx("process-count-display")}>178</h1>
                      <h1 className={cx("process-name-display")}>
                        Tổng điểm KN
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-6", "my-3")}>
              <div
                className={cx(
                  "process-display-container",
                  "py-3",
                  "px-3",
                  "px-md-5",
                  "rounded-5"
                )}
              >
                <div className={cx("process-display", "row")}>
                  <div className="col-2 d-flex justify-content-center ">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/1b4fb092de75e4ecefd8e92f10b4ddd2.svg"
                      alt=""
                      className={cx("process-icon")}
                    />
                  </div>
                  <div className="col-10">
                    <h1
                      className={cx(
                        "process-count-display",
                        "disabled-process"
                      )}
                    >
                      Chưa có xếp hạng
                    </h1>
                    <h1 className={cx("process-name-display")}>
                      Giải đấu hiện tại
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-6", "my-3")}>
              <div
                className={cx(
                  "process-display-container",
                  "py-3",
                  "px-3",
                  "px-md-5",
                  "rounded-5"
                )}
              >
                <div className={cx("process-display", "row")}>
                  <div className="row ">
                    <div className="col-2 d-flex justify-content-center">
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/105f8a43d07cdbbe393f9588eba784f8.svg"
                        alt=""
                        className={cx("process-icon")}
                      />
                    </div>
                    <div className="col-10">
                      <h1
                        className={cx(
                          "process-count-display",
                          "disabled-process"
                        )}
                      >
                        0
                      </h1>
                      <h1 className={cx("process-name-display")}>
                        Số lần đạt top 3
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("archievment-section", "mt-5")}>
          <h1 className={cx("achievment-section-title")}>Thành Tích</h1>
          <div className={cx("achievment-container")}>
            <ul className={cx("achievment-list", "mt-3")}>
              {/* achievment */}
              <li className={cx("achievment-item")}>
                <div className={cx("row")}>
                  <div className={cx("col-2")}>
                    <div className={cx("achievment-banner-container")}>
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/achievements/217492e7baf0961abdd2ddfb5881e7f9.svg"
                        className="w-100 p-3 h-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={cx("col-10", "py-3", "px-5")}>
                    <h1 className={cx("achievment-title", "py-4")}>Lửa rừng</h1>
                    <div
                      className={cx(
                        "progess-bar",
                        "d-flex",
                        "justify-content-center",
                        "align-items-center",
                        "px-3"
                      )}
                    >
                      <span>0 / 0</span>
                    </div>
                    <p className={cx("achievment-require", "py-3")}>
                      Đạt chuỗi 3 ngày streak
                    </p>
                  </div>
                </div>
              </li>
              {/* achievment */}
              {/* achievment */}
              <li className={cx("achievment-item")}>
                <div className={cx("row")}>
                  <div className={cx("col-2")}>
                    <div className={cx("achievment-banner-container")}>
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/achievements/217492e7baf0961abdd2ddfb5881e7f9.svg"
                        className="w-100 p-3 h-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={cx("col-10", "py-3", "px-5")}>
                    <h1 className={cx("achievment-title", "py-4")}>Lửa rừng</h1>
                    <div
                      className={cx(
                        "progess-bar",
                        "d-flex",
                        "justify-content-center",
                        "align-items-center",
                        "px-3"
                      )}
                    >
                      <span>0 / 0</span>
                    </div>
                    <p className={cx("achievment-require", "py-3")}>
                      Đạt chuỗi 3 ngày streak
                    </p>
                  </div>
                </div>
              </li>
              {/* achievment */}
              {/* achievment */}
              <li className={cx("achievment-item")}>
                <div className={cx("row")}>
                  <div className={cx("col-2")}>
                    <div className={cx("achievment-banner-container")}>
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/achievements/217492e7baf0961abdd2ddfb5881e7f9.svg"
                        className="w-100 p-3 h-100"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={cx("col-10", "py-3", "px-5")}>
                    <h1 className={cx("achievment-title", "py-4")}>Lửa rừng</h1>
                    <div
                      className={cx(
                        "progess-bar",
                        "d-flex",
                        "justify-content-center",
                        "align-items-center",
                        "px-3"
                      )}
                    >
                      <span>0 / 0</span>
                    </div>
                    <p className={cx("achievment-require", "py-3")}>
                      Đạt chuỗi 3 ngày streak
                    </p>
                  </div>
                </div>
              </li>
              {/* achievment */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
