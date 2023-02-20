import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.4em;
  font-weight: 500;
`;

const LoginButtonsArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5em;
  width: 100%;
  
  div {
    margin-inline: .6em;
  }
  p {
    font-size: .6em;
    font-weight: 300;
    margin-top: 1em;
  }
`;

const ButtonSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .trial {
    width: 58px;
  }
`;

const KakaoLoginImage = styled.div`
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url('https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670366595/kakao-login-circle_fewf79.png');
  background-size: cover;
`;

const NaverLoginImage = styled.div`
  display: inline-block;
  width: 56px;
  height: 56px;
  background: url('https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670366613/naver-login-circle_ej0uor.png');
  background-size: cover;
`;

const TrialLoginImage = styled.button`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: none;
  background-color: #E6DDD2;
  background-size: cover;
`;

const Heart = styled.div`
  display: inline-block;
  width: 24px;
  height: 21px;
  background: url('https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670367409/Vector_zpgqtw.png') no-repeat;
`;

export default function LoginButtons({ naverUrl, kakaoUrl, getTrialAccessAuth }) {
  const handleTrialClick = () => {
    getTrialAccessAuth();
  };

  return (
    <div>
      <Title>SNS 간편 로그인</Title>
      <LoginButtonsArea>
        <ButtonSet>
          <a href={kakaoUrl}>
            <KakaoLoginImage />
          </a>
          <p>카카오톡</p>
        </ButtonSet>
        <ButtonSet>
          <a href={naverUrl}>
            <NaverLoginImage />
          </a>
          <p>네이버</p>
        </ButtonSet>
        <ButtonSet>
          <div className="trial">
            <TrialLoginImage type="button" data-testid="trial-button" onClick={handleTrialClick}>
              <Heart />
            </TrialLoginImage>
            <p>둘러보기</p>
          </div>
        </ButtonSet>
      </LoginButtonsArea>
    </div>
  );
}
