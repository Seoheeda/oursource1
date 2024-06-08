import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/pink/pic.svg";
import subtitle from "../../assets/interview/pink/subtitle.svg";
import interview from "../../assets/interview/pink/interview.svg";

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
                작품 ‘Beauty Connect’을 그리게 된 계기와 작품에 담긴
                <br /> 의미는 무엇인가요? 작품에 특정 개체(고양이, 꽃, 여성)를
                <br /> 선정한 이유는 무엇인가요?
              </Question>
              <Content>
                아마 1학년이었는데, 그때 제가 조금 질풍노도의 시기였던 것<br />
                같아요. 예쁜 것, 아름다운 것을 중점으로 생각했어요. 예쁜
                <br />
                여성과 귀여운 고양이 그리고 그 사이에 꽃을 그려서 '아름다움을
                <br /> 잇다'라는 의미를 담았어요.
              </Content>
              <img src={pic} alt="pic" className="pic" />
            </Left>
            <Right>
              <img src={subtitle} alt="subtitle" className="subtitle" />
              <Question style={{ paddingTop: "70px" }}>
                What led you to create the artwork "Beauty
                <br /> Connect," and what is the meaning behind it?
                <br /> Why did you choose specific elements (cats,
                <br /> flowers, women) for the artwork?
              </Question>
              <Content>
                I think I was in my stormy phase around the time I created
                <br /> "Beauty Connect" in my first year at Yewon School. I was
                <br /> focusing on beautiful things and aesthetics. I drew
                pretty
                <br /> women, cute cat, and flowers to convey the meaning of
                <br /> "connecting beauty."
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
                어릴 때부터 그림 그리는 걸 정말 좋아했어요. 그림으로
                <br /> 제가 생각한 걸 표현하고 부모님께 보여드렸을 때 부모님
                <br />
                께서 되게 기뻐하셨어요. 저도 칭찬을 받으니까 점점
                <br />
                잘하고 싶어서 그렇게 미술을 시작하게 되었어요.
              </Content>
              <Question style={{ marginTop: "175px" }}>
                What sparked your interest in art?
                <br />
                Was there a specific moment when you
                <br /> first became interested in art?
              </Question>
              <Content>
                I've always loved drawing since I was young.
                <br />
                I enjoyed expressing my thoughts through drawings,
                <br /> and when I showed them to my parents, they were
                <br /> really pleased. Getting praised motivated me to
                <br /> improve, so that's how I started my journey in art.
              </Content>
            </Left>
            <Right style={{paddingLeft: '45px'}}>
              <Question>
                자신의 예전 작품을 다시 본 경험이 있나요?
                <br /> {archiveText}에서 과거의 작품들을 다시 보면,
                <br /> 어떤 감정이 드나요? <br />
                그때와 지금 다르게 느껴지는 게 있나요?
              </Question>
              <Content>
                예전에 그렸던 그림들을 보면 내가 이렇게 창의적인 생각을 했었
                <br /> 나 생각이 드는 그림들도 많이 있었어요. 그리고 어릴 때
                그렸던
                <br /> 거라서 엄청 순수하게 표현된 것들을 다시 보니까 좋았어요.
                그<br /> 때는 잘 몰랐었는데 입시 때 그렸던 그림들을 다시 보면
                열심히
                <br /> 하려고 노력하고 인정받고 싶어했던 그런 기억들이
                되살아나서
                <br /> 다시 볼 때마다 더 애정이 가고 애틋해지는 거 같아요.
              </Content>
              <Question>
                Have you ever looked back at your old artwork?
                <br /> When you see your past work in the
                <br /> {archiveEngText}, what emotions do you feel?
                <br /> Do you feel differently now compared to back then?
              </Question>
              <Content>
                Looking at my old artworks, I often find myself thinking,
                <br />
                "Did I really come up with such creative ideas?" There are many
                <br /> drawings from my childhood that I see now with a sense of
                purity
                <br /> and innocence. Back then, I didn't fully realize it, but
                revisiting the
                <br /> artworks I created during the entrance exam period brings
                back
                <br /> memories of striving hard to excel and seeking
                recognition. Each
                <br /> time I revisit them, I feel a deeper sense of affection
                and nostalgia.
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
                저는 사실 작품을 그릴 때마다 계속 고민을 하는 시간이 길었
                <br />
                어요. 작품에 대해 고민할 때 많은 자료들을 보면서 아이디어
                <br />를 얻고, 그렇게 계속하다 보면 자신만의 정체성과 고유성이
                <br /> 나오지 않을까 생각해요.
              </Content>
              <Question style={{ paddingTop: "30px" }}>
                Do you believe that through the sketches you've <br />
                drawn over time, you can find your own identity <br />
                and uniqueness as an artist?
              </Question>
              <Content>
                Honestly, I've always spent a lot of time pondering over my
                <br /> artwork. When contemplating a piece, I often gather
                <br /> inspiration from various sources and ideas. I believe
                that
                <br /> through this continuous process, one can eventually
                <br /> develop their own distinctive style and identity as an
                artist.
                <br />
              </Content>
            </Left>
            <Right>
              <Question>
                {archiveText} 프로그램에 참여하게 된 계기는 <br />
                무엇인가요? 여러분은 어떤 생각으로 참여하였고 이 <br />
                프로그램이 여러분께 어떤 의미를 갖나요?
              </Question>
              <Content>
                사실 잘 모르고 신청했어요. 또 그림을 정리하면서 예전 그림을
                <br /> 찾게 되면서 다시 한번 새롭게 느껴졌어요.
              </Content>
              <Question style={{ paddingTop: "50px" }}>
                What was your motivation for participating in the <br />
                {archiveEngText} program? What thoughts did <br /> you have when
                participating, and what significance <br /> does this program
                hold for you?
              </Question>
              <Content>
                To be honest, I didn't know much about it. As I sorted through
                <br /> my drawings, I discovered pieces I hadn't seen in a
                while, which
                <br /> brought a fresh perspective to my work.
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
                가족들을 사진처럼 그린 그림이 있어요. 실력은 부족해도
                <br />
                가족들의 밝은 표정을 찾으려고 했던 과정이 너무 좋았어서
                <br />
                가장 아끼는 작품이에요.
              </Content>
              <Question style={{ paddingTop: "20px" }}>
                What artwork do you most want to promote?
                <br />
                If you have a favorite piece, please explain the
                <br /> reason briefly.
              </Question>
              <Content>
                I have a painting that depicts my family, almost like a<br />
                photograph. Despite my lack of skill, the process of
                <br /> trying to capture the bright expressions of my family
                <br /> members was so enjoyable that it became my most
                <br /> cherished piece.
              </Content>
            </Left>
            <Right style={{ paddingLeft: "40px" }}>
              <Question>
                아티스트로서 앞으로 추구하고 싶은 예술 활동이나 <br />
                목표가 있다면 무엇인가요?
              </Question>
              <Content>
                지금처럼 열심히 노력하고 제 작품에 대해서 더 깊게 생각하는 시간
                <br />을 더 많이 가지면서 ‘저’라는 사람의 작품을 만들어
                가고싶어요.
              </Content>
              <Question style={{ paddingTop: "70px" }}>
                What artistic activities or goals do you want <br />
                to pursue in the future?
              </Question>
              <Content>
                I want to continue working hard like I am now and spend <br />
                more time deeply contemplating my artwork. Through this <br />
                process, I hope to create pieces that truly reflect who I am
                <br /> as an individual.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>예원학교에 입학하게 된 계기가 무엇인가요?</Question>
              <Content>
                미술에 관심을 가지면서 예원학교를 처음 알게 되었어요. 이 학교에
                <br /> 가면 내가 더 많은 지식을 얻고 실력을 쌓을 수 있겠다고
                생각해서
                <br /> 입시를 시작하게 되었어요. 입시 과정이 힘들긴 했지만 더
                열심히
                <br />
                노력하려고 했기에 지금 여기 있다고 생각해요.
              </Content>
              <Question style={{ paddingTop: "60px" }}>
                예원학교에서 기억나는 에피소드가 있을까요?
              </Question>
              <Content>
                친구들이랑 밤늦게까지 미전 준비 하면서 간식도 먹고 그림도 <br />
                그리는 게 다 추억인 것 같아요.
              </Content>
              <Question style={{ paddingTop: "50px" }}>
                언제부터 그림 실력이 확연히 늘었다고 느끼시나요?
              </Question>
              <Content>
                사실 이 학교 들어오기 전에 한 번 실패를 경험했어요. 실패를
                경험하고 <br /> 나니까 오히려 겁이 없어진 것 같아요. 더 마음
                놓고 그리니까 선생님 <br /> 말씀도 더 잘 귀에 들어와서, 그때
                실력이 확 늘었던 것 같아요.
              </Content>
            </Left>
            <Right>
              <Question style={{marginLeft: '60px'}}>
                What was the reason for your admission to
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '60px'}}>
                I first learned about Yewon School when I developed an
                <br /> interest in art. I believed that by attending this
                school, I<br /> could acquire more knowledge and improve my
                skills.
                <br /> Although the application process was challenging, I was
                <br /> determined to work harder, and that's why I'm here now.
              </Content>
              <Question style={{marginLeft: '60px'}}>
                Do you have any memorable episodes from
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '60px'}}>
                Staying up late with friends, preparing for exams,
                <br /> snacking, and drawing together are all memories that
                <br /> stand out to me.
              </Content>
              <Question style={{marginLeft: '60px'}}>
                When did you start to feel that your drawing skills
                <br /> had significantly improved?
              </Question>
              <Content style={{marginLeft: '60px'}}>
                To be honest, I experienced a setback before entering this
                <br /> school. However, after experiencing failure, I found that
                I<br /> became less afraid. I felt more relaxed while drawing,
                which
                <br /> allowed me to listen to my teachers more attentively.
                That's
                <br /> when I felt my skills had significantly improved.
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
  background-color: #f0c0d8;
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
