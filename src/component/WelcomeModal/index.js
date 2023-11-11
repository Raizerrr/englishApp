import classNames from "classnames/bind";
import Style from "./ResultModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function WelcomeModal() {
  return <div className={cx("welcome-modal-wrapper")}></div>;
}

export default WelcomeModal;
