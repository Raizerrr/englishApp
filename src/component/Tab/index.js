import classNames from "classnames/bind";
import Style from "./Tab.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { usePaymentContext } from "../../context/PaymentContext";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const cx = classNames.bind(Style);
const initialOptions = {
  clientId: "Ad9Stp6E4rI9GCmOUdc5QEl3imwEmmjj6b-wYblC05er3PeaKvhy6FEgCMNMX7GreVMlLb0KwyFQYmuI",
  currency: "USD",
  intent: "capture",
};

function Tabs() {
  const [paymentToggle, setPaymentToggle] = useState(1);
  const [showOtherCurrency, setShowOtherCurrency] = useState("");
  const {paymentDetail, setPaymentDetail, payBillApi, saveBillDetail} = usePaymentContext();
  const updateToggleHandle = (id) => {
    setPaymentToggle(id);
  };

  const {cardNumber, cVV, expiredDate, currency, description} = paymentDetail;

  const handleChangeValue = (e) => {
    setPaymentDetail({...paymentDetail, [e.target.name]: e.target.value});
    saveBillDetail();
  }

  const handleSubmit = async() => {
    
    await payBillApi();
  }
  return (
    <>
      <div className={cx("tabs-container")}>
        <div className={cx("tabs-header", "pb-3", "border-bottom")}>
          <div className="row">
            <div
              className="col-4 d-flex justify-content-center align-items-center d-flex justify-content-center align-items-center"
              onClick={() => updateToggleHandle(1)}
            >
              <div
                className={cx(
                  "paypal-purcharse",
                  "payment-method",
                  "w-50",
                  "h-100",
                  "py-3",
                  {
                    isActive: paymentToggle === 1,
                  }
                )}
              >
                Paypal
              </div>
            </div>
            <div
              className="col-4 d-flex justify-content-center align-items-center"
              onClick={() => updateToggleHandle(2)}
            >
              <div
                className={cx(
                  "visa-purcharse",
                  "payment-method",
                  "w-50",
                  "h-100",
                  "py-3",

                  {
                    isActive: paymentToggle === 2,
                  }
                )}
              >
                Visa
              </div>
            </div>
            <div
              className="col-4 d-flex justify-content-center align-items-center"
              onClick={() => updateToggleHandle(3)}
            >
              <div
                className={cx(
                  "credit-card-purcharse",
                  "payment-method",
                  "w-100",
                  "h-100",
                  "py-3",

                  {
                    isActive: paymentToggle === 3,
                  }
                )}
              >
                Credit Card
              </div>
            </div>
          </div>
        </div>
        <div className={paymentToggle === 1 ? "d-block" : "d-none"}>
          <div className={cx("content", "pt-3")}>
            <div className="mb-3">
              <h1 className={cx("label", "mb-3")}>Đơn Vị Tiền Tệ</h1>
              <div className="position-relative">
                <select
                  name="currency"
                  
                  id=""
                  className={cx(
                    "currency-method-inputs",
                    "currency",
                    "w-100",
                    "p-3",
                    "text-center",
                    "rounded-4",
                    "mb-3"
                  )}
                  value={currency}
                  onChange={handleChangeValue}
                >
                  <option value="" disabled>
                    Chọn đơn vị tiền tệ của bạn
                  </option>
                  <option value="VND">VND</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                  <option value="other">Other</option>
                </select>

                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={cx("dropdown-icon")}
                />
              </div>
              <div
                className={showOtherCurrency == "other" ? "d-block" : "d-none"}
              >
                <h1 className={cx("label", "mb-3")}>Đơn Vị Tiền Tệ Khác</h1>
                <input
                  type="text"
                  className={cx(
                    "currency-method-inputs",
                    "other-currency-input",
                    "w-100",
                    "p-3",
                    "text-center",
                    "rounded-4",
                    "mb-3 "
                  )}
                  required
                  placeholder="Nhập đơn vị tiền tệ của bạn tại đây"
                />
              </div>
            </div>
            <div className="mb-3">
              <div className={cx("desc-container")}>
                <h1 className={cx("label", "mb-3")}>Thông tin thanh toán</h1>
                <textarea
                  rows={4}
                  className={cx(
                    "desc-area",
                    "currency-method-inputs",
                    "w-100",
                    "p-3",
                    "rounded-4"
                    
                  )}
                  name="description"
                  value={description}
                  onChange={handleChangeValue}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={paymentToggle === 2 ? "d-block" : "d-none"}>
          <div className={cx("content", "pt-3", "mb-5")}>
            <div className="mb-3">
              <h1 className={cx("label", "mb-3")}>Số thẻ</h1>
              <input
                className={cx(
                  "Card-holder-number",
                  "currency-method-inputs",
                  "w-100",
                  "p-3",
                  "rounded-4",
                  "mb-3 "
                )}
                required
                placeholder="1234 1234 1234 1234"
                name="cardNumber"
                value={cardNumber}
                onChange={handleChangeValue}
              />
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <h1 className={cx("label", "mb-3")}>Ngày hết hạn</h1>
                <input
                  className={cx(
                    "expiration-day-input",
                    "currency-method-inputs",
                    "w-100",
                    "p-3",
                    "rounded-4",
                    "mb-3 "
                  )}
                  required
                  placeholder="MM / YY"
                  name="expiredDate"
                  value={expiredDate}
                  onChange={handleChangeValue}
                />
              </div>
              <div className="col-4">
                <h1 className={cx("label", "mb-3")}>VCV</h1>
                <input
                  className={cx(
                    "VCV-number",
                    "currency-method-inputs",
                    "w-100",
                    "p-3",
                    "rounded-4",
                    "mb-3 "
                  )}
                  required
                  placeholder="VCV"
                  name="cVV"
                  value={cVV}
                  onChange={handleChangeValue}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={paymentToggle === 3 ? "d-block" : "d-none"}>
          <div className={cx("content", "pt-3", "mb-5")}>
            <div className="mb-3">
              <h1 className={cx("label", "mb-3")}>Số thẻ</h1>
              <input
                className={cx(
                  "Card-holder-number",
                  "currency-method-inputs",
                  "w-100",
                  "p-3",
                  "rounded-4",
                  "mb-3 "
                )}
                required
                placeholder="1234 1234 1234 1234"
                name="cardNumber"
                value={cardNumber}
                onChange={handleChangeValue}
              />
            </div>
            <div className="row mb-3">
              <div className="col-8">
                <h1 className={cx("label", "mb-3")}>Ngày hết hạn</h1>
                <input
                  className={cx(
                    "expiration-day-input",
                    "currency-method-inputs",
                    "w-100",
                    "p-3",
                    "rounded-4",
                    "mb-3 "
                  )}
                  required
                  name="expiredDate"
                  value={expiredDate}
                  onChange={handleChangeValue}
                  placeholder="MM / YY"
                />
              </div>
              <div className="col-4">
                <h1 className={cx("label", "mb-3")}>CVV</h1>
                <input
                  className={cx(
                    "CVV-number",
                    "currency-method-inputs",
                    "w-100",
                    "p-3",
                    "rounded-4",
                    "mb-3 "
                  )}
                  required
                  placeholder="CVV"
                  name="cVV"
                  value={cVV}
                  onChange={handleChangeValue}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("tabs-footer", "py-5")}>
          <div className={cx("term-container")}>
            <p className={cx("term")}>
              By providing your card information, you charge your card for
              future payments in accordance with their terms.
            </p>
          </div>
          <div
            className={cx(
              "purcharse-btn-container",
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "mt-5"
            )}
          >
            {paymentToggle===1 ? (
              <>
                <PayPalScriptProvider options={initialOptions}>
                  <PayPalButtons onClick={handleSubmit}/>

                </PayPalScriptProvider>
              </>
            ): (
              <button onClick={handleSubmit} type="submit" className={cx("btn", "purcharse-btn")}>
                Bắt đầu 14 ngày dùng thử miễn phí
              </button>

            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;