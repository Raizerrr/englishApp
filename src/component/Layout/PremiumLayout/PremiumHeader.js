import classNames from "classnames/bind";
import Style from "../PremiumLayout/Premium.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(Style);

function PremiumHeader() {
  return (
    <>
      <div className={cx("premium-header")}>
        <div className="d-flex justify-content-between align-items-center px-3 ">
          <div className={cx("close-btn-container")}>
            <Link to={"/"} className={cx("close-btn", "p-2")}>
              <FontAwesomeIcon icon={faClose} />
            </Link>
          </div>
          <div className={cx("logo-container")}>
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/super/2e50c3e8358914df5285dc8cf45d0b4c.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumHeader;
