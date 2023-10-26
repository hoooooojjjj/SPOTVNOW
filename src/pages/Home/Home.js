import React, { useEffect, useState } from "react";
import Navgation from "../../components/Navgation";
import LiveNow from "./LiveNow";
import VideoSlide from "./VideoSlide";

import VideoSlideLeage from "./VideoSlideLeage";
import TopVOD from "./TopVOD";
import Footer from "../../components/Footer";

import { db } from "../../myfirebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Loading from "../../components/Loading";

// 컬랙션 이름
const collectionName = [
  "today",
  "gold",
  "today_VOD",
  "prim",
  "cham",
  "TopVODs",
];

const Home = () => {
  // 데이터 저장 배열 state
  const [dataObj, setDataObj] = useState([]);

  // 데이터 가져오기
  const getData = async () => {
    const collections = []; // 컬랙션을 담을 배열

    // Promise.all을 사용하여 데이터를 병렬적으로 다 가져온 후 setDataObj 호출
    await Promise.all(
      collectionName.map(async (name) => {
        const documents = []; // 문서를 담을 배열
        const querySnapshot = await getDocs(
          query(collection(db, name), orderBy("url", "asc")) // url을 기준으로 오름차순 정렬
        );
        querySnapshot.forEach((doc) => {
          documents.push(doc.data()); // documents에 각 문서의 필드 저장
        });
        collections.push(documents); // collections에 각 documents 저장
      })
    );
    setDataObj(collections); // 상태에 collections 할당
  };
  // title 변경
  useEffect(() => {
    const title = document.getElementsByTagName("title")[0];
    title.innerText = "SPOTV NOW(스포티비 나우)";

    // 데이터 read
    getData();
  }, []);

  console.log(dataObj[5]);
  return (
    <div className="Home">
      {dataObj.length > 0 ? (
        <>
          <header>
            <Navgation />
          </header>
          <main>
            <div className="home_element_wrap">
              <LiveNow />
              <VideoSlide
                title={"[항저우 NOW] 오늘의 아시안게임"}
                VideoSlideInfo={dataObj[0]}
              />
              <VideoSlide
                title={"[항저우 NOW] 금빛으로 물든 순간들✨"}
                VideoSlideInfo={dataObj[1]}
              />
              <VideoSlide
                title={"오늘의 추천 VOD"}
                VideoSlideInfo={dataObj[2]}
              />
              <VideoSlideLeage
                title={"프리미어리그"}
                VideoSlideInfo={dataObj[3]}
                logo={"prim"}
              />
              <VideoSlideLeage
                title={"챔피언스리그"}
                VideoSlideInfo={dataObj[4]}
                logo={"cham"}
              />
              <TopVOD title={"인기영상"} VideoSlideInfo={dataObj[5]} />
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default React.memo(Home);
