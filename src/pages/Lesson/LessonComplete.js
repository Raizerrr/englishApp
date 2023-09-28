import classNames from "classnames/bind";
import Style from "./Lesson.module.scss";
const cx = classNames.bind(Style);

function LessonComplete() {
  return (
    <>
      <div className="container">
        <div className={cx("lesson-complete-container")}>
          <div className={cx("conrats-container")}>
            <h1>Quá Đỉnh! Bạn đã hoàn thành bài học</h1>
            <p>Cố gắng tiếp tục lộ trình thật tốt nhé!</p>
          </div>
          <div className={cx("result-contaner")}>
            <div className="row">
              <div className="col">
                <div className={cx("exp-point-container")}>
                  <div className={cx("exp-point-display")}></div>
                </div>
              </div>
              <div className="col">
                <div className={cx("exp-point-container")}>
                  <div className={cx("exp-point-display")}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LessonComplete;
