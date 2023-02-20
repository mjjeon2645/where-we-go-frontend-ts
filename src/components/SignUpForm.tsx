import styled from 'styled-components';

const Container = styled.form`
  margin-top: 5em;
  width: 400px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #A0A0A0;
  display: block;
  margin-bottom: .7em;
`;

const InputArea = styled.input`
  font-size: 1em;
  padding-inline: .6em;
  width: 100%;
  height: 60px;
  border: ${(props) => (props.error ? '1px solid #F00' : '1px solid #A0A0A0')};
  ::placeholder {
    color: #D8D8D8;
  }
`;

const ErrorMessage = styled.p`
  font-size: .8em;
  color: #ff0000;
  padding-top: 1em;
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #FFF;
  font-weight: 600;
  background-color: ${(props) => (props.error ? '#A0A0A0' : '#005D82')};
  border: none;
  border-radius: 8px;
  width: 400px;
  height: 60px;
  :hover {
   background-color: #0083B7; 
  }
`;

export default function SignUpForm({ signUp, errorMessage }) {
  const handleMakingNicknameSubmit = (event) => {
    event.preventDefault();
    signUp(event);
  };

  return (
    <Container onSubmit={handleMakingNicknameSubmit}>
      <Label htmlFor="nickname">사용하실 닉네임을 입력해주세요</Label>
      <InputArea
        id="nickname"
        type="text"
        placeholder="한글, 영어, 숫자 3~7자 이내"
        error={errorMessage}
      />
      {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
      <SubmitButton type="submit" error={errorMessage}>다음으로</SubmitButton>
    </Container>
  );
}
