import classNames from "classnames/bind";
import Style from "../PremiumLayout/Premium.module.scss";
import PremiumHeader from "./PremiumHeader";

const cx = classNames.bind(Style);

function PremiumLayout({ children }) {
  return (
    <>
      <div className="contaner-fluid">
        <div className={cx("premium-container", "p-0", "py-5")}>
          <PremiumHeader />

          {children}
        </div>
      </div>
    </>
  );
}

export default PremiumLayout;
