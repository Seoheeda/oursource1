import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";

const InterViewRed = () => {
  const location = useLocation();

  return (
    <Container>
      <Screen>
        <Top>
          <div className="red"/>
          <div className="yellow"/>
          <div className="green"/>
          <img src={menu} alt="menu" className="menu"/>
          <img src={bookmark} alt="bookmark" className="menu"/>
        </Top>
      </Screen>
    </Container>
  );
};

export default InterViewRed;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3880px;
  align-items: center;
  flex-direction: column;
  background-color: #FFADAD;
  overflow-x: scroll;
`;

const Top = styled.div`
  background-color: #F7F7F5;
  width: 1300px;
  height: 50px;
  margin-top: 0px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  align-items: center;
  .red {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #EC6A5E;
    margin-left: 20px;
  }
  .yellow {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #F4BF4F;
    margin-left: 10px;
  }
  .green {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #62C554;
    margin-left: 10px;
  }
  .menu {
    padding-left: 10px;
  }
`;
const Screen = styled.div`
  width: 1300px;
  height: 3000px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
`;
