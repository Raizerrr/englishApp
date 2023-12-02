import classNames from "classnames/bind";
import Style from "./Practices.module.scss";

import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function Practices() {
  return (
    <>
      <div className="container justify-content-center align-items-center d-flex">
        <div className={cx("practice-section-container")}>
          <div className={cx("card", "card-container", "my-4")}>
            <div className="card-body">
              <div className="row">
                <div className="col-2 p-3">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/e07e459ea20aef826b42caa71498d85f.svg"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="col-10">
                  <p className={cx("card-text", "premium-text")}>
                    Bắt đầu 2 tuần dùng thử miễn phí để tận hưởng các quyền lợi
                    độc quyền của Super
                  </p>
                </div>
              </div>
              <Link
                to={"/premium"}
                className={cx(
                  "btn",
                  "premium-btn",
                  "w-100",
                  "p-3",
                  "my-3",
                  "rounded-4"
                )}
              >
                Bắt đầu 14 ngày dùng thử miễn phí
              </Link>
            </div>
          </div>

          <h1 className={cx("advance-practice-section-title", "py-5")}>
            Luyện tập Nâng cao
          </h1>
          <h1
            className={cx("advance-practice-section-sub-title", "pb-3", "ps-4")}
          >
            Chứng chỉ Quốc Tế
          </h1>

          <div className="d-flex flex-column">
            <div
              className={cx(
                "ielts-section",
                "pratice-section",
                "p-4",
                "border-top"
              )}
            >
              <div className="row">
                <div className="col-9">
                  <h1 className={cx("ielts-title", "title")}>Ielts</h1>
                  <small className={cx("ielts-desc", "desc")}>
                    Thử thách bản thân với bài kiểm tra chuẩn IELTS
                  </small>
                </div>
                <div className="col-3">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <Link
                      to={"/readQuestionPage"}
                      className={cx("btn", "ielts-button", "button")}
                    >
                      Kiểm tra
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cx(
                "ielts-section",
                "pratice-section",
                "p-4",
                "border-top"
              )}
            >
              <div className="row">
                <div className="col-9">
                  <h1 className={cx("toeic-title", "title")}>toeic</h1>
                  <small className={cx("toeic-desc", "desc")}>
                    Thử thách bản thân với bài kiểm tra chuẩn TOEIC
                  </small>
                </div>
                <div className="col-3">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <Link
                      to={"/readQuestionPage"}
                      className={cx("btn", "ielts-button", "button")}
                    >
                      Kiểm tra
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <h1
              className={cx(
                "advance-practice-section-sub-title",
                "py-3",
                "ps-4"
              )}
            >
              Ôn thi THPTQG
            </h1>
            <div className={cx("border-top")}>
              <Link
                to={"/thptqgexams"}
                className={cx(
                  "pratice-section",
                  "p-4",
                  "btn",
                  "text-start",
                  "THPTQG-tests-section"
                )}
              >
                <h1 className={cx("title")}>Tổng hợp các bài thi THPTQG</h1>
                <small className={cx("desc")}>
                  Tổng hợp các bài thi THPTQG của các năm gần đây giúp ôn tập và
                  rèn luyện tư duy để chuẩn bị cho các kỳ thi sau này
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practices;
