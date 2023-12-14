import Sidebar from "./Sidebar";
import Task from "./Task";
import classNames from "classnames/bind";
import Style from "./DefaultLayout.module.scss";
import WelcomeModal from "../../WelcomeModal";
import UserEnviroment from "../LayoutsComponent/UserEnviroment";

const cx = classNames.bind(Style);

function DefaultLayout({ children }) {
  return (
    <>
      <div className="container-fluid p-0 pe-2">
        {/* <div className={cx("welcome-modal-wrapper")}>
          <WelcomeModal />
        </div> */}
        <div className={cx("row", "course-container")}>
          <div className="">
            <Sidebar />
          </div>
          <div className="col-12 col-lg-8">
            <div
              className={cx(
                "mobile-header",
                "d-flex",
                "d-sm-none",
                "justify-content-center",
                "align-items-center"
              )}
            >
              <UserEnviroment />
            </div>
            <div className={cx("content")}>{children}</div>
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
