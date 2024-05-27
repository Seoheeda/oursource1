import React from "react";
import styled from "styled-components";
import pinkRoom from "./assets/pinkRoom.png";
import PinkRoom from './pinkRoom';

const Room = () => {

  return (
    <Container>
      <PinkRoom/>
    </Container>
  );
};

export default Room;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  position: relative;
  background-image: url(${pinkRoom});
  background-size: cover; /* Ensures the image covers the entire container */
  background-position: center; /* Centers the image */
`;