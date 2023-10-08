import classNames from "classnames/bind";
import LoginLayoutScss from "./LoginLayout.module.scss";

const cx = classNames.bind(LoginLayoutScss);

export const ErrorNotification = ({errorNotification}) => {
    return (
        <p className={cx("error-message")}>{errorNotification}</p>
    )
}