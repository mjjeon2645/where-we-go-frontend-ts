import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import styled from 'styled-components';
import { ChangeEvent } from 'react';

const Form = styled.form`
  margin-top: 3em;  
`;

const GenderSection = styled.section`
  padding-block: 1em;
`;

const Label = styled.label`
  color: #A0A0A0;
  font-weight: 400;
  display: block;
  margin-bottom: .5em;
`;

const Select = styled.select`
  width: 15em;
  height: 3em;
  padding: .5em;
  border: 1px solid #A0A0A0;
`;

const BirthdaySection = styled.section`
  margin-top: 2em;
`;

const BirthdayLabel = styled.label`
  display: inline-block;
  color: #A0A0A0;
  font-weight: 400;
  margin-bottom: .7em;
`;

const BDatePicker = styled(DatePicker)`
  width: 15em;
  height: 3em;
  padding: .5em;
  border: 1px solid #A0A0A0;
`;

const Error = styled.p`
  font-size: .9em;
  color: #ff0000;
  margin-top: 1em;
`;

const Buttons = styled.div`
  position: absolute;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  button:first-child {
    color: #FFF;
    background-color: #A0A0A0;
    width: 400px;
    height: 60px;
    border-radius: 8px;
    border: none;
    margin-bottom: 2em;
  }
  button:last-child {
    background-color: transparent;
    border: none;
    width: 200px;
    margin: 0 auto;
  }
`;

export default function Childform({
  date, errorMessage, setGender, setBirthday, addChild, goBackPrevPage,
}) {
  const handleChildAddSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addChild();
  };

  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setGender(value);
  };

  const handleSetDate = (selectedDate: any) => {
    setBirthday(selectedDate);
  };

  const handleCancelClick = () => {
    goBackPrevPage();
  };

  return (
    <Form onSubmit={handleChildAddSubmit}>
      <GenderSection>
        <Label htmlFor="gender">성별을 선택해주세요.</Label>
        <Select id="gender" onChange={handleGenderChange}>
          <option selected disabled hidden>선택</option>
          <option>왕자님</option>
          <option>공주님</option>
          <option>아직 몰라요</option>
        </Select>
      </GenderSection>
      <BirthdaySection>
        <BirthdayLabel htmlFor="date-picker" data-testid="date-picker">생일(또는 예정일)을 입력해주세요.</BirthdayLabel>
        <BDatePicker
          id="date-picker"
          selected={date}
          onChange={handleSetDate}
          locale={ko}
          maxDate={addDays(new Date(), 300)}
          dateFormat="yyyy-MM-dd"
        />
      </BirthdaySection>
      {errorMessage && (
        <Error>{errorMessage}</Error>
      )}
      <Buttons>
        <button type="submit">완료</button>
        <button type="button" onClick={handleCancelClick}>취소</button>
      </Buttons>
    </Form>
  );
}
