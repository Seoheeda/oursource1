import React from "react";
import styled from "styled-components";
import Pic1 from "../../assets/pieces/pink/pic1.svg";
import Card1 from "../../assets/pieces/pink/card1.svg";
import File from "../../assets/pieces/yellow/file.svg";

const YellowPiece1 = () => {
  const handleClick = () => {
    window.location.href = "https://yewon100.cargo.site/1";
  };

  return (
    <Container>
      <div>
        <img src={Card1} alt="card1" className="card1" />
      </div>
      <div>
        <img src={Pic1} alt="pic1" className="pic1" />
      </div>
      <div>
        <a href="https://yewon100.cargo.site/1" onClick={handleClick}>
          <img src={File} alt="file" className="file" />
        </a>
      </div>
    </Container>
  );
};

export default YellowPiece1;

const Container = styled.div`
  display: flex;
  width: 1550px;
  height: 740px;
  justify-content: center;
  background-color: #F8F7F4;
  .card1 {
    padding-top: 400px;
    padding-right: 10px;
    padding-left: 100px;
  }
  .pic1 {
    padding-top: 40px
  }
  .file {
    padding-top: 520px;
    margin-left: 40px;
  }
`;