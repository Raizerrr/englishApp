import classNames from "classnames/bind";
import Style from "../../pages/SettingPage/Setting.module.scss";
import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(Style);

export const SendEmailButton = ({email}) => {
    const {sendEmailForResetPassword} = useUserContext();
    const navigate = useNavigate();
    

    const handleClickSend = async() => {
        await sendEmailForResetPassword(email);
        navigate("/waitingPage");
    }

    return (
        <button 
            className={cx("save-setting-btn", email!==""?null:"disabled")} 
            disabled={email!==""?false:true} 
            onClick={handleClickSend}
        >
            gửi
        </button>
    )
}