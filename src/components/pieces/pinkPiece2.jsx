import React from "react";
import styled from "styled-components";
import Page from "../../assets/pieces/pink/page.svg";

const PinkPiece2 = () => {
  return (
    <Container>
      <Image src={Page} alt="page" />
    </Container>
  );
};

export default PinkPiece2;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 832px; 
  align-items: center;
  justify-content: center;
  background-color: #f8f7f4;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto; 
`;
