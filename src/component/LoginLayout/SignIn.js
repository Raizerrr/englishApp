import classNames from "classnames/bind";
import LoginLayoutScss from "./LoginLayout.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(LoginLayoutScss);

function SignIn() {
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCheckUserLogin = async (e) => {
    e.preventDefault();

    const requestUser = {
      username: username,
      password: password,
    };

    const { data: response } = await axios.post(
      "http://localhost:8870/api/user/checklogin",
      requestUser
    );

    if (response.data) {
      navigate("/");
    } else {
      navigate("/sdfsdf");
    }
  };

  return (
    <div className={cx("container", "sign-in-container")}>
      <h2 className={cx("sign-in-heading", "text-center", "pb-5")}>
        Đăng Nhập
      </h2>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className={cx(
              "username-input",
              "form-control",
              "w-100",
              " py-3",
              "rounded-4"
            )}
            aria-describedby="emailHelp"
            placeholder="Email hoặc tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={cx("mb-5", "position-relative")}>
          <input
            type="password"
            className={cx(
              "password-input",
              "form-control",
              "w-100",
              " py-3",
              "rounded-4"
            )}
            placeholder="Mật Khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={cx("forgot-pw")}>
            <a href="">Quên?</a>
          </div>
        </div>

        <button
          onClick={handleCheckUserLogin}
          className={cx("sign-in-submit-btn", "w-100", "py-3", "rounded-4")}
        >
          Đăng Nhập
        </button>
        <div className={cx("line-contaner", "position-relative", "mt-2")}>
          <div className={cx("text-container", "px-2")}>Hoặc</div>
          <div className={cx("straight-line")}></div>
        </div>
        <div
          className={cx(
            "d-flex",
            "justify-content-between",
            "align-items-center"
          )}
        >
          <button
            className={cx(
              "sign-in-by-social",
              "facebook-color",
              "py-3",
              "rounded-4",
              "w-50",
              "me-3"
            )}
          >
            FaceBook
          </button>
          <button
            className={cx(
              "sign-in-by-social",
              "google-color",
              "py-3",
              "rounded-4",
              "w-50",
              "ms-3"
            )}
          >
            Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
