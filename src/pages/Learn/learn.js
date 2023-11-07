import classNames from "classnames/bind";
import Style from "./learn.module.scss";

const cx = classNames.bind(Style);

function learn() {
  

  return (
    <div>
      <div className={cx("container", "my-4")}>
        {/* course section  */}

        <div className="row">
          {/* each course section */}
          <div className="col-12">
            <div className={cx("course-section", "mb-5", "mt-3")}>
              <div
                className={cx(
                  "bange-container",
                  "d-flex",
                  "justify-content-center"
                )}
              >
                <div className={cx("bange", "green-bange", "w-100")}>
                  <h1 className={cx("section-title")}>Cửa 1</h1>
                  <p className={cx("section-desc")}>
                    Gọi đồ uống, giới thiệu bản thân
                  </p>
                </div>
              </div>

              <div
                className={cx(
                  "row",
                  "align-items-center",

                  "py-5",
                  "px-3"
                )}
              >
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "green-button-active",
                      "button-to-get-in-lesson",
                      "lesson-active",
                      "my-3",
                      "position-relative"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-45px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-80px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-45px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "55px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "85px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "50px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* each course section */}

          <div className="col-12">
            {/* each course section */}
            <div className={cx("course-section", "mb-5")}>
              <div
                className={cx(
                  "bange-container",
                  "d-flex",
                  "justify-content-center"
                )}
              >
                <div className={cx("bange", "purple-bange", "w-100")}>
                  <h1 className={cx("section-title")}>Cửa 1</h1>
                  <p className={cx("section-desc")}>
                    Gọi đồ uống, giới thiệu bản thân
                  </p>
                </div>
              </div>

              <div className={cx("row", "align-items-center", "py-5")}>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "purple-button-active",
                      "button-to-get-in-lesson",
                      "lesson-active",
                      "my-3",
                      "position-relative"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-45px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-80px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "-45px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "55px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "85px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                    // style={{ left: "50px" }}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
                <div className="col-4 col-sm-3 col-lg-2 d-flex justify-content-center aligns-items-center p-1">
                  <button
                    className={cx(
                      "button-to-get-in-lesson",
                      "lesson-disable",
                      "position-relative",
                      "my-3"
                    )}
                  >
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/261caf5e7127c22944a432ef5c191cfa.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* each course section */}

        {/* course section  */}
      </div>
    </div>
  );
}

export default learn;
