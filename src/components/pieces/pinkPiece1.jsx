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
    <Wrap>
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
    </Wrap>
  );
};

export default YellowPiece1;

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: 720px; /* Default height */
  background-color: #f8f7f4;

  @media (max-width: 480px) {
    height: 2500px; /* Height for mobile devices */
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    height: 1000px; /* Height for tablets or small desktops */
  }
`;

const Container = styled.div`
  display: flex;
  width: 1500px;
  min-height: 740px;
  height: 100%;
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
    margin-top: 520px;
    margin-left: 40px;
    width: 110px;
    height: 132px;
    padding-right: 40px;
  }
`;
