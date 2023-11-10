import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";
const cx = classNames.bind(Style);

function LessonFooter() {
  return (
    <div
      className={cx(
        "lesson-footer",
        "d-flex",
        "justify-content-around",
        "align-items-center"
      )}
    >
      <a href="/" className={cx("skip-btn", "btn")}>
        Bỏ qua
      </a>
      <a href="/" className={cx("check-btn", "btn", "disabled")}>
        kiểm tra
      </a>
    </div>
  );
}

export default LessonFooter;
