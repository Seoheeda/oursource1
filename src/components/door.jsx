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
  });

  const clickDoor = (index) => {
    navigate("/room", { state: { doorIndex: index } });
  };

  return (
    <Container >
      <DoorsContainer currentDoor={currentDoor}>
        {doors.map((door, index) => (
          <div key={index} className="door">
            <img src={door} alt={`door${index + 1}`} className="door-image" />
            <div {...handlers} onClick={() => clickDoor(index)} className="cover"></div>
          </div>
        ))}
      </DoorsContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 285px;
  height: 565px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Hide overflow */
  position: relative;
`;

const DoorsContainer = styled.div`
  display: flex;
  width: 290px;
  height: 565px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentDoor * 100}%);

  .door {
    background-color: #F0F0F0;
    width: 290px;
    height: 565px;
    text-align: center;
    flex-shrink: 0;
    position: relative; /* Added relative position */
  }

  .door-image {
    width: 100%;
    height: auto;
    z-index: 10;
    pointer-events: none;
  }

  .cover {
    background-color: red;
    z-index: 1000;
    width: 100%;
    height: 100%;
    position: absolute; /* Added absolute position */
    top: 0;
    left: 0;
    opacity: 0;
  }
`;
