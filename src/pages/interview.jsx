import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import InterViewGreen from "../components/interview/interviewGreen";
import InterViewPink from "../components/interview/interviewPink";
import InterViewPurple from "../components/interview/interviewPurple";
import InterViewRed from "../components/interview/interviewRed";
import InterViewYellow from "../components/interview/interviewYellow";

const Room = () => {
  const location = useLocation();
  const { doorIndex } = location.state || {};

  const renderInterview = (index) => {
    switch (index) {
      case 0:
        return <InterViewYellow />;
      case 1:
        return <InterViewPink />;
      case 2:
        return <InterViewRed />;
      case 3:
        return <InterViewPurple />;  // Assuming you meant interviewPurple instead of interviewBlue
      case 4:
        return <InterViewGreen />;
      default:
        return null;
    }
  };

  return (
    <Container>
      {doorIndex !== undefined && (
        <>
          {renderInterview(doorIndex)}
        </>
      )}
    </Container>
  );
};

export default Room;

const Container = styled.div`
  display: flex;
  width: 100%;
  /* height: 740px; */
  justify-content: center;
  align-items: center;
  .notebook {
    width: 100px;
    height: 100px;
    background-color: pink;
    text-align: center;
  }
  .picture {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    text-align: center;
  }
`;

