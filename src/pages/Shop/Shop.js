import classNames from "classnames/bind";
import Style from "./Shop.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function Shop() {
  return (
    <div>
      <div className={cx("container", "d-flex", "justify-content-center")}>
        <div className={cx("shop-container")}>
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
          <h1 className={cx("shop-list-title", "py-5")}>Trái tim</h1>
          <div className={cx("heart-shop-container")}>
            <ul className={cx("heart-shop-list")}>
              <li className={cx("heart-shop-item", "border-top")}>
                <div className="row py-3">
                  <div className="col-2">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/547ffcf0e6256af421ad1a32c26b8f1a.svg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="col-7">
                    <div className={cx("heart-item-title", "py-3")}>
                      Hồi phục Trái tim
                    </div>
                    <p>
                      Lấp đầy trái tim để không phải lo lắng mắc lỗi sai trong
                      bài học
                    </p>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <button
                      className={cx(
                        "shop-purcherse-btn",
                        "py-3",
                        "w-100",
                        "rounded-4"
                      )}
                    >
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                        alt=""
                        className="pe-3"
                      />
                      100
                    </button>
                  </div>
                </div>
              </li>
              <li className={cx("heart-shop-item", "border-top")}>
                <div className="row py-3">
                  <div className="col-2">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/4f3842c690acf9bf0d4b06e6ab2fffcf.svg"
                      alt=""
                      className="w-100 h-100 "
                    />
                  </div>
                  <div className="col-7">
                    <div className={cx("heart-item-title", "py-3")}>
                      Trái tim Vô hạn
                    </div>
                    <p>Không bao giờ hết trái tim khi học với Super!</p>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <Link
                      to={"/premium"}
                      className={cx(
                        "shop-purcherse-btn",
                        "py-3",
                        "w-100",
                        "rounded-4",
                        "premium-color"
                      )}
                    >
                      Thử Miễn phí
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h1 className={cx("shop-list-title", "py-5")}>Tăng sức mạnh</h1>
          <div className={cx("heart-shop-container")}>
            <ul className={cx("heart-shop-list")}>
              <li className={cx("heart-shop-item", "border-top")}>
                <div className="row py-3">
                  <div className="col-2">
                    <img
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/216ddc11afcbb98f44e53d565ccf479e.svg"
                      alt=""
                      className="w-100 h-100"
                    />
                  </div>
                  <div className="col-7">
                    <div className={cx("heart-item-title", "py-3")}>
                      Streak Freeze
                    </div>
                    <p className={cx("limited-item")}>
                      Giới hạn trong ngày : (0/2)
                    </p>
                    <p>
                      Streak Freeze cho phép bạn giữ nguyên streak trong một
                      ngày bạn không có hoạt động nào.
                    </p>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <button
                      className={cx(
                        "shop-purcherse-btn",
                        "py-3",
                        "w-100",
                        "rounded-4",
                        "streak-frezze-color"
                      )}
                    >
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                        alt=""
                        className="pe-3"
                      />
                      100
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
