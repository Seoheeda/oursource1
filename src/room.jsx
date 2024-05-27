import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pinkRoom from "./assets/pinkRoom.png";
import pinkNote from "./assets/pinkNote.png";
import pinkPic1 from "./assets/pinkPic1.png";
import pinkPic2 from "./assets/pinkPic2.png";

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
      <div>
        <img className="room" src={pinkRoom} alt="Room"></img>
        <img className="note" onClick={clickNotebook} src={pinkNote} alt="Notebook"></img>
        <img className="pic1" onClick={clickPicture} src={pinkPic1} alt="Picture1"></img>
        <img className="pic2" onClick={clickPicture} src={pinkPic2} alt="Picture2"></img>
      </div>
    </Container>
  );
};

export default Room;

const Container = styled.div`
  display: flex;
  width: 1525px;
  height: 865px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;
  position: relative; /* Add relative positioning to the container */

  .room {
    width: 100%;
    height: 100%;
  }
  .note, .pic1, .pic2 {
    position: absolute;
    cursor: pointer;
    transition: opacity 0.3s ease; 
  }
  .note:hover, .pic1:hover, .pic2:hover {
    opacity: 0.7; /* Change opacity on hover */
  }
  .note {
    width: 150px;
    top: 390px;
    left: 620px;
  }
  .pic1 {
    width: 80px;
    top: 150px;
    left: 640px;
  }
  .pic2 {
    width: 80px;
    top: 310px;
    left: 480px;
  }
`;
