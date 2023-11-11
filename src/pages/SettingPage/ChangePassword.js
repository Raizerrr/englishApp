import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import { useUserContext } from "../../context/UserContext";
import { SaveButton } from "../../component/Buttons/SaveButton";
import { useState } from "react";
import { ErrorNotification } from "../../component/LoginLayout/ErrorNotification";
import SettingNav from "../../component/Layout/SettingLayout/SettingNav";

const cx = classNames.bind(Style);
function ChangePassword() {
  const {user, setUser, errorMessage} = useUserContext();

  const [oldPassword, setOldPassword] = useState("");

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
                      type="password"
                      className={cx(
                        "w-100",
                        "input-setting",
                        "p-3",
                        "rounded-4"
                      )}
                      name="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}

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
                      type="password"
                      className={cx(
                        "w-100",
                        "input-setting",
                        "p-3",
                        "rounded-4"
                      )}
                      name="user-gmail"
                      value={user?.password}
                      onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <ErrorNotification errorNotification={errorMessage}/>
              <div className="mt-5">
                <SaveButton oldPassword={oldPassword}/>
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
