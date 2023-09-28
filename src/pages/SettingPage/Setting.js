import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";
import { useEffect, useState } from "react";

const cx = classNames.bind(Style);

function Setting() {
  const [avatar, setAvatar] = useState();

  const changeAvatarHandel = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  useEffect(() => {
    //clean up
    return () => {};
  }, [avatar]);

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
                    <label
                      htmlFor=""
                      className={cx("setting-item-label", "me-5")}
                    >
                      Ảnh hồ sơ
                    </label>
                  </div>
                  <div className="col-9 ps-5">
                    <label
                      htmlFor="upload-file-btn"
                      className={cx("upload-file-btn", "ms-5")}
                    >
                      CHỌN TẬP TIN
                    </label>
                    <input
                      type="file"
                      id="upload-file-btn"
                      className={cx("uploadImg")}
                      onChange={changeAvatarHandel}
                      hidden
                    />
                    <p>
                      <small className={cx("upload-img-status", "ms-5")}>
                        chưa chọn file
                      </small>
                    </p>
                    <p className={cx("file-space-rqment", "ms-5")}>
                      kích cỡ ảnh tối đa là 1 MB
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="row">
                  <div className="col-3">
                    <label
                      htmlFor=""
                      className={cx("setting-item-label", "me-5")}
                    >
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
                        "rounded-4",
                        "ms-5"
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
                    <label
                      htmlFor=""
                      className={cx("setting-item-label", "me-5")}
                    >
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
                        "rounded-4",
                        "ms-5"
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
                    <label
                      htmlFor=""
                      className={cx("setting-item-label", "me-5")}
                    >
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
                        "rounded-4",
                        "ms-5"
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
                    <a
                      href=""
                      className={cx("btn", "setting-account-btn", "ms-5")}
                    >
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
                        "delete-account",
                        "ms-5"
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
