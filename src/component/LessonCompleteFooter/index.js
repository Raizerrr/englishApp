import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";
const cx = classNames.bind(Style);

function LessonFooter(props) {
  return (
    <div
      className={cx(
        "lesson-footer",
        "d-flex",
        "justify-content-around",
        "align-items-center"
      )}
    >
      <button
        className={cx("skip-btn", "btn")}
        onClick={() => {
          props.ClickToOpenModal();
        }}
      >
        Xem Lại Bài Học
      </button>
      <a href="/" className={cx("check-btn", "btn", "active")}>
        Tiếp Tục
      </a>
    </div>
  );
}

export default LessonFooter;
