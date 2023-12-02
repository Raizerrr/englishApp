import SignIn from "./SignIn";
import LoginLayoutScss from "./LoginLayout.module.scss";
import classNames from "classnames/bind";
import Register from "./Register";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(LoginLayoutScss);

function LoginLayout() {
  const [transTabs, setTransTabs] = useState("Đăng Ký");
  const navigate = useNavigate();

  const ToggleTabsHandel = () => {
    if (transTabs === "Đăng Nhập") {
      setTransTabs("Đăng Ký");
    } else {
      setTransTabs("Đăng Nhập");
    }
  };

  

  return (
    <div>
      <div className="container-fluid">
        {/* button close va chuyen tab */}
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className={cx(
                "register-tab",
                "text-center",
                "rounded-4",
                "float-end",
                "m-5"
              )}
              onClick={() => navigate("/")}
            >
              <div className="h-100">Quay Lại</div>
            </div>
            <div
              className={cx(
                "register-tab",
                "text-center",
                "rounded-4",
                "float-end",
                "m-5"
              )}
            >
              <div className="h-100" onClick={ToggleTabsHandel}>
                <a>{transTabs}</a>
              </div>
            </div>
          </div>
        </div>
        {/* button close va chuyen tab */}
        <div className={cx("container", "form-container")}>
          <div
            className={cx("d-flex", "align-items-center", "content-container")}
          >
            {transTabs === "Đăng Ký" ? <SignIn /> : <Register />}
          </div>

          {/* phuong thuc dang nhap bang social */}

          {/* phuong thuc dang nhap bang social */}
        </div>
        
      </div>
    </div>
  );
}

export default LoginLayout;
