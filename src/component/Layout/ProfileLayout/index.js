import classNames from "classnames/bind";
import Style from "../ProfileLayout/ProfileLayout.module.scss";
import Sidebar from "../DefaultLayout/Sidebar";
import Follower from "./Follower";
import AddFriendModal from "../../AddFriendModal";
import { useState } from "react";

const cx = classNames.bind(Style);

function ProfileLayout({ children }) {
  const [modalState, setModalState] = useState(false);

  const toggleModalHandle = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <div className={cx("d-none", { ["show"]: modalState })}>
        <AddFriendModal clickToOpenHandle={toggleModalHandle} />
      </div>
      <div className="container-fluid">
        <div className={cx("row", "profile-layout-container")}>
          <div className="">
            <Sidebar />
          </div>
          <div className="col-12 col-lg-8">
            <div className="content" style={{ height: " 2000px" }}>
              {children}
            </div>
          </div>
          <div className={cx("d-none", "sticky", "col-lg-4", "d-lg-block")}>
            <Follower clickToOpenHandle={toggleModalHandle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
