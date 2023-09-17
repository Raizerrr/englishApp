import Sidebar from "./Sidebar";
import Task from "./Task";
import classNames from "classnames/bind";
import Style from "./DefaultLayout.module.scss";

const cx = classNames.bind(Style);

function DefaultLayout({ children }) {
  return (
    <>
      <div className="container-fluid">
        <Sidebar />

        <div className={cx("row", "course-container")}>
          <div className="col-8">
            <div className="content" style={{ height: " 2000px" }}>
              {children}
            </div>
          </div>
          <div className={cx("sticky", "col-4")}>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
