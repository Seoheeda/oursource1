import React, { useState } from "react";
import styled from "styled-components";
import Page from "../../assets/pieces/pink/page.svg";

const yellowPiece2 = () => {
  return (
    <Container>
        <img src={Page} alt="page" />
    </Container>
  );
};

export default yellowPiece2;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F8F7F4;
`;

