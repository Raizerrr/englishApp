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
import { useTestContext } from '../../context/TestContext';
import { useParams } from "react-router";
import {useLoadingAndTiming} from '../../hooks/useLoadingAndTiming';
import { useEffect } from "react";
import {Spinner} from '../../component/Spinner/Spinner';
import testImage from '../../assets/images/apps.44816.9007199266546260.915a3f34-dd54-4257-a4f6-d1a77530b3c3.png'



const cx = classNames.bind(Style);

function ReadQuestionPage() {
  const {testDetail, getTestByType, questions} = useTestContext();
  const {testId, testType} = useParams();
  const loading = useLoadingAndTiming();

  useEffect(() => {
    getTestByType(testType,testId);

    
  }, [testType, testId]);




  return (
    <>
      {loading?<Spinner/>:(
        <div className="d-flex justify-content-center align-items-center">
          <div className={cx("read-question-page-container", "py-4")}>
            <div className="row">
              <img className="col-5" src={testImage}/>
              <div className="col-7">
                <h1 className={cx("title", "border-bottom", "pb-3")}>
                  {testDetail?.title}
                </h1>
                <p>
                  {testDetail?.description}
                </p>

              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Link
                to={`/loading/lesson1/read/${testId}`}
                className={cx("btn", "getting-to-test-btn", "py-3", "my-3")}
              >
                <FontAwesomeIcon icon={faPencilAlt} className="pe-2" /> Vào Thi
              </Link>
            </div>
            <small className={cx("question-qualtity", "d-inline-block", "px-3")}>
              <FontAwesomeIcon icon={faBook} className="pe-3" />
              {questions?.length} câu hỏi
            </small>
            <small className={cx("time-to-testing", "d-inline-block", "px-3")}>
              <FontAwesomeIcon icon={faClock} className="pe-3" />
              {testDetail?.interval} phút
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
                <h1 className={cx("question-title")}>
                  Mark the letter A, B, C or D(several question have E answer) on your answer sheet to indicate
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

      )}
    </>
  );
}

export default ReadQuestionPage;