import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function SettingNav() {
  return (
    <div>
      <div className="container">
        <div className={cx("setting-nav-container", "rounded-5", "py-3")}>
          <ul className={cx("setting-nav-list")}>
            <li className={cx("settting-nav-item")}>
              <div className="row">
                <div className="col-2">
                  <div className={cx("setting-display-img")}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                      className={cx(
                        "w-100",
                        "rounded-circle",
                        " h-100",
                        "p-1 "
                      )}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-10 ps-3">
                  <div className={cx("user-nickname", "ps-2")}>PhL837775</div>
                  <h1>
                    <Link
                      to={"/profile"}
                      href=""
                      className={cx("btn", "view-profile-btn")}
                    >
                      XEM HỒ SƠ CỦA BẠN
                    </Link>
                  </h1>
                </div>
              </div>
            </li>
            <li className={cx("setting-nav-item", "nav-item")}>
              <Link to={"/setting"} className={cx("item-title", "btn")}>
                Tài Khoản
              </Link>
            </li>
            <li className={cx("setting-nav-item", "nav-item")}>
              <Link to={"/changePassword"} className={cx("item-title", "btn")}>
                Mật Khẩu
              </Link>
            </li>
            <li className={cx("setting-nav-item", "nav-item")}>
              <Link to={"/superInfomation"} className={cx("item-title", "btn")}>
                Super Pack
              </Link>
            </li>
            <li className={cx("setting-nav-item", "nav-item")}>
              <Link to={"/notification"} className={cx("item-title", "btn")}>
                Thông Báo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SettingNav;
