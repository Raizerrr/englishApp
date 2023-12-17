import Sidebar from "./Sidebar";
import Task from "./Task";
import classNames from "classnames/bind";
import Style from "./DefaultLayout.module.scss";
// import WelcomeModal from "../../WelcomeModal";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
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
            <div className={cx("mobile-header", "d-flex", "d-lg-none")}>
              <div className=" row w-100">
                <div className="col-3">
                  <div
                    className={cx(
                      "d-flex",
                      "nav-item",
                      "d-flex",

                      "justify-content-center",
                      "align-items-center",
                      "p-3",
                      "mt-3"
                    )}
                    style={{ height: "105px" }}
                  >
                    <Link to="/learn">
                      <div className={cx("logo-container", "d-sm-none")}>
                        <img src={logo} alt="logo" className="img-fluid" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div
                  className={cx(
                    "col-9",
                    "d-flex",
                    "justify-content-center",
                    "align-items-center"
                  )}
                >
                  <UserEnviroment />
                </div>
              </div>
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
