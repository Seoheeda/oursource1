import React from "react";
import styled from "styled-components";
import Pic1 from "../../assets/pieces/red/pic1.svg";
import Card1 from "../../assets/pieces/red/card1.svg";
import File from "../../assets/pieces/yellow/file.svg";
import File2 from "../../assets/pieces/red/file2.svg";

const RedPiece1 = () => {
  const handleClick = () => {
    window.location.href = "https://yewon100.cargo.site/5";
  };

  const handleClick2 = () => {
    window.location.href = "https://art.onthewall.io/hmuBTFy6SFa4SUdNcNdv";
  };

  return (
    <Container>
      <div>
        <img src={Card1} alt="card1" className="card1" />
      </div>
      <div>
        <img src={Pic1} alt="pic1" className="pic1" />
      </div>
      <div className="right">
        <a href="https://yewon100.cargo.site/5" onClick={handleClick}>
          <img src={File} alt="file" className="file" />
        </a>
        <a href="https://art.onthewall.io/hmuBTFy6SFa4SUdNcNdv" onClick={handleClick2}>
          <img src={File2} alt="file" className="file2" />
        </a>
      </div>
    </Container>
  );
};

export default RedPiece1;

const Container = styled.div`
  display: flex;
  width: 1550px;
  height: 740px;
  justify-content: center;
  background-color: #F8F7F4;
  .card1 {
    padding-top: 480px;
    padding-right: 40px;
    padding-left: 100px;
  }
  .pic1 {
    padding-top: 40px
  }
  .right {
    display: flex;
    flex-direction: column;
  }
  .file {
    padding-top: 340px;
    margin-left: 10px;
  }
  .file2 {
    margin-left: 60px;
  }
`;
