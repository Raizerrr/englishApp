import classNames from "classnames/bind";
import Style from "./BuyingPopup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../../context/UserContext";

const cx = classNames.bind(Style);

function BuyingPopup(props) {

  const {updatePlayer, player} = useUserContext();

  const handleSubmitBuy = async() => {
    player.score -= props.price;
    await updatePlayer(player);
  }

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
              Bạn có chắc không ?
            </div>
            <div className={cx("buying-popup-desc", "my-3")}>
              Bạn sẽ mất 100 kim cương để đổi
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
                    props.ClickToClosePopup();
                  }}
                >
                  Quay lại
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
                  onClick={handleSubmitBuy}
                >
                  Đổi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyingPopup;