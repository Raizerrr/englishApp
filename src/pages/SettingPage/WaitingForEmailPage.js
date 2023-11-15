import classNames from "classnames/bind";
import Style from "./Setting.module.scss";

const cx = classNames.bind(Style);

export const WaitingForEmailPage = () => {
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
            <h1>Hãy kiểm tra email để reset password</h1>

          </div>
        </div>
    )
}