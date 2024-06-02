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
      <DoorsContainer {...handlers} currentDoor={currentDoor}>
        {doors.map((door, index) => (
          <div key={index} className="door">
            <img src={door} alt={`door${index + 1}`} onClick={() => clickDoor(index)} className="door-image" />
            <div className="clickhere" onClick={() => clickDoor(index)}>문입니다 여기 눌러보셈</div>
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
  overflow: hidden; /* 오버플로우 숨기기 */
  position: relative;
`;

const DoorsContainer = styled.div`
  display: flex;
  width: 290px;
  height: 565px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentDoor * 100}%);

  .door {
    background-color: lightgray;
    width: 290px;
    height: 565px;
    text-align: center;
    flex-shrink: 0;
  }

  .door-image {
    width: 100%;
    height: auto;
  }

  .clickhere {
    cursor: pointer;
    color: blue;
  }
`;
