import classNames from "classnames/bind";
import Style from "./Payment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Tabs from "../../component/Tabs";

const cx = classNames.bind(Style);

function Payment() {
  return (
    <>
      <div
        className={cx(
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "my-5"
        )}
      >
        <div className={cx("payment-container", "p-5", "rounded-4")}>
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default Payment;
