import Sidebar from "../DefaultLayout/Sidebar";

import classNames from "classnames/bind";
import Style from "../DefaultLayout/DefaultLayout.module.scss";

const cx = classNames.bind(Style);

function DefaultLayout({ children }) {
  return (
    <>
      <div className="container-fluid">
        <Sidebar />

        <div className={cx("course-container")}>
          <div className="d-flex justify-content-center align-items-center px-5">
            <div className="content" style={{ maxWidth: "850px" }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
