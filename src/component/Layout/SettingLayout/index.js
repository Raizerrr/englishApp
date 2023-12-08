import classNames from "classnames/bind";
import Style from "./../../../pages/SettingPage/Setting.module.scss";
import Sidebar from "../DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";

const cx = classNames.bind(Style);
function SettingLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className={cx("setting-layout-container")}>
        <div className="row">
          <div className="col-12 col-md-9 col-lg-8 p-3 p-sm-0">{children}</div>
          <div className="d-none col-md-3 col-lg-4 d-xxl-block">
            <SettingNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingLayout;
