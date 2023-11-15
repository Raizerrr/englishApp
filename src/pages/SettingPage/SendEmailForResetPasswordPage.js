import { SendEmailButton } from "../../component/Buttons/SendEmailButton";
import { useState } from "react";
import classNames from "classnames/bind";
import Style from "./Setting.module.scss";

const cx = classNames.bind(Style);

export const SendEmailForResetPasswordPage = () => {
    const [email, setEmail] = useState("");


    return (
        <div
          className={cx(
            "container",
            "d-flex",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("change-pass-container", "my-3")}>
            <h1 className={cx("setting-title", "my-3")}>Gửi Email để reset mật khẩu của bạn</h1>
            <div className="my-5">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="" className={cx("setting-item-label")}>
                    Email của bạn
                  </label>
                </div>
                <div className="col-9 ps-5">
                  <input
                    type="email"
                    className={cx(
                      "w-100",
                      "input-setting",
                      "p-3",
                      "rounded-4"
                    )}
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
                <SendEmailButton email={email}/>
            </div>
          </div>
        </div>
    )
}