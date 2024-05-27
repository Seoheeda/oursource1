import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const location = useLocation();
  const { doorIndex } = location.state || {};
  const navigate = useNavigate();

  const clickNotebook = () => {
    navigate("/interview", { state: { doorIndex: doorIndex } });
  };

  const clickPicture = () => {
    navigate("/piece", { state: { doorIndex: doorIndex } });
  };

  return (
    <Container>
      {doorIndex !== undefined && <div>{doorIndex + 1}번 작가임</div>}
      <div className="notebook" onClick={clickNotebook}>노트북임</div>
      <div className="picture" onClick={clickPicture}>그림임</div>
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
    cursor: pointer;
  }
  .picture {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    text-align: center;
    cursor: pointer;
  }
`;
