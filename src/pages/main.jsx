import { React, useEffect } from "react";
import styled from "styled-components";
import Door from "../components/door";
import yeWon from "../assets/title/yeWon.svg";
import ofCourse from "../assets/title/ofCource.svg";
import artists from "../assets/title/artists.svg";
import { firestore } from "../firebase";

const Main = () => {


  // < 이미 방문했다면 제외하기 >
  // useEffect(() => {
  //   // 로컬 스토리지에서 페이지 방문 여부 확인
  //   const hasVisited = localStorage.getItem('hasVisited');

  //   if (!hasVisited) {
  //     // 페이지를 처음 방문한 경우 Firestore 업데이트
  //     const views = firestore.collection("views");

  //     views.doc("view").get().then((doc) => {
  //       if (doc.exists) {
  //         const currentView = doc.data().view;
  //         const newView = currentView + 1;

  //         // newView 값을 Firestore에 업데이트
  //         views.doc("view").update({
  //           view: newView
  //         }).then(() => {
  //           console.log("조회수 기록 완료");
  //           // 페이지를 처음 방문한 것으로 로컬 스토리지에 기록
  //           localStorage.setItem('hasVisited', 'true');
  //         }).catch((error) => {
  //           console.error("Error updating document: ", error);
  //         });
  //       } else {
  //         console.log("no document");
  //       }
  //     }).catch((error) => {
  //       console.error("Error getting document: ", error);
  //     });
  //   } else {
  //     console.log("이미 방문한 사용자입니다.")
  //   }
  // }, []);


  useEffect(() => {
    const views = firestore.collection("views");
  
    views.doc("view").get().then((doc) => {
      // document의 데이터를 가져옴
      console.log(doc.data());
  
      const currentView = doc.data().view;
      const newView = currentView + 1;
  
      // newView 값을 Firestore에 업데이트
      views.doc("view").update({
        view: newView
      }).then(() => {
        console.log("조회수 기록 완료");
      }).catch((error) => {
        console.error("Error updating document: ", error);
      });
  
    }).catch((error) => {
      console.error("Error getting document: ", error);
    });
  }, []);

  return (
    <Container>
      <img className="yeWon" alt="yeWon" src={yeWon} />
      <DoorContainer>
        <img className="ofCourse" alt="ofCourse" src={ofCourse} />
        <div className="door">
          <Door />
        </div>
      </DoorContainer>
      <img className="artists" alt="artists" src={artists} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 1213px;
  height: 800px;
  justify-content: center;
  align-items: center;
  position: relative;
  /* background-color: gray; */

  .yeWon {
    position: absolute;
    top: 0;
  }
  .artists {
    position: absolute;
    bottom: 0;
  }
`;

const DoorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  position: absolute;
  left: 0;
  z-index: 10000;

  .ofCourse {
    margin-bottom: 90px;
    margin-right: 10px;
    display: flex;
    position: absolute;
  }
  .door {
  }
`;
