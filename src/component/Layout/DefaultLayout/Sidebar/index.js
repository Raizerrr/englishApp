import { Link, Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import Style from "./Sidebar.module.scss";

const cx = classNames.bind(Style);
function Sidebar() {
  return (
    <div>
      <div className={cx("nav")}>
        <div
          className={cx(
            "container",
            "px-3",
            "border-right",
            "nav-list-container"
          )}
        >
          <div className={cx("d-flex", "flex-column", "nav-list")}>
            <div className={cx("my-4", "nav-item")}>
              <Link to="/learn"> Logo </Link>
            </div>

            <Link className={cx("mb-2", "nav-item", "rounded-4")} to="/learn">
              Học
            </Link>

            <Link
              className={cx("my-2", "nav-item", "rounded-4")}
              to="/leaderBoard"
            >
              {" "}
              Bảng Xếp Hạng{" "}
            </Link>

            <Link className={cx("my-2", "nav-item", "rounded-4")} to="/quest">
              {" "}
              Nhiệm vụ{" "}
            </Link>

            <Link className={cx("my-2", "nav-item", "rounded-4")} to="/shop">
              {" "}
              Cửa Hàng{" "}
            </Link>

            <Link className={cx("my-2", "nav-item", "rounded-4")} to="/profile">
              {" "}
              Hồ Sơ{" "}
            </Link>

            <div
              className={cx(
                "my-2",
                "nav-item",
                "rounded-4",
                "position-relative",
                "show-sub-menu"
              )}
            >
              {" "}
              Xem Thêm{" "}
              <div className={cx("sub-menu", "rounded-5")}>
                <ul className={cx("sub-menu-list")}>
                  <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link
                      to={"/signin"}
                      className={cx("btn", "item-link", "py-3")}
                    >
                      Tạo Hồ Sơ
                    </Link>
                  </li>
                  <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link to={"/"} className={cx("btn", "item-link", "py-3")}>
                      Giới Thiệu
                    </Link>
                  </li>
                  <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link
                      to={"/setting"}
                      className={cx("btn", "item-link", "py-3")}
                    >
                      cài đặt
                    </Link>
                  </li>
                  <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link
                      to={"/signin"}
                      className={cx("btn", "item-link", "py-3")}
                    >
                      Đăng Xuất
                    </Link>
                  </li>
                  <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link
                      to={"/signin"}
                      className={cx("btn", "item-link", "py-3")}
                    >
                      Đăng Nhập
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <Link to="/leaderBoard"> Học </Link>
            <Link to="/quest"> Học </Link>
            <Link to="/shop"> Học </Link>
            <Link to="/profile"> Học </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
