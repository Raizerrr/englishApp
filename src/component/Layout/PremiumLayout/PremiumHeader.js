import classNames from "classnames/bind";
import Style from "../PremiumLayout/Premium.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function PremiumHeader() {
  return (
    <>
      <div className={cx("premium-header")}>
        <div className="d-flex justify-content-between align-items-center">
          <div className={cx("close-btn-container")}>
            <button className={cx("close-btn", "p-2")}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className={cx("logo-container")}>
            <a href="/">Logo</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumHeader;
