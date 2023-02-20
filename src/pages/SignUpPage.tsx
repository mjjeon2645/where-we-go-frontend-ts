import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import SignUpForm from '../components/SignUpForm';
import useUserStore from '../hooks/useUserStore';

const Container = styled.div`
  padding-top: 5em;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.3em;
  font-weight: 600;
  text-align: center;
  color: #8F8272;
  width: 400px;
  margin: 0 auto;
  padding-block: .6em;
  border-bottom: 1px dashed #8F8272;
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

export default function SignUpPage() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const userStore = useUserStore();

  const navigate = useNavigate();

  const { errorMessage } = userStore;

  const signUp = async (event) => {
    const nickname = event.target[0].value;
    const data = await userStore.requestSignUp(nickname);
    if (data.accessToken) {
      userStore.clearError();
      setAccessToken(data.accessToken);
      navigate('/top3');
    }
  };

  return (
    <Container>
      <Title> 환영합니다!</Title>
      <SignUpForm signUp={signUp} errorMessage={errorMessage} />
      <DownsideBar />
    </Container>
  );
}
