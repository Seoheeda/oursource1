import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/yellow/pic.svg";
import subtitle from "../../assets/interview/yellow/subtitle.svg";
import interview from "../../assets/interview/yellow/interview_kim.svg"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'S-CoreDream-3Light', sans-serif;
  }
`;

const InterViewYellow = () => {
  const location = useLocation();
  const archiveText = "<예원아카이브100>";
  const archiveEngText = "<Yewon Archive 100>";

  return (
    <>
      <GlobalStyle />
      <Container>
        <Screen>
          <Top>
            <div className="red" />
            <div className="yellow" />
            <div className="green" />
            <img src={menu} alt="menu" className="menu" />
            <img src={bookmark} alt="bookmark" className="menu" />
          </Top>
          <Body>
            <Left>
              <Question>
                작품 ‘break time’을 자세히 보면 양이 들고 있는 신문
                <br />에 ‘예술계를 이끌 화가 김연서, 8번째 개인전 연다’라는
                <br /> 기사가 써 있는 걸 봤어요. 이러한 미래에 대한 상상을
                <br />
                종종 하는 편인가요? 그런 상상이 반영된 또다른 작품이
                <br /> 있나요?
              </Question>
              <Content>
                질문대로 전 미래에 대한 상상을 자주 해보곤 합니다. 지금 제가
                <br /> 가는 길이 다른 친구들과는 조금 다르다고 생각되기에 나중에
                커<br />서 제가 어떤 일들을 하고 있을지 궁금합니다. 아직은 저의
                이런
                <br /> 상상을 포함한 다른 작품은 없지만, 크게 관심 가지고 있는
                주제
                <br />
                이기 때문에 나중에라도 다른 작품에 반영될 것 같습니다.
              </Content>
              <img src={pic} alt="pic" className="pic" />
            </Left>
            <Right>
              <img src={subtitle} alt="subtitle" className="subtitle" />
              <Question>
                In the artwork 'break time,' the sheep is holding
                <br /> a newspaper with an article titled 'Artist Kim
                <br /> Yeonseo Leading the Art World, Opening 8th
                <br /> Solo Exhibition.' Do you often imagine such
                <br /> futures? Do you have other artworks that reflect
                <br /> these imaginings?
              </Question>
              <Content>
                As per your question, I do often engage in imagining the
                <br /> future. Since I feel like the path I'm currently on is
                <br /> somewhat different from that of my friends, I'm curious
                <br /> about what I'll be doing when I grow up. While I haven't
                <br /> created any other artworks reflecting these imaginings
                <br /> yet, it's a subject I'm deeply interested in, so I
                believe it
                <br /> will be reflected in my future works at some point.
              </Content>
            </Right>
          </Body>
          <Title src={interview} alt="interview"/>
          <Body>
            <Left style={{marginLeft: '20px'}}>
              <Question>
                어떤 것이 예술에 대한 관심을 가지게 했나요?
                <br />
                처음 미술에 대해 흥미를 느낀 계기가 있나요?
              </Question>
              <Content>
                너무 어릴적부터 자연스럽게 미술을 접하게 되어서 <br />
                특별한 계기는 없었던걸로 기억이 납니다. <br />
                생활의 일부분이 예술이었고 항상 그림을 그렸습니다.
              </Content>
              <Question style={{marginTop: '135px'}}>
                What sparked your interest in art?
                <br />
                Was there a specific moment when you
                <br /> first became interested in art?
              </Question>
              <Content>
                I don't recall any specific moment that sparked
                <br /> my interest in art. It was something I naturally
                <br /> gravitated towards from a very young age. Art
                <br /> was always a part of my life, and I found myself
                <br /> drawing regularly as a natural expression of my
                <br /> creativity.
              </Content>
            </Left>
            <Right>
              <Question>
                자신의 예전 작품을 다시 본 경험이 있나요?
                <br /> {archiveText}에서 과거의 작품들을 다시 보면,
                <br /> 어떤 감정이 드나요? <br />
                그때와 지금 다르게 느껴지는 게 있나요?
              </Question>
              <Content>
                시간이 날 때마다 {archiveText}을 들어가보곤 하는데, 예전
                <br />에 만든 작품들을 보면서 그때의 추억들이 생각나기도 하고
                부족한
                <br /> 점들이 더 잘 보입니다. 작품의 어느 부분들은 아쉽기도
                합니다.
              </Content>
              <Question>
                Have you ever looked back at your old artwork?
                <br /> When you see your past work in the
                <br /> {archiveEngText}, what emotions do you feel?
                <br /> Do you feel differently now compared to back then?
              </Question>
              <Content>
                I often visit the {archiveEngText} when I have spare
                <br /> time. Looking at my old artworks brings back memories
                <br /> and also highlights areas where I could have improved.
                <br /> Some aspects of my past work may seem lacking, and I
                <br /> may feel a sense of regret about them.
              </Content>
            </Right>
          </Body>
        </Screen>
      </Container>
    </>
  );
};

export default InterViewYellow;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3880px;
  align-items: center;
  flex-direction: column;
  background-color: #f6ce7c;
  overflow-x: scroll;
`;

const Top = styled.div`
  background-color: #f7f7f5;
  width: 1250px;
  height: 50px;
  margin-top: 0px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  align-items: center;
  .red {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #ec6a5e;
    margin-left: 20px;
  }
  .yellow {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #f4bf4f;
    margin-left: 10px;
  }
  .green {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #62c554;
    margin-left: 10px;
  }
  .menu {
    padding-left: 10px;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 1250px;
  height: 3000px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
  .pic {
    margin-left: 130px;
    margin-top: 50px;
  }
  .subtitle {
    margin-left: 90px;
    margin-top: 130px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;
const Left = styled.div``;

const Right = styled.div`
  padding-left: 50px;
`;

const Question = styled.div`
  font-family: "S-CoreDream-3Light", sans-serif;
  font-weight: 800;
  font-size: 20px;
  margin-top: 70px;
  margin-left: 100px;
`;

const Content = styled.div`
  font-family: "S-CoreDream-3Light", sans-serif;
  font-weight: 300;
  font-size: 17px;
  margin-top: 20px;
  margin-left: 100px;
`;

const Title = styled.img`
  width: 761px;
  margin-top: 100px;
  align-self: center; /* 텍스트 가운데 정렬 */
`;
