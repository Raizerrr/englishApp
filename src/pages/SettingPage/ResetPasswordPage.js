import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import { SaveButton } from "../../component/Buttons/SaveButton";
import { ErrorNotification } from "../../component/LoginLayout/ErrorNotification";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPasswordButton } from "../../component/Buttons/ResetPasswordButton";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(Style);

export const ResetPasswordPage = () => {
    const {user, setUser, errorMessage, setErrorMesage, checkTokenWhenResetPassword} = useUserContext();
    const {token} = useParams(); 
    const [formValue,setFormValue] = useState({
        newPassword: "",
        confirmNewPassword: ""
    });
    const navigate = useNavigate();
    

    const {newPassword, confirmNewPassword} = formValue;



    useEffect(() => {
      const fetchData = async() => {

            const result = await checkTokenWhenResetPassword(token);
            
            if(result?.expired){
                navigate("/learn");
            }
            setUser(result.userDetails);
        }

        fetchData();
    }, [])

    const handleChangeValue = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    }

    const checkDisableButton = () => {
        if(confirmNewPassword!==newPassword){
            setErrorMesage("Nhập lại mật khẩu không đúng");
            return false;
            
        }
        else if(confirmNewPassword==="" || newPassword===""){
            return false;
        }
        setErrorMesage("");
        return true;
    }

    return (
        <div
          className={cx(
            "container",
            "d-flex",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("change-pass-container", "my-3")}>
            <h1 className={cx("setting-title", "my-3")}>Mật khẩu</h1>
            <div className="my-5">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="" className={cx("setting-item-label")}>
                    Mật khẩu mới
                  </label>
                </div>

                <div className="col-9 ps-5">
                  <input
                    type="password"
                    className={cx(
                      "w-100",
                      "input-setting",
                      "p-3",
                      "rounded-4"
                    )}
                    name="newPassword"
                    value={newPassword}
                    onChange={handleChangeValue}

                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="" className={cx("setting-item-label")}>
                  Nhập lại mật khẩu mới
                  </label>
                </div>
                <div className="col-9 ps-5">
                  <input
                    type="password"
                    className={cx(
                      "w-100",
                      "input-setting",
                      "p-3",
                      "rounded-4"
                    )}
                    name="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={handleChangeValue}
                  />
                </div>
              </div>
            </div>
            <ErrorNotification errorNotification={errorMessage}/>
            <div className="mt-5">
              <ResetPasswordButton disableButton={checkDisableButton()} newPassword={newPassword}/>
            </div>
          </div>
        </div>
        
    )
}