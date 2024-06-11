import React from "react";
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import bookmark from "../../assets/interview/bookmark.svg";
import menu from "../../assets/interview/menu.svg";
import pic from "../../assets/interview/green/pic.svg";
import subtitle from "../../assets/interview/green/subtitle.svg";
import interview from "../../assets/interview/green/interview.svg";

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
                작품 활동을 할 때 어떤 감정이 드나요? 그런 감정에 작품
                <br />에 녹아드는 경우도 있나요?
              </Question>
              <Content>
                작품 활동을 할 때는 오래 하다 보니 계속해서 어떤 감정이 든다기
                <br /> 보다는 살짝 노동의 느낌이 들어요. 아이디어 짤 때는
                '이번에 진짜
                <br /> 잘하고 싶다' 이런 기대감도 들고 어딘가 불만족의 느낌, 이
                아이디
                <br />
                어가 좀 별로라는 느낌도 들어요.
                <br />
                그리고 끝나고 나서는 성취감이 엄청 느껴지는 것 같아요. 그래서
                <br /> 잘하고 싶다 보니까 계속해서 만지게 되고, 이런 식으로
                완성도가
                <br /> 높아지는 것 같아요.
              </Content>
              <img src={pic} alt="pic" className="pic" />
            </Left>
            <Right>
              <img src={subtitle} alt="subtitle" className="subtitle" />
              <Question style={{ paddingTop: "50px" }}>
                What emotions do you feel when engaging in
                <br /> artistic activities? Do those emotions influence
                <br /> your work?
              </Question>
              <Content>
                When I'm working on a project, I feel like it's a bit of a labor
                <br /> rather than a constant feeling of emotion because I've
                <br /> been doing it for a long time. When I come up with an
                <br /> idea, I have expectations like, 'I really want to do well
                this
                <br /> time,' and I also have a feeling of dissatisfaction, that
                this
                <br /> idea is not good enough.
                <br />
                But after when I'm done, I feel a great sense of
                <br /> accomplishment, so I want to do well, so I keep working
                it, <br />
                and I think it becomes more complete in this way.
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
                제가 어렸을 때 (유치원 때) 학원을 안 다니고 미술학원
                <br /> 밖에 안 다녔어요. 그 때 자연스럽게 집에서 그림을 많<br />
                이 그렸는데, 그런 과정에서 제가 또래보다 잘하게 되다
                <br /> 보니 흥미를 갖게 되었어요.
              </Content>
              <Question style={{ marginTop: "150px" }}>
                What sparked your interest in art?
                <br />
                Was there a specific moment when you
                <br /> first became interested in art?
              </Question>
              <Content>
                When I was young, I didn't attend any academies
                <br /> except for art academies during kindergarten. I<br />
                naturally spent a lot of time drawing at home during
                <br /> that period, and as I continued, I became better
                <br /> than my peers. That's when I started to develop an
                <br /> interest in art.
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
                집에서 짐 정리하다가 진짜 어렸을 때 그린 걸 본 적이 있는데,
                <br /> 웃겨서 웃었던 기억이 있어요. 그리고 이 {archiveText}에
                <br /> 작품을 보내기 위해 정리하며 작품들을 보면 제가 어렸을 때
                <br /> 주로 어떤 색감을 썼는지, 어떤 식으로 성장을 했는지 그런
                게<br /> 보였어요.
              </Content>
              <Question>
                Have you ever looked back at your old artwork?
                <br /> When you see your past work in the
                <br /> {archiveEngText}, what emotions do you feel?
                <br /> Do you feel differently now compared to back then?
              </Question>
              <Content>
                I've had the experience of coming across my old artworks
                <br /> while cleaning up at home, and sometimes they make me
                <br /> laugh or smile nostalgically. Also, when I was organizing
                my
                <br /> works to submit them for the {archiveEngText}, I could
                <br /> see how I used colors or how I've grown as an artist over
                time.
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
                아무 생각 없이 그린 그림들도 저의 평소, 습관 등이 담기는
                <br /> 것이니까 습작을 통해 작가의 정체성과 고유성을 찾을 수
                <br />
                있다고 생각해요.
              </Content>
              <Question style={{ paddingTop: "30px" }}>
                Do you believe that through the sketches you've <br />
                drawn over time, you can find your own identity <br />
                and uniqueness as an artist?
              </Question>
              <Content>
                Even the sketches I draw without much thought still
                <br /> reflect my habits or tendencies. So, yes, I believe
                <br /> that through sketches, I can discover the identity
                <br /> and uniqueness of an artist.
              </Content>
            </Left>
            <Right style={{paddingLeft: '30px'}}>
              <Question>
                {archiveText} 프로그램에 참여하게 된 계기는 <br />
                무엇인가요? 여러분은 어떤 생각으로 참여하였고 이 <br />
                프로그램이 여러분께 어떤 의미를 갖나요?
              </Question>
              <Content>
                엄마가 먼저 참여하자고 해서 하게 되었어요. 그동안 그린 그림들
                <br />을 정리하기 위해 참여했는데 그 과정이 재미있었어요.
              </Content>
              <Question style={{ paddingTop: "25px" }}>
                What was your motivation for participating in the <br />
                {archiveEngText} program? What thoughts did <br /> you have when
                participating, and what significance <br /> does this program
                hold for you?
              </Question>
              <Content>
                My mom suggested participating. It was interesting to go
                <br /> through the process of organizing the artworks I've
                created
                <br /> over time.
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
                되게 어렸을 때 미술학원에서 그린 어떤 도시 풍경의 그림이 있
                <br />
                는데, 그걸 저희 아빠가 되게 좋아하셔서 배경화면도 하셨었어
                <br />
                요. 그 그림은 색감을 예쁘게 써서 그걸 보면 ‘내가 이런 잠재력
                <br />이 있었구나’, 이런 걸 느낄 수 있어서 그 작품을 가장
                아낍니다.
              </Content>
              <Question style={{ paddingTop: "90px" }}>
                What artwork do you most want to promote?
                <br />
                If you have a favorite piece, please explain the
                <br /> reason briefly.
              </Question>
              <Content>
                There's a cityscape I painted when I was very young
                <br /> at an art academy. My dad loved it so much that he
                <br /> even used it as his mobile wallpaper. I used beautiful
                <br /> colors in that painting, and whenever I look at it, I
                feel
                <br /> like I had some hidden talent back then.
                <br />
                That's why I cherish this artwork the most.
              </Content>
            </Left>
            <Right style={{paddingLeft: '20px'}}>
              <Question>
                아티스트로서 앞으로 추구하고 싶은 예술 활동이나 <br />
                목표가 있다면 무엇인가요?
              </Question>
              <Content>
                저는 제 작품에 고유한 특징이 생겼으면 좋겠어요. 지금은 제가
                <br /> 색깔을 알록달록하게 쓰는데 제가 그걸 좋아하기보다는
                작품을
                <br /> 그리다 보니까 자연스럽게 되는 거라서 그런 거보다는 제가
                <br />
                작품을 완성했을 때 만족스럽고 제가 원하는 저만의 느낌이
                <br />
                나올 수 있는 작품을 그리고 싶어요. 그리고 그런 것을 주제로
                <br /> 전시(개인전)도 하고 싶어요.
              </Content>
              <Question style={{ paddingTop: "70px" }}>
                What artistic activities or goals do you want <br />
                to pursue in the future?
              </Question>
              <Content>
                I hope to develop a unique characteristic in my artwork.
                <br /> Currently, I use a lot of bright colors, but it's not
                because I<br /> particularly like them; it's just how my work
                naturally
                <br /> evolves. Instead, I want to feel a deep satisfaction when
                I<br /> complete a piece of art, knowing that it truly reflects
                my
                <br /> personal style and emotions. Through these things, I want
                <br /> to hold solo exhibitions focusing on themes that allow me
                <br /> to express myself authentically.
              </Content>
            </Right>
          </Body>
          <Body>
            <Left>
              <Question>예원학교에 입학하게 된 계기가 무엇인가요?</Question>
              <Content>
                이것도 엄마가 먼저 말씀하셔서 지원하게 되었어요. 입시를 시작하니
                <br /> 이걸 그만두기도 어렵고 예원학교 찾아보니까 되게 멋있고
                축제도 많<br />
                아서 재밌을 것 같아서 지원했어요. ‘미전도 어렸을 때 많이 해보면
                나<br />
                중에 도움이 되지 않을까?’ 이런 생각도 들어서 입학하게
                되었습니다.
              </Content>
              <Question style={{ paddingTop: "125px" }}>
                예원학교에서 기억나는 에피소드가 있을까요?
              </Question>
              <Content>
                학교에서 처음으로 미전 전시했을 때 강당에서 다 같이 한 미전
                <br /> 오픈식이 있었는데, 그게 되게 인상 깊었어요. 처음 겪는
                거니까
                <br />
                요. 오픈식 말고도 축제도 많이 해서 그런 것도 기억이 납니다.
              </Content>
              <Question style={{ paddingTop: "100px" }}>
                언제부터 그림 실력이 확연히 늘었다고 느끼시나요?
              </Question>
              <Content>
                제가 어렸을 때는 부담없이 순수하게 발전하고 싶다는 생각으로만
                <br /> 그렸기에 초등학교 저학년에 한번 확 성장을 했어요. 그리고
                입시
                <br /> 때도 ‘진짜 이것만큼은 엄청나게 잘하고 싶다’해서 색깔 쓰는
                걸 상<br />
                당히 신경 쓴 적이 있었는데, 그때도 실력이 확 늘었다고 생각해요.
              </Content>
            </Left>
            <Right>
              <Question style={{marginLeft: '80px'}}> 
                What was the reason for your admission to
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '80px'}}>
                It was actually my mom who suggested I give it a try. I didn't
                <br /> have any particular plans, but when it came to taking the
                <br /> entrance exam, I hesitated to quit drawing altogether.
                Then,
                <br /> as I researched Yewon School, I found it to be really
                <br /> impressive with its various festivals and events. I
                thought it
                <br /> would be a fun place to be. Also, I figured that
                practicing art
                <br /> exhibition at Yewon School could be beneficial in the
                long run.
                <br /> So, that's why I decided to apply.
              </Content>
              <Question style={{marginLeft: '80px'}}>
                Do you have any memorable episodes from
                <br />
                Yewon School?
              </Question>
              <Content style={{marginLeft: '80px'}}>
                One memorable moment was when we had our first art
                <br /> exhibition in the school auditorium. It was the opening
                <br /> ceremony for the exhibition, and it left a lasting
                impression
                <br /> on me because it was the first time experiencing
                something
                <br /> like that. Apart from that, I also have fond memories of
                the
                <br /> various festivals and events that the school organized.
              </Content>
              <Question style={{marginLeft: '80px'}}>
                When did you start to feel that your drawing skills
                <br /> had significantly improved?
              </Question>
              <Content style={{marginLeft: '80px'}}>
                I felt a significant improvement in my drawing skills when I was
                <br /> in elementary school. Back then, I drew frequently
                without any
                <br /> pressure, purely wanting to improve. Additionally, during
                the
                <br /> entrance exam period, I made a conscious effort to focus
                on
                <br /> color usage, aiming to excel in that aspect. I believe
                that period
                <br /> also marked a substantial improvement in my skills.
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
  width: 1550px;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #bee4b4;
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
  height: 4100px;
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
