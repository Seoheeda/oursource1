import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/yellow/pic.svg";
import subtitle from "../../assets/interview/yellow/subtitle.svg";
import interview from "../../assets/interview/yellow/interview_kim.svg";

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
    <Wrap>
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
          <Title src={interview} alt="interview" />
          <Body>
            <Left style={{ marginLeft: "5px" }}>
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
              <Question style={{ marginTop: "135px" }}>
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
            <Right style={{ paddingLeft: "65px" }}>
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
          <Body>
            <Left>
              <Question>
                그동안 그려온 습작을 통해 작가 본인만의 <br />
                정체성, 고유성을 찾을 수 있다고 생각하나요?
              </Question>
              <Content>
                이 질문에 대해서 평소에도 많이 생각을 해보는데, 아직은 <br />제
                그림에 정체성이 있을 만큼 그림을 많이 그린 것도 아니고, <br />
                아직 경험해보지 않은 것들이 많기 때문에 제 자신만의 스타일을
                <br /> 하나로 단정짓기는 어려운 것 같습니다. 지금은 저만의
                정체성을
                <br /> 찾아가고 때론 방황하기도 하는 단계라고 생각합니다.
              </Content>
              <Question style={{ paddingTop: "30px" }}>
                Do you believe that through the sketches you've <br />
                drawn over time, you can find your own identity <br />
                and uniqueness as an artist?
              </Question>
              <Content>
                I've thought about this question a lot, and I believe it's
                <br /> difficult to define my own style as I haven't drawn{" "}
                <br /> enough yet, and there are still many things I haven't
                <br /> experienced. I think I'm currently in a stage of
                exploring
                <br /> my own identity and sometimes wandering.
              </Content>
            </Left>
            <Right>
              <Question>
                {archiveText} 프로그램에 참여하게 된 계기는 <br />
                무엇인가요? 여러분은 어떤 생각으로 참여하였고 이 <br />
                프로그램이 여러분께 어떤 의미를 갖나요?
              </Question>
              <Content>
                그림을 그리면서 제 그림을 다른 사람들에게 보여주고 싶은 마음
                <br />이 평소에 굉장히 컸어서, {archiveText}에 참여할 기회가
                <br />
                생긴 걸 감사하게 생각하고 있습니다. 지금 당장은 엄청나게 큰
                <br />
                영향력이 있는 프로그램이 아니라고 해도 제 꿈을 향해 한발자국
                <br /> 더 나아간 느낌이 듭니다.
              </Content>
              <Question>
                What was your motivation for participating in the <br />
                {archiveEngText} program? What thoughts did <br /> you have when
                participating, and what significance <br /> does this program
                hold for you?
              </Question>
              <Content>
                I had a strong desire to share my artwork with others while
                <br /> drawing, so I'm grateful for the opportunity to
                participate in
                <br /> the {archiveEngText}. Even though it may not be a<br />{" "}
                program with tremendous influence right now, it feels like
                <br /> taking one more step toward my dream.
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
                아무래도 2023학년 가을미전에 전시를 했던 '기억속의 실루
                <br /> 엣'이 가장 기억에 남기도 하고 완성본이 인상 깊었습니다.
                <br />
                그림의 완성도와 분위기, 색감 등등 상상하던 그대로 잘 표현
                <br /> 되어서 마음에 들었고 그 작품 속에 담긴 의미도 뜻 깊었기에
                <br /> 홍보하고 싶은 마음이 큽니다.
              </Content>
              <Question>
                What artwork do you most want to promote?
                <br />
                If you have a favorite piece, please explain the
                <br /> reason briefly.
              </Question>
              <Content>
                I would like to promote "Silhouette of Memory," which was
                <br /> exhibited at the Autumn Exhibition in 2023. <br />
                It left a strong impression on me due to its completeness,
                <br /> atmosphere, color scheme, and more. <br />
                All of which were expressed just as I had imagined. <br />
                The meaning embedded in the artwork was also profound,
                <br /> which is why I have a strong desire to promote it.
              </Content>
            </Left>
            <Right>
              <Question>
                아티스트로서 앞으로 추구하고 싶은 예술 활동이나 <br />
                목표가 있다면 무엇인가요?
              </Question>
              <Content>
                아주 큰 목표는 아직 세워진 게 없지만, 조금 더 시간이 지나고
                <br /> 개인 전시회를 꼭 열어보고 싶습니다. 또 한국뿐만이 아닌,
                <br />
                다른 나라들에서도 영향력이 있는 사람이 되고 싶습니다.
              </Content>
              <Question style={{ paddingTop: "70px" }}>
                What artistic activities or goals do you want <br />
                to pursue in the future?
              </Question>
              <Content>
                While I haven't set a specific major goal yet, I really
                <br /> want to hold a solo exhibition as time goes on.
                <br /> Additionally, I aspire to become someone influential not
                <br /> only in Korea but also in other countries
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>예원학교에 입학하게 된 계기가 무엇인가요?</Question>
              <Content>
                항상 그림 그리는 것에 관심이 있었고, 실력이 뛰어나다는 말들을
                <br />
                주변에서 들어서 자연스레 미술에 관련된 미래를 꿈꾸게 되었습니
                <br />
                다. 제 꿈을 최대한 빨리 진행시키고 싶은 마음이 예원학교 입학으로
                <br />
                이어진 것 같습니다.
              </Content>
              <Question style={{ paddingTop: "60px" }}>
                예원학교에서 기억나는 에피소드가 있을까요?
              </Question>
              <Content>
                예원학교에선 미술전시를 준비할 때 방학 때도 학교에 꾸준히
                <br />
                등교를 해서 그림을 그리는데, 1학년 여름방학 때 친구들과 방학
                <br />
                에도 매일 만나며 작품을 그리던 게 아직까지도 생생하게 기억이
                <br /> 납니다. 학교를 다니며 가장 재밌었던 기억중 하나입니다.
              </Content>
              <Question style={{paddingTop: '50px'}}>
                언제부터 그림 실력이 확연히 늘었다고 느끼시나요?
              </Question>
              <Content>
                평소에도 그림을 많이 그렸지만, 아무래도 비정상적으로 하루종일
                <br />
                그림을 그리던 입시때 실력이 아주 많이 늘었습니다. 특히 입시
                <br />
                막판이었던 8월~10월엔 손이 로봇처럼 그림을 그리는 것 같은
                <br />
                느낌이었습니다.
              </Content>
            </Left>
            <Right>
              <Question style={{marginLeft: '75px'}}>
                What was the reason for your admission to
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '75px'}}>
                I had always been interested in drawing, and hearing
                <br /> compliments about my skills from those around me
                <br /> naturally led me to dream of a future in art. The desire
                to
                <br /> pursue my dream as quickly as possible led me to enroll
                at
                <br /> Yewon School.
              </Content>
              <Question style={{marginLeft: '75px'}}>
                Do you have any memorable episodes from
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '75px'}}>
                One vivid memory I have is from the summer vacation
                <br /> of my first year at Yewon School. Even during the
                <br /> vacation, my friends and I would meet every day to
                <br /> draw and prepare for art exhibitions. It's one of the
                most
                <br /> enjoyable memories I have from my time at school.
              </Content>
              <Question style={{marginLeft: '75px'}}>
                When did you start to feel that your drawing skills
                <br /> had significantly improved?
              </Question>
              <Content style={{marginLeft: '75px'}}>
                Although I used to draw a lot before, my skills improved
                <br /> dramatically during the abnormal period when I drew all
                <br /> day long for the entrance exam. Especially in the final
                <br /> stretch of the exam from August to October, it felt like
                my
                <br /> hand was drawing like a robot.
              </Content>
            </Right>
          </Body>
        </Screen>
      </Container>
    </Wrap>
  );
};

export default InterViewYellow;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  width: 1500px;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #f6ce7c;
  overflow-x: auto;
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
  height: 3900px;
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
