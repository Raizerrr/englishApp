import classNames from "classnames/bind";
import Style from "./Practices.module.scss";

import { Link } from "react-router-dom";
import { usePracticeContext } from "../../context/PracticeContext";
import { useTestContext } from "../../context/TestContext";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
const cx = classNames.bind(Style);

function Practices() {
  const {getPractices, practices} = usePracticeContext();
  const {setTestDetail} = useTestContext();
  const {courseId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPractices(courseId);
  }, [])

  const handleClick = (practice) => {
    setTestDetail(practice);
    navigate(`/readQuestionPage/normal/${practice?.id}`);
  }
  


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

         
          <h1
            className={cx("advance-practice-section-sub-title", "pb-3", "ps-4")}
          >
            Bài kiểm tra từng block trong khóa học 
          </h1>

          <div className="d-flex flex-column">
            {practices?.map(practice => (
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
                    <h1 className={cx("ielts-title", "title")}>{practice?.title}</h1>
                    <small className={cx("ielts-desc", "desc")}>
                      {practice?.description}
                    </small>
                  </div>
                  <div className="col-3">
                    <div className="d-flex justify-content-center align-items-center h-100 w-100">
                      <button
                        onClick={() => handleClick(practice)}
                        className={cx("btn", "ielts-button", "button")}
                      >
                        Kiểm tra
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            ))}

            {/* <h1
              className={cx(
                "advance-practice-section-sub-title",
                "py-3",
                "ps-4"
              )}
            >
              Bài kiểm tra tổng cho cả course 
            </h1> */}
            {/* <div className={cx("border-top")}>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Practices;