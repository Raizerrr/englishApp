import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";
import SettingNav from "../../component/Layout/SettingLayout/SettingNav";
import { useLocation, useParams } from "react-router-dom";
import Task from "../../component/Layout/DefaultLayout/Task";
import { ChangePasswordDefaultPage } from "./ChangePasswordDefaultPage";
import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import { SendEmailForResetPasswordPage } from "./SendEmailForResetPasswordPage";
import { WaitingForEmailPage } from "./WaitingForEmailPage";
import { ResetPasswordPage } from "./ResetPasswordPage";

const cx = classNames.bind(Style);
function ChangePassword() {
  const location = useLocation();
  const {user, player} = useUserContext();
  const {token} = useParams();

  useEffect(() => {
    // alert(token)
  }, [])


  const getCorrectPage = () => {
    if(location.pathname==="/sendEmail") {
      return <SendEmailForResetPasswordPage/>
    }
    else if(location.pathname==="/waitingPage"){
      return <WaitingForEmailPage/>
    }
    else if(player?.userId !== undefined) {
      return <ChangePasswordDefaultPage/>
    }
    else {
      return <ResetPasswordPage/>
    }
  }

  return (
    <div>
      <Sidebar />
      <div className="row">
        <div className="col-8">
          {getCorrectPage()}
        </div>
        <div className="col-4">
          {user !== null ? (

              <SettingNav />
          ): (
            <Task/>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
