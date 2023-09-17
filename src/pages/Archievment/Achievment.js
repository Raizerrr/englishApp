import classNames from "classnames/bind";
import Style from "./Achievment.module.scss";

const cx = classNames.bind(Style);

function Achievment() {
  return (
    <div>
      <div className="container">
        <div className={cx("achievment-container")}>
          <ul className={cx("achievment-list")}>
            <li className={cx("achievment-item")}>
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/achievements/217492e7baf0961abdd2ddfb5881e7f9.svg"
                    alt=""
                  />
                </div>
                <div className="col-10"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Achievment;
