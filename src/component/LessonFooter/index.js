import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";
const cx = classNames.bind(Style);

function LessonFooter() {
  return (
    <div>
      <div className={cx("lesson-footer", "row", "align-items-center", "p-3")}>
        <div className="col-12 col-md-6 d-md-flex justify-content-center align-items-center mb-3 h-100 d-none ">
          <a href="/" className={cx("skip-btn", "btn", "in-lesson-button")}>
            Bỏ qua
          </a>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3 ">
          <a
            href="/"
            className={cx("check-btn", "btn", "disabled", "in-lesson-button")}
          >
            kiểm tra
          </a>
        </div>
      </div>
    </div>
  );
}

export default LessonFooter;
