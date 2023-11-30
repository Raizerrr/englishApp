import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { SaveButton } from "../../component/Buttons/SaveButton";

import classNames from "classnames/bind";
import Style from "./Setting.module.scss";

const cx = classNames.bind(Style);

function Setting() {

  const {user, setUser, logout, checkChangeProperty} = useUserContext();
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();

  

  const {username, email} = user;

  const handleChangeField = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  const changeAvatarHandel = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file.name);
      const reader = new FileReader();
      
      reader.onload = function (eg) {
        setUser({...user, avatar: eg.target.result});
        setAvatar(eg.target.result);
      };

      reader.readAsDataURL(file);
  };
}

  useEffect(() => {
    //clean up

    return () => {
      avatar && <img src={avatar.preview} alt="" />;
    };
  }, [avatar]);


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
                  <SaveButton disableButton={checkChangeProperty()} oldPassword={""}/>  
                  
                </div>
              </div>
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
                      {avatar && (
                        <small className={cx("upload-img-status", "ms-5")}>
                          {avatar.name}
                        </small>
                      )}
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
                      value={username}
                      onChange={handleChangeField}
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
                      value={username}
                      onChange={handleChangeField}
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
                      name="email"
                      value={email}
                      onChange={handleChangeField}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-9 ps-5 mb-4" onClick={(e) => {
                  e.preventDefault();
                  navigate("/signin")
                  logout();
                }}>
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
    </>
  );
}

export default Setting;
