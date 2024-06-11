import React from "react";
import styled from "styled-components";
import Pic1 from "../../assets/pieces/green/pic1.svg";
import Card1 from "../../assets/pieces/green/card1.svg";
import File from "../../assets/pieces/yellow/file.svg";

const YellowPiece1 = () => {
  const handleClick = () => {
    window.location.href = "https://yewon100.cargo.site/4";
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
        <a href="https://yewon100.cargo.site/4" onClick={handleClick}>
          <img src={File} alt="file" className="file" />
        </a>
      </div>
    </Container>
    </Wrap>
  );
};

export default YellowPiece1;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  width: 1550px;
  height: 740px;
  justify-content: center;
  background-color: #F8F7F4;
  .card1 {
    padding-top: 425px;
    padding-right: 170px;
  }
  .pic1 {
    padding-top: 200px;
    width: 465px;
    height: 327px;
  }
  .file {
    padding-top: 520px;
    margin-left: 130px;
    width: 110px;
    height: 132px;
  }
`;
