import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(Style);
function ChangePassword() {
  const {user} = useUserContext();

  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-8">
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
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Mật khẩu hiện tại
                    </label>
                  </div>
                  <div className="col-9 ps-5">
                    <input
                      type="text"
                      className={cx(
                        "w-100",
                        "input-setting",
                        "p-3",
                        "rounded-4"
                      )}
                      name="user-gmail"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Mật khẩu mới
                    </label>
                  </div>
                  <div className="col-9 ps-5">
                    <input
                      type="text"
                      className={cx(
                        "w-100",
                        "input-setting",
                        "p-3",
                        "rounded-4"
                      )}
                      name="user-gmail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <SettingNav />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
