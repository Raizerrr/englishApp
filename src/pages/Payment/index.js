import classNames from "classnames/bind";
import Style from "./Payment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Tabs from "../../component/Tab";
const cx = classNames.bind(Style);

function Payment() {

  return (
    <>
      <div className={cx("payment-container", "p-5", "rounded-4")}>
        <Tabs />
      </div>
    </>
  );
}

export default Payment;