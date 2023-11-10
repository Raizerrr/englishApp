import classNames from "classnames/bind";
import Style from "./Task.module.scss";
import { useUserContext } from "../../../../context/UserContext";
import { useCourseContext } from "../../../../context/CourseContext";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(Style);

function Task() {
  const {player, streakTotal, hearts} = useUserContext();
  const {checkOpenRank} = useCourseContext();
  return (
    <div>
      <div className="container my-4">
        {/*  */}
        <div className={cx("task-container")}>
          <div className="row">
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "streak-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                alt=""
              />
              {streakTotal}
            </div>
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "gem-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                alt=""
              />
              {player?.expPoint}
            </div>
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "heart-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                alt=""
              />
              {hearts}
            </div>
          </div>
          {/*  */}

          <div
            className={cx(
              "card",
              "premium-card-container",
              "rounded-4",
              "p-3",
              "my-5"
            )}
          >
            <div className="card-body">
              <h5 className={cx("premium-card-title")}>Thử Super Miễn Phí</h5>
              <div className={cx("row", "my-4")}>
                <div className="col-8">
                  <p
                    className={cx(
                      "premium-card-text",
                      "my-4",
                      "align-items-center"
                    )}
                  >
                    Không quảng cáo, bài luyện tập cá nhân hóa, và không giới
                    hạn số lần chinh phục Huyền thoại!
                  </p>
                </div>
                <div className="col-4">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/e07e459ea20aef826b42caa71498d85f.svg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <a
                href="/premium"
                className={cx("premium-submit-btn", "btn", "rounded-4")}
              >
                Thử 2 tuần miễn phí
              </a>
            </div>
          </div>
          {checkOpenRank !== null && (
            <div
              className={cx(
                "card",
                "premium-card-container",
                "rounded-4",
                "p-3",
                "mb-5"
              )}
            >
              <div className="card-body">
                <h5 className={cx("premium-card-title")}>
                  Mở khóa Bảng xếp hạng!
                </h5>
                <div className={cx("row", "my-4", "align-items-center")}>
                  <div className="col-3">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
                      alt=""
                    />
                  </div>
                  <div className="col-9">
                    <p className={cx("premium-card-text", "my-4")}>
                      Hoàn thành thêm {6-checkOpenRank()} bài học để bắt đầu thi đua
                    </p>
                  </div>
                </div>
              </div>
            </div>

          )}
          <div
            className={cx(
              "card",
              "premium-card-container",
              "rounded-4",
              "p-3",
              "mb-5"
            )}
          >
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-8">
                  <h5 className={cx("premium-card-title")}>
                    Nhiệm vụ hằng ngày
                  </h5>
                </div>
                <div className="col-4">
                  <a href="/quest">Xem tất cả</a>
                </div>
              </div>
              <div className={cx("row", "my-4", "align-items-center")}>
                <div className="col-3">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <p className={cx("premium-card-text", "my-4")}>
                    Kiếm 10 KN (0/10)
                  </p>
                </div>
              </div>
              <div className={cx("row", "my-4", "align-items-center")}>
                <div className="col-3">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/39f13d2de304cad2ac2f88b31a7e2ff4.svg"
                    className="w-100"
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <p className={cx("premium-card-text", "my-4")}>
                    Đạt điểm chính xác từ 80% trở lên của 3 bài học (0/3)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
