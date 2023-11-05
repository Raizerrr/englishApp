import classNames from "classnames/bind";
import Style from "../../pages/Lesson/Lesson.module.scss";

const cx = classNames.bind(Style);

export const ReaheardButton = () => {
    const reheard = () => {
        
    }

    return (
        <button className={cx("skip-btn", "btn")} onClick={reheard}>
            Ôn lại
        </button>
    )
}