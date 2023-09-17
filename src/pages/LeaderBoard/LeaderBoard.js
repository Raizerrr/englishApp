import classNames from "classnames/bind";
import Style from "./LeaderBoard.module.scss";

const cx = classNames.bind(Style);

function LeaderBoard() {
  return (
    <div>
      <div className="container">
        <div className={cx("leaderboard-container", "my-4")}>
          <div
            className={cx(
              "leaderboard-logo",
              "d-flex",
              "justify-content-center",
              "align-items-center"
            )}
          >
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg"
              alt=""
            />
          </div>
          <div className={cx("leaderboard-title", "text-center", "py-3")}>
            <h1>Mở khóa Bảng xếp hạng!</h1>
          </div>
          <div className={cx("leaderboard-desc", "text-center")}>
            <p>Hoàn thành thêm 6 bài học để bắt đầu thi đua</p>
          </div>

          <div className={cx("d-flex", "justify-content-center")}>
            <button className={cx("leaderboard-start-btn", "my-3")}>
              Bắt Đầu Học
            </button>
          </div>

          <div className={cx("user-background-show")}>
            <img
              className="pt-4 px-3"
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/66cc61ca4afdfeb838aafa9828c4be07.svg"
              alt=""
            />
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/57708658a81384750325296995face91.svg"
              alt=""
            />
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/25acac0956f9ff91bc9fd184000da9aa.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
