import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";

const cx = classNames.bind(Style);

function Lesson() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="container">
          {/* header */}
          <div className={cx("lesson-container")}>
            <div className="row justify-content-center align-items-center">
              <div className="col-1">
                <div
                  className={cx(
                    "close-btn-container",
                    "d-flex",
                    "justify-content-end",
                    "align-items-center"
                  )}
                >
                  <a href="" className={cx("btn", "close-btn")}>
                    X
                  </a>
                </div>
              </div>
              <div className="col-10">
                <div
                  className={cx(
                    "progess-bar-container",
                    "d-flex",
                    "justify-content-center",
                    "align-items-center"
                  )}
                >
                  <div className={cx("progess-bar")}>
                    <span> 0 / 0</span>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div
                  className={cx(
                    "heart-container",
                    "d-flex",
                    "justify-content-start",
                    "align-items-center"
                  )}
                >
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/7631e3ee734dd4fe7792626b59457fa4.svg"
                    alt=""
                    className="heart pe-3"
                  />
                  <span className={cx("heart-count")}>5</span>
                </div>
              </div>
            </div>
          </div>
          {/* header */}

          {/* content */}
          <div className={cx("content-section")}></div>
          {/* content */}

          {/* footer */}
          <div
            className={cx(
              "lesson-footer",
              "d-flex",
              "justify-content-around",
              "align-items-center"
            )}
          >
            <a href="" className={cx("skip-btn", "btn")}>
              Bỏ qua
            </a>
            <a href="" className={cx("check-btn", "btn")}>
              kiểm tra
            </a>
          </div>
          {/* footer */}
        </div>
      </div>
    </>
  );
}

export default Lesson;
