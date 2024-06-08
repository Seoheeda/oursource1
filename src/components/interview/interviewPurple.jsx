import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/purple/pic.svg";
import subtitle from "../../assets/interview/purple/subtitle.svg";
import interview from "../../assets/interview/purple/interview.svg";

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
                그림을 통해 행복과 평안을 주고 싶다고 했는데, 본인이
                <br /> 생각하는 행복과 평안은 무엇인가요?
              </Question>
              <Content>
                그림을 보고 마음이 평안해지고 그림이 계속 생각나는 걸 행복과
                <br /> 평안이라고 생각해요.
              </Content>
              <img src={pic} alt="pic" className="pic" />
            </Left>
            <Right>
              <img src={subtitle} alt="subtitle" className="subtitle" />
              <Question>
                What do you consider happiness and peace to
                <br /> be, as you mentioned wanting to bring them
                <br /> through your art?
              </Question>
              <Content>
                I believe happiness and peace are when looking at a<br />
                painting brings a sense of tranquility and the painting
                <br /> lingers in your thoughts.
              </Content>
            </Right>
          </Body>
          <Title src={interview} alt="interview" />
          <Body>
            <Left style={{ marginLeft: "5px" }}>
              <Question>
                어떤 것이 예술에 대한 관심을 가지게 했나요?
                <br />
                처음 미술에 대해 흥미를 느낀 계기가 있나요?
              </Question>
              <Content>
                어릴 때부터 전시 같은 것을 많이 보러 다녀서 자연스럽
                <br />게 접한 것 같아요.
              </Content>
              <Question style={{ marginTop: "135px" }}>
                What sparked your interest in art?
                <br />
                Was there a specific moment when you
                <br /> first became interested in art?
              </Question>
              <Content>
                I think I was naturally exposed to art because
                <br />I visited a lot of exhibitions from a young age.
              </Content>
            </Left>
            <Right style={{ paddingLeft: "70px" }}>
              <Question>
                자신의 예전 작품을 다시 본 경험이 있나요?
                <br /> {archiveText}에서 과거의 작품들을 다시 보면,
                <br /> 어떤 감정이 드나요? <br />
                그때와 지금 다르게 느껴지는 게 있나요?
              </Question>
              <Content>
                지금 실력이 약간 퇴화했어요. 그래서 예전 작품 보면 잘 그렸다는
                <br /> 생각이 들어요.
              </Content>
              <Question>
                Have you ever looked back at your old artwork?
                <br /> When you see your past work in the
                <br /> {archiveEngText}, what emotions do you feel?
                <br /> Do you feel differently now compared to back then?
              </Question>
              <Content>
                My skills have become a bit rusty now, so when I look at
                <br /> my old works, I think I did a pretty good job back then.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>
                그동안 그려온 습작을 통해 작가 본인만의 <br />
                정체성, 고유성을 찾을 수 있다고 생각하나요?
              </Question>
              <Content>네 찾을 수 있다고 생각해요.</Content>
              <Question style={{ paddingTop: "50px" }}>
                Do you believe that through the sketches you've <br />
                drawn over time, you can find your own identity <br />
                and uniqueness as an artist?
              </Question>
              <Content>
                Yes, I think I can find my own identity and uniqueness
                <br /> that way.
              </Content>
            </Left>
            <Right style={{paddingLeft: '20px'}}>
              <Question>
                {archiveText} 프로그램에 참여하게 된 계기는 <br />
                무엇인가요? 여러분은 어떤 생각으로 참여하였고 이 <br />
                프로그램이 여러분께 어떤 의미를 갖나요?
              </Question>
              <Content>
                뭔지 궁금해서 무작정 신청했어요. 미술 전공을 하고 나서 이런
                <br /> 것이 처음이다 보니 흥미로워 보여서 신청했어요. 
              </Content>
              <Question>
                What was your motivation for participating in the <br />
                {archiveEngText} program? What thoughts did <br /> you have when
                participating, and what significance <br /> does this program
                hold for you?
              </Question>
              <Content>
                I applied out of curiosity. Since this was my first experience
                <br /> after majoring in arts, it seemed interesting to me, so I
                <br /> decided to apply.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>
                어떤 작품을 가장 홍보하고 싶은가요? 가장 <br />
                아끼는 작품이 있다면 왜 가장 아끼게 되었는지 <br />
                간단히 이야기 해주세요.
              </Question>
              <Content>
                1학년 가을 미전 때 유화 그린 작품이 있는데, 그때 되게 힘들
                <br />
                었지만 재밌게 했던 기억이 있고 다 그리고 나니까 뿌듯했어
                <br />
                요. 작업 당시에 힘들었던 게 작품에 잘 묻어나온 것 같아서 가
                <br />장 아끼는 그림이에요. 다 완성하고 나니 찡그린 얼굴들을 친
                <br />
                구들이 재밌어해서 좋았어요.
              </Content>
              <Question>
                What artwork do you most want to promote?
                <br />
                If you have a favorite piece, please explain the
                <br /> reason briefly.
              </Question>
              <Content>
                In the fall of my freshman year, I painted an oil piece
                <br /> that was quite challenging at the time, but I remember
                <br /> it being incredibly enjoyable. Now that I've completed
                it,
                <br /> I feel proud. The struggles I faced while creating it
                seem
                <br /> to be well-reflected in the piece, which is why it's my
                <br /> most cherished work. Despite the difficulties while
                <br /> painting, my friends found the twisted faces amusing
                <br /> once it was finished, which made me happy.
              </Content>
            </Left>
            <Right style={{paddingLeft: '20px'}}>
              <Question>
                아티스트로서 앞으로 추구하고 싶은 예술 활동이나 <br />
                목표가 있다면 무엇인가요?
              </Question>
              <Content>
                유명해지고 싶어요. 작가 혹은 디자이너도 해보고싶어요.
                <br />
                아직은 다 해보고싶은 것 같아요.
              </Content>
              <Question style={{ paddingTop: "95px" }}>
                What artistic activities or goals do you want <br />
                to pursue in the future?
              </Question>
              <Content>
                I want to become famous. I also want to try being an
                <br /> artist or a designer. I feel like I want to try
                everything at
                <br /> this point.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>예원학교에 입학하게 된 계기가 무엇인가요?</Question>
              <Content>
                미술을 더 전문적으로 배워보고 싶어서 입학했어요. 
              </Content>
              <Question style={{ paddingTop: "60px" }}>
                예원학교에서 기억나는 에피소드가 있을까요?
              </Question>
              <Content>
                같은 전공 하는 친구들끼리 다 같이 모여서 그림 그리고
                <br />
                얘기하는 게 좋았던 것 같아요.
              </Content>
              <Question style={{ paddingTop: "50px" }}>
                언제부터 그림 실력이 확연히 늘었다고 느끼시나요?
              </Question>
              <Content>
                여기(예원학교) 입시할 때 실력이 가장 좋았던 것 같아요.
              </Content>
            </Left>
            <Right style={{paddingLeft: '20px'}}>
              <Question>
                What was the reason for your admission to
                <br />
                Yewon School?
              </Question>
              <Content>I enrolled to learn art more professionally.</Content>
              <Question style={{paddingTop: '25px'}}>
                Do you have any memorable episodes from
                <br />
                Yewon School?
              </Question>
              <Content>
                It was great to gather with friends who shared the
                <br /> same major, draw together, and have conversations.
              </Content>
              <Question style={{paddingTop: '25px'}}>
                When did you start to feel that your drawing skills
                <br /> had significantly improved?
              </Question>
              <Content>
                It seems like my skills were at their best when I applied
                <br /> here(Yewon School).
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
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #c7c8f3;
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
  height: 3500px;
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
  padding-top: 50px;
`;
const Left = styled.div``;

const Right = styled.div`
  /* padding-left: 50px; */
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
