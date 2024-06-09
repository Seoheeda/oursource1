import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GreenPiece1 from "../components/pieces/greenPiece1";
import PinkPiece1 from "../components/pieces/pinkPiece1";
import PurplePiece2 from "../components/pieces/purplePiece2";
import RedPiece1 from "../components/pieces/redPiece1";
import YellowPiece1 from "../components/pieces/yellowPiece1";

const Room = () => {
  const location = useLocation();
  const { doorIndex } = location.state || {};

  const renderInterview = (index) => {
    switch (index) {
      case 0:
        return <YellowPiece1 />;
      case 1:
        return <PinkPiece1 />;
      case 2:
        return <RedPiece1 />;
      case 3:
        return <PurplePiece2 />;  
      case 4:
        return <GreenPiece1 />;
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

