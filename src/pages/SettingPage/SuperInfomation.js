import classNames from "classnames/bind";
import Style from "./Setting.module.scss";
import Sidebar from "../../component/Layout/DefaultLayout/Sidebar";
import SettingNav from "./SettingNav";

const cx = classNames.bind(Style);

function SuperInfomation() {
  return (
    <div className="container-fluid p-0">
      <Sidebar />
      <div className="row">
        <div className="col-8">
          <div
            className={cx(
              "container",
              "d-flex",
              "justify-content-center",
              "align-items-center"
            )}
          >
            <div className={cx("super-inf-container")}>
              <div className={cx("card", "card-container", "my-4")}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-2 p-3">
                      <img
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/e07e459ea20aef826b42caa71498d85f.svg"
                        className="w-100"
                        alt=""
                      />
                    </div>
                    <div className="col-10">
                      <p className={cx("card-text", "premium-text")}>
                        Bắt đầu 2 tuần dùng thử miễn phí để tận hưởng các quyền
                        lợi độc quyền của Super
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className={cx(
                      "btn",
                      "premium-btn",
                      "w-100",
                      "p-3",
                      "my-3",
                      "rounded-4"
                    )}
                  >
                    Bắt đầu 14 ngày dùng thử miễn phí
                  </a>
                </div>
              </div>

              <div className={cx("information-container")}>
                <h1 className={cx("inf-title")}>
                  Super Duolingo có những tính năng nào
                </h1>
                <div className="row my-5">
                  <div className="col-6">
                    <div
                      className={cx(
                        "super-feature-container",
                        "mb-4",
                        "p-4",
                        "rounded-5"
                      )}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="https://d35aaqx5ub95lt.cloudfront.net/images/legendary/158dbe277bf83116d04692b969a27aa3.svg"
                            alt=""
                            className="w-100 py-2"
                          />
                        </div>
                        <div className="col-10">
                          <h1 className={cx("super-inf-label", "p-1")}>
                            Gỡ giới hạn Huyền thoại
                          </h1>
                          <p className={cx("super-inf-desc", "p-1")}>
                            Chinh phục cấp độ Huyền thoại mà không cần trả đá
                            quý
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className={cx(
                        "super-feature-container",
                        "mb-4",
                        "p-4",
                        "rounded-5"
                      )}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="https://d35aaqx5ub95lt.cloudfront.net/images/legendary/158dbe277bf83116d04692b969a27aa3.svg"
                            alt=""
                            className="w-100 py-2"
                          />
                        </div>
                        <div className="col-10">
                          <h1 className={cx("super-inf-label", "p-1")}>
                            Gỡ giới hạn Huyền thoại
                          </h1>
                          <p className={cx("super-inf-desc", "p-1")}>
                            Chinh phục cấp độ Huyền thoại mà không cần trả đá
                            quý
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className={cx(
                        "super-feature-container",
                        "mb-4",
                        "p-4",
                        "rounded-5"
                      )}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="https://d35aaqx5ub95lt.cloudfront.net/images/legendary/158dbe277bf83116d04692b969a27aa3.svg"
                            alt=""
                            className="w-100 py-2"
                          />
                        </div>
                        <div className="col-10">
                          <h1 className={cx("super-inf-label", "p-1")}>
                            Gỡ giới hạn Huyền thoại
                          </h1>
                          <p className={cx("super-inf-desc", "p-1")}>
                            Chinh phục cấp độ Huyền thoại mà không cần trả đá
                            quý
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className={cx(
                        "super-feature-container",
                        "mb-4",
                        "p-4",
                        "rounded-5"
                      )}
                    >
                      <div className="row">
                        <div className="col-2">
                          <img
                            src="https://d35aaqx5ub95lt.cloudfront.net/images/legendary/158dbe277bf83116d04692b969a27aa3.svg"
                            alt=""
                            className="w-100 py-2"
                          />
                        </div>
                        <div className="col-10">
                          <h1 className={cx("super-inf-label", "p-1")}>
                            Gỡ giới hạn Huyền thoại
                          </h1>
                          <p className={cx("super-inf-desc", "p-1")}>
                            Chinh phục cấp độ Huyền thoại mà không cần trả đá
                            quý
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <SettingNav />
        </div>
      </div>
    </div>
  );
}

export default SuperInfomation;
