import classNames from "classnames/bind";
import Style from "../AddFriendModal/AddFriendModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";

const cx = classNames.bind(Style);


function AddFriendModal(props) {
  const { users, setUsers, addNewFriend, getUsersByCondition, user, getFriends } = useUserContext();
  const [addedFriendId, setAddedFriendId] = useState(null);
  const [search, setSearch] = useState("");

  const handleBlockUser = (friendId) => {
    setAddedFriendId(friendId);
  }


  const handleSearch = (e) => {
    setSearch(e.target.value);
    if(search !== "") {
      setAddedFriendId(null);
      setUsers(users?.map(user => user?.username?.includes(search)));
      
    }
    else {
      getUsersByCondition(user?.id);
    }
  }


  const handleAddNewFriend = () => {
    addNewFriend(addedFriendId);
    getFriends(user?.id);

  }
  

  return (
    <>
      <div className={cx("add-friend-modal-wrapper")}>
        <div
          className={cx(
            "add-friend-overlay",
            "d-flex",
            "justify-content-center",
            "align-items-center"
          )}
        >
          <div className={cx("add-friend-container", "position-relative")}>
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
                  "rounded-3"
                )}
                value={search}
                onChange={handleSearch}

                placeholder={addedFriendId!==null?users?.find(user => user.id === addedFriendId).username:null}
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
              <div
                className={cx(
                  "user-searched-list-container",
                  "rounded-3",
                  "p-2"
                )}
              >

                <ul className={cx("friend-list")}>
                  {users?.length > 0 ? (
                    <>
                      {users?.map((user) => (
                        <li
                          className={cx(
                            "friend-display",
                            "mb-3",
                            "py-2",
                          )}
                          style={{
                            backgroundColor: `${user?.id===addedFriendId?"#cccccc3a":"#fff"}`,
                            
                          }}
                          onClick={() => handleBlockUser(user?.id)}
                        >
                          <div className="row">
                            <div className="col-2">
                              <div className={cx("friend-avatar-container")}>
                                <img
                                  src={
                                    user?.avatar
                                      ? user.avatar
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P6wm44mHnNrjQMQ7EdGgsz5iT4rsqnY_4Q&usqp=CAU"
                                  }
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
                            <div className="col-8 px-3 py-2">
                              <h3 style={{color: `${user?.id===addedFriendId?"#000":"#aaa"}`}} className={cx("friend-name", "my-0")}>
                                {user?.username}
                              </h3>
                              <small className={cx("friend-nick-name")}>
                                {user?.email}
                              </small>
                            </div>
                          </div>
                        </li>
                      ))}
                    </>
                  ) : (
                    <></>
                  )}
                </ul>
                {/* </ul> */}
              </div>
            </div>
            <button onClick={handleAddNewFriend} className={cx("add-friend-button", addedFriendId===null&&"disabled")}>Add Friend</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFriendModal;
