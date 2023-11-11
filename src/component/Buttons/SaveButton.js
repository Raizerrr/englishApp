import { useUserContext } from "../../context/UserContext";
import classNames from "classnames/bind";
import Style from "../../pages/SettingPage/Setting.module.scss";

const cx = classNames.bind(Style);


export const SaveButton = ({ oldPassword, disableButton }) => {
    const {updateUser} = useUserContext();

    const handleClickSave = async(e) => {
        e.preventDefault();
        await updateUser(oldPassword);
    }


    return (
        <button className={cx("save-setting-btn", disableButton?null:"disabled")} disabled={disableButton?false:true} onClick={handleClickSave}>
            lưu thay đổi
        </button>
    )
}