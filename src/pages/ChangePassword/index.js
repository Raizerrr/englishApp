import classNames from "classnames/bind";
import Style from "./../../pages/SettingPage/Setting.module.scss";

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
          <h1 className={cx("setting-title", "my-3")}>Mật khẩu</h1>
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
