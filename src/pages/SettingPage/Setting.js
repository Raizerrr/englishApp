import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import SettingNav from "../../component/Layout/SettingLayout/SettingNav";

const cx = classNames.bind(Style);

function Setting() {
  // const [avatar, setAvatar] = useState();

  // const changeAvatarHandel = (e) => {
  //   const file = e.target.files[0];
  //   file.preview = URL.createObjectURL(file);
  //   setAvatar(file);
  // };

  // useEffect(() => {
  //   //clean up
  //   return () => {
  //     avatar && <img src={avatar.preview} alt="" />;
  //   };
  // }, [avatar]);

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
        <div className={cx("setting-container", "my-3")}>
          <div className="position-relative">
            <h1 className={cx("setting-title", "my-3")}>Tài Khoản</h1>

            <div
              className={cx(
                "d-flex",
                "justify-content-center",
                "align-items-center",
                "my-3",
                "save-setting-btn-container"
              )}
            >
              <button className={cx("save-setting-btn", "disabled")}>
                lưu thay đổi
              </button>
            </div>
          </div>
          <div className="py-5">
            <div className="row">
              <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end  d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Ảnh hồ sơ
                </label>
              </div>
              <div className=" col-12 col-sm-9 ps-5">
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
                  hidden
                />
                {/* <p>
                  {avatar && (
                    <small className={cx("upload-img-status", "ms-5")}>
                      {avatar.name}
                    </small>
                  )}
                </p> */}
                <p className={cx("file-space-rqment", "ms-5")}>
                  kích cỡ ảnh tối đa là 1 MB
                </p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="row">
              <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Tên
                </label>
              </div>
              <div className="col-10 col-sm-9 ps-5">
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
              <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end ">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Tên đăng nhập
                </label>
              </div>
              <div className="col-10 col-sm-9 ps-5">
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
              <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end ">
                <label htmlFor="" className={cx("setting-item-label", "me-5")}>
                  Email
                </label>
              </div>
              <div className="col-10 col-sm-9 ps-5">
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
          <div className="d-block d-xxl-none">
            <SettingNav />
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end "></div>
            <div className="col-10 col-sm-9 ps-5 mb-4">
              <h1>
                <a href="" className={cx("btn", "setting-account-btn", "ms-5")}>
                  {" "}
                  ĐĂNG XUẤT
                </a>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 ms-5 ms-sm-0 d-flex d-sm-block justify-content-start align-items-center ps-5 ps-sm-0 text-start text-sm-end "></div>
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
    </>
  );
}

export default Setting;
