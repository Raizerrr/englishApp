import classNames from "classnames/bind";
import Style from "./learn.module.scss";
import { BlockLearnPage } from "../../component/Block/BlockLearnPage";
import { useCourseContext } from "../../context/CourseContext";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";


const cx = classNames.bind(Style);

function Learn() {
  const [level, setLevel] = useState();
  const {blocks} = useCourseContext();
  const {player} = useUserContext();

  useEffect(() => {
    if(player === null) {
      const account = JSON.parse(localStorage.getItem("account"));
      setLevel(account?.level);
    }
    else {
      console.log(level);
      setLevel(player?.currentLevel);
    }
  }, [])
  
  return (
    <div>
      <div className={cx("container", "my-4")}>
        {/* course section  */}
        {blocks?.length > 0 ? (
          <div className="row">
            {blocks?.map((block, index) => (
              <BlockLearnPage block={block} index={index+1} level={level} />

            ))}
          </div>

        ): (
          <h1 style={{textAlign: "center"}}>This level don't have any block</h1>
        )}
        {/* each course section */}

        {/* course section  */}
      </div>
    </div>
  );
}

export default Learn;
