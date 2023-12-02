import classNames from "classnames/bind";
import Style from "./ReadQuestionPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faPencilAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function ReadQuestionPage() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className={cx("read-question-page-container", "py-4")}>
          <h1 className={cx("title", "border-bottom", "pb-3")}>
            Đề Thi Chính Thức THPT Quốc Gia Năm 2020 Mã 403- Ngoại Ngữ - Tiếng
            Anh
          </h1>
          <div className="d-flex justify-content-center align-items-center">
            <Link
              to={"/"}
              className={cx("btn", "getting-to-test-btn", "py-3", "my-3")}
            >
              <FontAwesomeIcon icon={faPencilAlt} className="pe-2" /> Thi Thử
            </Link>
          </div>
          <small className={cx("question-qualtity", "d-inline-block", "px-3")}>
            <FontAwesomeIcon icon={faBook} className="pe-3" />
            50 câu hỏi
          </small>
          <small className={cx("time-to-testing", "d-inline-block", "px-3")}>
            <FontAwesomeIcon icon={faClock} className="pe-3" />
            60 phút
          </small>

          <div
            className={cx(
              "test-question-container",
              "p-5",
              "my-5",
              "rounded-2"
            )}
          >
            <div className={cx("each-question-container")}>
              <h1 className={cx("question-index")}>Câu 1 : </h1>
              <h1 className={cx("question-title")}>
                Mark the letter A, B, C or D on your answer sheet to indicate
                the underlined part that needs correction in each of the
                following questions.
              </h1>
              <small className={cx("question")}>
                <u>Body language</u> is quiet <u>and secret</u>, but <u>most</u>{" "}
                powerful language <u>of all</u>.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadQuestionPage;