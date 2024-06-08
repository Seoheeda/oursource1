import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/red/pic.svg";
import subtitle from "../../assets/interview/red/subtitle.svg";
import interview from "../../assets/interview/red/interview.svg";

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
                자신의 작품이 대중들에게 선한 영향을 주기를 바라는
                <br />
                데, 어떤 방식으로 그 영향을 전달하고자 하시나요?
                <br />
                대중들에게 어떤 변화나 영감을 줄 수 있을지에 대해 어떻
                <br />게 생각하시나요?
              </Question>
              <Content>
                제 생각에는 예술가들이 사회를 비판하는 그림이나 자기가 처한
                <br /> 상황 등을 많이 그리는데 저는 이 사회를 비판하는 것만은
                아니라
                <br />도 제가 그림을 그림으로써 사람들이 조금이라도 감동을
                느끼고
                <br /> 삶의 원동력이 됐으면 좋겠어요.
                <br />
                앞으로도 여러 시도를 할 거고, 예원학교에서 미전 작품에 많은
                <br /> 재료를 사용하는 시도를 할 건데 그걸로 미래에 제가 또
                성공한다
                <br />면 그게 기억에 많이 남을 것 같아요. 
              </Content>
              <img src={pic} alt="pic" className="pic" />
            </Left>
            <Right>
              <img src={subtitle} alt="subtitle" className="subtitle" />
              <Question>
                You hope your artwork will positively influence
                <br /> the public. In what way do you intend to convey
                <br /> that influence? How do you think you can bring
                <br /> about change or inspiration to the public?
              </Question>
              <Content>
                While many artists create artwork that critiques society or
                <br /> depicts their own experiences, I don't necessarily limit
                <br /> myself to criticizing society in my art. Instead, I hope
                that
                <br /> through my drawings, people can feel moved and find
                <br /> inspiration to become a driving force in their lives. In
                the
                <br /> future, I plan to experiment with various approaches,
                <br /> using different materials and participating in
                exhibitions at
                <br /> Yewon School. If these efforts lead to success, I believe
                <br /> they will be remembered as significant milestones in my
                <br /> journey.
              </Content>
            </Right>
          </Body>
          <Title src={interview} alt="interview" />
          <Body>
            <Left style={{ marginLeft: "20px" }}>
              <Question>
                어떤 것이 예술에 대한 관심을 가지게 했나요?
                <br />
                처음 미술에 대해 흥미를 느낀 계기가 있나요?
              </Question>
              <Content>
                처음에 미술 시작할 때는 빈센트 반고흐 전시를 보고 <br />
                미술의 처음 흥미를 느끼게 되었어요. <br />
                반고흐의 '별이 빛나는 밤'이 저에게 특별하게 다가왔어요.
              </Content>
              <Question style={{ marginTop: "135px" }}>
                What sparked your interest in art?
                <br />
                Was there a specific moment when you
                <br /> first became interested in art?
              </Question>
              <Content>
                When I first started art, I was inspired by visiting a <br />
                Vincent van Gogh exhibition. Van Gogh's "Starry <br /> Night"
                particularly resonated with me and sparked <br /> my initial
                interest in art.
              </Content>
            </Left>
            <Right style={{ paddingLeft: "15px" }}>
              <Question>
                자신의 예전 작품을 다시 본 경험이 있나요?
                <br /> {archiveText}에서 과거의 작품들을 다시 보면,
                <br /> 어떤 감정이 드나요? <br />
                그때와 지금 다르게 느껴지는 게 있나요?
              </Question>
              <Content>
                {archiveText}에 실린 작품을 보면 어릴 때 그린 그림
                <br />
                이기에 지금 보면 ‘많이 못 그렸다’ 생각이 들어요. 그래도
                <br /> 그때 당시에 제가 그린 건 좀 잘 그렸던 것 같아요. 
              </Content>
              <Question>
                Have you ever looked back at your old artwork?
                <br /> When you see your past work in the
                <br /> {archiveEngText}, what emotions do you feel?
                <br /> Do you feel differently now compared to back then?
              </Question>
              <Content>
                When I see the artworks featured in the {archiveEngText},<br />
                since they were drawn when I was young, I sometimes
                <br /> feel like they aren't as good as I thought. However, I
                still think
                <br /> that what I drew at that time was quite good.
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
                제가 지금까지 그린 그림들 보면 대부분이 저와 관련된, 저를
                <br /> 상징하는 그림을 그렸어요.
                <br /> 대표적으로 {archiveText}에서 한국화로 그리는 제<br />
                초상화가 제 정체성을 확실히 나타낸 것 같아요.
              </Content>
              <Question style={{ paddingTop: "30px" }}>
                Do you believe that through the sketches you've <br />
                drawn over time, you can find your own identity <br />
                and uniqueness as an artist?
              </Question>
              <Content>
                Looking at the drawings I've done so far, most of them
                <br /> are related to me, representing aspects of myself.
                <br />
                For example, my self-portrait drawn in Korean
                <br /> traditional painting style in {archiveEngText}
                <br /> seems to clearly represent my identity.
              </Content>
            </Left>
            <Right>
              <Question>
                {archiveText} 프로그램에 참여하게 된 계기는 <br />
                무엇인가요? 여러분은 어떤 생각으로 참여하였고 이 <br />
                프로그램이 여러분께 어떤 의미를 갖나요?
              </Question>
              <Content>
                저도 솔직히 여기 예원학교에서만 전시를 하면 외부인도 몇 분 오
                <br />
                셔도 생각보다 (제 작품을) 많이 못 보시더라고요. 그래서 온라인
                <br />
                으로 아카이빙하면 많은 사람들이 볼 수 있지 않을까 생각하고
                <br />
                신청했습니다.
              </Content>
              <Question>
                What was your motivation for participating in the <br />
                {archiveEngText} program? What thoughts did <br /> you have when
                participating, and what significance <br /> does this program
                hold for you?
              </Question>
              <Content>
                To be honest, even though there are some exhibitions held only
                <br /> within Yewon School where a few outsiders attend, I
                realized <br /> that not many people get to see my artworks as
                much as I'd <br /> hoped. Therefore, I applied to this program
                with the hope that <br /> archiving online would allow more
                people to view my works
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
                ‘공작새'가 가장 아끼는 작품이라 생각해요.
                <br />
                왜냐하면 예원학교에 입학해서 처음 만든 조각품이고 아름다
                <br />
                움이라는 주제에 맞게 아름답게 그림을 그리고 싶다는 생각이
                <br /> 잘 담겼기 때문이에요. 지금도 집에서 공작새 작품을 보면
                <br />
                감회가 새로워요.
              </Content>
              <Question>
                What artwork do you most want to promote?
                <br />
                If you have a favorite piece, please explain the
                <br /> reason briefly.
              </Question>
              <Content>
                I consider "Peacock" to be my most cherished artwork.
                <br /> It's a sculpture I created when I first entered Yewon
                <br /> School, and it represents my desire to create beautiful
                <br /> art. Whenever I see the peacock sculpture at home,
                <br /> it brings back fresh memories.
              </Content>
            </Left>
            <Right style={{paddingLeft: '5px'}}>
              <Question>
                아티스트로서 앞으로 추구하고 싶은 예술 활동이나 <br />
                목표가 있다면 무엇인가요?
              </Question>
              <Content>
                저는 커서 사람들에게 영향을 주고 사람들에게 도움이 많이 <br />
                되는 작품을 그리고 싶고 미술에 한 획을 긋고 싶어요. 
              </Content>
              <Question style={{ paddingTop: "100px" }}>
                What artistic activities or goals do you want <br />
                to pursue in the future?
              </Question>
              <Content>
                I aspire to create artworks that influence people and
                <br /> provide them with significant help. I want to make a mark
                <br /> in the art world and leave a lasting impact through my
                art.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>예원학교에 입학하게 된 계기가 무엇인가요?</Question>
              <Content>
                저도 예원학교를 (초등학교)4학년 때 알았어요. 예원학교가 미술로
                <br />도 유명하고 또 다른 음악과, 무용과가 예술가로서 함께
                성장하는 학<br />
                교라고 처음에 들었는데 제가 하고 싶은 미술을 할 수 있는 좋은 장
                <br />
                소라 생각했어요. 어릴 때부터 예원학교라는 목표를 갖고 많이 그렸
                <br />던 것 같아요. 그리고 제가 미술을 더 전문적으로 배우기
                위해서는
                <br />
                전문적인 선생님들께 도움을 받는 게 저한테 더 좋은 경험이라 생각
                <br />
                해서 입학하게 되었습니다.
              </Content>
              <Question style={{ paddingTop: "60px" }}>
                예원학교에서 기억나는 에피소드가 있을까요?
              </Question>
              <Content>
                아무래도 다 예술하는 친구들이라 개성이 뚜렷해요. 가끔씩 갈등
                <br />도 많이 생기지만 서로 좋은 선한 영향을 주면서 성장하는
                것이
                <br /> 멋지다 생각해요. 가장 기억 남는 에피소드라고 하면
                뭐니뭐니 해<br />도 제가 처음 미전과 입학식 할 때 커팅식 했던
                것이 제일 기억에
                <br /> 남는 것 같아요. 여러 사람들이 오고 공식적으로는 제 그림을
                처<br />
                음으로 건 경험이라 느낌이 달랐던 것 같아요. 
              </Content>
              <Question style={{ paddingTop: "90px" }}>
                언제부터 그림 실력이 확연히 늘었다고 느끼시나요?
              </Question>
              <Content>
                어렸을 때부터 잘 그렸어요. 그래도 입시 때 하루에 12시간씩
                <br />
                매일매일 그리니까 그림 실력이 확 뛰었다고 생각해요. 물론 실패
                <br />한 그림도 많지만 그런 과정에서 더 많이 실력이 향상되었다고
                생<br />
                각해요.
              </Content>
            </Left>
            <Right style={{paddingLeft: '5px'}}>
              <Question style={{marginLeft: '55px'}}>
                What was the reason for your admission to
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '55px'}}>
                I first learned about Yewon School when I was in the 4th grade.
                <br /> I heard that Yewon School was famous for its art program,
                as
                <br /> well as for other arts such as music and dance. I thought
                it
                <br /> would be a great place to pursue the kind of art I wanted
                to do.
                <br /> Since I was young, I had a goal of attending Yewon
                School, and
                <br /> I drew a lot with that goal in mind. Additionally, I
                believed that to
                <br /> pursue art more professionally, it would be beneficial
                for me to
                <br /> learn from experienced teachers, so I decided to enroll.
              </Content>
              <Question style={{marginLeft: '55px'}}>
                Do you have any memorable episodes from
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '55px'}}>
                Since most of the students are artists, each of them has a<br />
                unique personality. Sometimes conflicts arise, but I think it's
                <br /> amazing how we grow by influencing each other positively
                <br /> rather than focusing on conflicts. If I had to choose the
                most
                <br /> memorable episode, it would definitely be when I
                displayed my
                <br /> artwork for the first time during the entrance ceremony
                and the
                <br /> ribbon-cutting ceremony. It was a significant moment for
                me,
                <br /> as many people attended, and it felt different from
                anything I<br /> had experienced before.
              </Content>
              <Question style={{marginLeft: '55px'}}>
                When did you start to feel that your drawing skills
                <br /> had significantly improved?
              </Question>
              <Content style={{marginLeft: '55px'}}>
                I've been drawing well since I was young. However, I feel that
                <br />
                my drawing skills significantly improved during the entrance
                exam
                <br /> period when I drew for 12 hours a day, every day. Of
                course,
                <br /> there were many failed drawings, but I believe that it
                was
                <br /> through those experiences that my skills improved even
                more.
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
  background-color: #ffadad;
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
  height: 4000px;
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
