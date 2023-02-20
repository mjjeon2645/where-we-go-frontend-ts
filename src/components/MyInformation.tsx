/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1em;  
`;

const Title = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-block: 1em;
`;

const Wrapper = styled.article`
  padding-inline: 2em;
`;

const Nickname = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  height: 5em;
  p:first-child {
    font-weight: 500;
  }
  span {
    color: #0E0E0E;
    font-weight: 300;
  }
`;

const NicknameModifyButton = styled.button`
  color: #8F8272;
  background-color: #E6DDD2;
  width: 8em;
  height: 3em;
  margin-left: 1em;
  border-radius: 4px;
  border: none;
`;

const Email = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  height: 5em;
  p:first-child {
    font-weight: 500;
  }
  p:last-child {
    color: #0E0E0E;
    font-weight: 300;
  }
`;

const SocialLogin = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.2em;
  height: 5em;
  p:first-child {
    font-weight: 500;
  }
  p:last-child {
    color: #0E0E0E;
    font-weight: 300;
  }  
`;

export default function MyInformation({ userInformation, goToModifyNickname }) {
  const handleNicknameChangeClick = () => {
    goToModifyNickname();
  };

  return (
    <Container>
      {userInformation.length !== 0 ? (
        <Wrapper>
          <Title>내 정보</Title>
          <Nickname>
            <p>닉네임</p>
            <div>
              <span>{userInformation.nickname}</span>
              <NicknameModifyButton
                type="button"
                onClick={handleNicknameChangeClick}
              >
                변경
              </NicknameModifyButton>
            </div>
          </Nickname>
          <Email>
            <p>이메일</p>
            <p>{userInformation.email}</p>
          </Email>
          <SocialLogin>
            <p>소셜 로그인 정보</p>
            {userInformation.authBy === 'naver' ? (
              <p>네이버 로그인</p>
            ) : (
              userInformation.authBy === 'kakao' ? (
                <p>카카오 로그인</p>
              ) : (
                <p>체험모드</p>
              )
            )}
          </SocialLogin>
        </Wrapper>
      ) : (
        <p>now loading...</p>
      )}
    </Container>
  );
}
