import classNames from "classnames/bind";
import Style from "../PremiumLayout/Premium.module.scss";
import PremiumHeader from "./PremiumHeader";

const cx = classNames.bind(Style);

function PremiumLayout({ children }) {
  return (
    <>
      <div className="contaner-fluid">
        <div className={cx("premium-container", "p-5")}>
          <PremiumHeader />
          <div
            className={cx(
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "my-5"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default PremiumLayout;
