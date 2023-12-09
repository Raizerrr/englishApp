import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";
const cx = classNames.bind(Style);

function LessonFooter(props) {
  return (
    <div className={cx("lesson-footer", "row", "bg-light", "p-3")}>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3">
        <button
          className={cx("skip-btn", "btn", "in-lesson-button")}
          onClick={() => {
            props.ClickToOpenModal();
          }}
        >
          Xem Lại Bài Học
        </button>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3">
        <a
          href="/"
          className={cx("check-btn", "btn", "in-lesson-button", "active")}
        >
          Tiếp Tục
        </a>
      </div>
    </div>
  );
}

export default LessonFooter;
