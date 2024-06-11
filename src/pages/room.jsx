import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import pinkRoom from "../assets/pink/pinkRoom.svg";
// import pinkNote from "../assets/pink/pinkNote.svg";
// import pinkPic1 from "../assets/pink/pinkPic1.svg";
// import pinkPic2 from "../assets/pink/pinkPic2.svg";
import ROOMS from "../util/rooms";

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

  const clickPicture2 = () => {
    navigate("/piece2", { state: { doorIndex: doorIndex } });
  };

  const color = (index) => {
    switch (index) {
      case 1:
        return ROOMS.pink;
      case 2:
        return ROOMS.red;
      case 3:
        return ROOMS.purple;
      case 4:
        return ROOMS.green;
      default:
        return ROOMS.yellow;
    }
  };

  const roomAssets = color(doorIndex);

  return (
    <Wrap>
      <Container>
        <div>
          <img className="room" src={roomAssets.room} alt="Room"></img>
          <img
            className="note"
            onClick={clickNotebook}
            src={roomAssets.note}
            alt="Notebook"
          ></img>
          <img
            className="pic1"
            onClick={clickPicture}
            src={roomAssets.pic1}
            alt="Picture1"
          ></img>
          <img
            className="pic2"
            onClick={clickPicture2}
            src={roomAssets.pic2}
            alt="Picture2"
          ></img>
        </div>
      </Container>
    </Wrap>
  );
};

export default Room;

const Wrap = styled.div`
  display: flex;
  width: 1479px;
  height: 2720px; /* Default height */
  /* justify-content: center; */

  @media (max-width: 480px) {
    height: 2500px; /* Height for mobile devices */
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    height: 1000px; /* Height for tablets or small desktops */
  }
`;

const Container = styled.div`
  display: flex;
  width: 1479px;
  height: 100%;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  position: relative; /* Add relative positioning to the container */

  .room {
    width: 100%;
    height: 100%;
  }
  .note,
  .pic1,
  .pic2 {
    position: absolute;
    cursor: pointer;
    transition: opacity 0.3s ease; /* Smooth transition for opacity */
  }
  .note:hover,
  .pic1:hover,
  .pic2:hover {
    opacity: 0.6; /* Change opacity on hover */
  }
  .note {
    width: 150px;
    top: 370px;
    left: 600px;
  }
  .pic1 {
    width: 100px;
    top: 140px;
    left: 620px;
  }
  .pic2 {
    width: 110px;
    top: 270px;
    left: 470px;
  }
`;
