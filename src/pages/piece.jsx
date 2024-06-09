import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GreenPiece2 from "../components/pieces/greenPiece2";
import PinkPiece2 from "../components/pieces/pinkPiece2";
import PurplePiece1 from "../components/pieces/purplePiece1";
import RedPiece2 from "../components/pieces/redPiece2";
import YellowPiece2 from "../components/pieces/yellowPiece2";

const Room = () => {
  const location = useLocation();
  const { doorIndex } = location.state || {};

  const renderInterview = (index) => {
    switch (index) {
      case 0:
        return <YellowPiece2 />;
      case 1:
        return <PinkPiece2 />;
      case 2:
        return <RedPiece2 />;
      case 3:
        return <PurplePiece1 />;  
      case 4:
        return <GreenPiece2 />;
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

