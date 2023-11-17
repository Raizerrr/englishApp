import Sidebar from "./Sidebar";
import Task from "./Task";
import classNames from "classnames/bind";
import Style from "./DefaultLayout.module.scss";
import WelcomeModal from "../../WelcomeModal";

const cx = classNames.bind(Style);

function DefaultLayout({ children }) {
  return (
    <>
      <div className="container-fluid">
        {/* <div className={cx("welcome-modal-wrapper")}>
          <WelcomeModal />
        </div> */}
        <div className={cx("row", "course-container")}>
          <div className="">
            <Sidebar />
          </div>
          <div className="col-12 col-lg-8">
            <div className="content">{children}</div>
          </div>
          <div className={cx("d-none", "sticky", "col-lg-4", "d-lg-block")}>
            <Task />
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
