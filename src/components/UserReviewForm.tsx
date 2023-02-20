import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import styled from 'styled-components';

const DateOfVisitSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1.5em;
  p:first-child {
    color: #A0A0A0;
    font-weight: 400;
    width: 80px;
    margin-bottom: .5em;
  }
  input {
    width: 200px;
    height: 3.5em;
    border: 1px #A0A0A0 solid;
    padding-inline: 1em;
  }
`;

const RateSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1.5em;
  label {
    color: #A0A0A0;
    font-weight: 400;
    width: 70px;
    margin-bottom: .5em;
  }
  select {
    width: 200px;
    height: 40px;
    padding-inline: .5em;
    border: 1px #A0A0A0 solid;
  }
`;

const WritingSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1.5em;
  label {
    color: #A0A0A0;
    font-weight: 400;
    margin-bottom: .5em;
  }
  input {
    width: 100%;
    height: 3.5em;
    border: 1px #A0A0A0 solid;
    padding-inline: 1em;
    ::placeholder {
      color: #D8D8D8
    }
  }
  span {
    font-size: .8em;
    font-weight: 300;
    color: #A0A0A0;
    width: 100%;
    margin-top: .8em;
    text-align: right;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  button {
    font-size: .8em;
    padding-block: 1.3em;
    border: none;
    border-radius: 8px;
  }
  button:first-child {
    color: #FFF;
    width: 100%;
    background-color: #005D82;
    :hover {
      background-color: #0083B7;
    }
  }
  button:last-child {
    width: 150px;
    font-weight: 300;
    background-color: #FFF;
  }
`;

const Message = styled.p`
  color: #A0A0A0;
  font-weight: 300;
  margin-top: 3em;
  font-size: .8em;
`;

const Error = styled.p`
  font-size: .9em;
  color: #ff0000;
  margin-top: .7em;
`;

export default function UserReviewForm({
  writeReview, setDateOfVisit, setRate, setMyReview, cancelWriting, startDate, myReview,
  errorMessage, isDateOfVisitEmpty, isRateEmpty, isReviewEmpty,
}) {
  const handleUserReviewSubmit = (event) => {
    event.preventDefault();

    writeReview(event);
  };

  const handleSetStartDate = (date) => {
    setDateOfVisit(date);
  };

  const handleRateChange = (event) => {
    const selectedRate = event.target.value;
    setRate(selectedRate);
  };

  const handleReviewChange = (event) => {
    const body = event.target.value;
    setMyReview(body);
  };

  const handleCancelWritingClick = () => {
    cancelWriting();
  };

  return (
    <div>
      <form onSubmit={handleUserReviewSubmit}>
        <DateOfVisitSection>
          <p>방문일</p>
          <DatePicker
            selected={startDate}
            onChange={handleSetStartDate}
            locale={ko}
            maxDate={addDays(new Date(), 0)}
            dateFormat="yyyy-MM-dd"
          />
          {isDateOfVisitEmpty && (
            <Error>{errorMessage}</Error>
          )}
        </DateOfVisitSection>
        <RateSection>
          <label htmlFor="rate-select">평점</label>
          <select id="rate-select" onChange={handleRateChange}>
            <option defaultValue hidden>선택</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️</option>
          </select>
          {isRateEmpty && (
            <Error>{errorMessage}</Error>
          )}
        </RateSection>
        <WritingSection>
          <label htmlFor="input-review">한 줄 리뷰</label>
          <input
            id="input-review"
            placeholder="최소 10자 이상 적어주세요"
            minLength="10"
            maxLength="50"
            onChange={handleReviewChange}
          />
          <span>
            {myReview.length || 0}
            {' '}
            / 50자
          </span>
          {isReviewEmpty && (
            <Error>{errorMessage}</Error>
          )}
        </WritingSection>
        <Buttons>
          <button type="submit">등록하기</button>
          <button type="button" onClick={handleCancelWritingClick}>취소하기</button>
        </Buttons>
      </form>
      <Message>· 욕설이나 악의적 리뷰는 관리자에 의해 가림처리 될 수 있습니다.</Message>
    </div>
  );
}
