import classNames from "classnames/bind";
import Style from "./UserEnviroment.module.scss";
import { useUserContext } from "../../../../context/UserContext";
import { useCourseContext } from "../../../../context/CourseContext";

const cx = classNames.bind(Style);

function UserEnviroment() {
  const {player, streakTotal, hearts} = useUserContext();
  const {checkOpenRank} = useCourseContext();
  return (
    <>
      <div className="row">
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "streak-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/398e4298a3b39ce566050e5c041949ef.svg"
                alt=""
              />
              {streakTotal}
            </div>
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "gem-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
                alt=""
              />
              {player?.expPoint}
            </div>
            <div
              className={cx(
                "col-3",
                "d-flex",
                "justify-content-around",
                "align-items-center",
                "heart-container"
              )}
            >
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
                alt=""
              />
              {hearts}
            </div>
          </div>
    </>
  );
}

export default UserEnviroment;
