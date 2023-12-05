import classNames from "classnames/bind";
import Style from "./learn.module.scss";
import { BlockLearnPage } from "../../component/Block/BlockLearnPage";
import { useCourseContext } from "../../context/CourseContext";
import { useUserContext } from "../../context/UserContext";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import loadingGif from '../../assets/gif/HfpPD3Ne.gif';
import { Spinner } from "../../component/Spinner/Spinner";
import { useLoadingAndTiming } from "../../hooks/useLoadingAndTiming";
const cx = classNames.bind(Style);

function Learn() {
  const [level, setLevel] = useState();
  const {blocks} = useCourseContext();
  const {player} = useUserContext();
  const loading = useLoadingAndTiming();


  useEffect(() => {
    if(player === null) {
      const account = JSON.parse(localStorage.getItem("account"));
      setLevel(account?.level);
    }
    else {
      setLevel(player?.currentLevel);
    }

    
  }, [])
  
  return (
    <div>
      <div className={cx("container", "my-4")}>
        {/* course section  */}
        {!loading ? (
          <>
              {blocks?.length > 0 ? (
                <div className="row">
                  {blocks?.map((block, index) => (
                    <BlockLearnPage block={block} index={index+1} level={level}/>

                  ))}
                </div>

              ): (
                <div style={{
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center"
                }}>
                  <img src={loadingGif} alt="wait until the page loads" />
    
                  <h1 style={{textAlign: "center"}}>Xin lỗi vì sự bất tiện này. Hiện chưa có bài học ở trình độ của bạn</h1>
                </div>
              )}
          </>
        ): (
          <>
            
            <Spinner/>
          </>
        )}
        {/* each course section */}

        {/* course section  */}
      </div>
    </div>
  );
}

export default Learn;
