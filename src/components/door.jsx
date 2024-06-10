import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";
import DOORS from '../util/doors';

const Main = () => {
  const [currentDoor, setCurrentDoor] = useState(0);
  const doors = [DOORS.yellow, DOORS.pink, DOORS.red, DOORS.purple, DOORS.green];
  const navigate = useNavigate();

  const nextDoor = () => {
    setCurrentDoor((prev) => (prev + 1) % doors.length);
  };

  const prevDoor = () => {
    setCurrentDoor((prev) => (prev - 1 + doors.length) % doors.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextDoor,
    onSwipedRight: prevDoor,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true, 
  });

  const clickDoor = (index) => {
    navigate("/room", { state: { doorIndex: index } });
  };

  return (
    <Container>
      <DoorsContainer currentDoor={currentDoor} doorCount={doors.length}>
        {doors.map((door, index) => (
          <div key={index} className="door-wrapper" {...handlers}>
            <div className="left"></div>
            <div className="door">
              <img src={door} alt={`door${index + 1}`} className="door-image" />
              <div onClick={() => clickDoor(index)} className="cover"></div>
            </div>
            <div className="right"></div>
          </div>
        ))}
      </DoorsContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 1350px;
  height: 665px;
  /* justify-content: center; */
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const DoorsContainer = styled.div`
  display: flex;
  height: 665px;
  transition: transform 0.5s ease-in-out;
  width: ${({ doorCount }) => doorCount * 1350}px; /* Adjusted width based on the door count */
  transform: translateX(${({ currentDoor }) => -currentDoor * 1350}px); /* Adjusted width for space around doors */

  .door-wrapper {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 1350px; /* Adjusted total width including spacing */
  }

  .left, .right {
    width: 480px; /* Adjusted for proper spacing */
    height: 100%;
  }

  .door {
    width: 290px;
    height: 615px;
    text-align: center;
    position: relative;
  }

  .door-image {
    width: auto;
    height: 620px;
    z-index: 10;
    pointer-events: none;
  }

  .cover {
    z-index: 1000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
