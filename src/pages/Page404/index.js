import classNames from "classnames/bind";
import styles from "./Page404.module.scss";

const cx = classNames.bind(styles);

function Page404() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <h1 className={cx("page-title")}>404 Error Page</h1>
        <p className={cx("zoom-area")}>
          <b>Oops!</b> Something wrong with your request.
        </p>
        <section className={cx("error-container")}>
          <span className={cx("four")}>
            <span className={cx("screen-reader-text")}>4</span>
          </span>
          <span className={cx("zero")}>
            <span className={cx("screen-reader-text")}>0</span>
          </span>
          <span className={cx("four")}>
            <span className={cx("screen-reader-text")}>4</span>
          </span>
        </section>
        <div className={cx("link-container")}>
          <a href="/" className={cx("more-link")}>
            Visit the original article
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page404;
