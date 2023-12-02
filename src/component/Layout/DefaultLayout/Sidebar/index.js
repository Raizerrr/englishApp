import { Link, Navigate, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../../assets/images/logo.png";
import {
  faDumbbell,
  faEllipsis,
  faHome,
  faNoteSticky,
  faScroll,
  faShield,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./Sidebar.module.scss";
import { useUserContext } from "../../../../context/UserContext.js";
import { useEffect, useState } from "react";

const cx = classNames.bind(Style);
function Sidebar() {
  const {logout} = useUserContext();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if(localStorage.getItem("token")){
      setChecked(false);
    }
  }, [])

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
            <div
              className={cx(
                "my-4",
                "nav-item",
                "d-flex",
                "justify-content-center",
                "align-items-center"
              )}
            >
              <Link to="/learn">
                <div className={cx("logo-container")}>
                  <img src={logo} alt="logo" className="img-fluid" />
                </div>
              </Link>
            </div>

            <Link
              className={cx(
                "mb-2",
                "nav-item",
                "rounded-4",
                "text-center",
                "text-md-start"
              )}
              to="/learn"
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faHome} />
              <span className="d-none d-md-inline-block m-0 ms-md-4  ">
                Học
              </span>
            </Link>
            <div
              className={cx(
                "mb-2",
                "nav-item",
                "rounded-4",
                "text-center",
                "text-md-start",
                "position-relative",
                "practice-open-sub-menu"
              )}
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faDumbbell} />
              <span className="d-none d-md-inline-block m-0 ms-md-4  ">
                Luyện tập
              </span>

              <div className={cx("pratice-sub-menu", "py-5", "rounded-5")}>
                <div className={cx("d-flex", "flex-column")}>
                  <Link className={cx("btn", "item-link", "py-3", "rounded-3")}>
                    Luyện tập Cơ bản
                  </Link>
                  <Link
                    to={"/practices"}
                    className={cx("btn", "item-link", "py-3", "rounded-3")}
                  >
                    Luyện tập Nâng cao
                  </Link>
                </div>
              </div>
            </div>
            <Link
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4"
              )}
              to="/tests"
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faNoteSticky} />
              <span className="d-none d-md-inline-block ms-md-4">
                Bài kiểm tra
              </span>
            </Link>
            <Link
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4"
              )}
              to="/leaderBoard"
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faShield} />
              <span className="d-none d-md-inline-block ms-md-4">
                Bảng Xếp Hạng
              </span>
            </Link>

            <Link
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4"
              )}
              to="/quest"
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faScroll} />
              <span className="d-none d-md-inline-block ms-md-4">Nhiệm vụ</span>
            </Link>

            <Link
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4"
              )}
              to="/shop"
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faShop} />
              <span className="d-none d-md-inline-block ms-md-4">Cửa Hàng</span>
            </Link>
            {!checked && (

              <Link
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4"
              )}
              to="/profile"
              >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faUser} />
              <span className="d-none d-md-inline-block ms-md-4">Hồ Sơ</span>
              </Link>
            )}

            <div
              className={cx(
                "my-2",
                "text-center",
                "text-md-start",
                "nav-item",
                "rounded-4",
                "position-relative",
                "show-sub-menu"
              )}
            >
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEllipsis} />
              <span className="d-none d-md-inline-block ms-md-4">Xem Thêm</span>
              <div className={cx("sub-menu", "rounded-5")}>
                <ul className={cx("sub-menu-list")}>
                  {checked && (
                    <li className={cx("rounded-4", "sub-menu-item")}>
                      <Link
                        to={"/signin"}
                        className={cx("btn", "item-link", "py-3")}
                      >
                        Tạo Hồ Sơ
                      </Link>
                    </li>

                  )}
                  {!checked && (
                      <li className={cx("rounded-4", "sub-menu-item")}>
                        <Link to={"/"} className={cx("btn", "item-link", "py-3")}>
                          Giới Thiệu
                        </Link>
                      </li>
                    
                    )}
                  {!checked && (
                    <li className={cx("rounded-4", "sub-menu-item")}>
                      <Link
                        to={"/setting"}
                        className={cx("btn", "item-link", "py-3")}
                      >
                        cài đặt
                      </Link>
                    </li>
                  
                  )}
                  {!checked && (
                    <li className={cx("rounded-4", "sub-menu-item")}>
                      <Link
                        to={"/signin"}
                        className={cx("btn", "item-link", "py-3")}
                        onClick={logout}
                      >
                        Đăng Xuất
                      </Link>
                    </li>

                  )}
                  {checked && (
                    
                      <li className={cx("rounded-4", "sub-menu-item")}>
                        <Link
                          to={"/signin"}
                          className={cx("btn", "item-link", "py-3")}
                        >
                          Đăng Nhập
                        </Link>
                      </li>
                    )}
                <li className={cx("rounded-4", "sub-menu-item")}>
                    <Link
                      to={"/license"}
                      className={cx("btn", "item-link", "py-3")}
                    >
                      Chính sách
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
