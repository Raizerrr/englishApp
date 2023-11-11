import classNames from "classnames/bind";
import Style from "../Follower/Follower.module.scss";
import UserEnviroment from "../../LayoutsComponent/UserEnviroment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faSearch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUserContext } from "../../../../context/UserContext";

const cx = classNames.bind(Style);

function Follower(props) {
  const [showFriendFilter, setShowFriendFilter] = useState(false);
  const {friends} = useUserContext();

  const showFriendFilterHandle = () => {
    setShowFriendFilter(!showFriendFilter);
  };

  return (
    <>
      <div className="container my-4">
        <div className={cx("follower-section-container")}>
          <div className="pb-5">
            <UserEnviroment />
          </div>
          <div className={cx("follower-container")}>
            <div className={cx("friend-header", "row", "mb-3")}>
              <div className="col-9">
                <h1 className={cx("friend-section-title")}>Friends</h1>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col">
                    <div className={cx("add-friend-btn-container")}>
                      <button
                        className={cx(
                          "add-friend-btn",
                          "p-1",
                          "friend-header-btn"
                        )}
                        onClick={() => {
                          props.clickToOpenHandle();
                        }}
                      >
                        <FontAwesomeIcon icon={faUserPlus} />
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <div className={cx("search-friend-btn-container")}>
                      <button
                        className={cx(
                          "search-friend-btn",
                          "p-1",
                          "friend-header-btn"
                        )}
                        disabled={friends?.length > 0 ? false: true}
                        onClick={showFriendFilterHandle}
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={cx(
                "filter-friend-container",
                "py-3",
                "position-relative",
                {
                  ["show"]: showFriendFilter,
                }
              )}
            >
              <div>
                <input
                  type="text"
                  className={cx(
                    "input-search-filter",
                    "w-100",
                    "py-1",
                    "px-3",
                    "rounded-3"
                  )}
                />
                <button
                  className={cx("close-filter-friend-btn", "p-1")}
                  onClick={() => setShowFriendFilter(!showFriendFilter)}
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </div>

            <div className={cx("friend-container")}>
              <ul className={cx("friend-list")}>
                {friends?.length > 0 ? (
                  <>
                    {friends?.map(friend => (
                      <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                        <div className="row">
                          <div className="col-2">
                            <div className={cx("friend-avatar-container")}>
                              <div
                                className={cx("user-status", "online-status")}
                              ></div>
                              <img
                                src={friend?.avatar ? friend.avatar :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"}
                                className={cx(
                                  "friend-avatar",
                                  "img-fluid",
                                  "mb-3",
                                  "rounded-circle"
                                )}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-10 px-3 py-2">
                            <h3 className={cx("friend-name", "my-0")}>{friend?.username}</h3>
                            <small className={cx("friend-status")}>Online</small>
                          </div>
                        </div>
                      </li>

                    ))}
                  
                  </>

                ): (
                  <>
                    <h1 style={{color: "white"}}>Hãy thêm bạn bè để cùng nhau leo tháp nào</h1>
                  </>
                )}
                {/* <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "offline-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Offline</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li>
                <li className={cx("friend-display", "mb-3", "py-2", "px-3")}>
                  <div className="row">
                    <div className="col-2">
                      <div className={cx("friend-avatar-container")}>
                        <div
                          className={cx("user-status", "hang-on-status")}
                        ></div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                          className={cx(
                            "friend-avatar",
                            "img-fluid",
                            "mb-3",
                            "rounded-circle"
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 px-3 py-2">
                      <h3 className={cx("friend-name", "my-0")}>Phu le</h3>
                      <small className={cx("friend-status")}>Hang on</small>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Follower;
