import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";

const cx = classNames.bind(Style);

function Setting() {
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
            <div className={cx("setting-container", "my-3")}>
              <h1 className={cx("setting-title", "my-3")}>Tài Khoản</h1>
              <div className="py-5">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Ảnh hồ sơ
                    </label>
                  </div>
                  <div className="col-9 ps-5">
                    <input type="file" className={cx("uploadImg")} />
                    <p>
                      <small className={cx("upload-img-status")}>
                        chưa chọn file
                      </small>
                    </p>
                    <p className={cx("file-space-rqment")}>
                      kích cỡ ảnh tối đa là 1 MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Tên
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
                      name="username"
                      // value="Phú Lê"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Tên đăng nhập
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
                      name="user-nickname"
                      // value="PhL837775"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="" className={cx("setting-item-label")}>
                      Email
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
                      // value="phuledz2211@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-9 ps-5 mb-4">
                  <h1>
                    <a href="" className={cx("btn", "setting-account-btn")}>
                      {" "}
                      ĐĂNG XUẤT
                    </a>
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-3"></div>
                <div className={cx("col-9", "ps-5", " mb-4")}>
                  <h1>
                    <a
                      href=""
                      className={cx(
                        "btn",
                        "setting-account-btn",
                        "delete-account"
                      )}
                    >
                      {" "}
                      XÓA TÀI KHOẢN CỦA TÔI
                    </a>
                  </h1>
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

export default Setting;
