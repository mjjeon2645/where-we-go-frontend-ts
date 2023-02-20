import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyNicknameForm from '../components/MyNicknameForm';
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

export default function MyNicknameChangePage() {
  const navigate = useNavigate();

  const userStore = useUserStore();

  const { errorMessage } = userStore;

  const modifyNickname = async (event) => {
    const nickname = event.target[0].value;
    const data = await userStore.changeNickname(nickname);
    if (data) {
      navigate('/mypage');
    }
  };

  const goPrevPage = () => {
    userStore.clearError();
    navigate(-1);
  };

  return (
    <Container>
      <Title>닉네임 변경하기</Title>
      <MyNicknameForm
        modifyNickname={modifyNickname}
        goPrevPage={goPrevPage}
        errorMessage={errorMessage}
      />
      <DownsideBar />
    </Container>
  );
}
