import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [currentDoor, setCurrentDoor] = useState(0);
  const doors = ["door1", "door2", "door3", "door4", "door5"];
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
    <Container {...handlers}>
      <DoorsContainer currentDoor={currentDoor}>
        {doors.map((door, index) => (
          <div key={index} className="door">
            {door}
            <div className="clickhere" onClick={() => clickDoor(index)}>문입니다 여기 눌러보셈</div>
            <div>이거 문 어케 마우스로 옆으로 넘겨보셈 되려나</div>
          </div>
        ))}
      </DoorsContainer>
    </Container>
  );
};

export default Main;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 740px;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 오버플로우 숨기기 */
  position: relative;
`;

const DoorsContainer = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.currentDoor * 100}%);

  .door {
    background-color: lightgray;
    width: 100%; /* 도어의 너비를 컨테이너의 너비와 일치시킴 */
    height: 500px;
    text-align: center;
    flex-shrink: 0;
  }

  .clickhere {
    cursor: pointer;
    color: blue;
  }
`;
