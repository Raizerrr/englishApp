import classNames from "classnames/bind";
import Style from "../AddFriendModal/AddFriendModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(Style);

function AddFriendModal(props) {
  return (
    <>
      <div
        className={cx(
          "add-friend-modal-wrapper",
          "d-flex",
          "justify-content-center",
          "align-items-center"
        )}
      >
        <div
          className={cx("add-friend-overlay")}
          onClick={() => {
            props.clickToOpenHandle();
          }}
        ></div>
        <div
          className={cx("add-friend-container", "position-relative", "py-5")}
        >
          <button
            className={cx("close-btn")}
            onClick={() => {
              props.clickToOpenHandle();
            }}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
          <div
            className={cx(
              "search-friend-to-add-input-container",
              "position-relative",
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "my-5"
            )}
          >
            <input
              type="text"
              className={cx(
                "search-friend-to-add-input",
                "px-3",
                "py-2",
                "rounded-4"
              )}
            />
            <button className={cx("search-user-btn", "p-2")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div
            className={cx(
              "user-searched-list-wrapper",
              "d-flex",
              "justify-content-center",
              "align-items-center",
              "px-3"
            )}
          >
            <div className={cx("user-searched-list-container", "rounded-4")}>
              {/* <ul className={cx("user-searched-list")}>
                  <li className={cx("user-searched-item")}>
                    <div className="row">
                      <div className="col-2">
                        <div className="user-searched-avatar-container">
                          <img
                            src=""
                            alt=""
                            className={cx("user-searched-avatar")}
                          />
                        </div>
                      </div>
                      <div className="col-10">
                        <div className={cx("user-searched-infor-container")}>
                          <h3 className={cx("user-searched-name")}>Phu le</h3>
                          <small className={cx("user-searched-nick-name")}>
                            Raizer
                          </small>
                        </div>
                      </div>
                    </div>
                  </li> */}

              <ul className={cx("friend-list")}>
                <li
                  className={cx("friend-display", "mb-3", "py-3", "rounded-3")}
                >
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <div className={cx("friend-avatar-container")}>
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
                      <small className={cx("friend-nick-name")}>Raizer</small>
                    </div>
                  </div>
                </li>
                <li
                  className={cx("friend-display", "mb-3", "py-3", "rounded-3")}
                >
                  <div className="row">
                    <div className="col-2 d-flex justify-content-center">
                      <div className={cx("friend-avatar-container")}>
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
                      <small className={cx("friend-nick-name")}>Raizer</small>
                    </div>
                  </div>
                </li>
              </ul>
              {/* </ul> */}
            </div>
          </div>
          <button className={cx("add-friend-button")}>Add Friend</button>
        </div>
      </div>
    </>
  );
}

export default AddFriendModal;
