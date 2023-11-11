import classNames from "classnames/bind";
import LoginLayoutScss from "./LoginLayout.module.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../axios/userAxios";
import { SocialLogin } from "./SocialLogin";
import { ErrorNotification } from "./ErrorNotification";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(LoginLayoutScss);

function SignIn() {
  const {registerUser} = useUserContext();
  // Hook
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });
  const [errorNotification, setErrorNotification] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/");
    }
  }, [])


  // variables 

  const { username, password } = formValue;

  // functions
  // Function for change value input in field
  const handleChangeField = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleCheckUserLogin = async (e) => {
    e.preventDefault();

    const {data} = await login(formValue);


    if (data?.data?.token) {
      localStorage.setItem("token", JSON.stringify(data?.data?.token));
      await registerUser();
      navigate("/");
    } else {
      setErrorNotification(data.data.message);
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
            name="username"
            value={username}
            onChange={handleChangeField}
            required
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
            name="password"
            placeholder="Mật Khẩu"
            value={password}
            onChange={handleChangeField}
            required
          />
          <div className={cx("forgot-pw")}>
            <Link to={"%/changePassword"}>Quên?</Link>
          </div>
          {/* Below stack is error message when don't sign in successfully */}
          <ErrorNotification errorNotification={errorNotification} />
        </div>

        <button
          onClick={handleCheckUserLogin}
          className={cx("sign-in-submit-btn", "w-100", "py-3", "rounded-4")}
        >
          Đăng Nhập
        </button>
        <SocialLogin />
      </form>
    </div>
  );
}

export default SignIn;
