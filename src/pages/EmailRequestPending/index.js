import classNames from "classnames/bind";
import Style from "./EmailRequestPending.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);
function EmailRequestPending() {
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
          <h1 className={cx("setting-title", "my-3")}>Xác Thực Email</h1>
          <div className="my-5">
            <div className="row flex-column mb-3">
              <label htmlFor="" className={cx("setting-item-label", "mb-3")}>
                Nhập Email của bạn vào đây
              </label>

              <input
                type="text"
                className={cx("w-100", "input-setting", "p-3", "rounded-4")}
                name="user-gmail"
              />
            </div>
            <div className={cx("notify-for-user-container")}>
              <h1 className={cx("success-notify", "notify")}>
                <FontAwesomeIcon icon={faCheck} className="pe-3" />
                Đã gửi thành công! Vui lòng vào Email để xác thực tài khoản
              </h1>
              <h1 className={cx("fail-notify", "notify")}>
                <FontAwesomeIcon icon={faClose} className="pe-3" />
                Không tìm thấy Email, Vui lòng thử lại
              </h1>
            </div>
          </div>
          <button
            className={cx("email-request-submit-btn", "float-end", "disabled")}
          >
            Gửi
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailRequestPending;
