import classNames from "classnames/bind";
import Style from "./../../pages/SettingPage/Setting.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function Notification() {
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
        <div className={cx("notification-container", "my-3")}>
          <Link to={"/setting"} className={cx("back-to-setting-btn", "btn")}>
            Trở vể
          </Link>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className={cx("setting-title", "my-3")}>Thông Báo</h1>

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
          <h1 className={cx("notifi-small-title", "mt-5", "mb-5", "pb-2")}>
            Tổng quan
          </h1>

          <div className={cx("choose-case-to-notify", " py-5")}>
            <table>
              <tbody>
                <tr className="py-3">
                  <td className={cx("px-5", "case-notify-title", "pb-5")}>
                    Gửi mail cho tôi khi
                  </td>
                  <td className="d-flex align-items-center pb-5">
                    <input
                      type="checkbox"
                      name=""
                      className={cx("me-3", "ckb-case-to-send-notify")}
                    />
                    Có cập nhật sản phẩm hoặc mẹo học tập mới
                  </td>
                </tr>
                <tr className="py-3">
                  <td className={cx("px-5", "case-notify-title")}></td>
                  <td className="d-flex align-items-center py-5">
                    <input
                      type="checkbox"
                      name=""
                      className={cx("me-3", "ckb-case-to-send-notify")}
                    />
                    Có báo cáo quá trình học tập hàng tuần
                  </td>
                </tr>
                <tr className="py-3">
                  <td className={cx("px-5", "case-notify-title")}></td>
                  <td className="d-flex align-items-center py-5">
                    <input
                      type="checkbox"
                      name=""
                      className={cx("me-3", "ckb-case-to-send-notify")}
                    />
                    Ai đó vừa kết bạn với tôi
                  </td>
                </tr>
                <tr className="py-3">
                  <td className={cx("px-5", "case-notify-title")}></td>
                  <td className="d-flex align-items-center py-5">
                    <input
                      type="checkbox"
                      name=""
                      className={cx("me-3", "ckb-case-to-send-notify")}
                    />
                    có những khuyến mãi đặc biệt
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
