import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import useUserStore from '../hooks/useUserStore';
import kakaoLoginConfig from '../kakaoLogin.config';
import naverLoginConfig from '../naverLogin.config';
import LoginButtons from '../components/LoginButtons';

const Container = styled.div`
  padding-inline: 1em;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 570px;
  height: 1000px;
  border: 2px #E6DDD2 dashed;  
  margin-top: .8em;
  padding-top: 9.5em;
`;

const UpsideImage = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 300px;
  height: 171px;
  z-index: 10;
  background: url('https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670360860/main-upside_rlfjp3.png');
`;

const UpsideBar = styled.div`
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 60px;
  width: 600px;
  background-color: #E6DDD2;
`;

const DownsideBar = styled.div`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 60px;
  width: 600px;
  background-color: #E6DDD2;
`;

const ImagesArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 0 2em 0;
`;

const ImageBox = styled.div`
  width: 340px;
  height: 208px;
  background-image: url('https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670360861/main-logo_xw5e13.png');
`;

const Title = styled.div`
  width: 310px;
  height: 41px;
  margin-top: 5em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  font-weight: 300;
  padding-block: 1.5em;
  margin-bottom: 2.5em;
  p {
      margin-block: .6em;
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');
  const [, setMode] = useLocalStorage('mode', '');

  const navigate = useNavigate();

  useEffect(() => {
    setAccessToken('');
    setMode('');
  }, []);

  const userStore = useUserStore();

  const title = 'https://res.cloudinary.com/ds7ujh0mf/image/upload/v1670362656/main-text-color_cnjdhg.png';

  const naverRedirectUrl = naverLoginConfig.naverAuthUrl;
  const kakaoRedirectUrl = kakaoLoginConfig.kakaoAuthUrl;

  const getTrialAccessAuth = async () => {
    const { accessToken } = await userStore.trialModeLogin();
    setAccessToken(accessToken);
    setMode('trial');
    navigate('/top3');
  };

  return (
    <Container>
      <UpsideImage />
      <UpsideBar />
      <Wrapper>
        <ImagesArea>
          <ImageBox />
          <Title>
            <img src={title} alt="아빠 오늘은 어디가요" />
          </Title>
        </ImagesArea>
        <Text>
          <p>사랑스러운 우리 아이를 위해</p>
          <p>기억에 남을 멋진 장소를 추천해 드릴게요.</p>
          <p>이제 넉넉한 마음만 준비하세요 :&#41;</p>
        </Text>
        <LoginButtons
          naverUrl={naverRedirectUrl}
          kakaoUrl={kakaoRedirectUrl}
          getTrialAccessAuth={getTrialAccessAuth}
        />
      </Wrapper>
      <DownsideBar />
    </Container>
  );
}
