import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Childform from '../components/ChildForm';
import useUserStore from '../hooks/useUserStore';
import { formatDate } from '../utils/dateOfVisitFormatter';

const Container = styled.div`
  padding-top: 5em;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.p`
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

export default function ChildAddPage() {
  const [date, setDate] = useState(new Date());

  const navigate = useNavigate();

  const userStore = useUserStore();
  const { errorMessage } = userStore;

  const setGender = (gender) => {
    userStore.setGender(gender);
  };

  const setBirthday = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = formatDate(selectedDate);
    userStore.setBirthday(formattedDate);
  };

  const addChild = async () => {
    const data = await userStore.addChild();
    if (data) {
      userStore.clearError();
      userStore.clearAddChildState();
      navigate('/mypage');
    }
  };

  const goBackPrevPage = () => {
    userStore.clearError();
    userStore.clearAddChildState();
    navigate(-1);
  };

  return (
    <Container>
      <Title>아이 정보 입력하기</Title>
      <Childform
        date={date}
        errorMessage={errorMessage}
        setGender={setGender}
        setBirthday={setBirthday}
        addChild={addChild}
        goBackPrevPage={goBackPrevPage}
      />
      <DownsideBar />
    </Container>
  );
}
