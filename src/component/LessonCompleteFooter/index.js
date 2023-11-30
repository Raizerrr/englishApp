import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";
import { useParams } from "react-router";
const cx = classNames.bind(Style);

function LessonFooter(props) {
  const {type} = useParams();
  // This state use for storing choose answer



  return (
    <>
      <div
            className={cx(
              "lesson-footer",
              "d-flex",
              "justify-content-around",
              "align-items-center",
              "bg-light"
            )}
          >
            {type==="complete" ? (
              <>
                <button
                  className={cx("skip-btn", "btn")}
                  onClick={() => {
                    props.ClickToOpenModal();
                  }}
                >
                  Xem Lại Bài Học
                </button>
                <span className={cx("check-btn", "btn", "disabled")} onClick={props.returnHome}>
                  Trở về
                </span>
              </>
            ): (
              <>
                <button className={cx("skip-btn", "btn")} onClick={props.skipQuestion}>
                  Bỏ qua
                </button>
                <button disabled={props.answerActive.indexOf(true)!==-1?false:true} 
                  style={props.answerActive.indexOf(true)!==-1?{backgroundColor:"rgb(221,244,255)", color: "rgb(24,153,214)"}:null}
                 className={cx("check-btn", "btn", "disabled")} onClick={props.checkQuestion}>
                  kiểm tra
                </button>
              </>

            )}
            </div>
    </>
  );
}

export default LessonFooter;
