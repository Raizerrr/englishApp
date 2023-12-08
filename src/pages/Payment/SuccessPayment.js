import Style from "./Payment.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Style);

export const PaymentSuccess = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("printer-top")}></div>

      <div className={cx("paper-container")}>
        <div className={cx("printer-bottom")}></div>

        <div className={cx("paper")}>
          <div className={cx("main-contents")}>
            <div className={cx("success-icon")}>&#10004;</div>
            <div className={cx("success-title")}>Payment Complete</div>
            <div className={cx("success-description")}>
              Thank you for completing the payment! You will shortly receive an
              email of your payment.
            </div>
            <div className={cx("order-details")}>
              <div className={cx("order-number-label")}>Transaction ID</div>
              <div className={cx("order-number")}>123456789</div>
              <div className={cx("complement")}>Thank You!</div>
            </div>
          </div>
          <div className={cx("jagged-edge")}></div>
        </div>
      </div>
    </div>
  );
};
