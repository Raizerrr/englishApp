import classNames from "classnames/bind";
import Style from "./ExpEarningPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function ExpEarningPopup(props) {
  return (
    <>
      <div
        className={cx(
          "exp-earning-popup-wrapper",
          "justify-content-center",
          "align-items-center",
          "d-flex"
        )}
      >
        <div className={cx("overlay")}></div>

        <div className={cx("exp-earning-popup-container", "p-5")}>
          <button
            className={cx("close-btn", "rounded-circle")}
            onClick={() => {
              props.ClicktoOpenPopup();
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className={cx("exp-earning-popup-title", "mb-5")}>
            Bạn nhận được 10 kinh nghiệm
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button
              className={cx(
                "exp-earning-popup-btn",
                "px-3",
                "py-2",
                "rounded-4",
                "mt-5"
              )}
              onClick={() => {
                props.ClicktoOpenPopup();
              }}
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpEarningPopup;