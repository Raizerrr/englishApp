import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";

const cx = classNames.bind(Style);

function Notification() {
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
            <div className={cx("notification-container", "my-3")}>
              <h1 className={cx("setting-title", "my-3")}>Thông báo</h1>
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
        </div>
        <div className="col-4">
          <SettingNav />
        </div>
      </div>
    </div>
  );
}

export default Notification;
