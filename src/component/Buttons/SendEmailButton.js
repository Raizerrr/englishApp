import classNames from "classnames/bind";
import Style from "../../pages/SettingPage/Setting.module.scss";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(Style);

export const SendEmailButton = ({email, setChecked}) => {
    const {sendEmailForResetPassword} = useUserContext();
    


    

    const handleClickSend = async() => {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!String(email).toLocaleLowerCase().match(emailRegex)){
            setChecked({
                validateEmail: false,
                running: false
            });
            return;
        }
        setChecked({
            validateEmail: null,
            running: true
        });
        await sendEmailForResetPassword(email);
        setChecked({
            validateEmail: true,
            running: false
        });
    }

    return (
        <button 
            className={cx("save-setting-btn", email!==""?null:"disabled")} 
            disabled={email!==""?false:true} 
            onClick={handleClickSend}
        >
            Gửi email
        </button>
    )
}