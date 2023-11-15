import classNames from "classnames/bind";
import Style from "./SkiippedPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../../context/UserContext";

const cx = classNames.bind(Style);

function SkippedPopup(props) {

  return (
    <>
      <div
        className={cx(
          "buying-popup-wrapper",
          "justify-content-center",
          "align-items-center",
          "d-flex"
        )}
      >
        <div
          className={cx("overlay")}
        ></div>
        <div className={cx("buying-popup-container")}>
          <div className={cx("absolute-box")}></div>
          <button
            className={cx("btn-close", "p-3")}
            onClick={props.ClickToClosePopup}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className={cx("content-container", "p-5")}>
            <div className={cx("buying-popup-title", "mb-4")}>
              Cùng giải quyết nhũng câu hỏi mà bạn đã bỏ qua nào
            </div>
            <div className={cx("buying-popup-desc", "my-3")}>
              Let't go
            </div>
            <div className="row pt-5">
              <div className="col justify-content-center align-items-center d-flex">
                <button
                  className={cx(
                    "buying-popup-btn",
                    "px-3",
                    "py-2",
                    "rounded-4",
                    "cancel-btn"
                  )}
                  onClick={() => {
                    props.returnHome();
                  }}
                >
                  Kết thúc bài
                </button>
              </div>
              <div className="col justify-content-center align-items-center d-flex">
                <button
                  className={cx(
                    "buying-popup-btn",
                    "px-3",
                    "py-2",
                    "rounded-4",
                    "buy-in-btn"
                  )}
                  onClick={props.ClickToClosePopup}
                >
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkippedPopup;