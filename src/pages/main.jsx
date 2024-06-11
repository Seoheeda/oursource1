import React from "react";
import styled from "styled-components";
import Door from "../components/door";
import yeWon from "../assets/title/yeWon.svg";
import ofCourse from "../assets/title/ofCource.svg";
import artists from "../assets/title/artists.svg";

const Main = () => {
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
