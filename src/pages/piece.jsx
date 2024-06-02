import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Room = () => {
  const location = useLocation();
  const { doorIndex } = location.state || {};

  return (
    <Container>
      {doorIndex !== undefined && <div>{doorIndex + 1}번 작가 작품 페이지임</div>}
    </Container>
  );
};

export default Room;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 740px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

