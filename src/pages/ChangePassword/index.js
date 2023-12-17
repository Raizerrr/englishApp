import classNames from "classnames/bind";
import Style from "./../../pages/SettingPage/Setting.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);
function ChangePassword() {
  return (
    <>
      <div
        className={cx(
          "container",
          "d-flex",
          "justify-content-center",
          "align-items-center"
        )}
      >
        <div className={cx("change-pass-container", "my-3")}>
          <Link to={"/setting"} className={cx("back-to-setting-btn", "btn")}>
            Trở vể
          </Link>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className={cx("setting-title", "my-3")}>Mật Khẩu</h1>

            <div
              className={cx(
                "d-flex",
                "justify-content-center",
                "align-items-center",
                "my-3"
              )}
            >
              <button className={cx("save-setting-btn", "disabled")}>
                lưu thay đổi
              </button>
            </div>
          </div>
          <div className="my-5">
            <div className="row">
              <div className="col-12 col-lg-5 text-start text-lg-end">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Mật khẩu hiện tại
                </label>
              </div>
              <div className="col-12 col-lg-7 ps-5">
                <input
                  type="text"
                  className={cx("w-100", "input-setting", "p-3", "rounded-4")}
                  name="user-gmail"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="row">
              <div className="col-12 col-lg-5 text-start text-lg-end">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Mật khẩu mới
                </label>
              </div>
              <div className="col-12 col-lg-7 ps-5">
                <input
                  type="text"
                  className={cx("w-100", "input-setting", "p-3", "rounded-4")}
                  name="user-gmail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
