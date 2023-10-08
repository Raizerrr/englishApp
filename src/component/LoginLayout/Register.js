import classNames from "classnames/bind";
import { useState } from "react";
import { SocialLogin } from "./SocialLogin";
import LoginLayoutScss from "./LoginLayout.module.scss";
import { register } from "../../axios/userAxios";
import { ErrorNotification } from "./ErrorNotification";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(LoginLayoutScss);

function Register() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    email: ""
  })
  const [errorNotification, setErrorNotification] = useState("");
  const navigate = useNavigate();
  // variables 
  const { username, password, email } = formValue;

  // functions
  // Function for change value input in field 
  const handleChangeField = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(email==="" || password==="" || username===""){
      setErrorNotification("Some fields are empty!!")
      return;
    }
    const {data} = await register(formValue);
    if(data.data.token){
      navigate("/");
    }
    else {
      setErrorNotification(data.data.message);
    }
  }

  return (
    <div className={cx("container", "sign-in-container")}>
      <h2 className={cx("sign-in-heading", "text-center", "pb-5")}>
        Tạo Hồ Sơ
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
            placeholder="Tên(Tùy Chọn)"
            name="username"
            value={username}
            onChange={handleChangeField}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={cx(
              "username-input",
              "form-control",
              "w-100",
              " py-3",
              "rounded-4"
            )}
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            value={email}
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
            placeholder="Mật Khẩu"
            name="password"
            value={password}
            onChange={handleChangeField}
            required
          />
          <div className={cx("forgot-pw")}>
            <a href="">icon</a>
          </div>
          <ErrorNotification errorNotification={errorNotification}/>
        </div>

        <button
          className={cx("sign-in-submit-btn", "w-100", "py-3", "rounded-4")}
          onClick={handleSubmit}
        >
          Tạo Tài Khoản
        </button>
        
        <SocialLogin/>
      </form>
    </div>
  );
}

export default Register;
