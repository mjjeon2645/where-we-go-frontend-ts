import styled from 'styled-components';

const Container = styled.form`
  margin-top: 5em;
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

const Buttons = styled.div`
  bottom: 20%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  color: #FFF;
  font-weight: 600;
  background-color: #A0A0A0;
  border: none;
  border-radius: 8px;
  width: 400px;
  height: 60px;
`;

const CancelButton = styled.button`
  position: absolute;
  bottom: 13%;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: bold;
  background-color: transparent;
  padding: .5em 1em;
  border: none;
  border-radius: 8px;
  width: 400px;
  height: 60px;
`;

export default function MyNicknameForm({ modifyNickname, goPrevPage, errorMessage }) {
  const handleNicknameChangeSubmit = (event) => {
    event.preventDefault();
    modifyNickname(event);
  };

  const handleCancelClick = () => {
    goPrevPage();
  };

  return (
    <div>
      <Container onSubmit={handleNicknameChangeSubmit}>
        <Label htmlFor="nickname">원하시는 닉네임을 입력해주세요.</Label>
        <InputArea id="nickname" type="text" placeholder="한글, 영어, 숫자 3~7자 이내" error={errorMessage} />
        {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
        <Buttons>
          <SubmitButton type="submit">변경</SubmitButton>
          <CancelButton type="button" onClick={handleCancelClick}>취소</CancelButton>
        </Buttons>
      </Container>
    </div>
  );
}
