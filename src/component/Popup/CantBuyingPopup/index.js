import classNames from "classnames/bind";
import Style from "./CantBuyingPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const cx = classNames.bind(Style);

function CantBuyingPopup(props) {
  const navigate = useNavigate();

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
          onClick={() => {
            props.ClickToClosePopup();
          }}
        ></div>
        <div className={cx("buying-popup-container")}>
          <div className={cx("absolute-box")}></div>
          <button
            className={cx("btn-close", "p-3")}
            onClick={() => {
              props.ClickToClosePopup();
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div className={cx("content-container", "p-5")}>
            <div className={cx("buying-popup-title", "mb-4")}>
              Rấc tiếc! Bạn không đủ Kim Cương
            </div>
            <div className={cx("buying-popup-desc", "my-3")}>
              Cần 100 Kim Cương để đổi
            </div>
            <div className="row pt-5">
              <div className="col justify-content-center align-items-center d-flex">
                <button
                  className={cx(
                    "buying-popup-btn",
                    "px-3",
                    "py-2",
                    "rounded-4",
                    "premium-btn"
                  )}

                  onClick={() => navigate("/premium")}
                >
                  Mua gói Super
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
                      onClick={() => navigate("/")}
                    >
                  Học để kiếm thêm Kim Cương
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CantBuyingPopup;