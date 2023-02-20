import styled from 'styled-components';

const Container = styled.article`
  margin-block: 5em;
`;

const Title = styled.p`
  color: #005D82;
  font-size: 1.2em;
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1.5em;
`;

const MyReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  button {
    align-self: end;
  }
`;

const NoReviewMessage = styled.div`
  p {
    font-weight: 300;
    line-height: 1.2em;
  }
`;

const WriteButton = styled.button`
  font-size: 1em;
  color: #FFF;
  background-color: #005D82;
  margin-top: 2em;
  border: none;
  border-radius: 8px;
  padding: .8em 1em;
  :hover {
    background-color: #0083B7;
  }
`;

const MyReviewExist = styled.div`
  strong {
    font-weight: bold;
  }
`;

const Body = styled.p`
  font-size: .9em;
  font-weight: 300;
  line-height: 1.3em;
  margin-block: .8em;
`;

const DeleteButton = styled.div`
  text-align: right;
  button {
    color: #FFF;
    background-color: #A0A0A0;
    border: none;
    border-radius: 4px;
    padding: .6em 1.2em;
  }
`;

export default function MyReview({ myReviewAtThePlace, goToReviewForm, deleteReview }) {
  const handleGoToWritingReviewClick = () => {
    goToReviewForm();
  };

  const handleMyReviewDeleteClick = (reviewId) => {
    deleteReview(reviewId);
  };

  return (
    <Container>
      <Title>내가 남긴 리뷰</Title>
      {myReviewAtThePlace === null || Object.keys(myReviewAtThePlace).length === 0 ? (
        <MyReviewSection>
          <NoReviewMessage>
            <p>아직 리뷰를 남기지 않으셨네요!</p>
            <p>마음에 드신 장소라면 다른 회원님들께도 추천해주세요.</p>
          </NoReviewMessage>
          <WriteButton
            type="button"
            onClick={handleGoToWritingReviewClick}
          >
            리뷰 작성하기
          </WriteButton>
        </MyReviewSection>
      ) : (
        <MyReviewExist>
          <strong>
            {myReviewAtThePlace.nickname}
            {' '}
          </strong>
          <span>
            (평점:
            {' '}
            {myReviewAtThePlace.rate}
            점,
            {' '}
            방문일:
            {' '}
            {myReviewAtThePlace.dateOfVisit}
            )
          </span>
          <Body>{myReviewAtThePlace.body}</Body>
          <DeleteButton>
            <button type="button" onClick={() => handleMyReviewDeleteClick(myReviewAtThePlace.id)}>삭제하기</button>
          </DeleteButton>
        </MyReviewExist>
      )}
    </Container>
  );
}
